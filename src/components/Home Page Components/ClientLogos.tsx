"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface LogoItem {
  id: string;
  name: string;
  src?: string;
  href?: string;
}

export function ClientLogos() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Exactly preserving user's updated client logos
  const logos: LogoItem[] = [
    {
      id: "pepcopp",
      name: "Pep Copp",
      src: "https://www.pepcopp.co.in/images/logo-pepcopp.png",
      href: "https://www.pepcopp.co.in/",
    },
    {
      id: "oraanj",
      name: "Oraanj Interiors",
      src: "https://cdn-ilcpnnh.nitrocdn.com/JyfVQegtpLSTYrrHtkmaOaslRMIUIjPC/assets/images/optimized/rev-9ace35d/www.oraanj-interiors.co.uk/wp-content/uploads/2024/09/logo.png",
      href: "https://www.oraanj-interiors.co.uk",
    },
    {
      id: "smaaash",
      name: "Smaaash Entertainment",
      src: "https://smaaash-entertainment.in/assets/img/newsmaaashlogotwo.png.jpg",
      href: "https://smaaash-entertainment.in/",
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
    <section className="border-y border-zinc-100 bg-white py-10 sm:py-14 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-8 sm:mb-10">
          Trusted by fast-growing startups and industry innovators
        </p>

        {/* Brand Logos Row with Black & White Filter and Full Color on Hover */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          {logos.map((logo, idx) => {
            const hasError = Boolean(imageErrors[logo.id]);

            return (
              <motion.div
                key={logo.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ scale: 1.05 }}
                className="group flex items-center justify-center transition-all duration-300"
              >
                {logo.href && logo.href !== "#" ? (
                  <a
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center outline-none"
                  >
                    {renderLogoContent(logo, hasError, handleImageError)}
                  </a>
                ) : (
                  <div className="flex items-center justify-center">
                    {renderLogoContent(logo, hasError, handleImageError)}
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
  hasError: boolean,
  onError: (id: string) => void
) {
  if (hasError || !logo.src) {
    // Stylized typography brand mark fallback with grayscale-to-color hover
    return (
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-50 border border-zinc-200/50 shadow-xs grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300">
        <div className="h-2.5 w-2.5 rounded-full bg-[#f95721]" />
        <span className="text-sm sm:text-base font-bold tracking-tight text-zinc-800 group-hover:text-[#f95721] transition-colors">
          {logo.name}
        </span>
      </div>
    );
  }

  return (
    <div className="relative flex items-center justify-center h-8 sm:h-10 md:h-11 px-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo.src}
        alt={logo.name}
        onError={() => onError(logo.id)}
        className="h-7 sm:h-8 md:h-9 max-h-10 w-auto max-w-[130px] sm:max-w-[160px] object-contain transition-all duration-300 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:drop-shadow-sm"
        loading="lazy"
      />
    </div>
  );
}
