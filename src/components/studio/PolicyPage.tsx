import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import { HeaderNavigation } from "@/components/Home Page Components/HeaderNavigation";
import { BrandFooterBanner } from "@/components/Home Page Components/BrandFooterBanner";
import type { PolicySection } from "@/data/studioPolicies";
import "./studio.css";
import "./experience.css";
import "./pages.css";
export function PolicyPage({ title, intro, sections }: { title: string; intro: string; sections: PolicySection[] }) {
 return <div className="studio-page studio-experience"><HeaderNavigation /><main id="main-content"><section className="experience-page-hero experience-pad policy-hero"><p className="studio-kicker"><FileText size={14} /> THE DETAILS BEHIND THE PARTNERSHIP</p><h1>{title.split(" ").slice(0,-1).join(" ")}<br /><em>{title.split(" ").at(-1)}</em><span className="orange-period">.</span></h1><p>{intro}</p><div className="policy-meta"><span>SPARKLINES STUDIO / KOLKATA</span><span>PRIVACY & PROJECT INFORMATION</span></div></section><div className="experience-pad policy-layout"><aside><p className="studio-kicker">ON THIS PAGE</p><nav aria-label="Policy contents">{sections.map(section=><a key={section.id} href={"#"+section.id}>{section.title.replace(/^\d+\.\s*/,"")}</a>)}</nav><Link href="/contact" className="studio-text-link">Have a question? <ArrowUpRight size={16} /></Link></aside><article className="policy-document">{sections.map(section=><section id={section.id} key={section.id}><h2>{section.title}</h2><div>{section.content.split(/\n\s*\n/).map((paragraph,index)=><p key={index}>{paragraph}</p>)}</div></section>)}<div className="policy-related"><p>Related studio policies</p><Link href="/privacy-policy">Privacy policy</Link><Link href="/terms-and-conditions">Terms & conditions</Link><Link href="/refund-policy">Refund policy</Link></div></article></div></main><BrandFooterBanner /></div>;
}
