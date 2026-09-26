"use client";

import { motion } from "framer-motion";

export function OrangeBanner() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Background with warm radiant orange-peach gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#ff7a29] via-[#f95721] to-[#ea4b16]" />

      {/* Subtle radial ambient light highlight */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[350px] w-full max-w-4xl rounded-full bg-white/20 blur-3xl" />
      </div>

      {/* Subtle background sparkline wave */}
      <div className="pointer-events-none absolute inset-0 opacity-15">
        <svg
          viewBox="0 0 1200 300"
          className="h-full w-full object-cover"
          preserveAspectRatio="none"
        >
          <path
            d="M0 150 Q 300 50, 600 180 T 1200 120"
            fill="none"
            stroke="white"
            strokeWidth="3"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-2xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight sm:leading-snug"
        >
          We're proudly serving 12 years in the industry. We have experience,
          resources, and top experts.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-sm sm:text-base font-medium text-white/85"
        >
          From high-growth tech startups to established market leaders across 24 countries.
        </motion.p>
      </div>
    </section>
  );
}
