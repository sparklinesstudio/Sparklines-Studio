import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { HeaderNavigation } from "@/components/Home Page Components/HeaderNavigation";
import { BrandFooterBanner } from "@/components/Home Page Components/BrandFooterBanner";
import { serviceMetadata } from "@/lib/serviceMetadata";
import { searchCaseSource, searchCaseStudies } from "@/data/searchCaseStudies";
import "@/components/studio/studio.css";
import "@/components/studio/experience.css";
import "@/components/studio/supporting-services.css";
import "@/components/studio/service-editorial.css";

const projects = Object.values(searchCaseStudies);
type Props = { params: Promise<{ project: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ project: slug }));
}

export async function generateMetadata({ params }: Props) {
  const { project } = await params;
  const entry = projects.find(({ slug }) => slug === project);
  if (!entry) notFound();
  return serviceMetadata({ title: `${entry.client} SEO Case Study`, slug: `work/${entry.slug}`, description: entry.summary });
}

export default async function SearchCasePage({ params }: Props) {
  const { project } = await params;
  const entry = projects.find(({ slug }) => slug === project);
  if (!entry) notFound();

  return (
    <div className="studio-page studio-experience">
      <HeaderNavigation />
      <main id="main-content">
        <section className="experience-page-hero experience-pad portfolio-hero">
          <p className="studio-kicker">NYSEO/CO CASE STUDY / {entry.industry} / {entry.location}</p>
          <div>
            <h1 className="min-w-0 [overflow-wrap:anywhere]">{entry.client}<span className="orange-period">.</span></h1>
            <div>
              <p>{entry.title}</p>
              <Link href="/work#search-case-studies" className="studio-text-link">Browse case studies</Link>
            </div>
          </div>
        </section>
        <div className="svc-page svc-editorial">
          <section className="svc-case-study svc-wrap" aria-labelledby="case-brief">
            <div>
              <h2 id="case-brief">The brief.</h2>
              <p>{entry.summary}</p>
              <a href={searchCaseSource(entry)} className="svc-text-link">
                Read the original NYSEO/CO case study <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
            <div className="svc-case-sheet">
              <div className="svc-case-sheet-title"><span>Project by NYSEO/CO</span></div>
              <div><h3>The approach</h3><p>{entry.approach}</p></div>
              <div><h3>The reported result</h3><p>{entry.result}</p></div>
            </div>
          </section>
        </div>
      </main>
      <BrandFooterBanner />
    </div>
  );
}
