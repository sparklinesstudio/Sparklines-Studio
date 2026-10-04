"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { PortfolioItem } from "@/data/portfolioData";

interface PortfolioSectionGridProps {
  id: string;
  categoryNumber?: string;
  categoryTitle: string;
  categoryAccent: string;
  categoryDescription: string;
  items: PortfolioItem[];
  initialCount?: number;
  /** Color theme for ambient background glow: "blue" | "orange" | "mixed" */
  colorTheme?: "blue" | "orange" | "mixed";
  /** Custom background class for seamless gradient transitions */
  bgClassName?: string;
}

export function PortfolioSectionGrid({
  id,
  categoryNumber = "01",
  categoryTitle,
  categoryAccent,
  categoryDescription,
  items,
  initialCount = 3,
  colorTheme = "blue",
  bgClassName = "bg-transparent",
}: PortfolioSectionGridProps) {
  const [visibleCount, setVisibleCount] = useState<number>(initialCount);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const displayedItems = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;
  const remainingCount = items.length - visibleCount;

  return (
    <section
      id={id}
      className={`relative py-6 sm:py-8 lg:py-10 scroll-mt-16 overflow-hidden ${bgClassName}`}
    >
      {/* Subtle clean ambient lighting */}
      {colorTheme === "blue" && (
        <div className="pointer-events-none absolute -top-24 -left-20 h-[450px] w-[450px] -z-10 rounded-full bg-blue-600/[0.04] blur-[140px]" />
      )}

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* Section Header (Compact & Impactful) */}
        <div className="mb-4 sm:mb-6 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 pb-3 border-b border-zinc-200/80">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl"
          >
            {/* Category index label */}
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs font-semibold tracking-widest uppercase text-blue-600">
                {categoryNumber}
              </span>
              <span className="h-[1px] w-6 bg-zinc-300" />
              <span className="text-xs font-medium uppercase tracking-wider text-zinc-400 font-sans">
                Practice Area
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-950 font-sans leading-[1.14]">
              {categoryAccent ? (
                <>
                  <span>{categoryTitle}</span>{" "}
                  <span className="font-editorial italic font-normal text-zinc-900 tracking-normal">
                    {categoryAccent}
                  </span>
                </>
              ) : (
                (() => {
                  const words = categoryTitle.trim().split(" ");
                  if (words.length <= 1) return <span>{categoryTitle}</span>;
                  const firstPart = words.slice(0, -1).join(" ");
                  const lastWord = words[words.length - 1];
                  return (
                    <>
                      <span>{firstPart}</span>{" "}
                      <span className="font-editorial italic font-normal text-zinc-900 tracking-normal">
                        {lastWord}
                      </span>
                    </>
                  );
                })()
              )}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-500 font-normal leading-relaxed max-w-2xl font-sans">
              {categoryDescription}
            </p>
          </motion.div>

          {/* Live item counter indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex items-center gap-2.5 text-xs font-medium text-zinc-500 font-sans shrink-0"
          >
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            <span>
              Displaying {displayedItems.length} of {items.length} Works
            </span>
          </motion.div>
        </div>

        {/* Portfolio Grid — 3 COLUMNS, LARGER GRAND CARDS (NO TEXT OR SHITS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          <AnimatePresence>
            {displayedItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
              >
                <Link
                  href={`/work/${item.id}`}
                  aria-label={item.title}
                  className="group relative block aspect-[16/10] w-full overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-500 hover:border-zinc-400 hover:shadow-[0_24px_60px_-12px_rgba(37,99,235,0.22),0_12px_30px_-8px_rgba(234,88,12,0.18)] cursor-pointer"
                >
                  {/* High-Resolution Project Showcase Image */}
                  <Image
                    src={item.coverImage}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                  />

                  {/* Specular Top Edge Light */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/70 to-transparent z-10" />

                  {/* Subtle Dark Vignette on Hover */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                  {/* Inner Hairline Ring for Crisp Edge Definition */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/10 z-10" />

                  {/* Pure Floating Action Arrow Disk (Bigger scale, Icon Only, Zero Text) */}
                  <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-zinc-950 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.24)] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-20">
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More Button (if more items available) */}
        {hasMore && (
          <div className="mt-5 sm:mt-6 flex flex-col items-center justify-center gap-1.5">
            <motion.button
              onClick={handleViewMore}
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-3.5 text-xs sm:text-sm font-semibold text-zinc-900 border border-zinc-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:bg-zinc-950 hover:text-white hover:border-zinc-950 hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] active:scale-95 cursor-pointer"
            >
              <span>View More ({remainingCount} Remaining)</span>
              <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
