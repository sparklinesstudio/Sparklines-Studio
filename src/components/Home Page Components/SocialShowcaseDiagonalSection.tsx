"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { heroShowcasePosts } from "./HeroSection";

export function SocialShowcaseDiagonalSection() {
  // Split hero posts into 3 distinct columns for diagonal parallax columns
  const col1 = [
    heroShowcasePosts[0],
    heroShowcasePosts[1],
    heroShowcasePosts[2],
    heroShowcasePosts[3],
  ];
  const col2 = [
    heroShowcasePosts[4],
    heroShowcasePosts[5],
    heroShowcasePosts[6],
    heroShowcasePosts[7],
  ];
  const col3 = [
    heroShowcasePosts[2],
    heroShowcasePosts[5],
    heroShowcasePosts[0],
    heroShowcasePosts[7],
  ];

  // Double each for seamless infinite scrolling
  const doubledCol1 = [...col1, ...col1];
  const doubledCol2 = [...col2, ...col2];
  const doubledCol3 = [...col3, ...col3];

  return (
    <section
      id="social-portfolio"
      aria-label="Social Media Marketing & Creative Portfolio"
      className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-28 lg:py-32 border-b border-zinc-200/80"
    >
      {/* Subtle Blueprint Grid Pattern in Light Blue */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #2563eb 1px, transparent 1px),
            linear-gradient(to bottom, #2563eb 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px",
        }}
      />

      {/* Soft Blue Ambient Glow */}
      <div className="pointer-events-none absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-blue-200/40 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-sky-100/60 blur-[130px]" />

      <div className="relative mx-auto max-w-[1720px] px-4 sm:px-8 lg:px-12 xl:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
          
          {/* ============================================================== */}
          {/* LEFT COLUMN: DIAGONAL MOVING IMAGE MARQUEE RUNWAY              */}
          {/* Featuring the posts from HeroSection tilted diagonally         */}
          {/* ============================================================== */}
          <div className="lg:col-span-7 xl:col-span-7 relative h-[500px] sm:h-[620px] lg:h-[700px] overflow-hidden rounded-3xl bg-slate-100/60 border border-blue-100 shadow-[inset_0_2px_12px_rgba(37,99,235,0.04)] select-none">
            
            {/* Soft Edge Gradient Masks */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 sm:h-28 bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 sm:h-28 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10" />

            {/* Rotated Diagonal Stage */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
              <div className="flex gap-4 sm:gap-6 -rotate-12 scale-[1.08] sm:scale-115 lg:scale-120 will-change-transform">
                
                {/* Column 1: Scrolling Upward */}
                <div className="flex flex-col gap-4 sm:gap-6 animate-diag-up">
                  {doubledCol1.map((src, idx) => (
                    <div
                      key={`diag-col1-${idx}`}
                      className="group relative h-[240px] w-[170px] sm:h-[290px] sm:w-[210px] shrink-0 overflow-hidden rounded-3xl border border-blue-200/90 bg-white p-2 shadow-[0_10px_28px_rgba(37,99,235,0.08)] hover:scale-105 hover:border-blue-400 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-slate-100">
                        <Image
                          src={src}
                          alt={`Social Portfolio Post #${idx + 1}`}
                          fill
                          sizes="(max-width: 640px) 170px, 210px"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Column 2: Scrolling Downward */}
                <div className="flex flex-col gap-4 sm:gap-6 animate-diag-down">
                  {doubledCol2.map((src, idx) => (
                    <div
                      key={`diag-col2-${idx}`}
                      className="group relative h-[240px] w-[170px] sm:h-[290px] sm:w-[210px] shrink-0 overflow-hidden rounded-3xl border border-blue-200/90 bg-white p-2 shadow-[0_10px_28px_rgba(37,99,235,0.08)] hover:scale-105 hover:border-blue-400 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-slate-100">
                        <Image
                          src={src}
                          alt={`Social Portfolio Post #${idx + 5}`}
                          fill
                          sizes="(max-width: 640px) 170px, 210px"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Column 3: Scrolling Upward (Visible on tablet/desktop) */}
                <div className="hidden sm:flex flex-col gap-4 sm:gap-6 animate-diag-up-slow">
                  {doubledCol3.map((src, idx) => (
                    <div
                      key={`diag-col3-${idx}`}
                      className="group relative h-[240px] w-[170px] sm:h-[290px] sm:w-[210px] shrink-0 overflow-hidden rounded-3xl border border-blue-200/90 bg-white p-2 shadow-[0_10px_28px_rgba(37,99,235,0.08)] hover:scale-105 hover:border-blue-400 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-slate-100">
                        <Image
                          src={src}
                          alt={`Social Portfolio Post #${idx + 9}`}
                          fill
                          sizes="(max-width: 640px) 170px, 210px"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>

          {/* ============================================================== */}
          {/* RIGHT COLUMN: PUNCHY EDITORIAL HEADLINE & NARRATIVE            */}
          {/* ============================================================== */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center space-y-6 sm:space-y-7">
            
            {/* Giant Punchy Headline with Blue Accent */}
            <h2 className="text-3xl sm:text-5xl lg:text-5xl xl:text-[56px] font-semibold uppercase tracking-tight text-zinc-950 font-sans leading-[1.05]">
              Social Media <br className="hidden sm:inline" />
              Marketing —{" "}
              <span className="text-blue-600 font-editorial italic font-normal tracking-normal lowercase block sm:inline">
                Our Portfolio
              </span>
            </h2>

            {/* Narrative Subtext */}
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
              We&apos;ve partnered with visionary brands and modern enterprises to create cracking,
              thumb-stopping content for their social channels. From high-converting lifestyle
              reels to luxury creative direction, take a look through our portfolio and see for
              yourself why leading studios trust Sparklines Studio.
            </p>

            {/* Services Bullet Checklist */}
            <div className="space-y-3 pt-2 border-t border-zinc-200/80">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm md:text-base text-zinc-700">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 shrink-0" />
                <span>Viral Vertical Short-Form Video (Reels, TikTok, Shorts)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm md:text-base text-zinc-700">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 shrink-0" />
                <span>Commercial Food, Fashion & Interior Creative Direction</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm md:text-base text-zinc-700">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 shrink-0" />
                <span>Full-Funnel Paid Social Ads with Automated Tracking</span>
              </div>
            </div>

            {/* Action CTA Button - Signature Universal Studio Button */}
            <div className="pt-2">
              <Link
                href="#contact"
                className="relative inline-flex items-center gap-2 rounded-full bg-zinc-950/95 px-7 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.3)] border border-white/15 transition-all duration-300 hover:bg-[#f95721] hover:border-[#f95721]/50 hover:shadow-[0_6px_20px_rgba(249,87,33,0.35)] active:scale-95 group overflow-hidden"
              >
                <span className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none" />
                <span>See Our Case Studies</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

          </div>

        </div>
      </div>

      {/* CSS Keyframes for Smooth Infinite Diagonal Scrolling */}
      <style jsx>{`
        .animate-diag-up {
          animation: diagScrollUp 22s linear infinite;
        }

        .animate-diag-down {
          animation: diagScrollDown 25s linear infinite;
        }

        .animate-diag-up-slow {
          animation: diagScrollUp 28s linear infinite;
        }

        @keyframes diagScrollUp {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(0, -50%, 0);
          }
        }

        @keyframes diagScrollDown {
          0% {
            transform: translate3d(0, -50%, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}
