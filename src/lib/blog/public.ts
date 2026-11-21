import "server-only";
import { researchPosts } from "@/data/research";
import { findBlog, listBlogs, listBlogSitemapEntries } from "./store";
import type { BlogPost } from "./types";

const researchBySlug = new Map(researchPosts.map(post => [post.slug, post]));

export async function listPublicBlogs() {
  const existing = await listBlogs().catch(() => []);
  return [...researchPosts, ...existing.filter(post => !researchBySlug.has(post.slug))];
}

export async function findPublicBlog(slug: string) {
  return researchBySlug.get(slug) ?? findBlog(slug);
}

export async function relatedPublicBlogs(post: BlogPost) {
  const posts = researchBySlug.has(post.slug) ? researchPosts : await listPublicBlogs();
  const candidates = posts.filter(item => item.id !== post.id);
  const sameTopic = (item: BlogPost) => item.categories.some(category => post.categories.includes(category));
  return [...candidates.filter(sameTopic), ...candidates.filter(item => !sameTopic(item))].slice(0, 3);
}

export async function listPublicBlogSitemapEntries() {
  const existing = (await listBlogSitemapEntries()).filter(post => !researchBySlug.has(post.slug));
  return [...researchPosts.map(post => ({ slug: post.slug, lastModified: new Date(post.updatedAt) })), ...existing];
}
