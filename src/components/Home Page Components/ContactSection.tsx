"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, ChevronDown, AlertCircle } from "lucide-react";

const STUDIO_SERVICES = [
  "Video Production",
  "Pay-per-click Advertising (PPC)",
  "Social Media Marketing",
  "Search Engine Optimization (SEO)",
  "Website Design & Development",
  "Branding & Visual Identity",
  "Full Growth Retainer / Custom Scope",
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    website: "",
    service: STUDIO_SERVICES[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      // 1. Try submitting via the Next.js API route first
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          number: "",
          website: "",
          service: STUDIO_SERVICES[0],
          message: "",
        });
      } else {
        // Fallback: direct Web3Forms client-side call if API route has issue
        const directKey =
          process.env.NEXT_PUBLIC_FORM_ACCESS_KEY ||
          "1cbfea18-60e8-44fe-b580-5d84c46310b2";

        const directRes = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: directKey,
            name: formData.name,
            phone: formData.number,
            website: formData.website || "Not provided",
            service: formData.service,
            message: formData.message || `Interest in ${formData.service}`,
            subject: `New Lead: ${formData.name} - ${formData.service}`,
          }),
        });

        const directData = await directRes.json();
        if (directData.success) {
          setSubmitted(true);
        } else {
          setErrorMessage(
            data.message || directData.message || "Failed to submit. Please contact us directly."
          );
        }
      }
    } catch (err: unknown) {
      console.error("Form submit error:", err);
      // Fallback try
      try {
        const directKey =
          process.env.NEXT_PUBLIC_FORM_ACCESS_KEY ||
          "1cbfea18-60e8-44fe-b580-5d84c46310b2";

        const directRes = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: directKey,
            name: formData.name,
            phone: formData.number,
            website: formData.website || "Not provided",
            service: formData.service,
            message: formData.message || `Interest in ${formData.service}`,
            subject: `New Lead: ${formData.name} - ${formData.service}`,
          }),
        });
        const directData = await directRes.json();
        if (directData.success) {
          setSubmitted(true);
          return;
        }
      } catch {
        // ignore
      }
      setErrorMessage("Something went wrong while sending your request. Please call or email us directly.");
    } finally {
      setLoading(false);
    }
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
              className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-5xl sm:leading-tight font-sans"
            >
              Ready to grow your business?{" "}
              <span className="font-editorial font-normal text-zinc-800">
                Let&apos;s get started
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 text-base text-zinc-600 leading-relaxed"
            >
              Have a project in mind, need high-converting creative, or looking to scale your brand?
              Fill out the form and our senior partners will respond within 24 hours.
            </motion.p>

            <div className="mt-10 space-y-5 border-t border-zinc-100 pt-8">
              <div className="flex items-center gap-3 text-sm text-zinc-700">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 text-[#f95721] border border-orange-200/60">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[11px] text-zinc-400 font-medium">Direct Email</p>
                  <a
                    href="mailto:sparklinestudio.agency@gmail.com"
                    className="font-semibold text-zinc-900 hover:text-[#f95721] transition-colors break-all"
                  >
                    sparklinestudio.agency@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-zinc-700">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 text-[#f95721] border border-orange-200/60">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[11px] text-zinc-400 font-medium">Direct Line</p>
                  <div className="flex flex-col sm:flex-row sm:gap-3">
                    <a
                      href="tel:9641861932"
                      className="font-semibold text-zinc-900 hover:text-[#f95721] transition-colors"
                    >
                      +91 9641861932
                    </a>
                    <span className="hidden sm:inline text-zinc-300">•</span>
                    <a
                      href="tel:8101520236"
                      className="font-semibold text-zinc-900 hover:text-[#f95721] transition-colors"
                    >
                      +91 8101520236
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-zinc-700">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 text-[#f95721] border border-orange-200/60">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[11px] text-zinc-400 font-medium">Headquarters</p>
                  <p className="font-semibold text-zinc-900">
                    Kolkata, West Bengal, India
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
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4 animate-bounce">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900">Message Received!</h3>
                  <p className="mt-2 max-w-sm text-sm text-zinc-600">
                    Thank you for reaching out to Sparklines Studio. A senior partner will review
                    your project details and contact you within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="relative inline-flex items-center gap-2 rounded-full bg-zinc-950/95 px-6 py-2.5 mt-6 text-xs font-semibold text-white shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.3)] border border-white/15 transition-all duration-300 hover:bg-[#f95721] hover:border-[#f95721]/50 hover:shadow-[0_6px_20px_rgba(249,87,33,0.35)] active:scale-95 group overflow-hidden cursor-pointer"
                  >
                    <span className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                    <span>Send another inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name and Number in 2 Columns */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="form-name"
                        className="text-xs font-semibold text-zinc-700 flex items-center justify-between"
                      >
                        <span>Name <span className="text-[#f95721]">*</span></span>
                      </label>
                      <input
                        id="form-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-[#f95721] focus:outline-none focus:ring-2 focus:ring-[#f95721]/20 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="form-number"
                        className="text-xs font-semibold text-zinc-700 flex items-center justify-between"
                      >
                        <span>Number / WhatsApp <span className="text-[#f95721]">*</span></span>
                      </label>
                      <input
                        id="form-number"
                        name="number"
                        type="tel"
                        required
                        value={formData.number}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-[#f95721] focus:outline-none focus:ring-2 focus:ring-[#f95721]/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Website */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-website" className="text-xs font-semibold text-zinc-700 flex items-center justify-between">
                      <span>Website / Social URL</span>
                      <span className="text-[11px] text-zinc-400 font-normal">Optional</span>
                    </label>
                    <input
                      id="form-website"
                      name="website"
                      type="text"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://yourbrand.com or @instagram"
                      className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-[#f95721] focus:outline-none focus:ring-2 focus:ring-[#f95721]/20 transition-all"
                    />
                  </div>

                  {/* Service Dropdown */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-service" className="text-xs font-semibold text-zinc-700">
                      Service Required <span className="text-[#f95721]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="form-service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full appearance-none rounded-xl border border-zinc-300 bg-white px-4 py-3 pr-10 text-sm text-zinc-900 focus:border-[#f95721] focus:outline-none focus:ring-2 focus:ring-[#f95721]/20 transition-all cursor-pointer font-medium"
                      >
                        {STUDIO_SERVICES.map((srv) => (
                          <option key={srv} value={srv}>
                            {srv}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-zinc-500">
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  {/* Project Details / Scope Note */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-message" className="text-xs font-semibold text-zinc-700 flex items-center justify-between">
                      <span>Project Details</span>
                      <span className="text-[11px] text-zinc-400 font-normal">Optional</span>
                    </label>
                    <textarea
                      id="form-message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Brief overview of goals, timeline, or current challenges..."
                      className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-[#f95721] focus:outline-none focus:ring-2 focus:ring-[#f95721]/20 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="relative w-full inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950/95 py-3.5 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.3)] border border-white/15 transition-all duration-300 hover:bg-[#f95721] hover:border-[#f95721]/50 hover:shadow-[0_6px_20px_rgba(249,87,33,0.35)] active:scale-95 disabled:opacity-70 cursor-pointer group overflow-hidden"
                  >
                    <span className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                    {loading ? (
                      <span className="inline-block animate-spin text-base">⟳</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
