import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Asterisk, Building2, Code2, GraduationCap, MapPin, Search, ShoppingBag, Sparkles, Stethoscope } from "lucide-react";
import { serviceBySlug, serviceTrail } from "@/data/services/catalog";
import { serviceMetadata } from "@/lib/serviceMetadata";
import { serviceGraph } from "@/lib/structuredData";
import { HeaderNavigation } from "@/components/Home Page Components/HeaderNavigation";
import { BrandFooterBanner } from "@/components/Home Page Components/BrandFooterBanner";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { StructuredData } from "@/components/seo/StructuredData";
import { MotionSwitch, StudioMotion } from "@/components/studio/StudioMotion";
import { ServicePointerCard } from "@/components/studio/ServicePointerCard";
import { SearchCaseStudy } from "@/components/studio/SearchCaseStudy";
import "@/components/studio/supporting-services.css";
import "@/components/studio/service-editorial.css";
import "@/components/studio/seo-content.css";

const service = serviceBySlug("seo-agency-kolkata")!;
import { serviceSalesCopy } from "@/data/services/service-sales-copy";

import { FounderBrief } from "@/components/studio/FounderBrief";

const sales = serviceSalesCopy["seo-agency-kolkata"];
const description = "Sparklines Studio is an SEO agency in Kolkata offering local SEO, technical audits and content strategy. Explore services, pricing and how we measure enquiries.";
export const metadata = serviceMetadata({ ...service, description });

const faqs = [
  ["How much do SEO services in Kolkata cost?", "There is no fixed price. Your niche, competition, website condition, scope of work and business goals determine the cost. Contact Sparklines Studio with your website and priorities so we can discuss the work required and prepare a tailored proposal."],
  ["Can I do SEO myself with AI?", "Yes. AI can help you explore topics, prepare outlines and understand basic SEO tasks. You still need to validate search demand, check facts, implement changes and measure results. Expert support becomes useful when technical issues, competition or the scale of the work exceed the time and experience available in-house."],
  ["Which businesses need SEO in Kolkata?", "SEO can suit businesses whose customers search before calling, visiting, booking or buying. Examples include local services, clinics, education providers, property businesses, interior designers, retailers and B2B companies. Search demand, margins, service capacity and the time available to invest determine whether it is a good fit."],
  ["How long does SEO take to show results?", "SEO needs time for implementation, discovery and evaluation. Your starting position, competitors, website history and the pace of publishing all affect progress. We agree review milestones after assessing the site and track relevant search visibility and qualified enquiries rather than promise a ranking date."],
  ["Do you handle local SEO and Google Business Profile work?", "Local SEO can be included where it fits your business. The scope may cover eligible Google Business Profile improvements, accurate business information, useful location and service content, and a clearer route from search to a call or visit. Your actual locations and service coverage guide the plan."],
  ["Can I rank in Salt Lake and New Town if I have one office?", "You can build visibility for areas you genuinely serve. Use the business information and service coverage that match your real operation, and give customers a reason to trust each relevant service page, such as completed projects or clear travel coverage. Your Google Maps visibility will also depend on factors like proximity to the searcher and local competition."],
  ["Does AI-generated content automatically rank on Google?", "No. Using AI does not guarantee rankings. Content still needs to be useful, accurate and relevant to the person searching. We use AI to assist research and production, with human review, business-specific information and technical checks before publishing."],
  ["Should I choose SEO or Google Ads?", "Google Ads can help test demand and reach searchers through a paid campaign. SEO builds organic discovery through your website and content over time. The right choice depends on urgency, budget, competition and your ability to convert enquiries. Some businesses benefit from using both with separate goals and measurement."],
] as const;

const workstreams = [
  { title: "Technical SEO", icon: Code2, href: "/technical-seo-audit-pricing", body: "Find the obstacles between your website and search: crawling, indexing, page structure, redirects and mobile usability. Turn the audit into a prioritised implementation plan." },
  { title: "Local SEO in Kolkata", icon: MapPin, href: "/local-seo-packages-for-small-business", body: "Connect real service areas, accurate business information and eligible Google Business Profiles. Help nearby customers understand what you offer and how to reach you." },
  { title: "Content & on-page SEO", icon: Search, href: "#seo-process", body: "Match service pages, product information and useful guides to customer questions. Improve headings, titles and internal links so each page has a clear purpose." },
  { title: "AI-assisted SEO", icon: Sparkles, href: "/ai-seo-agency-kolkata", body: "Use AI to organise research and accelerate drafts, then add original expertise, check the facts and review the final page. Keep people responsible for the decisions." },
];

const comparison = [
  ["Choosing keywords", "Ask AI for ideas, then research which ones matter to your customers.", "Use AI to group ideas, then validate intent, search results and commercial relevance."],
  ["Creating content", "Prepare drafts and outlines; supply your own expertise and fact-check every claim.", "Build briefs from customer questions, add business knowledge and edit for accuracy and a distinct voice."],
  ["Fixing the website", "Get explanations of issues; you still need to diagnose, implement and test the fixes.", "Inspect the site, prioritise issues and coordinate implementation with checks on affected pages."],
  ["Competing locally", "Generate local copy; verify your profile details, eligibility and actual service coverage.", "Connect local search intent, accurate profiles, service pages and a practical enquiry journey."],
  ["Measuring progress", "Interpret reports yourself and decide what to change next.", "Review query and landing-page data alongside qualified enquiries to guide the next round of work."],
  ["Time & cost", "Tool subscriptions plus your time for learning, publishing and maintenance.", "A scoped service fee for specialist time, implementation and ongoing review; tools support the work."],
] as const;

const businesses = [
  { title: "Local services & stores", icon: MapPin, body: "Salons, repair services, restaurants and neighbourhood shops need clear services, opening hours and contact details when nearby customers search.", focus: "Local discovery → calls & visits", href: "/local-seo-packages-for-small-business" },
  { title: "Clinics & healthcare practices", icon: Stethoscope, body: "Help people understand your practitioners, services, location and appointment process. Medical information needs qualified review and careful factual checks.", focus: "Service clarity → appointment enquiries", href: "/contact" },
  { title: "Education & training", icon: GraduationCap, body: "Institutes and training providers can answer questions about courses, eligibility, learning formats and admissions before a prospective student enquires.", focus: "Course research → relevant admissions leads", href: "/contact" },
  { title: "Property & interior businesses", icon: Building2, body: "Developers, property consultants and designers can explain genuine projects, service areas and scope to people researching their next purchase or space.", focus: "Project research → suitable enquiries", href: "/real-estate-seo-agency-kolkata" },
  { title: "Ecommerce & retail brands", icon: ShoppingBag, body: "Make product categories, specifications, availability and buying information easier to discover. Useful category pages matter as much as individual products.", focus: "Product searches → purchase decisions", href: "/ecommerce-seo-retainer-pricing" },
  { title: "B2B, SaaS & professional services", icon: Code2, body: "Reach buyers comparing expertise, suppliers and solutions. Explain use cases, capabilities and buying questions across a longer decision process.", focus: "Buyer questions → qualified conversations", href: "/b2b-saas-seo-agency-pricing" },
];

const process = [
  ["Understand the business", "Discuss your niche, offer, customers and goals. Review your website and available search data to establish a useful starting point."],
  ["Choose the priorities", "Map important searches to pages, review competitors and agree the technical and content work that deserves attention first."],
  ["Build, publish & check", "Work through the agreed fixes and content. Use AI where it helps, with human editing and checks on pages, links and enquiry paths."],
  ["Measure & improve", "Review completed work, relevant visibility and enquiry quality. Use what we learn to refine the next set of priorities."],
] as const;

function SearchIllustration() {
  return <svg viewBox="0 0 520 340" fill="none" aria-hidden="true" className="seo-search-art">
    <path d="M35 302H488M65 32V302" stroke="currentColor" opacity=".18" />
    {[105, 175, 245].map(y => <path key={y} d={`M65 ${y}H488`} stroke="currentColor" strokeDasharray="4 8" opacity=".12" />)}
    <rect x="96" y="72" width="300" height="192" rx="5" fill="#f3f3ef" stroke="currentColor" strokeWidth="2" />
    <path d="M96 104H396" stroke="currentColor" strokeWidth="2" />
    {[112, 125, 138].map(x => <circle key={x} cx={x} cy="88" r="3" fill="currentColor" />)}
    <rect x="120" y="125" width="200" height="28" rx="14" stroke="currentColor" />
    <circle cx="137" cy="138" r="5" stroke="currentColor" /><path d="m141 142 4 4M157 138H262" stroke="currentColor" />
    <rect x="121" y="174" width="117" height="7" fill="#073bff" /><path d="M121 195H282M121 206H255M121 234H208" stroke="#949a91" strokeWidth="5" />
    <path d="m281 239 39-29 33 9 64-67 41-29" stroke="#ff601c" strokeWidth="9" strokeLinejoin="round" />
    <path d="m431 120 31 1-4 31" stroke="#ff601c" strokeWidth="9" />
    <circle cx="381" cy="86" r="32" fill="#073bff" /><path d="M381 67v38m-19-19h38m-32-13 26 26m0-26-26 26" stroke="#fff" strokeWidth="2" />
    <circle cx="96" cy="280" r="21" fill="#ff601c" /><path d="m87 280 6 6 13-14" stroke="#fff" strokeWidth="3" />
  </svg>;
}

export default function ServicePage() {
  const trail = serviceTrail(service);
  return <StudioMotion><div className="svc-page svc-editorial seo-kolkata-page"><HeaderNavigation /><main id="main-content">
    <StructuredData data={serviceGraph({ ...service, description, breadcrumbs: trail, faqs: faqs.map(([question, answer]) => ({ question, answer })) })} />
    <div className="svc-breadcrumbs"><Breadcrumbs items={trail} /></div>
    <section className="svc-home-hero" aria-labelledby="seo-title"><div className="svc-hero-paper seo-hero-paper">
      {workstreams.map(({ title, icon: Icon }, index) => <ServicePointerCard key={title} className={`svc-hero-tile svc-hero-tile-${index}`}><a href="#seo-services" className="svc-hero-note"><span>SEO / Sparklines Studio</span><Icon size={30} strokeWidth={1.3} /><strong>{title}</strong><ArrowUpRight size={18} /></a></ServicePointerCard>)}
      <div className="svc-hero-sticker" aria-hidden="true"><Asterisk size={45} strokeWidth={1.3} /><span>SPARKLINES<br />STUDIO</span></div>
      <div className="svc-hero-centre"><span className="seo-eyebrow">SEARCH WITH A BUSINESS PURPOSE</span><h1 id="seo-title">SEO Agency <em>Kolkata</em></h1><p>{sales?.opening}</p><Link href="/contact?service=seo-agency-kolkata" className="svc-discover"><span>Let’s talk about your SEO</span><ArrowDownRight size={21} /></Link></div>
      <a href="#seo-comparison" className="svc-hero-stamp"><Sparkles size={30} strokeWidth={1.4} /><span>HUMAN THINKING<br />AI ASSISTED</span></a>
      <div className="svc-hero-bottom"><span>Be found for the right reasons.</span><Asterisk size={46} strokeWidth={1.2} /><span>Built around your business.</span></div><div className="svc-hero-motion"><MotionSwitch /></div>
    </div></section>
    <nav className="svc-chapter-nav" aria-label="On this SEO page">{[["#seo-services", "SEO services"], ["#seo-comparison", "AI vs. expert + AI"], ["#seo-businesses", "Is SEO for you?"], ["#seo-cost", "Cost & scope"]].map(([href, title]) => <a href={href} key={href}>{title}<ArrowUpRight size={14} /></a>)}</nav>
    <section className="svc-goal svc-wrap"><div className="svc-goal-marker"><Asterisk size={54} strokeWidth={1.2} /><span>The point<br />of being found.</span></div><p>More visibility should lead somewhere useful: a relevant call, a store visit, a better enquiry or a sale. That is where our SEO strategy starts.</p><Link href="/contact?service=seo-agency-kolkata" className="svc-text-link">Tell us what growth means for you <ArrowUpRight size={19} /></Link></section>
    <section className="svc-insight svc-wrap seo-intro"><div><span className="svc-small-label">01 / THE OPPORTUNITY</span><h2>An SEO agency in Kolkata.<br /><em>A plan for your customers.</em></h2><SearchIllustration /><span className="seo-art-caption">Discovery → useful information → a clear next step</span></div><div className="svc-reading-text"><p>A person looking for an interior designer in New Town has a different question from a buyer comparing software suppliers. Both use search, but the pages, information and next steps they need are different.</p><p>At Sparklines Studio, we start with what you sell, who you want to reach and what makes an enquiry valuable. We assess the website, understand the searches around your offer and build a plan that connects the two.</p><p>For a local business, that may mean clearer service pages and accurate business information. For an online store, it may mean product categories and technical fixes. For a B2B company, it may mean answering the questions buyers ask before they speak to sales.</p><p>The goal is to make your business easier to discover, understand and contact, with work you can review and progress you can measure.</p></div></section>
    <section id="seo-services" className="svc-deliverables"><div className="svc-wrap"><div className="svc-section-heading"><h2>SEO services.<br /><em>Connected from the start.</em></h2><p>Your website, content and local presence should support the same goal. We choose the mix of work after understanding where your business stands.</p></div><div className="svc-deliverable-grid">{workstreams.map(({ title, icon: Icon, href, body }, index) => <ServicePointerCard key={title}><article><span className="svc-card-index">0{index + 1} / THE WORK<Icon size={27} strokeWidth={1.4} /></span><h3>{title}</h3><p>{body}</p><Link href={href} className="svc-text-link">{href.startsWith("#") ? "See how we work" : "Explore the service"}<ArrowUpRight size={17} /></Link></article></ServicePointerCard>)}</div></div></section>
    <section id="seo-comparison" className="seo-comparison"><div className="svc-wrap"><div className="svc-section-heading"><h2>You doing SEO with AI.<br /><em>SEO experts using AI.</em></h2><p>AI is useful in both approaches. The difference is who validates the research, makes the decisions, implements the changes and learns from the results.</p></div><div className="seo-compare-intro"><span><Sparkles size={24} /> A tool can accelerate the work.</span><span><Asterisk size={26} /> Expertise gives the work direction.</span></div><div className="seo-table-scroll" role="region" aria-label="Compare doing SEO yourself with hiring SEO experts using AI" tabIndex={0}><table className="seo-compare-table"><caption>DIY SEO with AI vs. expert-led SEO with AI</caption><thead><tr><th scope="col">The work</th><th scope="col">You + AI</th><th scope="col">SEO experts + AI</th></tr></thead><tbody>{comparison.map(([task, diy, expert]) => <tr key={task}><th scope="row">{task}</th><td>{diy}</td><td>{expert}</td></tr>)}</tbody></table></div><div className="seo-comparison-note"><p><strong>When DIY makes sense:</strong> you have a simple website, time to learn and someone who can check and implement the work. Bring in specialists when the site, competition or business stakes call for deeper experience.</p><Link href="/contact?service=seo-agency-kolkata" className="svc-text-link">Discuss the support you need <ArrowUpRight size={18} /></Link></div></div></section>
    <section id="seo-businesses" className="svc-guide svc-wrap"><div className="svc-section-heading"><h2>Which businesses<br /><em>need SEO in Kolkata?</em></h2><p>If your customers search before they call, visit, book or buy, SEO could be worth investing in. These are some of the business types where that connection is clear.</p></div><div className="seo-business-grid">{businesses.map(({ title, icon: Icon, body, focus, href }) => <article key={title}><Icon size={32} strokeWidth={1.3} /><h3>{title}</h3><p>{body}</p><Link href={href}>{focus}<ArrowUpRight size={17} /></Link></article>)}</div><div className="seo-fit-note"><Asterisk size={30} strokeWidth={1.3} /><p><strong>Start with fit.</strong> Search demand, customer value and your ability to handle enquiries matter. If you need immediate demand or your offer is still changing, we should discuss whether SEO, paid search or website improvements deserve the first investment.</p></div></section>
    <section id="seo-cost" className="seo-cost"><div className="svc-wrap seo-cost-layout"><div><span className="svc-small-label">THE INVESTMENT</span><h2>What does SEO<br /><em>cost in Kolkata?</em></h2><p>There is no fixed SEO price. Your niche, the work your website needs and the goals we are trying to achieve determine the scope and cost.</p><p>A local service business and a large ecommerce website need different levels of research, content, development and ongoing attention. We discuss those needs before recommending a budget.</p><Link href="/contact?service=seo-agency-kolkata" className="svc-button">Get pricing for your business <ArrowUpRight size={19} /></Link></div><div className="seo-cost-sheet"><div className="seo-cost-sheet-top"><span>YOUR SCOPE / BUILT AROUND YOU</span><Asterisk size={30} /></div>{[["01", "Your niche & competition", "Who you compete with, what people search for and how much depth your market requires."], ["02", "The work required", "The condition and size of your site, technical fixes, content needs and available implementation support."], ["03", "The goals & pace", "The services, products or locations you want to grow, your priorities and the resources available."]].map(([number, title, body]) => <div className="seo-cost-factor" key={number}><span>{number}</span><div><h3>{title}</h3><p>{body}</p></div></div>)}<p className="seo-cost-footnote">Share your website, niche and goals through our <Link href="/contact?service=seo-agency-kolkata">contact page</Link>. We’ll discuss the details and shape a proposal around the work.</p></div></div></section>
    <section id="seo-process" className="svc-process svc-wrap"><div className="svc-section-heading"><h2>From the first question<br /><em>to the next improvement.</em></h2><p>A clear process keeps research, execution and reporting connected. You should know what we are working on and why it matters.</p></div><div className="svc-process-grid">{process.map(([title, body], index) => <article key={title}><span>0{index + 1}<ArrowRight size={22} /></span><h3>{title}</h3><p>{body}</p></article>)}</div><div className="seo-measure-note"><Search size={28} strokeWidth={1.3} /><p><strong>What we measure:</strong> relevant search queries, important landing pages, organic visits and qualified enquiries where tracking is available. We agree the business signals that matter before judging progress.</p></div></section>
    <SearchCaseStudy serviceSlug={service.slug} />
    <section className="svc-faq svc-wrap"><div><span className="svc-small-label">BEFORE WE START</span><h2>SEO questions.<br /><em>Useful answers.</em></h2><p>What to consider before choosing an SEO agency in Kolkata.</p><Link href="/contact?service=seo-agency-kolkata" className="svc-text-link">Talk through your requirements <ArrowUpRight size={18} /></Link></div><div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span className="svc-plus" aria-hidden="true">+</span></summary><p>{answer}{question === faqs[0][0] && <> <Link href="/contact?service=seo-agency-kolkata">Contact us for pricing details.</Link></>}</p></details>)}</div></section>
    <section className="svc-related svc-wrap"><div className="svc-section-heading"><h2>The right support.<br /><em>For the next step.</em></h2><p>Explore specialist SEO services or connect search with a website that helps visitors take action.</p></div><div className="svc-related-grid">{[["Monthly SEO for small businesses", "/monthly-seo-packages-for-small-business"], ["Local SEO", "/local-seo-packages-for-small-business"], ["Technical SEO", "/technical-seo-audit-pricing"], ["Ecommerce SEO", "/ecommerce-seo-retainer-pricing"], ["Website migration SEO", "/website-migration-seo-consultant"], ["B2B SEO", "/b2b-saas-seo-agency-pricing"], ["Website development", "/website-development-agency-kolkata"]].map(([title, href]) => <Link key={href} href={href}><h3>{title}</h3><ArrowUpRight size={21} /></Link>)}</div></section>
    <aside className="svc-sources svc-wrap"><span>Search guidance</span><a href="https://developers.google.com/search/docs/fundamentals/using-gen-ai-content" target="_blank" rel="noopener noreferrer">Google on generative AI content<ArrowUpRight size={13} /></a><a href="https://support.google.com/business/answer/7091" target="_blank" rel="noopener noreferrer">Google on local search visibility<ArrowUpRight size={13} /></a></aside>
    <FounderBrief title="Request an SEO proposal" note={sales?.brief ?? description} href="/contact?service=seo-agency-kolkata" label="Send your SEO brief" />
  </main><BrandFooterBanner /></div></StudioMotion>;
}
