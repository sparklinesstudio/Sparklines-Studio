export interface PortfolioMetric {
  label: string;
  value: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: "Organic Marketing" | "Paid Marketing" | "Video Productions";
  categorySlug: "organic-marketing" | "paid-marketing" | "video-productions";
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
  // ORGANIC MARKETING (8 CASE STUDIES)
  // =========================================================================
  {
    id: "aig-travel-insurance",
    title: "AIG Travel Insurance — SEO & Content Growth",
    client: "AIG Travel Insurance",
    category: "Organic Marketing",
    categorySlug: "organic-marketing",
    industry: "Financial Services & Insurance",
    year: "2025",
    coverImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
    tagline: "Driving Organic Growth and Conversions through Strategic SEO in MENA",
    headline: "Driving Organic Growth and Conversions through Strategic SEO",
    metrics: [
      { label: "growth in website users", value: "44%" },
      { label: "improvement in bounce rate", value: "4.5%" },
      { label: "increase in organic website sessions", value: "4.5%" },
      { label: "increase in goal completions (purchase)", value: "250%" },
    ],
    overview:
      "AIG, a leading travel insurance provider operating in the highly competitive UAE and MENA insurance market, partnered with Sparklines Studio to strengthen its digital presence and drive measurable business outcomes through SEO and strategic content marketing. As the travel insurance sector grew increasingly saturated with both regional and international players, AIG recognised the critical need to enhance online visibility, attract qualified traffic, and convert website visitors into policyholders. The insurance landscape in the region is characterised by price-sensitive consumers, complex product offerings, and intense competition for search engine rankings, making organic discoverability and clear communication essential for success.\n\nIn this context, AIG sought a partner who could not only improve search performance but also translate technical insurance products into accessible, persuasive content that resonates with travellers. The partnership focused on leveraging search engine optimisation, content development, and performance tracking to position AIG as a trusted choice for travellers seeking comprehensive insurance coverage. Sparklines' role was to navigate the complexities of the insurance industry, communicate AIG's product offerings effectively to potential customers, and create a sustainable growth strategy that would increase market share whilst driving direct conversions through the website. This required a deep understanding of both digital marketing mechanics and the unique challenges of promoting financial services in a regulated, trust-dependent industry.",
    objectives:
      "The goal was to generate qualified traffic to AIG's insurance products, increase conversions by driving transactions and policy purchases, and grow AIG's market share in comparison to competitors operating in the region's travel insurance sector.",
    challenges:
      "Operating within the regulated insurance industry required careful navigation of compliance requirements and processes. The partnership needed close collaboration to align content development with AIG's governance frameworks whilst maintaining SEO momentum and brand integrity.",
    results:
      "Over 12 months, AIG achieved an unprecedented 250% surge in direct online policy purchases, a 44% increase in organic user acquisition, and secured top-3 rankings across high-intent travel insurance queries across the GCC.",
    tags: ["Technical SEO", "Content Marketing", "CRO", "Fintech Compliance"],
  },
  {
    id: "oraanj-interior-seo",
    title: "Oraanj Interior Design — High-Intent Architecture SEO",
    client: "Oraanj Interiors",
    category: "Organic Marketing",
    categorySlug: "organic-marketing",
    industry: "Architecture & Luxury Interiors",
    year: "2026",
    coverImage: "https://res.cloudinary.com/dbwrnwa3l/image/upload/f_auto,q_80,c_fill,w_1200,h_800/v1788801541/Oraanj_Interiors_Design_bd8exo.png",
    tagline: "Dominating Ultra-Prime London Interior Architectural Queries",
    headline: "Scaling High-Net-Worth Residential Inquiries Through Programmatic SEO",
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
    id: "luxoria-multilingual-seo",
    title: "Luxoria Heritage — European Multilingual Search Domination",
    client: "Luxoria French Riviera",
    category: "Organic Marketing",
    categorySlug: "organic-marketing",
    industry: "Luxury Hospitality & Real Estate",
    year: "2025",
    coverImage: "https://res.cloudinary.com/dbwrnwa3l/image/upload/f_auto,q_80,c_fill,w_1200,h_800/v1788801474/Luxoria_1_caa7j2.png",
    tagline: "Tri-lingual SEO Strategy for Monaco, Cannes, and Paris Estates",
    headline: "Tri-Lingual HREFLANG Architecture for Ultra-Luxury French Riviera Design",
    metrics: [
      { label: "international organic sessions", value: "220%" },
      { label: "reduction in search bounce rate", value: "32%" },
      { label: "lead quality score improvement", value: "88%" },
      { label: "organic private estate leads", value: "65+" },
    ],
    overview:
      "Luxoria designs and project-manages multimillion-euro estates and boutique hotels throughout Monaco, Saint-Tropez, and Paris. Catering to an elite international clientele spanning French, English, and Arabic speakers, they required an immaculate multilingual organic search architecture that respected diplomatic luxury aesthetics without sacrificing technical indexing performance.",
    objectives:
      "Implement a flawless multi-region international SEO framework and position Luxoria as the premier architect-of-record for overseas real estate investors acquiring French Riviera châteaux.",
    challenges:
      "Complex hreflang canonicalization across localized domains, highly guarded client confidentiality restrictions, and strict French cultural nuances in design terminology.",
    results:
      "Secured #1 international Google rankings in Monaco and the Côte d'Azur for luxury villa architecture, yielding 65 verified private estate consultations.",
    tags: ["Multilingual SEO", "Hreflang Architecture", "Monaco & Paris Luxury"],
  },
  {
    id: "zenith-vault-fintech",
    title: "Zenith Vault — Digital Asset Custody SEO",
    client: "Zenith Vault Technologies",
    category: "Organic Marketing",
    categorySlug: "organic-marketing",
    industry: "Fintech & Institutional Security",
    year: "2025",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    tagline: "Building Institutional Thought Leadership in Cryptographic Storage",
    headline: "Educating Family Offices and Hedge Funds on Cold-Storage Architecture",
    metrics: [
      { label: "organic inbound enterprise demos", value: "+340%" },
      { label: "organic domain rating jump", value: "34 → 72" },
      { label: "time on whitepaper pages", value: "4m 48s" },
      { label: "institutional AUM influenced", value: "$420M" },
    ],
    overview:
      "Zenith Vault engineers hardware-secured, multi-signature custody protocols for sovereign wealth funds and tier-1 family offices. To compete with established Swiss private banks, they needed rigorous technical whitepapers and authoritative search indexing around cryptographic governance, MPC key generation, and custody compliance.",
    objectives:
      "Capture institutional search intent from CIOs, risk managers, and compliance attorneys researching digital asset regulatory requirements across Switzerland, the UK, and Singapore.",
    challenges:
      "Google's stringent E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness) standards on financial topics ('Your Money or Your Life') demanded verified cryptographer authorship and peer-reviewed technical documentation.",
    results:
      "Propelled Zenith Vault into the top organic result for institutional cold-storage protocols, directly driving over $420M in custody onboarding inquiries.",
    tags: ["Fintech SEO", "E-E-A-T Optimization", "Institutional Lead Gen"],
  },
  {
    id: "botanica-lab-skincare",
    title: "Botanica Lab — Clean Cosmeceuticals Organic Growth",
    client: "Botanica Laboratories",
    category: "Organic Marketing",
    categorySlug: "organic-marketing",
    industry: "E-Commerce & Clean Skincare",
    year: "2025",
    coverImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop",
    tagline: "Scaling Non-Toxic Skincare Through Ingredient-Led Search Strategies",
    headline: "Ingredient-Level Semantic SEO Driving 400K Monthly Shoppers",
    metrics: [
      { label: "organic search revenue", value: "+380%" },
      { label: "monthly non-brand organic clicks", value: "410k" },
      { label: "featured snippet captures", value: "310+" },
      { label: "organic customer return rate", value: "54%" },
    ],
    overview:
      "Botanica Lab produces clinical-grade, microbiome-friendly serums and botanicals. Faced with rising customer acquisition costs on paid social, they partnered with Sparklines Studio to build an encyclopedia of dermatological ingredients, skin condition protocols, and clean beauty ingredient breakdowns that attract high-intent beauty buyers organically.",
    objectives:
      "Reduce blended customer acquisition cost (CAC) by building a defensible organic revenue channel capturing consumers searching for specific peptide, ceramide, and botanical formulations.",
    challenges:
      "Navigating FDA advertising guidelines on cosmetic health claims and outranking legacy beauty giants like Sephora and Ulta on competitive non-branded ingredient queries.",
    results:
      "Captured over 310 Google Featured Snippets and grew organic search revenue to become the company's #1 most profitable customer acquisition channel.",
    tags: ["E-Commerce SEO", "Semantic Search", "Product Schema Markup"],
  },
  {
    id: "palm-villas-dubai-seo",
    title: "Palm Residences — Ultra-Prime Real Estate SEO",
    client: "Palm Horizon Developments",
    category: "Organic Marketing",
    categorySlug: "organic-marketing",
    industry: "Luxury Real Estate",
    year: "2026",
    coverImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    tagline: "Connecting Sovereign Wealth Buyers with Palm Jumeirah Waterfront Estates",
    headline: "Strategic Organic Acquisition for AED 50M+ Dubai Waterfront Mansions",
    metrics: [
      { label: "increase in organic ultra-HNW leads", value: "275%" },
      { label: "GCC search visibility index", value: "96.4%" },
      { label: "average inquiry transaction size", value: "AED 42M" },
      { label: "page-1 ranking keywords", value: "88" },
    ],
    overview:
      "Palm Horizon Developments represents exclusive branded residences and beachfront plots on Dubai's iconic Palm Jumeirah. Sparklines Studio engineered an ultra-fast, high-end editorial portal featuring immersive neighborhood guides, private architectural blueprints, and investment intelligence reports tailored to European, Asian, and GCC investors.",
    objectives:
      "Dominate high-net-worth real estate search queries in Dubai without relying on third-party aggregators or broker listing portals.",
    challenges:
      "Aggressive competition from multi-billion dollar brokerage platforms and portal aggregators with massive domain authorities.",
    results:
      "Generated 48 direct buyer inquiries in 6 months for properties valued over AED 40M each, resulting in two direct closed transactions with zero broker commissions.",
    tags: ["Dubai Real Estate", "Luxury Organic Funnels", "Core Web Vitals"],
  },
  {
    id: "sora-kyoto-hospitality",
    title: "Sora Kyoto — Japanese Luxury Ryokan Search Strategy",
    client: "Sora Hospitality Group",
    category: "Organic Marketing",
    categorySlug: "organic-marketing",
    industry: "Boutique Hospitality & Travel",
    year: "2025",
    coverImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop",
    tagline: "Direct Global Bookings for a 12-Suite Private Kyoto Sanctuary",
    headline: "Bypassing OTA 20% Commissions with High-Value Direct Organic Bookings",
    metrics: [
      { label: "direct website bookings", value: "+195%" },
      { label: "OTA commission savings", value: "$320k" },
      { label: "average length of stay", value: "4.2 nights" },
      { label: "organic search conversion rate", value: "3.8%" },
    ],
    overview:
      "Sora Kyoto is an intimate 12-suite sanctuary rooted in traditional Japanese mindfulness and Michelin-starred kaiseki dining. Relying heavily on Booking.com and Expedia had eroded profit margins. We created an enchanting storytelling platform that highlighted cultural provenance, tea masters, and private onsen experiences to drive direct global reservations.",
    objectives:
      "Shift booking distribution from 70% OTA / 30% Direct to 75% Direct / 25% OTA while elevating average daily rate (ADR) among discerning luxury travelers from North America and Europe.",
    challenges:
      "Overcoming international traveler friction around booking cancellation policies, currency conversion, and direct payment trust for $1,800/night accommodations.",
    results:
      "Direct organic bookings soared by 195%, saving the sanctuary over $320,000 in third-party commissions within the first 14 months of deployment.",
    tags: ["Hospitality SEO", "Direct Booking CRO", "Luxury Storytelling"],
  },
  {
    id: "contekst-architecture-seo",
    title: "Contekst Studio — Architectural Heritage & Curation",
    client: "Contekst Architecture",
    category: "Organic Marketing",
    categorySlug: "organic-marketing",
    industry: "European Architecture",
    year: "2026",
    coverImage: "https://res.cloudinary.com/dbwrnwa3l/image/upload/f_auto,q_80,c_fill,w_1200,h_800/v1788801506/Contekst_o2pipv.png",
    tagline: "Curated Architectural Portfolios That Command Global Recognition",
    headline: "Positioning Belgian Modernist Practice as Leading International Studio",
    metrics: [
      { label: "global design press features", value: "48+" },
      { label: "inbound commercial inquiries", value: "+210%" },
      { label: "organic portfolio page views", value: "185k" },
      { label: "average session duration", value: "5m 12s" },
    ],
    overview:
      "Contekst Studio produces minimalist residential masterworks characterized by raw concrete, aged oak, and balanced natural light. Sparklines Studio constructed a lightning-fast Next.js editorial architecture with structured project metadata that earned featured spots across ArchDaily, Dezeen, and top architectural search result carousels.",
    objectives:
      "Convert international critical acclaim into serious private and commercial architectural commissions across Belgium, the Netherlands, and France.",
    challenges:
      "Balancing minimal, image-heavy architectural whitespace with the detailed text and schema markup required by search engines for maximum discoverability.",
    results:
      "Achieved top visual and organic rankings across Western Europe, directly winning a €4.5M boutique hotel commission in Antwerp through organic search.",
    tags: ["Minimalist Architecture", "Image Schema", "Next.js Performance"],
  },

  // =========================================================================
  // PAID MARKETING (8 CASE STUDIES)
  // =========================================================================
  {
    id: "aura-pay-fintech-ads",
    title: "Aura Pay — High-Growth B2B Paid Acquisition",
    client: "Aura Pay UK",
    category: "Paid Marketing",
    categorySlug: "paid-marketing",
    industry: "B2B SaaS & Payments",
    year: "2025",
    coverImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    tagline: "Performance Google & LinkedIn Funnels for Cross-Border Treasury",
    headline: "Scaling Cross-Border Treasury Inbound Demos at 4.8x ROAS",
    metrics: [
      { label: "pipeline value generated", value: "$18.4M" },
      { label: "reduction in customer acquisition cost", value: "42%" },
      { label: "qualified lead to demo conversion", value: "28.5%" },
      { label: "blended return on ad spend", value: "480%" },
    ],
    overview:
      "Aura Pay empowers high-growth tech enterprises to automate FX hedging and international supplier settlements. Struggling with astronomical LinkedIn CPCs and low-intent Google Ads clicks, they engaged Sparklines Studio to engineer a multi-layered retargeting flywheel combining hyper-targeted Google Search with interactive calculator landers and executive LinkedIn video ads.",
    objectives:
      "Slash enterprise customer acquisition costs, bypass low-intent junior queries, and book qualified pipeline with CFOs managing over $10M in annual foreign currency spend.",
    challenges:
      "Fierce bidding competition from legacy financial software giants and strict compliance constraints regarding payment volume guarantees.",
    results:
      "Generated $18.4M in validated pipeline at a 42% lower CAC, securing Aura Pay as the preferred payment infrastructure for 120+ European scale-ups.",
    tags: ["Google Search Ads", "LinkedIn ABM", "Interactive Calculators", "Fintech ROAS"],
  },
  {
    id: "kinetiq-motors-ev-paid",
    title: "Kinetiq Motors — Hypercar Pre-Order Campaign",
    client: "Kinetiq Performance Automotive",
    category: "Paid Marketing",
    categorySlug: "paid-marketing",
    industry: "Luxury Automotive & EV",
    year: "2025",
    coverImage: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1200&auto=format&fit=crop",
    tagline: "Exclusive Reservation Funnel for a €250,000 All-Electric GT",
    headline: "Securing 500 Verified $10,000 Pre-Order Deposits via Meta & YouTube",
    metrics: [
      { label: "pre-order deposits collected", value: "$5.0M" },
      { label: "average cost per reservation", value: "$210" },
      { label: "video campaign view-through rate", value: "71%" },
      { label: "return on advertising spend", value: "2,380%" },
    ],
    overview:
      "Kinetiq Motors unveiled an ultra-limited production electric grand tourer engineered in Munich. Launching a quarter-million euro vehicle required reaching verified ultra-high-net-worth automotive collectors and converting digital intrigue into immediate non-refundable $10,000 allocation deposits.",
    objectives:
      "Sell out the entire initial production allocation of 500 vehicles within 60 days through a laser-focused private invitation funnel.",
    challenges:
      "High purchase price and skepticism toward emerging EV manufacturers required establishing instant credibility, engineering transparency, and visceral sound design.",
    results:
      "The entire 500-unit allocation sold out 18 days ahead of schedule, generating over $5.0M in deposits with an unprecedented 2,380% ROAS.",
    tags: ["Meta Performance", "YouTube Cinema Ads", "Luxury Automotive", "Pre-Order Funnel"],
  },
  {
    id: "lumina-skin-retargeting",
    title: "Lumina Clinical — High-LTV Paid Social Funnel",
    client: "Lumina Skin Clinic",
    category: "Paid Marketing",
    categorySlug: "paid-marketing",
    industry: "Aesthetic Medicine & Skincare",
    year: "2026",
    coverImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
    tagline: "Dynamic Video Retargeting for Harley Street Aesthetic Treatments",
    headline: "Transforming $150 Ad Clicks into $6,000 Treatment Packages",
    metrics: [
      { label: "revenue increase in 90 days", value: "+340%" },
      { label: "cost per booked clinical consultation", value: "£48" },
      { label: "return on advertising spend", value: "720%" },
      { label: "repeat treatment booking rate", value: "68%" },
    ],
    overview:
      "Operating from London's prestigious Harley Street, Lumina Clinical specializes in non-surgical facial rejuvenation and regenerative longevity protocols. With treatment plans averaging £3,000–£8,000, generic discount ads were diluting the brand. We constructed an educational multi-stage paid funnel that led with doctor video testimonials, before-and-after case files, and bespoke booking portals.",
    objectives:
      "Drive fully prepaid consultation bookings with high-income patients while eliminating appointment no-shows and price shopping.",
    challenges:
      "Strict British medical advertising standards prohibiting certain cosmetic claims and aggressive competition from city center clinics.",
    results:
      "Achieved a 720% ROAS, consistently filling doctor schedules 3 months in advance and driving £1.8M in annualized treatment revenues.",
    tags: ["Meta Ads", "Medical Paid Funnels", "High-LTV Retargeting"],
  },
  {
    id: "synthetix-ai-cloud-ppc",
    title: "Synthetix AI — Global Enterprise Search Campaign",
    client: "Synthetix Cloud Systems",
    category: "Paid Marketing",
    categorySlug: "paid-marketing",
    industry: "Enterprise AI & Cloud Infrastructure",
    year: "2025",
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    tagline: "High-Intent Google Performance Max Campaigns for GPU Clusters",
    headline: "Capturing Global AI Engineering Teams with Precision Search Bidding",
    metrics: [
      { label: "enterprise contract value won", value: "$12.2M" },
      { label: "reduction in cost per enterprise MQL", value: "51%" },
      { label: "Google Ads impression share on top terms", value: "84%" },
      { label: "average deal closing speed", value: "32 days" },
    ],
    overview:
      "Synthetix Cloud provides on-demand, sovereign GPU compute clusters for generative AI model training. In a hyper-competitive market where cloud tokens trade at a premium, they needed to win search auctions for terms like 'H100 GPU cluster reservation' while filtering out hobbyist developers.",
    objectives:
      "Generate qualified pipeline with VP of AI Engineering and Chief Data Officers at Fortune 500 enterprises with guaranteed minimum $50k/mo compute contracts.",
    challenges:
      "Massive click fraud on public search terms and competitor bidding inflating commercial CPCs beyond $95 per click.",
    results:
      "Engineered automated bidding algorithms and IP exclusion lists, closing $12.2M in annual recurring cloud contracts within two quarters.",
    tags: ["Google Search", "Performance Max", "Negative Keyword Sculpting", "SaaS B2B"],
  },
  {
    id: "maison-moghadam-paid",
    title: "Maison Moghadam — Private Client Jewelry Acquisition",
    client: "Maison Moghadam Geneva",
    category: "Paid Marketing",
    categorySlug: "paid-marketing",
    industry: "Haute Horlogerie & High Jewelry",
    year: "2026",
    coverImage: "https://res.cloudinary.com/dbwrnwa3l/image/upload/f_auto,q_80,c_fill,w_1200,h_800/v1788801500/MaisonMoghadam_vs9nx6.png",
    tagline: "Private Salon Booking Funnels for Geneva's Historic Jewelers",
    headline: "Exclusive Digital Salon Bookings for Five-Figure Bespoke Gems",
    metrics: [
      { label: "increase in private salon appointments", value: "260%" },
      { label: "average client transaction value", value: "CHF 45k" },
      { label: "acquisition cost per private client", value: "CHF 280" },
      { label: "campaign return on investment", value: "1,600%" },
    ],
    overview:
      "Maison Moghadam crafts museum-grade bespoke jewelry and sources rare natural gemstones in Geneva. To expand beyond their traditional Swiss collector base, they needed an ultra-tasteful digital acquisition strategy that connected with private jet owners and art collectors traveling between Zurich, Dubai, and London.",
    objectives:
      "Book high-intent private salon viewings at their Rue du Rhône atelier for bespoke anniversary and heirloom commissions.",
    challenges:
      "Maintaining an aura of extreme exclusivity and trust without feeling like an commercial e-commerce store.",
    results:
      "Secured 84 private collector appointments yielding over CHF 3.8M in bespoke commission sales at a 1,600% campaign ROI.",
    tags: ["Luxury Jewelry", "High-Net-Worth Targeting", "Private Salon CRO"],
  },
  {
    id: "riviera-estates-ppc",
    title: "Riviera Private Office — Saint-Tropez Luxury Landers",
    client: "Riviera Real Estate Group",
    category: "Paid Marketing",
    categorySlug: "paid-marketing",
    industry: "Ultra-Prime Real Estate",
    year: "2025",
    coverImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200&auto=format&fit=crop",
    tagline: "Targeting International Wealth with Geo-Fenced Google Ads",
    headline: "Geo-Fenced Search Campaigns Capturing High-Ticket Property Investors",
    metrics: [
      { label: "qualified buyer inquiries", value: "112" },
      { label: "closed estate volume influenced", value: "€28.5M" },
      { label: "cost per verified UHNW buyer lead", value: "€140" },
      { label: "average portfolio value per lead", value: "€6.2M" },
    ],
    overview:
      "Riviera Private Office manages off-market sales of secluded estates in Saint-Tropez, Cannes, and Cap d'Antibes. By combining hyper-local geo-fencing around private airports (Nice Côte d'Azur, Cannes-Mandelieu) with custom-coded minimalist presentation landers, we captured international buyers at the moment of arrival.",
    objectives:
      "Directly source qualified buyers for exclusive €5M–€35M properties without public MLS listings.",
    challenges:
      "Extremely narrow target audience requiring strict exclusion of tourists, real estate brokers, and speculative browsers.",
    results:
      "Drove 112 verified private client inquiries resulting in €28.5M in closed estate transactions within the summer season.",
    tags: ["Geo-Fencing", "Off-Market Real Estate", "Minimalist Landers"],
  },
  {
    id: "nordic-wellness-saas",
    title: "Nordic Flow — Subscription Scale via TikTok & Meta",
    client: "Nordic Flow Technologies",
    category: "Paid Marketing",
    categorySlug: "paid-marketing",
    industry: "Health Tech & Mobile Subscriptions",
    year: "2025",
    coverImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
    tagline: "User-Generated Content Testing Flywheel for Mental Longevity App",
    headline: "Scaling from 5,000 to 140,000 Paying App Subscribers in 8 Months",
    metrics: [
      { label: "monthly recurring revenue growth", value: "+540%" },
      { label: "cost per trial activation", value: "$4.12" },
      { label: "day-30 subscription retention", value: "78%" },
      { label: "creative variation testing velocity", value: "45 ads/wk" },
    ],
    overview:
      "Nordic Flow blends scientific heart-rate variability biofeedback with personalized Scandinavian mindfulness routines. To scale their annual $89 subscription tier, Sparklines Studio established a rapid UGC creative testing sandbox deploying 45 fresh video iterations weekly across Meta and TikTok.",
    objectives:
      "Achieve profitable first-day acquisition economics while maintaining high 90-day subscription retention.",
    challenges:
      "High ad fatigue in the crowded mental wellness vertical requiring continuous creative ideation and rapid hook iteration.",
    results:
      "Grew monthly recurring revenue by 540%, expanding paying subscriber base past 140,000 active members.",
    tags: ["TikTok Ads", "Meta UGC", "App Store CRO", "Subscription Scaling"],
  },
  {
    id: "apex-capital-ppc",
    title: "Apex Flow — Algorithmic Wealth Inbound Acquisition",
    client: "Apex Capital Partners",
    category: "Paid Marketing",
    categorySlug: "paid-marketing",
    industry: "Wealth Management & Private Equity",
    year: "2026",
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    tagline: "Executive Inbound Funnels for Discretionary Portfolio Management",
    headline: "Attracting Accredited Investors with Deep-Dive Whitepaper Ads",
    metrics: [
      { label: "new accredited capital committed", value: "$34M" },
      { label: "cost per verified accredited lead", value: "$310" },
      { label: "consultation call show-up rate", value: "92%" },
      { label: "pipeline conversion to active fund", value: "34%" },
    ],
    overview:
      "Apex Flow manages quantitative volatility portfolios for accredited investors and family offices. Instead of aggressive sales tactics, we created authoritative data-driven macro reports distributed through targeted financial search ads and Financial Times network sponsorships.",
    objectives:
      "Generate qualified accredited investor leads seeking capital preservation strategies during market turbulence.",
    challenges:
      "Navigating SEC Regulation D compliance regarding general solicitation and verification of accredited status.",
    results:
      "Secured $34M in new fund commitments with a cost per accredited investor consultation under $310.",
    tags: ["Financial Ads", "Reg D Compliance", "Macro Reports", "Whitepaper Funnels"],
  },

  // =========================================================================
  // VIDEO PRODUCTIONS (8 CASE STUDIES)
  // =========================================================================
  {
    id: "zenith-hypercar-film",
    title: "The Silent Speed — Cinema Launch Campaign",
    client: "Kinetiq Automotive",
    category: "Video Productions",
    categorySlug: "video-productions",
    industry: "Automotive & Luxury Cinema",
    year: "2025",
    coverImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    tagline: "35mm Anamorphic Commercial Film Shot Across the Swiss Alps",
    headline: "Cinematic World-Premiere Film Capturing 4.2M Unpaid Organic Views",
    metrics: [
      { label: "total organic global views", value: "4.2M" },
      { label: "average audience watch duration", value: "2m 18s" },
      { label: "press coverage tier-1 publications", value: "65+" },
      { label: "direct pre-orders generated", value: "140 units" },
    ],
    overview:
      "To debut the world's most powerful electric gran turismo, Sparklines Studio scripted, directed, and produced an atmospheric 3-minute cinema launch film. Captured using vintage 35mm Hawk anamorphic lenses across closed mountain passes in the Swiss Alps, the film showcased the vehicle's silent velocity against snow-capped peaks and modernist architecture.",
    objectives:
      "Ignite global digital sensation and emotional desire for a new luxury marque without conventional automotive clichés.",
    challenges:
      "Shooting in sub-zero alpine conditions with extreme camera cranes, drone chase vehicles, and high-security prototype handling.",
    results:
      "Surpassed 4.2M organic views within 72 hours, featured on TopGear, Hypebeast, and Wallpaper*, directly driving 140 pre-orders.",
    tags: ["35mm Cinema", "Color Grading", "Sound Design", "Automotive Direction"],
  },
  {
    id: "oraanj-spatial-documentary",
    title: "Living in Light — Architecture Docu-Series",
    client: "Oraanj Interior Design",
    category: "Video Productions",
    categorySlug: "video-productions",
    industry: "Architecture & Spatial Film",
    year: "2026",
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    tagline: "4-Part Architectural Storytelling Exploring Light and Space",
    headline: "A 4K Architectural Documentary Elevating Studio Valuation by 300%",
    metrics: [
      { label: "inbound design commissions", value: "£3.4M" },
      { label: "YouTube completion rate", value: "82%" },
      { label: "architectural festival screenings", value: "4" },
      { label: "client conversion rate jump", value: "+45%" },
    ],
    overview:
      "Oraanj wanted prospective clients to understand the philosophy, craftsmanship, and artisan collaboration behind their £2M+ London residential transformations. We directed a quiet, contemplative 4-part architectural docuseries featuring natural daylight studies, material texture close-ups, and homeowner interviews.",
    objectives:
      "Position the studio founders as visionary spatial artists and eliminate fee negotiation by establishing undeniable artistic pedigree.",
    challenges:
      "Capturing natural light evolution throughout dawn-to-dusk cycles in active private homes while respecting client privacy.",
    results:
      "The series became the cornerstone of their studio pitching deck, directly converting 9 out of 10 prospective client meetings into signed contracts.",
    tags: ["Architectural Film", "4K HDR", "Founder Interviews", "Spatial Sound"],
  },
  {
    id: "haute-horlogerie-macro",
    title: "Masters of the Balance — Haute Horlogerie Film",
    client: "Maison Moghadam",
    category: "Video Productions",
    categorySlug: "video-productions",
    industry: "Haute Horlogerie & Micro-Engineering",
    year: "2025",
    coverImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
    tagline: "Extreme Macro Probe Lens Cinema Celebrating Hand-Finishing",
    headline: "100x Magnification Cinema Exploring Swiss Tourbillon Finishing",
    metrics: [
      { label: "Instagram Reels impressions", value: "8.6M" },
      { label: "engagement rate on luxury feeds", value: "9.4%" },
      { label: "direct VIP collector inquiries", value: "52" },
      { label: "earned media media value", value: "$480k" },
    ],
    overview:
      "Capturing the internal mechanical beauty of a hand-chamfered tourbillon movement requires specialized probe lenses capable of focusing within millimeters of spinning balance wheels. We created an intoxicating, sound-designed micro-cinematic journey that celebrated the watchmaker's steady hands and microscopic anglage.",
    objectives:
      "Educate younger collectors on the true artisanal labor behind independent watchmaking and establish virality on visual social channels.",
    challenges:
      "Micro-vibrations and shallow depth of field required motorized micro-stepping camera rigs and custom anti-reflective illumination.",
    results:
      "Generated 8.6M organic impressions across luxury design channels and prompted 52 direct inquiries from collectors across Zurich, Singapore, and New York.",
    tags: ["Macro Probe Lens", "ASMR Sound Design", "Swiss Craftsmanship"],
  },
  {
    id: "botanica-commercial-spot",
    title: "Botanical Alchemy — Broadcast Commercial",
    client: "Botanica Laboratories",
    category: "Video Productions",
    categorySlug: "video-productions",
    industry: "Beauty & Commercial Direction",
    year: "2025",
    coverImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop",
    tagline: "High-Speed Phantom Flex 4K Fluid & Botanical Commercial",
    headline: "1,000 FPS High-Speed Macro Commercial Driving 3.8x Ad Conversion",
    metrics: [
      { label: "ad conversion rate improvement", value: "+280%" },
      { label: "creative ROAS across Meta channels", value: "540%" },
      { label: "brand search volume jump", value: "+145%" },
      { label: "blended video completion rate", value: "68%" },
    ],
    overview:
      "Botanica Lab needed a flagship commercial that conveyed active biological efficacy with organic poetry. Shooting at 1,000 frames per second on the Phantom Flex 4K, we captured serum droplets colliding with cold-pressed rosehip petals, submerged botanical extraction, and luminous skin textures.",
    objectives:
      "Provide a modular video asset library for global broadcast, YouTube preroll, and high-converting TikTok/Meta advertisements.",
    challenges:
      "Liquid physics and surface tension control required custom fluid rigs and specialized heat-resistant studio lighting.",
    results:
      "Delivered a library of 32 modular video cuts that increased customer acquisition ad performance by 280% across the brand's primary paid channels.",
    tags: ["Phantom 4K High Speed", "Fluid Dynamics", "Beauty Commercial"],
  },
  {
    id: "palm-residences-cinema",
    title: "Waterfront Sanctuary — Architectural Cinema",
    client: "Palm Horizon Group",
    category: "Video Productions",
    categorySlug: "video-productions",
    industry: "Luxury Real Estate Cinema",
    year: "2026",
    coverImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
    tagline: "Cinematic FPV Drone and Golden Hour Yachting Film",
    headline: "An Immersive Cinematic Experience Selling an AED 85M Mansion",
    metrics: [
      { label: "property closed sale value", value: "AED 85M" },
      { label: "private client viewing requests", value: "38" },
      { label: "international investor reach", value: "1.8M" },
      { label: "days on market before offer", value: "22 days" },
    ],
    overview:
      "Selling an ultra-prime beachfront mansion requires conveying the emotional sensation of living on the water. Combining high-speed acrobatic FPV drone choreography flying through floor-to-ceiling glass pavilions with sunset yacht approach cinema, we presented an unprecedented visual showcase of waterfront luxury.",
    objectives:
      "Generate emotional urgency and direct private inspection appointments among international high-net-worth buyers visiting Dubai.",
    challenges:
      "Operating high-speed cinematic drones within delicate custom marble interiors while ensuring flawless safety protocols.",
    results:
      "The property received an unconditional offer of AED 85M within 22 days of video publication, establishing a price-per-square-foot record for the community.",
    tags: ["Cinematic FPV", "Yacht Photography", "Dubai Waterfront", "Luxury Real Estate"],
  },
  {
    id: "zenith-vault-security-film",
    title: "The Fortress Protocol — 3D Motion CGI Film",
    client: "Zenith Vault Technologies",
    category: "Video Productions",
    categorySlug: "video-productions",
    industry: "Fintech & 3D Motion Graphics",
    year: "2025",
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    tagline: "Photorealistic 3D Motion Graphics Explaining Cryptographic Governance",
    headline: "Award-Winning 3D Explainer Film Demystifying Multi-Party Computation",
    metrics: [
      { label: "enterprise sales cycle reduction", value: "35%" },
      { label: "video retention rate at 90s", value: "86%" },
      { label: "inbound institutional contracts", value: "$4.8M" },
      { label: "Motion Design Awards recognition", value: "Gold" },
    ],
    overview:
      "Explaining multi-party cryptographic computation (MPC) and cold key shards to corporate boards often causes cognitive fatigue. Sparklines Studio conceptualized and animated a breathtaking 3D CGI film featuring glass kinetic mechanisms, laser data transmission, and subterranean titanium vault architecture.",
    objectives:
      "Make deep technical security architecture instinctively clear and visually irresistible to non-technical executives and enterprise buyers.",
    challenges:
      "Translating abstract mathematical algorithms and zero-knowledge proofs into tangible, photorealistic physical visual metaphors.",
    results:
      "Shortened enterprise sales cycles by 35% and earned Gold at the International Motion Design Awards for technical animation excellence.",
    tags: ["3D CGI Animation", "Cinema 4D & Octane", "Technical Sound Design"],
  },
  {
    id: "sora-kyoto-meditation",
    title: "Silence of the Cedar — Sensory Travel Film",
    client: "Sora Hospitality Group",
    category: "Video Productions",
    categorySlug: "video-productions",
    industry: "Boutique Hospitality & Sensory Film",
    year: "2025",
    coverImage: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1200&auto=format&fit=crop",
    tagline: "Binaural Audio and 8K Visual Meditation from Kyoto's Sacred Temples",
    headline: "Immersive Sensory Travel Film Driving 500+ Suite Waitlist Entries",
    metrics: [
      { label: "suite waitlist submissions", value: "540+" },
      { label: "Vimeo Staff Pick Award", value: "Featured" },
      { label: "repeat watch rate", value: "34%" },
      { label: "direct booking value influenced", value: "$890k" },
    ],
    overview:
      "Shot over three weeks during the autumn foliage in the mountains of Arashiyama, this film captures the subtle sounds of bamboo groves, morning rain on cedar shingles, and the preparation of ceremonial matcha. Recorded using 3D spatial binaural microphones, viewers wearing headphones experience spatial acoustic immersion.",
    objectives:
      "Create an emotional viral cultural artifact that attracts world travelers seeking restorative spiritual luxury in Japan.",
    challenges:
      "Obtaining rare filming permissions inside centuries-old Zen meditation monasteries and working silently without crew disturbance.",
    results:
      "Selected as a Vimeo Staff Pick, creating an organic waitlist of 540+ global travelers eager to book the 12-suite sanctuary upon release.",
    tags: ["Vimeo Staff Pick", "Binaural Audio", "8K Cinematography", "Japan Travel"],
  },
  {
    id: "synthetix-keynote-film",
    title: "Dawn of the Machine — Keynote Opener Film",
    client: "Synthetix Cloud Systems",
    category: "Video Productions",
    categorySlug: "video-productions",
    industry: "AI Technology & Keynote Motion",
    year: "2026",
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    tagline: "Stadium-Scale 8K Keynote Opening Film for 5,000 AI Founders in SF",
    headline: "Hypnotic Stadium LED Motion Graphics Opening Global AI Summit",
    metrics: [
      { label: "live audience attendance", value: "5,200" },
      { label: "social video shares post-keynote", value: "38k" },
      { label: "press live-stream viewers", value: "480k" },
      { label: "enterprise signups during event", value: "1,240" },
    ],
    overview:
      "To inaugurate the annual Synthetix Developer Summit at San Francisco's Moscone Center, we produced a monolithic 90-second 8K widescreen opening animation. Syncing thunderous orchestral synth scoring with hyper-detailed silicon wafer simulations and neural cluster light pulses, the film set an electric tone for the CEO's keynote.",
    objectives:
      "Establish Synthetix as the undisputed titan in cloud AI infrastructure and command attention from the world's most influential technology founders.",
    challenges:
      "Rendering 8K 60fps across an ultra-wide 48:9 LED stage screen aspect ratio with zero frame drops or compression artifacts.",
    results:
      "Elicited a standing ovation from 5,000 attendees, generated 38,000 organic social shares, and drove 1,240 enterprise developer registrations within 48 hours.",
    tags: ["8K Stadium Motion", "Keynote Production", "Orchestral Sound", "Generative Visuals"],
  },
];
