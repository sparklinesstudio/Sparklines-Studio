import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import type { KolkataService } from "@/data/kolkataServices";
import { HeaderNavigation } from "@/components/Home Page Components/HeaderNavigation";
import { BrandFooterBanner } from "@/components/Home Page Components/BrandFooterBanner";
import { FilmMasonry } from "./FilmMasonry";
import { ServiceDirectory, StudioCta, StudioFaq } from "./StudioSections";
import { siteConfig } from "@/config/site";
import "./studio.css";
export function ServiceLandingPage({ service }: { service: KolkataService }) {
 const schema = { "@context": "https://schema.org", "@type": "Service", name: service.title, description: service.description, url: siteConfig.url + "/" + service.slug, areaServed: { "@type": "City", name: "Kolkata" }, provider: { "@type": "Organization", name: "Sparklines Studio", url: siteConfig.url } };
 return <div className="studio-page"><HeaderNavigation /><main id="main-content">
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
 <section className="studio-service-hero studio-wrap"><nav className="studio-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/services">Services</Link><span>/</span><span>{service.name}</span></nav><p className="studio-kicker">KOLKATA STUDIO / {service.group.toUpperCase()}</p><h1>{service.title}</h1><p className="studio-service-line">{service.line}</p><p className="studio-lead">{service.intro}</p><div className="studio-actions"><Link href="/contact" className="studio-button">Let’s build something <ArrowUpRight size={18} /></Link><a href="#capabilities" className="studio-text-link">Explore the service ↓</a></div><div className="studio-service-strip"><span><Check size={16} /> Strategy before execution</span><span><Check size={16} /> A collaborative review process</span><span><Check size={16} /> Built around your business</span></div></section>
 <section id="capabilities" className="studio-section studio-wrap"><div className="studio-section-heading"><div><p className="studio-kicker">WHAT WE CAN MAKE TOGETHER</p><h2>{service.name},<br /><em>with a clear purpose.</em></h2></div><p>{service.description}</p></div><div className="studio-offers">{service.offers.map(([title, text], i) => <article key={title}><span className="studio-micro">0{i+1} / CAPABILITY</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
 {service.gallery && <section className="studio-section studio-dark"><div className="studio-wrap"><div className="studio-section-heading"><div><p className="studio-kicker">FROM THE STUDIO LIBRARY</p><h2>A feel for<br /><em>our visual world.</em></h2></div><p>Explore existing video work in the same masonry format as our production portfolio. We’ll develop animation references and style frames around your own brief.</p></div><FilmMasonry /></div></section>}
 <section className="studio-section studio-tint"><div className="studio-wrap"><p className="studio-kicker">HOW WE WORK</p><h2>Clear steps.<br /><em>Room for collaboration.</em></h2><div className="studio-process">{service.process.map((text,i) => <article key={text}><span>0{i+1}</span><h3>{['Discover','Shape','Create','Deliver'][i]}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="studio-section studio-wrap studio-faq-layout"><div><p className="studio-kicker">BEFORE WE START</p><h2>A few good<br /><em>questions.</em></h2></div><StudioFaq items={service.faqs} /></section><ServiceDirectory /><StudioCta />
 </main><BrandFooterBanner /></div>;
}
