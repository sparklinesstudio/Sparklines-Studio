import Link from "next/link";
import { Asterisk } from "lucide-react";
import { HeaderNavigation } from "@/components/Home Page Components/HeaderNavigation";
import { BrandFooterBanner } from "@/components/Home Page Components/BrandFooterBanner";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { StructuredData } from "@/components/seo/StructuredData";
import { ContactForm } from "./ContactForm";
import { FounderPortraits } from "./FounderBrief";
import { seoBuyingPageBySlug } from "@/data/services/seo-buying-pages";
import type { SeoBuyingPage, SeoBuyingSection } from "@/data/services/seo-buying-types";
import { serviceGraph } from "@/lib/structuredData";
import "./supporting-services.css";
import "./service-editorial.css";
import "./seo-content.css";
import "./seo-buying.css";

function BuyingSection({ section, quoteLabel }: { section: SeoBuyingSection; quoteLabel: string }) {
  const style = section.style ?? "plain";
  return (
    <section id={section.id} className={`seo-buying-section seo-buying-${style}`}>
      <div className="svc-wrap seo-buying-layout">
        <h2>{section.title}</h2>
        <div className="seo-buying-copy">
          {section.paragraphs?.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          {section.details?.map(detail => (
            <div id={detail.id} className="seo-buying-detail" key={detail.title}>
              <h3>{detail.title}</h3>
              <p>{detail.body}</p>
            </div>
          ))}
          {section.source && <a className="svc-text-link" href={section.source.url}>{section.source.title}</a>}
          {style === "pricing" && <a className="svc-button seo-buying-price-cta" href="#seo-enquiry">{quoteLabel}</a>}
        </div>
      </div>
    </section>
  );
}

export function SeoBuyingLanding({ page }: { page: SeoBuyingPage }) {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "SEO", path: "/seo-agency-kolkata" },
    { name: page.name, path: `/${page.slug}` },
  ];
  const pricing = page.sections.find(section => section.style === "pricing");
  const related = page.related.map(seoBuyingPageBySlug).filter(item => item !== undefined);

  return (
    <div className="svc-page svc-editorial seo-kolkata-page seo-buying-page">
      <HeaderNavigation />
      <main id="main-content">
        <StructuredData data={serviceGraph({ ...page, breadcrumbs, faqs: page.faqs.map(([question, answer]) => ({ question, answer })) })} />
        <div className="svc-breadcrumbs"><Breadcrumbs items={breadcrumbs} /></div>
        <section className="svc-home-hero seo-buying-hero">
          <div className="svc-hero-paper">
            <Asterisk className="seo-buying-hero-mark" size={44} strokeWidth={1.2} aria-hidden="true" />
            <div className="svc-hero-centre">
              <h1>{page.heading[0]} <em>{page.heading[1]}</em></h1>
              <p>{page.intro}</p>
              <div className="seo-buying-hero-actions">
                <a href="#seo-enquiry" className="svc-button">{page.inquiry.label}</a>
                {pricing && <a className="svc-text-link" href={`#${pricing.id}`}>See how pricing works</a>}
              </div>
            </div>
          </div>
        </section>
        {page.sections.map(section => <BuyingSection key={section.id} section={section} quoteLabel={page.inquiry.label} />)}
        <section className="svc-faq svc-wrap" id="faq">
          <div><h2>Questions before you hire</h2></div>
          <div>{page.faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}<span className="svc-plus" aria-hidden="true">+</span></summary>
              <p>{answer}</p>
            </details>
          ))}</div>
        </section>
        <section className="seo-buying-enquiry" id="seo-enquiry" aria-labelledby="seo-enquiry-heading">
          <div className="svc-wrap seo-buying-layout">
            <div>
              <FounderPortraits />
              <h2 id="seo-enquiry-heading">{page.inquiry.label}</h2>
              <p>{page.inquiry.prompt}</p>
              <a className="svc-text-link" href="tel:+919641861932">Call +91 96418 61932</a>
            </div>
            <ContactForm inquiry={{ slug: page.slug, name: page.name, prompt: page.inquiry.prompt, seo: true }} showInquiryIntro={false} />
          </div>
        </section>
        {related.length > 0 && (
          <section className="svc-related svc-wrap">
            <div className="svc-section-heading"><h2>Related SEO services</h2></div>
            <div className="svc-related-grid">{related.map(item => (
              <Link key={item.slug} href={`/${item.slug}`}><h3>{item.name}</h3></Link>
            ))}</div>
          </section>
        )}
      </main>
      <BrandFooterBanner />
    </div>
  );
}
