import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Sparkles, Zap } from "lucide-react";
import { SERVICES_CATALOG } from "@/data/servicesData";
import { HeaderNavigation } from "@/components/Home Page Components/HeaderNavigation";
import { ContactSection } from "@/components/Home Page Components/ContactSection";
import { BrandFooterBanner } from "@/components/Home Page Components/BrandFooterBanner";
import { TestimonialsSection } from "@/components/Home Page Components/TestimonialsSection";

export const metadata: Metadata = {
  title: "Core Capabilities & Services | Sparklines Studio",
  description:
    "Explore Sparklines Studio's 6 core agency practices: Commercial Video Production, Pay-Per-Click Advertising, Social Media Marketing, Technical SEO, Bespoke Website Design, and Branding Identity.",
};

export default function ServicesIndexPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-orange-500/20 selection:text-orange-950 font-sans overflow-x-hidden">
      <HeaderNavigation />

      <main className="relative z-10">
        {/* ============================================================== */}
        {/* HERO SECTION                                                   */}
        {/* ============================================================== */}
        <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 bg-[linear-gradient(180deg,#1e3a8a_0%,#2563eb_32%,#ffffff_85%)] text-white">
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[550px] w-[1000px] -z-10 rounded-full bg-white/20 blur-[120px]" />

          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 text-center">
            <div className="mx-auto max-w-4xl flex flex-col items-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-white border border-white/25 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#f95721] animate-pulse" />
                <span className="tracking-wide uppercase font-mono text-[11px]">
                  AGENCY CAPABILITIES
                </span>
              </div>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl font-sans leading-[1.06]">
                Crafted for Growth &{" "}
                <span className="font-editorial italic font-normal text-sky-200 tracking-normal">
                  Authority
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base sm:text-lg lg:text-xl text-blue-50/90 leading-relaxed font-normal">
                High-impact creative, acquisition, and technical engineering
                practices designed to scale high-ticket brands and build enduring
                market prestige.
              </p>

              <div className="mt-8">
                <Link href="#contact">
                  <button
                    type="button"
                    className="relative inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-[#f95721] hover:shadow-[0_6px_24px_rgba(249,87,33,0.4)] active:scale-95 group overflow-hidden cursor-pointer"
                  >
                    <span>Start a Conversation</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* ALL 6 SERVICES CARDS GRID                                      */}
        {/* ============================================================== */}
        <section className="py-16 sm:py-24 bg-zinc-50 border-y border-zinc-200/80">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {SERVICES_CATALOG.map((service, index) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group relative flex flex-col rounded-3xl overflow-hidden border border-zinc-200/90 bg-white shadow-xs hover:shadow-2xl hover:border-zinc-300 transition-all duration-300"
                >
                  {/* Card Cover Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                    <Image
                      src={service.heroImage}
                      alt={service.shortTitle}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-zinc-900 border border-white/60">
                        Practice 0{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-zinc-950 group-hover:text-blue-600 transition-colors">
                        {service.titleFirst}{" "}
                        <span className="font-editorial italic font-normal text-zinc-700">
                          {service.titleSecond}
                        </span>
                      </h3>
                      <p className="mt-3 text-sm text-zinc-600 leading-relaxed line-clamp-3">
                        {service.tagline}
                      </p>
                    </div>

                    {/* Stats pills */}
                    <div className="mt-6 pt-5 border-t border-zinc-100 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-zinc-400 block">
                          {service.stats[0].label}
                        </span>
                        <span className="text-base font-bold text-zinc-950">
                          {service.stats[0].value}
                        </span>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-700 group-hover:bg-[#f95721] group-hover:text-white transition-colors">
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <TestimonialsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      <BrandFooterBanner />
    </div>
  );
}
