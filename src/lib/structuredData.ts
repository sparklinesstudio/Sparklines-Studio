import { siteConfig } from "@/config/site";

export const absoluteUrl = (path = "/") => new URL(path, siteConfig.url).toString();
export const organizationId = absoluteUrl("/#organization");
export const websiteId = absoluteUrl("/#website");
export type BreadcrumbItem = { name: string; path: string };

export function organizationGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization", "@id": organizationId,
        name: siteConfig.name, url: absoluteUrl(), description: siteConfig.description,
        logo: { "@type": "ImageObject", "@id": absoluteUrl("/#logo"), url: absoluteUrl("/logo.png") },
        email: siteConfig.email, telephone: "+919641861932",
        sameAs: siteConfig.socialLinks.map(link=>link.href),
        areaServed: {"@type":"City",name:"Kolkata"},
        address: { "@type": "PostalAddress", addressLocality: "Kolkata", addressRegion: "West Bengal", addressCountry: "IN" },
        contactPoint: { "@type": "ContactPoint", telephone: "+919641861932", email: siteConfig.email, contactType: "customer service" },
      },
      {
        "@type": "WebSite", "@id": websiteId, url: absoluteUrl(), name: siteConfig.name,
        description: siteConfig.description, inLanguage: "en-IN", publisher: { "@id": organizationId },
      },
    ],
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[], path: string) {
  return { "@type": "BreadcrumbList", "@id": absoluteUrl(path) + "#breadcrumbs",
    itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: absoluteUrl(item.path) })),
  };
}

export function serviceBreadcrumbs(name: string, slug: string): BreadcrumbItem[] {
  return [{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name, path: "/" + slug }];
}

export function serviceGraph(service: { slug: string; name: string; title: string; description: string; faqs?: { question: string; answer: string }[]; breadcrumbs?: BreadcrumbItem[] }) {
  const path = "/" + service.slug;
  const url = absoluteUrl(path);
  const pageId = url + "#webpage";
  return { "@context": "https://schema.org", "@graph": [
    { "@type": "Service", "@id": url + "#service", name: service.title, serviceType: service.name,
      description: service.description, url, image:absoluteUrl("/og?title="+encodeURIComponent(service.title)), provider: { "@id": organizationId },
      areaServed: { "@type": "City", name: "Kolkata" }, mainEntityOfPage: { "@id": pageId },
    },
    { "@type": service.faqs?.length ? ["WebPage", "FAQPage"] : "WebPage", "@id": pageId,
      url, name: service.title, description: service.description, inLanguage: "en-IN",
      isPartOf: { "@id": websiteId }, about: { "@id": url + "#service" },
      ...(service.slug ? { breadcrumb: { "@id": url + "#breadcrumbs" } } : {}),
      ...(!service.faqs?.length ? { mainEntity: {"@id":url+"#service"} } : {}),
      ...(service.faqs?.length ? { mainEntity: service.faqs.map(faq => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) } : {}),
    },
    ...(service.slug ? [breadcrumbSchema(service.breadcrumbs || serviceBreadcrumbs(service.name, service.slug), path)] : []),
  ] };
}

export function pageGraph(path: string, name: string, type = "WebPage") {
  return { "@context": "https://schema.org", "@graph": [
    { "@type": type, "@id": absoluteUrl(path) + "#webpage", url: absoluteUrl(path), name,
      inLanguage: "en-IN", isPartOf: { "@id": websiteId }, about: { "@id": organizationId },
      ...(path !== "/" ? { breadcrumb: { "@id": absoluteUrl(path) + "#breadcrumbs" } } : {}),
    },
    ...(path !== "/" ? [breadcrumbSchema([{ name: "Home", path: "/" }, { name, path }], path)] : []),
  ] };
}
