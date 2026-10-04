"use client";

import React, { useState } from "react";
import { notFound } from "next/navigation";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { HeaderNavigation } from "@/components/Home Page Components/HeaderNavigation";
import { TestimonialsSection } from "@/components/Home Page Components/TestimonialsSection";
import { ContactSection } from "@/components/Home Page Components/ContactSection";
import { BrandFooterBanner } from "@/components/Home Page Components/BrandFooterBanner";
import {
  CaseStudyHero,
  CaseStudyMetrics,
  CaseStudyVideoPlayer,
  CaseStudyBTS,
  CaseStudyTestimonial,
  CaseStudyMediaCarousel,
  CaseStudyImageSection,
  CaseStudyNav,
} from "@/components/Work Page Components/CaseStudy";

export default function SoraKyotoHospitalityPage() {
  const project = PORTFOLIO_DATA.find((p) => p.id === "sora-kyoto-hospitality");
  const prevProject = PORTFOLIO_DATA.find((p) => p.id === "palm-villas-dubai-seo") || PORTFOLIO_DATA[0];
  const nextProject = PORTFOLIO_DATA.find((p) => p.id === "contekst-architecture-seo") || PORTFOLIO_DATA[1];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-orange-500/20 selection:text-orange-950 font-sans overflow-x-hidden">
      <HeaderNavigation />

      <main>
        {/* ================================================================ */}
        {/* 1. HERO SECTION WITH CLIENT LOGO & MEDIA                         */}
        {/* ================================================================ */}
        <CaseStudyHero
          title={project.title}
          client={project.client}
          category={project.category}
          industry={project.industry}
          year={project.year}
          tagline={project.tagline}
          coverImage={project.coverImage}
          
          liveUrl="https://sparklines.studio"
        />

        {/* ================================================================ */}
        {/* 2. VALIDATED CLIENT METRICS STRIP                               */}
        {/* ================================================================ */}
        <CaseStudyMetrics metrics={project.metrics} />

        {/* ================================================================ */}
        {/* 3. STRATEGIC OVERVIEW & ROADMAP                                 */}
        {/* ================================================================ */}
        <section className="py-12 sm:py-16 bg-zinc-50/80 border-y border-zinc-200/80">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-4">
                <span className="font-mono text-xs font-semibold text-[#ea580c] uppercase tracking-widest">
                  Executive Brief
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950 font-sans">
                  {project.headline}
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-4 text-base sm:text-lg text-zinc-600 leading-relaxed font-sans">
                {project.overview.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        
        {/* ================================================================ */}
        {/* 4. HIGH-RESOLUTION ARTIFACTS & CAMPAIGN VISUALS                  */}
        {/* ================================================================ */}
        <CaseStudyImageSection
          title="Campaign Architecture & Deliverables"
          subtitle="High-fidelity creative executions deployed across web, mobile, and performance networks."
          image={project.coverImage}
          aspectRatio="16/9"
        />

        {/* ================================================================ */}
        {/* 5. MULTI-ASSET CAROUSEL (HORIZONTAL SIZE)                        */}
        {/* ================================================================ */}
        <CaseStudyMediaCarousel
          title="Campaign Stills & Strategy Ecosystem"
          subtitle="A multi-layered ecosystem engineered for high conversion velocity."
          orientation="horizontal"
          items={[
            {
              id: "horiz-1",
              type: "image",
              src: project.coverImage,
              title: "Primary Digital Asset",
              tag: "Performance Asset",
              caption: "High-impact visual execution tested across 12 target audiences.",
            },
            {
              id: "horiz-2",
              type: "image",
              src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
              title: "Analytics & Conversion Funnel",
              tag: "Growth Infrastructure",
              caption: "Real-time telemetry showing organic transaction surges.",
            },
            {
              id: "horiz-3",
              type: "video",
              src: "https://res.cloudinary.com/demo/video/upload/c_fill,ar_16:9,w_1280/snow_horses.mp4",
              poster: project.coverImage,
              title: "Motion Creative Cut",
              tag: "Video Showcase",
              caption: "Dynamic motion graphic tested against static baselines.",
            },
          ]}
        />
        

        {/* ================================================================ */}
        {/* 7. CLIENT TESTIMONIAL & VIDEO TESTIMONIAL                         */}
        {/* ================================================================ */}
        <CaseStudyTestimonial
          quote="Sparklines Studio demonstrated exceptional technical mastery and strategic clarity. Their work transformed our market position and drove unprecedented growth."
          author="Marcus Sterling"
          role="Chief Marketing Officer"
          company={project.client}
          avatarUrl="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
          videoTestimonialUrl="https://res.cloudinary.com/demo/video/upload/c_fill,ar_16:9,w_1280/sea_turtle.mp4"
          videoThumbnail={project.coverImage}
          videoDuration="1:30"
        />

        {/* ================================================================ */}
        {/* 8. PREVIOUS / NEXT CASE STUDY NAVIGATOR                          */}
        {/* ================================================================ */}
        <CaseStudyNav prevProject={prevProject} nextProject={nextProject} />

        {/* ================================================================ */}
        {/* 9. TESTIMONIALS & CONTACT SECTIONS                               */}
        {/* ================================================================ */}
        <TestimonialsSection />
        <ContactSection />
      </main>

      <BrandFooterBanner />
    </div>
  );
}
