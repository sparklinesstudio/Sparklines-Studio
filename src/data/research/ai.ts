import type { ResearchArticle } from "./types";

export const aiResearch: ResearchArticle[] = [
  {
    slug: "chatgpt-and-claude-crawler-comparison",
    title: "ChatGPT and Claude Crawler Comparison Across Six User Agents",
    description: "We compared six documented ChatGPT and Claude user agents across search, model training and user-triggered retrieval.",
    category: "AI search",
    body: `
<p>Our ChatGPT and Claude crawler comparison reviewed two official documents and six named user agents. We selected one for each of three functions per provider: search, model training and retrieval initiated by a user. OpenAI also lists an ads-validation agent. We left it outside this comparison because reviewing submitted ads is a different decision for a website owner.</p>
<table><thead><tr><th>Function</th><th>OpenAI</th><th>Anthropic</th></tr></thead><tbody>
<tr><td>Search visibility</td><td>OAI-SearchBot</td><td>Claude-SearchBot</td></tr>
<tr><td>Model training</td><td>GPTBot</td><td>ClaudeBot</td></tr>
<tr><td>User-initiated retrieval</td><td>ChatGPT-User</td><td>Claude-User</td></tr>
</tbody></table>
<h2>Why the last row needs its own decision</h2>
<p>Both providers identify a user-initiated function. Their documentation describes different robots.txt behaviour for those agents. OpenAI says user-driven actions may fall outside robots.txt and points site owners to OAI-SearchBot for search preferences. Anthropic describes reserving control over user-initiated access through Claude-User. Apply the provider’s documented controls to the goal you actually have. <a href="https://developers.openai.com/api/docs/bots">OpenAI crawler documentation</a>. <a href="https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler">Anthropic crawler documentation</a>.</p>
<h2>Write a decision record before editing robots.txt</h2>
<p>For each domain, record the public page groups you want eligible for discovery, who owns training preferences and which URLs need real access control. Have a second person check whether the proposed rule applies to the intended user agent. Record the exact choice and the test date in your release log. Keep private content behind authentication appropriate to the content itself.</p>
<p>We compared documentation in November 2026. We did not run a crawl, inspect private logs or test citation changes. If you want help pairing search access with pages that answer buyer questions, explore our <a href="/chatgpt-seo-agency-kolkata">ChatGPT SEO agency Kolkata</a> and <a href="/claude-seo-agency-kolkata">Claude SEO agency Kolkata</a> services.</p>
<p>Once access choices are documented, use an <a href="/blogs/ai-search-source-log">AI search source log</a> to record what buyers can actually see in a repeatable observation.</p>
<h2>What to document for an approval meeting</h2>
<p>Give your content, legal and technical owners a table with each agent, its documented function, the affected host and the decision owner. Put the current rule in one column and the proposed rule in another. In the review, start with the business intent, such as whether public product documentation should be discoverable through a search feature. Ask the release owner to verify the rule is served from the intended host. Then use dated observations to check coverage. Access is one part of a wider discovery process and a crawl log is evidence of access, not a promise that an answer will cite a page.</p>
`,
  },
  {
    slug: "ai-search-source-log",
    title: "AI Search Source Log for Three Assistant Briefs",
    description: "Three assistant briefs led to one shared observation record for prompts, sources, context and useful buyer actions.",
    category: "AI search",
    body: `
<p>We built this AI search source log after coding three service briefs for ChatGPT, Gemini and Claude. Each brief had three named deliverables. Each included an observation or source review alongside improvements to pages or documentation. A useful log had to capture what was observed and give the content owner somewhere to act.</p>
<h2>Four fields for a repeatable observation</h2>
<ol><li><strong>Question and context.</strong> Save the exact wording, date, assistant or mode and any relevant location or conversation context.</li><li><strong>Claim.</strong> Record what the answer said about the product, service or applicability.</li><li><strong>Source.</strong> Record the cited URL or mark the claim as uncited in that observation.</li><li><strong>Next action.</strong> Link to the page your team can correct or to a question that needs more evidence.</li></ol>
<h2>Start with questions that can affect a sale</h2>
<p>A SaaS team could use a question about compatibility, another about setup requirements and a third about alternatives. For each, write the factual claim you expect a buyer to be able to verify. Run the same prompt under comparable conditions before and after a change. If an assistant retrieves a third-party statement, inspect the original before deciding whether your documentation, that source or the prompt itself needs attention.</p>
<p>Keep mentions, cited links and website activity separate. A mention is an observation. Traffic and qualified enquiries require separate measurement. If the same prompt gives different answers, capture the range instead of choosing the most favourable one.</p>
<h2>Turn the record into a publishing brief</h2>
<p>Add a content owner, source of truth and review date to each factual correction. A compatibility table should have a maintainer who notices when a version changes. A service boundary should be checked with the people delivering the work. Our <a href="/ai-seo-agency-kolkata">AI SEO agency Kolkata</a> service describes how this becomes a project. Review the <a href="/blogs/chatgpt-and-claude-crawler-comparison">comparison of assistant crawler functions</a> if access is the first question.</p>
<p>This article compares written briefs. The worksheet is a measurement method and the SaaS prompts are examples. We did not run a visibility or citation experiment.</p>
<h2>An illustrative record for a support team</h2>
<p>Imagine the question asks if a tool can export an invoice. An observation log could say that the answer describes PDF export but cites an older pricing page. The content owner checks the actual plan and updates the public help article to include the supported format and an explicit plan boundary. Save the approved source link with a version date and return to the same prompt later. If the observation changes, record the new claim and citation as a separate row. This example shows how a prompt leads to a verifiable publishing task rather than a broad instruction to write more AI content.</p>
`,
  },
  {
    slug: "gemini-and-google-ai-search-measurement",
    title: "Gemini and Google AI Search Measurement Compared",
    description: "Three official Google pages help define separate records for Search reporting, crawler controls and observations in Gemini.",
    category: "AI search",
    body: `
<p>For this Gemini and Google AI Search measurement comparison, we reviewed three official Google pages covering Search AI features, the optimisation guide, and crawlers. We coded each page by the decision it supports: how to interpret a reporting measure, how to improve Search eligibility or how to choose crawler access. A separate dated Gemini sample is necessary if the question is what a buyer saw in that interface.</p>
<h2>Build three rows in the reporting workbook</h2>
<p><strong>Google Search.</strong> Use the relevant Search Console reports and write down the report name, filters and period. Google documents AI features in Search reporting and describes a generative AI performance report in its optimisation guide. If your property offers that report, preserve its scope in the export. <a href="https://developers.google.com/search/docs/appearance/ai-features">Google AI features in Search</a>. <a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide">Google’s optimisation and measurement guide</a>.</p>
<p><strong>Gemini observations.</strong> Log the prompt, mode, date, observed claims and cited URLs. A single answer has a specific context that a Search Console total does not capture. Mark a missing source explicitly and record if a later run disagrees.</p>
<p><strong>Website outcomes.</strong> Use analytics and lead feedback to describe the visits and enquiries you can measure. Keep attribution assumptions visible. An observed source, an impression and a qualified enquiry are different events.</p>
<h2>Keep access questions with the technical team</h2>
<p>When a stakeholder asks to change crawling, name the product, the affected hostname and the page groups involved. Confirm the documented crawler function before editing directives. Track that decision separately from observation and traffic. <a href="https://developers.google.com/crawling/docs/crawlers-fetchers/overview-google-crawlers">Google crawler overview</a>.</p>
<p>Our <a href="/gemini-seo-agency-kolkata">Gemini SEO agency Kolkata</a> brief uses this distinction when reviewing business facts and observed sources. The <a href="/blogs/ai-search-source-log">AI search source log</a> gives teams a format for recording the assistant side. This is a document comparison and reporting method, with no account-level traffic or assistant usage study.</p>
<h2>What a monthly readout can safely say</h2>
<p>Start the readout with the reported date range and which dataset each number comes from. For instance, if Search Console shows a rise in discovery but the Gemini observation still points to an old product description, keep both observations visible. The product owner can correct the old public source while the analyst reviews website visits and outcomes through the reporting setup available to the business. Resist adding the rows together. A useful board-level summary names the source of the number and which decision is being made next, such as correcting a spec or reviewing landing-page performance.</p>
`,
  },
  {
    slug: "ai-redirect-map-review",
    title: "AI Redirect Map Review Using 12 Real URL Moves",
    description: "A check of 12 redirect rows found 12 distinct destinations and zero chains within the sample. Here’s where AI can help review the exceptions.",
    category: "AI search",
    body: `
<p>This AI redirect map review uses 12 URL moves from our service site. We ran a deterministic check over the source-to-destination map and found 12 unique targets, zero self-redirects and zero targets that also appear as a source in the sample. That last check looks for chains inside the map. It cannot reveal a redirect elsewhere in the hosting stack.</p>
<h2>Give rules to the computer before giving cases to AI</h2>
<p>Start with duplicate sources, blank targets, loops and chains. Those checks have definite answers and should run on the full map. Then verify that the new URLs are canonical and appear in the current navigation and sitemap where appropriate. Run another check against deployed responses to catch rules outside the source file.</p>
<p>An assistant can support a different part of the review. Give it the approved old and new page titles or descriptions and ask it to flag pairs whose purpose appears to differ. Have a human choose the destination using the actual pages. An assistant may treat two similar terms as equivalent even if one page sells a one-time audit and the other offers monthly management.</p>
<h2>Document the reviewer’s verdict at the row</h2>
<p>For each exception, write what the old visitor needed, how the proposed destination answers it, the approval owner and the expected live result. If an old guide reaches a new collection, verify that buying help remains available and that the link leads to products people can purchase. Keep proposed AI changes as suggestions until an owner approves them.</p>
<p>We measured the repository redirect map. We did not benchmark an AI tool’s accuracy. Our <a href="/website-migration-seo-consultant">website migration SEO consultant</a> page describes how the full plan fits a release. Use an <a href="/seo-migration-audit-service">SEO migration audit service</a> when you already have a draft and need someone to challenge it.</p>
<p>Read <a href="/blogs/website-migration-handoff-audit">our four-brief handoff comparison</a> to see where a mapping review ends and launch support begins. <a href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes">Google’s site move guidance</a>.</p>
<h2>Use a human review queue for ambiguous destinations</h2>
<p>Imagine three pages about different annual service plans are consolidated into one overview. A text comparison can flag the similarities, but the reviewer needs to know whether each old plan is still sold and where an existing customer would find its requirements. Keep those rows in a queue with the two candidate destinations and an owner who can confirm the offer. Once the choice is approved, add it to the map and run the deterministic checks again. Repeat the status, content and conversion tests on deployment. This keeps the decision visible even if the person testing the redirects never saw the original product brief.</p>
`,
  },
];
