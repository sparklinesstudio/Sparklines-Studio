"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  X,
  TrendingUp,
  MapPin,
  ExternalLink,
  Sparkles,
  Search,
  Map,
  FileText,
  Link2,
  Zap,
  BarChart3,
} from "lucide-react";
import { HeaderNavigation } from "@/components/Home Page Components/HeaderNavigation";
import { CtaFloatingSection } from "@/components/Home Page Components/CtaFloatingSection";
import { BrandFooterBanner } from "@/components/Home Page Components/BrandFooterBanner";
import { Button } from "@/components/ui/Button";
import "./seo-kolkata.css";

const SEO_MARQUEE_ITEMS = [
  "Technical SEO Audits",
  "Local SEO Kolkata",
  "Content Architecture",
  "Digital PR & Authority",
  "E-Commerce & D2C Scale",
  "AI Search & GEO Optimization",
  "Google Map Pack Dominance",
  "Core Web Vitals Engineering",
  "Revenue Attribution",
  "Enterprise Programmatic SEO",
];

export default function SeoAgencyKolkataPage() {
  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    goal: "Dominate Local Kolkata Search & Map Pack",
  });

  // FAQ accordion state (first item open by default)
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Animated counters on viewport entry
  const [countersVisible, setCountersVisible] = useState(false);
  const metricsRef = useRef<HTMLDivElement>(null);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  // Observer for counter animation
  useEffect(() => {
    const el = metricsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCountersVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!countersVisible) return;

    const duration = 1650;
    const start = performance.now();

    const frame = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount1(Math.floor(eased * 140));
      setCount2(Math.floor(eased * 280));
      setCount3(Math.floor(eased * 312));
      setCount4(Math.floor(eased * 94));

      if (progress < 1) {
        requestAnimationFrame(frame);
      }
    };
    requestAnimationFrame(frame);
  }, [countersVisible]);

  // Observer for scroll-reveal animations across all sections
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".reveal, .method-top-line, .method-row"
    );
    if (!revealElements.length) return;

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, []);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalSuccess(true);
  };

  const openAuditModal = () => {
    setModalSuccess(false);
    setModalOpen(true);
  };

  const faqs = [
    {
      q: "How much does it cost to hire a top-tier SEO agency in Kolkata?",
      a: "While low-cost vendors offer ₹10,000/month automated packages that rarely move the needle, a strategic, revenue-focused SEO retainer in Kolkata typically ranges from ₹45,000 to ₹2,25,000+ per month depending on your domain complexity, geographic scope (local Kolkata vs. pan-India/global), and required content and Digital PR velocity. Every proposal is custom-modeled against projected organic ROI.",
    },
    {
      q: "How long until we see measurable rankings and lead flow?",
      a: "Technical indexation fixes, Google Business Profile optimizations, and striking-distance keyword refreshes (pages currently ranking positions 4–15) typically generate measurable traffic and lead lifts within the first 45 to 75 days. Competitive category-defining keywords compound steadily between months 4 and 9.",
    },
    {
      q: "Can a Kolkata-based SEO agency rank our brand across India, the US, or the UK?",
      a: "Yes. Over 65% of our clients are headquartered in Kolkata (Salt Lake Sector V, Park Street, New Town) or across India while targeting high-intent buyers in North America, Europe, the Middle East, and pan-India SERPs. You get world-class technical engineering and native-level editorial quality with direct access to our senior leadership team.",
    },
    {
      q: "How do you optimize for AI Search (ChatGPT, Perplexity, and Google AI Overviews)?",
      a: "Generative Engine Optimization (GEO) is baked into every retainer. We structure your site with deep JSON-LD entity schema, original proprietary data tables, citation-worthy digital PR mentions, and concise Q&A blocks that Large Language Models actively cite when recommending category leaders.",
    },
    {
      q: "What happens during the complimentary SEO Audit & Strategy Call?",
      a: "Zero generic sales pitches. Prior to our 30-minute call, a Senior SEO Architect manually inspects your domain, identifies your top 3 technical roadblocks, maps out the exact keywords your competitors are monetizing, and presents a 90-day roadmap you can keep whether we partner together or not.",
    },
  ];

  return (
    <div className="bg-[#F7F6F2] text-[#0B0C10] selection:bg-blue-600 selection:text-white min-h-screen">
      {/* Site's Official Floating Header Navigation */}
      <HeaderNavigation />

      {/* ============================================================== */}
      {/* 1. ATMOSPHERIC HERO SECTION                                     */}
      {/* ============================================================== */}
      <header className="relative text-white border-b border-[#232630] overflow-hidden bg-[#090B10] pt-28 sm:pt-36 lg:pt-40 min-h-[82vh] flex flex-col justify-between">
        {/* Left Vertical Edge Label */}
        <div className="hidden xl:flex absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center items-center gap-2 text-[10px] font-mono tracking-[0.28em] text-zinc-500 uppercase select-none pointer-events-none z-20 whitespace-nowrap">
          <span>EST. 2024 — KOLKATA, WB</span>
        </div>

        {/* Right Vertical Edge Label */}
        <div className="hidden xl:flex absolute right-8 top-1/2 -translate-y-1/2 rotate-90 origin-center items-center gap-2 text-[10px] font-mono tracking-[0.28em] text-zinc-500 uppercase select-none pointer-events-none z-20 whitespace-nowrap">
          <span>INDEX #001 | SEARCH · AUTHORITY · GROWTH</span>
        </div>

        {/* Cityscape Background Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#090B10]/92 via-[#090B10]/75 to-[#090B10] z-0" />

        {/* Ambient Blue Horizon Glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[360px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none z-0" />
        <div className="ambient-glow-blue absolute top-16 right-[10%] w-[26rem] h-[26rem] rounded-full z-0 opacity-50 pointer-events-none" />

        {/* Background Giant Infinite Watermark Marquee */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden pointer-events-none select-none z-0">
          <div className="watermark-marquee-wrap">
            <div className="flex shrink-0 items-center whitespace-nowrap text-[8rem] sm:text-[12rem] md:text-[15rem] lg:text-[18rem] font-bold leading-none text-white/[0.045] tracking-tight uppercase font-sans">
              <span className="pr-16">// ORGANIC GROWTH //</span>
              <span className="pr-16">// ORGANIC GROWTH //</span>
              <span className="pr-16">// ORGANIC GROWTH //</span>
            </div>
            <div className="flex shrink-0 items-center whitespace-nowrap text-[8rem] sm:text-[12rem] md:text-[15rem] lg:text-[18rem] font-bold leading-none text-white/[0.045] tracking-tight uppercase font-sans" aria-hidden="true">
              <span className="pr-16">// ORGANIC GROWTH //</span>
              <span className="pr-16">// ORGANIC GROWTH //</span>
              <span className="pr-16">// ORGANIC GROWTH //</span>
            </div>
          </div>
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-4 pb-16 sm:pb-24 lg:pb-28 w-full">
          {/* Top Status Eyebrow */}
          <div className="hero-fade-up flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.22em] text-zinc-400 mb-6 sm:mb-8">
            <span className="w-2 h-2 bg-blue-600 inline-block shadow-sm shadow-blue-600/60" />
            <span>CURRENTLY ACCEPTING Q1/Q2 PARTNERS</span>
          </div>

          {/* Monumental Stacked Headline: RANK. REIGN. REPEAT. */}
          <div className="text-6xl sm:text-8xl md:text-9xl lg:text-[9.5rem] font-bold uppercase tracking-[-0.035em] leading-[0.88] mb-6 font-sans">
            <div className="hero-line-mask">
              <span className="hero-word hero-word-1 text-white">RANK.</span>
            </div>
            <div className="hero-line-mask">
              <span className="hero-word hero-word-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
                REIGN.
              </span>
            </div>
            <div className="hero-line-mask">
              <span className="hero-word hero-word-3 text-white">REPEAT.</span>
            </div>
          </div>

          {/* Clean Subheading: KOLKATA SEO COMPANY */}
          <h1 className="hero-fade-up hero-delay-1 text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-10 sm:mb-12 font-sans">
            KOLKATA SEO COMPANY
          </h1>

          {/* Bottom Split Row: Paragraph on Left, CTAs on Right */}
          <div className="hero-fade-up hero-delay-2 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pt-2">
            <div className="lg:col-span-7">
              <p className="text-zinc-300 text-xs sm:text-sm md:text-[15px] leading-relaxed font-normal max-w-xl">
                Sparklines Studio is a Kolkata SEO company engineering technical SEO, local search,
                content strategy, and organic revenue growth across the city &amp; beyond.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-wrap items-center gap-4 lg:justify-end">
              <Button
                size="md"
                tint="#2563eb"
                lineColor="#bfdbfe"
                baseColor="#1d4ed8"
                onClick={openAuditModal}
                className="text-xs sm:text-sm font-semibold tracking-wider uppercase px-7 py-3.5 shadow-lg shadow-blue-600/30 group cursor-pointer"
              >
                <span>START RANKING →</span>
              </Button>

              <a
                href="tel:+919641861932"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-black/40 hover:bg-black/70 border border-white/20 hover:border-blue-500/60 text-white font-mono text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer backdrop-blur-sm"
              >
                <svg
                  className="w-3.5 h-3.5 text-zinc-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>CALL (964) 186-1932</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ============================================================== */}
      {/* 2. INFINITE SERVICE MARQUEE SECTION (REFINED & SLEEK)           */}
      {/* ============================================================== */}
      <div className="relative w-full overflow-hidden bg-[#F7F6F2] border-b border-[#D5D2C9] py-4 sm:py-5 select-none">
        {/* Subtle Edge Gradient Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-36 bg-gradient-to-r from-[#F7F6F2] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-36 bg-gradient-to-l from-[#F7F6F2] to-transparent" />

        {/* Marquee Track with Smooth Infinite Loop */}
        <div className="animate-marquee-infinite">
          {[...SEO_MARQUEE_ITEMS, ...SEO_MARQUEE_ITEMS].map((item, idx) => (
            <div
              key={`marquee-item-${item}-${idx}`}
              className="flex items-center gap-4 sm:gap-6 px-4 sm:px-6 shrink-0"
            >
              <span className="text-sm sm:text-base lg-text-xl font-semibold uppercase tracking-[0.14em] text-[#0B0C10] hover:text-blue-600 transition-colors whitespace-nowrap">
                {item}
              </span>
              <span className="text-blue-600 font-light text-base sm:text-lg select-none">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ============================================================== */}
      {/* 3. EDITORIAL MANIFESTO SECTION                                  */}
      {/* ============================================================== */}
      <section className="bg-[#F7F6F2] py-20 sm:py-28 px-5 sm:px-8 lg:px-12 border-b border-[#D5D2C9]">
        <div className="max-w-3xl mx-auto">

          <h2 className="reveal delay-75 text-xl sm:text-2xl md:text-[28px] lg:text-5xl font-semibold uppercase tracking-[-0.02em] leading-snug text-[#0B0C10] mb-8 font-sans">
            The SEO Agency in Kolkata Built for{" "}
            <span className="font-editorial italic font-normal lowercase text-blue-600 text-2xl sm:text-3xl lg:text-6xl">
              compounding
            </span>{" "}
            Organic Revenue.
          </h2>

          <div className="space-y-5 text-xs sm:text-[13.5px] lg:text-lg leading-[1.9] text-zinc-700 font-normal">
            <p className="reveal delay-150">
              Most digital agencies in Kolkata still treat search engine optimization like it is
              2015, selling packaged backlink spreadsheets, stuffed meta tags, and monthly PDF
              reports full of vanity impressions that never translate into qualified pipeline or
              closed revenue.
            </p>
            <p className="reveal delay-225">
              At Sparklines Studio, we operate differently. As a specialized search engine
              optimization practice in Kolkata, we approach organic search as a rigorous commercial
              engineering discipline. Every technical sprint, schema deployment, topical cluster,
              and high-authority editorial placement is architected backward from your customer
              acquisition cost (CAC) and customer lifetime value (LTV).
            </p>
            <p className="reveal delay-300">
              Whether you are fighting for hyperlocal map-pack dominance across Park Street, Salt
              Lake, and New Town, or scaling a B2B SaaS and e-commerce storefront across India, the
              UK, and North America from your Kolkata headquarters—we build defensible organic moats
              that your competitors cannot buy their way past.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. DARK METRICS STRIP (ANIMATED NUMBER COUNTERS)               */}
      {/* ============================================================== */}
      <section
        ref={metricsRef}
        className="bg-[#0B0C10] text-white py-16 sm:py-20 px-5 sm:px-8 lg:px-12 border-b border-[#232630]"
      >
        <div className="max-w-6xl mx-auto">
          {/* Top Indicator Line */}
          <div className="reveal flex items-center gap-3 pb-8 mb-10 border-b border-[#232630]">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span className="text-[10px] font-normal uppercase tracking-[0.25em] text-zinc-400">
              01 / Measured By Commercial Impact
            </span>
          </div>

          {/* 4-Column Stat Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10">
            <div className="reveal pr-6 lg:border-r border-[#232630]">
              <div className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.03em] text-white mb-2 font-sans">
                {count1}
                <span className="text-blue-500 font-light">+</span>
              </div>
              <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-normal">
                Kolkata & Global Brands Scaled
              </p>
            </div>

            <div className="reveal delay-75 sm:pl-6 lg:px-8 lg:border-r border-[#232630]">
              <div className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.03em] text-white mb-2 font-sans">
                ₹{count2}Cr<span className="text-blue-500 font-light">+</span>
              </div>
              <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-normal">
                Verified Organic Revenue Generated
              </p>
            </div>

            <div className="reveal delay-150 pr-6 lg:px-8 lg:border-r border-[#232630]">
              <div className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.03em] text-white mb-2 font-sans">
                {count3}
                <span className="text-blue-500 font-light">%</span>
              </div>
              <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-normal">
                Avg. 12-Month Qualified Traffic Lift
              </p>
            </div>

            <div className="reveal delay-225 sm:pl-6 lg:pl-8">
              <div className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.03em] text-white mb-2 font-sans">
                {count4}
                <span className="text-blue-500 font-light">%</span>
              </div>
              <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-normal">
                Annual Client Retention Rate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. SIX DISCIPLINES GRID (FULL WIDTH ARCHITECTURAL LAYOUT)       */}
      {/* ============================================================== */}
      <section
        id="disciplines"
        className="w-full bg-[#F7F6F2] py-20 sm:py-28 lg:py-32 border-b border-[#D5D2C9]"
      >
        {/* Full-Width Section Header */}
        <div className="w-full px-6 sm:px-12 lg:px-16 mb-12 sm:mb-16 lg:mb-20 reveal">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-[-0.03em] text-[#0B0C10] leading-[1.04] font-sans">
            Six disciplines.<br />
            <span className="font-editorial italic font-normal text-[#0B0C10]">
              One
            </span>{" "}
            trajectory.
          </h2>
        </div>

        {/* Full-Width 3x2 Architectural Grid Matching Screenshot */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 border-t border-b border-[#D5D2C9]">
          {/* Card 01: Technical SEO Audits */}
          <div className="relative p-8 sm:p-12 lg:p-16 md:border-r border-b border-[#D5D2C9] bg-[#F7F6F2] hover:bg-blue-600 transition-all duration-500 ease-in-out flex flex-col justify-between min-h-[300px] sm:min-h-[360px] group cursor-pointer overflow-hidden">
            {/* Smooth GPU-accelerated blue background fade overlay */}
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between mb-16 sm:mb-24">
              <Search className="w-7 h-7 text-[#0B0C10] stroke-[1.5] group-hover:text-white group-hover:scale-105 transition-all duration-500 ease-in-out" />
              <span className="text-xs font-mono text-zinc-400 group-hover:text-blue-100 transition-colors duration-500 ease-in-out">01</span>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-tight text-[#0B0C10] group-hover:text-white transition-colors duration-500 ease-in-out mb-3">
                Technical SEO Audits
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 group-hover:text-blue-100 font-normal leading-relaxed max-w-sm transition-colors duration-500 ease-in-out">
                Crawl, render, index. We surgically remove every blocker between your site and the SERP.
              </p>
            </div>
          </div>

          {/* Card 02: Local Kolkata Domination */}
          <div className="relative p-8 sm:p-12 lg:p-16 md:border-r border-b border-[#D5D2C9] bg-[#F7F6F2] hover:bg-blue-600 transition-all duration-500 ease-in-out flex flex-col justify-between min-h-[300px] sm:min-h-[360px] group cursor-pointer overflow-hidden">
            {/* Smooth GPU-accelerated blue background fade overlay */}
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between mb-16 sm:mb-24">
              <Map className="w-7 h-7 text-[#0B0C10] stroke-[1.5] group-hover:text-white group-hover:scale-105 transition-all duration-500 ease-in-out" />
              <span className="text-xs font-mono text-zinc-400 group-hover:text-blue-100 transition-colors duration-500 ease-in-out">02</span>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-tight text-[#0B0C10] group-hover:text-white transition-colors duration-500 ease-in-out mb-3">
                Local Kolkata Domination
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 group-hover:text-blue-100 font-normal leading-relaxed max-w-sm transition-colors duration-500 ease-in-out">
                Map pack ownership across all commercial corridors. Citations, GBP, hyperlocal landing pages.
              </p>
            </div>
          </div>

          {/* Card 03: Content Engineering */}
          <div className="relative p-8 sm:p-12 lg:p-16 border-b border-[#D5D2C9] bg-[#F7F6F2] hover:bg-blue-600 transition-all duration-500 ease-in-out flex flex-col justify-between min-h-[300px] sm:min-h-[360px] group cursor-pointer overflow-hidden">
            {/* Smooth GPU-accelerated blue background fade overlay */}
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between mb-16 sm:mb-24">
              <FileText className="w-7 h-7 text-[#0B0C10] stroke-[1.5] group-hover:text-white group-hover:scale-105 transition-all duration-500 ease-in-out" />
              <span className="text-xs font-mono text-zinc-400 group-hover:text-blue-100 transition-colors duration-500 ease-in-out">03</span>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-tight text-[#0B0C10] group-hover:text-white transition-colors duration-500 ease-in-out mb-3">
                Content Engineering
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 group-hover:text-blue-100 font-normal leading-relaxed max-w-sm transition-colors duration-500 ease-in-out">
                Topical authority built page-by-page with editorial rigor and entity-first architecture.
              </p>
            </div>
          </div>

          {/* Card 04: Authority Building */}
          <div className="relative p-8 sm:p-12 lg:p-16 md:border-r border-b md:border-b-0 border-[#D5D2C9] bg-[#F7F6F2] hover:bg-blue-600 transition-all duration-500 ease-in-out flex flex-col justify-between min-h-[300px] sm:min-h-[360px] group cursor-pointer overflow-hidden">
            {/* Smooth GPU-accelerated blue background fade overlay */}
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between mb-16 sm:mb-24">
              <Link2 className="w-7 h-7 text-[#0B0C10] stroke-[1.5] group-hover:text-white group-hover:scale-105 transition-all duration-500 ease-in-out" />
              <span className="text-xs font-mono text-zinc-400 group-hover:text-blue-100 transition-colors duration-500 ease-in-out">04</span>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-tight text-[#0B0C10] group-hover:text-white transition-colors duration-500 ease-in-out mb-3">
                Authority Building
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 group-hover:text-blue-100 font-normal leading-relaxed max-w-sm transition-colors duration-500 ease-in-out">
                Earned links from publications that move needles, not vanity metrics.
              </p>
            </div>
          </div>

          {/* Card 05: AI Search & GEO */}
          <div className="relative p-8 sm:p-12 lg:p-16 md:border-r border-b md:border-b-0 border-[#D5D2C9] bg-[#F7F6F2] hover:bg-blue-600 transition-all duration-500 ease-in-out flex flex-col justify-between min-h-[300px] sm:min-h-[360px] group cursor-pointer overflow-hidden">
            {/* Smooth GPU-accelerated blue background fade overlay */}
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between mb-16 sm:mb-24">
              <Zap className="w-7 h-7 text-[#0B0C10] stroke-[1.5] group-hover:text-white group-hover:scale-105 transition-all duration-500 ease-in-out" />
              <span className="text-xs font-mono text-zinc-400 group-hover:text-blue-100 transition-colors duration-500 ease-in-out">05</span>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-tight text-[#0B0C10] group-hover:text-white transition-colors duration-500 ease-in-out mb-3">
                AI Search & GEO
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 group-hover:text-blue-100 font-normal leading-relaxed max-w-sm transition-colors duration-500 ease-in-out">
                Optimize for ChatGPT, Perplexity, and Google&apos;s AI Overviews. The new front page.
              </p>
            </div>
          </div>

          {/* Card 06: Revenue Attribution */}
          <div className="relative p-8 sm:p-12 lg:p-16 bg-[#F7F6F2] hover:bg-blue-600 transition-all duration-500 ease-in-out flex flex-col justify-between min-h-[300px] sm:min-h-[360px] group cursor-pointer overflow-hidden">
            {/* Smooth GPU-accelerated blue background fade overlay */}
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between mb-16 sm:mb-24">
              <BarChart3 className="w-7 h-7 text-[#0B0C10] stroke-[1.5] group-hover:text-white group-hover:scale-105 transition-all duration-500 ease-in-out" />
              <span className="text-xs font-mono text-zinc-400 group-hover:text-blue-100 transition-colors duration-500 ease-in-out">06</span>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-tight text-[#0B0C10] group-hover:text-white transition-colors duration-500 ease-in-out mb-3">
                Revenue Attribution
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 group-hover:text-blue-100 font-normal leading-relaxed max-w-sm transition-colors duration-500 ease-in-out">
                Every keyword tied to dollars. Dashboards your CFO actually understands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. KOLKATA COMMERCIAL HUBS (FULL-WIDTH 4x2 ARCHITECTURAL GRID)  */}
      {/* ============================================================== */}
      <section
        id="kolkata-hubs"
        className="w-full bg-[#F7F6F2] py-20 sm:py-28 lg:py-32 border-b border-[#D5D2C9]"
      >
        {/* Full-Width Section Header matching screenshot */}
        <div className="w-full px-6 sm:px-12 lg:px-16 mb-12 sm:mb-16 lg:mb-20">
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-zinc-500 mb-4 sm:mb-6">
            // AREAS WE SERVE
          </p>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-[-0.03em] text-[#0B0C10] leading-[1.05] font-sans mb-6 max-w-5xl">
            DOMINATING KOLKATA&apos;S MOST COMPETITIVE COMMERCIAL CORRIDORS
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed max-w-3xl">
            Local SEO programs tuned to the neighborhoods, languages and competitive sets of every Kolkata commercial corridor we serve.
          </p>
        </div>

        {/* Full-Width 4x2 Architectural Grid Matching Screenshot */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-b border-[#D5D2C9]">
          {/* Hub 01: Salt Lake Sector V */}
          <div className="relative p-8 sm:p-10 lg:p-12 min-h-[190px] sm:min-h-[220px] flex flex-col justify-between bg-[#F7F6F2] hover:bg-blue-600 transition-all duration-500 ease-in-out border-b sm:border-r lg:border-r border-[#D5D2C9] group cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none" />
            <div className="relative z-10 flex items-start justify-between gap-4 mb-4">
              <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#0B0C10] group-hover:text-white transition-colors duration-500 ease-in-out">
                SALT LAKE SECTOR V
              </h3>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500 ease-in-out shrink-0 mt-0.5" />
            </div>
            <p className="relative z-10 text-xs sm:text-sm text-zinc-600 group-hover:text-blue-100 font-normal leading-relaxed transition-colors duration-500 ease-in-out">
              Enterprise, B2B SaaS, IT services, and fintech SEO built to capture national and international buyers.
            </p>
          </div>

          {/* Hub 02: Park Street & Camac St */}
          <div className="relative p-8 sm:p-10 lg:p-12 min-h-[190px] sm:min-h-[220px] flex flex-col justify-between bg-[#F7F6F2] hover:bg-blue-600 transition-all duration-500 ease-in-out border-b sm:border-r-0 lg:border-r border-[#D5D2C9] group cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none" />
            <div className="relative z-10 flex items-start justify-between gap-4 mb-4">
              <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#0B0C10] group-hover:text-white transition-colors duration-500 ease-in-out">
                PARK STREET &amp; CAMAC ST
              </h3>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500 ease-in-out shrink-0 mt-0.5" />
            </div>
            <p className="relative z-10 text-xs sm:text-sm text-zinc-600 group-hover:text-blue-100 font-normal leading-relaxed transition-colors duration-500 ease-in-out">
              Hospitality, fine dining, luxury retail, and high-footfall commercial flagship rankings.
            </p>
          </div>

          {/* Hub 03: New Town & Rajarhat */}
          <div className="relative p-8 sm:p-10 lg:p-12 min-h-[190px] sm:min-h-[220px] flex flex-col justify-between bg-[#F7F6F2] hover:bg-blue-600 transition-all duration-500 ease-in-out border-b sm:border-r lg:border-r border-[#D5D2C9] group cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none" />
            <div className="relative z-10 flex items-start justify-between gap-4 mb-4">
              <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#0B0C10] group-hover:text-white transition-colors duration-500 ease-in-out">
                NEW TOWN &amp; RAJARHAT
              </h3>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500 ease-in-out shrink-0 mt-0.5" />
            </div>
            <p className="relative z-10 text-xs sm:text-sm text-zinc-600 group-hover:text-blue-100 font-normal leading-relaxed transition-colors duration-500 ease-in-out">
              Luxury residential real estate, commercial townships, universities, and healthcare clusters.
            </p>
          </div>

          {/* Hub 04: Ballygunge & Alipore */}
          <div className="relative p-8 sm:p-10 lg:p-12 min-h-[190px] sm:min-h-[220px] flex flex-col justify-between bg-[#F7F6F2] hover:bg-blue-600 transition-all duration-500 ease-in-out border-b sm:border-r-0 lg:border-r-0 border-[#D5D2C9] group cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none" />
            <div className="relative z-10 flex items-start justify-between gap-4 mb-4">
              <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#0B0C10] group-hover:text-white transition-colors duration-500 ease-in-out">
                BALLYGUNGE &amp; ALIPORE
              </h3>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500 ease-in-out shrink-0 mt-0.5" />
            </div>
            <p className="relative z-10 text-xs sm:text-sm text-zinc-600 group-hover:text-blue-100 font-normal leading-relaxed transition-colors duration-500 ease-in-out">
              Bespoke luxury labels, wealth advisory, cosmetic clinics, and high-net-worth service intent.
            </p>
          </div>

          {/* Hub 05: BBD Bagh / Dalhousie */}
          <div className="relative p-8 sm:p-10 lg:p-12 min-h-[190px] sm:min-h-[220px] flex flex-col justify-between bg-[#F7F6F2] hover:bg-blue-600 transition-all duration-500 ease-in-out border-b sm:border-b-0 sm:border-r lg:border-r lg:border-b-0 border-[#D5D2C9] group cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none" />
            <div className="relative z-10 flex items-start justify-between gap-4 mb-4">
              <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#0B0C10] group-hover:text-white transition-colors duration-500 ease-in-out">
                BBD BAGH &amp; DALHOUSIE
              </h3>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500 ease-in-out shrink-0 mt-0.5" />
            </div>
            <p className="relative z-10 text-xs sm:text-sm text-zinc-600 group-hover:text-blue-100 font-normal leading-relaxed transition-colors duration-500 ease-in-out">
              Corporate law firms, chartered accountants, financial institutions, and legacy enterprise houses.
            </p>
          </div>

          {/* Hub 06: EM Bypass Corridor */}
          <div className="relative p-8 sm:p-10 lg:p-12 min-h-[190px] sm:min-h-[220px] flex flex-col justify-between bg-[#F7F6F2] hover:bg-blue-600 transition-all duration-500 ease-in-out border-b sm:border-b-0 sm:border-r-0 lg:border-r lg:border-b-0 border-[#D5D2C9] group cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none" />
            <div className="relative z-10 flex items-start justify-between gap-4 mb-4">
              <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#0B0C10] group-hover:text-white transition-colors duration-500 ease-in-out">
                EM BYPASS CORRIDOR
              </h3>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500 ease-in-out shrink-0 mt-0.5" />
            </div>
            <p className="relative z-10 text-xs sm:text-sm text-zinc-600 group-hover:text-blue-100 font-normal leading-relaxed transition-colors duration-500 ease-in-out">
              Multi-specialty tertiary hospitals, convention hotels, luxury auto dealerships, and premium towers.
            </p>
          </div>

          {/* Hub 07: Howrah & Dankuni Belt */}
          <div className="relative p-8 sm:p-10 lg:p-12 min-h-[190px] sm:min-h-[220px] flex flex-col justify-between bg-[#F7F6F2] hover:bg-blue-600 transition-all duration-500 ease-in-out border-b sm:border-b-0 sm:border-r lg:border-r lg:border-b-0 border-[#D5D2C9] group cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none" />
            <div className="relative z-10 flex items-start justify-between gap-4 mb-4">
              <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#0B0C10] group-hover:text-white transition-colors duration-500 ease-in-out">
                HOWRAH &amp; DANKUNI BELT
              </h3>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500 ease-in-out shrink-0 mt-0.5" />
            </div>
            <p className="relative z-10 text-xs sm:text-sm text-zinc-600 group-hover:text-blue-100 font-normal leading-relaxed transition-colors duration-500 ease-in-out">
              Industrial machinery, B2B manufacturing exporters, freight logistics, and supply chain search dominance.
            </p>
          </div>

          {/* Hub 08: South Kolkata Hubs */}
          <div className="relative p-8 sm:p-10 lg:p-12 min-h-[190px] sm:min-h-[220px] flex flex-col justify-between bg-[#F7F6F2] hover:bg-blue-600 transition-all duration-500 ease-in-out border-[#D5D2C9] group cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none" />
            <div className="relative z-10 flex items-start justify-between gap-4 mb-4">
              <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#0B0C10] group-hover:text-white transition-colors duration-500 ease-in-out">
                SOUTH KOLKATA HUBS
              </h3>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500 ease-in-out shrink-0 mt-0.5" />
            </div>
            <p className="relative z-10 text-xs sm:text-sm text-zinc-600 group-hover:text-blue-100 font-normal leading-relaxed transition-colors duration-500 ease-in-out">
              Gariahat, Rashbehari, and Jadavpur retail chains, healthcare clinics, and educational institutions.
            </p>
          </div>
        </div>

        {/* Sub-note */}
        <div className="w-full px-6 sm:px-12 lg:px-16 mt-8 sm:mt-12">
          <p className="text-xs sm:text-sm text-zinc-600 font-normal">
            <span className="text-[#0B0C10] uppercase tracking-wider font-semibold">
              Headquartered in Kolkata, Scaling Globally:
            </span>{" "}
            Over 65% of our Kolkata-based clients partner with Sparklines Studio to dominate pan-India, US, UK, and APAC search markets.
          </p>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. HIGH-STAKES INDUSTRIES SECTION (FULL-WIDTH 3x2 GRID)         */}
      {/* ============================================================== */}
      <section
        id="industries"
        className="w-full bg-[#F7F6F2] py-20 sm:py-28 lg:py-32 border-b border-[#D5D2C9]"
      >
        {/* Full-Width Section Header matching screenshot */}
        <div className="w-full px-6 sm:px-12 lg:px-16 mb-12 sm:mb-16 lg:mb-20">
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-zinc-500 mb-4 sm:mb-6">
            // VERTICAL SPECIALIZATION
          </p>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-[-0.03em] text-[#0B0C10] leading-[1.05] font-sans mb-6 max-w-5xl">
            INDUSTRY-SPECIFIC SEO FOR HIGH-COMPETITION, HIGH-LTV VERTICALS
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed max-w-3xl">
            We&apos;ve shipped programs across Kolkata&apos;s and India&apos;s most competitive verticals — every engagement built around the search behavior, regulatory edges, and local competition unique to your industry.
          </p>
        </div>

        {/* Full-Width 3x2 Architectural Grid Matching Screenshot */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 border-t border-b border-[#D5D2C9]">
          {/* Card 01: B2B SaaS */}
          <div className="relative p-8 sm:p-10 lg:p-12 min-h-[240px] sm:min-h-[280px] flex flex-col justify-between bg-[#F7F6F2] hover:bg-blue-600 transition-all duration-500 ease-in-out md:border-r border-b border-[#D5D2C9] group cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#0B0C10] group-hover:text-white transition-colors duration-500 ease-in-out">
                  B2B SAAS &amp; ENTERPRISE SEO
                </h3>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500 ease-in-out shrink-0 mt-0.5" />
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 group-hover:text-blue-100 font-normal leading-relaxed transition-colors duration-500 ease-in-out">
                Capturing high-intent software comparison, alternative, and enterprise solution queries that drive qualified demo bookings.
              </p>
            </div>
            <div className="relative z-10 pt-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-zinc-600 group-hover:text-white transition-colors duration-500 ease-in-out">
                SEE B2B SAAS SEO
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </div>

          {/* Card 02: Healthcare */}
          <div className="relative p-8 sm:p-10 lg:p-12 min-h-[240px] sm:min-h-[280px] flex flex-col justify-between bg-[#F7F6F2] hover:bg-blue-600 transition-all duration-500 ease-in-out md:border-r border-b border-[#D5D2C9] group cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#0B0C10] group-hover:text-white transition-colors duration-500 ease-in-out">
                  HEALTHCARE &amp; MEDICAL SEO
                </h3>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500 ease-in-out shrink-0 mt-0.5" />
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 group-hover:text-blue-100 font-normal leading-relaxed transition-colors duration-500 ease-in-out">
                YMYL-compliant patient acquisition for tertiary hospitals, cosmetic practices, and digital healthcare platforms.
              </p>
            </div>
            <div className="relative z-10 pt-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-zinc-600 group-hover:text-white transition-colors duration-500 ease-in-out">
                SEE HEALTHCARE SEO
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </div>

          {/* Card 03: Real Estate */}
          <div className="relative p-8 sm:p-10 lg:p-12 min-h-[240px] sm:min-h-[280px] flex flex-col justify-between bg-[#F7F6F2] hover:bg-blue-600 transition-all duration-500 ease-in-out border-b border-[#D5D2C9] group cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#0B0C10] group-hover:text-white transition-colors duration-500 ease-in-out">
                  REAL ESTATE &amp; INFRASTRUCTURE SEO
                </h3>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500 ease-in-out shrink-0 mt-0.5" />
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 group-hover:text-blue-100 font-normal leading-relaxed transition-colors duration-500 ease-in-out">
                Ranking luxury residential towers, commercial townships, and prime corridor developments with zero ad reliance.
              </p>
            </div>
            <div className="relative z-10 pt-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-zinc-600 group-hover:text-white transition-colors duration-500 ease-in-out">
                SEE REAL ESTATE SEO
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </div>

          {/* Card 04: D2C & Retail */}
          <div className="relative p-8 sm:p-10 lg:p-12 min-h-[240px] sm:min-h-[280px] flex flex-col justify-between bg-[#F7F6F2] hover:bg-blue-600 transition-all duration-500 ease-in-out md:border-r border-b md:border-b-0 border-[#D5D2C9] group cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#0B0C10] group-hover:text-white transition-colors duration-500 ease-in-out">
                  D2C, JEWELLERY &amp; HERITAGE RETAIL
                </h3>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500 ease-in-out shrink-0 mt-0.5" />
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 group-hover:text-blue-100 font-normal leading-relaxed transition-colors duration-500 ease-in-out">
                Scaling iconic craftsmanship, apparel, and consumer brands from local flagships to national e-commerce scale.
              </p>
            </div>
            <div className="relative z-10 pt-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-zinc-600 group-hover:text-white transition-colors duration-500 ease-in-out">
                SEE D2C RETAIL SEO
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </div>

          {/* Card 05: BFSI & Industrial */}
          <div className="relative p-8 sm:p-10 lg:p-12 min-h-[240px] sm:min-h-[280px] flex flex-col justify-between bg-[#F7F6F2] hover:bg-blue-600 transition-all duration-500 ease-in-out md:border-r border-b md:border-b-0 border-[#D5D2C9] group cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#0B0C10] group-hover:text-white transition-colors duration-500 ease-in-out">
                  BFSI, LEGAL &amp; MANUFACTURING
                </h3>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500 ease-in-out shrink-0 mt-0.5" />
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 group-hover:text-blue-100 font-normal leading-relaxed transition-colors duration-500 ease-in-out">
                Authoritative search visibility for corporate advisory, chartered accountants, and heavy manufacturing exporters.
              </p>
            </div>
            <div className="relative z-10 pt-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-zinc-600 group-hover:text-white transition-colors duration-500 ease-in-out">
                SEE FINANCE &amp; B2B SEO
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </div>

          {/* Card 06: Shaded Neutral Callout Matching Screenshot */}
          <div className="relative p-8 sm:p-10 lg:p-12 min-h-[240px] sm:min-h-[280px] flex flex-col justify-between bg-[#E3E0D8] border-[#D5D2C9]">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-2">
                // CUSTOM VERTICALS
              </p>
              <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#0B0C10] mb-3">
                UNSURE IF YOUR NICHE FITS?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed mb-6">
                We run a complimentary SERP feasibility and competitor gap model before proposing an engagement.
              </p>
            </div>
            <div>
              <Button
                size="sm"
                tint="#2563eb"
                lineColor="#bfdbfe"
                baseColor="#1d4ed8"
                onClick={openAuditModal}
                className="shadow-md shadow-blue-600/20 group cursor-pointer"
              >
                <span>Request Feasibility Study</span>
                <ArrowUpRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. DARK METHODOLOGY & DIFFERENTIATORS                           */}
      {/* ============================================================== */}
      <section
        id="methodology"
        className="w-full bg-[#0B0C10] text-white py-20 sm:py-28 lg:py-32 border-b border-[#232630]"
      >
        {/* Part A: A method built for compound growth */}
        <div className="w-full mb-24 sm:mb-32">
          {/* Section Header matching screenshot */}
          <div className="w-full px-6 sm:px-12 lg:px-16 mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-[-0.03em] text-white leading-[1.04] font-sans">
              A method built for<br />
              <span className="font-editorial italic font-normal text-blue-500">
                compound
              </span>{" "}
              growth.
            </h2>
          </div>

          {/* Rows matching screenshot */}
          <div className="w-full border-t border-[#232630]">
            {/* Row 01: Diagnose */}
            <div className="py-10 sm:py-14 lg:py-16 px-6 sm:px-12 lg:px-16 border-b border-[#232630] flex flex-col md:flex-row md:items-baseline justify-between gap-6 md:gap-12 lg:gap-16 group hover:bg-white/[0.02] transition-colors duration-300">
              <div className="flex items-baseline gap-6 sm:gap-10 shrink-0 md:w-5/12 lg:w-4/12">
                <span className="text-xs sm:text-sm font-mono text-blue-500">01</span>
                <h3 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors duration-300 font-sans">
                  Diagnose
                </h3>
              </div>
              <div className="md:w-7/12 lg:w-8/12 max-w-2xl">
                <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
                  Forensic audit of your site, competitors, and the SERPs you actually want to own. No templates, no fluff.
                </p>
              </div>
            </div>

            {/* Row 02: Architect */}
            <div className="py-10 sm:py-14 lg:py-16 px-6 sm:px-12 lg:px-16 border-b border-[#232630] flex flex-col md:flex-row md:items-baseline justify-between gap-6 md:gap-12 lg:gap-16 group hover:bg-white/[0.02] transition-colors duration-300">
              <div className="flex items-baseline gap-6 sm:gap-10 shrink-0 md:w-5/12 lg:w-4/12">
                <span className="text-xs sm:text-sm font-mono text-blue-500">02</span>
                <h3 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors duration-300 font-sans">
                  Architect
                </h3>
              </div>
              <div className="md:w-7/12 lg:w-8/12 max-w-2xl">
                <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
                  We design the topical map, the technical foundation, and the editorial calendar. Everything ships against measurable hypotheses.
                </p>
              </div>
            </div>

            {/* Row 03: Execute */}
            <div className="py-10 sm:py-14 lg:py-16 px-6 sm:px-12 lg:px-16 border-b border-[#232630] flex flex-col md:flex-row md:items-baseline justify-between gap-6 md:gap-12 lg:gap-16 group hover:bg-white/[0.02] transition-colors duration-300">
              <div className="flex items-baseline gap-6 sm:gap-10 shrink-0 md:w-5/12 lg:w-4/12">
                <span className="text-xs sm:text-sm font-mono text-blue-500">03</span>
                <h3 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors duration-300 font-sans">
                  Execute
                </h3>
              </div>
              <div className="md:w-7/12 lg:w-8/12 max-w-2xl">
                <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
                  Engineering, writing, and digital PR run in parallel sprints. Weekly velocity, monthly retros, quarterly compounding.
                </p>
              </div>
            </div>

            {/* Row 04: Compound */}
            <div className="py-10 sm:py-14 lg:py-16 px-6 sm:px-12 lg:px-16 border-b border-[#232630] flex flex-col md:flex-row md:items-baseline justify-between gap-6 md:gap-12 lg:gap-16 group hover:bg-white/[0.02] transition-colors duration-300">
              <div className="flex items-baseline gap-6 sm:gap-10 shrink-0 md:w-5/12 lg:w-4/12">
                <span className="text-xs sm:text-sm font-mono text-blue-500">04</span>
                <h3 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors duration-300 font-sans">
                  Compound
                </h3>
              </div>
              <div className="md:w-7/12 lg:w-8/12 max-w-2xl">
                <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
                  Conversion rate optimization, AI Overview dominance, and CRM attribution. Compounding pipeline that builds defensible moats.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Part B: Lower Dark Grid (6 Differentiators) */}
        <div className="w-full px-6 sm:px-12 lg:px-16">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-blue-500 mb-4">
              // THE AGENCY DIFFERENCE
            </p>
            <h3 className="text-3xl sm:text-5xl font-bold uppercase tracking-[-0.03em] text-white leading-tight font-sans">
              WHY MARKET LEADERS REPLACE THEIR LEGACY AGENCY WITH{" "}
              <span className="font-editorial italic font-normal lowercase text-blue-500">
                Sparklines Studio.
              </span>
            </h3>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            <div className="border-t border-[#232630] pt-6">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-500 block mb-3">
                01 / Senior Strategists Only
              </span>
              <h4 className="text-base font-semibold text-white mb-2">No Junior Account Handoffs</h4>
              <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                You work directly with senior Kolkata SEO architects who have scaled 8- and 9-figure
                organic channels—never an outsourced junior coordinator reading off a checklist.
              </p>
            </div>

            <div className="border-t border-[#232630] pt-6">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-500 block mb-3">
                02 / Revenue Attribution
              </span>
              <h4 className="text-base font-semibold text-white mb-2">
                GA4 + CRM Pipeline Integration
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                We connect Google Search Console and GA4 directly to HubSpot, Zoho, or Salesforce so
                you see exact SQLs, phone calls, and closed revenue from organic search.
              </p>
            </div>

            <div className="border-t border-[#232630] pt-6">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-500 block mb-3">
                03 / Dev-Ready Implementation
              </span>
              <h4 className="text-base font-semibold text-white mb-2">
                We Don&apos;t Just Send 100-Page PDFs
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                Audit recommendations die in engineering backlogs. Our technical team writes
                deployment-ready schema, redirects, and code patches alongside your developers.
              </p>
            </div>

            <div className="border-t border-[#232630] pt-6">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-500 block mb-3">
                04 / 100% White-Hat Authority
              </span>
              <h4 className="text-base font-semibold text-white mb-2">
                Algorithm-Proof Link Acquisition
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                Every core update rewards our clients because we never touch rented links or spam
                networks. We build genuine digital PR assets that earn real journalistic citations.
              </p>
            </div>

            <div className="border-t border-[#232630] pt-6">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-500 block mb-3">
                05 / Category Exclusivity
              </span>
              <h4 className="text-base font-semibold text-white mb-2">
                We Partner With One Leader Per Niche
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                We refuse to work with your direct local competitor in Kolkata at the same time. When
                you partner with us, our entire playbook is weaponized exclusively for you.
              </p>
            </div>

            <div className="border-t border-[#232630] pt-6">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-500 block mb-3">
                06 / Future-Proof GEO
              </span>
              <h4 className="text-base font-semibold text-white mb-2">
                Engineered for Google + LLMs
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                From traditional blue links and Kolkata Map Packs to AI Overviews and ChatGPT
                Search, we optimize your brand entity across every modern discovery surface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 9. FEATURED CASE STUDY SECTION                                  */}
      {/* ============================================================== */}
      <section
        id="case-study"
        className="bg-[#F7F6F2] py-20 sm:py-28 px-5 sm:px-8 lg:px-12 border-b border-[#D5D2C9]"
      >
        <div className="max-w-6xl mx-auto">
          {/* Split Header */}
          <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-10">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-600">
                  05 / Featured Transformation
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.02em] text-[#0B0C10] leading-[1.1] font-sans">
                From page four to<br />
                <span className="font-editorial italic font-normal text-blue-600">
                  category default.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-xs text-zinc-600 font-normal leading-relaxed">
                How Sparklines Studio rebuilt the technical foundation and national search authority
                for a heritage Kolkata luxury & D2C retail brand, turning organic search into their
                #1 revenue driver in 10 months.
              </p>
            </div>
          </div>

          {/* Large Editorial Case Study Banner Image with Hover Zoom */}
          <div className="relative rounded-sm overflow-hidden border border-[#D5D2C9] group">
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[580px] bg-zinc-900">
              <Image
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1800&q=85"
                alt="Kolkata Luxury Retail Brand Editorial Case Study"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent pointer-events-none" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6 z-10">
              <div className="max-w-2xl">
                <span className="block text-blue-400 text-xs sm:text-sm font-mono uppercase tracking-[0.2em] mb-3">
                  // LUXURY RETAIL &amp; E-COMMERCE • PARK STREET, KOLKATA
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Scaling a Heritage Kolkata Brand from ₹1.8Cr to ₹9.4Cr in Annual Non-Brand Organic Revenue.
                </h3>
              </div>
              <div>
                <Button
                  size="md"
                  tint="#2563eb"
                  lineColor="#bfdbfe"
                  baseColor="#1d4ed8"
                  onClick={openAuditModal}
                  className="shadow-lg shadow-blue-600/30 group cursor-pointer"
                >
                  <span>Read Full Breakdown</span>
                  <ArrowUpRight className="h-4 w-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </div>
            </div>
          </div>

          {/* 3-Column Metrics Strip Below Image */}
          <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-l border-r border-[#D5D2C9] bg-white">
            <div className="p-8 sm:p-12 border-b sm:border-b-0 sm:border-r border-[#D5D2C9]">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B0C10] mb-2 font-sans">
                +418<span className="text-blue-600 font-light">%</span>
              </div>
              <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-zinc-500 font-medium">
                Year-Over-Year Organic Revenue
              </p>
            </div>
            <div className="p-8 sm:p-12 border-b sm:border-b-0 sm:border-r border-[#D5D2C9]">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B0C10] mb-2 font-sans">
                180<span className="text-blue-600 font-light">+</span>
              </div>
              <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-zinc-500 font-medium">
                Top-3 Commercial Keyword Rankings
              </p>
            </div>
            <div className="p-8 sm:p-12">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B0C10] mb-2 font-sans">
                6.4<span className="text-blue-600 font-light">x</span>
              </div>
              <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-zinc-500 font-medium">
                Net Return on SEO Investment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 10. TESTIMONIALS & ENGAGEMENT MODELS                            */}
      {/* ============================================================== */}
      <section className="w-full bg-[#EAE8E1] py-20 sm:py-28 lg:py-32 border-b border-[#D5D2C9]">
        <div className="w-full px-6 sm:px-12 lg:px-16">
          {/* Part A: Receipts / Testimonials Matching Screenshot */}
          <div className="mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-zinc-500">
              // 05 — RECEIPTS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 pb-20 border-b border-[#D5D2C9]">
            {/* Column 1 */}
            <div className="flex flex-col justify-between md:border-r border-[#D5D2C9] md:pr-10 lg:pr-14 border-b md:border-b-0 pb-10 md:pb-0">
              <div>
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mb-6 sm:mb-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-[#0B0C10] tracking-tight leading-[1.25] mb-12 sm:mb-16 font-sans">
                  They didn’t sell us SEO. They sold us a thesis on how our category works — and then proved it month after month.
                </h3>
              </div>
              <div className="pt-6 border-t border-[#D5D2C9]">
                <div className="text-sm font-bold text-[#0B0C10]">
                  Maya Okafor
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mt-1">
                  CMO, THREADBARE NYC
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col justify-between md:border-r border-[#D5D2C9] md:px-10 lg:px-14 border-b md:border-b-0 py-10 md:py-0">
              <div>
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mb-6 sm:mb-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-[#0B0C10] tracking-tight leading-[1.25] mb-12 sm:mb-16 font-sans">
                  Three agencies before. None understood Kolkata local search. Sparklines Studio had us in the pack in 90 days.
                </h3>
              </div>
              <div className="pt-6 border-t border-[#D5D2C9]">
                <div className="text-sm font-bold text-[#0B0C10]">
                  Daniel Reyes
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mt-1">
                  OWNER, REYES DENTAL &amp; CLINIC
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col justify-between md:pl-10 lg:pl-14 pt-10 md:pt-0">
              <div>
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mb-6 sm:mb-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-[#0B0C10] tracking-tight leading-[1.25] mb-12 sm:mb-16 font-sans">
                  Single best ROI line item in our entire marketing stack. Nothing else is close.
                </h3>
              </div>
              <div className="pt-6 border-t border-[#D5D2C9]">
                <div className="text-sm font-bold text-[#0B0C10]">
                  Priya Shah
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mt-1">
                  VP GROWTH, HALCYON EYEWEAR
                </div>
              </div>
            </div>
          </div>

          {/* Part B: Structured Engagement Models (4-Column Grid) */}
          <div className="pt-16 sm:pt-24">
            <div className="mb-12">
              <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-zinc-500 mb-4 sm:mb-6">
                // COMMERCIAL ENGAGEMENT
              </p>
              <h3 className="text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-[-0.03em] text-[#0B0C10] font-sans">
                STRUCTURED FOR TRANSPARENT COMPOUNDING ROI
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-b border-[#D5D2C9]">
              {/* Tier 01 */}
              <div className="relative p-8 sm:p-10 min-h-[280px] flex flex-col justify-between bg-[#F7F6F2] hover:bg-blue-600 transition-all duration-500 ease-in-out border-b sm:border-r lg:border-r border-[#D5D2C9] group cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none" />
                <div className="relative z-10">
                  <span className="text-xs font-mono uppercase tracking-widest text-blue-600 group-hover:text-blue-100 block mb-2 transition-colors duration-500">
                    Tier 01 / Hyperlocal
                  </span>
                  <h4 className="text-base sm:text-lg font-bold uppercase text-[#0B0C10] group-hover:text-white mb-3 transition-colors duration-500">
                    KOLKATA MARKET DOMINANCE
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 group-hover:text-blue-100 font-normal leading-relaxed mb-6 transition-colors duration-500">
                    Ideal for multi-location clinics, real estate projects, hospitality, and regional service leaders targeting Kolkata &amp; West Bengal.
                  </p>
                </div>
                <div className="relative z-10 pt-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 group-hover:text-white transition-colors duration-500">
                    INQUIRE AVAILABILITY
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>

              {/* Tier 02 */}
              <div className="relative p-8 sm:p-10 min-h-[280px] flex flex-col justify-between bg-[#F7F6F2] hover:bg-blue-600 transition-all duration-500 ease-in-out border-b sm:border-r-0 lg:border-r border-[#D5D2C9] group cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none" />
                <div className="relative z-10">
                  <span className="text-xs font-mono uppercase tracking-widest text-blue-600 group-hover:text-blue-100 block mb-2 transition-colors duration-500">
                    Tier 02 / Growth Retainer
                  </span>
                  <h4 className="text-base sm:text-lg font-bold uppercase text-[#0B0C10] group-hover:text-white mb-3 transition-colors duration-500">
                    NATIONAL &amp; D2C SCALE
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 group-hover:text-blue-100 font-normal leading-relaxed mb-6 transition-colors duration-500">
                    Full-stack technical SEO, content velocity, and Digital PR for brands competing across pan-India high-volume commercial SERPs.
                  </p>
                </div>
                <div className="relative z-10 pt-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 group-hover:text-white transition-colors duration-500">
                    INQUIRE AVAILABILITY
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>

              {/* Tier 03 */}
              <div className="relative p-8 sm:p-10 min-h-[280px] flex flex-col justify-between bg-[#F7F6F2] hover:bg-blue-600 transition-all duration-500 ease-in-out border-b sm:border-r lg:border-r border-[#D5D2C9] group cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none" />
                <div className="relative z-10">
                  <span className="text-xs font-mono uppercase tracking-widest text-blue-600 group-hover:text-blue-100 block mb-2 transition-colors duration-500">
                    Tier 03 / Enterprise
                  </span>
                  <h4 className="text-base sm:text-lg font-bold uppercase text-[#0B0C10] group-hover:text-white mb-3 transition-colors duration-500">
                    GLOBAL &amp; PROGRAMMATIC
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 group-hover:text-blue-100 font-normal leading-relaxed mb-6 transition-colors duration-500">
                    Dedicated cross-functional squad for 10,000+ URL marketplaces, SaaS platforms, and international multi-region domains.
                  </p>
                </div>
                <div className="relative z-10 pt-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 group-hover:text-white transition-colors duration-500">
                    INQUIRE AVAILABILITY
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>

              {/* Tier 04 */}
              <div className="relative p-8 sm:p-10 min-h-[280px] flex flex-col justify-between bg-[#F7F6F2] hover:bg-blue-600 transition-all duration-500 ease-in-out border-b sm:border-b-0 sm:border-r-0 lg:border-r-0 border-[#D5D2C9] group cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none" />
                <div className="relative z-10">
                  <span className="text-xs font-mono uppercase tracking-widest text-blue-600 group-hover:text-blue-100 block mb-2 transition-colors duration-500">
                    Tier 04 / 30-Day Sprint
                  </span>
                  <h4 className="text-base sm:text-lg font-bold uppercase text-[#0B0C10] group-hover:text-white mb-3 transition-colors duration-500">
                    FORENSIC AUDIT &amp; MIGRATION
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 group-hover:text-blue-100 font-normal leading-relaxed mb-6 transition-colors duration-500">
                    One-time deep technical overhaul, site redesign/domain migration protection, or algorithmic penalty recovery blueprint.
                  </p>
                </div>
                <div className="relative z-10 pt-4">
                  <Button
                    size="sm"
                    tint="#2563eb"
                    lineColor="#bfdbfe"
                    baseColor="#1d4ed8"
                    onClick={openAuditModal}
                    className="w-full text-xs shadow-md shadow-blue-600/20 group cursor-pointer"
                  >
                    <span>Book Diagnostic Sprint →</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 11. INTERACTIVE FAQ SECTION (2-COLUMN SPLIT)                     */}
      {/* ============================================================== */}
      <section
        id="faq"
        className="w-full bg-[#F7F6F2] py-20 sm:py-28 lg:py-32 border-b border-[#D5D2C9]"
      >
        <div className="w-full px-6 sm:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Clean Architectural Sticky Title */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-zinc-500 mb-4 sm:mb-6">
                // DIRECT ANSWERS
              </p>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-[-0.03em] text-[#0B0C10] leading-[1.05] mb-6 font-sans">
                KOLKATA<br />
                SEO<br />
                QUESTIONS<span className="text-blue-600">.</span>
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed max-w-md">
                Everything CMOs, founders, and growth leaders ask before partnering with Sparklines Studio in Kolkata.
              </p>
            </div>
          </div>

          {/* Right Column: Expandable Accordion Items */}
          <div className="lg:col-span-7 border-t border-[#D5D2C9]">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className="border-b border-[#D5D2C9]">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveFaq(isOpen ? null : index);
                      setTimeout(() => window.dispatchEvent(new Event("resize")), 50);
                    }}
                    className="w-full py-6 flex items-center justify-between text-left gap-4 group cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-semibold text-[#0B0C10] group-hover:text-blue-600 transition-colors">
                      {faq.q}
                    </span>
                    <span
                      className={`text-blue-600 font-light text-2xl leading-none transition-transform duration-300 ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-8 text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ============================================================== */}
      {/* 13. SITE OFFICIAL BRAND FOOTER BANNER                           */}
      {/* ============================================================== */}
      <CtaFloatingSection />

      {/* Global Brand Footer */}
      <BrandFooterBanner />

      {/* ============================================================== */}
      {/* 14. INTERACTIVE FORENSIC SEO AUDIT MODAL                         */}
      {/* ============================================================== */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalOpen(false);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fadeIn"
        >
          <div className="bg-[#F7F6F2] border border-[#D5D2C9] max-w-lg w-full p-6 sm:p-9 relative rounded-2xl shadow-2xl">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 text-zinc-500 hover:text-[#0B0C10] font-normal text-lg leading-none cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>

            {!modalSuccess ? (
              <>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                    Complimentary Diagnostic
                  </span>
                </div>
                <h3 className="text-2xl font-semibold uppercase tracking-[-0.02em] text-[#0B0C10] mb-2 font-sans">
                  Request Your Kolkata{" "}
                  <span className="font-editorial italic font-normal lowercase text-blue-600">
                    SEO
                  </span>{" "}
                  Audit.
                </h3>
                <p className="text-xs text-zinc-600 font-normal mb-6">
                  Enter your details below. A Senior SEO Strategist in our Salt Lake Sector V
                  office will record a custom 15-minute teardown of your site and top 3
                  competitors.
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-[#0B0C10] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Saurav Ganguly"
                      className="w-full bg-white border border-[#D5D2C9] px-3.5 py-2.5 text-xs font-normal text-[#0B0C10] focus:outline-none focus:border-blue-600 rounded-xl transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-wider text-[#0B0C10] mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full bg-white border border-[#D5D2C9] px-3.5 py-2.5 text-xs font-normal text-[#0B0C10] focus:outline-none focus:border-blue-600 rounded-xl transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-wider text-[#0B0C10] mb-1">
                        Website URL *
                      </label>
                      <input
                        type="url"
                        required
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        placeholder="https://yourbrand.com"
                        className="w-full bg-white border border-[#D5D2C9] px-3.5 py-2.5 text-xs font-normal text-[#0B0C10] focus:outline-none focus:border-blue-600 rounded-xl transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-[#0B0C10] mb-1">
                      Primary Growth Goal
                    </label>
                    <select
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="w-full bg-white border border-[#D5D2C9] px-3.5 py-2.5 text-xs font-normal text-[#0B0C10] focus:outline-none focus:border-blue-600 rounded-xl transition-all cursor-pointer"
                    >
                      <option>Dominate Local Kolkata Search & Map Pack</option>
                      <option>Scale National / Global Organic Revenue</option>
                      <option>Technical SEO Overhaul & Core Web Vitals</option>
                      <option>E-Commerce / D2C Category Scaling</option>
                    </select>
                  </div>
                  <div className="pt-2">
                    <Button
                      type="submit"
                      size="md"
                      tint="#2563eb"
                      lineColor="#bfdbfe"
                      baseColor="#1d4ed8"
                      className="w-full shadow-lg shadow-blue-600/25 group"
                    >
                      <span>Send My Forensic Audit →</span>
                    </Button>
                  </div>
                </form>
              </>
            ) : (
              <div className="py-8 text-center animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-4 font-normal text-xl shadow-lg shadow-blue-600/30">
                  ✓
                </div>
                <h4 className="text-lg font-semibold uppercase text-[#0B0C10] mb-2 font-sans">
                  Audit Request Received
                </h4>
                <p className="text-xs text-zinc-600 font-normal max-w-sm mx-auto mb-6 leading-relaxed">
                  Our Senior SEO Strategist in Kolkata is reviewing your domain and SERP landscape.
                  Expect your custom video teardown within 1 business day.
                </p>
                <Button
                  size="sm"
                  tint="#2563eb"
                  lineColor="#bfdbfe"
                  baseColor="#1d4ed8"
                  onClick={() => setModalOpen(false)}
                >
                  Back to Page
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
