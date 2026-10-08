export interface ServiceStat {
  label: string;
  value: string;
}

export interface ServiceCapability {
  title: string;
  description: string;
  deliverables: string[];
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  id: string;
  slug: string;
  aliases: string[];
  titleFirst: string;
  titleSecond: string;
  badge: string;
  shortTitle: string;
  tagline: string;
  heroDescription: string;
  heroImage: string;
  heroGradient: string;
  accentColor: string;
  stats: ServiceStat[];
  overviewParagraphs: string[];
  capabilities: ServiceCapability[];
  processSteps: ServiceProcessStep[];
  techStack: { name: string; category: string }[];
  relatedCaseStudyIds: string[];
  faqs: ServiceFaq[];
}

export const SERVICES_CATALOG: ServiceDetail[] = [
  // =========================================================================
  // 1. VIDEO PRODUCTION
  // =========================================================================
  {
    id: "video-production",
    slug: "video-production",
    aliases: ["video", "video-production-studio", "commercial-video"],
    titleFirst: "Video",
    titleSecond: "Production",
    badge: "CINEMA & REELS // CAPABILITY 01",
    shortTitle: "Video Production",
    tagline:
      "Commercial spots, keynote films, and performance reels engineered to captivate audiences and elevate brand prestige.",
    heroDescription:
      "We produce high-impact, cinematic video content crafted for modern digital channels. From 4K commercial hero spots and founder keynote films to rapid-fire social reels, our productions command attention and accelerate conversion.",
    heroImage:
      "https://res.cloudinary.com/vt5gqi1c/image/upload/v1790451083/video-production-bg.jpg",
    heroGradient: "from-blue-900/90 via-slate-900/90 to-zinc-950",
    accentColor: "#2563eb",
    stats: [
      { label: "Views Generated", value: "120M+" },
      { label: "Average Retention Rate", value: "84%" },
      { label: "Cinema Deliverables", value: "4K / 6K" },
      { label: "Turnaround to First Cut", value: "5 Days" },
    ],
    overviewParagraphs: [
      "In an era where attention spans are measured in milliseconds, ordinary video gets skipped. Sparklines Studio approaches video production as a high-leverage growth asset. Every frame, transition, sound bite, and grade is meticulously calculated to evoke prestige, communicate authority, and inspire decisive action.",
      "Our full-stack video department manages the entire lifecycle: concept ideation, storyboarding, scriptwriting, cinema camera operation (RED / ARRI), lighting design, multi-track audio engineering, editorial montage, color grading in DaVinci Resolve, and format-optimized delivery across web, OTT, and social feeds.",
      "Whether launching a flagship product, documenting an architectural masterwork, or scaling paid social campaigns with hook-optimized UGC variations, we deliver motion assets that set your brand apart.",
    ],
    capabilities: [
      {
        title: "Commercial Hero Spots",
        description:
          "High-production brand anthem films designed for web hero banners, paid acquisition, and broadcast.",
        deliverables: [
          "Storyboards & Treatment Deck",
          "Cinema 4K/6K Raw Capture",
          "Custom Sound Design & Mastering",
          "Color Grade (Film Emulation / HDR)",
        ],
      },
      {
        title: "Founder & Keynote Films",
        description:
          "Intimate, authoritative interviews that position company leadership as visionary industry authorities.",
        deliverables: [
          "Multi-Camera Interview Setup",
          "Editorial Script Framing",
          "Teleprompter & Media Coaching",
          "Executive Highlights & B-Roll",
        ],
      },
      {
        title: "Performance Social Reels",
        description:
          "High-converting 9:16 vertical video assets engineered with psychological hooks for Meta, TikTok, and YouTube Shorts.",
        deliverables: [
          "Multi-Angle UGC & Lifestyle Footage",
          "Dynamic Motion Graphics & Captions",
          "A/B Split-Test Hook Variations",
          "Direct-Response Call to Actions",
        ],
      },
      {
        title: "Product & Architectural Macro Films",
        description:
          "Mesmerizing tactile close-ups, robotic camera sliders, and architectural spatial walkthroughs.",
        deliverables: [
          "Macro Lens & Lighting Rigging",
          "Drone & Gimbal Aerial Coverage",
          "3D Motion Tracking & VFX Overlays",
          "High-Bitrate ProRes Web Masters",
        ],
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Creative Treatment & Pre-Production",
        description:
          "We define the narrative arc, visual tone, casting, location scouts, shot list, and technical storyboard before turning on a single camera.",
      },
      {
        step: "02",
        title: "Cinema Shoot & Principal Photography",
        description:
          "Our specialized crew captures pristine 4K/6K RAW footage with cinema optics, tailored lighting rigs, and professional audio capture.",
      },
      {
        step: "03",
        title: "Editorial, Sound & Color Grading",
        description:
          "We craft the rough cut, compose soundscapes, tune voiceover tracks, and grade colors in DaVinci Resolve Studio for a distinct aesthetic.",
      },
      {
        step: "04",
        title: "Omnichannel Delivery & Performance Scaling",
        description:
          "Export in multiple aspect ratios (16:9, 9:16, 1:1, 4:5) optimized for web speed, YouTube 4K, and paid ad platform specs.",
      },
    ],
    techStack: [
      { name: "RED Digital Cinema", category: "Camera Systems" },
      { name: "DaVinci Resolve Studio", category: "Color & Finish" },
      { name: "Adobe Premiere Pro", category: "Editorial" },
      { name: "After Effects", category: "Motion Graphics" },
      { name: "DJI Ronin & Cinema Drones", category: "Stabilization & Aerial" },
      { name: "Aputure & Nanlite", category: "Cinema Lighting" },
    ],
    relatedCaseStudyIds: [
      "zenith-hypercar-film",
      "synthetix-keynote-film",
      "botanica-commercial-spot",
      "haute-horlogerie-macro",
      "palm-residences-cinema",
    ],
    faqs: [
      {
        question: "How long does a typical commercial video project take?",
        answer:
          "Most commercial productions span 2 to 4 weeks from concept approval to final deliverables. For rapid-turnaround performance reels, rough cuts can be ready within 5 business days.",
      },
      {
        question: "Do you handle casting and location permits?",
        answer:
          "Yes. Our production management team handles talent scouting, location agreements, insurance, and municipal permits end-to-end.",
      },
      {
        question: "What formats and aspect ratios do you deliver?",
        answer:
          "We deliver master ProRes 422 files, 4K WebM/MP4, and formatted variants for 16:9 (Desktop/YouTube), 9:16 (Instagram Reels/TikTok), and 1:1/4:5 (Meta Feeds).",
      },
      {
        question: "Can you shoot on-site at our corporate offices or facilities?",
        answer:
          "Yes. We regularly travel nationally and internationally with agile production packages tailored to corporate, retail, and industrial facilities.",
      },
    ],
  },

  // =========================================================================
  // 2. PPC ADVERTISING
  // =========================================================================
  {
    id: "ppc-advertising",
    slug: "ppc-advertising",
    aliases: ["ppc", "paid-ads", "google-ads", "paid-media", "paid-marketing"],
    titleFirst: "Pay-Per-Click",
    titleSecond: "Advertising",
    badge: "ACQUISITION & SCALE // CAPABILITY 02",
    shortTitle: "PPC Advertising",
    tagline:
      "Precision-targeted paid search and social campaigns built to maximize ROAS and scale client pipelines profitably.",
    heroDescription:
      "We engineer scalable customer acquisition engines across Google Search, Meta Ads, and LinkedIn. Leveraging custom audience modeling, algorithmic bid optimization, and dedicated landing page funnels, we turn ad spend into predictable revenue.",
    heroImage:
      "https://res.cloudinary.com/vt5gqi1c/image/upload/v1790451181/pay-per-click-bg.jpg",
    heroGradient: "from-blue-950 via-indigo-950/90 to-zinc-950",
    accentColor: "#f95721",
    stats: [
      { label: "Average Blended ROAS", value: "4.8x" },
      { label: "Managed Ad Spend", value: "$18M+" },
      { label: "Cost Per Acquisition Drop", value: "-42%" },
      { label: "Conversion Tracking Accuracy", value: "99.8%" },
    ],
    overviewParagraphs: [
      "Paid advertising is only expensive when it lacks precision. At Sparklines Studio, we don't buy clicks—we buy high-intent business outcomes. Every campaign is built on deep competitive intelligence, ruthless negative keyword hygiene, and hyper-segmented audience architectures.",
      "We integrate server-side tracking (Conversions API, Google Tag Manager Server Container) to safeguard conversion attribution against privacy updates. This ensures algorithmic bidding models receive clean, high-fidelity signals to bid aggressively on your most profitable prospects.",
      "Coupled with our in-house creative production, we continually test fresh hook concepts, value propositions, and dedicated high-speed landing pages to defeat creative fatigue and maintain record-low acquisition costs.",
    ],
    capabilities: [
      {
        title: "Google Search & Shopping Alpha/Beta",
        description:
          "High-intent keyword architectures targeting users ready to purchase immediately.",
        deliverables: [
          "Single-Theme Ad Group Hierarchy",
          "Comprehensive Negative Keyword Library",
          "Target ROAS & Target CPA Bidding",
          "Dynamic Search & Performance Max Setup",
        ],
      },
      {
        title: "Meta Ads (Instagram & Facebook)",
        description:
          "Full-funnel social acquisition targeting lookalikes, affluent zip codes, and interest overlaps.",
        deliverables: [
          "Broad & Lookalike Audience Modeling",
          "Dynamic Creative Testing (DCT)",
          "Server-Side Conversions API (CAPI)",
          "Retargeting Ladders & Objection Busters",
        ],
      },
      {
        title: "LinkedIn B2B Account-Based Marketing",
        description:
          "Hyper-targeted campaigns reaching C-level decision-makers, company size bands, and industry verticals.",
        deliverables: [
          "Matched Audience & CRM List Ingestion",
          "Sponsored Content & Document Ads",
          "Lead Gen Forms with Direct CRM Sync",
          "Retargeting by Company Domain",
        ],
      },
      {
        title: "Dedicated Landing Page Funnels",
        description:
          "Sub-second load speed landing pages designed exclusively to convert incoming paid traffic.",
        deliverables: [
          "Frictionless Multi-Step Lead Forms",
          "Tailored Messaging Match per Ad Group",
          "Heatmap Tracking & Session Recordings",
          "Continuous A/B Conversion Rate Optimization",
        ],
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Full Account & Pixel Forensic Audit",
        description:
          "We analyze historical search term waste, attribution leaks, pixel configurations, and competitor bidding footprints.",
      },
      {
        step: "02",
        title: "Architecture & Conversion Signal Setup",
        description:
          "We deploy server-side tagging, offline conversion uploads, negative keyword safeguards, and high-converting landing pages.",
      },
      {
        step: "03",
        title: "Aggressive Creative Testing & Launch",
        description:
          "We deploy structured test cohorts with multiple copy angles, visual assets, and bid caps to discover winning combinations.",
      },
      {
        step: "04",
        title: "Algorithmic Scaling & Weekly Briefings",
        description:
          "We scale winning campaigns horizontally and vertically while eliminating underperforming segments and sharing transparent live dashboards.",
      },
    ],
    techStack: [
      { name: "Google Ads & SA360", category: "Search Network" },
      { name: "Meta Ads Manager", category: "Social Acquisition" },
      { name: "LinkedIn Campaign Manager", category: "B2B Targeting" },
      { name: "Google Tag Manager Server-Side", category: "Attribution" },
      { name: "Triple Whale & Northbeam", category: "Attribution Modeling" },
      { name: "Looker Studio", category: "Live Analytics" },
    ],
    relatedCaseStudyIds: [
      "apex-capital-ppc",
      "kinetiq-motors-ev-paid",
      "synthetix-ai-cloud-ppc",
      "maison-moghadam-paid",
      "riviera-estates-ppc",
    ],
    faqs: [
      {
        question: "What is the minimum recommended ad budget to see results?",
        answer:
          "We typically work with brands deploying $3,000 to $100,000+ monthly in media spend. This budget allows the advertising algorithms to gather statistical significance rapidly.",
      },
      {
        question: "How do you handle iOS privacy updates and attribution?",
        answer:
          "We configure Server-Side Tagging via Google Cloud, Meta Conversions API (CAPI), Enhanced Conversions, and first-party UTM parameters to guarantee resilient data tracking.",
      },
      {
        question: "Do you create the ad creatives and copywriting?",
        answer:
          "Yes. Our studio provides end-to-end creative production, including copy, motion graphics, video ads, and landing page builds.",
      },
      {
        question: "How quickly do we see positive ROAS?",
        answer:
          "Google Search campaigns typically produce qualified inquiries within the first 7 to 14 days, with full algorithmic optimization and mature ROAS scaling within 30 to 60 days.",
      },
    ],
  },

  // =========================================================================
  // 3. SOCIAL MEDIA MARKETING
  // =========================================================================
  {
    id: "social-media",
    slug: "social-media",
    aliases: ["social", "social-media-management", "content-marketing"],
    titleFirst: "Social Media",
    titleSecond: "Marketing",
    badge: "AUTHORITY & ENGAGEMENT // CAPABILITY 03",
    shortTitle: "Social Media Marketing",
    tagline:
      "Curated editorial feeds, community growth engines, and organic virality that build enduring brand equity.",
    heroDescription:
      "We transform social channels into high-prestige broadcast networks. By pairing bespoke visual aesthetics with algorithmic content distribution, we attract affluent followers, foster engaged communities, and drive commercial demand.",
    heroImage:
      "https://res.cloudinary.com/vt5gqi1c/image/upload/v1790451192/social-media-marketing-bg.jpg",
    heroGradient: "from-slate-950 via-zinc-900 to-black",
    accentColor: "#3b82f6",
    stats: [
      { label: "Organic Reach Generated", value: "45M+" },
      { label: "Average Engagement Rate", value: "7.8%" },
      { label: "Community Growth Rate", value: "+310%" },
      { label: "Monthly Content Deliverables", value: "30+ Assets" },
    ],
    overviewParagraphs: [
      "In modern luxury and high-growth sectors, your social feed is your flagship storefront. Prospective clients vet your Instagram, LinkedIn, and YouTube channels long before requesting a proposal. An inactive, inconsistent, or visually generic feed erodes brand credibility.",
      "Sparklines Studio treats social media as a cohesive editorial publication. We design bespoke visual guidelines, produce high-fidelity short-form reels, author persuasive captions with narrative depth, and curate an aesthetic grid that commands immediate respect.",
      "Beyond aesthetics, our distribution strategies capitalize on algorithmic trend cycles, strategic hashtag clustering, and active community outreach to expand brand footprint across high-net-worth demographics.",
    ],
    capabilities: [
      {
        title: "Editorial Content Strategy & Calendar",
        description:
          "Monthly roadmaps aligned with key brand launches, seasonal themes, and educational content pillars.",
        deliverables: [
          "Bespoke Monthly Content Calendar",
          "Visual Grid Layout Previews",
          "Copywriting with Tailored Brand Tone",
          "Curated Audio & Sound Trend Sourcing",
        ],
      },
      {
        title: "Short-Form Video Production (Reels/Shorts)",
        description:
          "Fast-paced, hook-driven video snippets designed to capture algorithmic discovery feeds.",
        deliverables: [
          "Original Reel Filming & Editing",
          "Custom Motion Typography Overlays",
          "Captions Optimized for Silent Browsing",
          "Trend Jacking & Fast Turnarounds",
        ],
      },
      {
        title: "Community Management & Executive Presence",
        description:
          "Proactive engagement with industry peers, affluent prospects, and community commentary.",
        deliverables: [
          "Direct Message & Comment Management",
          "VIP & Influencer Outreach Sequences",
          "Executive Ghostwriting on LinkedIn",
          "Monthly Sentiment & Growth Reporting",
        ],
      },
      {
        title: "Influencer & Collab Partnerships",
        description:
          "Partnering with vetted tastemakers and industry figures to amplify brand prestige.",
        deliverables: [
          "Creator Vetting & Compliance Audits",
          "Brief Creation & Contract Negotiations",
          "Asset Approval & Delivery Tracking",
          "Whitelisting & Paid Boost Integration",
        ],
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Brand Voice & Visual Aesthetic Audit",
        description:
          "We analyze your existing footprint, define your visual moodboard, typography standards, and identify competitor gaps.",
      },
      {
        step: "02",
        title: "Pillar Definition & Content Production",
        description:
          "We batch-produce a month of reels, carousels, and photography designed to keep quality unflinchingly high.",
      },
      {
        step: "03",
        title: "Strategic Distribution & Real-Time Engagement",
        description:
          "We schedule posts at peak audience activity windows and engage within the first golden hour to maximize algorithmic velocity.",
      },
      {
        step: "04",
        title: "Analytics Review & Iterative Evolution",
        description:
          "We review what hooked attention, what converted to profile visits, and refine the next sprint accordingly.",
      },
    ],
    techStack: [
      { name: "Figma & Adobe Suite", category: "Design System" },
      { name: "Sprout Social & Metricool", category: "Scheduling & Analytics" },
      { name: "CapCut Pro & DaVinci", category: "Short-Form Video" },
      { name: "Notion", category: "Editorial Calendar" },
      { name: "TrendHunter & Exploding Topics", category: "Trend Sourcing" },
    ],
    relatedCaseStudyIds: [
      "lumina-skin-retargeting",
      "aura-pay-fintech-ads",
      "botanica-lab-skincare",
      "sora-kyoto-hospitality",
    ],
    faqs: [
      {
        question: "How many posts per week do you recommend?",
        answer:
          "We recommend 4 to 6 high-quality posts per week (a combination of Reels, high-value carousels, and single images), prioritizing exceptional visual craftsmanship over daily filler.",
      },
      {
        question: "Do you handle comment replies and customer DMs?",
        answer:
          "Yes, we provide community management tiers where our team monitors and responds to comments and flags warm lead inquiries directly to your sales team.",
      },
      {
        question: "Can we review and approve content before it gets published?",
        answer:
          "Always. Content calendars are submitted 7 to 10 days in advance via our interactive client portal for review and one-click approvals.",
      },
      {
        question: "Do you also manage founder and executive LinkedIn profiles?",
        answer:
          "Yes. Executive ghostwriting on LinkedIn is one of our most requested services for B2B founders seeking thought leadership and deal flow.",
      },
    ],
  },

  // =========================================================================
  // 4. SEARCH ENGINE OPTIMIZATION (SEO)
  // =========================================================================
  {
    id: "seo",
    slug: "seo",
    aliases: ["search-engine-optimization", "organic-search", "technical-seo"],
    titleFirst: "Search Engine",
    titleSecond: "Optimization",
    badge: "DOMINANCE & REVENUE // CAPABILITY 04",
    shortTitle: "Search Engine Optimization",
    tagline:
      "Technical architecture, high-intent local domination, and AI Search Optimization (GEO) that deliver perpetual organic revenue.",
    heroDescription:
      "We build organic moats that outrank competitors on Google and generative AI engines (ChatGPT Search, Perplexity, Google Overviews). Through clean technical architecture, authoritative content, and digital PR, we secure permanent visibility.",
    heroImage:
      "https://res.cloudinary.com/vt5gqi1c/image/upload/v1790451362/seo-bg.jpg",
    heroGradient: "from-blue-950/90 via-sky-950 to-slate-950",
    accentColor: "#2563eb",
    stats: [
      { label: "Organic User Growth", value: "+250%" },
      { label: "Top 3 Search Placements", value: "1,400+" },
      { label: "Technical Health Score", value: "98/100" },
      { label: "Google Algorithmic Penalties", value: "0" },
    ],
    overviewParagraphs: [
      "SEO is no longer about stuffing keywords into blog posts. Today's search ecosystem requires surgical technical hygiene, fast server response times, structured entity graphs (Schema.org), and authoritative digital PR that earns real editorial backlinks.",
      "Furthermore, the rise of Generative Engine Optimization (GEO)—such as ChatGPT Search, Perplexity AI, and Google AI Overviews—demands that brands structure their content to be cited as authoritative sources by LLMs. Sparklines Studio leads the industry in multi-platform AI search optimization.",
      "From affluent regional interior design firms to enterprise fintechs, our bespoke search strategies capture clients with high commercial intent at the exact moment they are evaluating providers.",
    ],
    capabilities: [
      {
        title: "Technical SEO & Core Web Vitals",
        description:
          "Deep codebase optimizations ensuring zero crawl bottlenecks and lightning-fast rendering.",
        deliverables: [
          "Lighthouse 95+ Core Web Vitals",
          "Custom JSON-LD Entity & Schema Graphs",
          "Canonicalization & Hreflang Configuration",
          "Robots.txt & XML Sitemap Architecture",
        ],
      },
      {
        title: "Generative Engine Optimization (GEO)",
        description:
          "Engineering brand content to be recommended and cited by ChatGPT, Perplexity, and AI Overviews.",
        deliverables: [
          "LLM Entity Citation Audits",
          "Structured Knowledge Graph Mapping",
          "Brand Authority Citation Campaigns",
          "Conversational Search Query Targeting",
        ],
      },
      {
        title: "High-Intent Commercial Content Engines",
        description:
          "Authoring comprehensive editorial guides and comparison hubs that rank and convert.",
        deliverables: [
          "Semantic Search Gap Analysis",
          "Expert-Authored Content Briefs",
          "Topical Authority Clusters",
          "Search Intent CRO & In-Content CTA Placements",
        ],
      },
      {
        title: "Digital PR & High-Authority Backlinks",
        description:
          "Earning contextual mentions and editorial links from respected publications.",
        deliverables: [
          "Journalist & Editor Outreach (HARO/Connectively)",
          "Original Industry Research & Data Studies",
          "Broken Backlink Reclaiming",
          "Competitor Backlink Interception",
        ],
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Comprehensive 150-Point Technical Audit",
        description:
          "We scan your entire web architecture to identify indexing obstacles, JavaScript rendering issues, redirect chains, and schema gaps.",
      },
      {
        step: "02",
        title: "Topical Authority & Entity Mapping",
        description:
          "We construct a keyword and entity roadmap targeting search queries where user intent translates directly into revenue.",
      },
      {
        step: "03",
        title: "On-Page Execution & Content Rollout",
        description:
          "We optimize existing pages and deploy high-performing pillar clusters with proper internal linking architecture.",
      },
      {
        step: "04",
        title: "Digital PR & Continuous Keyword Tracking",
        description:
          "We build domain authority with real media placements and track rankings, AI citation share, and organic conversions weekly.",
      },
    ],
    techStack: [
      { name: "Ahrefs & SEMrush", category: "Competitive Intelligence" },
      { name: "Screaming Frog SEO Spider", category: "Technical Crawling" },
      { name: "Google Search Console", category: "First-Party Data" },
      { name: "Schema.org & JSON-LD", category: "Structured Data" },
      { name: "Surfer SEO", category: "Semantic NLP Tuning" },
      { name: "Sitebulb", category: "Audit & Visualization" },
    ],
    relatedCaseStudyIds: [
      "aig-travel-insurance",
      "oraanj-interior-seo",
      "contekst-architecture-seo",
      "palm-villas-dubai-seo",
      "luxoria-multilingual-seo",
    ],
    faqs: [
      {
        question: "How long does it take for SEO to deliver tangible results?",
        answer:
          "Technical fixes and low-hanging keyword optimizations often show traction in 30 to 60 days. Meaningful organic traffic jumps and revenue breakthroughs typically mature between 3 and 6 months.",
      },
      {
        question: "How is GEO (Generative Engine Optimization) different from classic SEO?",
        answer:
          "Classic SEO targets traditional Google ten-blue-links. GEO focuses on how AI models (ChatGPT, Perplexity, Copilot) retrieve, synthesize, and cite brand entities in answer summaries. We optimize for both simultaneously.",
      },
      {
        question: "Do you guarantee #1 rankings?",
        answer:
          "No reputable agency guarantees a specific #1 spot due to search engine algorithmic independence. However, our track record across 24+ case studies demonstrates consistent top-3 placements across targeted competitive queries.",
      },
      {
        question: "Will you need access to our CMS and codebase?",
        answer:
          "Yes. To execute technical optimizations, schema deployment, and speed enhancements, our technical engineers collaborate directly with your GitHub repository or CMS.",
      },
    ],
  },

  // =========================================================================
  // 5. WEBSITE DESIGN & ENGINEERING
  // =========================================================================
  {
    id: "web-design",
    slug: "web-design",
    aliases: ["website-design", "web-development", "digital-product"],
    titleFirst: "Website",
    titleSecond: "Design",
    badge: "ENGINEERING & LUXURY // CAPABILITY 05",
    shortTitle: "Website Design",
    tagline:
      "Bespoke digital flagships, fluid motion interactions, and modern Next.js engineering built to convert high-value visitors.",
    heroDescription:
      "We design and build bespoke web flagships that look like modern works of art and perform like precision software. Built with Next.js, Framer Motion, and Tailwind CSS, our digital experiences captivate users and convert visitors into clients.",
    heroImage:
      "https://res.cloudinary.com/vt5gqi1c/image/upload/v1790452239/website-design-bg.jpg",
    heroGradient: "from-zinc-950 via-slate-900 to-blue-950/80",
    accentColor: "#f95721",
    stats: [
      { label: "Lighthouse Performance", value: "99/100" },
      { label: "Conversion Lift After Redesign", value: "+65%" },
      { label: "Mobile Optimization", value: "100%" },
      { label: "Client Retainers Secured", value: "98%" },
    ],
    overviewParagraphs: [
      "Your website is the single most critical asset in your digital ecosystem. Template websites built on bloated drag-and-drop page builders load slowly, feel cookie-cutter, and fail to evoke the premium credibility needed to close high-ticket clients.",
      "Sparklines Studio builds bespoke digital flagships from first principles. We combine Swiss-inspired typographic discipline with modern GPU-accelerated motion design (Framer Motion, Lenis Smooth Scroll) and cutting-edge React / Next.js server architecture.",
      "The result is a digital experience that feels instant, fluid, and memorable. Every button interaction, scroll sequence, and responsive breakpoint is tuned to create an unforgettable first impression.",
    ],
    capabilities: [
      {
        title: "Bespoke UI/UX & High-Fidelity Prototyping",
        description:
          "Every layout designed custom in Figma with interactive micro-interactions and atomic design systems.",
        deliverables: [
          "Complete Responsive Figma Systems",
          "Interactive Prototype Walkthroughs",
          "Custom Typography & Iconography Libraries",
          "Accessibility (WCAG 2.1 AA) Compliance",
        ],
      },
      {
        title: "Next.js & React 19 Frontend Engineering",
        description:
          "Blazing-fast production code with zero layout shift, server components, and clean modular codebases.",
        deliverables: [
          "Next.js App Router Architecture",
          "Tailwind CSS / Vanilla CSS Styling",
          "Turbopack & Optimized Code Splitting",
          "Sub-Second Time-to-Interactive (TTI)",
        ],
      },
      {
        title: "Fluid Motion & Interactive Storytelling",
        description:
          "High-end micro-animations, physics-backed page transitions, and smooth scroll kinematics.",
        deliverables: [
          "Framer Motion Choreography",
          "Curtains Page Transition Systems",
          "Lenis Inertial Smooth Scrolling",
          "Interactive WebGL / 3D Canvas Accents",
        ],
      },
      {
        title: "Headless CMS & Custom Integrations",
        description:
          "Effortless content editing for your team via modern headless CMS solutions and automated deployments.",
        deliverables: [
          "Sanity / Strapi / Contentful Integration",
          "CRM & Stripe Payment Gateway Sync",
          "Automated Vercel CI/CD Pipelines",
          "Automated Daily Database Backups",
        ],
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Architecture, User Flow & Wireframing",
        description:
          "We analyze user conversion journeys, plan information architecture, and map intuitive wireframes before applying visual style.",
      },
      {
        step: "02",
        title: "High-Fidelity Visual Design in Figma",
        description:
          "We craft bespoke desktop and mobile screens, custom typographic treatments, and interactive prototype animations.",
      },
      {
        step: "03",
        title: "Next.js Engineering & Motion Integration",
        description:
          "We build pixel-perfect, accessible React components with clean code, smooth scrolling, and dynamic state management.",
      },
      {
        step: "04",
        title: "Lighthouse Optimization & Worldwide Launch",
        description:
          "We tune Core Web Vitals to 98+, configure SSL/DNS, connect headless CMS hooks, and deploy with zero downtime.",
      },
    ],
    techStack: [
      { name: "Next.js 16 (Turbopack)", category: "Framework" },
      { name: "React 19", category: "Core UI" },
      { name: "TypeScript", category: "Type Safety" },
      { name: "Framer Motion", category: "Animation" },
      { name: "Tailwind CSS v4", category: "Styling" },
      { name: "Figma", category: "Design System" },
      { name: "Vercel Edge Network", category: "Global Infrastructure" },
    ],
    relatedCaseStudyIds: [
      "oraanj-spatial-documentary",
      "nordic-wellness-saas",
      "zenith-vault-fintech",
      "contekst-architecture-seo",
    ],
    faqs: [
      {
        question: "Do you use WordPress or custom code?",
        answer:
          "We build custom, modern web applications using Next.js, React, and TypeScript. For content editing, we connect modern Headless CMS solutions that give your marketing team full autonomy without WordPress plugin bloat or security vulnerabilities.",
      },
      {
        question: "How long does a custom website design and build take?",
        answer:
          "A bespoke marketing flagship typically spans 3 to 6 weeks from initial wireframes to production deployment.",
      },
      {
        question: "Will our website be optimized for mobile and Core Web Vitals?",
        answer:
          "Yes. Every build is rigorously tested across real iOS, Android, and desktop viewports, consistently scoring 95+ on Google Lighthouse audits.",
      },
      {
        question: "Do you offer post-launch maintenance and continuous support?",
        answer:
          "Yes. We offer ongoing maintenance retainers covering feature additions, speed audits, security updates, and continuous conversion rate optimization.",
      },
    ],
  },

  // =========================================================================
  // 6. BRANDING & VISUAL IDENTITY
  // =========================================================================
  {
    id: "branding",
    slug: "branding",
    aliases: ["brand-identity", "branding-identity", "brand-design"],
    titleFirst: "Branding",
    titleSecond: "Identity",
    badge: "PRESTIGE & RECOGNITION // CAPABILITY 06",
    shortTitle: "Branding Identity",
    tagline:
      "Comprehensive visual systems, luxury typography, and brand books that communicate prestige across every touchpoint.",
    heroDescription:
      "We forge brand identities that stand the test of time. Combining strategic positioning with bespoke typography, curated color palettes, and comprehensive design systems, we help ambitious companies command premium market pricing.",
    heroImage:
      "https://res.cloudinary.com/vt5gqi1c/image/upload/v1790452239/branding-bg.jpg",
    heroGradient: "from-stone-950 via-zinc-900 to-slate-950",
    accentColor: "#f95721",
    stats: [
      { label: "Brand Identities Created", value: "40+" },
      { label: "Trademark Clearance Rate", value: "100%" },
      { label: "Comprehensive Brand Guidelines", value: "80+ Pages" },
      { label: "Average Valuation Lift", value: "2.4x" },
    ],
    overviewParagraphs: [
      "A brand is not merely a logo—it is the unspoken perception, emotional resonance, and standard of quality that customers associate with your name. In premium markets, strong visual branding directly justifies high-ticket price points.",
      "At Sparklines Studio, our branding process begins with deep strategic inquiry: discovering what makes your business fundamentally irreplaceable. We then translate this soul into an unmistakable aesthetic vocabulary.",
      "From bespoke typographic pairings and editorial layout grids to tactile print collateral and digital design tokens, we provide an all-encompassing brand kit that equips your team to look world-class at every interaction.",
    ],
    capabilities: [
      {
        title: "Brand Strategy & Positioning Blueprint",
        description:
          "Defining market whitespace, target persona psychology, brand voice, and value propositions.",
        deliverables: [
          "Strategic Market Positioning Matrix",
          "Brand Archetype & Voice Guidelines",
          "Messaging Hierarchy & Taglines",
          "Customer Persona Profiles",
        ],
      },
      {
        title: "Logo System & Monogram Design",
        description:
          "Timeless primary marks, secondary lockups, monograms, and responsive vector icons.",
        deliverables: [
          "Primary, Secondary & Emblem Lockups",
          "High-Resolution Vector Assets (SVG, EPS, PDF)",
          "App Icons & Favicon Toolkits",
          "Dark/Light Mode Contrast Variations",
        ],
      },
      {
        title: "Color Psychology & Luxury Typography",
        description:
          "Curated typographic hierarchy with commercial font licensing recommendations and harmonious color systems.",
        deliverables: [
          "Bespoke Primary & Secondary Color Palettes",
          "Editorial Serif & Sans-Serif Type Pairings",
          "Accessibility & Contrast Certification",
          "Digital Hex / RGB & Print Pantone / CMYK Codes",
        ],
      },
      {
        title: "Master Brand Guidelines & Collateral",
        description:
          "An authoritative 80+ page brand book outlining every usage rule, plus digital & print assets.",
        deliverables: [
          "80+ Page Interactive Brand Guidelines Deck",
          "Corporate Stationery & Business Cards",
          "Pitch Deck & Keynote Presentation Templates",
          "Social Media Kit & Packaging Mockups",
        ],
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Discovery, Strategy & Market Whitespace",
        description:
          "We interrogate your market position, analyze competitor visual tropes, and define strategic aesthetic opportunities.",
      },
      {
        step: "02",
        title: "Creative Direction & 3 Distinct Concepts",
        description:
          "We present three completely distinct creative directions through comprehensive moodboards and real-world mockups.",
      },
      {
        step: "03",
        title: "Refinement, Vector Crafting & Systemization",
        description:
          "We refine the chosen direction, perfecting micro-curves, typographic kerning, color formulas, and spacing math.",
      },
      {
        step: "04",
        title: "Brand Book Delivery & Asset Handoff",
        description:
          "We package print-ready files, web tokens, templates, and deliver your comprehensive master brand manual.",
      },
    ],
    techStack: [
      { name: "Figma", category: "Vector Systems" },
      { name: "Adobe Illustrator", category: "Precision Vector Craft" },
      { name: "Adobe InDesign", category: "Editorial Brand Books" },
      { name: "Adobe Photoshop", category: "Product Mockups" },
      { name: "Pantone Color Matching", category: "Print Precision" },
    ],
    relatedCaseStudyIds: [
      "zenith-vault-fintech",
      "botanica-lab-skincare",
      "oraanj-interior-seo",
      "haute-horlogerie-macro",
    ],
    faqs: [
      {
        question: "What files and formats do we receive upon brand completion?",
        answer:
          "You receive all vector masters (.AI, .EPS, .SVG, .PDF), print-ready CMYK assets with Pantone callouts, web-optimized RGB/PNG formats, favicon packages, and the master Brand Guidelines PDF.",
      },
      {
        question: "How many design concepts do we see?",
        answer:
          "We present 3 distinctly different strategic visual directions in the concept phase, each demonstrated on real-world mockups (packaging, website, business cards, social) so you can envision the complete identity.",
      },
      {
        question: "Do you also help with copywriting and brand naming?",
        answer:
          "Yes. We offer brand naming sprints, trademark preliminary screening, and full tone-of-voice messaging decks.",
      },
      {
        question: "Can this branding system be directly translated into our website?",
        answer:
          "Seamlessly. Because we design and engineer websites in-house, our branding deliverables include ready-to-use CSS design tokens, typography scales, and UI component standards.",
      },
    ],
  },
];
