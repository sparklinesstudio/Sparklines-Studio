import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { findPublicBlog, relatedPublicBlogs } from "@/lib/blog/public";
import { blogThumbnail } from "@/lib/blog/thumbnail";
import { serviceMetadata } from "@/lib/serviceMetadata";
import { absoluteUrl } from "@/lib/structuredData";
import "@/components/blog/blog.css";
import "@/components/blog/journal.css";

export const dynamic = "force-dynamic";
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await findPublicBlog((await params).slug);
  if (!post) return { title: "Article not found", robots: { index: false, follow: true } };
  const copy = { title: post.metaTitle || post.title, description: post.metaDescription };
  const base = serviceMetadata({ ...copy, slug: "blogs/" + post.slug }, copy);
  const image = blogThumbnail(post);
  const imageUrl = absoluteUrl(image.src);
  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: post.publishedAt || post.createdAt,
      modifiedTime: post.updatedAt,
      authors: [post.authorName],
      images: [{ url: imageUrl, alt: image.alt || "Sparklines Studio editorial pattern" }],
    },
    twitter: { ...base.twitter, card: "summary_large_image", images: [imageUrl] },
  };
}

export default async function ArticlePage({ params }: Props) {
  const post = await findPublicBlog((await params).slug);
  if (!post) notFound();
  return <BlogArticle post={post} related={await relatedPublicBlogs(post)} />;
}
