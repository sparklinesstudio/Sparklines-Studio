export interface PortfolioMetric {
  label: string;
  value: string;
}

export interface PortfolioItem {
  id: string;
  customHref?: string;
  title: string;
  client: string;
  category: "Organic Marketing" | "Paid Marketing" | "Video Productions" | "Branding & Identity";
  categorySlug: "organic-marketing" | "paid-marketing" | "video-productions" | "branding";
  industry: string;
  year: string;
  coverImage: string;
  tagline: string;
  headline: string;
  metrics: [PortfolioMetric, PortfolioMetric, PortfolioMetric, PortfolioMetric];
  overview: string;
  objectives: string;
  challenges: string;
  results: string;
  tags: string[];
}

export const PORTFOLIO_DATA: PortfolioItem[] = [
  // =========================================================================
  // 1. BRANDING & IDENTITY (HOUSE OF KOLAM)
  // =========================================================================
  {
    id: "house-of-kolam",
    customHref: "/work/branding/house-of-kolam",
    title: "House of Kolam — Sacred Geometry & Heritage Culinary Identity",
    client: "House of Kolam",
    category: "Branding & Identity",
    categorySlug: "branding",
    industry: "Heritage Hospitality & Luxury Culinary",
    year: "2026",
    coverImage:
      "https://res.cloudinary.com/vt5gqi1c/image/upload/v1793186166/31b46d250283873.6a1bd914346e2_converted.png",
    tagline:
      "Harmonizing Sacred South Indian Geometric Traditions with High-End Hospitality Branding",
    headline:
      "Crafting an Unmistakable Visual Universe for Authentic South Indian Gastronomy",
    metrics: [
      { label: "brand touchpoints delivered", value: "35+" },
      { label: "sacred kolam monograms", value: "100% Vector" },
      { label: "packaging systems crafted", value: "12 SKUs" },
      { label: "master presentation boards", value: "23 Boards" },
    ],
    overview:
      "House of Kolam celebrates the centuries-old meditative ritual of Kolam—drawing symmetrical geometric patterns using rice powder at the threshold of South Indian homes. Sparklines Studio was commissioned to develop an all-encompassing visual identity that honors this sacred mathematical art while elevating the culinary brand into a distinguished, contemporary dining institution.\n\nFrom the meticulous construction of the central Kolam lattice emblem to bespoke vernacular typography, artisanal packaging, brassware-inspired metallic foils, and cinematic animated brand motion, every touchpoint was engineered to communicate warmth, purity, and culinary mastery.",
    objectives:
      "Transform a beloved regional culinary legacy into a premier, scalable hospitality brand with distinct packaging, iconography, and architectural identity.",
    challenges:
      "Translating complex, freehand traditional Kolam geometries into clean, scalable vector assets without losing the organic soul and mathematical harmony of the artform.",
    results:
      "Delivered an iconic 23-board master brand system spanning packaging, menus, store signage, uniform apparel, motion loops, and comprehensive brand guidelines.",
    tags: [
      "Brand Identity",
      "Visual System",
      "Iconography",
      "Packaging Design",
      "Vernacular Typography",
      "Motion Art",
    ],
  },

  // =========================================================================
  // 2. ORGANIC MARKETING & SEARCH ARCHITECTURE
  // =========================================================================
  {
    id: "oraanj-interior-seo",
    customHref: "/work/oraanj-interior-seo",
    title: "Oraanj Interior Design — High-Intent Architecture SEO",
    client: "Oraanj Interiors",
    category: "Organic Marketing",
    categorySlug: "organic-marketing",
    industry: "Architecture & Luxury Interiors",
    year: "2026",
    coverImage:
      "https://res.cloudinary.com/dbwrnwa3l/image/upload/f_auto,q_80,c_fill,w_1200,h_800/v1788801541/Oraanj_Interiors_Design_bd8exo.png",
    tagline: "Dominating Ultra-Prime London Interior Architectural Queries",
    headline:
      "Scaling High-Net-Worth Residential Inquiries Through Programmatic SEO",
    metrics: [
      { label: "increase in organic traffic", value: "310%" },
      { label: "page 1 Google keywords", value: "142+" },
      { label: "qualified client inquiries", value: "+180%" },
      { label: "avg. project contract value", value: "£140k" },
    ],
    overview:
      "Oraanj Interior Design provides bespoke architectural transformations for prestigious heritage residences across Kensington, Mayfair, and Chelsea. While their project quality was extraordinary, their digital presence lagged behind legacy London practices. Sparklines Studio re-architected their digital taxonomy, deploying localized neighborhood hubs and rich architectural portfolio showcases that captured ultra-high-net-worth homeowners at the moment of architectural discovery.",
    objectives:
      "Establish market dominance for luxury renovation and bespoke interior architecture searches across affluent London boroughs while driving direct consultation bookings for multi-room commissions.",
    challenges:
      "High competition from century-old design firms and low search volumes on ultra-high-ticket terms required precision keyword targeting and editorial authority rather than generic volume SEO.",
    results:
      "Captured top positions for over 140 luxury design search terms, resulting in an average monthly pipeline of £1.2M in qualified residential architecture pitches.",
    tags: ["Local Authority SEO", "Architectural Portfolios", "High-Ticket CRO"],
  },
  {
    id: "contekst-architecture-seo",
    customHref: "/work/contekst-architecture-seo",
    title: "Contekst Studio — Belgian Architecture Platform & Authority",
    client: "Contekst Architecture",
    category: "Organic Marketing",
    categorySlug: "organic-marketing",
    industry: "Modernist Architecture & Design",
    year: "2026",
    coverImage:
      "https://res.cloudinary.com/dbwrnwa3l/image/upload/f_auto,q_80,c_fill,w_1200,h_800/v1788801506/Contekst_o2pipv.png",
    tagline: "Minimalist Whitespace Architecture Converting Global Developers",
    headline:
      "Architectural Digital Taxonomy Capturing Global Private Commission Pitches",
    metrics: [
      { label: "organic search impressions", value: "+420%" },
      { label: "editorial press backlinks", value: "48" },
      { label: "international RFP submissions", value: "+115%" },
      { label: "average portfolio time on site", value: "4m 12s" },
    ],
    overview:
      "Antwerp-based architecture practice Contekst creates tranquil, brutalist, and material-honest residential estates across Western Europe. They needed a digital home that matched their architectural serenity while systematically surfacing their built projects across high-authority European architectural databases and Google search.",
    objectives:
      "Deliver a lightning-fast editorial portfolio platform optimized for core web vitals, structured schema, and architectural press discoverability.",
    challenges:
      "Preserving monastic visual whitespace while satisfying rigorous technical SEO crawling requirements and heavy image asset optimization.",
    results:
      "Achieved a 100 Performance score on Google PageSpeed and attracted 48 top-tier architecture publication citations, fueling an unprecedented influx of international design commissions.",
    tags: ["Headless Next.js", "Architectural SEO", "Core Web Vitals 100"],
  },
  {
    id: "luxoria-multilingual-seo",
    customHref: "/work/luxoria-multilingual-seo",
    title: "Luxoria Heritage — European Multilingual Search Domination",
    client: "Luxoria French Riviera",
    category: "Organic Marketing",
    categorySlug: "organic-marketing",
    industry: "Luxury Hospitality & Real Estate",
    year: "2025",
    coverImage:
      "https://res.cloudinary.com/dbwrnwa3l/image/upload/f_auto,q_80,c_fill,w_1200,h_800/v1788801474/Luxoria_1_caa7j2.png",
    tagline: "Tri-lingual SEO Strategy for Monaco, Cannes, and Paris Estates",
    headline:
      "Tri-Lingual HREFLANG Architecture for Ultra-Luxury French Riviera Design",
    metrics: [
      { label: "international organic sessions", value: "220%" },
      { label: "reduction in search bounce rate", value: "32%" },
      { label: "lead quality score improvement", value: "88%" },
      { label: "organic private estate leads", value: "65+" },
    ],
    overview:
      "Luxoria oversees multimillion-euro residential restorations across the French Riviera, Monaco, and central Paris. Sparklines Studio engineered an enterprise tri-lingual search architecture (English, French, and Russian) targeting high-net-worth international investors purchasing coastal villas.",
    objectives:
      "Secure top search engine rankings in high-competition European luxury resort hubs while preserving brand elegance and driving direct consultation inquiries.",
    challenges:
      "Navigating intricate international HREFLANG annotations, geo-targeting, and currency distinctions without diluting domain authority.",
    results:
      "Delivered a 220% lift in qualified international estate inquiries and established Luxoria as the premier interior architecture practice in the French Riviera.",
    tags: ["Multilingual SEO", "HREFLANG Architecture", "Luxury Real Estate"],
  },

  // =========================================================================
  // 3. PAID MARKETING & ACQUISITION
  // =========================================================================
  {
    id: "maison-moghadam-paid",
    customHref: "/work/maison-moghadam-paid",
    title: "Maison Moghadam — Haute Antiquity Private Client Acquisition",
    client: "Maison Moghadam",
    category: "Paid Marketing",
    categorySlug: "paid-marketing",
    industry: "Fine Antiquities & Private Collector Commerce",
    year: "2025",
    coverImage:
      "https://res.cloudinary.com/dbwrnwa3l/image/upload/f_auto,q_80,c_fill,w_1200,h_800/v1788801500/MaisonMoghadam_vs9nx6.png",
    tagline: "Precision Account-Based Acquisition for Five-Figure Antiques",
    headline:
      "Curating 300-Year-Old Weaving Histories into Private Collector Purchases",
    metrics: [
      { label: "average return on ad spend", value: "6.2x" },
      { label: "private salon bookings", value: "+140%" },
      { label: "average order value", value: "€18,500" },
      { label: "collector database expansion", value: "2,400+" },
    ],
    overview:
      "Maison Moghadam houses one of the world's finest collections of rare 17th-to-19th century Persian carpets and antique textiles. Selling six-figure heritage artifacts requires marketing that resembles private banking rather than retail e-commerce. Sparklines Studio deployed exclusive concierge retargeting funnels across Meta and Google.",
    objectives:
      "Drive verified private viewing appointments in Geneva and Paris while building an exclusive global collector advisory registry.",
    challenges:
      "Targeting verified ultra-high-net-worth individuals and art collectors without exhausting budgets on broad luxury lifestyle audiences.",
    results:
      "Achieved a sustained 6.2x verified ROAS on paid acquisition and secured 40+ private salon consultations resulting in multiple record-setting antique acquisitions.",
    tags: ["High-Ticket Meta Ads", "Private Client ABM", "Concierge Funnels"],
  },
  {
    id: "5star-decor",
    customHref: "/#contact",
    title: "5 Star Decor — Luxury Furnishings & Digital Showroom",
    client: "5 Star Decor",
    category: "Paid Marketing",
    categorySlug: "paid-marketing",
    industry: "Luxury Furnishings & E-Commerce",
    year: "2025",
    coverImage:
      "https://res.cloudinary.com/dbwrnwa3l/image/upload/f_auto,q_80,c_fill,w_1200,h_800/v1788801519/5_Star_Decor_dxffyl.png",
    tagline: "High-Conversion Paid Search & Dynamic Catalog Scaling",
    headline: "Scaling High-Ticket Custom Furniture Sales via Google Shopping",
    metrics: [
      { label: "return on ad spend (ROAS)", value: "5.4x" },
      { label: "increase in online revenue", value: "+210%" },
      { label: "reduction in cost per acquisition", value: "28%" },
      { label: "custom trade inquiries", value: "320+" },
    ],
    overview:
      "5 Star Decor manufactures bespoke luxury furnishings and custom upholstery for prestigious interior designers and high-end residential estates. Sparklines Studio restructured their paid advertising infrastructure across Google Performance Max and targeted Meta catalogs, driving qualified trade inquiries and direct consumer orders.",
    objectives:
      "Scale high-ticket furniture inquiries, reduce customer acquisition costs, and expand market share among commercial interior designers and homeowners.",
    challenges:
      "Managing complex custom dimensions and high price points within standard automated advertising algorithms.",
    results:
      "Generated an average 5.4x ROAS, decreased CPA by 28%, and established 5 Star Decor as a leading national supplier for luxury residential projects.",
    tags: ["Google Ads", "Performance Max", "Catalog Retargeting", "E-Commerce CRO"],
  },

  // =========================================================================
  // 4. COMMERCIAL VIDEO & SPATIAL MEDIA
  // =========================================================================
  {
    id: "decadent-depictions",
    customHref: "/#contact",
    title: "Decadent Depictions — Cinematic Commercial Production",
    client: "Decadent Depictions",
    category: "Video Productions",
    categorySlug: "video-productions",
    industry: "Hospitality & Commercial Cinematography",
    year: "2026",
    coverImage:
      "https://res.cloudinary.com/vt5gqi1c/image/upload/f_auto,q_80,c_fill,w_1200,h_800/v1790754956/image_5_lrkzwt.webp",
    tagline: "High-Speed Commercial Cinema & Viral Vertical Food Reels",
    headline: "Hypnotic Macro Gastronomy Commercials Commanding Millions of Views",
    metrics: [
      { label: "organic reel views", value: "4.8M+" },
      { label: "client follower expansion", value: "+84k" },
      { label: "direct reservation lift", value: "65%" },
      { label: "average watch completion rate", value: "78%" },
    ],
    overview:
      "Decadent Depictions produces high-speed macro food cinematography and cinematic commercial spots for luxury dining institutions and premium culinary brands. Sparklines Studio filmed, color-graded, and deployed viral short-form sequences engineered for maximum viewer retention and booking conversion.",
    objectives:
      "Elevate dining brand prestige through mouth-watering 4K cinematography, bespoke sound design, and viral social distribution.",
    challenges:
      "Capturing molten textures, steam, and liquid pours under intense high-speed cinema lighting without degrading delicate culinary presentations.",
    results:
      "Generated over 4.8 million organic video views, drove a 65% surge in direct table reservations, and established the series as a benchmark in culinary content.",
    tags: ["Cinema 4K", "Macro Cinematography", "Viral Social Reels", "Sound Design"],
  },
  {
    id: "chiffon-spice",
    customHref: "/#contact",
    title: "Chiffon & Spice — Artisanal Pastry Brand & Social Cinema",
    client: "Chiffon & Spice",
    category: "Video Productions",
    categorySlug: "video-productions",
    industry: "Luxury Bakery & Social Video Production",
    year: "2026",
    coverImage:
      "https://res.cloudinary.com/vt5gqi1c/image/upload/f_auto,q_80,c_fill,w_1200,h_800/v1790754957/image_9_jazm8w.webp",
    tagline: "Artisanal Baking Cinema Driving 310% Pre-Order Surges",
    headline:
      "Aesthetic Video Storytelling and French Confectionery Brand Craft",
    metrics: [
      { label: "surge in holiday pre-orders", value: "310%" },
      { label: "organic social engagement", value: "+440%" },
      { label: "average reel watch time", value: "24s" },
      { label: "wholesale catering inquiries", value: "85+" },
    ],
    overview:
      "Chiffon & Spice crafts exquisite French pastries, wedding dessert installations, and bespoke cake collections. Sparklines Studio directed a cinematic social video series highlighting the delicate layering, fluting, and confectionery precision that goes into every pastry.",
    objectives:
      "Capture the beauty and artisanal craftsmanship of French pastry making to drive consumer pre-orders and lucrative corporate catering deals.",
    challenges:
      "Filming inside a working boutique kitchen with rapid turnaround times while maintaining pristine lighting and editorial color grades.",
    results:
      "Resulted in an unprecedented 310% surge in seasonal pre-orders, selling out seasonal collections within hours of video drops.",
    tags: ["Culinary Cinema", "Social Video Strategy", "Brand Storytelling"],
  },
  {
    id: "aura-living",
    customHref: "/#contact",
    title: "Aura Architectural Living — Spatial 3D Platform",
    client: "Aura Architectural Living",
    category: "Video Productions",
    categorySlug: "video-productions",
    industry: "Property Development & 3D Architectural Visuals",
    year: "2025",
    coverImage:
      "https://res.cloudinary.com/dbwrnwa3l/image/upload/f_auto,q_80,c_fill,w_1200,h_800/v1790754957/image_10_xrm6rx.webp",
    tagline: "Interactive 3D Walkthroughs & Cinematic Architectural Renders",
    headline:
      "Photorealistic Virtual Reality Platform for Off-Plan Luxury Residences",
    metrics: [
      { label: "pre-construction sales value", value: "$42M" },
      { label: "virtual tour engagement time", value: "6m 40s" },
      { label: "foreign buyer reservations", value: "58%" },
      { label: "reduction in physical sales cycle", value: "45%" },
    ],
    overview:
      "Aura Living creates modernist architectural residences with clean lines, expansive floor-to-ceiling glass, and serene natural landscaping. Sparklines Studio built interactive 3D virtual walkthroughs and cinematic 4K render films that enabled off-plan buyers to experience spaces before ground was broken.",
    objectives:
      "Accelerate off-plan luxury property sales through photorealistic 3D virtual tours and cinematic architectural video walk-throughs.",
    challenges:
      "Rendering photorealistic lighting, reflections, and natural foliage at 60fps across mobile and desktop browsers without latency.",
    results:
      "Facilitated $42M in pre-construction property sales with over half of buyers reserving residences entirely through the digital 3D platform.",
    tags: ["3D Virtual Tours", "Architectural Rendering", "Spatial Web", "Luxury Property"],
  },
];
