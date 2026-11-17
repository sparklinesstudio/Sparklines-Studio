import { NextResponse } from "next/server";
import { authorize, blogApiError, readBody } from "@/lib/blog/api";
import { blogDatabase, listBlogs, BlogError } from "@/lib/blog/store";

export async function GET(request: Request) {
  const denied = await authorize(request);
  if (denied) return denied;
  try {
    const db = await blogDatabase();
    const [entries, posts] = await Promise.all([
      db.collection("blogTaxonomy").find().toArray(),
      listBlogs(true),
    ]);
    return NextResponse.json(
      {
        authors: [
          ...new Set([
            "Sparklines Studio",
            ...entries
              .filter((e) => e.kind === "author")
              .map((e) => String(e.name)),
            ...posts.map((p) => p.authorName),
          ]),
        ],
        categories: [
          ...new Set([
            ...entries
              .filter((e) => e.kind === "category")
              .map((e) => String(e.name)),
            ...posts.flatMap((p) => p.categories),
          ]),
        ],
      },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    return blogApiError(error);
  }
}

export async function POST(request: Request) {
  const denied = await authorize(request, true);
  if (denied) return denied;
  try {
    const body = await readBody(request);
    const name = typeof body.name === "string" ? body.name.trim() : "";
    if (
      !["author", "category"].includes(body.kind) ||
      !name ||
      name.length > (body.kind === "category" ? 40 : 100)
    )
      throw new BlogError("Enter a valid name.");
    const db = await blogDatabase();
    await db
      .collection("blogTaxonomy")
      .updateOne(
        { kind: body.kind, name },
        { $set: { kind: body.kind, name } },
        { upsert: true },
      );
    return NextResponse.json({ name }, { status: 201 });
  } catch (error) {
    return blogApiError(error);
  }
}
