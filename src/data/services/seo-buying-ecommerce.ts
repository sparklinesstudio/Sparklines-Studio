import type { SeoBuyingPage } from "./seo-buying-types";

export const ecommerceBuyingPages: SeoBuyingPage[] = [
  {
    slug: "ecommerce-seo-retainer-pricing",
    name: "Ongoing Ecommerce SEO",
    title: "Ecommerce SEO Retainer Pricing and Monthly Scope",
    description: "Compare ecommerce SEO retainer pricing based on categories, catalogue size and the work your team needs covered. Get a tailored monthly scope.",
    heading: ["Ecommerce SEO retainer pricing", "for growing stores"],
    intro: "Ecommerce SEO retainer pricing depends on what needs attention across your catalogue and how often it changes. We help store teams make profitable collections easier to find, improve the product information shoppers use, and check what search contributes to orders where measurement allows. Your quote specifies what we own and what stays with merchandising or development.",
    sections: [
      {
        id: "ecommerce-seo-retainer-pricing",
        title: "What drives ecommerce SEO retainer pricing?",
        style: "pricing",
        paragraphs: [
          "We quote ongoing SEO according to catalogue scale, the number of storefronts or markets, the condition of key templates and the work your own team can take on. A small store with a stable range might prioritise a few collections and stronger product information. A retailer with seasonal categories, variants and regular releases may need continuing technical checks as well.",
          "Ask for the recurring priorities and reporting to be shown separately from setup, development and content production. We clarify who builds changes, who approves product details and which template or market releases need separate estimates. This gives you comparable responsibilities when reviewing retainer proposals.",
          "Use the proposal to decide which category work can be shipped ahead of the next merchandising cycle. For example, a homeware team might prioritise permanent dining collections while holding template changes until its seasonal sale ends.",
        ],
      },
      {
        id: "fit",
        title: "When ongoing store SEO makes sense",
        paragraphs: [
          "Use an ongoing engagement when new products, seasonal categories and site releases keep changing how customers reach the catalogue. You may have fewer sales than you expect from unbranded searches, or pages for similar collections competing for the same buying need. We look at coverage, stock depth, commercial priorities and shopper questions before recommending which pages deserve work.",
          "If the main decision is whether a technical fault is limiting discovery, commission a defined technical audit first. If the store is moving platforms, scope the release work around the target launch. These projects can establish a useful starting point for an ongoing plan.",
        ],
      },
      {
        id: "ecommerce-seo-scope",
        title: "What we can work on each cycle",
        style: "scope",
        details: [
          { id: "category-page-seo", title: "Ecommerce category page optimisation", body: "We map priority categories to real shopping needs and check whether navigation, inventory and page information support those needs. An agreed category brief can include the role of the range, how it differs from related categories, helpful product details and internal links to relevant buying guides." },
          { title: "Catalogue health and availability", body: "We examine agreed patterns for filters, variants and discontinued products. Where changes are needed, we specify the expected behaviour for shoppers and search engines, and work with the platform owner to verify that redirects, canonical signals and internal links behave as intended." },
          { title: "Product information and buying guides", body: "We identify gaps such as fit, dimensions, compatibility or materials and turn them into briefs your product team can validate. Where writing or publishing is part of the proposal, we agree the pages, review steps and inputs required." },
        ],
      },
      {
        id: "engagement",
        title: "How we work with your store team",
        paragraphs: [
          "Bring your store, catalogue structure, priority ranges and access to Search Console and analytics where available. Share rough stock and margin priorities, planned launches and the names of people who own merchandising and development. We select a baseline and agree which product groups and metrics the engagement should track.",
          "At each review, we check what was published, where recommendations are blocked and how relevant organic landing pages are performing. Where measurement allows, we look at purchases and revenue by page group alongside changes in inventory, pricing and promotions. With that context, a traffic increase can be assessed against the store’s actual goals.",
        ],
      },
      {
        id: "example",
        title: "Illustrative example | A homeware catalogue",
        style: "example",
        paragraphs: [
          "A homeware brand has thorough product descriptions but several overlapping tableware categories. We would identify which ranges have durable inventory, refine the descriptions and internal links for the categories shoppers can use, and review how temporary filters are linked. The team could then compare relevant discovery and orders for the selected ranges while accounting for promotions and stock changes.",
        ],
      },
    ],
    faqs: [
      ["Can our merchandisers keep editing collections?", "Yes. Agree how changes to naming, URLs, availability and navigation are communicated. That gives the SEO team a chance to review changes that affect priority landing pages."],
      ["How do you handle products that go out of stock?", "We agree rules with merchandising for temporary shortages, discontinued products and replacements. Check whether customers can still reach useful specifications or a suitable alternative. If a page is retired, decide whether an equivalent destination exists and update internal links that would otherwise take shoppers to an unavailable item."],
      ["What should we compare across proposals?", "Ask each provider which page groups they can improve, who owns implementation and how the reporting accounts for seasonal pricing or stock changes. This gives your team a practical way to compare retainers with similar fees."],
      ["Do you work with Shopify and WooCommerce?", "We assess both. Theme, app and developer access determine which changes we can make and how they are deployed. We can discuss another platform after seeing your setup and scope."],
      ["Are product descriptions included?", "Writing can be scoped for selected products or templates. We agree the number of pages, source information and approval process before including it in a recurring proposal."],
    ],
    related: ["ecommerce-technical-seo-audit-services", "shopify-seo-services-pricing", "monthly-seo-packages-for-small-business"],
    inquiry: { label: "Get an ecommerce SEO proposal", prompt: "Send your platform and priority ranges. Tell us which products or categories you want organic search to sell." },
  },
  {
    slug: "ecommerce-technical-seo-audit-services",
    name: "Ecommerce Technical SEO Audits",
    title: "Ecommerce Technical SEO Audit Services",
    description: "Get a quote for ecommerce technical SEO audit services. Review catalogue links, filters, variants and indexing, then get a prioritised backlog for developers.",
    heading: ["Ecommerce technical SEO", "audit services"],
    intro: "Our ecommerce technical SEO audit services are for stores where valuable products or categories are hard to find, or filters and variants create competing URLs. We trace those patterns across representative templates and give your developers a prioritised backlog with example URLs and release checks.",
    sections: [
      {
        id: "fit",
        title: "When a store needs technical diagnosis",
        paragraphs: [
          "A crawl may show many duplicate URLs because filters, sorting, pagination or variants create new routes. Those routes can serve useful shopper needs. We investigate which ones have a clear search role, which are linked repeatedly, and whether the signals on related pages point to the intended destinations.",
          "The audit makes sense if a release changed the templates, if key categories lack discoverable links, or if a stock rule removes products and disrupts the pages that link to them. A sample of affected and healthy pages often gives the development team a clearer starting point than a list of every reported warning.",
        ],
      },
      {
        id: "catalogue-audit-scope",
        title: "What the audit examines and delivers",
        style: "scope",
        details: [
          { title: "Catalogue and crawl inventory", body: "We compare reachable categories, products and generated URLs with XML sitemaps and available indexing data. The audit names patterns that affect discoverability and highlights priority pages with weak internal links or conflicting signals." },
          { title: "Variant and filter behaviour", body: "We sample important category and product templates for index directives, canonicals, status codes and rendered links. Findings explain the expected behaviour for a main product, distinct variants, pagination or filtered views based on how the store works." },
          { title: "Developer handover", body: "You receive a prioritised backlog with evidence, example URLs, estimated impact by page group and checks for the next release. Merchandising decisions that are needed before a technical change can proceed are documented separately from the implementation task." },
        ],
      },
      {
        id: "woocommerce-seo-audit",
        title: "Auditing WooCommerce stores",
        paragraphs: [
          "For WooCommerce, share the theme and relevant SEO, filtering and multilingual plugins. We scope checks around how WordPress and the store create product and category archives, sort or filter links, and variant URLs. Where multiple components output search signals, we sample the live result and identify which part of the stack needs attention. Confirm with your developer whether proposed changes can be tested on staging.",
        ],
      },
      {
        id: "engagement",
        title: "How the audit moves from evidence to delivery",
        paragraphs: [
          "Start with the store URL, Search Console access and a current view of the catalogue. Share which categories contribute most to sales, what releases occurred recently and whether stock or regional rules affected important pages. We jointly choose the templates, markets and URL patterns to review before the work begins.",
          "At handover, walk through the issues in the order your team can act on them. Identify who can change templates, apps or platform settings, and record the conditions that should pass before deployment. If implementation or retesting is commissioned, scope it against the findings and choose representative URLs for verification.",
        ],
      },
      {
        id: "pricing",
        title: "How we quote ecommerce technical SEO audit services",
        style: "pricing",
        paragraphs: [
          "This is a one-time audit. Pricing depends on catalogue complexity, the number of templates and markets, filters or variants, and whether you need support interpreting incomplete data or testing staging. Large catalogues can sometimes be reviewed through representative URL patterns. Agree the depth of sampling, handover format and any follow-up review before kickoff.",
          "Before work starts, name a group of products your team considers commercially important and a few that surface properly today. Comparing both gives developers a reference for separating a repeatable template problem from an isolated merchandising decision.",
        ],
      },
      {
        id: "example",
        title: "Illustrative example | Filters overwhelm useful categories",
        style: "example",
        paragraphs: [
          "A furniture retailer has many filter routes indexed but its main office chair pages are hard to reach. We would map how menu links, pagination and filters lead to those URLs, check canonical behaviour and identify which curated collections deserve stronger links. The handover would include a check for the expected rendered navigation and treatment of filtered pages after release.",
        ],
      },
    ],
    faqs: [
      ["Is a product content rewrite part of the audit?", "The audit can flag missing or duplicated product information where it affects discovery. Writing copy and updating listings can be scoped separately if those are priorities."],
      ["Will you audit every product individually?", "We agree which high-value URLs need individual attention and which can be reviewed through shared rules. For example, if one template renders thousands of similar variants, a carefully chosen sample can reveal the pattern. Specific products with strategically important traffic or conversion should still be tested on their own."],
      ["Can the audit account for temporary promotions?", "Yes. Share dates and examples for promotions, regional store changes and stock events. We can then distinguish an intended temporary change from a sitewide template issue, and give the team criteria for how priority pages should behave between campaigns."],
      ["Is this useful if we already use an SEO plugin?", "Yes. Include the plugin and relevant settings in your brief. We check the actual behaviour of key pages and identify where the theme, store or plugin affects it."],
      ["How is this different from ongoing ecommerce SEO?", "The audit ends with a documented diagnosis and handover. A recurring engagement can take responsibility for improvements and review how new products or releases change priorities."],
    ],
    related: ["shopify-seo-audit-cost", "ecommerce-seo-retainer-pricing", "technical-seo-audit-pricing"],
    inquiry: { label: "Get an ecommerce technical audit quote", prompt: "Send your store, platform and an example of the catalogue problem. Mention any upcoming theme or catalogue release." },
  },
];
