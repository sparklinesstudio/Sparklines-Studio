"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Play, CheckCircle2 } from "lucide-react";

export interface CaseStudyTestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
  clientLogo?: string;
  videoTestimonialUrl?: string;
  videoThumbnail?: string;
  videoDuration?: string;
}

export function CaseStudyTestimonial({
  quote,
  author,
  role,
  company,
  avatarUrl,
  clientLogo,
  videoTestimonialUrl,
  videoThumbnail,
  videoDuration = "1:45",
}: CaseStudyTestimonialProps) {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
    <section className="relative py-14 sm:py-18 bg-gradient-to-b from-zinc-50/90 via-white to-zinc-50/70 border-y border-zinc-200/80 overflow-hidden">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-1/2 left-10 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-blue-600/[0.05] blur-[140px]" />
      <div className="pointer-events-none absolute top-1/2 right-10 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-orange-600/[0.05] blur-[140px]" />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="rounded-3xl bg-white border border-zinc-200/90 p-8 sm:p-12 lg:p-16 shadow-[0_4px_24px_rgba(0,0,0,0.03)] relative overflow-hidden">
          {/* Top specular line */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Client Logo & Quote */}
            <div className={videoTestimonialUrl ? "lg:col-span-7" : "lg:col-span-12 max-w-4xl mx-auto"}>
              {/* Client Logo & Verified Badge */}
              <div className="flex items-center justify-between gap-4 mb-6">
                {clientLogo ? (
                  <div className="relative h-7 w-28 opacity-85">
                    <Image
                      src={clientLogo}
                      alt={company}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-600" />
                    <span className="font-semibold text-sm text-zinc-900 tracking-wide">
                      {company}
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-xs font-medium">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Verified Executive Endorsement</span>
                </div>
              </div>

              {/* Quote Mark */}
              <Quote className="h-8 w-8 text-[#ea580c] opacity-80 mb-4" />

              {/* Quote text */}
              <p className="text-xl sm:text-2xl md:text-3xl text-zinc-900 font-editorial italic font-normal leading-relaxed tracking-tight">
                &ldquo;{quote}&rdquo;
              </p>

              {/* Author Row */}
              <div className="mt-6 pt-6 border-t border-zinc-100 flex items-center gap-4">
                {avatarUrl ? (
                  <div className="relative h-12 w-12 rounded-full overflow-hidden border border-zinc-200 shadow-xs">
                    <Image
                      src={avatarUrl}
                      alt={author}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-12 w-12 rounded-full bg-zinc-950 text-white flex items-center justify-center font-bold text-sm">
                    {author.charAt(0)}
                  </div>
                )}

                <div>
                  <h4 className="text-base font-semibold text-zinc-950 font-sans">
                    {author}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-500 font-sans">
                    {role}, <span className="font-medium text-zinc-700">{company}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Optional Video Testimonial Player */}
            {videoTestimonialUrl && (
              <div className="lg:col-span-5">
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-black border border-zinc-200 shadow-lg group">
                  {isPlayingVideo ? (
                    <video
                      src={videoTestimonialUrl}
                      autoPlay
                      controls
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <>
                      {videoThumbnail ? (
                        <Image
                          src={videoThumbnail}
                          alt={`${author} Testimonial Video`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="h-full w-full bg-zinc-900 flex items-center justify-center" />
                      )}

                      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4">
                        <button
                          type="button"
                          onClick={() => setIsPlayingVideo(true)}
                          className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-zinc-950 shadow-xl transition-transform duration-300 hover:scale-110 hover:bg-[#ea580c] hover:text-white cursor-pointer"
                        >
                          <Play className="h-6 w-6 translate-x-0.5 fill-current" />
                        </button>
                        <p className="mt-3 text-xs font-semibold text-white tracking-wide">
                          Watch Video Testimonial ({videoDuration})
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
