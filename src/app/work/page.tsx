import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { HeaderNavigation } from "@/components/Home Page Components/HeaderNavigation";
import { BrandFooterBanner } from "@/components/Home Page Components/BrandFooterBanner";
import { StudioMotion, MotionSwitch } from "@/components/studio/StudioMotion";
import { BrandingFeature, MotionMarquee } from "@/components/studio/HomeExperience";
import { PortfolioArchive } from "@/components/studio/PortfolioArchive";
import { StudioCta } from "@/components/studio/StudioSections";
import {StructuredData} from "@/components/seo/StructuredData";
import {pageGraph} from "@/lib/structuredData";
import {ServiceConnections} from "@/components/studio/ServiceConnections";
import { serviceMetadata } from "@/lib/serviceMetadata";
import "@/components/studio/studio.css";
import "@/components/studio/experience.css";
export const metadata = serviceMetadata({ title: "Branding Portfolio & Selected Work", slug: "work", description: "Explore House of Kolam, a brand identity project by Sparklines Studio. Discover the story, packaging, motion and 23 project boards in our portfolio." });
export default function WorkPage() {
 return <div className="studio-page studio-experience"><HeaderNavigation /><StudioMotion><main id="main-content"><StructuredData data={pageGraph("/work","Selected Studio Work","CollectionPage")}/><section className="experience-page-hero experience-pad portfolio-hero"><p className="studio-kicker">SELECTED WORK / THE SPARKLINES STUDIO</p><div><h1>Ideas made<br /><em>real.</em><span className="orange-period">*</span></h1><div><p>A closer look at the thinking, the details and the design systems behind our work. Starting with House of Kolam.</p><a href="#portfolio-archive" className="studio-text-link">Explore the project boards <ArrowDownRight size={20} /></a><Link href="/brand-film-production-kolkata" className="studio-text-link">Looking for our films? <ArrowUpRight size={18} /></Link><MotionSwitch /></div></div><div className="portfolio-project-meta"><span>01 FEATURED BRAND IDENTITY</span><span>23 PROJECT BOARDS</span><span>STRATEGY → IDENTITY → APPLICATION</span></div></section><BrandingFeature listing /><MotionMarquee reverse words={["Identity", "Packaging", "Motion", "Every touchpoint matters"]} /><PortfolioArchive /><div className="experience-pad"><ServiceConnections slugs={["branding-agency-kolkata","logo-design-agency-kolkata","brand-strategy-agency-kolkata"]} title="Take the identity into your own brief."/></div><StudioCta /></main></StudioMotion><BrandFooterBanner /></div>;
}
