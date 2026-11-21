import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { HeaderNavigation } from "@/components/Home Page Components/HeaderNavigation";
import { BrandFooterBanner } from "@/components/Home Page Components/BrandFooterBanner";
import { serviceMetadata } from "@/lib/serviceMetadata";
import { searchCaseHref, searchCaseStudies } from "@/data/searchCaseStudies";
import { SearchCaseArtwork } from "@/components/studio/SearchCaseArtwork";
import { seoBuyingPageBySlug } from "@/data/services/seo-buying-pages";
import { serviceSalesCopy } from "@/data/services/service-sales-copy";
import "@/components/studio/studio.css";
import "@/components/studio/experience.css";
import "@/components/studio/search-portfolio.css";

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
  return serviceMetadata({ title: `${entry.client} SEO ${"spotlight" in entry ? "Spotlight" : "Case Study"}`, slug: `work/${entry.slug}`, description: entry.summary });
}

export default async function SearchCasePage({ params }: Props) {
  const { project } = await params;
  const entry = projects.find(({ slug }) => slug === project);
  if (!entry) notFound();
  const next = projects[(projects.indexOf(entry) + 1) % projects.length];
  const linkedService = seoBuyingPageBySlug(entry.service)?.name ?? serviceSalesCopy[entry.service]?.keyword ?? entry.discipline;

  return (
    <div className="studio-page studio-experience">
      <HeaderNavigation />
      <main id="main-content">
        <header className="search-story-hero experience-pad">
          <Link href="/work#search-case-studies" className="studio-text-link"><ArrowLeft size={17} aria-hidden="true" /> All search case studies</Link>
          <div className="search-story-cover">
            <div className="search-story-intro">
              <p className="studio-kicker">{entry.discipline} / {entry.location}</p>
              <h1>{entry.client} SEO {("spotlight" in entry) ? "spotlight" : "case study"}</h1>
              <p>{entry.client} · {entry.title}</p>
              <p className="search-card-label">{"spotlight" in entry ? "Third-party project spotlight" : "Third-party case study"} · {entry.duration}</p>
              <ul className="search-story-tags" aria-label="Focus areas">
                {entry.tags.map(tag => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
            <SearchCaseArtwork visual={entry.visual} />
          </div>
        </header>
        <article className="search-story-body experience-pad">
          <section className="search-story-section" aria-labelledby="case-brief">
            <h2 id="case-brief">The brief</h2>
            <p>{entry.summary}</p>
          </section>
          <section className="search-story-section" aria-labelledby="case-approach">
            <h2 id="case-approach">The approach</h2>
            <div>
              <p>{entry.approach}</p>
              {entry.steps.length > 0 && (
                <ol className="search-story-steps">
                  {entry.steps.map(([title, detail]) => (
                    <li key={title}><h3>{title}</h3><p>{detail}</p></li>
                  ))}
                </ol>
              )}
            </div>
          </section>
          <section className="search-story-section" aria-labelledby="case-result">
            <h2 id="case-result">The reported result</h2>
            <div>
              <dl className="search-story-metrics">
                {entry.metrics.map(([value, label]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
              </dl>
              <p>{entry.result}</p>
              <p>{entry.measurement}</p>
            </div>
          </section>
          <section className="search-story-section search-story-local" aria-labelledby="case-local">
            <h2 id="case-local">Apply it in Kolkata</h2>
            <div>
              <p>{entry.application}</p>
              <Link href={`/${entry.service}`} className="studio-text-link">{linkedService} <ArrowUpRight size={18} aria-hidden="true" /></Link>
            </div>
          </section>
          <nav className="search-story-nav" aria-label="Case study navigation">
            <Link href="/work#search-case-studies" className="studio-text-link"><ArrowLeft size={17} aria-hidden="true" /> All search case studies</Link>
            <Link href={searchCaseHref(next)} className="studio-text-link">Next case study · {next.client} <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </nav>
        </article>
      </main>
      <BrandFooterBanner />
    </div>
  );
}
