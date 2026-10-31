"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  X,
  Play,
  Film,
  Camera,
  Clapperboard,
  Tv,
  Layers,
  Sparkles,
  Volume2,
  Clock,
  Compass,
  MonitorPlay,
} from "lucide-react";
import { HeaderNavigation } from "@/components/Home Page Components/HeaderNavigation";
import { VideoShowcaseSection } from "@/components/Home Page Components/VideoShowcaseSection";
import { CtaFloatingSection } from "@/components/Home Page Components/CtaFloatingSection";
import { BrandFooterBanner } from "@/components/Home Page Components/BrandFooterBanner";
import { Button } from "@/components/ui/Button";
import "@/app/seo-agency-kolkata/seo-kolkata.css";

const VIDEO_MARQUEE_ITEMS = [
  "Commercial Hero Films",
  "4K / 6K Cinema Cameras",
  "Salt Lake Sector V Studio",
  "DaVinci Resolve Color Grading",
  "High-Hook Performance Reels",
  "Founder & Keynote Documentaries",
  "Architectural & Macro Detail",
  "Rapid 5-Day Rough Cut",
  "Sound Design & Audio Mastering",
  "RED & Sony FX Cinema Glass",
];

export default function VideoProductionAgencyKolkataPage() {
  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    brand: "",
    videoType: "Commercial Hero Film / Brand Anthem",
  });

  // FAQ accordion state
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

      setCount1(Math.floor(eased * 120));
      setCount2(Math.floor(eased * 84));
      setCount3(Math.floor(eased * 6));
      setCount4(Math.floor(eased * 5));

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

  const videoFaqs = [
    {
      q: "What does it cost to produce a commercial video with Sparklines Studio in Kolkata?",
      a: "Our productions are tiered transparently based on scale. Rapid social reel packs (batch production of 8-16 hook-tested vertical assets) start from ₹45,000 to ₹95,000. Comprehensive corporate documentaries, founder keynote films, and cinema 4K commercial hero spots generally range from ₹1,25,000 to ₹4,50,000+ depending on crew size, cinema camera packages (RED/Sony FX), lighting setups, studio rentals, talent casting, and multi-track sound engineering.",
    },
    {
      q: "What cameras, lenses, and lighting equipment do you deploy on set?",
      a: "We shoot exclusively on cinema-grade digital systems: Sony FX6 / FX3 and RED Digital Cinema bodies paired with fast cine primes and anamorphic glass. For lighting, we utilize Aputure and Nanlite continuous bi-color and RGB fixtures with large diffusion silks, motorized sliders, DJI Ronin stabilized gimbals, and wireless multi-channel Sennheiser audio capture.",
    },
    {
      q: "How fast can you deliver the first cut of our project?",
      a: "For social ad batches and founder interviews, your first assembly cut is delivered within 5 business days of wrap. Full-scale commercial spots with bespoke motion graphics, original musical score framing, and color grading in DaVinci Resolve Studio typically reach the review stage in 8 to 12 business days, followed by structured revision rounds.",
    },
    {
      q: "Can you manage location scouts, permits, and studio spaces across Kolkata?",
      a: "Yes. We have established relationships with commercial film locations across Salt Lake Sector V, New Town, Park Street, colonial heritage mansions in North Kolkata, and riverfront docks along the Hooghly. We coordinate all location permits, studio green-rooms, power distribution, and on-site logistics so your internal team can focus on creative approval.",
    },
    {
      q: "Do you deliver format-optimized cutdowns for social ads (Meta, YouTube, LinkedIn)?",
      a: "Every commercial engagement includes multi-aspect masters: 16:9 4K ProRes for your website and keynote presentations, alongside 9:16 vertical cuts with burned-in kinetic typography and psychological hook variations engineered specifically for Meta Reels, YouTube Shorts, and Instagram advertising.",
    },
    {
      q: "What happens during the initial creative treatment call?",
      a: "Zero speculation or generic sales decks. In our complimentary 30-minute creative discovery, a Senior Film Director reviews your brand positioning, analyzes your visual competitors, proposes 2-3 narrative concepts with reference moodboards, and provides an itemized production estimate you can review without obligation.",
    },
  ];

  const commercialCorridors = [
    {
      name: "SALT LAKE SECTOR V",
      desc: "Enterprise IT, SaaS product walkthroughs, B2B software keynotes, and global venture demo films.",
    },
    {
      name: "PARK STREET & CAMAC STREET",
      desc: "Flagship luxury retail spots, heritage culinary commercials, and high-street fashion visual campaigns.",
    },
    {
      name: "NEW TOWN & RAJARHAT",
      desc: "Fintech brand anthems, tech corporate campus tours, and fast-growing startup leadership documentaries.",
    },
    {
      name: "ALIPORE & BALLYGUNGE",
      desc: "Ultra-prime residential architecture films, interior design showcases, and bespoke private commission films.",
    },
    {
      name: "CHOWRINGHEE & CBD",
      desc: "Heritage corporate conglomerates, boardroom executive interviews, and institutional milestone films.",
    },
    {
      name: "TOPSIA & EM BYPASS",
      desc: "Modern commercial real estate developments, automobile showrooms, and lifestyle retail commercials.",
    },
    {
      name: "BURRABAZAR & POSTA",
      desc: "Large-scale manufacturing walkthroughs, wholesale distribution hubs, and export facility films.",
    },
    {
      name: "HOWRAH RIVERFRONT",
      desc: "Heavy industrial engineering documentaries, port infrastructure, and atmospheric riverfront cinematography.",
    },
  ];

  const productionCapabilities = [
    {
      icon: <Tv className="w-5 h-5 text-blue-600" />,
      title: "Commercial Hero Spots & TVCs",
      desc: "Monumental brand anthem films designed for web headers, national broadcast, and paid hero campaigns. Engineered with cinematic lighting and multi-track audio to command undisputed authority.",
    },
    {
      icon: <Clapperboard className="w-5 h-5 text-blue-600" />,
      title: "Founder & Keynote Documentaries",
      desc: "Intimate, authoritative interviews that position C-suite leadership as visionary industry pioneers. Shot with multi-camera setups, teleprompters, and cinematic B-roll storytelling.",
    },
    {
      icon: <MonitorPlay className="w-5 h-5 text-blue-600" />,
      title: "Performance Social Reels & Ad Hooks",
      desc: "High-converting 9:16 vertical video assets engineered with psychological scroll-stopping hooks, kinetic captions, and direct-response framing for Meta, Instagram, and YouTube Shorts.",
    },
    {
      icon: <Camera className="w-5 h-5 text-blue-600" />,
      title: "Product Launch & Macro Cinema",
      desc: "Tactile close-ups, robotic camera moves, and pristine lighting designed to showcase material finishes, craftsmanship, and luxury product physics with striking clarity.",
    },
    {
      icon: <Compass className="w-5 h-5 text-blue-600" />,
      title: "Architectural & Spatial Walkthroughs",
      desc: "Smooth gimbal tracking, drone cinematography, and balanced ambient lighting capturing multi-million-rupee residential estates, luxury hospitality, and corporate headquarters.",
    },
    {
      icon: <Layers className="w-5 h-5 text-blue-600" />,
      title: "Color Science & Post-Production",
      desc: "Mastering in DaVinci Resolve Studio with bespoke film-emulation LUTs, custom sound design, vocal cleanup, and 3D motion graphic overlays exported in pristine ProRes.",
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
          <span>INDEX #002 | CINEMA · REELS · NARRATIVE</span>
        </div>

        {/* Cityscape Background Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25 z-0 bg-cover bg-center"
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
              <span className="pr-16">// CINEMA IN MOTION //</span>
              <span className="pr-16">// CINEMA IN MOTION //</span>
              <span className="pr-16">// CINEMA IN MOTION //</span>
            </div>
            <div
              className="flex shrink-0 items-center whitespace-nowrap text-[8rem] sm:text-[12rem] md:text-[15rem] lg:text-[18rem] font-bold leading-none text-white/[0.045] tracking-tight uppercase font-sans"
              aria-hidden="true"
            >
              <span className="pr-16">// CINEMA IN MOTION //</span>
              <span className="pr-16">// CINEMA IN MOTION //</span>
              <span className="pr-16">// CINEMA IN MOTION //</span>
            </div>
          </div>
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-4 pb-16 sm:pb-24 lg:pb-28 w-full">
          {/* Top Status Eyebrow */}
          <div className="hero-fade-up flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.22em] text-zinc-400 mb-6 sm:mb-8">
            <span className="w-2 h-2 bg-blue-600 inline-block shadow-sm shadow-blue-600/60" />
            <span>COMMERCIAL PRODUCTION STUDIO · KOLKATA &amp; GLOBAL</span>
          </div>

          {/* Monumental Stacked Headline: FRAME. DIRECT. CONVERT. */}
          <div className="text-6xl sm:text-8xl md:text-9xl lg:text-[9.5rem] font-bold uppercase tracking-[-0.035em] leading-[0.88] mb-6 font-sans">
            <div className="hero-line-mask">
              <span className="hero-word hero-word-1 text-white">FRAME.</span>
            </div>
            <div className="hero-line-mask">
              <span className="hero-word hero-word-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
                DIRECT.
              </span>
            </div>
            <div className="hero-line-mask">
              <span className="hero-word hero-word-3 text-white">CONVERT.</span>
            </div>
          </div>

          {/* Clean Subheading */}
          <h1 className="hero-fade-up hero-delay-1 text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-10 sm:mb-12 font-sans">
            VIDEO PRODUCTION AGENCY KOLKATA
          </h1>

          {/* Bottom Split Row: Paragraph on Left, CTAs on Right */}
          <div className="hero-fade-up hero-delay-2 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pt-2">
            <div className="lg:col-span-7">
              <p className="text-zinc-300 text-xs sm:text-sm md:text-[15px] leading-relaxed font-normal max-w-xl">
                Sparklines Studio is a commercial video production agency in Kolkata crafting cinema-grade
                hero films, founder keynotes, high-converting performance reels, and corporate brand documentaries.
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
                <span>BOOK PRODUCTION SCOPE</span>
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
      {/* 2. INFINITE SERVICE MARQUEE SECTION                             */}
      {/* ============================================================== */}
      <div className="relative w-full overflow-hidden bg-[#F7F6F2] border-b border-[#D5D2C9] py-4 sm:py-5 select-none">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-36 bg-gradient-to-r from-[#F7F6F2] to-transparent select-none" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-36 bg-gradient-to-l from-[#F7F6F2] to-transparent select-none" />

        <div className="watermark-marquee-wrap hover:[animation-play-state:paused]">
          <div className="flex shrink-0 items-center">
            {VIDEO_MARQUEE_ITEMS.map((item, idx) => (
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
            {VIDEO_MARQUEE_ITEMS.map((item, idx) => (
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
      {/* 3. CENTERPIECE: HOMEPAGE VIDEO SHOWCASE CAROUSEL                */}
      {/* The interactive, draggable, live video runway requested         */}
      {/* ============================================================== */}
      <div className="w-full bg-white border-b border-[#D5D2C9]">
        <VideoShowcaseSection />
      </div>

      {/* ============================================================== */}
      {/* 4. EDITORIAL MANIFESTO SECTION                                  */}
      {/* ============================================================== */}
      <section className="bg-[#F7F6F2] py-20 sm:py-28 px-5 sm:px-8 lg:px-12 border-b border-[#D5D2C9]">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal delay-75 text-xl sm:text-2xl md:text-[28px] lg:text-5xl font-semibold uppercase tracking-[-0.02em] leading-snug text-[#0B0C10] mb-8 font-sans">
            The Video Production Agency in Kolkata Built for{" "}
            <span className="font-editorial italic font-normal lowercase text-blue-600 text-2xl sm:text-3xl lg:text-6xl">
              cinematic
            </span>{" "}
            Conversion.
          </h2>

          <div className="space-y-5 text-xs sm:text-[13.5px] lg:text-lg leading-[1.9] text-zinc-700 font-normal">
            <p className="reveal delay-150">
              Most videography vendors in Kolkata deliver flat, generic corporate footage:
              static talking heads, cookie-cutter stock background music, and predictable pans that
              audiences scroll past in a fraction of a second.
            </p>
            <p className="reveal delay-225">
              At Sparklines Studio, we treat motion picture as a high-leverage growth asset.
              Every camera move, lighting contrast, sound bite, and color grade is calculated
              to arrest attention, instill immediate brand prestige, and move decision-makers to action.
            </p>
            <p className="reveal delay-300">
              Whether documenting high-level tech leadership in Salt Lake Sector V, unveiling a luxury
              flagship along Park Street, or driving national customer acquisition with hook-tested
              9:16 vertical ads—our cinema crew delivers motion work that elevates your brand far above
              the competition.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. PRODUCTION METRICS STRIP (ANIMATED STATS)                    */}
      {/* ============================================================== */}
      <section
        ref={metricsRef}
        className="w-full bg-[#0B0C10] text-white py-16 sm:py-22 px-6 sm:px-12 lg:px-16 border-b border-[#232630]"
      >
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-3 pb-8 mb-10 border-b border-[#232630]">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400">
              VERIFIED COMMERCIAL PRODUCTION BENCHMARKS
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10">
            <div className="pr-6 lg:border-r border-[#232630]">
              <div className="text-4xl sm:text-6xl font-medium tracking-tight text-white mb-2 font-sans">
                {count1}
                <span className="text-blue-500 font-light">M+</span>
              </div>
              <p className="text-[11px] sm:text-xs uppercase tracking-wider text-zinc-400 font-normal">
                Organic &amp; Paid Views Generated
              </p>
            </div>

            <div className="sm:pl-6 lg:px-8 lg:border-r border-[#232630]">
              <div className="text-4xl sm:text-6xl font-medium tracking-tight text-white mb-2 font-sans">
                {count2}
                <span className="text-blue-500 font-light">%</span>
              </div>
              <p className="text-[11px] sm:text-xs uppercase tracking-wider text-zinc-400 font-normal">
                Average Video Retention Rate
              </p>
            </div>

            <div className="pr-6 lg:px-8 lg:border-r border-[#232630]">
              <div className="text-4xl sm:text-6xl font-medium tracking-tight text-white mb-2 font-sans">
                {count3}
                <span className="text-blue-500 font-light">K</span>
              </div>
              <p className="text-[11px] sm:text-xs uppercase tracking-wider text-zinc-400 font-normal">
                Cinema RAW Capture Standard
              </p>
            </div>

            <div className="sm:pl-6 lg:pl-8">
              <div className="text-4xl sm:text-6xl font-medium tracking-tight text-white mb-2 font-sans">
                {count4}
                <span className="text-blue-500 font-light">d</span>
              </div>
              <p className="text-[11px] sm:text-xs uppercase tracking-wider text-zinc-400 font-normal">
                Average Turnaround to First Cut
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. KOLKATA PRODUCTION HUBS (4x2 ARCHITECTURAL GRID)            */}
      {/* ============================================================== */}
      <section
        id="kolkata-production-hubs"
        className="w-full bg-[#F7F6F2] py-20 sm:py-28 lg:py-32 border-b border-[#D5D2C9]"
      >
        <div className="w-full px-6 sm:px-12 lg:px-16 mb-12 sm:mb-16 lg:mb-20">
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-zinc-500 mb-4 sm:mb-6">
            // LOCAL FOOTPRINT &amp; ON-LOCATION CAPABILITIES
          </p>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-[-0.03em] text-[#0B0C10] leading-[1.05] font-sans mb-6 max-w-5xl">
            SHOOTING ACROSS KOLKATA&apos;S PREMIER COMMERCIAL CORRIDORS
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed max-w-3xl">
            Our cinema crew and equipment trucks deploy directly to your offices, industrial facilities,
            retail flagships, and heritage estates across Kolkata and Eastern India.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-b border-[#D5D2C9]">
          {commercialCorridors.map((hub, idx) => (
            <div
              key={`hub-${idx}`}
              onClick={openAuditModal}
              className="relative p-8 sm:p-10 lg:p-12 min-h-[190px] sm:min-h-[220px] flex flex-col justify-between bg-[#F7F6F2] hover:bg-blue-600 transition-all duration-500 ease-in-out border-b sm:border-r border-[#D5D2C9] group cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none" />
              <div className="relative z-10 flex items-start justify-between gap-4 mb-4">
                <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#0B0C10] group-hover:text-white transition-colors duration-500 ease-in-out">
                  {hub.name}
                </h3>
                <span className="text-xs font-mono text-zinc-400 group-hover:text-white transition-colors duration-500">
                  0{idx + 1}
                </span>
              </div>
              <p className="relative z-10 text-xs sm:text-sm text-zinc-600 group-hover:text-blue-100 font-normal leading-relaxed transition-colors duration-500 ease-in-out">
                {hub.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. FULL-SPECTRUM PRODUCTION CAPABILITIES (ARCHITECTURAL GRID)  */}
      {/* ============================================================== */}
      <section className="w-full bg-white py-20 sm:py-28 px-6 sm:px-12 lg:px-16 border-b border-[#D5D2C9]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 sm:mb-18 pb-6 border-b border-zinc-200">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600 block mb-2">
              End-to-End Execution
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0B0C10] font-sans">
              Commercial Video Practices
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 max-w-2xl font-normal">
              Every production is managed in-house—from creative treatment, casting, and cinema capture
              to color grading and multi-format conversion optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productionCapabilities.map((cap, idx) => (
              <div
                key={`cap-${idx}`}
                className="p-8 rounded-2xl bg-[#F7F6F2] border border-[#D5D2C9] hover:border-blue-600 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-10 w-10 rounded-xl bg-white border border-[#D5D2C9] flex items-center justify-center mb-6 shadow-xs">
                    {cap.icon}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-[#0B0C10] font-sans mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-zinc-600 font-normal">
                    {cap.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#D5D2C9]/60 flex items-center justify-between text-xs font-mono uppercase text-zinc-500">
                  <span>PRACTICE // 0{idx + 1}</span>
                  <span className="text-blue-600 font-semibold">4K MASTER</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. THE 4-STAGE CINEMA PRODUCTION PIPELINE                       */}
      {/* ============================================================== */}
      <section className="w-full bg-[#F7F6F2] py-20 sm:py-28 px-6 sm:px-12 lg:px-16 border-b border-[#D5D2C9]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 sm:mb-18 pb-6 border-b border-[#D5D2C9]">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600 block mb-2">
              Architectural Methodology
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0B0C10] font-sans">
              Our 4-Stage Film Pipeline
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 max-w-2xl font-normal">
              Zero guesswork. We deploy a proven production system that protects your timeline, guarantees
              impeccable production value, and eliminates revisions loops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white border border-[#D5D2C9] rounded-2xl flex flex-col justify-between">
              <div>
                <span className="font-editorial italic text-3xl text-blue-600 block mb-4">01.</span>
                <h3 className="text-lg font-bold uppercase tracking-tight text-[#0B0C10] font-sans mb-2">
                  Treatment &amp; Concept
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                  Script framing, storyboards, location scouting, and aesthetic moodboarding to lock the narrative before shooting.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-100 text-[11px] font-mono text-zinc-400">
                Phase 1 // Pre-Production
              </div>
            </div>

            <div className="p-8 bg-white border border-[#D5D2C9] rounded-2xl flex flex-col justify-between">
              <div>
                <span className="font-editorial italic text-3xl text-blue-600 block mb-4">02.</span>
                <h3 className="text-lg font-bold uppercase tracking-tight text-[#0B0C10] font-sans mb-2">
                  Cinema Shoot
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                  Full cinema crew on set with RED/Sony FX bodies, specialized cinema glass, multi-point lighting, and sound capture.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-100 text-[11px] font-mono text-zinc-400">
                Phase 2 // Principal Wrap
              </div>
            </div>

            <div className="p-8 bg-white border border-[#D5D2C9] rounded-2xl flex flex-col justify-between">
              <div>
                <span className="font-editorial italic text-3xl text-blue-600 block mb-4">03.</span>
                <h3 className="text-lg font-bold uppercase tracking-tight text-[#0B0C10] font-sans mb-2">
                  Edit &amp; Sound Design
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                  Rhythmic montage pacing, dialogue cleanup, sound design Foley, and original musical score synchronization.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-100 text-[11px] font-mono text-zinc-400">
                Phase 3 // Editorial Assembly
              </div>
            </div>

            <div className="p-8 bg-white border border-[#D5D2C9] rounded-2xl flex flex-col justify-between">
              <div>
                <span className="font-editorial italic text-3xl text-blue-600 block mb-4">04.</span>
                <h3 className="text-lg font-bold uppercase tracking-tight text-[#0B0C10] font-sans mb-2">
                  Color &amp; Multi-Delivery
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                  DaVinci Resolve HDR color grading, 16:9 master export, and 9:16 vertical social cutdown delivery.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-100 text-[11px] font-mono text-zinc-400">
                Phase 4 // Master Deployment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 9. FREQUENTLY ASKED QUESTIONS (ACCORDION)                      */}
      {/* ============================================================== */}
      <section className="w-full bg-white py-20 sm:py-28 px-6 sm:px-12 lg:px-16 border-b border-[#D5D2C9]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600 block mb-2">
              Transparent Production Clarity
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0B0C10] font-sans">
              Kolkata Commercial Video FAQ
            </h2>
          </div>

          <div className="divide-y divide-[#D5D2C9] border-y border-[#D5D2C9]">
            {videoFaqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={`faq-${index}`}>
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
      {/* 10. PRE-FOOTER FULL-WIDTH MARKETING CTA                         */}
      {/* ============================================================== */}
      <CtaFloatingSection />

      {/* ============================================================== */}
      {/* 11. GLOBAL BRAND FOOTER BANNER                                  */}
      {/* ============================================================== */}
      <BrandFooterBanner />

      {/* ============================================================== */}
      {/* 12. INTERACTIVE PRODUCTION TREATMENT MODAL                      */}
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
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                    Complimentary Production Discovery
                  </span>
                </div>
                <h3 className="text-2xl font-semibold uppercase tracking-[-0.02em] text-[#0B0C10] mb-2 font-sans">
                  Book Your Kolkata{" "}
                  <span className="font-editorial italic font-normal lowercase text-blue-600">
                    Video
                  </span>{" "}
                  Treatment.
                </h3>
                <p className="text-xs text-zinc-600 font-normal mb-6">
                  Enter your details below. A Senior Commercial Director in our Salt Lake Sector V studio
                  will draft a personalized narrative concept, reference moodboard, and line-item estimate.
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
                      placeholder="e.g. Rahul Sen"
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
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98300 00000"
                        className="w-full bg-white border border-[#D5D2C9] px-3.5 py-2.5 text-xs font-normal text-[#0B0C10] focus:outline-none focus:border-blue-600 rounded-xl transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-[#0B0C10] mb-1">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      value={formData.brand}
                      onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                      placeholder="Your brand or agency name"
                      className="w-full bg-white border border-[#D5D2C9] px-3.5 py-2.5 text-xs font-normal text-[#0B0C10] focus:outline-none focus:border-blue-600 rounded-xl transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-[#0B0C10] mb-1">
                      Primary Production Objective
                    </label>
                    <select
                      value={formData.videoType}
                      onChange={(e) => setFormData({ ...formData, videoType: e.target.value })}
                      className="w-full bg-white border border-[#D5D2C9] px-3.5 py-2.5 text-xs font-normal text-[#0B0C10] focus:outline-none focus:border-blue-600 rounded-xl transition-all cursor-pointer"
                    >
                      <option>Commercial Hero Film / Brand Anthem</option>
                      <option>Founder Keynote &amp; Leadership Documentary</option>
                      <option>High-Converting Social Reels (Meta / YouTube Shorts)</option>
                      <option>Product Launch &amp; Macro Detail Video</option>
                      <option>Architectural &amp; Real Estate Spatial Tour</option>
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
                      <span>Send My Production Concept →</span>
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
                  Treatment Request Received
                </h4>
                <p className="text-xs text-zinc-600 font-normal max-w-sm mx-auto mb-6 leading-relaxed">
                  Our Commercial Director in Salt Lake Sector V is reviewing your project details.
                  Expect your visual moodboard and itemized proposal within 1 business day.
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
