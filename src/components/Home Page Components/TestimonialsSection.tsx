"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Star, ArrowUpRight, Sparkles } from "lucide-react";

// =========================================================================
// TESTIMONIALS DATA
// =========================================================================

const testimonials = [
  {
    id: 1,
    text: "Sparklines Studio completely transformed our client acquisition pipeline. We went from relying on unpredictable referrals to booking 3-4 high-budget residential renovations every month through local Google search and Instagram ads. The caliber of clients finding our portfolio now is on another level.",
    name: "Claire Vance",
    role: "Principal Designer, Vance Interiors",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
    initials: null,
    signature: "Claire V.",
    rotation: "-rotate-2",
  },
  {
    id: 2,
    text: "Before working with Sparklines Studio, our design firm struggled to get found in our target affluent zip codes. Within 4 months of their local SEO and AI search optimization, we started ranking #1 for luxury interior designers in our city.",
    name: "Marcus Sterling",
    role: "Founder, Studio Sterling Design",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200",
    initials: null,
    signature: "Marcus S.",
    rotation: "rotate-2",
  },
  {
    id: 3,
    text: "Their Google Ads and Meta campaigns are laser-focused on homeowners with high renovation budgets. We stopped getting tire-kickers and started getting serious inquiries for full-house interior transformations.",
    name: "Elena Rostova",
    role: "Creative Director, Maison Rostova",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
    initials: null,
    signature: "Elena R.",
    rotation: "-rotate-1",
  },
  {
    id: 4,
    text: "We were skeptical about digital marketing because our business had always been word-of-mouth. Sparklines Studio built an acquisition engine that preserves our luxury boutique reputation while keeping our project pipeline full.",
    name: "Sarah Jenkins",
    role: "Lead Designer, Jenkins Living",
    avatar: null,
    initials: "SJ",
    signature: "Sarah J.",
    rotation: "rotate-1",
  },
  {
    id: 5,
    text: "I was most impressed by their understanding of luxury design aesthetics. They know how to present high-end portfolios, speak to affluent homeowners, and convert visual interest into signed design agreements.",
    name: "Kristy Jones",
    role: "Founder, Jones & Co. Spatial Design",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200",
    initials: null,
    signature: "Kristy J.",
    rotation: "-rotate-2",
  },
  {
    id: 6,
    text: "They’re on top of the work, consistently deliver qualified client inquiries, and make our studio feel like a priority. Our firm has never had a stronger project pipeline.",
    name: "Austin OeDell",
    role: "Studio Director, OeDell Architecture",
    avatar: null,
    initials: "AO",
    signature: "Austin",
    rotation: "rotate-2",
  },
  {
    id: 7,
    text: "Our inquiries from affluent clients looking for complete home redesigns doubled within the first quarter. Sparklines Studio is easily the best marketing investment our design studio has ever made.",
    name: "Amelia Bronze",
    role: "Founder, Atelier Bronze Design",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200",
    initials: null,
    signature: "Amelia B.",
    rotation: "-rotate-1",
  },
];

// =========================================================================
// MAIN COMPONENT: TestimonialsSection
// =========================================================================

export function TestimonialsSection() {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="relative bg-zinc-50/70 py-20 sm:py-28 lg:py-32 border-t border-zinc-200/60 overflow-hidden flex flex-col justify-center scroll-mt-24"
    >
      {/* Background Soft Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[400px] w-full max-w-5xl rounded-full bg-gradient-to-tr from-orange-100/40 via-blue-50/30 to-amber-50/30 blur-3xl opacity-70" />
      </div>

      {/* Header Section */}
      <div className="text-center w-full max-w-4xl mx-auto px-4 sm:px-6 mb-12 md:mb-16">
        {/* Subtle Eyebrow Label */}
        <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/80 px-3.5 py-1 text-xs font-semibold text-[#f95721] border border-orange-200/60 mb-4">
          <Sparkles className="h-3 w-3 text-[#f95721]" />
          Verified Client Proof
        </div>

        {/* Section Heading with Editorial Typography */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 leading-[1.12]">
          Social proof?{" "}
          <span className="font-editorial italic font-normal text-zinc-900">
            Here.
          </span>
        </h2>

        {/* Supporting Subtitle */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-zinc-600 max-w-2xl mx-auto font-normal leading-relaxed">
          Trusted by independent interior designers, luxury studios, and architectural firms to scale prestige client pipelines.
        </p>

        {/* Unified Navbar-Styled Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full">
          {/* Primary Crystal Pill Button: Book a Call */}
          <Link href="#contact" className="w-full sm:w-auto">
            <button
              type="button"
              className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950/95 px-7 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.3)] border border-white/15 transition-all duration-300 hover:bg-[#f95721] hover:border-[#f95721]/50 hover:shadow-[0_6px_20px_rgba(249,87,33,0.35)] active:scale-95 group overflow-hidden cursor-pointer"
            >
              <span className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              <span>Book a Call</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </Link>

          {/* Secondary Light Crystal Pill Button: Email Us Directly */}
          <a href="mailto:hello@sparklines.studio" className="w-full sm:w-auto">
            <button
              type="button"
              className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs sm:text-sm font-semibold text-zinc-900 shadow-[0_4px_16px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.9)] border border-zinc-200/90 transition-all duration-300 hover:bg-zinc-50 hover:border-zinc-300 hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] active:scale-95 group overflow-hidden cursor-pointer"
            >
              <span className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
              <span>Email Us Directly</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </a>
        </div>
      </div>

      {/* Infinite Horizontal Card Marquee Slider */}
      <div className="relative w-full flex items-center overflow-hidden py-6">
        {/* Soft Vignette Edge Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 sm:w-32 md:w-48 bg-gradient-to-r from-zinc-50 via-zinc-50/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 sm:w-32 md:w-48 bg-gradient-to-l from-zinc-50 via-zinc-50/80 to-transparent" />

        <motion.div
          className="flex gap-5 sm:gap-7 md:gap-8 w-max px-4 py-8 items-center cursor-grab active:cursor-grabbing"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 55,
            repeat: Infinity,
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className={`bg-white p-6 sm:p-7 md:p-8 w-[285px] sm:w-[350px] md:w-[410px] h-[330px] sm:h-[360px] md:h-[390px] shrink-0 border border-zinc-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex flex-col justify-between ${testimonial.rotation} transition-all duration-300 hover:rotate-0 hover:scale-[1.03] hover:shadow-2xl hover:border-orange-300 hover:z-30`}
              style={{
                borderBottomRightRadius: index % 2 === 0 ? "2.5rem" : "0.75rem",
                borderTopRightRadius: index % 2 !== 0 ? "2.5rem" : "0.75rem",
                borderTopLeftRadius: "1rem",
                borderBottomLeftRadius: "1rem",
              }}
            >
              <div>
                {/* 5-Star Rating Row */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial Quote Text */}
                <p className="text-zinc-700 leading-relaxed text-xs sm:text-sm md:text-[15px] font-normal line-clamp-6">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Bottom Client Details Row */}
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-zinc-100 gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  {testimonial.avatar ? (
                    <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden shrink-0 border border-zinc-200">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-orange-100 text-[#f95721] font-bold flex items-center justify-center border border-orange-200 shrink-0 text-xs md:text-sm">
                      {testimonial.initials}
                    </div>
                  )}

                  <div className="overflow-hidden min-w-0">
                    <h4 className="text-zinc-950 font-bold text-xs sm:text-sm truncate">
                      {testimonial.name}
                    </h4>
                    <p className="text-zinc-500 text-[11px] sm:text-xs truncate">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Handcrafted Signature */}
                <div
                  className="font-editorial italic text-base sm:text-lg md:text-xl text-zinc-800/80 shrink-0 ml-auto whitespace-nowrap select-none"
                  style={{ fontFamily: "'Caveat', 'Playfair Display', Georgia, cursive, serif" }}
                >
                  {testimonial.signature}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
