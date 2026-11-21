export type SearchCaseStudy = {
  slug: string;
  client: string;
  industry: string;
  location: string;
  title: string;
  summary: string;
  approach: string;
  result: string;
  duration: string;
  discipline: string;
  visual: "film" | "renovation" | "hospitality" | "research" | "storefront" | "editorial" | "clinic";
  tags: readonly string[];
  spotlight?: true;
  metrics: readonly (readonly [value: string, label: string])[];
  steps: readonly (readonly [title: string, detail: string])[];
  measurement: string;
  application: string;
  service: string;
};

export const searchCaseStudies = {
  indigo: {
    slug: "indigo-productions",
    client: "Indigo Productions",
    industry: "Video production",
    location: "Manhattan, New York",
    title: "Helping buyers find a Manhattan production studio",
    summary: "The studio had a strong reel and relied heavily on referrals. Buyers searching for a New York production partner rarely found it.",
    approach: "The campaign team built pages for distinct production services and linked them to relevant films. The project also covered local listings, video performance and reorganising older URLs.",
    result: "Over 14 months, the project report recorded a 643% increase in organic sessions and $3.8 million in pipeline attributed to organic search and Google Business Profile.",
    duration: "14 months",
    discipline: "Service-page SEO",
    visual: "film",
    tags: ["Local SEO", "Editorial content", "Technical SEO"],
    metrics: [["+643%", "Organic sessions"], ["#1", "For “NYC video production”"], ["$3.8M", "Attributed pipeline"]],
    steps: [
      ["Build around the brief buyers already have", "Separate commercial production, corporate video and other distinct briefs into their own pages. Each page can explain the format and show a reel that helps the buyer assess fit."],
      ["Give finished films their own context", "Add project pages that explain what the team made and show the work in context. Connect each project to the relevant service page so a buyer can move from an example to a conversation."],
      ["Make the studio easier to find locally", "Update the studio’s Google Business Profile categories, add photos of the space and ask clients for a review when a project wraps."],
      ["Improve load times on reel pages", "Serve video through a content delivery network and preserve important older URL destinations. The campaign team measured the reel page’s Largest Contentful Paint falling from 4.1 to 1.7 seconds."],
    ],
    measurement: "The pipeline figure covers opportunities attributed to organic search and Google Business Profile. The report also noted 4.2 times as many inbound requests for proposal year over year and a 38% larger average project size.",
    application: "A Kolkata production house could start with two briefs it wants more of, such as product films and corporate interviews. Give each its own offer, relevant reel and way to submit a brief.",
    service: "seo-agency-kolkata",
  },
  allIsland: {
    slug: "all-island-home-renovations",
    client: "All Island Home Renovations",
    industry: "Home renovation",
    location: "Long Island, New York",
    title: "Reaching homeowners town by town on Long Island",
    summary: "The contractor wanted more suitable renovation enquiries across its service area as paid leads became expensive and harder to qualify.",
    approach: "The campaign team paired town-specific service pages with examples of finished renovations, cleaned up business listings and added a review request to the project closeout process.",
    result: "Over 16 months, the project report recorded 528% more qualified leads and included a comparison with paid lead costs.",
    duration: "16 months",
    discipline: "Local SEO & lead generation",
    visual: "renovation",
    tags: ["Local SEO", "Service-area pages", "Reviews & Google Business Profile"],
    metrics: [["+528%", "Qualified leads"], ["Top 3", "For 92% of priority local searches"], ["−61%", "Reported change in paid cost per lead"]],
    steps: [
      ["Match the project to the service area", "Create pages for the renovation jobs the team wants in the towns it can cover. A kitchen remodel page needs local project examples and a quote path that makes the service area clear."],
      ["Fix conflicting listing details", "Review business categories and remove duplicate listings. Correct contact details so homeowners can reach the same team from search, directories and the website."],
      ["Build review requests into handover", "Add a review request to the CRM closeout process. The project report recorded that the number of reviews collected each month tripled within 90 days."],
      ["Help shoppers judge the scale of completed work", "Create renovation pages with before-and-after images and link each project to the matching service. The pages also give sales staff relevant examples to share with prospects."],
    ],
    measurement: "The detailed project report describes the 61% figure as a drop in paid cost per lead while organic search took on more demand. It also reports a 41% increase in average project size over the engagement.",
    application: "An interiors business covering Salt Lake and New Town could record the PIN code, budget range and expected start date for each enquiry, then compare how many qualified opportunities each channel produces.",
    service: "local-seo-packages-for-small-business",
  },
  walker: {
    slug: "the-walker-group",
    client: "The Walker Group",
    industry: "Hospitality",
    location: "Tribeca, New York",
    title: "Making eight hospitality locations easier to find",
    summary: "A Tribeca-based hospitality group struggled to surface its locations for neighbourhood searches, where aggregators were attracting much of the demand.",
    approach: "The campaign team reworked location profiles, built neighbourhood pages, improved the review request process and addressed site performance and indexing.",
    result: "After 18 months, the project report recorded 47 priority local queries in the top three and $4.2 million in revenue credited to organic and local channels using last-touch attribution.",
    duration: "18 months",
    discipline: "Multi-location search",
    visual: "hospitality",
    tags: ["Local SEO", "Technical SEO", "Editorial content"],
    metrics: [["+812%", "Organic sessions"], ["47", "Priority local queries in the top three"], ["$4.2M", "Last-touch attributed revenue"]],
    steps: [
      ["Give each property a usable listing", "Review Google Business Profile categories, update location information and organise publication across all eight properties so each location can be found independently."],
      ["Build pages a visitor can act on", "Create neighbourhood pages with distinct local information and maps. Help visitors identify the right property and get directions before sending them to book."],
      ["Ask for reviews consistently", "Introduce a repeatable review request process for the eight locations. The project report recorded 3.2 times the previous monthly review volume within 90 days."],
      ["Fix issues across location templates", "Use a crawl and server logs to find pages wasting indexing capacity, then address page performance across the affected templates."],
    ],
    measurement: "The project report recorded 4.1 times as many direction requests and 3.6 times as many calls over 18 months. The revenue figure credits the final measured organic or local touchpoint before conversion.",
    application: "A Kolkata hospitality group can give each real venue accurate opening hours, directions and a direct booking path. Track calls and bookings for each venue separately.",
    service: "local-seo-packages-for-small-business",
  },
  northbridge: {
    slug: "northbridge-fintech",
    client: "Northbridge",
    industry: "B2B fintech",
    location: "Flatiron, New York",
    title: "Getting a fintech brand into AI-assisted buyer research",
    summary: "Buyers were bringing answers from AI tools into sales conversations, and Northbridge rarely appeared in those answers.",
    approach: "The campaign team checked how often several AI tools cited the brand for commercial questions, clarified brand information across sources and revised key pages around questions buyers ask.",
    result: "The project report recorded that Northbridge was cited in 38% of the tracked Google AI Overview source panels and that pipeline attributed to organic search and AI referrals grew 186% year over year.",
    duration: "9 months",
    discipline: "AI search visibility",
    visual: "research",
    tags: ["AI SEO & GEO", "Editorial content", "Digital PR"],
    metrics: [["38%", "Tracked AI Overview panels citing Northbridge"], ["21×", "Monthly named citations across ChatGPT and Perplexity"], ["+186%", "Attributed pipeline, year over year"]],
    steps: [
      ["Check real buying questions first", "Benchmark a list of 50 commercial queries across tools including ChatGPT, Perplexity, Gemini and Claude. Note which companies and sources are named before editing the site."],
      ["Make the company easier to identify", "Align brand descriptions across the website and relevant directories. Clarify the company’s identity and the problems the product is built to solve."],
      ["Answer the question on the relevant page", "Revise 34 commercial pages around buyer questions. Use direct definitions and add enough context for each answer to make sense when read on its own."],
      ["Document page types and watch referrals", "The campaign team added structured data for the organisation and relevant pages. It also tracked referrals from ChatGPT and Perplexity in analytics."],
    ],
    measurement: "The AI Overview share covers the tracked commercial queries. The detailed report counts one to 21 monthly named appearances across ChatGPT and Perplexity combined. The pipeline figure includes organic search and AI referrals.",
    application: "A Kolkata B2B software firm could start with the comparison and implementation questions that prospects ask in demos. Track the same questions over time and record which sources appear.",
    service: "ai-seo-agency-kolkata",
  },
  atelier: {
    slug: "atelier-noma",
    client: "Atelier Noma",
    industry: "Ecommerce",
    location: "Brooklyn, New York",
    title: "Protecting search traffic through a storefront migration",
    summary: "The retailer needed to move from Magento to Shopify Hydrogen before peak season, with thousands of indexed URLs and years of backlinks to account for.",
    approach: "The campaign team recorded the pre-launch site, tested redirects and canonicals in staging and monitored crawl and ranking changes after the switch.",
    result: "The project report recorded no net traffic loss during the migration and a 28% increase in organic revenue in the six months after launch compared with the previous six.",
    duration: "4-month migration",
    discipline: "Ecommerce migration",
    visual: "storefront",
    tags: ["SEO migrations", "Technical SEO", "Analytics"],
    metrics: [["0%", "Net traffic loss during migration"], ["3.4s → 2.0s", "Product-page Largest Contentful Paint"], ["+28%", "Organic revenue over the following six months"]],
    steps: [
      ["Record what the old store depends on", "Use a pre-launch crawl and search data to identify indexed pages, backlink destinations and valuable product and category URLs. Build the migration plan around that baseline."],
      ["Test replacements before switching domains or routing", "Map approximately 8,400 URLs. Check redirect status, canonical destinations and rendered content in staging, with particular attention to filters and category variants."],
      ["Speed up important shopping pages", "Use newer image formats, defer images below the fold and cache assets closer to shoppers. The campaign team measured how quickly the main content appeared on product pages."],
      ["Watch the new store after the switch", "Compare crawls and rankings daily for 60 days. The campaign team identified two regressions in filtered navigation and said both were fixed within a day."],
    ],
    measurement: "Traffic was measured over the migration window. The product-page timing improved by roughly 41% according to the detailed case, and the reported revenue change compares the six months after launch with the previous six.",
    application: "Before a Kolkata retailer rebuilds its storefront, list the category and product pages that drive organic sales. Verify their redirects and measure those pages through launch.",
    service: "ecommerce-seo-retainer-pricing",
  },
  halsted: {
    slug: "halsted-legal",
    client: "Halsted & Park",
    industry: "Legal services",
    location: "Midtown Manhattan, New York",
    title: "Turning a law firm’s expertise into qualified consultations",
    summary: "A small Midtown firm wanted a sustainable way to reach prospective clients in a practice area where paid keywords were expensive.",
    approach: "The campaign team built a connected library around one practice area, involved named partners in the publishing programme and reviewed the articles quarterly.",
    result: "The project report attributed 412 qualified consultations to organic search in the first year and $11 million in matter revenue to organic and referral traffic over 18 months.",
    duration: "12-month programme",
    discipline: "B2B content strategy",
    visual: "editorial",
    tags: ["Editorial content", "Topical authority", "Digital PR"],
    metrics: [["412", "Qualified consultations in year one"], ["#1", "For 28 priority search terms"], ["$11M", "Attributed matter revenue over 18 months"]],
    steps: [
      ["Choose one practice area to explain deeply", "Map around 140 related topics, from early client research through arranging a consultation. Organise supporting articles around the main pages for that practice."],
      ["Turn the topic map into writing briefs", "Give writers a clear angle, sources, internal links and structured data requirements for each article."],
      ["Bring specialists into the writing", "Credit the responsible partners by name, mark up their author information and use digital PR to earn press coverage for their expertise."],
      ["Maintain content as it matures", "Review published material each quarter. Update pages with new information and combine overlapping articles when one stronger resource would serve readers better."],
    ],
    measurement: "The case reports qualified consultations attributed to organic search over 12 months and matter revenue attributed to organic and referral channels over 18 months.",
    application: "A Kolkata professional services firm can pick one engagement it wants more of, document what a suitable enquiry looks like, and build pages that answer scope, timing and eligibility questions.",
    service: "b2b-saas-seo-agency-pricing",
  },
  jamesChristian: {
    slug: "james-christian-cosmetics",
    client: "James Christian Cosmetics",
    industry: "Aesthetics clinics",
    location: "New York City, Long Island & Miami",
    title: "Helping patients find the right clinic location",
    summary: "The multi-location aesthetics practice had limited search visibility for pages describing its own services. The project was featured in the agency’s homepage spotlight.",
    approach: "The homepage spotlight describes progress for searches that combine a treatment with a city or neighbourhood.",
    result: "The project report recorded more organic sessions, wider top-three visibility and more booked consultations across the locations in its spotlight.",
    duration: "18 months",
    discipline: "Multi-location search",
    visual: "clinic",
    tags: ["Local SEO", "Treatment searches", "Consultation bookings"],
    spotlight: true,
    metrics: [["+642%", "Organic sessions"], ["58", "Treatment and city searches in the top three"], ["3.9×", "Booked consultations"]],
    steps: [],
    measurement: "The homepage spotlight gives the reporting period and headline outcomes. It provides no detailed rollout or breakdown of the booking attribution.",
    application: "A Kolkata practice with multiple clinics can give each location accurate contact details, explain which services are available there and measure consultation bookings by branch.",
    service: "local-seo-packages-for-small-business",
  },
} satisfies Record<string, SearchCaseStudy>;

export const searchCaseHref = (project: SearchCaseStudy) => `/work/${project.slug}`;

const { indigo, allIsland, walker, northbridge, atelier, halsted } = searchCaseStudies;

export const searchCaseByService: Partial<Record<string, { project: SearchCaseStudy; takeaway: string }>> = {
  "seo-agency-kolkata": { project: indigo, takeaway: "If you sell services in Kolkata, use a page for each distinct offer and link to examples that help a buyer assess fit. A production studio could pair its corporate video page with a relevant shoot and explain how to request a quote." },
  "ai-seo-agency-kolkata": { project: northbridge, takeaway: "Start with the questions prospects already ask your sales team. If buyers compare providers in Kolkata, include those city-specific comparisons when checking which sources AI tools cite." },
  "chatgpt-seo-agency-kolkata": { project: northbridge, takeaway: "See how the project used commercial questions to check which brands ChatGPT named during buyer research." },
  "gemini-seo-agency-kolkata": { project: northbridge, takeaway: "The initial audit covered Gemini. The case shows how to check the same buying questions across several tools." },
  "claude-seo-agency-kolkata": { project: northbridge, takeaway: "The initial citation audit covered Claude. The case offers an example of benchmarking before changing content." },
  "b2b-saas-seo-agency-pricing": { project: halsted, takeaway: "See how a professional services firm built around one buying need and tracked qualified consultations from search." },
  "ecommerce-seo-retainer-pricing": { project: atelier, takeaway: "See what to protect when your store changes platform, from product URLs to organic revenue reporting." },
  "technical-seo-audit-pricing": { project: atelier, takeaway: "See how a crawl baseline, a tested redirect map and monitoring helped a store manage migration risk." },
  "local-seo-packages-for-small-business": { project: walker, takeaway: "If you operate in more than one Kolkata locality, give each real location accurate hours and contact details. Link its eligible Google Business Profile to the page customers need for directions or bookings." },
  "real-estate-seo-agency-kolkata": { project: allIsland, takeaway: "Take the location-first approach and apply it to your active inventory. Someone comparing flats in New Town needs current project details, useful location information and a clear way to arrange a visit." },
  "interior-design-seo-agency-kolkata": { project: allIsland, takeaway: "Use completed Kolkata projects to show the kinds of briefs you take on. A kitchen renovation page can explain the scope, show the finished space and help homeowners decide what to ask at their first consultation." },
  "paid-ads-agency-kolkata": { project: allIsland, takeaway: "If you’re paying for renovation leads in Kolkata, use the same definition of a qualified enquiry across paid search and SEO. Check service area, project type and budget fit, then compare cost per qualified lead over the same period." },
};
