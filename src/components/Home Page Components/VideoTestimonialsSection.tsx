"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, X, Volume2, VolumeX } from "lucide-react";

export interface VideoTestimonial {
  id: string;
  title: string;
  clientName: string;
  clientRole: string;
  company: string;
  tag: string;
  videoUrl: string;
  thumbnail?: string;
  quote: string;
}

export function VideoTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeModalVideo, setActiveModalVideo] = useState<VideoTestimonial | null>(null);
  const [isPlayingInline, setIsPlayingInline] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  // Placeholder video list - easily replace videoUrl or add more videos later!
  const testimonials: VideoTestimonial[] = [
    {
      id: "video-1",
      title: "How Sparklines helped us 10x our conversion in 60 days",
      clientName: "David Henderson",
      clientRole: "Founder & CEO",
      company: "Veloce Technologies",
      tag: "Founder Spotlight",
      videoUrl:
        "https://res.cloudinary.com/vt5gqi1c/video/upload/v1790422620/From_Klickpin.com-_4855512095374493-pin-id-4855512095374493.mp4",
      quote: "The speed of execution and attention to visual detail was unmatched.",
    },
    {
      id: "video-2",
      title: "Scaling mission-critical architecture with zero downtime",
      clientName: "Sarah Jenkins",
      clientRole: "Chief Technology Officer",
      company: "Aura Creative",
      tag: "Client Feature",
      videoUrl:
        "https://res.cloudinary.com/vt5gqi1c/video/upload/v1790422620/From_Klickpin.com-_4855512095374493-pin-id-4855512095374493.mp4",
      quote: "They delivered our flagship platform ahead of schedule with 100/100 Core Web Vitals.",
    },
    {
      id: "video-3",
      title: "From initial prototype to $2M+ Series A product launch",
      clientName: "Marcus Vance",
      clientRole: "Head of Product Design",
      company: "Lumina Labs",
      tag: "Case Study",
      videoUrl:
        "https://res.cloudinary.com/vt5gqi1c/video/upload/v1790422620/From_Klickpin.com-_4855512095374493-pin-id-4855512095374493.mp4",
      quote: "Working with Sparklines felt like having elite in-house staff engineers on day one.",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  const handlePlayVideo = (item: VideoTestimonial) => {
    setActiveModalVideo(item);
  };

  return (
    <section className="relative bg-white py-16 sm:py-24 border-b border-zinc-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header Row: Title on Left, Circular Arrows on Right */}
        <div className="flex items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#f95721] mb-2 block">
              Video Testimonials
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-5xl font-editorial">
              Sparklines in the spotlight
            </h2>
          </div>

          {/* Navigation Arrows matching reference design */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous video testimonial"
              className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-orange-300 text-orange-600 transition-all duration-200 hover:bg-orange-500 hover:text-white hover:border-orange-500 active:scale-95 cursor-pointer shadow-xs"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next video testimonial"
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
              transform: `translateX(-${currentIndex * (typeof window !== "undefined" && window.innerWidth < 640 ? 88 : 72)}%)`,
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
                  {/* Video Container Card */}
                  <div className="group relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-3xl border border-zinc-200/90 bg-zinc-950 shadow-xl">
                    {/* Background Preview Video (muted loop preview) */}
                    <video
                      src={item.videoUrl}
                      loop
                      muted
                      playsInline
                      autoPlay
                      preload="metadata"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85"
                    />

                    {/* Gradient Overlay for Cinematic Depth */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

                    {/* Top Tag & Company Badge */}
                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between z-10">
                      <span className="rounded-full bg-white/90 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-zinc-900 shadow-sm">
                        {item.tag}
                      </span>
                      <span className="text-xs font-medium text-white/90 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                        {item.company}
                      </span>
                    </div>

                    {/* Central Play Button matching reference image */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <button
                        type="button"
                        onClick={() => handlePlayVideo(item)}
                        aria-label={`Play video testimonial from ${item.clientName}`}
                        className="group/btn flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-orange-500/30 active:scale-95 cursor-pointer"
                      >
                        <Play className="h-6 w-6 sm:h-7 sm:w-7 fill-[#f95721] text-[#f95721] translate-x-0.5 transition-transform duration-200 group-hover/btn:scale-110" />
                      </button>
                    </div>

                    {/* Bottom Info Bar */}
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-10 text-white">
                      <p className="text-base sm:text-xl font-bold leading-snug drop-shadow-sm mb-1">
                        "{item.quote}"
                      </p>
                      <p className="text-xs sm:text-sm text-zinc-300 font-medium">
                        {item.clientName} • <span className="text-orange-400">{item.clientRole}</span>
                      </p>
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
              aria-label={`Go to slide ${i + 1}`}
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
                  className="rounded-full bg-zinc-800 p-2 text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors"
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
