import type { Metadata } from "next";
import type { KolkataService } from "@/data/kolkataServices";
import { siteConfig } from "@/config/site";
export function serviceMetadata(service: Pick<KolkataService, "title" | "description" | "slug">): Metadata {
 const title = service.title + " | Sparklines Studio";
 const url = new URL(service.slug ? "/" + service.slug : "/", siteConfig.url).toString();
 return { title, description: service.description, alternates: { canonical: url },
 openGraph: { title, description: service.description, url, siteName: "Sparklines Studio", type: "website", locale: "en_IN", images: [{ url: "/logo.png", alt: "Sparklines Studio" }] },
 twitter: { card: "summary", title, description: service.description, images: ["/logo.png"] } };
}
