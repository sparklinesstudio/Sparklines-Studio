"use client";

import { motion } from "framer-motion";

export interface ClientLogo {
  name: string;
  src: string;
  invertOnLight?: boolean;
  heightClass?: string;
}

export const clientLogos: ClientLogo[] = [
  {
    name: "Fallow Restaurant",
    src: "https://fallowrestaurant.com/wp-content/uploads/2022/06/fallow.svg",
    invertOnLight: true,
    heightClass: "h-6 sm:h-7",
  },
  {
    name: "Oraanj Interiors",
    src: "https://cdn-ilcpnnh.nitrocdn.com/JyfVQegtpLSTYrrHtkmaOaslRMIUIjPC/assets/images/optimized/rev-9ace35d/www.oraanj-interiors.co.uk/wp-content/uploads/2024/09/logo.png",
    heightClass: "h-7 sm:h-8",
  },
  {
    name: "RLAD",
    src: "https://rlad.in/wp-content/uploads/al_opt_content/IMAGE/rlad.in/wp-content/uploads/2022/05/Rlad-logo-1.png.bv.webp",
    heightClass: "h-7 sm:h-8",
  },
  {
    name: "Meta Arch India",
    src: "https://static.wixstatic.com/media/ae4aba_4ea25ddceb8645b2ad9a5d1d1fcfb9b0~mv2.png/v1/fill/w_356,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Meta%20Arch%20Logo%20India.png",
    heightClass: "h-6 sm:h-7",
  },
  {
    name: "Brand Partner",
    src: "https://d3pc8mc492u0e.cloudfront.net/logo.svg",
    heightClass: "h-7 sm:h-8",
  },
];

export function ClientLogos() {
  return (
    <section className="border-y border-zinc-100 bg-white py-12 sm:py-14 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-8 sm:mb-10">
          Trusted by fast-growing startups and industry innovators
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 lg:gap-20">
          {clientLogos.map((logo, idx) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center p-2 cursor-pointer transition-transform"
            >
              {/* Image logo with consistent height and grayscale styling */}
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                className={`max-w-[140px] sm:max-w-[170px] w-auto object-contain transition-all duration-300 ${
                  logo.heightClass || "h-7 sm:h-8"
                } ${
                  logo.invertOnLight
                    ? "brightness-0 opacity-70 hover:opacity-100"
                    : "grayscale opacity-70 hover:grayscale-0 hover:opacity-100"
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
