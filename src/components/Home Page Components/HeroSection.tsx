"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, TrendingUp, Smartphone, Layers, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden pt-12 pb-24 lg:pt-16 lg:pb-32 bg-white">
      {/* Background Soft Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
        <div className="h-[460px] w-full max-w-5xl bg-gradient-to-b from-sky-100/60 via-blue-50/30 to-transparent blur-3xl opacity-80" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Content */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {/* Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-orange-50/60 px-4 py-1.5 text-xs font-medium text-orange-950 shadow-sm backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#f95721] animate-pulse" />
            <span className="text-zinc-700 font-medium">
              Ranked Top Digital Product Agency • 2026
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-6xl sm:leading-[1.12]"
          >
            Building High-Impact{" "}
            <span className="font-editorial italic font-normal text-zinc-900 tracking-normal">
              Digital
            </span>
            <br />
            <span className="font-editorial italic font-normal text-zinc-900 tracking-normal">
              Products
            </span>{" "}
            for your brand
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mt-6 max-w-xl text-base text-zinc-600 sm:text-lg leading-relaxed"
          >
            We partner with visionary founders and scaling brands to craft intuitive websites,
            scalable web applications, and unforgettable digital experiences.
          </motion.p>

          {/* Primary Orange CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            <Link
              href="#contact"
              className="group relative inline-flex items-center gap-2.5 rounded-full bg-[#f95721] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:bg-[#ea4b16] hover:shadow-xl hover:shadow-orange-500/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
            >
              <span>Let's work together</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Floating Device / Project Showcase Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className="mt-16 sm:mt-20 overflow-hidden py-4"
        >
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 items-center justify-center">
            {/* Card 1: Mobile App Preview */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="group relative rounded-2xl border border-zinc-200/90 bg-white p-3 shadow-md transition-all duration-300 hover:shadow-xl hover:border-orange-300"
            >
              <div className="aspect-[9/16] w-full rounded-xl bg-gradient-to-br from-amber-500/10 via-rose-500/10 to-purple-500/10 p-3.5 flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-zinc-800 bg-white/80 px-2 py-0.5 rounded-md shadow-xs">
                    Ecommerce
                  </span>
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                </div>
                <div className="space-y-1.5 my-auto">
                  <div className="h-16 w-full rounded-lg bg-white/70 shadow-xs flex items-center justify-center">
                    <Smartphone className="h-6 w-6 text-[#f95721]" />
                  </div>
                  <div className="h-2 w-3/4 rounded bg-zinc-300/80" />
                  <div className="h-2 w-1/2 rounded bg-zinc-200/80" />
                </div>
                <div className="rounded-lg bg-zinc-900 p-2 text-center text-[10px] font-medium text-white shadow-xs">
                  View Case Study
                </div>
              </div>
            </motion.div>

            {/* Card 2: Minimalist Dark Terminal / Code */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="group relative rounded-2xl border border-zinc-200/90 bg-zinc-950 p-4 shadow-md transition-all duration-300 hover:shadow-xl hover:border-zinc-700"
            >
              <div className="aspect-[9/14] w-full flex flex-col justify-between text-zinc-300">
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-red-500" />
                  <div className="h-2 w-2 rounded-full bg-yellow-500" />
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="ml-auto text-[9px] text-zinc-500 font-mono">spark.config</span>
                </div>
                <div className="font-mono text-[10px] leading-relaxed text-zinc-400 space-y-1 my-3">
                  <p className="text-emerald-400">✓ 99.98% uptime</p>
                  <p className="text-zinc-500">// Next.js Turbopack</p>
                  <p className="text-indigo-400">deploy: {`"instant"`}</p>
                  <p className="text-orange-400">render: {`"edge"`}</p>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/80 p-2 text-[10px] text-zinc-300 flex items-center justify-between">
                  <span>Speed Index</span>
                  <span className="font-bold text-emerald-400">0.4s</span>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Mobile Dashboard with Sparkline */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="group relative rounded-2xl border border-zinc-200/90 bg-white p-3 shadow-md transition-all duration-300 hover:shadow-xl hover:border-orange-300"
            >
              <div className="aspect-[9/16] w-full rounded-xl bg-zinc-50 p-3 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-zinc-900">Analytics Pro</span>
                  <span className="text-[9px] font-semibold text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded">
                    +48.2%
                  </span>
                </div>

                {/* Mini Sparkline Chart */}
                <div className="my-2 bg-white rounded-lg p-2 shadow-xs border border-zinc-200/50">
                  <span className="text-[9px] text-zinc-400 font-medium">Conversion Rate</span>
                  <div className="h-10 w-full mt-1">
                    <svg viewBox="0 0 100 40" className="h-full w-full overflow-visible">
                      <path
                        d="M0 30 Q 25 35, 50 15 T 100 8"
                        fill="none"
                        stroke="#f95721"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <circle cx="100" cy="8" r="3" fill="#f95721" />
                    </svg>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] text-zinc-600">
                    <span>Revenue</span>
                    <span className="font-bold text-zinc-900">$184,200</span>
                  </div>
                  <div className="w-full bg-zinc-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#f95721] h-full w-4/5 rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 4: Desktop Web UI Preview */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="group relative rounded-2xl border border-zinc-200/90 bg-white p-3 shadow-md transition-all duration-300 hover:shadow-xl hover:border-orange-300"
            >
              <div className="aspect-[9/15] w-full rounded-xl bg-gradient-to-b from-zinc-100 to-zinc-50 p-3 flex flex-col justify-between">
                <div className="flex items-center gap-1 border-b border-zinc-200/80 pb-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
                  <div className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
                  <div className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
                  <div className="h-2 w-20 rounded bg-white ml-2" />
                </div>
                <div className="my-auto space-y-2">
                  <div className="h-12 rounded-lg bg-white shadow-xs border border-zinc-200/60 p-2 flex items-center gap-2">
                    <div className="h-7 w-7 rounded-md bg-indigo-50 flex items-center justify-center">
                      <Layers className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div className="space-y-1">
                      <div className="h-2 w-14 bg-zinc-300 rounded" />
                      <div className="h-1.5 w-10 bg-zinc-200 rounded" />
                    </div>
                  </div>
                  <div className="h-10 rounded-lg bg-orange-50/80 border border-orange-200/50 p-2 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-[#f95721]" />
                    <span className="text-[9px] font-semibold text-orange-950">Scale Mode</span>
                  </div>
                </div>
                <div className="text-[9px] text-zinc-500 text-center font-medium">
                  Modular Architecture
                </div>
              </div>
            </motion.div>

            {/* Card 5: Founder / Creator Proof Card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="hidden lg:block group relative rounded-2xl border border-zinc-200/90 bg-white p-3 shadow-md transition-all duration-300 hover:shadow-xl hover:border-orange-300"
            >
              <div className="aspect-[9/16] w-full rounded-xl bg-gradient-to-br from-amber-50 to-orange-50/40 p-3 flex flex-col justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xs font-bold">
                    S
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-zinc-900 leading-tight">Client Review</p>
                    <p className="text-[8px] text-zinc-500">FinTech Leader</p>
                  </div>
                </div>
                <div className="bg-white/90 p-2.5 rounded-lg border border-orange-100 shadow-xs my-auto">
                  <div className="flex gap-0.5 text-amber-500 mb-1">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i} className="text-[10px]">
                        {star}
                      </span>
                    ))}
                  </div>
                  <p className="text-[9px] text-zinc-700 italic leading-snug">
                    "Sparklines Studio transformed our vision into an iconic web presence."
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[9px] text-emerald-600 font-medium">
                  <CheckCircle2 className="h-3 w-3" />
                  Verified Partnership
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
