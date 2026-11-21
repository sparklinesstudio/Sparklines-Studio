import type { SeoBuyingPage } from "./seo-buying-types";

export const b2bBuyingPages: SeoBuyingPage[] = [
  {
    slug: "b2b-saas-seo-agency-pricing",
    name: "B2B SEO for SaaS and Specialist Businesses",
    title: "B2B SaaS SEO Agency Pricing and Scope",
    description: "Compare B2B SaaS SEO agency pricing for use-case pages, technical review and lead reporting. Scope the work around demos your sales team can qualify.",
    heading: ["B2B SaaS SEO agency pricing", "and scope"],
    intro: "B2B SaaS SEO agency pricing depends on how much buyers need to learn before they can request a qualified demo. We help SaaS teams turn use cases, integrations and implementation requirements into useful evaluation pages. Manufacturers and managed IT providers can scope the same work around specifications, supported environments and quote requests.",
    sections: [
      {
        id: "b2b-saas-pricing",
        title: "What affects B2B SaaS SEO agency pricing?",
        style: "pricing",
        paragraphs: [
          "A B2B SaaS SEO proposal depends on the complexity of your product, the buyer roles involved, the depth of technical review and the number of use cases or integrations to cover. Interviewing subject experts and getting technical claims approved may take more time than publishing the pages. Agree who supplies examples, reviews requirements and approves updates.",
          "We can scope a defined review if your in-house team needs decisions and briefs. An ongoing engagement can cover a sequence of technical changes, publishing and sales feedback. Ask for those responsibilities, the review cadence and any developer costs to be clear in the quote.",
          "Start with one objection sales hears repeatedly. If buyers keep asking whether your software supports a particular workflow, the proposal can show how we’d turn that question into a useful evaluation page and what would count as a better-qualified demo.",
        ],
      },
      {
        id: "b2b-industries",
        title: "Build pages around how your buyers evaluate",
        style: "scope",
        details: [
          { id: "saas-seo", title: "B2B SaaS buying journeys", body: "We map use cases, integrations and comparisons to the people who use and approve the product. For each priority page, agree what a prospect needs to know about compatibility, onboarding and product limits, and what they should prepare before requesting a demo." },
          { id: "industrial-manufacturers", title: "SEO for industrial manufacturers", body: "We start with actual capabilities, specifications, applications and order requirements. Help procurement teams see which materials, capacities or tolerances are supported and what they should include when requesting a quote. Product or capability pages should be reviewed by the team that can deliver the work." },
          { id: "managed-it-providers", title: "SEO for managed IT providers", body: "We scope pages around the environments you support, delivery coverage, service boundaries and handover expectations. Prospects should be able to tell whether your team supports their systems and what an onboarding conversation will need. Provide approved descriptions of support hours and response commitments." },
        ],
      },
      {
        id: "saas-consulting-and-technical-audit",
        title: "When you need SaaS consulting or a technical audit",
        paragraphs: [
          "If your product and development teams can execute, request a defined consulting brief. Useful outputs can include a map of use-case pages, interview priorities and a release backlog. Agree how many decisions the engagement covers and what form the recommendations should take so your team can use them.",
          "For a technical SaaS review, identify which marketing, documentation and application routes are meant to be public. Share the relevant properties and release history. We can scope checks for index signals, links between documentation and product pages, and rendered content on priority templates. The handover can specify who makes each fix and how to check it.",
        ],
      },
      {
        id: "engagement",
        title: "From first interview to sales feedback",
        paragraphs: [
          "Bring the website, priority offers, buyer roles and examples of qualified and unsuitable enquiries. Share Search Console and analytics where available, and involve a product, sales or engineering owner who can confirm factual details. We agree which pages, technical changes and briefs should come first.",
          "Measure delivery by the agreed pages, fixes and approval steps. When you can share lead feedback, compare enquiry fit across the relevant landing pages and note the use cases prospects mention. Long sales cycles call for reviewing buyer questions and qualified opportunities over a realistic period.",
        ],
      },
      {
        id: "example",
        title: "Illustrative example | A software vendor",
        style: "example",
        paragraphs: [
          "A software vendor gets demos from teams that need an integration it does not support. We would work with product to clarify compatible systems on the integration and use-case pages, add requirements to demo preparation and check that sales knows which pages visitors used. Review whether more demos meet the integration and account criteria the team agreed.",
        ],
      },
    ],
    faqs: [
      ["Can we keep sensitive details out of public copy?", "Yes. Identify evidence and detail your team can approve. Public pages can explain decision criteria and supported use cases while inviting appropriate prospects to discuss confidential details directly."],
      ["Who writes technical claims?", "Your team supplies and approves facts about the product or service. If writing is in scope, we turn those inputs into drafts and agree the number of pages and review steps."],
      ["Can public documentation be part of the engagement?", "Yes, if product and support teams agree which material is public and who maintains it. We can review routes between documentation and commercial pages, flag outdated references and suggest where product or sales content should answer a question earlier. Docs platform changes and review responsibilities should be included in the proposal."],
      ["What if sales has very few qualified opportunities each month?", "Agree a longer review window and record the details sales can share for each worthwhile enquiry. Earlier indicators include discovery for relevant use-case pages and whether visitors reach useful evaluation resources. Use those alongside sales feedback to judge where the next round of work belongs."],
      ["Can you work with our in-house marketing team?", "Yes. Agree which pages and tasks each team owns, how approvals work and who can deploy or schedule changes."],
    ],
    related: ["technical-seo-audit-pricing", "monthly-seo-packages-for-small-business", "website-migration-seo-consultant"],
    inquiry: { label: "Get a B2B SEO proposal", prompt: "Send your site, priority use cases and an example of a good demo or quote request. Tell us who can confirm technical details." },
  },
];
