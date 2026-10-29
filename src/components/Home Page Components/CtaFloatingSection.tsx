"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, TrendingUp, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CtaFloatingSection() {
  const marketingMetrics = [
    { value: "$48M+", label: "Client Revenue Generated" },
    { value: "3.8x", label: "Average Return on Ad Spend (ROAS)" },
    { value: "+340%", label: "Qualified Pipeline Growth" },
    { value: "14 Days", label: "Acquisition Launch Velocity" },
  ];

  return (
    <section className="relative w-full py-20 sm:py-28 lg:py-36 bg-gradient-to-b from-[#FBFBFA] via-[#F4F6F1] to-white border-t border-zinc-200/90 overflow-hidden">
      {/* Subtle Background Blueprint Grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000000 1px, transparent 1px),
            linear-gradient(to bottom, #000000 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient Blue Highlight Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-500/[0.06] rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Full Width Inner Content */}
      <div className="relative w-full px-6 sm:px-10 lg:px-16 xl:px-20 mx-auto max-w-6xl flex flex-col items-center text-center">
        {/* Marketing Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/95 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.2em] text-blue-700 shadow-xs mb-6 sm:mb-8 backdrop-blur-md"
        >
          <TrendingUp className="h-3.5 w-3.5 text-blue-600" />
          <span>Performance Marketing & Category Dominance</span>
        </motion.div>

        {/* Main Editorial Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-950 font-sans leading-[1.12] max-w-4xl"
        >
          Stop burning ad spend. <br />
          <span className="font-editorial italic font-normal text-zinc-900 tracking-normal">
            Scale with predictable ROI.
          </span>
        </motion.h2>

        {/* Subtitle Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 text-base sm:text-lg lg:text-xl text-zinc-600 max-w-2xl mx-auto font-sans leading-relaxed"
        >
          We architect full-funnel acquisition engines that dominate search,
          convert paid traffic, and turn high-intent attention into signed
          contracts. No vanity impressions — just verified commercial growth.
        </motion.p>

        {/* 4 Proof Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full max-w-4xl py-6 border-y border-zinc-200/80"
        >
          {marketingMetrics.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold font-editorial text-zinc-950 tracking-tight">
                {item.value}
              </span>
              <span className="mt-1 text-xs text-zinc-500 font-sans">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA Button Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-9 sm:mt-11 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Button href="/contact" size="lg" className="w-full sm:w-auto group">
            <span>Book a Growth Strategy Call</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-zinc-100 border border-zinc-200 px-6 py-3.5 text-xs sm:text-sm font-semibold text-zinc-800 transition-colors shadow-xs"
          >
            <span>Explore All Work</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400" />
          </Link>
        </motion.div>

        {/* Reassurance text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 flex items-center justify-center gap-4 text-[11px] sm:text-xs text-zinc-500 font-mono"
        >
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
            <span>Guaranteed Response &lt; 24h</span>
          </span>
          <span>·</span>
          <span>NDA Protected</span>
          <span>·</span>
          <span>No Obligation Audit</span>
        </motion.div>
      </div>
    </section>
  );
}

export default CtaFloatingSection;
