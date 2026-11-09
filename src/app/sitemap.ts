import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/structuredData";
import { kolkataServices } from "@/data/kolkataServices";
import { SERVICES_CATALOG } from "@/data/servicesData";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { listBlogs } from "@/lib/blog/store";

export const dynamic = "force-dynamic";

// Canonical, indexable pages only: omit route aliases, form confirmations and admin pages.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "/",
    "/services",
    "/work",
    "/blogs",
    "/contact",
    "/about",
    "/privacy-policy",
    "/terms-and-conditions",
    "/refund-policy",
    "/seo-agency-kolkata",
    "/video-production-agency-kolkata",
    ...kolkataServices.map((s) => "/" + s.slug),
    ...SERVICES_CATALOG.map((s) => "/services/" + s.slug),
    ...PORTFOLIO_DATA.map((p) => p.customHref || "/work/" + p.id),
  ];

  const staticEntries: MetadataRoute.Sitemap = [...new Set(staticRoutes)].map((route) => ({
    url: absoluteUrl(route),
    changeFrequency: route === "/blogs" ? ("weekly" as const) : ("monthly" as const),
    priority:
      route === "/"
        ? 1
        : route.includes("agency-kolkata") || route === "/services"
        ? 0.9
        : route === "/blogs"
        ? 0.85
        : 0.7,
  }));

  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const posts = await listBlogs();
    blogEntries = posts.map((post) => ({
      url: absoluteUrl("/blogs/" + post.slug),
      lastModified: new Date(post.updatedAt || post.publishedAt || post.createdAt),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));
  } catch (error) {
    console.error("Error generating sitemap blog entries:", error);
  }

  return [...staticEntries, ...blogEntries];
}
