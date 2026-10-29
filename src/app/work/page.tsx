"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HeaderNavigation } from "@/components/Home Page Components/HeaderNavigation";
import { CtaFloatingSection } from "@/components/Home Page Components/CtaFloatingSection";
import { BrandFooterBanner } from "@/components/Home Page Components/BrandFooterBanner";
import { Button } from "@/components/ui/Button";
import { HOUSE_OF_KOLAM_IMAGES } from "@/data/houseOfKolamData";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
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

// Curated verified portfolio case studies excluding the flagship House of Kolam which is featured above
const curatedProjects = PORTFOLIO_DATA.filter((p) => p.id !== "house-of-kolam").slice(0, 6);

export default function WorkPage() {
  const [previewIdx, setPreviewIdx] = useState(0);

  // Mobile Touch Swipe State
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40;

    if (distance > minSwipeDistance) {
      // Swiped Left -> Next image
      setPreviewIdx((prev) => (prev + 1) % showcaseImages.length);
    } else if (distance < -minSwipeDistance) {
      // Swiped Right -> Prev image
      setPreviewIdx((prev) => (prev - 1 + showcaseImages.length) % showcaseImages.length);
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setPreviewIdx((prev) => (prev - 1 + showcaseImages.length) % showcaseImages.length);
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setPreviewIdx((prev) => (prev + 1) % showcaseImages.length);
  };

  return (
    <div className="bg-[#F7F6F2] text-[#0B0C10] selection:bg-blue-600 selection:text-white min-h-screen">
      {/* Site's Official Floating Header Navigation */}
      <HeaderNavigation />

      <main>
        {/* ============================================================== */}
        {/* 1. ATMOSPHERIC HERO SECTION                                    */}
        {/* ============================================================== */}
        <header className="relative text-white border-b border-[#232630] overflow-hidden bg-[#090B10] pt-28 sm:pt-36 lg:pt-40 min-h-[70vh] flex flex-col justify-between">
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
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-4 pb-16 sm:pb-20 w-full">
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
                    <span>EXPLORE WORK</span>
                  </Button>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3.5 bg-black/40 hover:bg-black/70 border border-white/20 hover:border-blue-500/60 text-white font-mono text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer backdrop-blur-sm"
                >
                  <span>START A PROJECT</span>
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* ============================================================== */}
        {/* 2. INFINITE SERVICE MARQUEE STRIP                               */}
        {/* ============================================================== */}
        <div className="relative w-full overflow-hidden bg-[#F7F6F2] border-b border-[#D5D2C9] py-3.5 sm:py-4 select-none">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-36 bg-gradient-to-r from-[#F7F6F2] to-transparent select-none" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-36 bg-gradient-to-l from-[#F7F6F2] to-transparent select-none" />

          <div className="watermark-marquee-wrap hover:[animation-play-state:paused]">
            <div className="flex shrink-0 items-center">
              {WORK_MARQUEE_ITEMS.map((item, idx) => (
                <div
                  key={`marquee-item-1-${idx}`}
                  className="flex items-center gap-4 sm:gap-6 px-4 sm:px-6 shrink-0"
                >
                  <span className="text-xs sm:text-sm md:text-[15px] font-semibold uppercase tracking-[0.14em] text-[#0B0C10] hover:text-blue-600 transition-colors whitespace-nowrap font-sans">
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
                  <span className="text-xs sm:text-sm md:text-[15px] font-semibold uppercase tracking-[0.14em] text-[#0B0C10] hover:text-blue-600 transition-colors whitespace-nowrap font-sans">
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
        {/* 3. FLAGSHIP HOUSE OF KOLAM ARCHITECTURAL SHOWCASE CARD          */}
        {/* Flush top with zero gap or padding margin above the card       */}
        {/* ============================================================== */}
        <section
          id="portfolio-archive"
          className="w-full bg-[#F7F6F2] border-b border-[#D5D2C9]"
        >
          {/* Main Full-Width Architectural Showcase Card */}
          <div className="w-full bg-[#F7F6F2]">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12">
              {/* Left Column: Streamlined Editorial & Scope */}
              <div className="lg:col-span-6 p-6 sm:p-10 lg:p-14 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#D5D2C9] bg-[#F7F6F2]">
                {/* Category metadata */}
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-3">
                  Featured Flagship Case Study
                </div>

                {/* Headline in Signature Editorial Pairing */}
                <Link href="/work/branding/house-of-kolam" className="group block mb-4">
                  <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-[-0.03em] text-[#0B0C10] group-hover:text-blue-600 transition-colors font-sans leading-[1.08]">
                    House of Kolam.<br />
                    <span className="font-editorial italic font-normal text-blue-600 text-3xl sm:text-4xl lg:text-[42px]">
                      Sacred Geometry &amp; Heritage Identity
                    </span>
                  </h2>
                </Link>

                {/* Narrative Overview */}
                <p className="text-xs sm:text-sm leading-relaxed text-zinc-600 font-normal mb-6 max-w-xl">
                  A modern celebration of ancestral South Indian mathematical art. Engineered from a pure
                  geometric dot-grid matrix into an expansive visual identity spanning bespoke vernacular
                  typography, artisanal kraft and brass packaging, kinetic motion loops, and spatial dining architecture.
                </p>

                {/* Compact Highlights Grid */}
                <div className="grid grid-cols-2 gap-3 py-5 border-y border-[#D5D2C9] mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold text-xs">✦</span>
                    <span className="text-xs font-semibold text-[#0B0C10]">Vector Dot-Grid Lattice</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold text-xs">✦</span>
                    <span className="text-xs font-semibold text-[#0B0C10]">12-SKU Packaging Architecture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold text-xs">✦</span>
                    <span className="text-xs font-semibold text-[#0B0C10]">Spatial Brass &amp; Dining Menus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold text-xs">✦</span>
                    <span className="text-xs font-semibold text-[#0B0C10]">Kinetic Motion Loops</span>
                  </div>
                </div>

                {/* Compact Metrics Row */}
                <div className="grid grid-cols-3 gap-4 pb-5 mb-6 border-b border-[#D5D2C9]">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0B0C10] font-sans">
                      23<span className="text-blue-600 font-light">+</span>
                    </div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                      Master Boards
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0B0C10] font-sans">
                      35<span className="text-blue-600 font-light">+</span>
                    </div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                      Deliverables
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold tracking-tight text-blue-600 font-sans">
                      100<span className="font-light">%</span>
                    </div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                      Vector Craft
                    </div>
                  </div>
                </div>

                {/* Primary Action Button (Without Arrows) + Secondary Link */}
                <div className="flex flex-wrap items-center gap-4">
                  <Link href="/work/branding/house-of-kolam">
                    <Button
                      size="md"
                      tint="#2563eb"
                      lineColor="#bfdbfe"
                      baseColor="#1d4ed8"
                      className="text-xs sm:text-sm font-semibold tracking-wider uppercase px-7 py-3.5 shadow-md shadow-blue-600/25 group cursor-pointer"
                    >
                      <span>VIEW ALL 23 BOARDS</span>
                    </Button>
                  </Link>

                  <Link
                    href="/work/branding/house-of-kolam"
                    className="inline-flex items-center text-xs font-mono font-semibold uppercase tracking-wider text-zinc-700 hover:text-blue-600 transition-colors py-2"
                  >
                    <span>Open Fullscreen Gallery</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Interactive Visual Showcase with Touch Swipe & Tap Controls */}
              <div className="lg:col-span-6 p-6 sm:p-8 lg:p-12 flex flex-col justify-between bg-[#F2F0E8]/40">
                <div>
                  {/* Top Status Bar with Board Number */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#D5D2C9]/80 text-xs font-mono text-zinc-500">
                    <span className="truncate pr-2">
                      BOARD {String(previewIdx + 1).padStart(2, "0")} / 06 · {showcaseImages[previewIdx].title}
                    </span>
                    <Link
                      href="/work/branding/house-of-kolam"
                      className="text-blue-600 hover:text-blue-800 font-semibold tracking-wider uppercase shrink-0 transition-colors"
                    >
                      <span>Full Screen</span>
                    </Link>
                  </div>

                  {/* Main Interactive Image Stage */}
                  <div
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onClick={() => setPreviewIdx((prev) => (prev + 1) % showcaseImages.length)}
                    className="group relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#D5D2C9] bg-zinc-100 cursor-pointer shadow-sm select-none"
                    title="Click or tap to advance image"
                  >
                    <Image
                      src={showcaseImages[previewIdx].url}
                      alt={showcaseImages[previewIdx].title}
                      fill
                      priority
                      className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.01]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />

                    {/* Left Previous Arrow Touch Button */}
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-black/65 hover:bg-black/85 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-transform active:scale-95 cursor-pointer shadow-md"
                      aria-label="Previous board"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>

                    {/* Right Next Arrow Touch Button */}
                    <button
                      type="button"
                      onClick={handleNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-black/65 hover:bg-black/85 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-transform active:scale-95 cursor-pointer shadow-md"
                      aria-label="Next board"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>

                    {/* Bottom Title Pill */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3.5 pt-6 pointer-events-none flex items-center justify-between">
                      <span className="text-[11px] sm:text-xs font-mono text-white tracking-wider uppercase truncate">
                        {showcaseImages[previewIdx].title}
                      </span>
                      <span className="text-[10px] font-mono text-white/70 uppercase shrink-0 pl-2">
                        Tap image or arrows to switch
                      </span>
                    </div>
                  </div>

                  {/* Indicator Dots for Easy Thumb Tap on Mobile */}
                  <div className="flex items-center justify-center gap-2 pt-3">
                    {showcaseImages.map((_, idx) => (
                      <button
                        key={`dot-${idx}`}
                        type="button"
                        onClick={() => setPreviewIdx(idx)}
                        onTouchEnd={(e) => {
                          e.preventDefault();
                          setPreviewIdx(idx);
                        }}
                        className={`h-2 transition-all duration-200 rounded-full cursor-pointer ${
                          previewIdx === idx ? "w-6 bg-blue-600" : "w-2 bg-[#D5D2C9] hover:bg-zinc-400"
                        }`}
                        aria-label={`Jump to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Compact Thumbnail Selector Bar */}
                <div className="pt-4 space-y-2">
                  <div className="grid grid-cols-6 gap-2">
                    {showcaseImages.map((img, idx) => (
                      <button
                        key={img.id}
                        type="button"
                        onClick={() => setPreviewIdx(idx)}
                        onTouchEnd={(e) => {
                          e.preventDefault();
                          setPreviewIdx(idx);
                        }}
                        className={`relative aspect-[16/10] w-full overflow-hidden rounded-lg border transition-all duration-200 cursor-pointer ${
                          previewIdx === idx
                            ? "border-blue-600 ring-2 ring-blue-600/40 opacity-100 scale-[1.03]"
                            : "border-[#D5D2C9] opacity-70 hover:opacity-100"
                        }`}
                        title={img.title}
                      >
                        <Image
                          src={img.url}
                          alt={img.title}
                          fill
                          className="object-cover"
                          sizes="100px"
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
        {/* 4. SELECTED CLIENT PORTFOLIO CARDS GRID                         */}
        {/* Rich, diverse, beautifully structured case studies archive     */}
        {/* ============================================================== */}
        <section className="w-full bg-[#F7F6F2] py-16 sm:py-24 px-6 sm:px-12 lg:px-16 border-b border-[#D5D2C9]">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10 sm:mb-14 pb-6 border-b border-[#D5D2C9]">
              <div>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0B0C10] font-sans">
                  Selected Client Archive
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 font-normal mt-2 max-w-xl">
                  Documented case studies spanning brand architecture, performance marketing, and technical search.
                </p>
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                {curatedProjects.length} Verified Engagements
              </div>
            </div>

            {/* Grid of Elevated Case Study Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {curatedProjects.map((project) => (
                <Link
                  key={project.id}
                  href={project.customHref || `/work/${project.id}`}
                  className="group flex flex-col rounded-2xl bg-white border border-[#D5D2C9] overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-600 transition-all duration-300"
                >
                  {/* Cover Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/95 text-zinc-900 border border-white/60 font-semibold backdrop-blur-xs shadow-xs">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-1.5">
                        {project.client} · {project.year}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#0B0C10] group-hover:text-blue-600 transition-colors font-sans line-clamp-2 leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-600 mt-2.5 line-clamp-2 leading-relaxed">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Metrics Strip & Clean Text Action */}
                    <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
                      <div>
                        <span className="text-base sm:text-lg font-bold text-[#0B0C10] font-sans">
                          {project.metrics[0].value}
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                          {project.metrics[0].label}
                        </span>
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 group-hover:text-blue-800 transition-colors">
                        View Case Study
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 5. METHODOLOGY & PHILOSOPHY SECTION                            */}
        {/* ============================================================== */}
        <section className="w-full bg-[#F7F6F2] py-16 sm:py-24 px-6 sm:px-12 lg:px-16 border-b border-[#D5D2C9]">
          <div className="max-w-4xl mx-auto text-center">
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
        {/* 6. FULL-WIDTH MARKETING CTA (MATCHING HOME PAGE)               */}
        {/* ============================================================== */}
        <CtaFloatingSection />
      </main>

      {/* Global Brand Footer Banner (Same as Home Page) */}
      <BrandFooterBanner />
    </div>
  );
}
