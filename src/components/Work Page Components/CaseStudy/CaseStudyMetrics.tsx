"use client";

import React from "react";
import { motion } from "framer-motion";
import { PortfolioMetric } from "@/data/portfolioData";

export interface CaseStudyMetricsProps {
  metrics: PortfolioMetric[];
  title?: string;
}

export function CaseStudyMetrics({ metrics, title = "Validated Impact" }: CaseStudyMetricsProps) {
  return (
    <section className="py-10 sm:py-12 bg-white">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-200/90 rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
        >
          {metrics.map((metric, idx) => (
            <div
              key={`metric-${idx}`}
              className="flex flex-col justify-center bg-white p-5 sm:p-6 lg:p-8"
            >
              <div className="flex items-center gap-1.5 mb-1">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    idx % 2 === 0 ? "bg-blue-600" : "bg-[#ea580c]"
                  }`}
                />
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-400 font-medium">
                  {title} {idx + 1}
                </span>
              </div>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-950 font-editorial italic">
                {metric.value}
              </p>
              <p className="mt-1 text-xs sm:text-sm text-zinc-500 font-medium leading-snug font-sans">
                {metric.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
