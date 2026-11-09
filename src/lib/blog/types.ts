export type BlogStatus = "draft" | "published" | "scheduled";
export interface BlogPost {
 id: string; slug: string; title: string; contentHtml: string; metaTitle: string; metaDescription: string;
 featuredImage: string; imageAlt: string; authorName: string; authorBio: string; categories: string[];
 status: BlogStatus; scheduledAt: string | null; publishedAt: string | null; createdAt: string; updatedAt: string; deletedAt: string | null;
}
export type BlogInput = Omit<BlogPost, "id" | "createdAt" | "updatedAt" | "publishedAt" | "deletedAt">;
