import type { SeoBuyingPage } from "./seo-buying-types";

export const technicalBuyingPages: SeoBuyingPage[] = [
  {
    slug: "technical-seo-audit-pricing",
    name: "Technical SEO Audits",
    title: "Technical SEO Audit Pricing and Deliverables",
    description: "Compare technical SEO audit pricing by site complexity and scope. Get a quote for diagnosis, developer-ready fixes and optional release verification.",
    heading: ["Technical SEO audit pricing", "and what you get"],
    intro: "Technical SEO audit pricing depends on the templates and issues we need to investigate. Tell us which pages are missing, duplicating or behaving unexpectedly. We’ll scope a review that gives your developers affected URLs, evidence, priorities and a test for each proposed fix.",
    sections: [
      {
        id: "technical-seo-audit-pricing",
        title: "What affects technical SEO audit pricing?",
        style: "pricing",
        paragraphs: [
          "A technical SEO audit is a defined project. We quote it around the URL inventory, number of distinct templates, access to data and depth of investigation. Checking an indexing pattern on a small brochure site takes different work from tracing rendering and canonical conflicts across a catalogue. Include all versions, subdomains and relevant environments when asking for a quote.",
          "Ask for diagnosis, implementation and release checks to be itemised. Your development team can take the backlog, or we can agree which fixes we can make and what needs a developer. Follow-up testing should have a clear boundary, including which pages and deployments are covered.",
          "A useful audit item gives your developer a reproducible example. For instance, if two templates disagree about a canonical URL, we record the affected patterns, show the intended destination and specify what to check after the next deployment.",
        ],
      },
      {
        id: "fit",
        title: "When a technical review is worth commissioning",
        paragraphs: [
          "Consider an audit when key landing pages disappear from Search Console, a section takes unusually long to surface, or a template release creates duplicate URLs. A crawl report alone may list thousands of warnings. We look for a pattern, test affected pages and explain why it matters for the URLs your business depends on.",
          "An investigative review can also be useful before a big development cycle. If your backlog already includes improving a menu, changing a page template or retiring a URL family, set technical acceptance criteria before work starts. That gives your team a clear way to test the intended behaviour before and after release.",
        ],
      },
      {
        id: "technical-scope",
        title: "The checks and handover you can scope",
        style: "scope",
        details: [
          { id: "indexing-troubleshooting", title: "Indexing and deindexing troubleshooting", body: "We compare affected and healthy URLs in Search Console, then check crawl paths, status codes, canonical signals, index directives and sitemap membership. The findings distinguish a reproducible site issue from cases where available evidence leaves the cause uncertain." },
          { id: "javascript-seo-audits", title: "JavaScript rendering checks", body: "We compare the response and rendered pages on key templates. Typical checks include whether navigation links, core page content and intended canonical signals are present when the page renders. Evidence includes representative URLs and reproduction steps for developers." },
          { id: "core-web-vitals", title: "Page performance and Core Web Vitals", body: "We use available field data and controlled diagnostic tests to flag slow or unstable template patterns. We review issues such as heavy media, layout shifts and expensive scripts, then agree who can implement and test the changes." },
          { id: "schema-markup", title: "Structured data implementation checks", body: "For agreed templates, we review whether markup describes the visible content and whether duplicate or invalid output needs correcting. We can scope implementation and validation with your team. Eligibility can be checked, while display is determined by the search engine." },
        ],
        source: { title: "Google’s JavaScript SEO troubleshooting guidance", url: "https://developers.google.com/search/docs/crawling-indexing/javascript/fix-search-javascript" },
      },
      {
        id: "technical-seo-implementation",
        title: "From technical consulting to implementation",
        paragraphs: [
          "Bring Search Console access, a short history of recent releases and a contact who understands the platform. We establish a baseline and confirm priorities against affected search landing pages. If you want a technical SEO consultant to advise your developers, ask for the review sessions and documentation to be scoped. We quote the agreed work without advertising a standard hourly rate.",
          "Every proposed fix should specify the affected page type, expected behaviour and a test. On an implementation project we verify what shipped, log anything blocked and agree a follow-up for signals that need time to update. You receive a record of decisions and open items.",
        ],
      },
      {
        id: "example",
        title: "Illustrative example | Missing location pages",
        style: "example",
        paragraphs: [
          "A new branch template appears in a sitemap but its key text and links only load after a user interaction. The audit compares its initial and rendered output with a healthy page, then gives developers testable acceptance criteria for visible information and links. Once the template is updated, we inspect representative branches and track subsequent indexing observations.",
        ],
      },
    ],
    faqs: [
      ["Can our team implement the findings?", "Yes. Ask for the reproducible evidence, priority order and acceptance checks. If you already have an audit, tell us which items are ready for implementation and where you want an additional review."],
      ["Can you give a second opinion on another SEO audit?", "Share the report, the claims you want reviewed and representative URLs. We can scope a focused review that states which findings we can reproduce, how they affect pages you rely on, and which recommendations have dependencies or need more evidence. This also works when two providers disagree about how to handle the same template."],
      ["What if organic traffic has fallen without a migration?", "Share the affected dates, technologies, pages and any recent demand or tracking changes. We can discuss a diagnostic scope that checks whether a technical cause is supported by the evidence before proposing repairs."],
      ["How will we know the work is complete?", "Agree whether completion means a delivered audit, verified fixes, or both. Search Console follow-up can be scoped separately for changes whose effects take time to observe."],
    ],
    related: ["website-migration-seo-consultant", "seo-recovery-after-website-migration", "ecommerce-technical-seo-audit-services"],
    inquiry: { label: "Get a technical audit quote", prompt: "Send your website and one or two affected URLs. Include any upcoming release and tell us who handles code changes." },
  },
  {
    slug: "website-migration-seo-consultant",
    name: "Website Migration and Redesign SEO",
    title: "Website Migration SEO Consultant for Redesigns and Moves",
    description: "Hire a website migration SEO consultant to map URLs, review staging and verify your redesign or domain move. Get a quote based on your launch plan.",
    heading: ["Website migration", "SEO consultant"],
    intro: "Bring in a website migration SEO consultant before the new URL structure is locked. We identify the pages your enquiries depend on, map old URLs to suitable destinations, and agree what must pass on staging and at launch. Share your proposed go-live date so we can work out where your release team needs support.",
    sections: [
      {
        id: "before-launch",
        title: "Before launch | Protect the pages that matter",
        paragraphs: [
          "Start when the new information architecture can still change. We inventory old URLs using available crawl, sitemap, analytics and Search Console data. Then we identify pages, files and content that support discovery or conversions, agree which stay or move, and record where old URLs should resolve. Your team can use that map to test whether the new destination still meets the visitor’s need.",
          "On staging, we sample the templates that matter most. We check navigation, rendered content, canonical and indexing rules, metadata and enquiry paths. We agree which staging protections must be removed from the public site, which redirects need testing and who has authority to delay the release if a critical check fails.",
        ],
      },
      {
        id: "launch-and-monitor",
        title: "During the move and in the weeks after",
        style: "scope",
        details: [
          { title: "Verify the release", body: "The team with deployment access ships the changes. We check the live responses on agreed legacy URLs, follow them to the intended final pages and look for loops, unexpected chains or broken destinations. We also review index directives, sitemap contents, important navigation and conversions on the live site." },
          { title: "Watch the old and new URLs", body: "We review selected landing pages, crawl errors and Search Console trends alongside traffic and enquiry data. For an eligible domain move, we agree who handles Search Console actions on the verified properties. We record anomalies and route issues to named owners while both teams still have release context." },
          { title: "Hand over a record your team can use", body: "You receive the agreed URL map, QA evidence, unresolved issues and recommendations for follow-up. Define the monitoring window in the proposal, including who checks alerts after handover and what warrants a fresh investigation." },
        ],
        source: { title: "Google’s guidance for site moves with URL changes", url: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" },
      },
      {
        id: "migration-mapping",
        title: "When you need part of the migration scope",
        paragraphs: [
          "Some teams have already designed and built the new site by the time they ask for help. First confirm whether you need someone to review a plan your team owns or to take responsibility for specific parts of the move. A separate migration audit can review a draft map and staging build. If you need delivery support, agree which launch activities your team can cover and where we need to be involved.",
        ],
        details: [
          { id: "redirect-mapping", title: "Website migration redirect mapping", body: "If your team needs a map to implement, agree which legacy URL sources to include and which proposed pages are ready. The map records old and new destinations, dispositions for removed URLs, validation status, and exceptions that need a business or engineering decision." },
          { id: "enterprise-migration", title: "Scoping a larger or phased migration", body: "Start by identifying the domain, template and language owners for each release wave. Agree which priority page groups require full coverage and which can be sampled. Name the teams that can test against production, resolve cross-domain redirect conflicts and decide whether the next phase can go ahead." },
        ],
      },
      {
        id: "migration-seo-pricing",
        title: "What does a website migration SEO consultant cost?",
        style: "pricing",
        paragraphs: [
          "A migration is a project quote. Cost depends on the number and variety of URLs, overlap between old and new content, CMS or domain changes, the quality of staging access and the monitoring period. A multilingual release or phased domain consolidation adds coordination and checks. Share the launch window and clarify who owns redirect deployment, analytics, content transfer and rollback decisions.",
          "Before committing to the move, ask who can change the destination if an important old page has no equivalent on staging. A named decision owner keeps the issue from surfacing for the first time during launch.",
        ],
      },
      {
        id: "example",
        title: "Illustrative example | A manufacturer’s redesign",
        style: "example",
        paragraphs: [
          "A manufacturer is moving product specifications from individual pages to a rebuilt catalogue. Before launch, we would compare old landing-page data with the new inventory, preserve useful specification content, and map legacy URLs to comparable product or category pages. During launch we would test priority routes and quote forms. Afterward we would check discovery, specification downloads and relevant sales enquiries on the moved page groups.",
        ],
      },
    ],
    faqs: [
      ["What if the CMS changes but our URLs stay the same?", "We still check page content, internal links, rendered output, analytics and index directives. A rebuild can change what search engines and customers see even when the address stays the same."],
      ["Can you guarantee stable traffic through launch?", "Traffic can fluctuate while pages are recrawled and assessed. Agree which problems we can prevent, who responds to unexpected losses and how long we will monitor the move."],
      ["What should we provide first?", "Send both domains if available, a launch date, staging access or mockups, analytics and Search Console access, and the names of the teams who can make and approve changes."],
      ["Can we redirect all retired pages to one place?", "Review the intent of the old URLs before choosing targets. If an equivalent page exists, map to it directly. For retired pages without a useful replacement, agree the most appropriate disposition and ensure the new navigation and sitemap reflect it."],
    ],
    related: ["seo-migration-audit-service", "seo-recovery-after-website-migration", "wordpress-to-shopify-seo-migration-services"],
    inquiry: { label: "Discuss your migration launch", prompt: "Send the current site, new platform or domain, and target launch date. A draft map or staging link helps if you have one." },
  },
  {
    slug: "seo-recovery-after-website-migration",
    name: "Post-Migration SEO Recovery",
    title: "SEO Recovery After Website Migration or Redesign",
    description: "Get help with SEO recovery after website migration or redesign. Find out which redirects, content, indexing signals or tracking changes need attention.",
    heading: ["SEO recovery after", "website migration"],
    intro: "SEO recovery after website migration starts with three things: your go-live date, the old and new site addresses, and a few pages that lost traffic. We look for evidence of broken redirects, indexing changes, missing content or interrupted tracking. You get a prioritised repair plan your release team can use.",
    sections: [
      {
        id: "first-checks",
        title: "Send enough evidence to locate the drop",
        paragraphs: [
          "Bring the go-live date, time zone, affected pages and when the decline first appeared. Share Search Console and analytics access for both sites where available, plus any redirect file, release notes and crawl exports. Tell us which leads or sales fell and whether measurement, consent settings or form behaviour changed during the rebuild.",
          "If you have limited records, send old links, sitemaps, archived page copies or any landing-page report you can retrieve. We document which conclusions the evidence supports. A drop across all channels warrants different checks from an organic-only loss concentrated in one directory, language or template.",
        ],
      },
      {
        id: "recovery-audit",
        title: "What a post-redesign traffic drop audit covers",
        style: "scope",
        details: [
          { title: "Locate the pages and searches affected", body: "We compare equivalent periods and group landing pages by directory, template or commercial role. Search Console clicks and impressions can be read alongside analytics and enquiries to see whether the first visible change was in search exposure, site visits or the conversion journey." },
          { title: "Test for repeatable migration faults", body: "We sample old URLs and their new destinations, then test status codes, index directives, canonical signals, internal links and sitemap membership. We check whether pages lost the content, title, navigation links or forms customers used before the redesign." },
          { title: "Write and verify a repair plan", body: "You receive a list of affected pages and the evidence, recommended fix, owner and check for each priority. If implementation is included, we agree who can deploy changes and how we will retest priority URLs and conversion paths after the next release." },
        ],
      },
      {
        id: "engagement",
        title: "How we move from diagnosis to verification",
        paragraphs: [
          "We agree which URL groups matter for the first review and whether a critical fault needs immediate developer attention. For example, if an entire template still carries a staging index directive, verify the problem and route the correction before spending time investigating individual page rankings. We document the first checks and agree what can be repaired safely.",
          "After release, verify the technical behaviour immediately, then review what search and enquiry data show over the agreed period. Record additional site changes and use comparable dates for interpretation. Prioritise clear fixes where you can reproduce the fault and keep alternative hypotheses visible where there is incomplete evidence.",
        ],
      },
      {
        id: "recovery-pricing",
        title: "What does SEO recovery after website migration cost?",
        style: "pricing",
        paragraphs: [
          "A post-migration audit is a defined diagnostic project. The quote reflects how much pre-launch data is available, the number of affected domains and templates, and the urgency and depth of the investigation. If you need repairs and monitoring as well, ask for separate responsibilities and estimates so you can decide who will do the work.",
          "We can review a storefront after a move with an emphasis on the affected revenue-driving categories or collections. Bring orders or conversion data by landing page if available and flag stock, pricing or merchandising changes that could change the comparison.",
          "If Search Console clicks hold steady while analytics visits or form submissions drop, we start by testing measurement and the enquiry path. When impressions also fall in one directory, we trace what changed in that group’s redirects, links and page content.",
        ],
      },
      {
        id: "example",
        title: "Illustrative example | Leads down after a rebuild",
        style: "example",
        paragraphs: [
          "A service company’s strongest old pages now point to the same broad services page, and its call tracking script was replaced. We would check which enquiry routes still work, compare Search Console clicks for old and new landing pages and propose relevant targets where equivalent services still exist. The follow-up would distinguish restored redirects and measurement from changes in subsequent demand.",
        ],
      },
    ],
    faqs: [
      ["Can you tell on the first call what caused the drop?", "An initial discussion helps bound the investigation. Credible diagnosis needs URL samples, timelines and data. We flag gaps and explain what would confirm each likely cause."],
      ["How long does recovery take?", "Timings depend on confirmation of the cause, when changes can ship and when affected pages are processed again. We can verify fixes as implemented and review visibility with you at agreed checkpoints."],
      ["Do we need to revert the redesign?", "The decision belongs with your release owner. We isolate the affected routes and document what verification shows. If the issue is concentrated in a redirect rule, template, or tracking configuration, your team can compare correcting that component with a wider rollback and test the chosen path against the same priority URLs."],
      ["What if we have a Search Console manual action?", "Share whether there is a notice and which URLs it covers when you enquire. A manual action needs a different investigation and scope from post-migration QA."],
    ],
    related: ["website-migration-seo-consultant", "technical-seo-audit-pricing", "ecommerce-technical-seo-audit-services"],
    inquiry: { label: "Get a recovery assessment", prompt: "Send the old and new URLs, your release date and examples of pages that lost traffic or enquiries." },
  },
];
