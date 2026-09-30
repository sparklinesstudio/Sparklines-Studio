"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// =========================================================================
// 1. DATA: WEBSITES WE HAVE BUILT
// High-resolution desktop showcase screenshots provided by user
// =========================================================================

interface WebsiteItem {
  id: string;
  title: string;
  image: string;
}

const WEBSITES_DATA: WebsiteItem[] = [
  {
    id: "web-1",
    title: "Website Production 01",
    image:
      "https://res.cloudinary.com/dbwrnwa3l/image/upload/v1790754956/image_6_umbc1s.webp",
  },
  {
    id: "web-2",
    title: "Website Production 02",
    image:
      "https://res.cloudinary.com/dbwrnwa3l/image/upload/v1790754956/image_5_lrkzwt.webp",
  },
  {
    id: "web-3",
    title: "Website Production 03",
    image:
      "https://res.cloudinary.com/dbwrnwa3l/image/upload/v1790754957/image_9_jazm8w.webp",
  },
  {
    id: "web-4",
    title: "Website Production 04",
    image:
      "https://res.cloudinary.com/dbwrnwa3l/image/upload/v1790754957/image_10_xrm6rx.webp",
  },
  {
    id: "web-5",
    title: "Website Production 05",
    image:
      "https://res.cloudinary.com/dbwrnwa3l/image/upload/v1790754957/image_11_zeojr0.webp",
  },
  {
    id: "web-6",
    title: "Website Production 06",
    image:
      "https://res.cloudinary.com/dbwrnwa3l/image/upload/v1790754956/image_7_twmzja.webp",
  },
];

// Duplicate once for infinite seamless marquee loop
const DOUBLED_WEBSITES = [...WEBSITES_DATA, ...WEBSITES_DATA];

// =========================================================================
// 2. MAIN COMPONENT
// =========================================================================

export function WebsiteCarouselSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Carousel interactive controls
  const [isPaused, setIsPaused] = useState(false);
  const [isSectionVisible, setIsSectionVisible] = useState(true);

  // Lightbox / modal preview state
  const [selectedWebsite, setSelectedWebsite] = useState<WebsiteItem | null>(null);

  // Section visibility observer to pause CSS animation when offscreen
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      { root: null, rootMargin: "150px 0px 150px 0px", threshold: 0 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Keyboard navigation for lightbox modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedWebsite) return;
      if (e.key === "Escape") setSelectedWebsite(null);
      if (e.key === "ArrowRight") {
        const currentIdx = WEBSITES_DATA.findIndex((w) => w.id === selectedWebsite.id);
        const nextIdx = (currentIdx + 1) % WEBSITES_DATA.length;
        setSelectedWebsite(WEBSITES_DATA[nextIdx]);
      }
      if (e.key === "ArrowLeft") {
        const currentIdx = WEBSITES_DATA.findIndex((w) => w.id === selectedWebsite.id);
        const prevIdx = (currentIdx - 1 + WEBSITES_DATA.length) % WEBSITES_DATA.length;
        setSelectedWebsite(WEBSITES_DATA[prevIdx]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedWebsite]);

  return (
    <section
      ref={sectionRef}
      id="websites-showcase"
      aria-label="Our Website Portfolio"
      className="relative overflow-hidden bg-white text-zinc-950 py-16 sm:py-24 lg:py-28 border-b border-zinc-200/80"
    >
      {/* Subtle Studio Blueprint Grid Pattern for Clean Canvas */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000000 1px, transparent 1px),
            linear-gradient(to bottom, #000000 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px",
        }}
      />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* ============================================================== */}
        {/* SECTION HEADER                                                 */}
        {/* Button aligned at exact same height as the heading             */}
        {/* ============================================================== */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-5 sm:gap-6 mb-8 sm:mb-12">
          <div className="max-w-2xl">
            {/* Main Headline */}
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl font-editorial leading-[1.08]">
              Our Website{" "}
              <span className="font-editorial italic font-normal text-zinc-900 tracking-normal">
                Portfolio
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-3.5 text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
              High-performance digital flagships, luxury brand experiences, and custom web applications
              crafted to captivate audiences and elevate brand prestige.
            </p>
          </div>

          {/* Action Button - Aligned at same height as heading */}
          <div className="hidden md:block flex-shrink-0">
            <Link
              href="#contact"
              className="relative inline-flex items-center gap-2 rounded-full bg-zinc-950/95 px-7 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.3)] border border-white/15 transition-all duration-300 hover:bg-[#f95721] hover:border-[#f95721]/50 hover:shadow-[0_6px_20px_rgba(249,87,33,0.35)] active:scale-95 group overflow-hidden"
            >
              <span className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              <span>Discuss a Custom Scope</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* SHOWCASE STAGE: SEAMLESS INFINITE WEBSITE RUNWAY               */}
      {/* Pure Edge-to-Edge Website Cards (No text or overlays on card)  */}
      {/* ============================================================== */}
      <div
        className="relative w-full overflow-hidden py-4 select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Clean edge gradient masks for seamless viewport transition */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 sm:w-28 md:w-36 bg-gradient-to-r from-white via-white/80 to-transparent select-none" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 sm:w-28 md:w-36 bg-gradient-to-l from-white via-white/80 to-transparent select-none" />

        {/* Running Marquee Track */}
        <div ref={containerRef} className="group/track relative flex w-full">
          <div
            className="flex w-max items-center gap-5 sm:gap-7 py-4 will-change-transform"
            style={{
              animation: "infiniteWebsitesScroll 34s linear infinite",
              animationPlayState: !isSectionVisible ? "paused" : isPaused ? "paused" : "running",
            }}
          >
            {DOUBLED_WEBSITES.map((site, index) => (
              <div
                key={`website-card-${site.id}-${index}`}
                className="flex-shrink-0 cursor-pointer will-change-transform"
                onClick={() => setSelectedWebsite(site)}
              >
                {/* 
                  Pure Edge-to-Edge Website Card:
                  - NO border padding
                  - NO text or icons over/under the card
                  - Ultra-crisp high-res WebP website capture
                */}
                <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200/90 bg-black shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300 hover:border-[#f95721] hover:shadow-[0_20px_45px_rgba(249,87,33,0.3)] hover:scale-[1.025]">
                  <div className="relative h-[220px] w-[350px] sm:h-[300px] sm:w-[480px] md:h-[360px] md:w-[580px] lg:h-[400px] lg:w-[640px] overflow-hidden bg-black">
                    <Image
                      src={site.image}
                      alt={site.title}
                      fill
                      sizes="(max-width: 640px) 350px, (max-width: 1024px) 480px, 640px"
                      className="object-cover object-top block transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* LIGHTBOX MODAL: FULL RESOLUTION PREVIEW                        */}
      {/* ============================================================== */}
      <AnimatePresence>
        {selectedWebsite && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedWebsite(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-2xl sm:rounded-3xl bg-zinc-950 border border-zinc-800 shadow-[0_32px_80px_rgba(0,0,0,0.8)] overflow-hidden z-10"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-zinc-800 bg-zinc-900/90">
                <span className="text-xs sm:text-sm font-semibold text-zinc-300 font-mono tracking-wider uppercase">
                  Website Portfolio Preview
                </span>

                {/* Right controls: Prev/Next & Close */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      const currentIdx = WEBSITES_DATA.findIndex((w) => w.id === selectedWebsite.id);
                      const prevIdx = (currentIdx - 1 + WEBSITES_DATA.length) % WEBSITES_DATA.length;
                      setSelectedWebsite(WEBSITES_DATA[prevIdx]);
                    }}
                    title="Previous Website"
                    className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const currentIdx = WEBSITES_DATA.findIndex((w) => w.id === selectedWebsite.id);
                      const nextIdx = (currentIdx + 1) % WEBSITES_DATA.length;
                      setSelectedWebsite(WEBSITES_DATA[nextIdx]);
                    }}
                    title="Next Website"
                    className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedWebsite(null)}
                    title="Close Preview (Esc)"
                    className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors ml-1"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Modal Scrollable Body */}
              <div className="overflow-y-auto flex-1 p-3 sm:p-6 flex items-center justify-center bg-black">
                <div className="relative aspect-[16/10] w-full max-w-4xl rounded-xl overflow-hidden border border-zinc-800 shadow-2xl">
                  <Image
                    src={selectedWebsite.image}
                    alt={selectedWebsite.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1200px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Global Infinite Scrolling Animation Keyframes */}
      <style jsx>{`
        @keyframes infiniteWebsitesScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}

export default WebsiteCarouselSection;
