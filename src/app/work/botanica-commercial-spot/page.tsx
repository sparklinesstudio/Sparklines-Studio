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

export default function BotanicaCommercialSpotPage() {
  const project = PORTFOLIO_DATA.find((p) => p.id === "botanica-commercial-spot");
  const prevProject = PORTFOLIO_DATA.find((p) => p.id === "haute-horlogerie-macro") || PORTFOLIO_DATA[0];
  const nextProject = PORTFOLIO_DATA.find((p) => p.id === "palm-residences-cinema") || PORTFOLIO_DATA[1];

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
          videoUrl="https://res.cloudinary.com/demo/video/upload/c_fill,ar_16:9,w_1280/snow_horses.mp4"
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
        {/* 4. CINEMA VIDEO PLAYER (16:9 WIDESCREEN 4K STREAM)               */}
        {/* ================================================================ */}
        <CaseStudyVideoPlayer
          videoUrl="https://res.cloudinary.com/demo/video/upload/c_fill,ar_16:9,w_1280/wave.mp4"
          posterImage={project.coverImage}
          title="Director's Cut Commercial Feature"
          caption="Commercial release mastered in 4K UHD, featuring custom sound engineering and anamorphic framing."
          technicalSpecs="4K UHD · 24.000 fps · Cooke Anamorphic 2x"
          orientation="16/9"
        />

        {/* ================================================================ */}
        {/* 5. BEHIND THE SCENES (BTS) PRODUCTION & GEAR DOCUMENTATION       */}
        {/* ================================================================ */}
        <CaseStudyBTS
          title="Behind The Scenes & Production Documentation"
          directorNote="Filmed over a 4-day intensive schedule. We deployed high-speed pursuit tracking rigs and calibrated color rendition to emphasize raw material textures."
          cameraSpecs="ARRI Alexa Mini LF (Open Gate 4.5K)"
          lensKit="Cooke Anamorphic /i Full Frame Plus 2x"
          lightingSetup="Aputure 1200d Pro + Astera Titan Pixel Tubes"
          colorScience="DaVinci Resolve Studio · ACES Color Managed"
          rawImage={project.coverImage}
          gradedImage={project.coverImage}
          btsGallery={[
            {
              image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop",
              caption: "On-set camera operator framing high-speed tracking sequence",
              role: "Principal Photography",
            },
            {
              image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop",
              caption: "Multi-point continuous lighting array setup on sound stage",
              role: "Lighting Rig",
            },
            {
              image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=800&auto=format&fit=crop",
              caption: "Director & DP reviewing color balance and raw monitor feeds",
              role: "Creative Direction",
            },
          ]}
        />

        {/* ================================================================ */}
        {/* 6. VERTICAL VIDEO REELS CAROUSEL (9:16 SOCIAL / TIKTOK / REELS)   */}
        {/* ================================================================ */}
        <CaseStudyMediaCarousel
          title="Vertical Social Cutdowns (9:16)"
          subtitle="Optimized portrait edits tailored for TikTok, Instagram Reels, and YouTube Shorts."
          orientation="vertical"
          items={[
            {
              id: "vert-1",
              type: "video",
              src: "https://res.cloudinary.com/demo/video/upload/c_fill,ar_9:16,w_720/wave.mp4",
              poster: project.coverImage,
              title: "Macro Sequence",
              tag: "TikTok Cut · 15s",
            },
            {
              id: "vert-2",
              type: "video",
              src: "https://res.cloudinary.com/demo/video/upload/c_fill,ar_9:16,w_720/snow_horses.mp4",
              poster: project.coverImage,
              title: "Action Teaser",
              tag: "Instagram Reel · 30s",
            },
            {
              id: "vert-3",
              type: "image",
              src: project.coverImage,
              title: "Hero Poster Frame",
              tag: "Key Visual Still",
            },
            {
              id: "vert-4",
              type: "video",
              src: "https://res.cloudinary.com/demo/video/upload/c_fill,ar_9:16,w_720/sea_turtle.mp4",
              poster: project.coverImage,
              title: "Cinematic Atmosphere",
              tag: "Shorts Edit · 20s",
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
