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
export const videoProductionService: ServicePageContent = {
  slug: "video-production-agency-kolkata", name: "Video Production", title: "Video Production Agency in Kolkata",
  heroWords: ["PLAN.","SHOOT.","MOVE."],
  description: "Video production in Kolkata for brand films, commercials, social reels, founder stories and product campaigns. Explore the existing food, fashion and property video portfolio.",
  intro: "From the first conversation to the final cut, we shape your message into a film people can understand and feel.",
  overview: [
    "Every film starts with a story worth telling. Sparklines Studio brings strategy, scripting, production and post-production into one collaborative process for businesses in Kolkata and beyond.",
    "We plan around your audience, intended channels and production requirements. A project can include treatments, storyboards, location filming, interviews, editing, colour and sound, with deliverables agreed in advance.",
    "Explore the existing video library below, from food and hospitality to fashion and spaces. Share your brief and we will develop a production approach around your story.",
  ],
  capabilities: [
    {title:"Brand films & commercials",description:"Concept-led films that bring your brand, product or campaign into focus through a clear narrative and purposeful visuals."},
    {title:"Social reels & campaign edits",description:"Short-form video and campaign cutdowns prepared for the social channels and ad formats agreed in your brief."},
    {title:"Founder & interview films",description:"Interview planning, on-camera guidance and story-led editing that make expertise and personality feel approachable."},
    {title:"Product & lifestyle films",description:"Product-led stories and lifestyle visuals built around the details that make your offer distinctive."},
    {title:"Spaces & hospitality",description:"Visual stories for properties, interiors, restaurants and hospitality businesses, planned around the experience of the place."},
    {title:"Post-production & delivery",description:"Editing, colour, sound and the agreed final exports, with review rounds and delivery requirements defined in the proposal."},
  ],
  process: [
    {title:"Discover",description:"Understand the audience, message, intended channels and what the film needs to achieve."},
    {title:"Pre-produce",description:"Develop the treatment, script, storyboard, schedule and production plan together."},
    {title:"Produce",description:"Capture the footage, interviews and supporting visuals, then build the story in the edit."},
    {title:"Deliver",description:"Review the cut, refine colour and sound, and export the agreed campaign formats."},
  ],
  faqs: [
    {question:"What video production services do you offer in Kolkata?",answer:"We create brand films, commercials, social reels, founder videos and product content. A project can include strategy, scripting, filming, editing, colour, sound and format-specific delivery."},
    {question:"How much does a production cost?",answer:"The scope depends on the concept, shoot days, crew, locations, post-production and final deliverables. Share your brief so we can prepare a proposal with clear inclusions."},
    {question:"Can you work with existing footage?",answer:"Yes. We can scope editing and post-production around footage you already have, after reviewing the material and the intended output."},
    {question:"Do you deliver vertical videos and campaign cutdowns?",answer:"Yes. We agree on the channels, aspect ratios, captions and shorter versions during planning so the production supports those outputs."},
  ], gallery: "production",
};
