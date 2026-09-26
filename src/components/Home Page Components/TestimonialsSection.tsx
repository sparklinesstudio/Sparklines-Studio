"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// =========================================================================
// TESTIMONIALS DATA
// =========================================================================

const testimonials = [
  {
    id: 1,
    text: "Sparklines Studio completely transformed our client acquisition pipeline. We went from relying on unpredictable referrals to booking 3-4 high-budget residential renovations every month through local Google search and Instagram ads. The caliber of clients finding our portfolio now is on another level.",
    name: "Claire Vance",
    role: "Principal Designer, Vance Interiors",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150",
    initials: null,
    signature: "Claire V.",
    rotation: "-rotate-2",
  },
  {
    id: 2,
    text: "Before working with Sparklines Studio, our design firm struggled to get found in our target affluent zip codes. Within 4 months of their local SEO and AI search optimization, we started ranking #1 for luxury interior designers in our city.",
    name: "Marcus Sterling",
    role: "Founder, Studio Sterling Design",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150",
    initials: null,
    signature: "Marcus S.",
    rotation: "rotate-2",
  },
  {
    id: 3,
    text: "Their Google Ads and Meta campaigns are laser-focused on homeowners with high renovation budgets. We stopped getting tire-kickers and started getting serious inquiries for full-house interior transformations.",
    name: "Elena Rostova",
    role: "Creative Director, Maison Rostova",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150",
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
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
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
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150",
    initials: null,
    signature: "Amelia B.",
    rotation: "-rotate-1",
  },
];

// =========================================================================
// MAIN COMPONENT: TestimonialsSection (Social Proof)
// =========================================================================

export function TestimonialsSection() {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="bg-gradient-to-br from-[#e0f2fe] via-[#f0f9ff] to-[#dbeafe] py-14 sm:py-20 md:py-24 overflow-hidden flex flex-col justify-center scroll-mt-20"
    >
      {/* Header Section */}
      <div className="text-center w-full max-w-4xl mx-auto px-4 mb-10 md:mb-14">
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-editorial font-bold text-slate-900 mb-4 tracking-tight leading-[1.12]">
          <span className="text-blue-700 italic font-normal">Social proof?</span> Here.
        </h3>
        <p className="text-slate-600 text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto font-sans leading-relaxed">
          Trusted by independent interior designers, luxury studios, and architectural firms.
        </p>

        {/* Buttons Styled in Current Website's Signature Style */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full px-4 sm:px-0">
          {/* Primary: Crystal Glass Pill */}
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

          {/* Secondary: Light Crystal Glass Pill */}
          <a href="mailto:hello@sparklines.studio" className="w-full sm:w-auto">
            <button
              type="button"
              className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs sm:text-sm font-semibold text-zinc-900 shadow-[0_4px_16px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.9)] border border-zinc-200/90 transition-all duration-300 hover:bg-zinc-950 hover:text-white hover:border-zinc-950 hover:shadow-[0_6px_20px_rgba(0,0,0,0.18)] active:scale-95 group overflow-hidden cursor-pointer"
            >
              <span className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
              <span>Email Us Directly</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500 transition-transform duration-200 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </a>
        </div>
      </div>

      {/* Infinite Slider Section */}
      <div className="relative w-full flex items-center">
        <motion.div
          className="flex gap-4 sm:gap-6 md:gap-8 w-max px-4 py-8 items-center cursor-grab active:cursor-grabbing"
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
              className={`bg-white p-5 sm:p-6 md:p-8 w-[280px] sm:w-[350px] md:w-[400px] h-[320px] sm:h-[350px] md:h-[400px] shrink-0 shadow-xl flex flex-col justify-between ${testimonial.rotation} transition-transform hover:rotate-0 hover:z-10`}
              style={{
                borderBottomRightRadius: index % 2 === 0 ? "2rem" : "0",
                borderTopRightRadius: index % 2 !== 0 ? "2rem" : "0",
              }}
            >
              <p className="text-slate-600 leading-relaxed mb-4 md:mb-8 text-sm md:text-base overflow-y-auto font-sans">
                "{testimonial.text}"
              </p>

              {/* Bottom Content Layout */}
              <div className="flex items-center justify-between mt-auto gap-2">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  {testimonial.avatar ? (
                    <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-blue-50 shrink-0">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center border-2 border-blue-50 shrink-0 text-sm md:text-base">
                      {testimonial.initials}
                    </div>
                  )}

                  <div className="overflow-hidden min-w-0">
                    <h4 className="text-slate-800 font-bold text-sm truncate font-sans">
                      {testimonial.name}
                    </h4>
                    <p className="text-slate-500 text-xs truncate font-sans">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div
                  className="text-lg sm:text-xl md:text-2xl text-slate-700 opacity-80 shrink-0 ml-auto whitespace-nowrap"
                  style={{ fontFamily: "'Caveat', 'Dancing Script', 'Playfair Display', cursive, serif" }}
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
