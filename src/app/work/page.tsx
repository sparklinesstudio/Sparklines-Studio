"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { HeaderNavigation } from "@/components/Home Page Components/HeaderNavigation";
import { TestimonialsSection } from "@/components/Home Page Components/TestimonialsSection";
import { ContactSection } from "@/components/Home Page Components/ContactSection";
import { BrandFooterBanner } from "@/components/Home Page Components/BrandFooterBanner";
import { PortfolioSectionGrid } from "@/components/Work Page Components";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function WorkPage() {
  // 3 featured portfolios for each practice area
  const organicItems = PORTFOLIO_DATA.filter(
    (item) => item.categorySlug === "organic-marketing"
  ).slice(0, 3);
  const paidItems = PORTFOLIO_DATA.filter(
    (item) => item.categorySlug === "paid-marketing"
  ).slice(0, 3);
  const videoItems = PORTFOLIO_DATA.filter(
    (item) => item.categorySlug === "video-productions"
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-orange-500/20 selection:text-orange-950 font-sans overflow-x-hidden relative">
      <HeaderNavigation />

      <main className="relative z-10">
        {/* ============================================================== */}
        {/* HERO SECTION — Blue 600 at Top -> Blue 500 -> White, NO GRID  */}
        {/* ============================================================== */}
        <section
          id="portfolio-hero"
          className="relative overflow-hidden pt-20 pb-5 sm:pt-24 sm:pb-7 lg:pt-26 lg:pb-8 bg-[linear-gradient(180deg,#2563eb_0%,#3b82f6_28%,#ffffff_76%)]"
        >
          {/* Ambient top lighting bloom (NO GRID PATTERN) */}
          <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-[450px] w-[900px] -z-10 rounded-full bg-white/15 blur-[100px]" />

          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.06 }}
                className="mt-2.5 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl font-sans leading-[1.08]"
              >
                Our{" "}
                <span className="font-editorial italic font-normal text-zinc-900 tracking-normal">
                  Portfolio
                </span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12 }}
                className="mt-2 max-w-2xl text-sm sm:text-base text-zinc-700 font-normal leading-relaxed font-sans"
              >
                Strategic search architecture, hyper-scaled performance media, and
                commercial cinematography engineered to drive measurable enterprise
                market expansion.
              </motion.p>

              {/* Enterprise Quick-Jump Navigation Tabs */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.18 }}
                className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5"
              >
                <a
                  href="#organic-marketing"
                  className="group inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium text-zinc-700 bg-white border border-zinc-200 shadow-sm transition-all duration-300 hover:bg-zinc-950 hover:text-white hover:border-zinc-950 hover:shadow-md font-sans"
                >
                  <span className="font-mono text-[11px] text-blue-600 font-semibold group-hover:text-blue-400">01</span>
                  <span>Organic Marketing</span>
                </a>
                <a
                  href="#paid-marketing"
                  className="group inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium text-zinc-700 bg-white border border-zinc-200 shadow-sm transition-all duration-300 hover:bg-zinc-950 hover:text-white hover:border-zinc-950 hover:shadow-md font-sans"
                >
                  <span className="font-mono text-[11px] text-blue-600 font-semibold group-hover:text-blue-400">02</span>
                  <span>Paid Marketing</span>
                </a>
                <a
                  href="#video-productions"
                  className="group inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium text-zinc-700 bg-white border border-zinc-200 shadow-sm transition-all duration-300 hover:bg-zinc-950 hover:text-white hover:border-zinc-950 hover:shadow-md font-sans"
                >
                  <span className="font-mono text-[11px] text-blue-600 font-semibold group-hover:text-blue-400">03</span>
                  <span>Video Productions</span>
                </a>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1.5 rounded-full bg-zinc-950 px-4.5 py-1.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-blue-600 active:scale-95 group ml-1 font-sans"
                >
                  <span>Start Project</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            </div>

            {/* Enterprise Credibility Metrics Strip (Tightly Spaced) */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.22 }}
              className="mt-5 sm:mt-6 mx-auto max-w-4xl"
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-200/90 rounded-2xl overflow-hidden border border-zinc-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.04)] backdrop-blur-sm">
                <div className="bg-white/95 p-3.5 sm:p-4 flex flex-col justify-center">
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                    <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 font-medium">Attributed Growth</p>
                  </div>
                  <p className="mt-0.5 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 font-editorial italic">$185M+</p>
                  <p className="text-[10px] text-zinc-500 font-sans">Pipeline & Revenue</p>
                </div>
                <div className="bg-white/95 p-3.5 sm:p-4 flex flex-col justify-center">
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                    <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 font-medium">Paid Efficiency</p>
                  </div>
                  <p className="mt-0.5 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 font-editorial italic">4.8x</p>
                  <p className="text-[10px] text-zinc-500 font-sans">Median Channel ROAS</p>
                </div>
                <div className="bg-white/95 p-3.5 sm:p-4 flex flex-col justify-center">
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                    <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 font-medium">Organic Scale</p>
                  </div>
                  <p className="mt-0.5 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 font-editorial italic">44%+</p>
                  <p className="text-[10px] text-zinc-500 font-sans">SEO Traffic Expansion</p>
                </div>
                <div className="bg-white/95 p-3.5 sm:p-4 flex flex-col justify-center">
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                    <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 font-medium">Flagship Works</p>
                  </div>
                  <p className="mt-0.5 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 font-editorial italic">9</p>
                  <p className="text-[10px] text-zinc-500 font-sans">Selected Case Studies</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 1: ORGANIC MARKETING (Clean White)                    */}
        {/* ============================================================== */}
        <PortfolioSectionGrid
          id="organic-marketing"
          categoryNumber="01"
          categoryTitle="Organic"
          categoryAccent="Marketing"
          categoryDescription="Technical SEO, high-authority content ecosystems, and semantic discoverability designed to turn qualified search volume into direct transactional revenue."
          items={organicItems}
          initialCount={3}
          colorTheme="blue"
          bgClassName="bg-white"
        />

        {/* ============================================================== */}
        {/* SECTION 2: PAID MARKETING (Subtle Clean Neutral)              */}
        {/* ============================================================== */}
        <PortfolioSectionGrid
          id="paid-marketing"
          categoryNumber="02"
          categoryTitle="Paid"
          categoryAccent="Marketing"
          categoryDescription="Multi-channel paid acquisition funnels spanning Google Search, Performance Max, Meta Ads, and LinkedIn ABM built for radical return on ad spend."
          items={paidItems}
          initialCount={3}
          colorTheme="blue"
          bgClassName="bg-zinc-50/70 border-y border-zinc-200/80"
        />

        {/* ============================================================== */}
        {/* SECTION 3: VIDEO PRODUCTIONS (Clean White Cinema)              */}
        {/* ============================================================== */}
        <PortfolioSectionGrid
          id="video-productions"
          categoryNumber="03"
          categoryTitle="Video"
          categoryAccent="Productions"
          categoryDescription="Commercial cinema, architectural documentaries, and extreme-speed macro commercials that command attention, elevate brand prestige, and convert."
          items={videoItems}
          initialCount={3}
          colorTheme="blue"
          bgClassName="bg-white"
        />

        {/* ============================================================== */}
        {/* TESTIMONIALS (FROM HOME PAGE)                                  */}
        {/* ============================================================== */}
        <div className="bg-gradient-to-b from-white via-zinc-100/30 to-white">
          <TestimonialsSection />
        </div>

        {/* ============================================================== */}
        {/* CONTACT FORM (FROM HOME PAGE)                                  */}
        {/* ============================================================== */}
        <div className="bg-white">
          <ContactSection />
        </div>
      </main>

      <BrandFooterBanner />
    </div>
  );
}
