"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, ArrowUpRight, Asterisk } from "lucide-react";
import { serviceGroups } from "@/data/kolkataServices";
import { siteConfig } from "@/config/site";
import "@/components/studio/footer.css";
export function BrandFooterBanner({ showEyebrow = true }: { showEyebrow?: boolean }) {
 return <footer className="studio-footer"><div className="footer-invitation">{showEyebrow && <p>EVERY GOOD STORY STARTS SOMEWHERE.</p>}<Link href="/contact"><span>Let’s make<br /><em>some sparks.</em></span><span className="footer-big-arrow"><ArrowUpRight strokeWidth={1} /></span></Link></div><div className="footer-columns"><div className="footer-studio"><Link href="/" aria-label="Sparklines Studio home"><Image src="/logo.png" alt="Sparklines Studio" width={150} height={45} unoptimized /></Link><p>A film-first creative studio.<br />Kolkata roots. A wider perspective.</p><a href={"mailto:" + siteConfig.email}>{siteConfig.email}</a><a href="tel:+919641861932">+91 96418 61932</a><span className="footer-location"><Asterisk size={17} /> KOLKATA, INDIA</span></div>{serviceGroups.map(group => <div key={group.title}><h2>{group.title}</h2>{group.links.map(service => <Link key={service.slug} href={"/"+service.slug}>{service.name}<ArrowUpRight size={13} /></Link>)}</div>)}<div><h2>The studio</h2><Link href="/about">About us</Link><Link href="/work">Selected work</Link><Link href="/contact">Start a project</Link></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Sparklines Studio</span><nav aria-label="Legal"><Link href="/privacy-policy">Privacy policy</Link><Link href="/terms-and-conditions">Terms & conditions</Link><Link href="/refund-policy">Refund policy</Link></nav><button onClick={() => window.scrollTo({top:0,behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth"})}>Back to top <ArrowUp size={14} /></button></div></footer>;
}
export default BrandFooterBanner;
