import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HeaderNavigation } from "@/components/Home Page Components/HeaderNavigation";
import { BrandFooterBanner } from "@/components/Home Page Components/BrandFooterBanner";
import { WorkFoldersArchive } from "@/components/Work Page Components/WorkFoldersArchive";

export const metadata = {
  title: "Works & Project Archives | Sparklines Studio",
  description:
    "Explore Sparklines Studio's curated archive of luxury web design, architectural flagships, and high-impact commercial video productions.",
};

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#071224] text-white selection:bg-blue-500/30 selection:text-white font-sans overflow-x-hidden">
      {/* Header Navigation */}
      <HeaderNavigation />

      {/* Main Content Area */}
      <main className="relative pt-32 sm:pt-40 pb-20 sm:pb-32">
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute top-20 left-1/4 h-[550px] w-[550px] rounded-full bg-blue-600/20 blur-[140px]" />
        <div className="pointer-events-none absolute top-96 right-10 h-[500px] w-[500px] rounded-full bg-indigo-500/15 blur-[140px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #60a5fa 1px, transparent 1px),
              linear-gradient(to bottom, #60a5fa 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
          }}
        />

        <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          {/* ============================================================== */}
          {/* HERO                                                            */}
          {/* ============================================================== */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b border-blue-900/40 pb-10 sm:pb-12">
            <div className="max-w-3xl">
              <p className="text-sm font-bold tracking-[0.2em] uppercase text-blue-400 mb-4 font-mono">
                Selected Works // 2024–2026
              </p>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl font-editorial leading-[1.05]">
                Project{" "}
                <span className="font-editorial italic font-normal text-blue-400 tracking-normal">
                  Archives
                </span>
              </h1>

              <p className="mt-4 text-base sm:text-lg text-blue-100/80 leading-relaxed max-w-2xl">
                A curated collection of bespoke web flagships, architectural
                platforms, and commercial cinema productions we&apos;ve
                crafted for ambitious brands.
              </p>
            </div>

            <div className="flex-shrink-0">
              <Link
                href="/#contact"
                className="relative inline-flex items-center gap-2 rounded-full bg-zinc-950/95 px-7 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.3)] border border-white/15 transition-all duration-300 hover:bg-[#f95721] hover:border-[#f95721]/50 hover:shadow-[0_6px_20px_rgba(249,87,33,0.35)] active:scale-95 group overflow-hidden"
              >
                <span className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                <span>Start a Project</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* ============================================================== */}
          {/* PORTFOLIO GRID                                                  */}
          {/* ============================================================== */}
          <section aria-label="Portfolio">
            <WorkFoldersArchive />
          </section>

          {/* ============================================================== */}
          {/* BOTTOM CTA BANNER                                               */}
          {/* ============================================================== */}
          <div className="mt-16 sm:mt-24 rounded-3xl bg-gradient-to-r from-blue-900/50 via-[#0d2754] to-blue-950/60 p-8 sm:p-12 border border-blue-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold font-editorial text-white">
                Have an ambitious project in mind?
              </h2>
              <p className="mt-2 text-sm sm:text-base text-blue-200/80">
                We take on a limited number of partnerships each quarter to
                ensure senior-level craftsmanship on every engagement.
              </p>
            </div>
            <Link
              href="/#contact"
              className="relative inline-flex items-center gap-2 rounded-full bg-zinc-950/95 px-8 py-4 text-sm font-bold text-white shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.3)] border border-white/15 transition-all duration-300 hover:bg-[#f95721] hover:border-[#f95721]/50 hover:shadow-[0_6px_20px_rgba(249,87,33,0.35)] active:scale-95 group overflow-hidden shrink-0"
            >
              <span className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              <span>Discuss Your Scope</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </main>

      {/* Footer Banner */}
      <BrandFooterBanner />
    </div>
  );
}
