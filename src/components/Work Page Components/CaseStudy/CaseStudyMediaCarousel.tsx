"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Film, Image as ImageIcon } from "lucide-react";

export interface CarouselMediaItem {
  id: string;
  type: "image" | "video";
  src: string;
  poster?: string;
  title?: string;
  caption?: string;
  tag?: string;
}

export interface CaseStudyMediaCarouselProps {
  title: string;
  subtitle?: string;
  orientation?: "horizontal" | "vertical";
  items: CarouselMediaItem[];
}

export function CaseStudyMediaCarousel({
  title,
  subtitle,
  orientation = "horizontal",
  items,
}: CaseStudyMediaCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const isVertical = orientation === "vertical";

  const scrollLeft = () => {
    if (!containerRef.current) return;
    const scrollAmount = isVertical ? 320 : 500;
    containerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (!containerRef.current) return;
    const scrollAmount = isVertical ? 320 : 500;
    containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="relative py-12 sm:py-16 bg-white overflow-hidden">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-10 left-10 h-[350px] w-[350px] rounded-full bg-blue-600/[0.05] blur-[130px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-[350px] w-[350px] rounded-full bg-orange-600/[0.05] blur-[130px]" />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* Section Header with Carousel Navigation Buttons */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              {isVertical ? (
                <Film className="h-4 w-4 text-[#ea580c]" />
              ) : (
                <ImageIcon className="h-4 w-4 text-blue-600" />
              )}
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400 font-sans">
                {isVertical ? "Vertical Media Reel (9:16)" : "Horizontal Cinema Showcase (16:10)"}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-950 font-sans leading-[1.14]">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-2 text-sm sm:text-base text-zinc-500 font-sans leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>

          {/* Carousel Arrow Controls */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              type="button"
              onClick={scrollLeft}
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-xs transition-all hover:bg-zinc-950 hover:text-white hover:border-zinc-950 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={scrollRight}
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-xs transition-all hover:bg-zinc-950 hover:text-white hover:border-zinc-950 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Carousel Track */}
        <div
          ref={containerRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 scroll-smooth snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className={`snap-start shrink-0 relative overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200/90 shadow-sm bg-zinc-950 group ${
                isVertical
                  ? "w-[240px] sm:w-[280px] lg:w-[310px] aspect-[9/16]"
                  : "w-[320px] sm:w-[460px] lg:w-[540px] aspect-[16/10]"
              }`}
            >
              {/* Specular highlight */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent z-10" />

              {item.type === "video" ? (
                <>
                  <video
                    src={item.src}
                    poster={item.poster}
                    playsInline
                    loop
                    muted
                    autoPlay={activeVideoId === item.id}
                    controls={activeVideoId === item.id}
                    className="h-full w-full object-cover"
                  />
                  {activeVideoId !== item.id && (
                    <div
                      onClick={() => setActiveVideoId(item.id)}
                      className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer group-hover:bg-black/20 transition-all z-10"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-zinc-950 shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#ea580c] group-hover:text-white">
                        <Play className="h-5 w-5 translate-x-0.5 fill-current" />
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Image
                  src={item.src}
                  alt={item.title || "Showcase Asset"}
                  fill
                  sizes={isVertical ? "(max-width: 640px) 240px, 310px" : "(max-width: 640px) 320px, 540px"}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              )}

              {/* Caption Overlay */}
              {(item.title || item.caption) && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-5 text-white z-20 pointer-events-none">
                  {item.tag && (
                    <span className="font-mono text-[10px] uppercase text-[#ea580c] font-semibold mb-1 block">
                      {item.tag}
                    </span>
                  )}
                  {item.title && (
                    <h3 className="text-sm font-semibold tracking-tight leading-snug">
                      {item.title}
                    </h3>
                  )}
                  {item.caption && (
                    <p className="mt-1 text-xs text-zinc-300 line-clamp-2 leading-relaxed">
                      {item.caption}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
