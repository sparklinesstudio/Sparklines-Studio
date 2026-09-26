"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="relative bg-white py-24 sm:py-32 border-t border-zinc-200/60 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Heading and Contact Information */}
          <div className="lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-5xl sm:leading-tight"
            >
              Ready to grow your business?{" "}
              <span className="font-editorial italic font-normal text-zinc-800">
                Let's get started
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 text-base text-zinc-600 leading-relaxed"
            >
              Have a project in mind, need emergency engineering support, or looking to augment
              your current team? Drop us a note and we'll reply within 24 hours.
            </motion.p>

            <div className="mt-10 space-y-5 border-t border-zinc-100 pt-8">
              <div className="flex items-center gap-3 text-sm text-zinc-700">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 text-[#f95721] border border-orange-200/60">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[11px] text-zinc-400 font-medium">Direct Email</p>
                  <a
                    href="mailto:hello@sparklines.studio"
                    className="font-semibold text-zinc-900 hover:text-[#f95721] transition-colors"
                  >
                    hello@sparklines.studio
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-zinc-700">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 text-[#f95721] border border-orange-200/60">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[11px] text-zinc-400 font-medium">Direct Line</p>
                  <p className="font-semibold text-zinc-900">+1 (415) 890-3420</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-zinc-700">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 text-[#f95721] border border-orange-200/60">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[11px] text-zinc-400 font-medium">Headquarters</p>
                  <p className="font-semibold text-zinc-900">
                    San Francisco, CA • Distributed Worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl border border-zinc-200/90 bg-zinc-50/60 p-8 sm:p-10 shadow-sm"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900">Message Received!</h3>
                  <p className="mt-2 max-w-sm text-sm text-zinc-600">
                    Thank you for reaching out to Sparklines Studio. A senior partner will review
                    your brief and respond within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs font-semibold text-[#f95721] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="first-name"
                        className="text-xs font-semibold text-zinc-700"
                      >
                        First Name
                      </label>
                      <input
                        id="first-name"
                        type="text"
                        required
                        placeholder="Sarah"
                        className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-[#f95721] focus:outline-none focus:ring-2 focus:ring-[#f95721]/20 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="last-name"
                        className="text-xs font-semibold text-zinc-700"
                      >
                        Last Name
                      </label>
                      <input
                        id="last-name"
                        type="text"
                        required
                        placeholder="Jenkins"
                        className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-[#f95721] focus:outline-none focus:ring-2 focus:ring-[#f95721]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-zinc-700">
                      Work Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-[#f95721] focus:outline-none focus:ring-2 focus:ring-[#f95721]/20 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-zinc-700">
                      Project Details & Scope
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Tell us about your project, goals, timeline, and budget..."
                      className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-[#f95721] focus:outline-none focus:ring-2 focus:ring-[#f95721]/20 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#f95721] py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:bg-[#ea4b16] hover:shadow-xl hover:shadow-orange-500/30 active:scale-[0.99] disabled:opacity-70 cursor-pointer"
                  >
                    {loading ? (
                      <span className="inline-block animate-spin">⟳</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
