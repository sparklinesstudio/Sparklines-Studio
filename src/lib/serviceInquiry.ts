import { serviceBySlug } from "@/data/services/catalog";
import { seoBuyingPageForInquiry } from "@/data/services/seo-buying-pages";
import { serviceSalesCopy } from "@/data/services/service-sales-copy";

export interface ServiceInquiry {
  slug: string;
  name: string;
  prompt: string;
  seo?: boolean;
}

export function findServiceInquiry(value: unknown): ServiceInquiry | undefined {
  const seo = seoBuyingPageForInquiry(value);
  if (seo) return { slug: seo.slug, name: seo.name, prompt: seo.inquiry.prompt, seo: true };
  if (typeof value !== "string" || !Object.hasOwn(serviceSalesCopy, value)) return undefined;
  const service = serviceBySlug(value);
  const copy = serviceSalesCopy[value];
  if (service && copy) return { slug: service.slug, name: service.name, prompt: copy.brief };
}
