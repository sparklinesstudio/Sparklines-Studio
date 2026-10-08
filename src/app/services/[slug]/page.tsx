import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Layers,
  Sparkles,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { SERVICES_CATALOG, ServiceDetail } from "@/data/servicesData";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { HeaderNavigation } from "@/components/Home Page Components/HeaderNavigation";
import { ContactSection } from "@/components/Home Page Components/ContactSection";
import { BrandFooterBanner } from "@/components/Home Page Components/BrandFooterBanner";
import { TestimonialsSection } from "@/components/Home Page Components/TestimonialsSection";

// Next.js 15+ / 16 Params Promise
interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  SERVICES_CATALOG.forEach((service) => {
    params.push({ slug: service.slug });
    service.aliases.forEach((alias) => {
      params.push({ slug: alias });
    });
  });
  return params;
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_CATALOG.find(
    (s) => s.slug === slug || s.aliases.includes(slug)
  );

  if (!service) {
    return {
      title: "Service Not Found | Sparklines Studio",
    };
  }

  return {
    title: `${service.shortTitle} Services | Sparklines Studio`,
    description: service.heroDescription,
    openGraph: {
      title: `${service.shortTitle} — Sparklines Studio`,
      description: service.tagline,
      images: [service.heroImage],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES_CATALOG.find(
    (s) => s.slug === slug || s.aliases.includes(slug)
  );

  if (!service) {
    notFound();
  }

  // Pull matching case studies from portfolioData
  const matchingCaseStudies = PORTFOLIO_DATA.filter((item) =>
    service.relatedCaseStudyIds.includes(item.id)
  );

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-orange-500/20 selection:text-orange-950 font-sans overflow-x-hidden">
      {/* Global Header Navigation */}
      <HeaderNavigation />

      <main className="relative z-10">
        {/* ============================================================== */}
        {/* 1. HERO SECTION                                                */}
        {/* ============================================================== */}
        <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 bg-[linear-gradient(180deg,#1e3a8a_0%,#2563eb_32%,#ffffff_85%)] text-white">
          {/* Ambient Lighting Bloom */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[550px] w-[1000px] -z-10 rounded-full bg-white/20 blur-[120px]" />

          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              {/* Category Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-white border border-white/25 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#f95721] animate-pulse" />
                <span className="tracking-wide uppercase font-mono text-[11px]">
                  {service.badge}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl font-sans leading-[1.06]">
                {service.titleFirst}{" "}
                <span className="font-editorial italic font-normal text-sky-200 tracking-normal">
                  {service.titleSecond}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mt-5 max-w-2xl text-base sm:text-lg lg:text-xl text-blue-50/90 leading-relaxed font-normal">
                {service.tagline}
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Link href="#contact" className="w-full sm:w-auto">
                  <button
                    type="button"
                    className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-[#f95721] hover:shadow-[0_6px_24px_rgba(249,87,33,0.4)] active:scale-95 group overflow-hidden cursor-pointer"
                  >
                    <span>Discuss This Scope</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </Link>

                <Link href="#case-studies" className="w-full sm:w-auto">
                  <button
                    type="button"
                    className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white/95 px-7 py-3.5 text-sm font-semibold text-zinc-900 shadow-sm border border-white/40 transition-all duration-300 hover:bg-white hover:shadow-md active:scale-95 cursor-pointer"
                  >
                    <span>View Proven Case Studies</span>
                  </button>
                </Link>
              </div>
            </div>

            {/* Hero Cover Card */}
            <div className="mt-14 sm:mt-18 relative mx-auto max-w-5xl rounded-3xl overflow-hidden border border-white/20 shadow-[0_24px_60px_rgba(0,0,0,0.25)] bg-black">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={service.heroImage}
                  alt={service.shortTitle}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div className="max-w-xl">
                    <span className="text-xs uppercase font-mono tracking-widest text-[#f95721] font-semibold">
                      Sparklines Standard
                    </span>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mt-1">
                      Engineered for high-performing, ambitious brands.
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-white/80 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/15 w-fit">
                    <Sparkles className="h-3.5 w-3.5 text-[#f95721]" />
                    <span>Validated Deliverables</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Metrics Strip */}
            <div className="mt-12 sm:mt-16 mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {service.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white p-5 sm:p-6 shadow-[0_6px_24px_rgba(0,0,0,0.06)] border border-zinc-200/80 text-zinc-950 flex flex-col justify-between"
                >
                  <span className="text-xs font-medium text-zinc-500 uppercase font-mono tracking-wider">
                    {stat.label}
                  </span>
                  <span className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold font-sans tracking-tight text-blue-600">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 2. STRATEGIC OVERVIEW & PHILOSOPHY                             */}
        {/* ============================================================== */}
        <section className="py-16 sm:py-24 bg-zinc-50 border-y border-zinc-200/80">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#f95721] font-mono">
                  Why It Matters
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-950 font-sans leading-tight">
                  High-leverage execution.{" "}
                  <span className="font-editorial italic font-normal text-zinc-800">
                    Measurable impact.
                  </span>
                </h2>
                <div className="mt-6 flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-sm text-zinc-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Dedicated senior specialists — no junior pass-offs</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Full creative and technical ownership under one roof</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Weekly transparent metrics and live production portals</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col gap-5 text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
                {service.overviewParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 3. CORE CAPABILITIES & DELIVERABLES MATRIX                     */}
        {/* ============================================================== */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
            <div className="max-w-2xl mb-12 sm:mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 font-mono">
                What We Deliver
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-950 font-sans">
                Core Capabilities &{" "}
                <span className="font-editorial italic font-normal">
                  Deliverables
                </span>
              </h2>
              <p className="mt-3 text-base sm:text-lg text-zinc-600">
                Every scope is backed by a structured list of tangible outcomes,
                assets, and production milestones.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {service.capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl p-6 sm:p-8 border border-zinc-200/90 bg-[#FBFBFC] hover:bg-white hover:border-zinc-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-zinc-200/70 text-zinc-800">
                        Pillar 0{idx + 1}
                      </span>
                      <Zap className="h-4 w-4 text-[#f95721]" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-zinc-950 tracking-tight">
                      {cap.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-zinc-600 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-zinc-200">
                    <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 font-mono">
                      Key Deliverables
                    </span>
                    <ul className="mt-3 grid grid-cols-1 gap-2.5">
                      {cap.deliverables.map((deliv, dIdx) => (
                        <li
                          key={dIdx}
                          className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-700"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 4. PROVEN 4-STEP EXECUTION PROCESS                             */}
        {/* ============================================================== */}
        <section className="py-16 sm:py-24 bg-zinc-950 text-white">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
            <div className="max-w-2xl mb-12 sm:mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#f95721] font-mono">
                Methodology
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans">
                Our 4-Phase{" "}
                <span className="font-editorial italic font-normal text-zinc-400">
                  Framework
                </span>
              </h2>
              <p className="mt-3 text-base text-zinc-400">
                Predictable, transparent execution from kickoff to performance scaling.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl p-6 sm:p-7 bg-zinc-900/80 border border-zinc-800 flex flex-col justify-between hover:border-zinc-700 transition-colors"
                >
                  <div>
                    <span className="text-3xl sm:text-4xl font-editorial italic font-bold text-blue-400">
                      {step.step}
                    </span>
                    <h3 className="mt-4 text-lg sm:text-xl font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-500">
                    <span>Phase 0{idx + 1}</span>
                    <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 5. TECH STACK & PRODUCTION GEAR                                */}
        {/* ============================================================== */}
        <section className="py-14 sm:py-20 bg-zinc-50 border-b border-zinc-200/80">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500 font-mono">
                Tooling & Infrastructure
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-zinc-950 font-sans">
                The Technologies We Rely On
              </h3>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
              {service.techStack.map((tool, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 rounded-full bg-white px-5 py-2.5 border border-zinc-200/90 shadow-xs hover:border-blue-400 hover:shadow-sm transition-all"
                >
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  <span className="text-xs sm:text-sm font-semibold text-zinc-800">
                    {tool.name}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase">
                    ({tool.category})
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 6. RELEVANT CASE STUDIES                                       */}
        {/* ============================================================== */}
        {matchingCaseStudies.length > 0 && (
          <section id="case-studies" className="py-16 sm:py-24 bg-white">
            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-12 sm:mb-16">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#f95721] font-mono">
                    Validated Portfolio
                  </span>
                  <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-950 font-sans">
                    Related Case{" "}
                    <span className="font-editorial italic font-normal">
                      Studies
                    </span>
                  </h2>
                </div>

                <Link
                  href="/work"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-zinc-700 hover:text-zinc-950 transition-colors"
                >
                  <span>Explore Full Portfolio</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {matchingCaseStudies.map((project) => (
                  <Link
                    key={project.id}
                    href={`/work/${project.id}`}
                    className="group flex flex-col rounded-3xl overflow-hidden border border-zinc-200/90 bg-white shadow-xs hover:shadow-xl hover:border-zinc-300 transition-all duration-300"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-zinc-900 border border-white/60">
                          {project.industry}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1 justify-between">
                      <div>
                        <span className="text-xs font-mono text-zinc-400">
                          {project.year} • {project.client}
                        </span>
                        <h4 className="mt-2 text-lg font-semibold text-zinc-950 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {project.title}
                        </h4>
                        <p className="mt-2 text-xs sm:text-sm text-zinc-600 line-clamp-2">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Primary metric snippet */}
                      <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] uppercase font-mono text-zinc-400 block">
                            {project.metrics[0].label}
                          </span>
                          <span className="text-base font-bold text-zinc-950">
                            {project.metrics[0].value}
                          </span>
                        </div>
                        <div className="h-8 w-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 group-hover:bg-[#f95721] group-hover:text-white transition-colors">
                          <ArrowUpRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ============================================================== */}
        {/* 7. FAQ ACCORDION                                               */}
        {/* ============================================================== */}
        <section className="py-16 sm:py-24 bg-zinc-50 border-t border-zinc-200/80">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#f95721] font-mono">
                Got Questions?
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950 font-sans">
                Frequently Asked{" "}
                <span className="font-editorial italic font-normal">
                  Questions
                </span>
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {service.faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group rounded-2xl bg-white p-5 sm:p-6 border border-zinc-200/90 shadow-xs open:shadow-md transition-all duration-200"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-zinc-900 text-base sm:text-lg">
                    <span>{faq.question}</span>
                    <ChevronDown className="h-4 w-4 text-zinc-500 transition-transform duration-200 group-open:rotate-180 shrink-0 ml-4" />
                  </summary>
                  <p className="mt-3.5 text-sm sm:text-base text-zinc-600 leading-relaxed font-normal pt-2 border-t border-zinc-100">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Proof Section */}
        <TestimonialsSection />

        {/* Contact Form Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <BrandFooterBanner />
    </div>
  );
}
