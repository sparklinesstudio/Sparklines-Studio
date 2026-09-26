"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Play, X, Star } from "lucide-react";

export interface VideoTestimonial {
  id: string;
  title: string;
  projectType: string;
  location: string;
  clientName: string;
  videoUrl: string;
  summary: string;
}

export function VideoTestimonialsSection() {
  const [activeModalVideo, setActiveModalVideo] = useState<VideoTestimonial | null>(null);

  // 2-column video testimonials data for Interior Design
  const videoTestimonials: VideoTestimonial[] = [
    {
      id: "interior-video-1",
      title: "Modern Minimalist Villa Transformation",
      projectType: "4-BHK Villa Interior & Architecture",
      location: "Bespoke Residence • 4,200 sq.ft",
      clientName: "David & Elena Henderson",
      videoUrl:
        "https://res.cloudinary.com/vt5gqi1c/video/upload/v1790422620/From_Klickpin.com-_4855512095374493-pin-id-4855512095374493.mp4",
      summary:
        "Complete overhaul from bare-shell to a serene, light-filled contemporary sanctuary featuring custom fluted timber joinery and concealed ambient lighting.",
    },
    {
      id: "interior-video-2",
      title: "Luxury Penthouse & Modular Kitchen Walkthrough",
      projectType: "Penthouse Styling & Modular Millwork",
      location: "Skyline Residence • 3,600 sq.ft",
      clientName: "Marcus & Sarah Vance",
      videoUrl:
        "https://res.cloudinary.com/vt5gqi1c/video/upload/v1790422620/From_Klickpin.com-_4855512095374493-pin-id-4855512095374493.mp4",
      summary:
        "Seamless integration of open-plan living, Italian quartz kitchen island, and custom acoustic ceiling panels tailored for modern entertaining.",
    },
  ];

  // 3 Big Orange Stat Blocks matching reference image
  const stats = [
    {
      value: "500+",
      unit: "homes",
      label: "crafted & delivered with turnkey precision",
    },
    {
      value: "100%",
      unit: "custom",
      label: "bespoke millwork & architectural detailing",
    },
    {
      value: "4.9★",
      unit: "rating",
      label: "average homeowner review across 12+ years",
    },
  ];

  // 3 Text Testimonial Quotes matching reference image
  const textQuotes = [
    {
      quote:
        "Sparklines completely reimagined our apartment layout. The custom modular kitchen and Italian marble joinery are of museum quality. Every guest is blown away.",
      author: "Edward Parrales",
      source: "Luxury Apartment Owner",
    },
    {
      quote:
        "From initial 3D walkthroughs to the final handover, the process was effortless. They finished 10 days ahead of schedule with zero unexpected expenses.",
      author: "Priya & Rohan Mehta",
      source: "Contemporary Villa Project",
    },
    {
      quote:
        "The lighting design and bespoke acoustic wood paneling turned our living room into a serene retreat. The team handled every contractor with meticulous care.",
      author: "Alistair Crawford",
      source: "Duplex Penthouse Renovation",
    },
  ];

  // Avatar photos for scattered social proof header
  const avatars = [
    { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80", className: "top-0 left-6 sm:left-12 h-12 w-12 sm:h-14 sm:w-14" },
    { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80", className: "-top-3 left-28 sm:left-44 h-11 w-11 sm:h-12 sm:w-12 hidden sm:block" },
    { src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=160&q=80", className: "bottom-1 left-4 sm:left-16 h-12 w-12 sm:h-14 sm:w-14" },
    { src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80", className: "bottom-0 left-24 sm:left-48 h-10 w-10 sm:h-12 sm:w-12" },
    { src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80", className: "top-1 right-28 sm:right-44 h-11 w-11 sm:h-12 sm:w-12 hidden sm:block" },
    { src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80", className: "top-0 right-6 sm:right-14 h-12 w-12 sm:h-14 sm:w-14" },
    { src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=160&q=80", className: "bottom-1 right-24 sm:right-48 h-11 w-11 sm:h-12 sm:w-12" },
    { src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=160&q=80", className: "bottom-0 right-6 sm:right-16 h-12 w-12 sm:h-14 sm:w-14" },
  ];

  return (
    <section className="relative bg-zinc-100/70 py-16 sm:py-24 border-b border-zinc-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================== */}
        {/* PART 1: 2-COLUMN VIDEO TESTIMONIALS (No slider, No text on poster) */}
        {/* ============================================================== */}
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#f95721] mb-2 block">
            Client Stories & Walkthroughs
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-5xl font-editorial">
            Interior Transformations in the Spotlight
          </h2>
          <p className="mt-3 max-w-2xl text-base text-zinc-600">
            Tour our completed residential and penthouse projects and discover how our bespoke design process transforms daily living.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {videoTestimonials.map((item) => (
            <div
              key={item.id}
              className="flex flex-col rounded-3xl bg-white p-4 sm:p-5 border border-zinc-200/80 shadow-md transition-all duration-300 hover:shadow-xl hover:border-orange-200"
            >
              {/* Video Poster: PURE VIDEO WITH CENTER PLAY BUTTON ONLY (No text on top!) */}
              <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-zinc-950 shadow-inner">
                {/* Paused Video Poster (no autoplay) */}
                <video
                  src={item.videoUrl}
                  loop
                  muted
                  playsInline
                  autoPlay={false}
                  preload="metadata"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Subtle dark vignette to make the play button pop */}
                <div className="pointer-events-none absolute inset-0 bg-black/25 transition-opacity group-hover:bg-black/15" />

                {/* Central Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => setActiveModalVideo(item)}
                    aria-label={`Play walkthrough of ${item.title}`}
                    className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-orange-500/30 active:scale-95 cursor-pointer"
                  >
                    <Play className="h-6 w-6 sm:h-7 sm:w-7 fill-[#f95721] text-[#f95721] translate-x-0.5 transition-transform duration-200 hover:scale-110" />
                  </button>
                </div>
              </div>

              {/* Card Meta Content (Cleanly placed below the video poster) */}
              <div className="mt-4 px-2 pb-2">
                <div className="flex items-center justify-between text-xs font-semibold text-zinc-500 mb-1.5">
                  <span className="text-[#f95721] font-bold">{item.projectType}</span>
                  <span>{item.location}</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-950 font-editorial">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {item.summary}
                </p>
                <p className="mt-3 text-xs font-semibold text-zinc-800">
                  Homeowner: <span className="font-normal text-zinc-600">{item.clientName}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ============================================================== */}
        {/* PART 2: SHOWCASE IMAGE BELOW VIDEO TESTIMONIALS */}
        {/* ============================================================== */}
        <div className="mt-14 sm:mt-18 overflow-hidden rounded-3xl border border-zinc-200/90 shadow-xl bg-white p-3 sm:p-4">
          <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full overflow-hidden rounded-2xl bg-zinc-100">
            <Image
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80"
              alt="Bespoke luxury interior living space crafted by Sparklines Studio"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">
              <span className="rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-zinc-950 shadow-sm">
                Featured Architecture
              </span>
              <p className="mt-2 text-sm sm:text-lg font-bold drop-shadow-sm font-editorial">
                The Horizon Residence • Bespoke Walnut Millwork & Open-Plan Lounge
              </p>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* PART 3: SOCIAL PROOF HEADER WITH SCATTERED AVATARS (Matching uploaded image) */}
        {/* ============================================================== */}
        <div className="relative mt-20 sm:mt-28 py-10 sm:py-16 text-center">
          {/* Scattered Floating Avatars matching the image */}
          <div className="pointer-events-none absolute inset-0">
            {avatars.map((avatar, i) => (
              <div
                key={i}
                className={`absolute overflow-hidden rounded-full border-2 border-white shadow-md ${avatar.className}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={avatar.src}
                  alt="Client avatar"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Centered Heading */}
          <div className="relative z-10 mx-auto max-w-2xl px-4">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-5xl font-editorial leading-tight">
              Join hundreds of happy families living in spaces they adore
            </h2>
            <div className="mt-6 flex justify-center">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-6 py-3 text-xs font-bold text-white shadow-md transition-all duration-200 hover:bg-[#f95721] hover:shadow-orange-500/25 active:scale-95 cursor-pointer"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* PART 4: 3 BIG ORANGE STAT CARDS (Matching uploaded image) */}
        {/* ============================================================== */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col justify-between rounded-3xl bg-[#f95721] p-8 sm:p-10 text-white shadow-xl min-h-[240px] sm:min-h-[280px]"
            >
              <div>
                <div className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none">
                  {stat.value}
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-1 opacity-95">
                  {stat.unit}
                </div>
              </div>
              <p className="mt-8 text-sm sm:text-base font-medium opacity-90 leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ============================================================== */}
        {/* PART 5: 3 TEXT TESTIMONIAL QUOTES (Matching uploaded image) */}
        {/* ============================================================== */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {textQuotes.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-3xl bg-white p-8 sm:p-10 border border-zinc-200/80 shadow-sm transition-all duration-300 hover:shadow-md hover:border-orange-200"
            >
              {/* 5 Orange Stars */}
              <div>
                <div className="flex items-center gap-1 text-[#f95721] mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#f95721] text-[#f95721]" />
                  ))}
                </div>

                <blockquote className="text-sm sm:text-base leading-relaxed text-zinc-800 font-medium">
                  "{item.quote}"
                </blockquote>
              </div>

              {/* Author & Source */}
              <div className="mt-8 pt-4 border-t border-zinc-100">
                <p className="text-sm font-bold text-zinc-950 font-editorial">
                  {item.author}
                </p>
                <p className="text-xs text-zinc-500 font-medium mt-0.5">
                  {item.source}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {activeModalVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            onClick={() => setActiveModalVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4 text-white">
                <div>
                  <h3 className="text-base font-bold font-editorial">{activeModalVideo.title}</h3>
                  <p className="text-xs text-zinc-400">
                    {activeModalVideo.projectType} • {activeModalVideo.clientName}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModalVideo(null)}
                  className="rounded-full bg-zinc-800 p-2 text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="relative aspect-[16/9] w-full bg-black">
                <video
                  src={activeModalVideo.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  className="h-full w-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
