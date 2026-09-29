"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

// =========================================================================
// 1. VIDEO SHOWCASE ASSETS
// =========================================================================

interface VideoItem {
  id: string;
  src: string;
}

const VIDEO_WORKS: VideoItem[] = [
  {
    id: "vid-1",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/v1790714905/decadentdepictions_ssspin.io_1790714806.mp4",
  },
  {
    id: "vid-2",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/v1790714840/minipagebioarchive_ssspin.io_1790714828.mp4",
  },
  {
    id: "vid-3",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/v1790714352/IMG_5738.MOV.mov",
  },
  {
    id: "vid-4",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/v1790714705/Video-36346.mp4",
  },
  {
    id: "vid-5",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/v1790714315/lv_0_20260930014015.mp4",
  },
  {
    id: "vid-6",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/v1790714449/chiffonandspice_ssspin.io_1790714410.mp4",
  },
  {
    id: "vid-7",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/v1790714269/lv_0_20260930013757.mp4",
  },
  {
    id: "vid-8",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/v1790714439/chiffonandspice_ssspin.io_1790714426.mp4",
  },
  {
    id: "vid-9",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/v1790714249/IMG_5657.MOV.mov",
  },
];

// Duplicate once for infinite loop (18 total items spanning >5000px, cutting video decoding in half)
const DOUBLED_VIDEOS = [...VIDEO_WORKS, ...VIDEO_WORKS];

// =========================================================================
// 2. MAIN COMPONENT
// =========================================================================

export function VideoShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Hover state: pauses the infinite carousel and plays hovered video
  const [isPaused, setIsPaused] = useState(false);

  // -----------------------------------------------------------------------
  // PERFORMANCE FIX: IntersectionObserver for videos
  // Only decode/play videos that are currently inside or near viewport.
  // Pauses offscreen videos, drastically freeing GPU & eliminating lag.
  // -----------------------------------------------------------------------
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      {
        root: null,
        rootMargin: "150px 0px 150px 0px",
        threshold: 0.05,
      }
    );

    videoRefs.current.forEach((video) => {
      if (video) {
        observer.observe(video);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // -----------------------------------------------------------------------
  // 3D SMILE CURVE RUNWAY PHYSICS (Throttled & Optimized)
  // Only updates visible cards and idles when paused on hover for 0% CPU waste.
  // -----------------------------------------------------------------------
  useEffect(() => {
    let animationFrameId: number;

    const updateCurves = () => {
      animationFrameId = requestAnimationFrame(updateCurves);

      // If user is hovering over a video, keep current curve positions and don't re-measure
      if (isPaused) return;

      const container = containerRef.current;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;
      const halfWidth = containerRect.width / 2;
      const winWidth = window.innerWidth;

      cardRefs.current.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();

        // Skip calculations for cards far offscreen
        if (rect.right < -150 || rect.left > winWidth + 150) return;

        const cardCenter = rect.left + rect.width / 2;
        const dist = (cardCenter - centerX) / (halfWidth || 1);

        // Smile curve math:
        // Center: dist = 0 -> curveY = 0px
        // Wings: dist = ±1.0 -> curveY ≈ -70px, rotateZ ≈ ±7.5deg, rotateY ≈ ∓8.5deg
        const absDist = Math.abs(dist);
        const curveY = Math.pow(absDist, 1.4) * -70;
        const rotateZ = Math.max(-8, Math.min(8, dist * 7.5));
        const rotateY = Math.max(-9, Math.min(9, -dist * 8.5));

        card.style.transform = `translate3d(0, ${curveY}px, 0) rotateZ(${rotateZ}deg) rotateY(${rotateY}deg)`;
      });
    };

    animationFrameId = requestAnimationFrame(updateCurves);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  // Hover handlers: pause carousel and ensure hovered video is playing
  const handleMouseEnter = useCallback((index: number) => {
    setIsPaused(true);
    const video = videoRefs.current[index];
    if (video) {
      video.play().catch(() => {});
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsPaused(false);
  }, []);

  return (
    <section
      id="video-showcase"
      aria-label="Studio Video Works Showcase"
      className="relative overflow-hidden bg-white text-zinc-950 py-16 sm:py-24 lg:py-28 border-y border-zinc-200/80"
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
        {/* ============================================================== */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-5 sm:gap-6 mb-8 sm:mb-12">
          <div className="max-w-2xl">
            {/* Main Headline */}
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl font-editorial leading-[1.08]">
              Stories Engineered in{" "}
              <span className="font-editorial italic font-normal text-zinc-900 tracking-normal">
                Motion
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-3.5 text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
              High-impact cinematic narratives, brand reels, and commercial video production
              shot and crafted to captivate audiences and elevate brand prestige.
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
      {/* SHOWCASE STAGE: 3D CURVED INFINITE CAROUSEL RUNWAY              */}
      {/* ============================================================== */}
      <div
        className="relative w-full overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16"
        style={{ perspective: "1400px" }}
      >
        {/* ============================================================== */}
        {/* BLURRY, SPREAD-OUT & BLENDED ORANGE SMOKE (LEFT & RIGHT)       */}
        {/* No straight lines — organic diffused radial smoke clouds       */}
        {/* ============================================================== */}

        {/* LEFT ORANGE SMOKE: Organic, blurry, spreaded out */}
        <div className="pointer-events-none absolute inset-y-0 -left-12 sm:-left-20 z-20 w-[300px] sm:w-[480px] md:w-[600px] select-none">
          {/* Large soft diffuse orange smoke cloud */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-10 w-[280px] sm:w-[380px] h-[460px] rounded-full bg-[#f95721]/22 blur-[85px] sm:blur-[105px]" />
          {/* Secondary upper amber smoke plume */}
          <div className="absolute top-1/6 -left-6 w-[220px] sm:w-[320px] h-[320px] rounded-full bg-orange-400/18 blur-[75px] sm:blur-[95px]" />
          {/* Tertiary lower warm glow */}
          <div className="absolute bottom-1/6 -left-8 w-[240px] sm:w-[340px] h-[340px] rounded-full bg-[#ea580c]/18 blur-[85px] sm:blur-[105px]" />
          {/* Central soft ember mist */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-14 w-[180px] sm:w-[260px] h-[260px] rounded-full bg-[#f95721]/30 blur-[60px] sm:blur-[75px]" />
          {/* Seamless organic edge blend to white (No hard lines) */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 95% 80% at 0% 50%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 35%, transparent 80%)",
              mixBlendMode: "screen",
            }}
          />
        </div>

        {/* RIGHT ORANGE SMOKE: Organic, blurry, spreaded out */}
        <div className="pointer-events-none absolute inset-y-0 -right-12 sm:-right-20 z-20 w-[300px] sm:w-[480px] md:w-[600px] select-none">
          {/* Large soft diffuse orange smoke cloud */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-10 w-[280px] sm:w-[380px] h-[460px] rounded-full bg-[#f95721]/22 blur-[85px] sm:blur-[105px]" />
          {/* Secondary upper amber smoke plume */}
          <div className="absolute top-1/6 -right-6 w-[220px] sm:w-[320px] h-[320px] rounded-full bg-orange-400/18 blur-[75px] sm:blur-[95px]" />
          {/* Tertiary lower warm glow */}
          <div className="absolute bottom-1/6 -right-8 w-[240px] sm:w-[340px] h-[340px] rounded-full bg-[#ea580c]/18 blur-[85px] sm:blur-[105px]" />
          {/* Central soft ember mist */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-14 w-[180px] sm:w-[260px] h-[260px] rounded-full bg-[#f95721]/30 blur-[60px] sm:blur-[75px]" />
          {/* Seamless organic edge blend to white (No hard lines) */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 95% 80% at 100% 50%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 35%, transparent 80%)",
              mixBlendMode: "screen",
            }}
          />
        </div>

        {/* ============================================================== */}
        {/* INFINITE RUNNING CAROUSEL TRACK                                */}
        {/* Hardware-accelerated CSS marquee with hover pause              */}
        {/* ============================================================== */}
        <div ref={containerRef} className="group/track relative flex w-full">
          <div
            className="flex w-max items-center gap-5 sm:gap-7 py-4 will-change-transform"
            style={{
              animation: "infiniteVideoScroll 45s linear infinite",
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {DOUBLED_VIDEOS.map((video, index) => (
              <div
                key={`video-card-${video.id}-${index}`}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="flex-shrink-0 cursor-pointer will-change-transform"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {/* 
                  Pure Edge-to-Edge Video Card:
                  - NO border padding (p-0)
                  - NO text above or over the video
                  - Autoplays smoothly, stops and plays on hover
                */}
                <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200/90 bg-black shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300 hover:border-[#f95721] hover:shadow-[0_20px_45px_rgba(249,87,33,0.3)] hover:scale-[1.025]">
                  <div className="relative h-[380px] w-[215px] sm:h-[450px] sm:w-[255px] md:h-[500px] md:w-[285px] overflow-hidden bg-black">
                    <video
                      ref={(el) => {
                        videoRefs.current[index] = el;
                      }}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover block transition-transform duration-500 group-hover:scale-[1.02]"
                    >
                      <source
                        src={video.src}
                        type={video.src.endsWith(".mov") ? "video/quicktime" : "video/mp4"}
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Global CSS keyframe for silky smooth 120fps infinite scrolling */}
      <style jsx>{`
        @keyframes infiniteVideoScroll {
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
