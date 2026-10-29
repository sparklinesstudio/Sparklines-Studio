"use client";

import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  FileCheck,
  Calendar,
  Layers,
  Sparkles,
} from "lucide-react";
import { HeaderNavigation } from "@/components/Home Page Components/HeaderNavigation";
import { BrandFooterBanner } from "@/components/Home Page Components/BrandFooterBanner";
import "@/app/seo-agency-kolkata/seo-kolkata.css";

export default function ThankYouPage() {
  const nextSteps = [
    {
      step: "01",
      icon: FileCheck,
      title: "Technical & Scope Triage",
      time: "Hours 1 – 12",
      description:
        "Our Senior Partner and Technical Leads manually inspect your domain, creative needs, and category competitors to structure actionable feasibility notes.",
    },
    {
      step: "02",
      icon: Calendar,
      title: "Discovery & Alignment Call",
      time: "Hours 12 – 24",
      description:
        "We reach out directly via email and WhatsApp with our initial evaluation and a 30-minute calendar link to align on goals and timeline expectations.",
    },
    {
      step: "03",
      icon: Layers,
      title: "Milestone Proposal & Sprint 0",
      time: "Day 3 – 5",
      description:
        "You receive a transparent, fixed-milestone scope with zero ambiguity. Upon approval and mutual NDA signoff, our squad initiates Sprint 0.",
    },
  ];

  return (
    <div className="bg-[#F7F6F2] text-[#0B0C10] selection:bg-blue-600 selection:text-white min-h-screen flex flex-col justify-between">
      {/* Site Floating Navbar */}
      <HeaderNavigation />

      <main>
        {/* ============================================================== */}
        {/* 1. ATMOSPHERIC CONFIRMATION HERO                               */}
        {/* ============================================================== */}
        <header className="relative text-white border-b border-[#232630] overflow-hidden bg-[#090B10] pt-28 sm:pt-36 lg:pt-40 min-h-[68vh] flex flex-col justify-between">
          {/* Vertical Edge Labels */}
          <div className="hidden xl:flex absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center items-center gap-2 text-[10px] font-mono tracking-[0.28em] text-zinc-500 uppercase select-none pointer-events-none z-20 whitespace-nowrap">
            <span>TRANSMISSION CONFIRMED · WB</span>
          </div>
          <div className="hidden xl:flex absolute right-8 top-1/2 -translate-y-1/2 rotate-90 origin-center items-center gap-2 text-[10px] font-mono tracking-[0.28em] text-zinc-500 uppercase select-none pointer-events-none z-20 whitespace-nowrap">
            <span>RESPONSE DISPATCHED &lt; 24H</span>
          </div>

          {/* Background Cityscape Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30 z-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=2000&q=80')`,
            }}
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#090B10]/92 via-[#090B10]/75 to-[#090B10] z-0" />

          {/* Ambient Blue Horizon Glow */}
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[360px] bg-blue-600/25 rounded-full blur-[150px] pointer-events-none z-0" />
          <div className="ambient-glow-blue absolute top-16 right-[12%] w-[26rem] h-[26rem] rounded-full z-0 opacity-50 pointer-events-none" />

          {/* Infinite Watermark Marquee */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden pointer-events-none select-none z-0">
            <div className="watermark-marquee-wrap">
              <div className="flex shrink-0 items-center whitespace-nowrap text-[8rem] sm:text-[12rem] md:text-[15rem] font-bold leading-none text-white/[0.04] tracking-tight uppercase font-sans">
                <span className="pr-16">// TRANSMISSION CONFIRMED //</span>
                <span className="pr-16">// TRANSMISSION CONFIRMED //</span>
              </div>
              <div
                className="flex shrink-0 items-center whitespace-nowrap text-[8rem] sm:text-[12rem] md:text-[15rem] font-bold leading-none text-white/[0.04] tracking-tight uppercase font-sans"
                aria-hidden="true"
              >
                <span className="pr-16">// TRANSMISSION CONFIRMED //</span>
                <span className="pr-16">// TRANSMISSION CONFIRMED //</span>
              </div>
            </div>
          </div>

          {/* Hero Content Container */}
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-14 pt-4 pb-16 sm:pb-22 w-full text-center flex flex-col items-center">
            {/* Success Check Pill */}
            <div className="hero-fade-up inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.2em] text-emerald-400 mb-6 sm:mb-8 backdrop-blur-md">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Inquiry Received & Logged</span>
            </div>

            {/* Headline */}
            <h1 className="hero-fade-up hero-delay-1 text-4xl sm:text-6xl lg:text-7xl font-sans font-bold tracking-tight text-white leading-[1.08] max-w-3xl">
              Thank You for <br />
              <span className="font-editorial italic font-normal text-blue-400">
                Reaching Out.
              </span>
            </h1>

            {/* Subheading */}
            <p className="hero-fade-up hero-delay-2 mt-6 max-w-2xl text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              Your project brief is now in the hands of our senior creative and technical
              partners. We manually inspect every submission to ensure high-conviction
              alignment and will be in touch within 24 hours.
            </p>

            {/* Action Buttons Row */}
            <div className="hero-fade-up hero-delay-3 mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm px-6 py-3.5 shadow-lg shadow-blue-600/30 transition-all duration-200 active:scale-95"
              >
                <span>Explore Selected Works</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="https://wa.me/919641861932"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-white/10 font-medium text-xs sm:text-sm px-6 py-3.5 transition-all duration-200 active:scale-95"
              >
                <MessageCircle className="h-4 w-4 text-emerald-400" />
                <span>Urgent? WhatsApp Direct</span>
              </a>

              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-transparent hover:bg-white/5 text-zinc-400 hover:text-white text-xs sm:text-sm px-5 py-3.5 transition-all"
              >
                <span>Return to Homepage</span>
              </Link>
            </div>
          </div>
        </header>

        {/* ============================================================== */}
        {/* 2. WHAT HAPPENS NEXT TIMELINE                                  */}
        {/* ============================================================== */}
        <section className="py-16 sm:py-24 max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600">
              Process Transparency
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-zinc-950 tracking-tight mt-2">
              What Happens Next
            </h2>
            <p className="mt-3 text-sm text-zinc-600 max-w-xl mx-auto">
              We move fast and value your time. Here is the exact roadmap of how we
              evaluate your brief before our first discovery call.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {nextSteps.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="rounded-3xl bg-white border border-zinc-200 p-8 shadow-xs flex flex-col justify-between hover:border-blue-500/40 hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                        STEP {item.step}
                      </span>
                      <span className="text-xs font-mono text-zinc-400">
                        {item.time}
                      </span>
                    </div>

                    <div className="h-12 w-12 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-900 mb-5">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>

                    <h3 className="text-xl font-bold font-sans text-zinc-950 tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center gap-1.5 text-xs text-blue-600 font-semibold">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Dedicated Partner Lead</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* Blue Theme Footer */}
      <BrandFooterBanner />
    </div>
  );
}
