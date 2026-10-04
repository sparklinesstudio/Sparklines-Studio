"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function CtaFloatingSection() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
      {/* Expanded Width Container */}
      <div className="mx-auto max-w-[1400px] px-3 sm:px-6 lg:px-8">
        {/* Boxed Floating Card Container with Reduced Border Radius */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative isolate overflow-hidden rounded-2xl sm:rounded-3xl border border-sky-100/80 shadow-[0_20px_60px_-15px_rgba(14,165,233,0.12),0_4px_16px_-4px_rgba(0,0,0,0.04)] p-8 sm:p-14 lg:p-20 text-center flex flex-col items-center justify-center bg-[#f0f8ff]"
        >
          {/* Background Cloud Image inside the card */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
            <img
              src="https://res.cloudinary.com/vt5gqi1c/image/upload/v1790461624/smoky-watercolor-cloud-background.jpg"
              alt="Cloud Background"
              className="h-full w-full object-cover object-center"
            />
            {/* Soft ambient overlay to ensure perfect contrast matching reference */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/35 to-white/50 pointer-events-none" />
          </div>

          {/* Centered Content */}
          <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center">
            {/* Top Centered Brand Squircle Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-6 sm:mb-8"
            >
              <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white p-2.5 shadow-[0_10px_25px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)] border border-white/90 backdrop-blur-md transition-transform duration-300 hover:scale-105">
                <div className="relative h-full w-full rounded-xl overflow-hidden bg-black flex items-center justify-center">
                  <Image
                    src="https://res.cloudinary.com/vt5gqi1c/image/upload/v1790456941/WhatsApp_Image_2026-09-27_at_02.30.07.jpg"
                    alt="Sparklines Studio Emblem"
                    fill
                    sizes="64px"
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Top subtle gloss line */}
                <span className="absolute top-0 inset-x-2 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />
              </div>
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-950 font-sans leading-[1.12]"
            >
              Your service business, <br />
              <span className="font-editorial italic font-normal text-zinc-900 tracking-normal">
                on one screen.
              </span>
            </motion.h2>

            {/* Subtitle Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-zinc-600 max-w-xl mx-auto font-sans leading-relaxed"
            >
              Leads, offers, projects, invoices, cash flow, all connected in
              Sparklines and visible in your Cockpit. Know who&apos;s profitable,
              who pays late, and what to do next.
            </motion.p>

            {/* CTA Button matching website theme */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-7 sm:mt-8 flex flex-col items-center justify-center gap-3 w-full sm:w-auto"
            >
              <Link href="#contact" className="w-full sm:w-auto">
                <button
                  type="button"
                  className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-zinc-950/95 px-8 py-3.5 sm:px-9 sm:py-4 text-xs sm:text-sm font-semibold text-white shadow-[0_8px_25px_rgba(0,0,0,0.18),inset_0_1px_1px_rgba(255,255,255,0.3)] border border-white/15 transition-all duration-300 hover:bg-[#f95721] hover:border-[#f95721]/50 hover:shadow-[0_10px_30px_rgba(249,87,33,0.38)] active:scale-95 group overflow-hidden cursor-pointer"
                >
                  <span className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none" />
                  <span>Start your trial</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </Link>

              {/* Reassurance text */}
              <p className="text-[11px] sm:text-xs text-zinc-500 font-sans tracking-wide">
                14-day free trial · Cancel anytime.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CtaFloatingSection;
