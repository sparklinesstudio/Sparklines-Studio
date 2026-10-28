"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeaderNavigation } from "@/components/Home Page Components/HeaderNavigation";
import { ContactSection } from "@/components/Home Page Components/ContactSection";
import { BrandFooterBanner } from "@/components/Home Page Components/BrandFooterBanner";
import { HOUSE_OF_KOLAM_IMAGES, HOUSE_OF_KOLAM_SLIDES } from "@/data/houseOfKolamData";

export default function WorkPage() {
  const [activePreviewIdx, setActivePreviewIdx] = useState(0);

  // Curated showcase boards from the 23 authentic project images
  const showcaseBoards = [
    {
      id: 1,
      title: "Master Emblem & Brand Cover",
      category: "Master Identity",
      image: HOUSE_OF_KOLAM_IMAGES[0],
    },
    {
      id: 2,
      title: "Sacred Dot-Grid & Loop Geometry",
      category: "Geometric Construction",
      image: HOUSE_OF_KOLAM_IMAGES[1],
    },
    {
      id: 4,
      title: "Kinetic Motion & Drawing Loop",
      category: "Kinetic Identity",
      image: HOUSE_OF_KOLAM_IMAGES[3],
    },
    {
      id: 5,
      title: "Artisanal Spice Packaging Ecosystem",
      category: "Packaging Architecture",
      image: HOUSE_OF_KOLAM_IMAGES[4],
    },
    {
      id: 6,
      title: "Dining Brassware & Spatial Collateral",
      category: "Hospitality Collateral",
      image: HOUSE_OF_KOLAM_IMAGES[5],
    },
    {
      id: 8,
      title: "Packaging Boxes & Takeaway Architecture",
      category: "Structural Packaging",
      image: HOUSE_OF_KOLAM_IMAGES[7],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-blue-600/20 selection:text-blue-950 font-sans overflow-x-hidden relative">
      {/* Global Header Navigation (Pure White Pill) */}
      <HeaderNavigation />

      <main className="relative z-10">
        {/* ============================================================== */}
        {/* 1. HERO SECTION (Bright, Light & Blue-Themed — NOT Dark)       */}
        {/*    "RECEIPTS, NOT PITCHES."                                    */}
        {/* ============================================================== */}
        <section
          id="portfolio-hero"
          className="relative overflow-hidden pt-28 pb-14 sm:pt-36 sm:pb-18 lg:pt-40 lg:pb-20 bg-gradient-to-b from-blue-50/80 via-white to-[#fbfbfb]"
        >
          {/* Subtle Ambient Blue Lighting Glows */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[420px] w-[880px] -z-10 rounded-full bg-blue-600/10 blur-[110px]" />
          <div className="pointer-events-none absolute top-12 -right-20 h-[300px] w-[500px] -z-10 rounded-full bg-sky-400/10 blur-[90px]" />

          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
            <div className="max-w-4xl">
              {/* Kicker with Blue Accent Dot */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-2 mb-4 sm:mb-6"
              >
                <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-widest text-blue-600 font-semibold">
                  Case Archive · Verified Proof
                </span>
              </motion.div>

              {/* Bold High-Impact Headline: RECEIPTS, NOT PITCHES. */}
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight leading-[0.9] font-sans text-zinc-950"
              >
                <span className="text-blue-600 block">RECEIPTS,</span>
                <span className="text-zinc-950 block mt-1">NOT PITCHES.</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="mt-6 sm:mt-8 max-w-2xl text-sm sm:text-base md:text-lg text-zinc-600 font-normal leading-relaxed font-sans"
              >
                We don&apos;t sell narratives or speculate. Every engagement below is backed by verified production deliverables, live client systems, and a documented execution record across brand &amp; search.
              </motion.p>

              {/* Dual Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.22 }}
                className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
              >
                <a
                  href="#case-list"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-7 py-3 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-md shadow-blue-600/20"
                >
                  <span>Explore Portfolio ↓</span>
                  <ArrowDown className="h-3.5 w-3.5" />
                </a>
                <Button
                  href="#contact"
                  className="inline-flex items-center gap-1.5 rounded-full bg-zinc-950 px-4.5 py-1.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-blue-600 active:scale-95 group ml-1 font-sans"
                >
                  <span>Start Project</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 2. METRICS BAR STRIP (Clean Light 4-Column Divider)             */}
        {/* ============================================================== */}
        <section className="border-y border-zinc-200 bg-white shadow-2xs">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 divide-x divide-zinc-200">
              <div className="p-6 sm:p-8 flex flex-col justify-center bg-white hover:bg-blue-50/30 transition-colors">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-blue-600 font-sans">
                  23
                </p>
                <p className="mt-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-medium">
                  Master Exhibition Boards
                </p>
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-center bg-white hover:bg-blue-50/30 transition-colors">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-950 font-sans">
                  35+
                </p>
                <p className="mt-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-medium">
                  Brand Deliverables Crafted
                </p>
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-center bg-white hover:bg-blue-50/30 transition-colors">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-950 font-sans">
                  100%
                </p>
                <p className="mt-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-medium">
                  Scalable Vector Symmetry
                </p>
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-center bg-white hover:bg-blue-50/30 transition-colors">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-blue-600 font-sans">
                  0
                </p>
                <p className="mt-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-medium">
                  Dummy or Unverified Projects
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 3. PORTFOLIO SHOWCASE: HOUSE OF KOLAM (WITH RICH IMAGES)        */}
        {/* ============================================================== */}
        <section id="case-list" className="py-12 sm:py-16 md:py-20 bg-[#f8f8f6]">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
            {/* Top Verification Header Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-300">
              <div className="flex items-center gap-2">
                <span className="px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider bg-blue-600 text-white shadow-xs">
                  Branding &amp; Visual Identity (1)
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 hidden sm:inline-block">
                  · Selected Flagship Engagement
                </span>
              </div>

              <div className="font-mono text-xs uppercase tracking-wider text-zinc-500 font-medium flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                <span>23 Master Boards Documented · 100% Live Assets</span>
              </div>
            </div>

            {/* Main Editorial Portfolio Card (With Real Project Images) */}
            <div className="mt-8 sm:mt-10">
              <article className="group relative p-6 sm:p-8 md:p-10 transition-all duration-300 border border-[#ded9cf] bg-[#ede9e2] hover:border-blue-500 hover:shadow-2xl">
                {/* 1. Header Row (Metadata, Title, Description, Stats) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start pb-8 border-b border-[#ded9cf]">
                  {/* Left Column: Title & Description */}
                  <div className="lg:col-span-8 space-y-3 sm:space-y-4">
                    {/* Kicker Row */}
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                      <span className="font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-600">
                        01 / BRANDING &amp; VISUAL IDENTITY · HERITAGE HOSPITALITY · 2026 RELEASE
                      </span>
                    </div>

                    {/* Authoritative Uppercase Headline */}
                    <Link href="/work/branding/house-of-kolam" className="block group-hover:text-blue-600 transition-colors">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-zinc-950 font-sans leading-[1.08]">
                        House of Kolam — Sacred Geometry &amp; Heritage Culinary Identity.
                      </h2>
                    </Link>

                    {/* Descriptive Narrative */}
                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-sans max-w-3xl">
                      A comprehensive 23-board master visual identity system celebrating ancestral South Indian geometric traditions. Spans sacred dot-grid (pulli) vector insignia, artisanal spice and estate tea packaging, oxidized brass dining collateral, vernacular typography, and kinetic motion loops.
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      {[
                        "Brand Identity",
                        "Packaging Design",
                        "Vernacular Typography",
                        "Motion Art",
                        "Spatial Collateral",
                        "23 Master Boards",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] uppercase tracking-wider text-zinc-700 bg-white/70 border border-black/[0.08] px-2.5 py-1 font-medium shadow-2xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: 3 Stat KPI Cards & Read Link */}
                  <div className="lg:col-span-4 flex flex-col justify-between items-start lg:items-end gap-5 h-full pt-2 lg:pt-0">
                    {/* 3 Metric KPI Cards */}
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2 w-full lg:w-auto">
                      <div className="bg-white border border-zinc-200/90 p-2 sm:p-2.5 flex flex-col items-center justify-center min-w-[70px] sm:min-w-[88px] text-center shadow-2xs">
                        <span className="font-mono font-black text-sm sm:text-base text-zinc-950 tracking-tight">
                          35+
                        </span>
                        <span className="font-mono text-[8.5px] uppercase tracking-wider text-zinc-500 line-clamp-1 mt-0.5">
                          DELIVERABLES
                        </span>
                      </div>
                      <div className="bg-white border border-zinc-200/90 p-2 sm:p-2.5 flex flex-col items-center justify-center min-w-[70px] sm:min-w-[88px] text-center shadow-2xs">
                        <span className="font-mono font-black text-sm sm:text-base text-zinc-950 tracking-tight">
                          100%
                        </span>
                        <span className="font-mono text-[8.5px] uppercase tracking-wider text-zinc-500 line-clamp-1 mt-0.5">
                          VECTOR ASSETS
                        </span>
                      </div>
                      <div className="bg-white border border-zinc-200/90 p-2 sm:p-2.5 flex flex-col items-center justify-center min-w-[70px] sm:min-w-[88px] text-center shadow-2xs">
                        <span className="font-mono font-black text-sm sm:text-base text-blue-600 tracking-tight">
                          23
                        </span>
                        <span className="font-mono text-[8.5px] uppercase tracking-wider text-zinc-500 line-clamp-1 mt-0.5">
                          MASTER BOARDS
                        </span>
                      </div>
                    </div>

                    {/* Read Case Link */}
                    <Link
                      href="/work/branding/house-of-kolam"
                      className="inline-flex items-center gap-2 bg-zinc-950 hover:bg-blue-600 text-white px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-md self-stretch lg:self-auto justify-center"
                    >
                      <span>Explore Case Study (23 Boards)</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* 2. Visual Exhibition: Images of the Portfolio Project */}
                <div className="mt-8 space-y-6">
                  {/* Top Bar for Image Gallery */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Layers className="h-4 w-4 text-blue-600" />
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-800">
                        Project Visual Exhibition ({HOUSE_OF_KOLAM_SLIDES.length} Total Deliverables)
                      </span>
                    </div>
                    <Link
                      href="/work/branding/house-of-kolam"
                      className="font-mono text-xs text-blue-600 hover:text-blue-800 font-semibold uppercase tracking-wider inline-flex items-center gap-1"
                    >
                      <span>View Fullscreen Mode</span>
                      <Maximize2 className="h-3 w-3" />
                    </Link>
                  </div>

                  {/* Featured Hero Preview Image */}
                  <Link
                    href="/work/branding/house-of-kolam"
                    className="block relative aspect-[16/9] w-full overflow-hidden border border-zinc-300 bg-zinc-100 shadow-md group/img cursor-pointer"
                  >
                    <Image
                      src={showcaseBoards[activePreviewIdx].image}
                      alt={showcaseBoards[activePreviewIdx].title}
                      fill
                      priority
                      className="object-cover object-center transition-transform duration-500 group-hover/img:scale-[1.015]"
                      sizes="(max-width: 1440px) 100vw, 1400px"
                    />

                    {/* Gradient Overlay & Tag */}
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2">
                      <div>
                        <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-blue-400 font-semibold">
                          Board {showcaseBoards[activePreviewIdx].id} of 23 · {showcaseBoards[activePreviewIdx].category}
                        </span>
                        <h4 className="text-sm sm:text-lg font-bold text-white tracking-tight font-sans">
                          {showcaseBoards[activePreviewIdx].title}
                        </h4>
                      </div>

                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 hover:bg-blue-600 text-white backdrop-blur-md text-[11px] font-mono font-semibold uppercase tracking-wider transition-colors border border-white/20">
                        <span>Click for Full Screen Experience</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </span>
                    </div>
                  </Link>

                  {/* Thumbnail Row: Curated Preview Boards */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 sm:gap-3">
                    {showcaseBoards.map((board, bIdx) => {
                      const isSelected = activePreviewIdx === bIdx;
                      return (
                        <button
                          key={board.id}
                          type="button"
                          onClick={() => setActivePreviewIdx(bIdx)}
                          className={`relative aspect-[16/9] w-full overflow-hidden border transition-all duration-200 cursor-pointer text-left ${
                            isSelected
                              ? "border-blue-600 ring-2 ring-blue-600 shadow-md scale-[1.02]"
                              : "border-zinc-300 hover:border-zinc-500 opacity-80 hover:opacity-100"
                          }`}
                        >
                          <Image
                            src={board.image}
                            alt={board.title}
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 768px) 50vw, 16vw"
                          />
                          <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors" />
                          <div className="absolute top-1 left-1 bg-black/70 px-1.5 py-0.5 text-[8.5px] font-mono font-bold text-white uppercase tracking-wider">
                            #{board.id.toString().padStart(2, "0")}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Bottom Strip: 23 Boards Direct Access Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-600 font-mono">
                    <span>
                      Click any thumbnail above to preview, or enter the full 23-slide case study.
                    </span>
                    <Link
                      href="/work/branding/house-of-kolam"
                      className="font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800 flex items-center gap-1.5 underline underline-offset-4"
                    >
                      <span>Open Complete Case Study (/work/branding/house-of-kolam)</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 4. MID-PAGE BLUE/NAVY FEATURE BLOCK (Hypothesis Philosophy)    */}
        {/* ============================================================== */}
        <section className="bg-[#080e1e] text-white py-16 sm:py-24 border-y border-blue-900/40 relative overflow-hidden">
          {/* Subtle Ambient Blue Radial Bloom */}
          <div className="pointer-events-none absolute -top-32 left-1/3 h-[450px] w-[700px] rounded-full bg-blue-600/15 blur-[120px]" />

          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column (Copy & Protocol Link) */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-widest text-blue-400 font-semibold">
                    Methodology &amp; Protocol
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-[1.05] font-sans">
                  Every case starts with a hypothesis — never a template.
                </h2>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans max-w-xl">
                  We don&apos;t run generic agency playbooks or recycle boilerplate formulas. Every client engagement begins with empirical market-depth discovery, architectural brand positioning, and bespoke creative execution engineered for quantifiable market prestige.
                </p>

                <div className="pt-2">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-400 hover:text-blue-300 transition-colors group"
                  >
                    <span>Our Strategic Approach</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Right Column (Editorial Visual with Subtle Vignette) */}
              <div className="lg:col-span-6 relative">
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-sm border border-blue-900/50 bg-zinc-900 shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80"
                    alt="Sparklines Studio Case Architecture"
                    fill
                    className="object-cover object-center grayscale contrast-110 brightness-95"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080e1e]/90 via-[#080e1e]/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#080e1e]/40 via-transparent to-[#080e1e]/30" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 5. BOTTOM CALLOUT STRIP: WANT TO BE CASE 002?                  */}
        {/* ============================================================== */}
        <section className="bg-[#f8f8f6] py-12 sm:py-16 border-b border-zinc-300">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-zinc-300">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-zinc-950 font-sans">
                Want to be <span className="text-blue-600">Case 002</span>?
              </h3>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-zinc-950 hover:bg-blue-600 text-white px-7 py-3.5 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-md cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 6. CONTACT SECTION (Clean Studio Contact Form)                 */}
        {/* ============================================================== */}
        <div id="contact" className="bg-white">
          <ContactSection />
        </div>
      </main>

      {/* Global Brand Footer Banner (NO NYSEO/CO footer) */}
      <BrandFooterBanner />
    </div>
  );
}
