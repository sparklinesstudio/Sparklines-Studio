"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CtaFloatingSection() {
  return (
    <section className="relative w-full py-20 sm:py-28 lg:py-36 overflow-hidden border-t border-sky-100/60 isolate">
      {/* Background Cloud Image Across Entire Full-Width Section */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <img
          src="https://res.cloudinary.com/vt5gqi1c/image/upload/v1790461624/smoky-watercolor-cloud-background.jpg"
          alt="Cloud Background"
          className="h-full w-full object-cover object-center"
        />
        {/* Soft ambient overlay to ensure perfect contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/50 to-white/75 pointer-events-none" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8 text-center flex flex-col items-center">
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

        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white/80 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-sky-950 shadow-xs backdrop-blur-md mb-5"
        >
          <span className="w-2 h-2 rounded-full bg-[#f95721]" />
          <span>Performance Marketing & Revenue Growth</span>
        </motion.div>

        {/* Main Editorial Headline — About Marketing */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-950 font-sans leading-[1.12]"
        >
          Scale your category with <br />
          <span className="font-editorial italic font-normal text-zinc-900 tracking-normal">
            high-impact marketing.
          </span>
        </motion.h2>

        {/* Subtitle Description — Performance Marketing */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 sm:mt-6 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto font-sans leading-relaxed"
        >
          Algorithmic search dominance, high-converting paid media campaigns,
          and cinema-grade commercial storytelling. We engineer marketing
          ecosystems that convert high-intent interest into compounding enterprise revenue.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 w-full sm:w-auto"
        >
          <Button
            href="/contact"
            size="lg"
            className="w-full sm:w-auto group shadow-xl"
          >
            <span>Request a Growth Audit</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>

          {/* Reassurance text */}
          <p className="text-[11px] sm:text-xs text-zinc-500 font-sans tracking-wide">
            Zero lock-in retainers · Tailored growth roadmap in 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default CtaFloatingSection;
