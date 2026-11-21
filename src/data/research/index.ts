import { aiResearch } from "./ai";
import { conversionResearch } from "./conversion";
import { creativeResearch } from "./creative";
import { searchResearch } from "./search";
import type { BlogPost } from "@/lib/blog/types";

const date = "2026-11-22T00:00:00+05:30";

export const researchPosts: BlogPost[] = [
  ...searchResearch,
  ...aiResearch,
  ...creativeResearch,
  ...conversionResearch,
].map(article => ({
  id: "research:" + article.slug,
  slug: article.slug,
  title: article.title,
  contentHtml: article.body,
  metaTitle: article.title,
  metaDescription: article.description,
  featuredImage: "",
  imageAlt: "",
  authorName: "Sparklines Studio",
  authorBio: "Sparklines Studio documents how it scopes, checks and measures creative and search projects.",
  categories: [article.category],
  status: "published",
  scheduledAt: null,
  publishedAt: date,
  createdAt: date,
  updatedAt: date,
  deletedAt: null,
}));
