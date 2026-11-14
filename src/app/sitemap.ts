import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/structuredData";
import {studioServices} from "@/data/services/catalog";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { listBlogSitemapEntries } from "@/lib/blog/store";

// Always read MongoDB at request time: publish, unpublish, trash and scheduling
// are reflected without a deployment or a manually edited URL list.
export const dynamic = "force-dynamic";
export const revalidate = 0;

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
    ...studioServices.map(service=>"/"+service.slug),
    ...PORTFOLIO_DATA.map((p) => p.customHref || "/work/" + p.id),
  ];

  const staticEntries: MetadataRoute.Sitemap = [...new Set(staticRoutes.map(route => route.split(/[?#]/)[0]))].map((route) => ({
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

  // Let an unavailable database return an error rather than a successful sitemap
  // that incorrectly drops every article from the indexable URL list.
  const posts = await listBlogSitemapEntries();
  const blogEntries: MetadataRoute.Sitemap = posts.map(post => ({
    url: absoluteUrl("/blogs/" + post.slug),
    lastModified: post.lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));
  return [...staticEntries, ...blogEntries];
}
