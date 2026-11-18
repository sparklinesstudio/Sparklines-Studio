import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { searchCaseByService, searchCaseHref } from "@/data/searchCaseStudies";

export function SearchCaseStudy({ serviceSlug }: { serviceSlug: string }) {
  const featured = searchCaseByService[serviceSlug];
  if (!featured) return null;

  const { project, takeaway } = featured;
  return (
    <section id="case-study" className="svc-case-study svc-wrap" aria-labelledby="search-case-title">
      <div>
        <span className="svc-small-label">NYSEO/CO CASE STUDY / {project.client}</span>
        <h2 id="search-case-title">{project.title}</h2>
        <p>{takeaway}</p>
        <Link href={searchCaseHref(project)} className="svc-text-link">
          Read the case study <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
      <div className="svc-case-sheet">
        <div className="svc-case-sheet-title">
          <span>{project.industry} · {project.location}</span>
          <Plus size={28} aria-hidden="true" />
        </div>
        <div><h3>The starting point</h3><p>{project.summary}</p></div>
        <div><h3>What NYSEO/CO reported</h3><p>{project.result}</p></div>
      </div>
    </section>
  );
}
