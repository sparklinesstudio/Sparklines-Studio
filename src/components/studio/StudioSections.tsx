import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { serviceGroups } from "@/data/kolkataServices";
export function StudioFaq({ items }: { items: string[][] }) {
 return <div className="studio-faq">{items.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={18} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div>;
}
export function StudioCta({ showEyebrow = true }: { showEyebrow?: boolean }) {
 return <section className="studio-cta studio-wrap">{showEyebrow && <p className="studio-kicker">GOOD WORK STARTS WITH A CONVERSATION</p>}<h2>What are we<br /><em>making next?</em></h2><Link href="/contact" className="studio-button">Tell us about your project <ArrowUpRight size={18} /></Link><p>Based in Kolkata. Open to ambitious ideas everywhere.</p></section>;
}
export function ServiceDirectory({ showEyebrow = true }: { showEyebrow?: boolean }) {
 return <section id="services-grid" className="studio-section studio-wrap"><div className="studio-section-heading"><div>{showEyebrow && <p className="studio-kicker">THE STUDIO, AT A GLANCE</p>}<h2>One creative partner.<br /><em>More ways to grow.</em></h2></div><p>Start with a film. Build the brand and digital experience around it.</p></div><div className="studio-directory">{serviceGroups.map(group => <div key={group.title}><h3>{group.title}</h3>{group.links.map(s => <Link key={s.slug} href={"/" + s.slug}>{s.name}<ArrowUpRight size={18} /></Link>)}</div>)}</div></section>;
}
