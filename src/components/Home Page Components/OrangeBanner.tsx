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
        preload="metadata"
        poster="https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_1920,so_1/v1790422620/From_Klickpin.com-_4855512095374493-pin-id-4855512095374493.jpg"
        className="w-full h-auto object-cover block"
      >
        <source
          src="https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_1920/v1790422620/From_Klickpin.com-_4855512095374493-pin-id-4855512095374493.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}

// Also export as VideoBanner for semantic clarity
export const VideoBanner = OrangeBanner;
