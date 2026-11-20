import { b2bBuyingPages } from "./seo-buying-b2b";
import { ecommerceBuyingPages } from "./seo-buying-ecommerce";
import { localBuyingPages } from "./seo-buying-local";
import { migrationAuditPage } from "./seo-buying-migration-audit";
import { shopifyBuyingPages } from "./seo-buying-shopify";
import { technicalBuyingPages } from "./seo-buying-technical";

export const seoBuyingPages = [
  ...localBuyingPages,
  ...technicalBuyingPages,
  migrationAuditPage,
  ...ecommerceBuyingPages,
  ...shopifyBuyingPages,
  ...b2bBuyingPages,
];

export const seoBuyingPageBySlug = (slug: string) => seoBuyingPages.find(page => page.slug === slug);
