"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Asterisk, Globe } from "lucide-react";
import { studioFilms } from "@/data/studioFilms";
import { HOUSE_OF_KOLAM_SLIDES } from "@/data/houseOfKolamData";
import { AmbientVideo, MotionSwitch, useStudioMotion } from "./StudioMotion";
import "./hero.css";
import "./about.css";
import "./films.css";
import { BrandingSpotlight } from "./StudioHighlights";

function HeroSpark() {
  return <svg viewBox="0 0 150 190" fill="none" aria-hidden="true">
    <path d="M49 143C33 148 29 169 19 163L9 155C0 153 1 168 12 176C30 193 49 172 58 162M95 143C113 144 114 160 125 157C137 154 146 163 140 170C130 184 114 176 103 163" stroke="#f45c2a" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M49 143C33 148 29 169 19 163L9 155M95 143C113 144 114 160 125 157C137 154 146 163 140 170" stroke="#151515" strokeWidth="3" strokeLinecap="round"/>
    <path d="M75 13C98 35 85 47 103 62L110 44C128 70 139 95 127 118C119 139 97 153 76 151C43 153 20 130 21 104C20 85 26 68 38 51L43 77C59 62 45 37 61 28L68 53C78 42 77 27 75 13Z" fill="#ff7a0a" stroke="#f45c2a" strokeWidth="13" strokeLinejoin="round"/>
    <path d="M75 13C98 35 85 47 103 62L110 44C128 70 139 95 127 118C119 139 97 153 76 151C43 153 20 130 21 104C20 85 26 68 38 51L43 77C59 62 45 37 61 28L68 53C78 42 77 27 75 13Z" fill="#ff9416" stroke="#151515" strokeWidth="3" strokeLinejoin="round"/>
    <path d="M48 91L57 64L71 82L84 57L94 85L110 75L112 107C109 130 89 141 73 138C52 137 42 117 48 91Z" fill="#ffc32b"/>
    <ellipse cx="62" cy="106" rx="10" ry="14" stroke="#151515" strokeWidth="3"/><ellipse cx="88" cy="106" rx="10" ry="14" stroke="#151515" strokeWidth="3"/>
    <ellipse cx="64" cy="107" rx="5" ry="8" fill="#151515"/><ellipse cx="86" cy="107" rx="5" ry="8" fill="#151515"/>
    <path d="M70 125Q76 131 82 124" stroke="#151515" strokeWidth="3" strokeLinecap="round"/>
  </svg>;
}

export function StudioHero() {
  return <section className="reference-hero" aria-label="Sparklines Studio video production">
    <div className="reference-hero-paper">
      <a href="#selected-films" className="reference-video reference-video-one" aria-label="Explore our fashion films">
        <AmbientVideo {...studioFilms[3]} />
        <span><ArrowUpRight size={18} /></span>
      </a>
      <a href="#selected-films" className="reference-video reference-video-two" aria-label="Explore our food and hospitality films">
        <AmbientVideo {...studioFilms[0]} />
        <span><ArrowUpRight size={18} /></span>
      </a>
      <a href="#selected-films" className="reference-video reference-video-three" aria-label="Explore our interiors films">
        <AmbientVideo {...studioFilms[1]} />
        <span><ArrowUpRight size={18} /></span>
      </a>
      <a href="#selected-films" className="reference-video reference-video-four" aria-label="Explore our lifestyle films">
        <AmbientVideo {...studioFilms[5]} />
        <span><ArrowUpRight size={18} /></span>
      </a>
      <div className="reference-brand-sticker" aria-hidden="true"><Asterisk strokeWidth={1.5} /><span>SPARKLINES<br />STUDIO</span></div>
      <div className="reference-hero-content">
        <h1><span>Video Production</span>{" "}<span>Agency <em>Kolkata</em></span></h1>
        <a className="reference-discover" href="#selected-films"><span>Discover our films</span><ArrowDownRight size={18} /></a>
      </div>
      <a href="#selected-films" className="reference-scroll-stamp" aria-label="Scroll to explore our films">
        <svg className="reference-stamp-lettering" viewBox="0 0 160 160" aria-hidden="true"><defs><path id="reference-scroll-ring" d="M80 80m-58 0a58 58 0 1 1 116 0a58 58 0 1 1-116 0" /></defs><text><textPath href="#reference-scroll-ring" textLength="364">THIS IS HOW WE MOVE • THIS IS HOW WE MOVE • </textPath></text></svg>
        <Globe size={47} strokeWidth={1.4} />
      </a>
      <ul className="reference-capabilities" aria-label="Studio capabilities"><li>Brand films</li><li>Social stories</li><li>Motion design</li><li>Brand identity</li></ul>
      <div className="reference-motion-setting"><MotionSwitch /></div>
      <div className="reference-spark"><HeroSpark /></div>
    </div>
  </section>;
}

export function MotionMarquee({ words, reverse = false }: { words: string[]; reverse?: boolean }) {
  return <div className={"experience-marquee " + (reverse ? "marquee-blue" : "")}><div className="experience-marquee-track">{[0, 1].map(copy => <div key={copy} className="experience-marquee-group" aria-hidden={copy === 1}>{words.map(word => <span key={word}>{word}<Asterisk size={28} strokeWidth={1.3} aria-hidden="true" /></span>)}</div>)}</div></div>;
}

function AboutPhotoCollage() {
  const { enabled } = useStudioMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 100, damping: 22, mass: 0.8 });
  const y = useSpring(pointerY, { stiffness: 100, damping: 22, mass: 0.8 });
  const mainX = useTransform(x, [-1, 1], [25, -25]);
  const mainY = useTransform(y, [-1, 1], [18, -18]);
  const mainRotation = useTransform(x, [-1, 1], [-6, -2]);
  const detailX = useTransform(x, [-1, 1], [-32, 32]);
  const detailY = useTransform(y, [-1, 1], [24, -24]);
  const detailRotation = useTransform(x, [-1, 1], [9, 3]);
  const brandX = useTransform(x, [-1, 1], [18, -18]);
  const brandY = useTransform(y, [-1, 1], [-30, 30]);
  const brandRotation = useTransform(x, [-1, 1], [-12, -5]);

  useEffect(() => {
    if (!enabled) { pointerX.set(0); pointerY.set(0); }
  }, [enabled, pointerX, pointerY]);

  return <div className="about-photo-collage" aria-label="A collage of studio films and brand design" onPointerMove={event => {
    if (!enabled || event.pointerType !== "mouse" || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width - 0.5) * 2)));
    pointerY.set(Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height - 0.5) * 2)));
  }} onPointerLeave={() => { pointerX.set(0); pointerY.set(0); }}>
    <motion.figure className="about-photo about-photo-main" style={{ x: mainX, y: mainY, rotate: mainRotation }} whileHover={enabled ? { scale: 1.025 } : undefined}>
      <Image src={studioFilms[2].poster} alt="People and storytelling from the Sparklines Studio film library" fill sizes="(max-width: 700px) 65vw, 32vw" />
    </motion.figure>
    <motion.figure className="about-photo about-photo-detail" style={{ x: detailX, y: detailY, rotate: detailRotation }} whileHover={enabled ? { scale: 1.035 } : undefined}>
      <Image src={HOUSE_OF_KOLAM_SLIDES[17].url} alt="House of Kolam product packaging and visual identity" fill sizes="(max-width: 700px) 45vw, 22vw" />
    </motion.figure>
    <motion.figure className="about-photo about-photo-brand" style={{ x: brandX, y: brandY, rotate: brandRotation }} whileHover={enabled ? { scale: 1.04 } : undefined}>
      <Image src={HOUSE_OF_KOLAM_SLIDES[7].url} alt="The House of Kolam logo and brand story" fill sizes="(max-width: 700px) 30vw, 14vw" />
    </motion.figure>
  </div>;
}

export function InteractiveAbout({ showEyebrow = true }: { showEyebrow?: boolean }) {
  return <section id="about" className="about-reference experience-pad experience-section">
    <AboutPhotoCollage />
    <div className="about-reference-copy">
      {showEyebrow && <p className="about-reference-intro">Who we are</p>}
      <h2><span>Big on ideas.</span>{" "}<em>Closer to the craft.</em></h2>
      <p>An independent studio in Kolkata. Curious thinkers and hands-on makers, turning brand stories into films, identities and digital experiences. We work closely, think freely and care about every detail.</p>
      <Link href="/about" className="about-reference-link"><span><ArrowRight size={20} /></span><span>More about us</span></Link>
    </div>
  </section>;
}

function FilmWorkCard({ film, index }: { film: (typeof studioFilms)[number]; index: number }) {
  const { enabled } = useStudioMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 130, damping: 22 });
  const y = useSpring(pointerY, { stiffness: 130, damping: 22 });
  const translateX = useTransform(x, [-1, 1], [10, -10]);
  const translateY = useTransform(y, [-1, 1], [10, -10]);
  const baseTilt = [-2, 2, -1.5][index % 3];
  const rotate = useTransform(x, [-1, 1], [baseTilt - 1, baseTilt + 1]);
  useEffect(() => {
    if (!enabled) { pointerX.set(0); pointerY.set(0); }
  }, [enabled, pointerX, pointerY]);
  return <motion.article className={"film-reference-card film-tilt-" + index % 3} style={{ x: translateX, y: translateY, rotate }} whileHover={enabled ? { scale: 1.02 } : undefined} onPointerMove={event => {
    if (!enabled || event.pointerType !== "mouse" || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width - 0.5) * 2)));
    pointerY.set(Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height - 0.5) * 2)));
  }} onPointerLeave={() => { pointerX.set(0); pointerY.set(0); }}>
    <Link href="/video-production-agency-kolkata#video-masonry" aria-label={"Explore " + film.title}>
      <div className="film-reference-frame"><AmbientVideo {...film} /><span className="film-reference-index">{String(index + 1).padStart(2, "0")}</span></div>
      <div className="film-reference-caption"><h3>{film.title}</h3><span><ArrowUpRight size={22} /></span></div>
    </Link>
  </motion.article>;
}

export function HomeFilmMasonry() {
  const [filter, setFilter] = useState("All films");
  const filters = ["All films", "Brand & lifestyle", "Food & spaces", "People"];
  const matching = studioFilms.filter((_,index) => filter === "All films" || (filter === "Brand & lifestyle" ? [3,5].includes(index) : filter === "Food & spaces" ? [0,1].includes(index) : [2,4].includes(index)));
  return <section id="selected-films" className="experience-section experience-pad films-reference">
    <div className="films-reference-heading">
      <Asterisk className="films-reference-spark" size={90} strokeWidth={1.2} aria-hidden="true" />
      <h2><span>Less ordinary.</span>{" "}<em>More you.</em></h2>
      <p>Different stories. Different formats. A shared obsession with making every frame count.</p>
    </div>
    <div className="films-reference-filters" role="group" aria-label="Filter films">{filters.map(label => <button key={label} aria-pressed={filter === label} onClick={() => setFilter(label)}>{label}</button>)}<span aria-live="polite">{matching.length} films</span></div>
    <div className="films-reference-masonry">{matching.map(film => <FilmWorkCard key={film.src} film={film} index={studioFilms.indexOf(film)} />)}</div>
    <div className="films-reference-footer"><Link href="/video-production-agency-kolkata" className="about-reference-link"><span><ArrowRight size={20} /></span><span>Explore all video work</span></Link></div>
  </section>;
}

export function FilmCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const activeIndex = useRef(0);
  const { enabled } = useStudioMotion();
  const inView = useInView(ref);
  const [index, setIndex] = useState(0);
  const [focused, setFocused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [tailWidth, setTailWidth] = useState(0);

  const move = useCallback((next: number, smooth = true) => {
    const track = ref.current;
    if (!track) return;
    const first = track.children[0] as HTMLElement;
    const child = track.children[next] as HTMLElement;
    if (first && child) track.scrollTo({ left: child.offsetLeft - first.offsetLeft, behavior: smooth ? "smooth" : "instant" });
  }, []);

  useEffect(() => {
    const update = () => setPageVisible(!document.hidden);
    update();
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);

  useEffect(() => {
    const track = ref.current;
    const first = track?.children[0] as HTMLElement | undefined;
    if (!track || !first) return;
    let frame = 0;
    const resize = () => {
      const style = window.getComputedStyle(track);
      const padding = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
      const gap = parseFloat(style.columnGap) || 0;
      // Trailing space lets the final film align at the start before wrapping.
      setTailWidth(Math.max(0, track.clientWidth - first.offsetWidth - padding - gap));
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => move(activeIndex.current, false));
    };
    const observer = new ResizeObserver(resize);
    observer.observe(track);
    observer.observe(first);
    resize();
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [move]);

  useEffect(() => {
    if (!enabled || !inView || focused || interacting || !pageVisible) return;
    const timer = window.setInterval(() => move((activeIndex.current + 1) % studioFilms.length), 5000);
    return () => window.clearInterval(timer);
  }, [enabled, inView, focused, interacting, pageVisible, move]);

  return <section id="motion-films" className="experience-section film-carousel-section" aria-label="Video inspiration carousel" aria-roledescription="carousel" onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setFocused(false); }}>
    <div className="experience-pad carousel-heading"><div><h2>Always in <em>motion.</em></h2></div><div className="carousel-controls"><button aria-label="Previous film" onClick={() => move((index + studioFilms.length - 1) % studioFilms.length, enabled)}><ArrowLeft size={20} /></button><span>{String(index + 1).padStart(2, "0")} / {String(studioFilms.length).padStart(2, "0")}</span><button aria-label="Next film" onClick={() => move((index + 1) % studioFilms.length, enabled)}><ArrowRight size={20} /></button></div></div>
    <div className="film-carousel-track" ref={ref} onPointerDown={() => setInteracting(true)} onPointerUp={() => setInteracting(false)} onPointerCancel={() => setInteracting(false)} onPointerLeave={() => setInteracting(false)} onScroll={() => {
      const track = ref.current;
      if (!track) return;
      const first = track.children[0] as HTMLElement;
      const second = track.children[1] as HTMLElement;
      const step = second.offsetLeft - first.offsetLeft;
      if (!step) return;
      const next = Math.max(0, Math.min(studioFilms.length - 1, Math.round(track.scrollLeft / step)));
      activeIndex.current = next;
      setIndex(next);
    }}>
      {studioFilms.map((film,i) => <Link href="/video-production-agency-kolkata" key={film.src} className="film-carousel-card" aria-label={film.title + ", film " + (i + 1) + " of " + studioFilms.length}><div><AmbientVideo {...film} /><span>0{i+1}</span><ArrowUpRight size={23} /></div><h3>{film.title}</h3></Link>)}
      <div className="film-carousel-tail" style={{ flex: "0 0 " + tailWidth + "px" }} aria-hidden="true" />
    </div>
  </section>;
}

export function BrandingFeature(props: { listing?: boolean; showEyebrow?: boolean }) {
  return <BrandingSpotlight {...props} />;
}
