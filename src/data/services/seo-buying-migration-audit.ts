import type { SeoBuyingPage } from "./seo-buying-types";

export const migrationAuditPage: SeoBuyingPage = {
  slug: "seo-migration-audit",
  name: "SEO Migration Audits",
  title: "Pre-Launch SEO Migration Audit Services",
  description: "Commission a one-time review of your migration plan, redirects and staging site. Get launch risks, evidence, owners, and criteria for retesting.",
  heading: ["Pre-launch SEO", "migration audits"],
  intro: "Your developers have a staging site and a launch date. You need a review of the move before signing off. Sparklines Studio can audit the plan, sample the proposed destinations and explain what should be fixed or retested before go-live. Send the current site, staging access and the draft redirect inventory so we can scope a one-time review.",
  sections: [
    {
      id: "fit",
      title: "When to commission a migration audit",
      paragraphs: [
        "An audit fits when someone else owns the migration and can act on findings. They may have mapped the URLs, changed the navigation or built new templates. A review gives the launch owner an evidence-based way to judge whether customers and search engines can reach relevant destinations after the switch.",
        "Use the audit while time remains to address findings. If the project is still deciding which content to move and who will deploy redirects, migration planning is a better starting point. If the new site is already live and organic performance has declined, bring the baseline and change history to a post-migration diagnosis.",
      ],
    },
    {
      id: "audit-scope",
      title: "What we test and what you receive",
      style: "scope",
      details: [
        { title: "Coverage of priority legacy URLs", body: "We take a sample based on available search and analytics data, the draft mapping and the biggest URL patterns. We check whether planned destinations preserve the original purpose, whether any priority pages have no disposition and who needs to decide where unmatched URLs should go." },
        { title: "Staging readiness", body: "We sample the proposed templates for navigation, rendered content, canonical and index rules, and conversion paths. We distinguish safeguards expected on staging from settings that need to change on production. Where redirects cannot be tested in advance, we identify the checks that must happen on launch day." },
        { title: "Walkthrough and retest criteria", body: "You receive an issue register with example URLs, priority, proposed owners and a check that can confirm the fix. We discuss the findings with the person coordinating release readiness. Agree whether a follow-up retest is included and who signs off after reviewing it." },
      ],
    },
    {
      id: "engagement",
      title: "How the review fits the release schedule",
      paragraphs: [
        "At kickoff, provide staging access, the existing domain and crawl or sitemap data, an old-to-new URL map, and the intended launch timetable. Bring available landing-page metrics and identify the staff who know which pages are commercially important. We agree the audit sample, relevant markets and what evidence must be available before the review can be completed.",
        "We review the proposed behaviour and record gaps with enough context for a developer or content owner to act. At handover, distinguish urgent decisions from issues that can be scheduled after launch. Your release owner decides whether to proceed, and we agree which unresolved checks need a live URL to verify.",
      ],
    },
    {
      id: "pricing",
      title: "How we price an SEO migration audit",
      style: "pricing",
      paragraphs: [
        "The audit is a one-time project. We quote it based on the number of old and new URL patterns, availability and quality of the redirect map, staging access, markets and any retest rounds. A domain consolidation with several template families needs a different review from a redesign that preserves most URLs.",
        "Ask for the agreed coverage, handover date, walkthrough and retest window to appear in the proposal. Redirect implementation, content transfer, launch attendance and monitoring can be discussed as separate migration responsibilities.",
      ],
    },
    {
      id: "example",
      title: "Illustrative example | Reviewing a branch site move",
      style: "example",
      paragraphs: [
        "A chain’s developer plans to move branch pages into a new directory. We would sample key legacy branches, compare the proposed new pages for the same branch details and booking routes, and check whether staging navigation links to them. The findings would specify which targets to correct before release and what the team should test against production once redirects can be exercised.",
      ],
    },
  ],
  faqs: [
    ["Do you need a finished staging site?", "An early plan review can flag missing decisions. To verify rendered templates and paths, we need a representative build and details on any behaviours that differ from production."],
    ["Can you audit a map before redirects exist?", "Yes. We can evaluate coverage and destination relevance using the proposed mapping and available URLs. The actual redirects need separate checks after implementation."],
    ["What if the QA team changes mappings after handover?", "Keep a versioned list of changes and record which checks are affected. If a revised mapping changes the target of a high-value page or a rule that covers many URLs, include it in the retest. We can agree who performs that retest and what evidence a release owner should see before sign-off."],
    ["Can you review several domains together?", "Share the role of each domain, who owns it and how the release will be phased. Those inputs determine audit coverage and whether multiple handovers make sense."],
    ["Can the audit guarantee a safe launch?", "The audit documents evidence and risks within the agreed sample. An authorised release owner should review unresolved items and complete the live checks before closing the project."],
  ],
  related: ["website-migration-seo", "post-migration-seo-recovery", "shopify-migration-seo"],
  inquiry: { label: "Request a migration audit quote", prompt: "Send the current domain, launch date, staging availability and map status. Tell us who owns fixes and whether you need a retest." },
};
