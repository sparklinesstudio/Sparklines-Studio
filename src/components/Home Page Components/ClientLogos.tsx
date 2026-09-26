"use client";

import { motion } from "framer-motion";

export function ClientLogos() {
  const logos = [
    {
      name: "FeedHive",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-emerald-500 fill-current">
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
      textColor: "text-zinc-800",
    },
    {
      name: "MONSTER",
      icon: (
        <div className="flex gap-0.5 items-center">
          <div className="h-4 w-1 bg-amber-500 rounded-xs transform -rotate-12" />
          <div className="h-4 w-1 bg-amber-500 rounded-xs" />
          <div className="h-4 w-1 bg-amber-500 rounded-xs transform rotate-12" />
        </div>
      ),
      textColor: "text-zinc-900 font-extrabold tracking-wider",
    },
    {
      name: "Spotify",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#1db954] fill-current">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
        </svg>
      ),
      textColor: "text-zinc-800",
    },
    {
      name: "HYPERDRIVE",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      textColor: "text-zinc-800 font-bold tracking-tight",
    },
    {
      name: "LUMEN",
      icon: (
        <div className="h-3.5 w-3.5 rounded-full border-2 border-orange-500 bg-orange-100" />
      ),
      textColor: "text-zinc-800 font-semibold tracking-widest",
    },
  ];

  return (
    <section className="border-y border-zinc-100 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-zinc-400 mb-8">
          Trusted by fast-growing startups and industry innovators
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 lg:gap-20 opacity-80 transition-opacity hover:opacity-100">
          {logos.map((logo, idx) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer transition-colors"
            >
              {logo.icon}
              <span className={`text-base font-semibold ${logo.textColor}`}>
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
