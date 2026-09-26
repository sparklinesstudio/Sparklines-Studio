"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";

export interface VideoTestimonial {
  id: string;
  clientName: string;
  clientRole: string;
  company: string;
  posterUrl: string; // High-res poster/thumbnail image shown before playing
  videoUrl: string; // Video URL played in modal when tapped
}

export function VideoTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeModalVideo, setActiveModalVideo] = useState<VideoTestimonial | null>(null);

  // Reliable dummy posters for studio broadcast / founder interview cards
  const testimonials: VideoTestimonial[] = [
    {
      id: "testimonial-1",
      clientName: "David Henderson",
      clientRole: "Founder & CEO",
      company: "Veloce Technologies",
      posterUrl:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
      videoUrl:
        "https://res.cloudinary.com/vt5gqi1c/video/upload/v1790422620/From_Klickpin.com-_4855512095374493-pin-id-4855512095374493.mp4",
    },
    {
      id: "testimonial-2",
      clientName: "Sarah Jenkins",
      clientRole: "Chief Technology Officer",
      company: "Aura Creative",
      posterUrl:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
      videoUrl:
        "https://res.cloudinary.com/vt5gqi1c/video/upload/v1790422620/From_Klickpin.com-_4855512095374493-pin-id-4855512095374493.mp4",
    },
    {
      id: "testimonial-3",
      clientName: "Marcus Vance",
      clientRole: "Head of Product Design",
      company: "Lumina Labs",
      posterUrl:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
      videoUrl:
        "https://res.cloudinary.com/vt5gqi1c/video/upload/v1790422620/From_Klickpin.com-_4855512095374493-pin-id-4855512095374493.mp4",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  const handleOpenVideo = (item: VideoTestimonial) => {
    setActiveModalVideo(item);
  };

  return (
    <section className="relative bg-white py-16 sm:py-24 border-b border-zinc-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header: Professional Title on Left, Circular Arrows on Right */}
        <div className="flex items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#f95721] mb-2 block">
              Client Stories & Impact
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-5xl font-editorial">
              Our Client Testimonials
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 max-w-xl">
              Hear directly from the founders and marketing leaders who scale and transform their
              brands with Sparklines Studio.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-orange-300 text-orange-600 transition-all duration-200 hover:bg-orange-500 hover:text-white hover:border-orange-500 active:scale-95 cursor-pointer shadow-xs"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-orange-300 text-orange-600 transition-all duration-200 hover:bg-orange-500 hover:text-white hover:border-orange-500 active:scale-95 cursor-pointer shadow-xs"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>
        </div>

        {/* Video Cards Carousel with peeking next slide */}
        <div className="relative overflow-visible">
          <div
            className="flex transition-transform duration-500 ease-out gap-6 sm:gap-8"
            style={{
              transform: `translateX(-${
                currentIndex *
                (typeof window !== "undefined" && window.innerWidth < 640 ? 88 : 72)
              }%)`,
            }}
          >
            {testimonials.map((item, idx) => {
              const isActive = idx === currentIndex;

              return (
                <div
                  key={item.id}
                  className={`relative flex-shrink-0 transition-all duration-500 ${
                    isActive
                      ? "w-[88vw] sm:w-[680px] md:w-[780px] opacity-100 scale-100"
                      : "w-[88vw] sm:w-[680px] md:w-[780px] opacity-80 scale-[0.98]"
                  }`}
                >
                  {/* Clean Poster Card: purely the poster picture and centered play button */}
                  <div
                    onClick={() => handleOpenVideo(item)}
                    className="group relative aspect-[16/10] sm:aspect-[16/9] w-full cursor-pointer overflow-hidden rounded-3xl border border-zinc-200/90 bg-zinc-900 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-orange-300"
                  >
                    {/* Dummy Poster Image with fallback */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.posterUrl}
                      alt={`Testimonial poster - ${item.clientName}`}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Subtle Cinematic Vignette for Depth */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 transition-opacity duration-300 group-hover:opacity-80" />

                    {/* Central Play Button matching reference image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-orange-500/35 active:scale-95">
                        <Play className="h-6 w-6 sm:h-7 sm:w-7 fill-[#f95721] text-[#f95721] translate-x-0.5 transition-transform duration-200" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Dots Pagination */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === currentIndex ? "w-8 bg-[#f95721]" : "w-2 bg-zinc-300 hover:bg-zinc-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Video Player Modal */}
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
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4 text-white">
                <div>
                  <h3 className="text-base font-bold">{activeModalVideo.clientName}</h3>
                  <p className="text-xs text-zinc-400">
                    {activeModalVideo.clientRole}, {activeModalVideo.company}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModalVideo(null)}
                  className="rounded-full bg-zinc-800 p-2 text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close video"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Video Player */}
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
