"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PortfolioItem } from "@/data/portfolioData";

export interface CaseStudyNavProps {
  prevProject: PortfolioItem;
  nextProject: PortfolioItem;
}

export function CaseStudyNav({ prevProject, nextProject }: CaseStudyNavProps) {
  return (
    <section className="py-10 bg-zinc-50 border-t border-zinc-200/80">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href={`/work/${prevProject.id}`}
            className="group flex flex-col p-5 sm:p-6 rounded-2xl bg-white border border-zinc-200 transition-all duration-300 hover:border-zinc-400 hover:shadow-md"
          >
            <span className="text-xs font-mono uppercase text-zinc-400 mb-1 flex items-center gap-1 group-hover:text-zinc-950 transition-colors">
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1 text-blue-600" />
              Previous Case Study
            </span>
            <span className="text-base font-semibold text-zinc-900 group-hover:text-[#ea580c] transition-colors line-clamp-1 font-sans">
              {prevProject.title}
            </span>
          </Link>

          <Link
            href={`/work/${nextProject.id}`}
            className="group flex flex-col items-start sm:items-end p-5 sm:p-6 rounded-2xl bg-white border border-zinc-200 transition-all duration-300 hover:border-zinc-400 hover:shadow-md text-left sm:text-right"
          >
            <span className="text-xs font-mono uppercase text-zinc-400 mb-1 flex items-center gap-1 group-hover:text-zinc-950 transition-colors">
              Next Case Study
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 text-[#ea580c]" />
            </span>
            <span className="text-base font-semibold text-zinc-900 group-hover:text-[#ea580c] transition-colors line-clamp-1 font-sans">
              {nextProject.title}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
