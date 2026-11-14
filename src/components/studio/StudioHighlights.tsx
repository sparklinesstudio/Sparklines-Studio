"use client";

import { useEffect, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Asterisk } from "lucide-react";
import { HOUSE_OF_KOLAM_SLIDES } from "@/data/houseOfKolamData";
import { studioFilms } from "@/data/studioFilms";
import { AmbientVideo, useStudioMotion } from "./StudioMotion";
import "./highlights.css";

const caseStudyUrl = "/work/branding/house-of-kolam";
const services = [
  { title: "Video", text: "Brand stories, beautifully brought to life.", href: "/brand-film-production-kolkata", film: studioFilms[3], tilt: -3 },
  { title: "Social", text: "Small-screen stories with a bigger feeling.", href: "/social-media-video-production-kolkata", film: studioFilms[0], tilt: 2 },
  { title: "Motion", text: "Design, rhythm and ideas that move.", href: "/motion-graphics-agency-kolkata", film: studioFilms[5], tilt: -2 },
  { title: "SaaS video", text: "Make the value behind your product clear.", href: "/saas-video-agency-kolkata", film: studioFilms[4], tilt: 3 },
];

function RepellingCard({ children, tilt, className, scale = 1.055 }: { children: ReactNode; tilt: number; className: string; scale?: number }) {
  const { enabled } = useStudioMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 120, damping: 20, mass: 0.8 });
  const y = useSpring(pointerY, { stiffness: 120, damping: 20, mass: 0.8 });
  const translateX = useTransform(x, [-1, 1], [22, -22]);
  const translateY = useTransform(y, [-1, 1], [18, -18]);
  const rotate = useTransform(x, [-1, 1], [tilt - 1.5, tilt + 1.5]);
  useEffect(() => {
    if (!enabled) { pointerX.set(0); pointerY.set(0); }
  }, [enabled, pointerX, pointerY]);
  return <motion.article className={className} style={{ x: translateX, y: translateY, rotate }} whileHover={enabled ? { scale } : undefined} onPointerMove={event => {
    if (!enabled || event.pointerType !== "mouse" || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width - 0.5) * 2)));
    pointerY.set(Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height - 0.5) * 2)));
  }} onPointerLeave={() => { pointerX.set(0); pointerY.set(0); }}>{children}</motion.article>;
}

export function ServiceVideoCards() {
  return <section id="creative-services" className="service-video-section experience-section experience-pad">
    <div className="service-video-heading"><h2><span>From first idea</span>{" "}<em>to final frame.</em></h2></div>
    <div className="service-video-grid">{services.map((service,index) => <RepellingCard key={service.title} tilt={service.tilt} className={"service-video-card service-video-color-" + index}>
      <Link href={service.href} aria-label={"Explore " + service.title + " services"}>
        <div className="service-video-media"><AmbientVideo {...service.film} /><span className="service-video-open"><ArrowUpRight size={21} /></span></div>
        <div className="service-video-copy"><h3>{service.title}</h3><p>{service.text}</p></div>
      </Link>
    </RepellingCard>)}</div>
    <div className="service-video-discover"><Link href="/services"><span>Discover what we do</span><ArrowUpRight size={20} /></Link></div>
  </section>;
}

export function BrandingSpotlight({ listing = false, showEyebrow = true }: { listing?: boolean; showEyebrow?: boolean }) {
  return <section id="featured-branding" className={"branding-reference experience-section experience-pad " + (listing ? "branding-reference-listing" : "")}>
    <div className="branding-reference-heading">
      {showEyebrow && <p className="studio-kicker">HOUSE OF KOLAM / BRAND IDENTITY</p>}
      <h2><span>A tradition.</span>{" "}<em>A whole new expression.</em></h2>
      <p>A complete identity rooted in the art of Kolam. From the first mark to packaging, print and the spaces in between.</p>
    </div>
    <div className="branding-reference-stage">
      <RepellingCard tilt={-1.5} scale={1.015} className="branding-reference-main branding-repel-frame"><Link href={caseStudyUrl} className="branding-repel-link" aria-label="Explore the House of Kolam case study"><Image src={HOUSE_OF_KOLAM_SLIDES[0].url} alt="House of Kolam master brand identity" fill sizes="(max-width: 650px) 90vw, 80vw" /><span>House of Kolam <ArrowUpRight size={30} /></span></Link></RepellingCard>
      <RepellingCard tilt={-7} scale={1.045} className="branding-reference-detail branding-detail-packaging branding-repel-frame"><Link href={caseStudyUrl} className="branding-repel-link" aria-label="Explore House of Kolam packaging"><Image src={HOUSE_OF_KOLAM_SLIDES[17].url} alt="House of Kolam product jars and packaging" fill sizes="(max-width: 650px) 35vw, 24vw" /></Link></RepellingCard>
      <RepellingCard tilt={7} scale={1.045} className="branding-reference-detail branding-detail-type branding-repel-frame"><Link href={caseStudyUrl} className="branding-repel-link" aria-label="Explore House of Kolam typography"><Image src={HOUSE_OF_KOLAM_SLIDES[16].url} alt="Satoshi and Vintage Rhyme typography for House of Kolam" fill sizes="(max-width: 650px) 30vw, 22vw" /></Link></RepellingCard>
      <Asterisk className="branding-reference-spark" size={100} strokeWidth={1.2} aria-hidden="true" />
    </div>
    <div className="branding-reference-caption"><span>Brand strategy · Identity · Packaging · Motion</span><Link href={caseStudyUrl} className="about-reference-link"><span><ArrowRight size={20} /></span><span>Explore the case study</span></Link></div>
    <div className="branding-ribbon" aria-label="House of Kolam design details"><div className="branding-ribbon-track">{[0,1].map(copy => <div className="branding-ribbon-group" key={copy} aria-hidden={copy === 1}>{[7,8,16,17,21].map(index => <div key={index}><Image src={HOUSE_OF_KOLAM_SLIDES[index].url} alt={copy === 0 ? HOUSE_OF_KOLAM_SLIDES[index].title : ""} fill sizes="(max-width: 600px) 60vw, 28vw" /></div>)}</div>)}</div></div>
  </section>;
}
