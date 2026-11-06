import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { kolkataServices } from "@/data/kolkataServices";
import { SERVICES_CATALOG } from "@/data/servicesData";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
export default function sitemap(): MetadataRoute.Sitemap {
 const routes = ["", "/services", "/work", "/contact", "/about", "/privacy-policy", "/terms-and-conditions", "/refund-policy", "/seo-agency-kolkata", "/video-production-agency-kolkata", ...kolkataServices.map(s => "/" + s.slug), ...SERVICES_CATALOG.map(s => "/services/" + s.slug), ...PORTFOLIO_DATA.map(p => p.customHref || "/work/" + p.id)];
 return [...new Set(routes)].map(route => ({ url: siteConfig.url + route, changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.7 }));
}
