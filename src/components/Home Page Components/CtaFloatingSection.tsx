"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Check, Heart, Shield } from "lucide-react";

export function CtaFloatingSection() {
  return (
    <section className="relative overflow-hidden bg-white py-28 sm:py-36">
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[450px] w-full max-w-4xl rounded-full bg-gradient-to-tr from-amber-100/50 via-orange-100/30 to-rose-100/40 blur-3xl opacity-70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Floating Creative Stickers / Badges matching the image */}

        {/* Floating Item 1: Top-Left Avatar Card */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -top-8 left-8 sm:left-16 hidden md:flex items-center gap-2.5 rounded-full border border-zinc-200 bg-white/95 p-1.5 pr-4 shadow-lg backdrop-blur-sm"
        >
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-xs font-bold text-white">
            ★
          </div>
          <span className="text-xs font-semibold text-zinc-800">Top 1% Engineering</span>
        </motion.div>

        {/* Floating Item 2: Top-Right Image Badge */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="pointer-events-none absolute -top-4 right-8 sm:right-20 hidden md:flex items-center gap-2 rounded-2xl border border-zinc-200 bg-white/95 p-3 shadow-lg backdrop-blur-sm"
        >
          <div className="h-10 w-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center">
            <Heart className="h-5 w-5 text-[#f95721]" />
          </div>
          <div>
            <p className="text-xs font-bold text-zinc-900">5-Star Client Rating</p>
            <p className="text-[10px] text-zinc-500">Clutch & G2 Verified</p>
          </div>
        </motion.div>

        {/* Floating Item 3: Middle-Left Wireframe Badge */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="pointer-events-none absolute top-1/2 left-4 sm:left-12 hidden lg:flex items-center gap-2 rounded-2xl border border-zinc-200 bg-white/95 p-3 shadow-md"
        >
          <div className="h-9 w-9 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-700">
            <Shield className="h-4 w-4 text-emerald-600" />
          </div>
          <div className="space-y-0.5">
            <p className="text-[11px] font-bold text-zinc-900">Enterprise Ready</p>
            <p className="text-[9px] text-zinc-400">SOC-2 & GDPR Clean</p>
          </div>
        </motion.div>

        {/* Floating Item 4: Bottom-Left Artistic Card (Floral art card matching mockup) */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="pointer-events-none absolute bottom-4 left-10 sm:left-24 hidden md:block rounded-2xl border border-orange-200/80 bg-gradient-to-br from-amber-50 to-orange-100/60 p-3 shadow-md w-32"
        >
          <div className="aspect-[4/3] rounded-lg bg-gradient-to-tr from-amber-400 via-rose-400 to-orange-400 p-2 flex items-center justify-center shadow-xs">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <p className="mt-2 text-center text-[10px] font-semibold text-zinc-800">
            Bespoke Craft
          </p>
        </motion.div>

        {/* Floating Item 5: Bottom-Right Mini UI Card */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="pointer-events-none absolute bottom-2 right-10 sm:right-24 hidden md:block rounded-2xl border border-zinc-200 bg-white p-3 shadow-lg w-36"
        >
          <div className="flex items-center justify-between text-[10px] font-bold text-zinc-800">
            <span>Sprint Card</span>
            <span className="text-emerald-600">On Track</span>
          </div>
          <div className="mt-2 space-y-1">
            <div className="h-1.5 w-full rounded bg-zinc-100 overflow-hidden">
              <div className="h-full w-4/5 bg-[#f95721]" />
            </div>
            <p className="text-[8px] text-zinc-400 text-right">80% completed</p>
          </div>
        </motion.div>

        {/* Center Main Call to Action Content */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-5xl sm:leading-tight"
          >
            Ready to take your product to the next level?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-6 max-w-xl text-base text-zinc-600 sm:text-lg"
          >
            Whether launching a ground-breaking new startup or modernizing an existing flagship
            platform, we’re here to help you ship faster and better.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#f95721] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:bg-[#ea4b16] hover:shadow-xl hover:shadow-orange-500/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
            >
              <span>Schedule a Discovery Call</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
