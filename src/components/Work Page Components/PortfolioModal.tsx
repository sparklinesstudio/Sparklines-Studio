"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, TrendingUp, CheckCircle2, ShieldAlert, Target } from "lucide-react";
import { PortfolioItem } from "@/data/portfolioData";

interface PortfolioModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
}

export function PortfolioModal({ project, onClose }: PortfolioModalProps) {
  // Close on Escape key and prevent background body scrolling
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop with heavy frosted glass blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 bg-zinc-950/60 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-zinc-200/90 shadow-[0_25px_70px_rgba(0,0,0,0.25)] text-zinc-900 z-10 custom-scrollbar"
        >
          {/* Top Sticky Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between border-b border-zinc-200/80 bg-white/95 px-6 py-4 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-[#f95721] border border-orange-200/70">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f95721]" />
                {project.category}
              </span>
              <span className="text-xs text-zinc-400 font-medium hidden sm:inline">•</span>
              <span className="text-xs text-zinc-500 font-medium hidden sm:inline">
                {project.industry} // {project.year}
              </span>
            </div>

            <button
              onClick={onClose}
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-all hover:bg-zinc-200 hover:text-zinc-950 active:scale-95"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Modal Hero Cover Image */}
          <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden bg-zinc-100">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-wider text-orange-400 mb-1">
                {project.client}
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight font-sans text-white leading-tight">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 sm:p-8 md:p-10 space-y-10">
            {/* 4 HIGHLIGHTED PERFORMANCE METRICS (MATCHING USER SPECIFICATION) */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-4 w-4 text-[#f95721]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 font-sans">
                  Key Growth & Impact Metrics
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {project.metrics.map((metric, idx) => (
                  <div
                    key={`metric-${idx}`}
                    className="flex flex-col justify-between rounded-2xl bg-zinc-50 p-4 sm:p-5 border border-zinc-200/80 hover:border-orange-200 transition-colors"
                  >
                    <p className="text-xs sm:text-[13px] text-zinc-500 font-medium leading-snug lowercase mb-2">
                      {metric.label}
                    </p>
                    <p className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-zinc-950 font-sans">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* STRATEGIC HEADLINE */}
            <div className="border-t border-zinc-100 pt-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-zinc-950 font-sans leading-snug">
                {project.headline}
              </h3>
            </div>

            {/* OVERVIEW SECTION (RICH MULTI-PARAGRAPH NARRATIVE) */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3 font-sans">
                Overview
              </h4>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-zinc-700 font-sans">
                {project.overview.split("\n\n").map((para, i) => (
                  <p key={`overview-para-${i}`}>{para}</p>
                ))}
              </div>
            </div>

            {/* OBJECTIVES & CHALLENGES (2-COLUMN CARDS) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-zinc-100 pt-8">
              {/* Objectives Card */}
              <div className="rounded-2xl bg-blue-50/60 p-6 border border-blue-100/80">
                <div className="flex items-center gap-2 mb-3">
                  <Target className="h-4 w-4 text-blue-600" />
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-900 font-sans">
                    Objectives
                  </h4>
                </div>
                <p className="text-sm leading-relaxed text-zinc-700 font-sans">
                  {project.objectives}
                </p>
              </div>

              {/* Challenges Card */}
              <div className="rounded-2xl bg-amber-50/60 p-6 border border-amber-100/80">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldAlert className="h-4 w-4 text-amber-600" />
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-900 font-sans">
                    Challenges & Governance
                  </h4>
                </div>
                <p className="text-sm leading-relaxed text-zinc-700 font-sans">
                  {project.challenges}
                </p>
              </div>
            </div>

            {/* RESULTS SECTION */}
            <div className="rounded-2xl bg-zinc-900 text-white p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-2 text-emerald-400">
                <CheckCircle2 className="h-4 w-4" />
                <h4 className="text-xs font-semibold uppercase tracking-wider">
                  Validated Results & Business Impact
                </h4>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-zinc-300 font-sans">
                {project.results}
              </p>
            </div>

            {/* TAGS & CTA BUTTON ROW */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-zinc-100 pt-8">
              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Get In Touch Button (Smooth scrolls to contact form) */}
              <Link
                href="#contact"
                onClick={onClose}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-8 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-[0_4px_16px_rgba(0,0,0,0.18)] transition-all duration-300 hover:bg-[#f95721] hover:shadow-[0_6px_22px_rgba(249,87,33,0.35)] active:scale-95 group overflow-hidden"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
