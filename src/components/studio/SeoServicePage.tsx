import Link from "next/link";
import { ArrowUpRight, Asterisk, Check, Search } from "lucide-react";
import type { StudioService } from "@/data/services/types";
import { serviceBySlug, serviceTrail } from "@/data/services/catalog";
import { serviceDepth } from "@/data/services/experience";
import { seoPageContent } from "@/data/services/seo-pages";
import { HeaderNavigation } from "@/components/Home Page Components/HeaderNavigation";
import { BrandFooterBanner } from "@/components/Home Page Components/BrandFooterBanner";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { StructuredData } from "@/components/seo/StructuredData";
import { serviceGraph } from "@/lib/structuredData";
import { FounderBrief } from "./FounderBrief";
import { serviceSalesCopy } from "@/data/services/service-sales-copy";
import { ServiceHero } from "./ServiceHero";
import { ServicePointerCard } from "./ServicePointerCard";
import { StudioMotion } from "./StudioMotion";
import { SeoSourceIllustration } from "./SeoSourceIllustration";
import { SearchCaseStudy } from "./SearchCaseStudy";
import "./supporting-services.css";
import "./service-editorial.css";
import "./seo-content.css";

export function SeoServicePage({ service }: { service: StudioService }) {
  const copy = seoPageContent[service.slug];
  const depth = serviceDepth[service.slug];
  const quoteHref = `/contact?service=${service.slug}`;
  const trail = serviceTrail(service);
  const faqs = [...service.faqs, [copy.costQuestion, copy.costAnswer]];
  const related = service.related.map(serviceBySlug).filter((item): item is StudioService => Boolean(item));
  const deliverables = [...service.deliverables.slice(0, 3), { title: copy.handoverTitle, body: depth.handover }];

  return <StudioMotion><div className="svc-page svc-editorial seo-kolkata-page"><HeaderNavigation /><main id="main-content">
    <StructuredData data={serviceGraph({ ...service, breadcrumbs: trail, faqs: faqs.map(([question, answer]) => ({ question, answer })) })} />
    <div className="svc-breadcrumbs"><Breadcrumbs items={trail} /></div>
    <ServiceHero service={{ ...service, intro: copy.intro }} proofHref="#seo-comparison" heroNotes={copy.heroNotes} />
    <nav className="svc-chapter-nav" aria-label="On this service page">{[["#service-plan", "The approach"], ["#seo-comparison", "Compare approaches"], ["#seo-businesses", "Who needs this?"], ["#seo-cost", "Cost & scope"]].map(([href, label]) => <a href={href} key={href}>{label}<ArrowUpRight size={14} /></a>)}</nav>
    <section className="svc-goal svc-wrap"><div className="svc-goal-marker"><Asterisk size={54} strokeWidth={1.2} /><span>The reason<br />behind the work.</span></div><p>{depth.goal}</p><Link href={quoteHref} className="svc-text-link">Discuss your {service.name} goals <ArrowUpRight size={19} /></Link></section>

    <section id="service-plan" className="svc-insight svc-wrap seo-intro"><div><span className="svc-small-label">01 / THE STRATEGY</span><h2>{service.insight.title}</h2><figure className="seo-source-figure"><SeoSourceIllustration kind={copy.visual} /><figcaption className="seo-art-caption">{copy.flow.join(" → ")}</figcaption></figure></div><div className="svc-reading-text">{service.insight.paragraphs.map(text => <p key={text}>{text}</p>)}</div></section>
    <section className="svc-guide svc-wrap"><div className="svc-section-heading"><h2>{depth.question}</h2><p>The practical decisions behind a useful {service.name} engagement.</p></div><div className="svc-guide-grid">{depth.guide.map(([title, body], index) => <article key={title}><span className="svc-guide-number">0{index + 1}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></section>

    <section className="svc-deliverables" id="seo-scope"><div className="svc-wrap"><div className="svc-section-heading"><h2>{service.name} services.<br /><em>A scope you can act on.</em></h2><p>We agree the work, responsibilities and review points around your website and business goals. These are the workstreams we can build the proposal around.</p></div><div className="svc-deliverable-grid">{deliverables.map(({ title, body }, index) => <ServicePointerCard key={title}><article><span className="svc-card-index">0{index + 1} / THE SCOPE<Check size={24} /></span><h3>{title}</h3><p>{body}</p></article></ServicePointerCard>)}</div></div></section>

    <section id="seo-comparison" className="seo-comparison"><div className="svc-wrap"><div className="svc-section-heading"><h2>{copy.comparisonTitle}</h2><p>{copy.comparisonIntro}</p></div><div className="seo-table-scroll" role="region" aria-label={copy.comparisonTitle} tabIndex={0}><table className="seo-compare-table"><caption>{copy.comparisonTitle}</caption><thead><tr><th scope="col">The decision</th>{copy.comparisonLabels.map(label => <th scope="col" key={label}>{label}</th>)}</tr></thead><tbody>{copy.comparison.map(([title, left, right]) => <tr key={title}><th scope="row">{title}</th><td>{left}</td><td>{right}</td></tr>)}</tbody></table></div><div className="seo-comparison-note"><p>Choose the level of support that matches your team’s experience, available time and the complexity of the work.</p><Link href={quoteHref} className="svc-text-link">Talk through the options <ArrowUpRight size={18} /></Link></div></div></section>

    <section className="svc-guide svc-wrap" id="seo-businesses"><div className="svc-section-heading"><h2>{copy.fitTitle}</h2><p>The right fit depends on what customers need to understand, the opportunities you want and your capacity to support the work.</p></div><div className="seo-business-grid">{copy.fit.map(([title, body]) => <article key={title}><Search size={32} strokeWidth={1.3} /><h3>{title}</h3><p>{body}</p><Link href={quoteHref}>Discuss your requirements<ArrowUpRight size={17} /></Link></article>)}</div></section>

    <section className="seo-cost" id="seo-cost"><div className="svc-wrap seo-cost-layout"><div><span className="svc-small-label">PRICING / YOUR BUSINESS, YOUR SCOPE</span><h2>What does<br /><em>{service.name} cost?</em></h2><p>{copy.costIntro}</p><p>Tell us your niche, what needs attention and what you want to achieve. We’ll discuss the requirements and shape the proposal around the agreed work.</p><Link href={quoteHref} className="svc-button">Get pricing details <ArrowUpRight size={19} /></Link></div><div className="seo-cost-sheet"><div className="seo-cost-sheet-top"><span>WHAT SHAPES THE COST</span><Asterisk size={30} /></div>{copy.costFactors.map(([title, body], index) => <div className="seo-cost-factor" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{body}</p></div></div>)}<p className="seo-cost-footnote">No fixed packages. Start with a conversation on our <Link href={quoteHref}>contact page</Link>.</p></div></div></section>

    <SearchCaseStudy serviceSlug={service.slug} />
    <section className="svc-faq svc-wrap"><div><span className="svc-small-label">BEFORE YOU DECIDE</span><h2>{service.name}.<br /><em>Your questions answered.</em></h2><p>Practical details to help you decide what your business needs.</p><Link href={quoteHref} className="svc-text-link">Discuss your website <ArrowUpRight size={18} /></Link></div><div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span className="svc-plus" aria-hidden="true">+</span></summary><p>{answer}{question === copy.costQuestion && <> <Link href={quoteHref}>Contact us for more details.</Link></>}</p></details>)}</div></section>

    <section className="svc-related svc-wrap"><div className="svc-section-heading"><h2>Connect the work.<br /><em>Explore the next service.</em></h2><Link href="/seo-agency-kolkata" className="svc-text-link">Our SEO approach <ArrowUpRight size={18} /></Link></div><div className="svc-related-grid">{related.map(item => <Link href={`/${item.slug}`} key={item.slug}><h3>{item.name}</h3><ArrowUpRight size={21} /></Link>)}</div></section>
    {Boolean(service.sources?.length) && <aside className="svc-sources svc-wrap"><span>Platform guidance</span>{service.sources!.map(source => <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer">{source.title}<ArrowUpRight size={13} /></a>)}</aside>}
    <FounderBrief title={copy.ctaTitle} note={serviceSalesCopy[service.slug]?.brief ?? copy.ctaBody} href={quoteHref} label={`Send your ${service.name} brief`} />
  </main><BrandFooterBanner /></div></StudioMotion>;
}
