"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { HeaderNavigation } from "@/components/Home Page Components/HeaderNavigation";
import { ContactSection } from "@/components/Home Page Components/ContactSection";
import { BrandFooterBanner } from "@/components/Home Page Components/BrandFooterBanner";
import { Button } from "@/components/ui/Button";
import { HOUSE_OF_KOLAM_IMAGES } from "@/data/houseOfKolamData";
import "@/app/seo-agency-kolkata/seo-kolkata.css";

const WORK_MARQUEE_ITEMS = [
  "House of Kolam",
  "Sacred Geometry",
  "Visual Identity System",
  "Packaging Architecture",
  "Vernacular Typography",
  "Kinetic Brand Motion",
  "Spatial Dining Collateral",
  "23 Master Boards",
];

const showcaseImages = [
  {
    id: 1,
    title: "Master Emblem & Brand Cover",
    url: HOUSE_OF_KOLAM_IMAGES[0],
  },
  {
    id: 2,
    title: "Sacred Dot-Grid Geometry",
    url: HOUSE_OF_KOLAM_IMAGES[1],
  },
  {
    id: 4,
    title: "Kinetic Motion Sequence",
    url: HOUSE_OF_KOLAM_IMAGES[3],
  },
  {
    id: 5,
    title: "Artisanal Spice Packaging Ecosystem",
    url: HOUSE_OF_KOLAM_IMAGES[4],
  },
  {
    id: 6,
    title: "Dining Brassware & Spatial Collateral",
    url: HOUSE_OF_KOLAM_IMAGES[5],
  },
  {
    id: 8,
    title: "Structural Packaging Boxes",
    url: HOUSE_OF_KOLAM_IMAGES[7],
  },
];

export default function WorkPage() {
  const [previewIdx, setPreviewIdx] = useState(0);

  return (
    <div className="bg-[#F7F6F2] text-[#0B0C10] selection:bg-blue-600 selection:text-white min-h-screen">
      {/* Site's Official Floating Header Navigation */}
      <HeaderNavigation />

      <main>
        {/* ============================================================== */}
        {/* 1. ATMOSPHERIC HERO SECTION (MATCHING SEO-AGENCY-KOLKATA)       */}
        {/* ============================================================== */}
        <header className="relative text-white border-b border-[#232630] overflow-hidden bg-[#090B10] pt-28 sm:pt-36 lg:pt-40 min-h-[78vh] flex flex-col justify-between">
          {/* Left Vertical Edge Label */}
          <div className="hidden xl:flex absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center items-center gap-2 text-[10px] font-mono tracking-[0.28em] text-zinc-500 uppercase select-none pointer-events-none z-20 whitespace-nowrap">
            <span>EST. 2024 · PORTFOLIO ARCHIVE</span>
          </div>

          {/* Right Vertical Edge Label */}
          <div className="hidden xl:flex absolute right-8 top-1/2 -translate-y-1/2 rotate-90 origin-center items-center gap-2 text-[10px] font-mono tracking-[0.28em] text-zinc-500 uppercase select-none pointer-events-none z-20 whitespace-nowrap">
            <span>INDEX #001 · BRANDING · SEARCH · GROWTH</span>
          </div>

          {/* Background Image Overlay matching SEO page */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30 z-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=2000&q=80')`,
            }}
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#090B10]/92 via-[#090B10]/75 to-[#090B10] z-0" />

          {/* Background Ambient Blue Horizon Glow */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[360px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none z-0" />
          <div className="ambient-glow-blue absolute top-16 right-[10%] w-[26rem] h-[26rem] rounded-full z-0 opacity-50 pointer-events-none" />

          {/* Background Giant Infinite Watermark Marquee */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden pointer-events-none select-none z-0">
            <div className="watermark-marquee-wrap">
              <div className="flex shrink-0 items-center whitespace-nowrap text-[8rem] sm:text-[12rem] md:text-[15rem] lg:text-[18rem] font-bold leading-none text-white/[0.04] tracking-tight uppercase font-sans">
                <span className="pr-16">// CASE ARCHIVE //</span>
                <span className="pr-16">// CASE ARCHIVE //</span>
                <span className="pr-16">// CASE ARCHIVE //</span>
              </div>
              <div
                className="flex shrink-0 items-center whitespace-nowrap text-[8rem] sm:text-[12rem] md:text-[15rem] lg:text-[18rem] font-bold leading-none text-white/[0.04] tracking-tight uppercase font-sans"
                aria-hidden="true"
              >
                <span className="pr-16">// CASE ARCHIVE //</span>
                <span className="pr-16">// CASE ARCHIVE //</span>
                <span className="pr-16">// CASE ARCHIVE //</span>
              </div>
            </div>
          </div>

          {/* Hero Content Container */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-4 pb-16 sm:pb-22 lg:pb-24 w-full">
            {/* Top Status Eyebrow */}
            <div className="hero-fade-up flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.22em] text-zinc-400 mb-6 sm:mb-8">
              <span className="w-2 h-2 bg-blue-600 inline-block shadow-sm shadow-blue-600/60" />
              <span>SELECTED CASE ARCHIVE · VERIFIED WORK</span>
            </div>

            {/* Monumental Stacked Headline: RECEIPTS. NOT PITCHES. */}
            <div className="text-6xl sm:text-8xl md:text-9xl lg:text-[9.5rem] font-bold uppercase tracking-[-0.035em] leading-[0.88] mb-6 font-sans">
              <div className="hero-line-mask">
                <span className="hero-word hero-word-1 text-white">RECEIPTS.</span>
              </div>
              <div className="hero-line-mask">
                <span className="hero-word hero-word-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
                  NOT PITCHES.
                </span>
              </div>
            </div>

            {/* Subheading in Kolkata Page Typography */}
            <h1 className="hero-fade-up hero-delay-1 text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-8 sm:mb-10 font-sans">
              PORTFOLIO &amp; CASE ARCHIVE
            </h1>

            {/* Bottom Split Row: Paragraph on Left, CTAs on Right */}
            <div className="hero-fade-up hero-delay-2 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pt-2">
              <div className="lg:col-span-7">
                <p className="text-zinc-300 text-xs sm:text-sm md:text-[15px] leading-relaxed font-normal max-w-xl">
                  We don&apos;t sell narratives or speculate. Every engagement below is backed by verified
                  deliverables, live client systems, and a documented execution record across brand &amp; search.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-wrap items-center gap-4 lg:justify-end">
                <a href="#portfolio-archive">
                  <Button
                    size="md"
                    tint="#2563eb"
                    lineColor="#bfdbfe"
                    baseColor="#1d4ed8"
                    className="text-xs sm:text-sm font-semibold tracking-wider uppercase px-7 py-3.5 shadow-lg shadow-blue-600/30 group cursor-pointer"
                  >
                    <span>EXPLORE WORK ↓</span>
                  </Button>
                </a>

                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-black/40 hover:bg-black/70 border border-white/20 hover:border-blue-500/60 text-white font-mono text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer backdrop-blur-sm"
                >
                  <span>START A PROJECT</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-300" />
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* ============================================================== */}
        {/* 2. INFINITE SERVICE MARQUEE STRIP WITH BLUE STARS               */}
        {/* ============================================================== */}
        <div className="relative w-full overflow-hidden bg-[#F7F6F2] border-b border-[#D5D2C9] py-4 sm:py-5 select-none">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-36 bg-gradient-to-r from-[#F7F6F2] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-36 bg-gradient-to-l from-[#F7F6F2] to-transparent" />

          <div className="watermark-marquee-wrap">
            <div className="flex shrink-0 items-center">
              {WORK_MARQUEE_ITEMS.map((item, idx) => (
                <div
                  key={`marquee-item-1-${idx}`}
                  className="flex items-center gap-4 sm:gap-6 px-4 sm:px-6 shrink-0"
                >
                  <span className="text-sm sm:text-base font-semibold uppercase tracking-[0.14em] text-[#0B0C10] hover:text-blue-600 transition-colors whitespace-nowrap font-sans">
                    {item}
                  </span>
                  <span className="text-blue-600 font-light text-base sm:text-lg select-none">
                    ✦
                  </span>
                </div>
              ))}
            </div>
            <div className="flex shrink-0 items-center" aria-hidden="true">
              {WORK_MARQUEE_ITEMS.map((item, idx) => (
                <div
                  key={`marquee-item-2-${idx}`}
                  className="flex items-center gap-4 sm:gap-6 px-4 sm:px-6 shrink-0"
                >
                  <span className="text-sm sm:text-base font-semibold uppercase tracking-[0.14em] text-[#0B0C10] hover:text-blue-600 transition-colors whitespace-nowrap font-sans">
                    {item}
                  </span>
                  <span className="text-blue-600 font-light text-base sm:text-lg select-none">
                    ✦
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 3. FULL-WIDTH ARCHITECTURAL PORTFOLIO EXHIBITION                */}
        {/* ============================================================== */}
        <section
          id="portfolio-archive"
          className="w-full bg-[#F7F6F2] py-16 sm:py-24 border-b border-[#D5D2C9]"
        >
          {/* Section Heading matching Kolkata page style */}
          <div className="w-full px-6 sm:px-12 lg:px-16 mb-10 sm:mb-14">
            <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.22em] text-zinc-500 mb-3">
              <span className="w-2 h-2 bg-blue-600 inline-block shadow-sm shadow-blue-600/60" />
              <span>01 / FLAGSHIP PORTFOLIO ARCHIVE</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.03em] text-[#0B0C10] leading-[1.04] font-sans">
              Sacred geometry.<br />
              <span className="font-editorial italic font-normal text-blue-600">
                Contemporary culinary identity.
              </span>
            </h2>
          </div>

          {/* Full-Width Architectural Showcase Card */}
          <div className="w-full border-t border-b border-[#D5D2C9] bg-[#F7F6F2]">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12">
              {/* Left Column (Rich Editorial Breakdown & Strategic Scope) */}
              <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#D5D2C9] bg-[#F7F6F2]">
                {/* Discipline Metadata */}
                <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-4">
                  <span>HOUSE OF KOLAM</span>
                  <span className="text-blue-600">·</span>
                  <span>BRANDING &amp; IDENTITY</span>
                  <span className="text-blue-600">·</span>
                  <span>2026 RELEASE</span>
                </div>

                {/* Monumental Headline in Signature Editorial Pairing */}
                <Link href="/work/branding/house-of-kolam" className="group block mb-5">
                  <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.03em] text-[#0B0C10] group-hover:text-blue-600 transition-colors font-sans leading-[1.08]">
                    House of Kolam.<br />
                    <span className="font-editorial italic font-normal text-blue-600 text-3xl sm:text-4xl lg:text-[44px]">
                      Sacred Geometry &amp; Heritage Identity
                    </span>
                  </h3>
                </Link>

                {/* Narrative Overview */}
                <p className="text-xs sm:text-sm lg:text-[15px] leading-relaxed text-zinc-600 font-normal mb-6">
                  A modern celebration of ancestral South Indian mathematical art. Engineered from a pure
                  geometric dot-grid matrix into an expansive visual identity spanning bespoke vernacular
                  typography, artisanal kraft and brass packaging, kinetic motion loops, and spatial dining architecture.
                </p>

                {/* Scope of Deliverables Breakdown (Eliminates all empty space!) */}
                <div className="space-y-3.5 py-6 border-y border-[#D5D2C9] mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-sm mt-0.5 select-none">✦</span>
                    <div>
                      <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B0C10]">
                        Master Insignia &amp; Dot-Grid Geometry:
                      </span>{" "}
                      <span className="text-xs sm:text-sm text-zinc-600">
                        100% vector pulli lattice alignment engineered for millimeter scalability across store signage and menus.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-sm mt-0.5 select-none">✦</span>
                    <div>
                      <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B0C10]">
                        Packaging Ecosystem (12 SKUs):
                      </span>{" "}
                      <span className="text-xs sm:text-sm text-zinc-600">
                        Custom spice pouches, estate tea tins, takeaway boxes, stickers, and gold-foil gift hampers.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-sm mt-0.5 select-none">✦</span>
                    <div>
                      <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B0C10]">
                        Dining &amp; Spatial Collateral:
                      </span>{" "}
                      <span className="text-xs sm:text-sm text-zinc-600">
                        Hardcover menus, beverage coasters, staff uniforms, and dimensional exterior brass signage.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-sm mt-0.5 select-none">✦</span>
                    <div>
                      <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B0C10]">
                        Kinetic Motion Sequences:
                      </span>{" "}
                      <span className="text-xs sm:text-sm text-zinc-600">
                        Simulated hand-drawn flour flow animations for interactive digital touchpoints and social motion.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Clean Metric Numbers without badges */}
                <div className="grid grid-cols-3 gap-4 pb-6 mb-6 border-b border-[#D5D2C9]">
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B0C10] font-sans">
                      23<span className="text-blue-600 font-light">+</span>
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-zinc-500 mt-1">
                      Master Boards
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B0C10] font-sans">
                      35<span className="text-blue-600 font-light">+</span>
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-zinc-500 mt-1">
                      Deliverables
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold tracking-tight text-blue-600 font-sans">
                      100<span className="font-light">%</span>
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-zinc-500 mt-1">
                      Vector Craft
                    </div>
                  </div>
                </div>

                {/* Primary Button matching site theme + Secondary Link */}
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <Link href="/work/branding/house-of-kolam">
                    <Button
                      size="md"
                      tint="#2563eb"
                      lineColor="#bfdbfe"
                      baseColor="#1d4ed8"
                      className="text-xs sm:text-sm font-semibold tracking-wider uppercase px-7 py-3.5 shadow-md shadow-blue-600/25 group cursor-pointer"
                    >
                      <span>VIEW ALL 23 BOARDS →</span>
                    </Button>
                  </Link>

                  <Link
                    href="/work/branding/house-of-kolam"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 hover:text-blue-600 transition-colors py-2"
                  >
                    <span>Open Fullscreen Gallery</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column (Visual Gallery with Interactive Preview Thumbnails) */}
              <div className="lg:col-span-6 p-6 sm:p-10 lg:p-14 flex flex-col justify-between bg-[#F2F0E8]/40">
                <div>
                  {/* Top Bar for Visual Area */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#D5D2C9]/80 text-xs font-mono text-zinc-500">
                    <span>BOARD {String(previewIdx + 1).padStart(2, "0")} OF 23 · {showcaseImages[previewIdx].title}</span>
                    <Link
                      href="/work/branding/house-of-kolam"
                      className="text-blue-600 hover:text-blue-800 font-semibold tracking-wider uppercase inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Full Screen</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {/* 16:9 Featured Board Preview */}
                  <Link
                    href="/work/branding/house-of-kolam"
                    className="block relative aspect-[16/9] w-full overflow-hidden border border-[#D5D2C9] bg-zinc-100 group/img cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Image
                      src={showcaseImages[previewIdx].url}
                      alt={showcaseImages[previewIdx].title}
                      fill
                      priority
                      className="object-cover object-center transition-transform duration-500 group-hover/img:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-xs font-mono text-white tracking-wider uppercase">
                        {showcaseImages[previewIdx].title} · Click to open fullscreen
                      </span>
                    </div>
                  </Link>
                </div>

                {/* Compact Thumbnail Selector Bar */}
                <div className="pt-5 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                    <span>Interactive Preview Boards</span>
                    <span>Click to switch</span>
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {showcaseImages.map((img, idx) => (
                      <button
                        key={img.id}
                        type="button"
                        onClick={() => setPreviewIdx(idx)}
                        className={`relative aspect-[16/9] w-full overflow-hidden border transition-all duration-200 cursor-pointer ${
                          previewIdx === idx
                            ? "border-blue-600 ring-2 ring-blue-600/40 opacity-100 scale-[1.02]"
                            : "border-[#D5D2C9] opacity-70 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={img.url}
                          alt={img.title}
                          fill
                          className="object-cover"
                          sizes="120px"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 4. METHODOLOGY & PHILOSOPHY SECTION (CLEAN EDITORIAL MANIFESTO) */}
        {/* ============================================================== */}
        <section className="w-full bg-[#F7F6F2] py-20 sm:py-28 px-6 sm:px-12 lg:px-16 border-b border-[#D5D2C9]">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 mb-4">
              // METHODOLOGY &amp; PHILOSOPHY
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-tight text-[#0B0C10] mb-6 font-sans">
              Every case starts with a hypothesis.<br />
              <span className="font-editorial italic font-normal text-blue-600">
                Never a template.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal max-w-2xl mx-auto">
              We do not run generic agency playbooks or recycle boilerplate formulas. Every client
              engagement begins with deep empirical category discovery, architectural positioning,
              and bespoke creative execution engineered for quantifiable market prestige.
            </p>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 5. DARK METRICS STRIP (ANIMATED STATS MATCHING KOLKATA PAGE)   */}
        {/* ============================================================== */}
        <section className="w-full bg-[#0B0C10] text-white py-16 sm:py-20 px-6 sm:px-12 lg:px-16 border-b border-[#232630]">
          <div className="w-full max-w-7xl mx-auto">
            <div className="flex items-center gap-3 pb-8 mb-10 border-b border-[#232630]">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400">
                02 / VERIFIED PRODUCTION DELIVERABLES
              </span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10">
              <div className="pr-6 lg:border-r border-[#232630]">
                <div className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-2 font-sans">
                  23<span className="text-blue-500 font-light">+</span>
                </div>
                <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-normal">
                  Master Exhibition Boards
                </p>
              </div>

              <div className="sm:pl-6 lg:px-8 lg:border-r border-[#232630]">
                <div className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-2 font-sans">
                  35<span className="text-blue-500 font-light">+</span>
                </div>
                <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-normal">
                  Brand Deliverables Crafted
                </p>
              </div>

              <div className="pr-6 lg:px-8 lg:border-r border-[#232630]">
                <div className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-2 font-sans">
                  100<span className="text-blue-500 font-light">%</span>
                </div>
                <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-normal">
                  Scalable Vector Symmetry
                </p>
              </div>

              <div className="sm:pl-6 lg:pl-8">
                <div className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-2 font-sans">
                  0
                </div>
                <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-normal">
                  Unverified Speculation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 6. BOTTOM CALLOUT STRIP MATCHING SITE THEME                    */}
        {/* ============================================================== */}
        <section className="w-full bg-[#F7F6F2] py-16 sm:py-24 px-6 sm:px-12 lg:px-16 border-b border-[#D5D2C9]">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 pb-8 border-b border-[#D5D2C9]">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 mb-2">
                // COMMENCE ENGAGEMENT
              </p>
              <h3 className="text-3xl sm:text-5xl font-bold uppercase tracking-[-0.03em] text-[#0B0C10] font-sans">
                Want to be{" "}
                <span className="font-editorial italic font-normal text-blue-600 lowercase text-4xl sm:text-6xl">
                  next
                </span>
                ?
              </h3>
            </div>

            <Link href="#contact">
              <Button
                size="md"
                tint="#2563eb"
                lineColor="#bfdbfe"
                baseColor="#1d4ed8"
                className="text-xs sm:text-sm font-semibold tracking-wider uppercase px-8 py-4 shadow-lg shadow-blue-600/30 group cursor-pointer"
              >
                <span>START A PROJECT →</span>
              </Button>
            </Link>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 7. CONTACT SECTION                                             */}
        {/* ============================================================== */}
        <div id="contact" className="bg-white">
          <ContactSection />
        </div>
      </main>

      {/* Global Brand Footer Banner */}
      <BrandFooterBanner />
    </div>
  );
}
