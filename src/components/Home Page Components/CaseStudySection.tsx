"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const MARQUEE_ITEMS = [
  "Design That Converts",
  "Strategy First",
  "Pixel-Perfect Execution",
  "Data-Driven Results",
  "Scalable Solutions",
  "Brand Authority",
  "Performance Marketing",
  "Creative Excellence",
  "Full-Stack Delivery",
  "Growth Focused",
];

export function CaseStudySection() {
  return (
    <>
      {/* ================================================================ */}
      {/* MAIN PORTFOLIO / CASE STUDY SECTION                              */}
      {/* Text on the Left, Image on the Right — Matching Website Style    */}
      {/* ================================================================ */}
      <section
        id="case-study"
        aria-label="Featured Portfolio Case Study"
        className="relative bg-white py-20 sm:py-28 lg:py-32 scroll-mt-12 border-t border-zinc-100"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* ======================================================== */}
            {/* LEFT COLUMN: EDITORIAL TEXT & DETAILS                    */}
            {/* ======================================================== */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              {/* Eyebrow Label */}
              <div className="flex items-center gap-2 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f95721]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Featured Branding Portfolio // House of Kolam
                </span>
              </div>

              {/* Main Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-950 sm:leading-tight font-sans"
              >
                Crafting digital flagships that refuse to{" "}
                <span className="font-editorial font-normal text-zinc-800">
                  blend in.
                </span>
              </motion.h2>

              {/* Narrative Subtext — Mentioning House of Kolam Branding */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 text-base sm:text-lg leading-relaxed text-zinc-600"
              >
                Explore our flagship visual identity system for{" "}
                <strong className="text-zinc-900 font-semibold">House of Kolam</strong>.
                Rooted in ancestral South Indian dot-grid geometry, we engineered 23
                master boards spanning bespoke vernacular typography, artisanal kraft
                and brass packaging architecture, spatial dining collateral, and kinetic
                motion loops tailored for modern luxury hospitality.
              </motion.p>

              {/* Key Impact Stats */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8 grid grid-cols-2 gap-6 border-t border-zinc-100 pt-6"
              >
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-bold text-zinc-950 font-editorial">
                    23 Boards
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-500">
                    Master Identity System & Design Direction
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-bold text-zinc-950 font-editorial">
                    35+ Assets
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-500">
                    Bespoke Packaging, Spatial & Print Deliverables
                  </p>
                </div>
              </motion.div>

              {/* CTA Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
              >
                <Button
                  href="/work/branding/house-of-kolam"
                  size="md"
                  className="group"
                >
                  <span>Explore House of Kolam</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>

                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-600 hover:text-zinc-950 transition-colors py-2 px-3"
                >
                  <span>View All Case Studies</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400" />
                </Link>
              </motion.div>
            </div>

            {/* ======================================================== */}
            {/* RIGHT COLUMN: HOUSE OF KOLAM BRANDING SHOWCASE IMAGE     */}
            {/* ======================================================== */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6 flex justify-center lg:justify-end"
            >
              <Link
                href="/work/branding/house-of-kolam"
                className="group relative aspect-[16/11] sm:aspect-[4/3] w-full max-w-[620px] overflow-hidden rounded-3xl bg-zinc-100 border border-zinc-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.08)] block"
              >
                <Image
                  src="https://res.cloudinary.com/vt5gqi1c/image/upload/v1793186166/31b46d250283873.6a1bd914346e2_converted.png"
                  alt="House of Kolam — Flagship Branding & Visual Identity System"
                  fill
                  sizes="(max-width: 1024px) 100vw, 620px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
                {/* Floating Corner Pill */}
                <div className="absolute bottom-4 left-4 z-10 rounded-full bg-white/90 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-wider text-zinc-900 border border-zinc-200/80 shadow-sm flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#f95721]" />
                  <span>2026 Brand Release</span>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* MARQUEE BELOW CASE STUDY / PORTFOLIO SECTION                     */}
      {/* ================================================================ */}
      <div className="relative w-full overflow-hidden bg-[#1849d6] text-white py-4 sm:py-5 select-none shadow-[0_4px_24px_rgba(24,73,214,0.25)]">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-32 bg-gradient-to-r from-[#1849d6] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-32 bg-gradient-to-l from-[#1849d6] to-transparent" />

        {/* Marquee track — Left to Right */}
        <div className="flex w-max will-change-transform animate-casestudy-l-to-r">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(
            (item, idx) => (
              <div
                key={`cs-marquee-${item}-${idx}`}
                className="flex items-center gap-6 sm:gap-8 px-4 sm:px-6"
              >
                <span className="text-base sm:text-lg md:text-xl font-extrabold tracking-wider uppercase whitespace-nowrap text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  {item}
                </span>
                <span className="text-blue-200 font-black text-xl sm:text-2xl px-2 select-none">
                  *
                </span>
              </div>
            )
          )}
        </div>

        <style jsx>{`
          .animate-casestudy-l-to-r {
            animation: caseStudyScrollLToR 30s linear infinite;
          }

          @keyframes caseStudyScrollLToR {
            0% {
              transform: translate3d(-33.333%, 0, 0);
            }
            100% {
              transform: translate3d(0, 0, 0);
            }
          }
        `}</style>
      </div>
    </>
  );
}

export default CaseStudySection;
