import type { SeoBuyingPage } from "./seo-buying-types";

export const shopifyBuyingPages: SeoBuyingPage[] = [
  {
    slug: "shopify-seo-services-pricing",
    name: "Shopify SEO Services",
    title: "Shopify SEO Services Pricing and Monthly Scope",
    description: "Compare Shopify SEO services pricing for collection updates, product copy, release checks and ongoing reporting. Get a monthly quote for your store.",
    heading: ["Shopify SEO services pricing", "and monthly scope"],
    intro: "Shopify SEO services pricing depends on the collections, products and theme changes you want us to handle each month. We help you improve priority buying pages and verify that new ranges, apps and releases keep those pages easy to find. Your proposal specifies what we can change in Shopify and what your developer owns.",
    sections: [
      {
        id: "monthly-shopify-pricing",
        title: "What drives Shopify SEO services pricing?",
        style: "pricing",
        paragraphs: [
          "Shopify SEO is quoted for your store. The main factors are how often the catalogue changes, how many collections and products need work, the complexity of your theme and apps, and the number of markets involved. A small range with one merchandiser needs a different plan from a store bringing out many products each season.",
          "Compare proposals by asking which activities happen each month, how many priority pages the team can work on, and who owns theme implementation. Agree which content is written, which updates are made in Shopify and which development or app changes need a separate estimate. For a defined diagnosis and handover, request a Shopify SEO audit.",
          "Ask for one example month in the proposal. If a new collection is going live, that month might include a navigation review, briefs for priority products and a post-release check on the collection’s links and search signals.",
        ],
      },
      {
        id: "fit",
        title: "When it makes sense to hire ongoing help",
        paragraphs: [
          "A recurring engagement helps when releases regularly affect discovery. Merchandising may set up a new collection without adding a route from the menu, or an app may change how filters and variants appear. We help prioritise fixes and page improvements in the context of stock and the products you need to sell.",
          "The engagement also fits a team that needs editorial support prompted by actual buyer questions. Your product specialists supply accurate details about sizing, fit or compatibility. We can turn those details into briefs or agreed page updates, then coordinate with the team maintaining the catalogue.",
        ],
      },
      {
        id: "shopify-monthly-scope",
        title: "What we can handle each month",
        style: "scope",
        details: [
          { title: "Collection and navigation work", body: "We match collections to useful search and shopping needs, then review menu links, category descriptions and links between related ranges. We agree which changes to make in Shopify and which require theme work from your developer." },
          { id: "shopify-product-page-seo", title: "Shopify product page SEO", body: "We review priority products for useful titles, descriptions, specifications, internal links and variant behaviour. Scope can include a brief or writing for selected products, with your team confirming product facts. If the same issue affects many products, we check whether it belongs in the template." },
          { title: "Release checks and review", body: "We sample agreed pages after key theme or app updates, check that important information and links appear as expected, and compare landing-page trends with orders where measurement is available. A short backlog documents next steps and anything waiting on your team." },
        ],
      },
      {
        id: "engagement",
        title: "How we work in your store",
        paragraphs: [
          "Bring your store URL, merchandising priorities, recent release history and access to Search Console and analytics if available. Before requesting store access, agree the changes we’ll make and the permissions needed. For updates that touch the theme, work with the developer on review and deployment.",
          "We set a baseline for selected categories and products. Each month, check what shipped, where discovery or orders changed and what else happened in the catalogue. If availability or a promotion changed, account for those factors when interpreting a page’s performance and choosing what to do next.",
        ],
      },
      {
        id: "example",
        title: "Illustrative example | Seasonal collections",
        style: "example",
        paragraphs: [
          "A clothing brand releases collections every season but repeats general copy across similar products. We would agree which evergreen collections should be maintained, review how seasonal pages are linked and update selected product pages with useful sizing and fabric details. Reviews would compare relevant searches and orders on those pages with stock and promotion context.",
        ],
      },
    ],
    faqs: [
      ["Can you work with our Shopify developer?", "Yes. Agree who owns theme and app changes, and which checks need to pass before launch. We can work on agreed content and review representative pages after a release."],
      ["Can we start with just a few product pages?", "Share the products and why they matter. We can scope a focused brief or a set of product page improvements and identify template decisions that affect the wider range."],
      ["Can you work across more than one market?", "Tell us how languages, domains and markets are configured. The scope depends on your setup and which versions need review, content or release checks."],
      ["How do we plan work around a sale or catalogue launch?", "Share your release calendar at kickoff and flag periods when the theme is frozen. We can prioritise briefs and content approvals before a promotion, schedule template changes for a suitable window, and review comparable periods before attributing order changes to SEO."],
      ["Who owns the content and the changes to our store?", "Agree where drafts, approvals and decisions are stored and which collaborator roles are needed. Your team keeps control over who can publish and retains a record of what was changed for each collection or product group."],
    ],
    related: ["shopify-seo-audit-cost", "wordpress-to-shopify-seo-migration-services", "ecommerce-seo-retainer-pricing"],
    inquiry: { label: "Get a monthly Shopify proposal", prompt: "Send your store and the collections you want to grow. Tell us whether you need product copy, theme review or ongoing optimisation." },
  },
  {
    slug: "shopify-seo-audit-cost",
    name: "Shopify SEO Audits",
    title: "Shopify SEO Audit Cost and Deliverables",
    description: "Find out what affects Shopify SEO audit cost. Get a one-time quote for collection, product, theme and indexing checks with a developer-ready handover.",
    heading: ["Shopify SEO audit cost", "and deliverables"],
    intro: "Shopify SEO audit cost depends on how many catalogue, theme and app patterns need testing. In a one-time audit, we examine priority collection and product pages, then give your team a list of what to fix first, the URLs affected and how to verify the changes.",
    sections: [
      {
        id: "shopify-audit-cost",
        title: "What affects Shopify SEO audit cost?",
        style: "pricing",
        paragraphs: [
          "We quote the audit as a one-time project. Cost depends on the catalogue and how many templates, apps, markets and URL patterns need review. A single-market store with a standard theme has fewer combinations to test than a heavily customised store with separate language or regional URLs.",
          "Your quote should distinguish a findings walkthrough from implementation or a later retest. If you plan a theme release soon, send the deadline and confirm whether we can review a preview or staging setup. We agree what evidence the audit needs and which pages will be sampled before starting.",
          "If the audit needs to inform a decision about replacing a theme or removing an app, tell us before we price it. We can scope a comparison of representative pages and record which behaviours each component controls.",
        ],
      },
      {
        id: "fit",
        title: "Who should commission the review?",
        paragraphs: [
          "The audit is for a store owner deciding where to invest, a marketer who needs evidence for a developer, or a team reviewing catalogue discovery after a theme or app change. Start with a few examples of the problem, such as a key collection that lacks impressions or product pages that resolve through several URL paths.",
          "If you are about to change platforms, ask about migration planning so we can review the legacy site and new destinations before release. If you already have a credible backlog and need recurring ownership of changes, the monthly engagement can be scoped around delivery.",
        ],
      },
      {
        id: "shopify-audit-scope",
        title: "What we inspect and hand over",
        style: "scope",
        details: [
          { title: "Discovery across the catalogue", body: "We compare menu, collection and product links against the Shopify-generated sitemap and available indexing data. We check whether important products or ranges have sensible paths from browse pages and review where tracking or conflicting signals obscure the diagnosis." },
          { title: "Theme and app output on representative URLs", body: "We inspect rendered page content, canonical URLs, metadata and structured data where applicable. If filters, variants or apps produce unexpected output, we record examples and describe what the pages should do after a fix." },
          { title: "A prioritised brief for developers and merchandisers", body: "The handover identifies the affected URL patterns, evidence, recommended action and an acceptance check. We distinguish changes that can be made through store content from changes that need theme, app or configuration work." },
        ],
        source: { title: "Shopify’s sitemap guidance", url: "https://help.shopify.com/en/manual/promoting-marketing/seo/find-site-map" },
      },
      {
        id: "engagement",
        title: "Kickoff, evidence review and delivery",
        paragraphs: [
          "Provide the store URL, planned changes, priority collections, and relevant analytics or Search Console access. Tell us which team owns the theme and whether recent app installations or theme edits changed search or conversion behaviour. We confirm the diagnostic questions and select representative page types.",
          "At delivery, we explain how to reproduce the highest-priority findings and review ownership. Agree how your team will track tasks and which URLs they should recheck after deployment. If the brief includes retesting, schedule it once the fixes are live or available in the agreed review environment.",
        ],
      },
      {
        id: "example",
        title: "Illustrative example | A theme change hides key links",
        style: "example",
        paragraphs: [
          "A new Shopify theme shows popular accessories in a carousel but gives shoppers few working links to those collections. We would inspect the actual links and rendered content across the home and product templates, compare discovery for affected and unaffected collections, and suggest a component change with a reproducible check for the developer.",
        ],
      },
    ],
    faqs: [
      ["Do you need full admin access?", "We start with public pages and use the least access the agreed checks require. Read-only reporting and specific collaborator permissions may be enough depending on the question."],
      ["Do you fix every issue in the audit fee?", "The base scope is diagnosis and handover. Implementation, coaching and follow-up can be priced once we know which work you want us to own."],
      ["Can I use the audit with another provider?", "Yes. The findings are written for the team responsible for implementing them and include examples and acceptance checks."],
      ["What if the theme and an app report different information?", "Share the affected URLs and what you expect shoppers to see. We compare the page’s rendered content and available markup with the intended store information. The handover identifies which component appears to generate each output and where a developer should verify the cause before changing it."],
      ["Can the audit distinguish template and catalogue problems?", "Yes. We compare priority products on shared templates, including examples that work as intended. An issue repeated across the sample may warrant a template change. A missing detail confined to several listings may be a catalogue task, which we route to the people who maintain product data."],
      ["How should we prepare for a follow-up?", "Keep a release record and note any additional app, theme or catalogue changes made between reviews. That helps us reproduce the original checks and explain what changed."],
    ],
    related: ["shopify-seo-services-pricing", "ecommerce-technical-seo-audit-services", "wordpress-to-shopify-seo-migration-services"],
    inquiry: { label: "Get a Shopify audit quote", prompt: "Send your store and one or two examples. Tell us if a recent app or theme change affected the pages." },
  },
  {
    slug: "wordpress-to-shopify-seo-migration-services",
    name: "Shopify Migration SEO",
    title: "WordPress to Shopify SEO Migration Services",
    description: "Scope WordPress to Shopify SEO migration services for URL mapping, staging checks and launch monitoring. WooCommerce and Magento moves can also be scoped.",
    heading: ["WordPress to Shopify", "SEO migration services"],
    intro: "Our WordPress to Shopify SEO migration services help you preserve the path from old articles, product pages and category links to the new store. We scope URL mapping, staging checks and launch verification around your catalogue and traffic. If you’re moving from WooCommerce or Magento, we also account for the source platform’s URL patterns.",
    sections: [
      {
        id: "source-platforms",
        title: "What we look for on the old platform",
        details: [
          { id: "wordpress-to-shopify", title: "WordPress to Shopify", body: "Inventory articles, landing pages and important downloads alongside any sales pages. Review custom permalink patterns and decide which content belongs in Shopify pages or blogs, which should stay elsewhere and which old links can be redirected to an equivalent resource." },
          { id: "woocommerce-to-shopify", title: "WooCommerce to Shopify", body: "Compare product, category and variation routes with the planned Shopify products and collections. Check whether old category trees and item options carry useful buying information that needs a new home. Record exceptions for retired products and legacy files linked from product descriptions." },
          { id: "magento-to-shopify", title: "Magento to Shopify", body: "Bring exports of existing URL rewrites, store views, category paths and product identifiers if available. Review which legacy paths customers and search engines use and how those map to products, collections and any configured Shopify markets. Agree who will supply the old platform data and validate any market-specific exceptions." },
        ],
      },
      {
        id: "launch-scope",
        title: "What happens before, during and after launch",
        style: "scope",
        details: [
          { title: "Build the map against real Shopify destinations", body: "We establish a baseline from the old store and check priority URLs against the planned catalogue and content. We identify legacy paths that need additional handling, including paths that Shopify reserves or routes that still resolve. Confirm who can implement each exception before the domain changes." },
          { title: "Check the storefront and the move", body: "Before go-live, sample products, collections, navigation and rendered content. During the release, test agreed redirects at the actual domain, check index signals and sitemap output, and review important shopping and analytics journeys with the release owner." },
          { title: "Monitor priority landing pages", body: "After the move, review agreed legacy routes and new landing pages for broken paths, search activity and store outcomes. Record unusual changes with merchandising, stock and measurement context. Agree when we will hand the monitoring back to your team." },
        ],
        source: { title: "Shopify’s URL redirect rules", url: "https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect" },
      },
      {
        id: "engagement",
        title: "Who needs to be involved?",
        paragraphs: [
          "Bring the old store owner, the Shopify developer and someone who can approve catalogue and content decisions. Send your planned launch window, exports or crawl data, analytics access where available, and a list of products or guides that drive valuable visits. We agree roles and select the page types that need direct checks.",
          "You receive a mapping and launch checklist for the agreed inventory, with exceptions and owners visible. Your team is responsible for store operations and product data transfer unless a separate scope assigns that work. Set a decision point for critical issues before the release.",
        ],
      },
      {
        id: "pricing",
        title: "What do WordPress to Shopify SEO migration services cost?",
        style: "pricing",
        paragraphs: [
          "The migration SEO project is quoted around the number of templates and legacy URL patterns, access to exports, the availability of comparable Shopify destinations, markets and languages, and post-launch observation. Let us know if the domain, product identifiers or analytics setup will change. Agree who owns imports, redirects outside Shopify and fixes identified during QA.",
          "Give your migration team a separate list of pages that assist a purchase even when they don’t sell anything directly. Buying guides, stockist pages and care instructions may need new destinations or fresh links to the products they support.",
        ],
      },
      {
        id: "example",
        title: "Illustrative example | Moving a store and its guides",
        style: "example",
        paragraphs: [
          "A WooCommerce store has guides that bring customers to a few popular products. Those products are moving to Shopify, while some categories will be merged. We would map existing guides and products to matching destinations, update links in the guides, and test whether readers can still reach the intended product after launch. Review the affected page groups to see how discovery and sales change.",
        ],
      },
    ],
    faqs: [
      ["Can every old address be redirected inside Shopify?", "Shopify has path and status constraints. We check important legacy URLs against the proposed setup and explain exceptions that your developer or hosting provider may need to handle."],
      ["Is monthly SEO part of the move?", "We agree a post-launch monitoring period as part of the project. If you need continuing content, collection or product SEO after handover, request a separate monthly scope."],
      ["How do you handle retired products or changed variants?", "Decide which replacement or range would satisfy someone following the old link. A page for an equivalent model may work when the products genuinely match. Record exceptions where a product or option has no successor so the team can maintain links and catalogue references without sending shoppers to unrelated pages."],
      ["What should we save before switching off the old platform?", "Keep relevant crawl results, URL rewrites, page templates or copies, and available landing-page reports. Make sure someone can explain the old product and category structure after go-live. Those records help the team investigate missing destinations or unexpected changes without depending on access to the old storefront."],
    ],
    related: ["website-migration-seo-consultant", "shopify-seo-services-pricing", "seo-recovery-after-website-migration"],
    inquiry: { label: "Discuss your Shopify move", prompt: "Send the old store URL, source platform and launch date. Tell us which products, collections or guides bring in valuable visits." },
  },
];
