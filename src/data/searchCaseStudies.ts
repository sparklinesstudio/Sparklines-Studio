export type SearchCaseStudy = {
  slug: string;
  client: string;
  industry: string;
  location: string;
  title: string;
  summary: string;
  approach: string;
  result: string;
};

export const searchCaseStudies = {
  indigo: {
    slug: "indigo-productions",
    client: "Indigo Productions",
    industry: "Video production",
    location: "Manhattan, New York",
    title: "Helping buyers find a Manhattan production studio",
    summary: "The studio had a strong reel and relied heavily on referrals. Buyers searching for a New York production partner rarely found it.",
    approach: "NYSEO/CO built pages for distinct production services and linked them to relevant films. The project also covered local listings, video performance and reorganising older URLs.",
    result: "Over 14 months, NYSEO/CO reported a 643% increase in organic sessions and $3.8 million in pipeline attributed to organic search and Google Business Profile.",
  },
  allIsland: {
    slug: "all-island-home-renovations",
    client: "All Island Home Renovations",
    industry: "Home renovation",
    location: "Long Island, New York",
    title: "Reaching homeowners town by town on Long Island",
    summary: "The contractor wanted more suitable renovation enquiries across its service area as paid leads became expensive and harder to qualify.",
    approach: "NYSEO/CO paired town-specific service pages with examples of finished renovations, cleaned up business listings and added a review request to the project closeout process.",
    result: "Over 16 months, NYSEO/CO reported 528% more qualified leads and included a comparison with paid lead costs.",
  },
  walker: {
    slug: "the-walker-group",
    client: "The Walker Group",
    industry: "Hospitality",
    location: "Tribeca, New York",
    title: "Making eight hospitality locations easier to find",
    summary: "A Tribeca-based hospitality group struggled to surface its locations for neighbourhood searches, where aggregators were attracting much of the demand.",
    approach: "NYSEO/CO reworked location profiles, built neighbourhood pages, improved the review request process and addressed site performance and indexing.",
    result: "After 18 months, NYSEO/CO reported 47 priority local queries in the top three and $4.2 million in revenue credited to organic and local channels using last-touch attribution.",
  },
  northbridge: {
    slug: "northbridge-fintech",
    client: "Northbridge",
    industry: "B2B fintech",
    location: "Flatiron, New York",
    title: "Getting a fintech brand into AI-assisted buyer research",
    summary: "Buyers were bringing answers from AI tools into sales conversations, and Northbridge rarely appeared in those answers.",
    approach: "NYSEO/CO checked how often several AI tools cited the brand for commercial questions, clarified brand information across sources and revised key pages around questions buyers ask.",
    result: "NYSEO/CO reported that Northbridge was cited in 38% of the tracked Google AI Overview source panels and that pipeline attributed to organic search and AI referrals grew 186% year over year.",
  },
  atelier: {
    slug: "atelier-noma",
    client: "Atelier Noma",
    industry: "Ecommerce",
    location: "Brooklyn, New York",
    title: "Protecting search traffic through a storefront migration",
    summary: "The retailer needed to move from Magento to Shopify Hydrogen before peak season, with thousands of indexed URLs and years of backlinks to account for.",
    approach: "NYSEO/CO recorded the pre-launch site, tested redirects and canonicals in staging and monitored crawl and ranking changes after the switch.",
    result: "NYSEO/CO reported no net traffic loss during the migration and a 28% increase in organic revenue in the six months after launch compared with the previous six.",
  },
  halsted: {
    slug: "halsted-legal",
    client: "Halsted & Park",
    industry: "Legal services",
    location: "Midtown Manhattan, New York",
    title: "Turning a law firm’s expertise into qualified consultations",
    summary: "A small Midtown firm wanted a sustainable way to reach prospective clients in a practice area where paid keywords were expensive.",
    approach: "NYSEO/CO built a connected library around one practice area, involved named partners in the publishing programme and reviewed the articles quarterly.",
    result: "NYSEO/CO attributed 412 qualified consultations to organic search in the first year and $11 million in matter revenue to organic and referral traffic over 18 months.",
  },
} satisfies Record<string, SearchCaseStudy>;

export const searchCaseHref = (project: SearchCaseStudy) => `/work/${project.slug}`;
export const searchCaseSource = (project: SearchCaseStudy) => `https://newyorkseo.company/work/${project.slug}`;

const { indigo, allIsland, walker, northbridge, atelier, halsted } = searchCaseStudies;

export const searchCaseByService: Partial<Record<string, { project: SearchCaseStudy; takeaway: string }>> = {
  "seo-agency-kolkata": { project: indigo, takeaway: "If you sell services in Kolkata, use a page for each distinct offer and link to examples that help a buyer assess fit. A production studio could pair its corporate video page with a relevant shoot and explain how to request a quote." },
  "ai-seo-agency-kolkata": { project: northbridge, takeaway: "Start with the questions prospects already ask your sales team. If buyers compare providers in Kolkata, include those city-specific comparisons when checking which sources AI tools cite." },
  "chatgpt-seo-agency-kolkata": { project: northbridge, takeaway: "See how the project used commercial questions to check which brands ChatGPT named during buyer research." },
  "gemini-seo-agency-kolkata": { project: northbridge, takeaway: "NYSEO/CO included Gemini in its initial audit. The case shows how to check the same buying questions across several tools." },
  "claude-seo-agency-kolkata": { project: northbridge, takeaway: "NYSEO/CO included Claude in its initial citation audit. The case offers an example of benchmarking before changing content." },
  "b2b-seo-agency-kolkata": { project: halsted, takeaway: "See how a professional services firm built around one buying need and tracked qualified consultations from search." },
  "ecommerce-seo-agency-kolkata": { project: atelier, takeaway: "See what to protect when your store changes platform, from product URLs to organic revenue reporting." },
  "technical-seo-agency-kolkata": { project: atelier, takeaway: "See how a crawl baseline, a tested redirect map and monitoring helped a store manage migration risk." },
  "local-seo-agency-kolkata": { project: walker, takeaway: "If you operate in more than one Kolkata locality, give each real location accurate hours and contact details. Link its eligible Google Business Profile to the page customers need for directions or bookings." },
  "real-estate-seo-agency-kolkata": { project: allIsland, takeaway: "Take the location-first approach and apply it to your active inventory. Someone comparing flats in New Town needs current project details, useful location information and a clear way to arrange a visit." },
  "interior-design-seo-agency-kolkata": { project: allIsland, takeaway: "Use completed Kolkata projects to show the kinds of briefs you take on. A kitchen renovation page can explain the scope, show the finished space and help homeowners decide what to ask at their first consultation." },
  "paid-ads-agency-kolkata": { project: allIsland, takeaway: "If you’re paying for renovation leads in Kolkata, use the same definition of a qualified enquiry across paid search and SEO. Check service area, project type and budget fit, then compare cost per qualified lead over the same period." },
};
