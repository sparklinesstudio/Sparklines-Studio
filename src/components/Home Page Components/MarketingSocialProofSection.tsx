"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export interface TextTestimonial {
  id: string;
  quote: string;
  author: string;
  companyOrRole: string;
  rating: number;
}

export function MarketingSocialProofSection() {
  const [activeReviewIndex, setActiveReviewIndex] = useState(1); // Middle card focused by default

  const reviews: TextTestimonial[] = [
    {
      id: "review-1",
      quote:
        "Finally, an agency that actually understands performance marketing and brand aesthetics equally. Sparklines drove over 18,000 qualified signups in our first launch month.",
      author: "Marcus Chen",
      companyOrRole: "VP of Growth, Omniverse",
      rating: 5,
    },
    {
      id: "review-2",
      quote:
        "Sparklines Studio completely redefined our brand identity and marketing funnel. Their creative direction and data-driven campaigns scaled our inbound pipeline by 340% in just 90 days.",
      author: "Edward Parrales",
      companyOrRole: "Founder & CEO, Horizon Media",
      rating: 5,
    },
    {
      id: "review-3",
      quote:
        "The creative quality and analytical rigor of the Sparklines team is unmatched. They don't just generate views — they build loyal customer communities that convert.",
      author: "Elena Rostova",
      companyOrRole: "Head of Marketing, Lumina Health",
      rating: 5,
    },
    {
      id: "review-4",
      quote:
        "Working with Sparklines felt like plugging a world-class growth and design department directly into our team. Truly transformational results.",
      author: "Liam O'Connor",
      companyOrRole: "Co-Founder, Veloce Tech",
      rating: 5,
    },
  ];

  // Floating avatars around the top header matching reference design
  const floatingAvatars = [
    {
      id: "av-1",
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
      alt: "Client portrait",
      pos: "top-2 left-6 sm:left-16",
      size: "h-14 w-14 sm:h-16 sm:w-16",
      delay: 0,
    },
    {
      id: "av-2",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
      alt: "Founder portrait",
      pos: "top-10 left-2 sm:left-4",
      size: "h-12 w-12 sm:h-14 sm:w-14",
      delay: 0.5,
    },
    {
      id: "av-3",
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&h=200&q=80",
      alt: "Creative lead portrait",
      pos: "bottom-12 left-4 sm:left-8",
      size: "h-12 w-12 sm:h-14 sm:w-14",
      delay: 1,
    },
    {
      id: "av-4",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
      alt: "Client portrait",
      pos: "bottom-4 left-24 sm:left-36",
      size: "h-12 w-12 sm:h-14 sm:w-14",
      delay: 1.5,
    },
    {
      id: "av-5",
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80",
      alt: "Product lead portrait",
      pos: "top-4 right-16 sm:right-28",
      size: "h-12 w-12 sm:h-14 sm:w-14",
      delay: 0.8,
    },
    {
      id: "av-6",
      src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80",
      alt: "Executive portrait",
      pos: "top-8 right-4 sm:right-8",
      size: "h-12 w-12 sm:h-14 sm:w-14",
      delay: 0.3,
    },
    {
      id: "av-7",
      src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&h=200&q=80",
      alt: "Partner portrait",
      pos: "bottom-10 right-20 sm:right-32",
      size: "h-12 w-12 sm:h-14 sm:w-14",
      delay: 1.2,
    },
    {
      id: "av-8",
      src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&h=200&q=80",
      alt: "Brand lead portrait",
      pos: "bottom-4 right-4 sm:right-8",
      size: "h-12 w-12 sm:h-14 sm:w-14",
      delay: 1.7,
    },
  ];

  const handlePrevReview = () => {
    setActiveReviewIndex((prev) => (prev > 0 ? prev - 1 : reviews.length - 1));
  };

  const handleNextReview = () => {
    setActiveReviewIndex((prev) => (prev < reviews.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="relative bg-white py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* PART 1: Top Header with Scattered Floating Avatars & CTA  */}
        {/* ========================================================= */}
        <div className="relative mx-auto max-w-4xl py-12 sm:py-16 text-center">
          {/* Scattered Floating Round Avatars */}
          <div className="pointer-events-none absolute inset-0 hidden md:block">
            {floatingAvatars.map((av) => (
              <motion.div
                key={av.id}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: av.delay,
                }}
                className={`absolute ${av.pos}`}
              >
                <div
                  className={`overflow-hidden rounded-full border-2 border-white shadow-md ${av.size}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={av.src}
                    alt={av.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Heading in Playfair Display serif matching screenshot */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-3xl font-normal tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl font-editorial leading-tight sm:leading-snug"
          >
            Join hundreds of high-growth brands dominating their market
          </motion.h2>

          {/* Centered Black Pill CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex justify-center"
          >
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-zinc-800 hover:shadow-lg active:scale-95 cursor-pointer"
            >
              Get Started
            </Link>
          </motion.div>
        </div>

        {/* ========================================================= */}
        {/* PART 2: Three Vibrant Orange Big Metric Cards            */}
        {/* ========================================================= */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: 60+ clients */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-between rounded-[32px] sm:rounded-[36px] bg-[#f95721] p-8 sm:p-10 md:p-12 text-white shadow-xl shadow-orange-500/10 min-h-[340px] sm:min-h-[380px]"
          >
            <div>
              <div className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none">
                60+
              </div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mt-1 leading-none">
                clients
              </div>
            </div>

            <div className="mt-8 text-base sm:text-lg font-medium text-white/95">
              served worldwide
            </div>
          </motion.div>

          {/* Card 2: 13,000+ traffic */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-between rounded-[32px] sm:rounded-[36px] bg-[#f95721] p-8 sm:p-10 md:p-12 text-white shadow-xl shadow-orange-500/10 min-h-[340px] sm:min-h-[380px]"
          >
            <div>
              <div className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none">
                13k+
              </div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mt-1 leading-none">
                traffic
              </div>
            </div>

            <div className="mt-8 text-base sm:text-lg font-medium text-white/95">
              monthly organic generated
            </div>
          </motion.div>

          {/* Card 3: 2M+ views */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col justify-between rounded-[32px] sm:rounded-[36px] bg-[#f95721] p-8 sm:p-10 md:p-12 text-white shadow-xl shadow-orange-500/10 min-h-[340px] sm:min-h-[380px]"
          >
            <div>
              <div className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none">
                2M+
              </div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mt-1 leading-none">
                views
              </div>
            </div>

            <div className="mt-8 text-base sm:text-lg font-medium text-white/95">
              created across campaigns
            </div>
          </motion.div>
        </div>

        {/* ========================================================= */}
        {/* PART 3: Text Testimonials Carousel with Blurred Sides     */}
        {/* ========================================================= */}
        <div className="mt-20 sm:mt-28 relative">
          {/* Header Controls for Carousel */}
          <div className="flex items-center justify-between mb-8 px-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#f95721]">
                Verified Client Feedback
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 font-editorial mt-1">
                Words from our partners
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrevReview}
                aria-label="Previous review"
                className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-orange-300 text-orange-600 transition-all duration-200 hover:bg-orange-500 hover:text-white hover:border-orange-500 active:scale-95 cursor-pointer shadow-xs"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={handleNextReview}
                aria-label="Next review"
                className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-orange-300 text-orange-600 transition-all duration-200 hover:bg-orange-500 hover:text-white hover:border-orange-500 active:scale-95 cursor-pointer shadow-xs"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* 3-Card Stage: Center focused, Left and Right blurred */}
          <div className="relative overflow-hidden py-4">
            <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
              {[-1, 0, 1].map((offset) => {
                const reviewIndex =
                  (activeReviewIndex + offset + reviews.length) % reviews.length;
                const review = reviews[reviewIndex];
                const isCenter = offset === 0;

                return (
                  <motion.div
                    key={`${review.id}-${offset}`}
                    layout
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    onClick={() => {
                      if (!isCenter) {
                        setActiveReviewIndex(reviewIndex);
                      }
                    }}
                    className={`relative flex-shrink-0 rounded-[28px] sm:rounded-[36px] bg-[#f6f5f1] p-6 sm:p-10 md:p-12 transition-all duration-500 ${
                      isCenter
                        ? "w-[88vw] sm:w-[560px] md:w-[680px] shadow-xl border border-zinc-200/80 filter-none opacity-100 scale-100 z-10 cursor-default"
                        : "hidden md:block w-[320px] lg:w-[380px] shadow-sm border border-zinc-200/40 filter blur-[3px] opacity-35 scale-[0.94] cursor-pointer hover:opacity-60"
                    }`}
                  >
                    {/* Star Rating at top */}
                    <div className="flex items-center justify-center gap-1 mb-6 text-[#f95721]">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 sm:h-5 sm:w-5 fill-[#f95721] text-[#f95721]"
                        />
                      ))}
                    </div>

                    {/* Testimonial Quote Text */}
                    <blockquote className="text-center text-sm sm:text-base md:text-lg font-medium leading-relaxed text-zinc-900 line-clamp-4 sm:line-clamp-none">
                      "{review.quote}"
                    </blockquote>

                    {/* Author & Company / Source */}
                    <div className="mt-8 text-center">
                      <p className="text-base sm:text-lg font-bold text-zinc-950">
                        {review.author}
                      </p>
                      <p className="text-xs sm:text-sm text-zinc-500 font-medium mt-0.5">
                        {review.companyOrRole}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Dots Pagination */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveReviewIndex(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === activeReviewIndex
                    ? "w-8 bg-[#f95721]"
                    : "w-2 bg-zinc-300 hover:bg-zinc-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
