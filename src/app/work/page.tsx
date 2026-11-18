import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { HeaderNavigation } from "@/components/Home Page Components/HeaderNavigation";
import { BrandFooterBanner } from "@/components/Home Page Components/BrandFooterBanner";
import { StudioMotion } from "@/components/studio/StudioMotion";
import { BrandingFeature, MotionMarquee } from "@/components/studio/HomeExperience";
import { PortfolioArchive } from "@/components/studio/PortfolioArchive";
import { StudioCta } from "@/components/studio/StudioSections";
import {StructuredData} from "@/components/seo/StructuredData";
import {pageGraph} from "@/lib/structuredData";
import {ServiceConnections} from "@/components/studio/ServiceConnections";
import { serviceMetadata } from "@/lib/serviceMetadata";
import { searchCaseHref, searchCaseStudies } from "@/data/searchCaseStudies";
import "@/components/studio/studio.css";
import "@/components/studio/experience.css";
import "@/components/studio/supporting-services.css";
import "@/components/studio/service-editorial.css";

export const metadata = serviceMetadata({
  title: "Branding Portfolio & Search Case Studies",
  slug: "work",
  description: "Explore the House of Kolam identity by Sparklines Studio and six credited NYSEO/CO case studies on local, technical and AI search.",
});

export default function WorkPage() {
  return (
    <div className="studio-page studio-experience">
      <HeaderNavigation />
      <StudioMotion>
        <main id="main-content">
          <StructuredData data={pageGraph("/work", "Selected Work and Search Case Studies", "CollectionPage")} />
          <section className="experience-page-hero experience-pad portfolio-hero">
            <p className="studio-kicker">SELECTED WORK / THE SPARKLINES STUDIO</p>
            <div>
              <h1>Ideas made<br /><em>real.</em><span className="orange-period">*</span></h1>
              <div>
                <p>Explore the identity we built for House of Kolam and six search case studies published by NYSEO/CO.</p>
                <a href="#portfolio-archive" className="studio-text-link">Explore the project boards <ArrowDownRight size={20} /></a>
                <a href="#search-case-studies" className="studio-text-link">Browse the search case studies <ArrowDownRight size={20} /></a>
                <Link href="/brand-film-production-kolkata" className="studio-text-link">Looking for our films? <ArrowUpRight size={18} /></Link>
              </div>
            </div>
            <div className="portfolio-project-meta"><span>01 FEATURED BRAND IDENTITY</span><span>23 PROJECT BOARDS</span><span>STRATEGY → IDENTITY → APPLICATION</span></div>
          </section>
          <BrandingFeature listing />
          <MotionMarquee reverse words={["Identity", "Packaging", "Motion", "Every touchpoint matters"]} />
          <PortfolioArchive />
          <section id="search-case-studies" className="svc-page svc-editorial" aria-labelledby="search-case-studies-title">
            <div className="svc-wrap svc-index-section">
              <div className="svc-section-heading">
                <h2 id="search-case-studies-title">Search case studies.</h2>
                <p>Six projects by NYSEO/CO, from local discovery and AI citations to moving an ecommerce site.</p>
              </div>
              <div className="svc-index-grid">
                {Object.values(searchCaseStudies).map(project => (
                  <Link href={searchCaseHref(project)} key={project.slug}>
                    <span className="svc-small-label">{project.industry}</span>
                    <h3>{project.client}</h3>
                    <p>{project.title}</p>
                    <ArrowUpRight size={21} aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <div className="experience-pad">
            <ServiceConnections slugs={["branding-agency-kolkata", "logo-design-agency-kolkata", "brand-strategy-agency-kolkata"]} title="Take the identity into your own brief." />
          </div>
          <StudioCta />
        </main>
      </StudioMotion>
      <BrandFooterBanner />
    </div>
  );
}
