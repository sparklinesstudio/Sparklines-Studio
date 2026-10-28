"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Maximize2,
  Minimize2,
  X,
  ChevronLeft,
  ChevronRight,
  Check,
  Share2,
} from "lucide-react";
import { HeaderNavigation } from "@/components/Home Page Components/HeaderNavigation";
import { ContactSection } from "@/components/Home Page Components/ContactSection";
import { BrandFooterBanner } from "@/components/Home Page Components/BrandFooterBanner";
import { HOUSE_OF_KOLAM_SLIDES, KolamSlide } from "@/data/houseOfKolamData";

/**
 * Slide component that displays a static first frame until the user
 * scrolls down to the section, then triggers the animated GIF.
 * Disconnects the observer immediately on first intersection to prevent
 * layout thrashing, unmounting loops, or scroll traps.
 */
function KolamSlideItem({
  slide,
  index,
  onClick,
}: {
  slide: KolamSlide;
  index: number;
  onClick: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (!slide.isAnimated) return;

    const el = containerRef.current;
    if (!el) return;

    // Trigger animated GIF once when scrolled into view
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setHasTriggered(true);
          // CRITICAL: Disconnect observer immediately so it NEVER re-triggers,
          // never unmounts, and never interrupts smooth scrolling!
          observer.disconnect();
        }
      },
      {
        rootMargin: "300px 0px 300px 0px",
        threshold: 0.01,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [slide.isAnimated]);

  // Static first frame for animated GIFs before user scrolls to them
  const staticFrame = slide.isAnimated
    ? slide.url
        .replace("/image/upload/", "/image/upload/pg_1/")
        .replace(".gif", ".png")
    : slide.url;

  // Seamless switch to clean, cached GIF URL without cache-busting timestamp
  const currentSrc = slide.isAnimated
    ? (hasTriggered ? slide.url : staticFrame)
    : slide.url;

  return (
    <div
      ref={containerRef}
      id={`image-${slide.id}`}
      onClick={onClick}
      className="relative w-full aspect-[16/9] overflow-hidden bg-zinc-100 cursor-pointer select-none rounded-none"
      title="Click for Full Screen"
    >
      <Image
        src={currentSrc}
        alt={`House of Kolam : Slide ${slide.id}`}
        width={1920}
        height={1080}
        unoptimized={true}
        priority={index < 5}
        loading={index < 5 ? "eager" : "lazy"}
        className="w-full h-full object-cover block select-none rounded-none"
        style={{
          imageRendering: "auto",
        }}
      />
    </div>
  );
}

export default function HouseOfKolamPage() {
  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [isNativeFullscreen, setIsNativeFullscreen] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartXRef = useRef<number | null>(null);

  // Sync native fullscreen state with document events
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isNative = !!document.fullscreenElement;
      setIsNativeFullscreen(isNative);
      // If user exits native fullscreen (e.g. by pressing Esc), close the viewer completely
      if (!isNative) {
        setFullscreenIndex(null);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  // Request or exit browser native fullscreen
  const toggleNativeFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      // Fallback cleanly to edge-to-edge fixed modal
    }
  };

  // Open Fullscreen Viewer (pure edge-to-edge modal without OS-level key trapping)
  const openFullscreen = (index: number) => {
    setFullscreenIndex(index);
    setControlsVisible(true);
  };

  // Close Fullscreen Viewer
  const closeFullscreen = () => {
    setFullscreenIndex(null);
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
  };

  // Keyboard navigation for Fullscreen
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (fullscreenIndex === null) return;

      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        closeFullscreen();
      } else if (e.key === "ArrowRight") {
        setFullscreenIndex((prev) =>
          prev !== null ? (prev + 1) % HOUSE_OF_KOLAM_SLIDES.length : 0
        );
      } else if (e.key === "ArrowLeft") {
        setFullscreenIndex((prev) =>
          prev !== null
            ? (prev - 1 + HOUSE_OF_KOLAM_SLIDES.length) %
              HOUSE_OF_KOLAM_SLIDES.length
            : 0
        );
      } else if (e.key.toLowerCase() === "f") {
        toggleNativeFullscreen();
      }
    },
    [fullscreenIndex]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    if (fullscreenIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [handleKeyDown, fullscreenIndex]);

  // Auto-hide controls in fullscreen after inactivity
  const handleMouseMove = () => {
    setControlsVisible(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      setControlsVisible(false);
    }, 3000);
  };

  const nextSlide = () => {
    if (fullscreenIndex !== null) {
      setFullscreenIndex((prev) =>
        prev !== null ? (prev + 1) % HOUSE_OF_KOLAM_SLIDES.length : 0
      );
    }
  };

  const prevSlide = () => {
    if (fullscreenIndex !== null) {
      setFullscreenIndex((prev) =>
        prev !== null
          ? (prev - 1 + HOUSE_OF_KOLAM_SLIDES.length) %
            HOUSE_OF_KOLAM_SLIDES.length
          : 0
      );
    }
  };

  // Touch swipe support for mobile fullscreen
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartXRef.current = null;
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2200);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] text-zinc-900 selection:bg-orange-500/20 selection:text-orange-950 font-sans overflow-x-hidden relative">
      {/* Global Navigation Header */}
      <HeaderNavigation />

      <main className="relative z-10">
        {/* ============================================================== */}
        {/* 1. HERO SECTION: BRANDING SHOWCASE HEADER                      */}
        {/* ============================================================== */}
        <section className="relative overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-10 lg:pt-32 lg:pb-12 bg-gradient-to-b from-amber-500/[0.08] via-zinc-100/30 to-[#fafaf9]">
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[480px] w-[950px] -z-10 rounded-full bg-amber-500/[0.07] blur-[140px]" />

          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
            {/* Top Navigation Row: Back Link & Project Name */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-8 border-b border-zinc-200/80">
              <Link
                href="/work#branding"
                className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 text-amber-600" />
                <span>Back to Works Portfolio</span>
              </Link>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-white text-zinc-600 border border-zinc-200/80 hover:text-zinc-950 hover:border-zinc-400 transition-all cursor-pointer"
                  title="Share portfolio link"
                >
                  {copiedLink ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="h-3 w-3" />
                      <span>Share Project</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2 px-3 py-1 bg-white border border-zinc-200/80">
                  <span className="h-2 w-2 rounded-full bg-amber-600 animate-pulse" />
                  <span className="text-xs font-semibold text-zinc-900 font-sans tracking-wide">
                    House of Kolam
                  </span>
                </div>
              </div>
            </div>

            {/* Main Headline & Identity Narrative */}
            <div className="max-w-4xl">
              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-950 font-sans leading-[1.08]"
              >
                House of Kolam :{" "}
                <span className="font-editorial italic font-normal text-zinc-800 tracking-normal">
                  Sacred Geometry & Identity
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.14 }}
                className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed font-sans max-w-3xl"
              >
                A modern celebration of ancestral South Indian mathematical art, meditative ritual, and luxury gastronomy.
                Engineered from a pure geometric dot-grid matrix into an expansive visual system spanning bespoke vernacular typography,
                tactile kraft and brass packaging, kinetic motion loops, and spatial dining architecture.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 2. THE 23 IMAGES SHOWCASE: ZERO PADDING, ZERO BORDER RADIUS    */}
        {/* Animated GIFs only start playing when scrolled into view       */}
        {/* ============================================================== */}
        <section className="py-0 bg-[#fafaf9]">
          <div className="mx-auto max-w-6xl px-0 sm:px-4 md:px-6">
            <div className="flex flex-col space-y-0">
              {HOUSE_OF_KOLAM_SLIDES.map((slide, index) => (
                <KolamSlideItem
                  key={slide.id}
                  slide={slide}
                  index={index}
                  onClick={() => openFullscreen(index)}
                />
              ))}
            </div>
          </div>
        </section>

        

        {/* ============================================================== */}
        {/* 3. PREVIOUS / NEXT CASE STUDY NAVIGATION                       */}
        {/* ============================================================== */}
        <section className="py-10 sm:py-14 bg-zinc-50 border-t border-zinc-200/80">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/work/oraanj-interior-seo"
                className="group flex flex-col p-5 sm:p-6 bg-white border border-zinc-200 transition-all duration-300 hover:border-zinc-400 hover:shadow-md"
              >
                <span className="text-xs font-mono uppercase text-zinc-400 mb-1 flex items-center gap-1 group-hover:text-zinc-950 transition-colors">
                  <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1 text-blue-600" />
                  Explore Architecture
                </span>
                <span className="text-base font-semibold text-zinc-900 group-hover:text-amber-600 transition-colors line-clamp-1 font-sans">
                  Oraanj Interior Design : High-Intent Architecture SEO
                </span>
              </Link>

              <Link
                href="/work/luxoria-multilingual-seo"
                className="group flex flex-col items-start sm:items-end p-5 sm:p-6 bg-white border border-zinc-200 transition-all duration-300 hover:border-zinc-400 hover:shadow-md text-left sm:text-right"
              >
                <span className="text-xs font-mono uppercase text-zinc-400 mb-1 flex items-center gap-1 group-hover:text-zinc-950 transition-colors">
                  Explore Luxury Real Estate
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 text-amber-600" />
                </span>
                <span className="text-base font-semibold text-zinc-900 group-hover:text-amber-600 transition-colors line-clamp-1 font-sans">
                  Luxoria Heritage : European Multilingual Search
                </span>
              </Link>
            </div>
          </div>
        </section>

        

        {/* ============================================================== */}
        {/* 4. CONTACT SECTION                                             */}
        {/* ============================================================== */}
        <div className="bg-white">
          <ContactSection />
        </div>
      </main>

      {/* Global Brand Footer Banner */}
      <BrandFooterBanner />

      {/* ============================================================== */}
      {/* 5. TRUE FULL SCREEN VIEWER                                     */}
      {/* Triggered whenever ANY image is clicked                        */}
      {/* ============================================================== */}
      <AnimatePresence>
        {fullscreenIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="fixed inset-0 z-[99999] bg-black select-none overflow-hidden flex flex-col justify-between"
          >
            {/* Top Minimal Controls */}
            <div
              className={`transition-opacity duration-300 px-4 sm:px-6 py-4 flex items-center justify-between text-white z-30 bg-gradient-to-b from-black/80 via-black/40 to-transparent ${
                controlsVisible ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs sm:text-sm font-semibold text-white/80">
                  {String(fullscreenIndex + 1).padStart(2, "0")} / {HOUSE_OF_KOLAM_SLIDES.length}
                </span>
                <span className="h-3 w-[1px] bg-white/20" />
                <span className="text-xs sm:text-sm font-medium text-white/90">
                  House of Kolam
                </span>
              </div>

              {/* Action Buttons: Fullscreen Toggle & Close */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={toggleNativeFullscreen}
                  className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-all cursor-pointer backdrop-blur-md"
                  title={isNativeFullscreen ? "Exit Browser Fullscreen (F)" : "Enter Browser Fullscreen (F)"}
                >
                  {isNativeFullscreen ? (
                    <Minimize2 className="h-4 w-4" />
                  ) : (
                    <Maximize2 className="h-4 w-4" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={closeFullscreen}
                  className="rounded-full bg-white/10 p-2 text-white hover:bg-red-600 transition-all cursor-pointer backdrop-blur-md"
                  title="Close (Esc)"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Center Stage: Image fills 100% of viewport */}
            <div
              onClick={closeFullscreen}
              className="relative flex-1 w-full h-full flex items-center justify-center p-0 select-none cursor-pointer"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full h-full max-w-full max-h-full flex items-center justify-center cursor-default"
              >
                <Image
                  src={HOUSE_OF_KOLAM_SLIDES[fullscreenIndex].url}
                  alt={`House of Kolam : Slide ${fullscreenIndex + 1}`}
                  width={1920}
                  height={1080}
                  unoptimized={true}
                  priority
                  className="w-full h-full object-contain block select-none max-h-screen"
                  style={{
                    imageRendering: "auto",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                />
              </div>

              {/* Prev Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className={`absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20 hover:bg-white hover:text-black transition-all cursor-pointer shadow-2xl z-40 ${
                  controlsVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                title="Previous (←)"
              >
                <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                className={`absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20 hover:bg-white hover:text-black transition-all cursor-pointer shadow-2xl z-40 ${
                  controlsVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                title="Next (→)"
              >
                <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" />
              </button>
            </div>

            {/* Bottom minimal indicator */}
            <div
              className={`transition-opacity duration-300 px-4 sm:px-6 py-3 flex items-center justify-between text-xs text-white/50 z-30 bg-gradient-to-t from-black/80 via-black/40 to-transparent ${
                controlsVisible ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <span className="font-mono text-[11px] text-amber-400">
                Slide {fullscreenIndex + 1} of {HOUSE_OF_KOLAM_SLIDES.length}
              </span>
              <span className="text-[11px] text-white/50">
                Arrow keys (← / →) · Esc to exit
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
