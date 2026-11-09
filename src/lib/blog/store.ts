import "server-only";
import dns from "node:dns";
import { MongoClient, type Filter, type WithId } from "mongodb";
import { cache } from "react";
import { cleanHtml, textContent } from "./content";
import type { BlogInput, BlogPost } from "./types";

try {
  if (typeof dns.setServers === "function") {
    dns.setServers(["8.8.8.8", "1.1.1.1"]);
  }
} catch {
  // ignore in constrained runtime environments
}

type BlogDocument = BlogInput & {
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date | null;
  deletedAt: Date | null;
};

const state = globalThis as typeof globalThis & {
  studioMongo?: Promise<MongoClient>;
  studioBlogIndexes?: Promise<unknown>;
};

export class BlogError extends Error {
  constructor(message: string, public status = 400) {
    super(message);
  }
}

export const blogConfigured = () =>
  Boolean(process.env.MONGODB_URI && !process.env.MONGODB_URI.includes("<"));

export async function blogsCollection() {
  if (!blogConfigured()) throw new BlogError("Blog storage is not configured yet.", 503);
  if (!state.studioMongo) {
    state.studioMongo = new MongoClient(process.env.MONGODB_URI!, {
      serverSelectionTimeoutMS: 8000,
      connectTimeoutMS: 8000,
      maxPoolSize: 10,
    })
      .connect()
      .catch((error) => {
        state.studioMongo = undefined;
        throw error;
      });
  }
  const client = await state.studioMongo;
  const collection = client.db(process.env.MONGODB_DB || "sparklines_blog").collection<BlogDocument>("blogs");

  if (!state.studioBlogIndexes) {
    state.studioBlogIndexes = Promise.all([
      collection.createIndex({ slug: 1 }, { unique: true }),
      collection.createIndex({ deletedAt: 1, status: 1, scheduledAt: 1, publishedAt: -1 }),
    ]).catch((error) => {
      state.studioBlogIndexes = undefined;
      throw error;
    });
  }
  await state.studioBlogIndexes;
  return collection;
}

export function publicFilter(): Filter<BlogDocument> {
  return {
    deletedAt: null,
    $or: [
      { status: "published" },
      { status: "scheduled", scheduledAt: { $lte: new Date().toISOString() } },
    ],
  };
}

function serialize(doc: WithId<BlogDocument>): BlogPost {
  const { _id, ...data } = doc;
  return {
    ...data,
    id: _id.toString(),
    createdAt: new Date(data.createdAt).toISOString(),
    updatedAt: new Date(data.updatedAt).toISOString(),
    publishedAt: data.publishedAt
      ? new Date(data.publishedAt).toISOString()
      : data.status === "scheduled"
      ? data.scheduledAt
      : null,
    deletedAt: data.deletedAt ? new Date(data.deletedAt).toISOString() : null,
  };
}

export async function listBlogs(admin = false): Promise<BlogPost[]> {
  if (!blogConfigured() && !admin) return [];
  try {
    const collection = await blogsCollection();
    return (
      await collection
        .find(admin ? {} : publicFilter())
        .sort({ publishedAt: -1, createdAt: -1 })
        .toArray()
    ).map(serialize);
  } catch (error) {
    if (!admin) {
      console.error("Error retrieving blogs:", error);
      return [];
    }
    throw error;
  }
}

export const findBlog = cache(async (slug: string, admin = false): Promise<BlogPost | null> => {
  if (!blogConfigured()) return null;
  try {
    const collection = await blogsCollection();
    const doc = await collection.findOne(admin ? { slug } : { ...publicFilter(), slug });
    return doc ? serialize(doc) : null;
  } catch (error) {
    if (!admin) {
      console.error("Error finding blog:", error);
      return null;
    }
    throw error;
  }
});

export function validateBlog(value: unknown): BlogInput {
  if (!value || typeof value !== "object") throw new BlogError("Invalid article.");
  const b = value as Record<string, unknown>;
  const str = (key: string, max: number, required = false) => {
    const v = typeof b[key] === "string" ? (b[key] as string).trim() : "";
    if (v.length > max || (required && !v)) throw new BlogError(`${key} is missing or too long.`);
    return v;
  };

  const title = str("title", 180, true);
  const slug = str("slug", 180, true);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    throw new BlogError("Use lowercase words separated by hyphens for the URL slug.");
  }

  const contentHtml = cleanHtml(str("contentHtml", 120000, true));
  if (!textContent(contentHtml)) throw new BlogError("Write some article content first.");

  const status = b.status;
  if (!["draft", "published", "scheduled"].includes(String(status))) {
    throw new BlogError("Choose a valid publishing status.");
  }

  const scheduledAt = str("scheduledAt", 40);
  if (
    status === "scheduled" &&
    (!scheduledAt || !Number.isFinite(Date.parse(scheduledAt)) || Date.parse(scheduledAt) <= Date.now())
  ) {
    throw new BlogError("Choose a future publishing date.");
  }

  const featuredImage = str("featuredImage", 2000);
  if (featuredImage && !/^https?:\/\//i.test(featuredImage) && !featuredImage.startsWith("/")) {
    throw new BlogError("Enter a valid image URL or upload to Cloudinary.");
  }

  const categories = Array.isArray(b.categories)
    ? [...new Set(b.categories.filter((v): v is string => typeof v === "string").map((v) => v.trim()).filter(Boolean))]
    : [];
  if (categories.length > 10 || categories.some((c) => c.length > 40)) {
    throw new BlogError("Use up to 10 categories, each under 40 characters.");
  }

  return {
    title,
    slug,
    contentHtml,
    metaTitle: str("metaTitle", 180) || title,
    metaDescription: str("metaDescription", 320) || textContent(contentHtml).slice(0, 160),
    featuredImage,
    imageAlt: str("imageAlt", 200) || title,
    authorName: str("authorName", 100) || "Sparklines Studio",
    authorBio: str("authorBio", 500),
    categories,
    status: status as BlogInput["status"],
    scheduledAt: status === "scheduled" ? new Date(scheduledAt).toISOString() : null,
  };
}

export async function saveBlog(input: BlogInput, oldSlug?: string) {
  const collection = await blogsCollection();
  const now = new Date();
  if (oldSlug) {
    const previous = await collection.findOne({ slug: oldSlug, deletedAt: null });
    if (!previous) throw new BlogError("Article not found.", 404);
    await collection.updateOne(
      { _id: previous._id },
      {
        $set: {
          ...input,
          updatedAt: now,
          publishedAt: input.status === "published" ? previous.publishedAt || now : previous.publishedAt,
        },
      }
    );
  } else {
    await collection.insertOne({
      ...input,
      createdAt: now,
      updatedAt: now,
      publishedAt: input.status === "published" ? now : null,
      deletedAt: null,
    });
  }
  return input.slug;
}
