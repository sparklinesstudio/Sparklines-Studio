import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/data/pageMetadata";

const city = /\bKolkata\b/i;
const metadataLength = 88;

function shorten(text: string, limit: number) {
  if (text.length <= limit) return text;
  const lastSpace = text.lastIndexOf(" ", limit - 1);
  return text.slice(0, lastSpace > 0 ? lastSpace : limit - 1).replace(/[,:;\s–—-]+$/, "") + "…";
}

export function serviceMetadata(page: { title: string; description?: string; slug: string }): Metadata {
  const copy = pageMetadata[page.slug];
  const pageTitle = copy?.title ?? page.title.replace(/\s*[|–—-]\s*Sparklines Studio(?:,? Kolkata)?\s*$/i, "").trim();
  const titleSuffix = ` | ${siteConfig.name}`;
  const trimmedTitle = shorten(pageTitle, metadataLength - titleSuffix.length);
  const title = city.test(trimmedTitle)
    ? trimmedTitle + titleSuffix
    : shorten(pageTitle, metadataLength - titleSuffix.length - ", Kolkata".length) + titleSuffix + ", Kolkata";
  const text = (copy?.description ?? page.description?.trim()) || pageTitle;
  const trimmedDescription = shorten(text, metadataLength);
  const description = city.test(trimmedDescription)
    ? trimmedDescription
    : shorten(text, metadataLength - " · Kolkata".length).replace(/[.!?]$/, "") + " · Kolkata";
  const url = new URL(page.slug ? "/" + page.slug : "/", siteConfig.url).toString();
  const image = {
    url: siteConfig.url + "/og?title=" + encodeURIComponent(pageTitle),
    width: 1200,
    height: 630,
    alt: pageTitle,
  };
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: siteConfig.name, type: "website", locale: "en_IN", images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}
