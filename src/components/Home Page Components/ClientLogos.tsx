"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface LogoItem {
  id: string;
  name: string;
  src?: string;
  href?: string;
  isTextFallback?: boolean;
}

export function ClientLogos() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const logos: LogoItem[] = [
    {
      id: "dreamson",
      name: "Pep Copp Logo",
      src: "https://www.pepcopp.co.in/assets/timer.png",
      href: "https://www.pepcopp.co.in/",
    },
    {
      id: "oraanj",
      name: "Oraanj Interiors",
      src: "https://cdn-ilcpnnh.nitrocdn.com/JyfVQegtpLSTYrrHtkmaOaslRMIUIjPC/assets/images/optimized/rev-9ace35d/www.oraanj-interiors.co.uk/wp-content/uploads/2024/09/logo.png",
      href: "https://www.oraanj-interiors.co.uk",
    },
    {
      id: "lumba",
      name: "Lumba World",
      src: "https://www.lumbaworld.com/images/logo.png",
      href: "https://www.lumbaworld.com/",
      isTextFallback: true,
    },
    {
      id: "meta-arch",
      name: "Meta Arch India",
      src: "https://static.wixstatic.com/media/ae4aba_4ea25ddceb8645b2ad9a5d1d1fcfb9b0~mv2.png/v1/fill/w_356,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Meta%20Arch%20Logo%20India.png",
      href: "#",
    },
    {
      id: "cloudfront-logo",
      name: "Partner Studio",
      src: "https://d3pc8mc492u0e.cloudfront.net/logo.svg",
      href: "#",
    },
  ];

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="border-y border-zinc-100 bg-white py-14 sm:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-10 sm:mb-14">
          Trusted by fast-growing startups and industry innovators
        </p>

        {/* Brand Logos Row */}
        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 lg:gap-20">
          {logos.map((logo, idx) => {
            const hasError = Boolean(imageErrors[logo.id]);
            const showFallback = Boolean(hasError || (!logo.src && logo.isTextFallback));

            return (
              <motion.div
                key={logo.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.08 }}
                className="group flex items-center justify-center transition-all duration-300"
              >
                {logo.href && logo.href !== "#" ? (
                  <a
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center outline-none"
                  >
                    {renderLogoContent(logo, showFallback, handleImageError)}
                  </a>
                ) : (
                  <div className="flex items-center justify-center">
                    {renderLogoContent(logo, showFallback, handleImageError)}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function renderLogoContent(
  logo: LogoItem,
  showFallback: boolean,
  onError: (id: string) => void
) {
  if (showFallback || !logo.src) {
    // Stylized typography brand mark fallback
    return (
      <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-200/60 shadow-xs group-hover:border-orange-300 group-hover:bg-white transition-all">
        <div className="h-3 w-3 rounded-full bg-[#f95721]" />
        <span className="text-lg sm:text-xl font-bold tracking-tight text-zinc-900 group-hover:text-[#f95721] transition-colors">
          {logo.name}
        </span>
      </div>
    );
  }

  return (
    <div className="relative flex items-center justify-center h-12 sm:h-16 md:h-18 px-2 transition-transform duration-300">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo.src}
        alt={logo.name}
        onError={() => onError(logo.id)}
        className="h-10 sm:h-14 md:h-16 w-auto max-w-[190px] sm:max-w-[240px] object-contain transition-all duration-300 opacity-80 group-hover:opacity-100 group-hover:drop-shadow-md"
        loading="lazy"
      />
    </div>
  );
}
