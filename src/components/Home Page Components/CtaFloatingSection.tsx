"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function CtaFloatingSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40 flex items-center justify-center">
      {/* Background Cloud Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://img.magnific.com/free-photo/smoky-watercolor-cloud-background_1409-1733.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Cloud background"
          className="h-full w-full object-cover object-center filter saturate-110"
        />
        {/* Soft top and bottom fade overlay for seamless page integration */}
        <div className="absolute inset-x-0 top-0 h-20 sm:h-28 bg-gradient-to-b from-white via-white/40 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-20 sm:h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Centered Brand Emblem Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6 sm:mb-8"
        >
          <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-[22px] bg-white/90 p-2 shadow-[0_12px_30px_rgba(0,0,0,0.08)] border border-white/80 backdrop-blur-md transition-transform duration-300 hover:scale-105">
            <div className="relative h-full w-full rounded-2xl overflow-hidden bg-black flex items-center justify-center">
              <Image
                src="https://res.cloudinary.com/vt5gqi1c/image/upload/v1790456941/WhatsApp_Image_2026-09-27_at_02.30.07.jpg"
                alt="Sparklines Studio Emblem"
                fill
                sizes="56px"
                className="object-cover"
                priority
              />
            </div>
            {/* Top specular glaze line */}
            <span className="absolute top-0 inset-x-3 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Main Editorial Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 font-editorial leading-[1.14]"
        >
          Your service business, <br />
          <span className="font-editorial italic font-normal text-zinc-800">
            on one screen.
          </span>
        </motion.h2>

        {/* Subtitle Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 sm:mt-6 text-sm sm:text-base lg:text-lg text-zinc-600 max-w-2xl mx-auto font-sans leading-relaxed"
        >
          Leads, bespoke websites, video production, and client acquisition—all connected in
          Sparklines Studio and visible in your Cockpit. Built to scale your design firm with predictable growth.
        </motion.p>

        {/* CTA Button Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3"
        >
          <Link href="#contact" className="w-full sm:w-auto">
            <button
              type="button"
              className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-zinc-950/95 px-8 py-4 text-xs sm:text-sm font-semibold text-white shadow-[0_8px_25px_rgba(0,0,0,0.18),inset_0_1px_1px_rgba(255,255,255,0.3)] border border-white/15 transition-all duration-300 hover:bg-[#f95721] hover:border-[#f95721]/50 hover:shadow-[0_10px_30px_rgba(249,87,33,0.38)] active:scale-95 group overflow-hidden cursor-pointer"
            >
              <span className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              <span>Start your project</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </Link>

          {/* Micro-copy Reassurance */}
          <p className="text-[11px] sm:text-xs text-zinc-500 font-sans tracking-wide">
            14-day consultation guarantee • Cancel anytime • Zero risk
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default CtaFloatingSection;
