"use client";

import { motion } from "framer-motion";
import { Star, Quote, CheckCircle, TrendingUp, Sparkles } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-zinc-50/70 py-24 sm:py-32 border-t border-zinc-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/80 px-3 py-1 text-xs font-semibold text-orange-900">
            <Sparkles className="h-3 w-3 text-[#f95721]" />
            Testimonials
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
            Praise from the trenches
          </h2>
          <p className="mt-4 text-base text-zinc-600">
            Real feedback from high-growth founders, CTOs, and product leaders who rely on
            Sparklines Studio to drive their engineering forward.
          </p>
        </div>

        {/* 3-Part Featured Testimonial Layout Matching Mockup */}
        <div className="mt-14 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
          {/* Part 1: Primary Detailed Quote Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between rounded-3xl border border-zinc-200/90 bg-white p-8 sm:p-10 shadow-sm lg:col-span-6"
          >
            <div>
              <div className="flex items-center gap-1 text-amber-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <Quote className="h-8 w-8 text-orange-400/30 mb-4" />

              <blockquote className="text-lg font-medium leading-relaxed text-zinc-800 sm:text-xl">
                "As a non-technical founder, I needed an agency that didn't just write code, but
                actively understood our business model. Sparklines Studio delivered beyond
                expectations — our web platform handled 10x traffic on day one with flawless
                smoothness."
              </blockquote>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-zinc-100 pt-6">
              <div>
                <h4 className="text-base font-bold text-zinc-950">
                  David Henderson
                </h4>
                <p className="text-xs text-zinc-500">
                  Founder & CEO • Veloce Technologies
                </p>
              </div>
              <div className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                <CheckCircle className="h-3.5 w-3.5" />
                Verified Client
              </div>
            </div>
          </motion.div>

          {/* Part 2: Founder Portrait Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group relative flex flex-col justify-end overflow-hidden rounded-3xl border border-zinc-200/90 bg-zinc-900 p-8 text-white shadow-sm lg:col-span-3 min-h-[320px]"
          >
            {/* Visual Portrait Graphic */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/60 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/20 to-orange-900/30" />

            {/* Stylized Avatar Illustration */}
            <div className="absolute inset-0 flex items-center justify-center -top-8">
              <div className="h-40 w-40 rounded-full bg-gradient-to-tr from-amber-400/20 via-orange-500/30 to-purple-500/20 blur-md" />
              <div className="absolute flex h-28 w-28 items-center justify-center rounded-full bg-zinc-800 border-2 border-orange-400/40 shadow-xl text-3xl font-extrabold text-orange-400">
                DH
              </div>
            </div>

            <div className="relative z-20 space-y-1">
              <span className="inline-block text-[11px] font-semibold text-orange-400 uppercase tracking-widest">
                Executive Partner
              </span>
              <p className="text-lg font-bold text-white">David Henderson</p>
              <p className="text-xs text-zinc-400">Scaled Series-A SaaS from 0 to 120k MAU</p>
            </div>
          </motion.div>

          {/* Part 3: Stat Proof Card (95% ROI) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col justify-between rounded-3xl border border-orange-200/80 bg-white p-8 sm:p-10 shadow-sm lg:col-span-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-[#f95721] border border-orange-200">
              <TrendingUp className="h-6 w-6" />
            </div>

            <div className="my-6">
              <div className="text-5xl font-black tracking-tight text-zinc-950 sm:text-6xl">
                95%
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                Of clients achieve positive ROI and eliminate key technical debt within 60 days
                of launch.
              </p>
            </div>

            <div className="border-t border-zinc-100 pt-4">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                Audited Client Metrics
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
