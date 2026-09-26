"use client";

import { useEffect, useRef } from "react";

export function OrangeBanner() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays reliably across all browsers (including iOS Safari and Chrome)
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Handle autoplay policy gracefully if needed
      });
    }
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-black leading-none">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-auto object-cover block"
      >
        <source
          src="https://res.cloudinary.com/vt5gqi1c/video/upload/v1790422620/From_Klickpin.com-_4855512095374493-pin-id-4855512095374493.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}

// Also export as VideoBanner for semantic clarity
export const VideoBanner = OrangeBanner;
