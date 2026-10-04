"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize2, Film } from "lucide-react";

export interface CaseStudyVideoPlayerProps {
  videoUrl: string;
  posterImage?: string;
  title?: string;
  caption?: string;
  technicalSpecs?: string;
  orientation?: "16/9" | "9/16";
  autoPlay?: boolean;
}

export function CaseStudyVideoPlayer({
  videoUrl,
  posterImage,
  title,
  caption,
  technicalSpecs = "4K UHD · 24fps · Anamorphic 2.39:1",
  orientation = "16/9",
  autoPlay = false,
}: CaseStudyVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoRef.current.requestFullscreen();
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration || 1;
    setProgress((current / duration) * 100);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    videoRef.current.currentTime = ratio * (videoRef.current.duration || 1);
  };

  const isVertical = orientation === "9/16";

  return (
    <section className="relative py-12 sm:py-16 bg-zinc-950 text-white overflow-hidden">
      {/* Ambient background illumination */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/[0.08] blur-[150px]" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-[500px] w-[500px] rounded-full bg-orange-600/[0.08] blur-[150px]" />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* Header if provided */}
        {(title || caption) && (
          <div className="mb-8 max-w-3xl">
            <div className="flex items-center gap-2 mb-2">
              <Film className="h-4 w-4 text-[#ea580c]" />
              <span className="font-mono text-xs font-semibold tracking-widest text-[#ea580c] uppercase">
                Cinema Premiere
              </span>
            </div>
            {title && (
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white font-sans">
                {title}
              </h2>
            )}
            {caption && (
              <p className="mt-2 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
                {caption}
              </p>
            )}
          </div>
        )}

        {/* Video Container */}
        <div className={`mx-auto ${isVertical ? "max-w-md" : "max-w-5xl"}`}>
          <div
            className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-black shadow-[0_20px_60px_rgba(0,0,0,0.5)] ${
              isVertical ? "aspect-[9/16]" : "aspect-[16/9]"
            }`}
          >
            {/* Specular highlight */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent z-10" />

            <video
              ref={videoRef}
              src={videoUrl}
              poster={posterImage}
              playsInline
              loop
              muted={isMuted}
              onTimeUpdate={handleTimeUpdate}
              onClick={togglePlay}
              className="h-full w-full object-cover cursor-pointer"
            />

            {/* Play Button Overlay (when paused) */}
            {!isPlaying && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] transition-all cursor-pointer z-20"
              >
                <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white/95 text-zinc-950 shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#ea580c] hover:text-white">
                  <Play className="h-7 w-7 translate-x-0.5 fill-current" />
                </div>
              </div>
            )}

            {/* Custom Cinema Player Bottom Bar */}
            <div className="absolute inset-x-0 bottom-0 z-30 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* Progress Scrubber Bar */}
              <div
                onClick={handleSeek}
                className="relative h-1.5 w-full rounded-full bg-white/20 cursor-pointer overflow-hidden mb-3"
              >
                <div
                  className="h-full bg-gradient-to-r from-[#ea580c] to-blue-500 rounded-full transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Controls Row */}
              <div className="flex items-center justify-between text-xs text-zinc-300 font-sans">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  >
                    {isPlaying ? (
                      <Pause className="h-4 w-4 fill-current" />
                    ) : (
                      <Play className="h-4 w-4 fill-current translate-x-0.5" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={toggleMute}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  >
                    {isMuted ? (
                      <VolumeX className="h-4 w-4" />
                    ) : (
                      <Volume2 className="h-4 w-4" />
                    )}
                  </button>

                  <span className="font-mono text-[11px] text-zinc-400">
                    {technicalSpecs}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={toggleFullscreen}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <Maximize2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
