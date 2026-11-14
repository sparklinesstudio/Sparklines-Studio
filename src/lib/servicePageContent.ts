import type { KolkataService } from "@/data/kolkataServices";
import type { ServiceDetail } from "@/data/servicesData";

export interface ServicePageContent {
  slug: string;
  name: string;
  title: string;
  heroWords: string[];
  description: string;
  intro: string;
  overview: string[];
  capabilities: { title: string; description: string; deliverables?: string[] }[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  gallery?: "production" | "motion";
}

const heroWords: Record<string,string[]> = {
  "personal-branding-agency-kolkata": ["DEFINE.","CREATE.","CONNECT."],
  "ai-seo-agency-kolkata": ["AUDIT.","CLARIFY.","DISCOVER."],
  "motion-graphics-agency-kolkata": ["DESIGN.","ANIMATE.","EXPLAIN."],
  "saas-video-agency-kolkata": ["SHOW.","EXPLAIN.","CONNECT."],
  "website-development-agency-kolkata": ["PLAN.","BUILD.","LAUNCH."],
  "web-design-agency-kolkata": ["THINK.","DESIGN.","CONNECT."],
  "ecommerce-development-agency-kolkata": ["DESIGN.","BUILD.","SELL."],
  "video-production": ["PLAN.","SHOOT.","MOVE."],
  "ppc-advertising": ["TARGET.","TEST.","REFINE."],
  "social-media": ["CREATE.","SHARE.","CONNECT."],
  "seo": ["RANK.","REIGN.","REPEAT."],
  "web-design": ["THINK.","DESIGN.","BUILD."],
  "branding": ["DEFINE.","DESIGN.","BELONG."],
};
function completeCapabilities(items: ServicePageContent["capabilities"]): ServicePageContent["capabilities"] {
  const additions = [
    { title: "Review & refinement", description: "A shared review process to refine the work against your brief, with feedback rounds agreed before production." },
    { title: "Delivery & handover", description: "Prepare the agreed final files, publishing requirements and a practical handover for your team." },
    { title: "Strategy & project planning", description: "Define your audience, priorities, deliverables and review milestones before the project moves into production." },
  ];
  return [...items, ...additions.filter(addition => !items.some(item => item.title === addition.title))].slice(0,6);
}
export function fromKolkataService(service: KolkataService): ServicePageContent {
  return {
    slug: service.slug, name: service.name, title: service.title,
    heroWords: heroWords[service.slug] || ["THINK.","CREATE.","DELIVER."],
    description: service.description, intro: service.intro,
    overview: [service.intro, service.description, "We start by understanding your audience and the job the work needs to do. Your proposal defines the scope, production needs, review stages and deliverables, so every step has a clear purpose."],
    capabilities: completeCapabilities(service.offers.map(([title,description])=>({title,description}))),
    process: service.process.map((description,index)=>({title:["Discover","Architect","Create","Deliver"][index] || "Refine",description})),
    faqs: service.faqs.map(([question,answer])=>({question,answer})),
    gallery: service.gallery ? "motion" : undefined,
  };
}
export function fromCatalogService(service: ServiceDetail): ServicePageContent {
  return {
    slug: "services/"+service.slug, name: service.shortTitle,
    title: service.shortTitle+" Agency in Kolkata",
    heroWords: heroWords[service.id] || ["THINK.","CREATE.","DELIVER."],
    description: service.heroDescription, intro: service.tagline,
    overview: service.overviewParagraphs,
    capabilities: completeCapabilities(service.capabilities.map(item=>({title:item.title,description:item.description,deliverables:item.deliverables}))),
    process: service.processSteps.map(step=>({title:step.title,description:step.description})),
    faqs: service.faqs,
    gallery: service.id === "video-production" ? "production" : undefined,
  };
}
