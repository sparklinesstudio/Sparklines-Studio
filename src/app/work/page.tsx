import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { HeaderNavigation } from "@/components/Home Page Components/HeaderNavigation";
import { BrandFooterBanner } from "@/components/Home Page Components/BrandFooterBanner";
import { StudioMotion } from "@/components/studio/StudioMotion";
import { BrandingFeature, MotionMarquee } from "@/components/studio/HomeExperience";
import { PortfolioArchive } from "@/components/studio/PortfolioArchive";
import { SearchCaseArtwork } from "@/components/studio/SearchCaseArtwork";
import { StudioCta } from "@/components/studio/StudioSections";
import {StructuredData} from "@/components/seo/StructuredData";
import {pageGraph} from "@/lib/structuredData";
import {ServiceConnections} from "@/components/studio/ServiceConnections";
import { serviceMetadata } from "@/lib/serviceMetadata";
import { searchCaseHref, searchCaseStudies } from "@/data/searchCaseStudies";
import "@/components/studio/studio.css";
import "@/components/studio/experience.css";
import "@/components/studio/search-portfolio.css";

export const metadata = serviceMetadata({
  title: "Branding Portfolio & Search Case Studies",
  slug: "work",
  description: "Explore the House of Kolam identity by Sparklines Studio and third-party case studies on local, technical and AI search.",
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
              <h1>Selected <em>work</em><span className="orange-period">.</span></h1>
              <div>
                <p>Explore selected work, including the House of Kolam identity by Sparklines Studio and third-party search case studies. See the brief, the decisions and the files or reported outcomes available for each project.</p>
                <a href="#portfolio-archive" className="studio-text-link">Explore the project boards <ArrowDownRight size={20} /></a>
                <a href="#search-case-studies" className="studio-text-link">Browse the search case studies <ArrowDownRight size={20} /></a>
                <Link href="/brand-film-production-kolkata" className="studio-text-link">Explore our film production <ArrowUpRight size={18} /></Link>
              </div>
            </div>
            <div className="portfolio-project-meta"><span>01 FEATURED BRAND IDENTITY</span><span>23 PROJECT BOARDS</span><span>STRATEGY → IDENTITY → APPLICATION</span></div>
          </section>
          <BrandingFeature listing />
          <section id="search-case-studies" className="search-archive experience-pad" aria-labelledby="search-case-studies-title">
            <div className="search-archive-heading">
              <h2 id="search-case-studies-title">Search case studies<span className="orange-period">.</span></h2>
              <p>Six third-party case studies and one project spotlight, with reported results and lessons for Kolkata businesses.</p>
            </div>
            <div className="search-archive-grid">
              {Object.values(searchCaseStudies).map(project => (
                <article key={project.slug}>
                  <Link href={searchCaseHref(project)} className="search-archive-card">
                    <SearchCaseArtwork visual={project.visual} />
                    <div className="search-card-copy">
                      <span className="search-card-label">{"spotlight" in project ? "Project spotlight" : project.industry} · {project.duration}</span>
                      <h3>{project.client}</h3>
                      <p>{project.title}</p>
                      <p className="search-card-label">{project.location}</p>
                      <div className="search-card-bottom">
                        <dl className="search-card-metrics">
                          {project.metrics.map(([value, label]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
                        </dl>
                        <span className="search-card-action">{"spotlight" in project ? "Read spotlight" : "Read case study"} <ArrowUpRight size={18} aria-hidden="true" /></span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>
          <MotionMarquee reverse words={["Identity", "Packaging", "Motion", "Every touchpoint matters"]} />
          <PortfolioArchive />
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
