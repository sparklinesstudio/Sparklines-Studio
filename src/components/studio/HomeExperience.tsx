"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Asterisk, Globe } from "lucide-react";
import { homeGalleryFilms, categories } from "@/data/galleryVideos";
import { studioFilms } from "@/data/studioFilms";
import { founders, studioSticker } from "@/data/founders";
import { AmbientVideo, useStudioMotion } from "./StudioMotion";
import "./hero.css";
import "./about.css";
import "./films.css";
import { StudioSticker } from "./StudioSticker";
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
      <a href="#selected-films" className="reference-video reference-video-three" aria-label="Explore our interiors films">
        <AmbientVideo {...studioFilms[1]} />
        <span><ArrowUpRight size={18} /></span>
      </a>
      <a href="#selected-films" className="reference-video reference-video-four" aria-label="Explore our lifestyle films">
        <AmbientVideo {...studioFilms[5]} />
        <span><ArrowUpRight size={18} /></span>
      </a>
      <div className="reference-brand-sticker" aria-hidden="true"><Image src="https://res.cloudinary.com/vt5gqi1c/image/upload/e_trim/v1795004332/Generated_Image_November_17_2026_-_6_19PM.png" alt="" fill sizes="(max-width: 700px) 90px, 180px" draggable={false} /></div>
      <div className="reference-hero-content">
        <h1><span>Video Production</span>{" "}<span>Agency <em>Kolkata</em></span></h1>
        <p className="reference-hero-description">Kolkata video production for brand films, product stories and social campaigns. From the first idea to the final frame.</p>
        <a className="reference-discover" href="#selected-films"><span>Discover our films</span><ArrowDownRight size={18} /></a>
      </div>
      <a href="#selected-films" className="reference-video reference-video-two" aria-label="Explore our food and hospitality films">
        <AmbientVideo {...studioFilms[0]} />
        <span><ArrowUpRight size={18} /></span>
      </a>
      <a href="#selected-films" className="reference-scroll-stamp" aria-label="Scroll to explore our films">
        <svg className="reference-stamp-lettering" viewBox="0 0 160 160" aria-hidden="true"><defs><path id="reference-scroll-ring" d="M80 80m-58 0a58 58 0 1 1 116 0a58 58 0 1 1-116 0" /></defs><text><textPath href="#reference-scroll-ring" textLength="364">THIS IS HOW WE MOVE • THIS IS HOW WE MOVE • </textPath></text></svg>
        <Globe size={47} strokeWidth={1.4} />
      </a>
      <ul className="reference-capabilities" aria-label="Studio capabilities"><li>Brand films</li><li>Social stories</li><li>Motion design</li><li>Brand identity</li></ul>
      <div className="reference-spark"><HeroSpark /></div>
    </div>
  </section>;
}

export function MotionMarquee({ words, reverse = false }: { words: string[]; reverse?: boolean }) {
  return <div className={"experience-marquee " + (reverse ? "marquee-blue" : "")}><div className="experience-marquee-track">{[0, 1].map(copy => <div key={copy} className="experience-marquee-group" aria-hidden={copy === 1}>{words.map(word => <span key={word}>{word}<Asterisk size={28} strokeWidth={1.3} aria-hidden="true" /></span>)}</div>)}</div></div>;
}

function FounderSticker({ src, alt, label, className, tilt, face = false }: { src: string; alt: string; label: string; className: string; tilt: number; face?: boolean }) {
  const { enabled } = useStudioMotion();
  const dragging = useRef(false);
  const repelX = useMotionValue(0);
  const repelY = useMotionValue(0);
  const x = useSpring(repelX, { stiffness: 280, damping: 20 });
  const y = useSpring(repelY, { stiffness: 280, damping: 20 });
  const resetRepulsion = () => { repelX.set(0); repelY.set(0); };

  useEffect(() => {
    if (!enabled) { repelX.set(0); repelY.set(0); }
  }, [enabled, repelX, repelY]);

  return <motion.button type="button" className={"about-photo about-founder-drag " + className}
    aria-label={"Drag " + label + "; release to return it to its starting position"}
    drag dragSnapToOrigin dragMomentum={false}
    dragTransition={{ bounceStiffness: enabled ? 260 : 1000, bounceDamping: enabled ? 18 : 100 }}
    style={{ rotate: tilt, touchAction: "none" }}
    whileDrag={{ zIndex: 20, scale: enabled ? 1.05 : 1, cursor: "grabbing" }}
    onPointerMove={event => {
      if (!enabled || dragging.current || event.buttons !== 0 || event.pointerType !== "mouse" || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
      // Measure the drag wrapper, so the repelling image never moves its own hover target.
      const bounds = event.currentTarget.getBoundingClientRect();
      const dx = event.clientX - (bounds.left + bounds.width / 2);
      const dy = event.clientY - (bounds.top + bounds.height / 2);
      const distance = Math.hypot(dx, dy);
      const force = 10 + 16 * (1 - Math.min(distance / (Math.max(bounds.width, bounds.height) / 2), 1));
      repelX.set(distance > 1 ? -dx / distance * force : 0);
      repelY.set(distance > 1 ? -dy / distance * force : -force);
    }}
    onPointerLeave={resetRepulsion}
    onPointerDown={resetRepulsion}
    onDragStart={() => { dragging.current = true; resetRepulsion(); }}
    onDragEnd={() => { dragging.current = false; resetRepulsion(); }}>
    <motion.span className="about-sticker-repel" style={{ x, y }}>
      <span className={face ? "about-sticker-art about-face-wobble" : "about-sticker-art"}>
        <Image src={src} alt={alt} fill sizes="(max-width: 950px) 50vw, 25vw" draggable={false} />
      </span>
    </motion.span>
  </motion.button>;
}

function AboutPhotoCollage() {
  return <div className="about-photo-collage" aria-label="Drag all three stickers and release to spring back">
    {founders.map((founder, index) => <FounderSticker key={founder.name} src={founder.image}
      alt={founder.name + ", founder and director of Sparklines Studio"} label={founder.name + "’s portrait"}
      className={index === 0 ? "about-photo-detail" : "about-photo-main"} tilt={index === 0 ? 6 : -4} face />)}
    <FounderSticker src={studioSticker} alt="Studio clapperboard sticker" label="the clapperboard sticker" className="about-photo-brand" tilt={-8.5} />
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

function FilmWorkCard({ film, index }: { film: (typeof homeGalleryFilms)[number]; index: number }) {
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
    <Link href={"/video-gallery#gallery-" + film.category.toLowerCase().replaceAll(" ", "-")} aria-label={"Explore " + film.title}>
      <div className="film-reference-frame"><AmbientVideo {...film} /><span className="film-reference-index">{String(index + 1).padStart(2, "0")}</span></div>
      <div className="film-reference-caption"><h3>{film.title}</h3><span><ArrowUpRight size={22} /></span></div>
    </Link>
  </motion.article>;
}

export function HomeFilmMasonry() {
  const [filter, setFilter] = useState("All films");
  const filters = ["All films", ...categories];
  const matching = homeGalleryFilms.filter(film => filter === "All films" || film.category === filter);
  return <section id="selected-films" className="experience-section experience-pad films-reference">
    <StudioSticker variant="smile" className="sticker-smile" />
    <div className="films-reference-heading">
      <Asterisk className="films-reference-spark" size={90} strokeWidth={1.2} aria-hidden="true" />
      <h2><span>Less ordinary.</span>{" "}<em>More you.</em></h2>
      <p>Different stories. Different formats. A shared obsession with making every frame count.</p>
    </div>
    <div className="films-reference-filters" role="group" aria-label="Filter films">{filters.map(label => <button key={label} aria-pressed={filter === label} onClick={() => setFilter(label)}>{label}</button>)}<span aria-live="polite">{matching.length} films</span></div>
    <div className="films-reference-masonry">{matching.map(film => <FilmWorkCard key={film.src} film={film} index={homeGalleryFilms.indexOf(film)} />)}</div>
    <div className="films-reference-footer"><Link href="/video-gallery" className="about-reference-link"><span><ArrowRight size={20} /></span><span>Explore all video work</span></Link></div>
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
    const timer = window.setInterval(() => move((activeIndex.current + 1) % homeGalleryFilms.length), 5000);
    return () => window.clearInterval(timer);
  }, [enabled, inView, focused, interacting, pageVisible, move]);

  return <section id="motion-films" className="experience-section film-carousel-section" aria-label="Video inspiration carousel" aria-roledescription="carousel" onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setFocused(false); }}>
    <div className="experience-pad carousel-heading"><div><h2>Always in <em>motion.</em></h2></div><div className="carousel-controls"><button aria-label="Previous film" onClick={() => move((index + homeGalleryFilms.length - 1) % homeGalleryFilms.length, enabled)}><ArrowLeft size={20} /></button><span>{String(index + 1).padStart(2, "0")} / {String(homeGalleryFilms.length).padStart(2, "0")}</span><button aria-label="Next film" onClick={() => move((index + 1) % homeGalleryFilms.length, enabled)}><ArrowRight size={20} /></button></div></div>
    <div className="film-carousel-track" ref={ref} onPointerDown={() => setInteracting(true)} onPointerUp={() => setInteracting(false)} onPointerCancel={() => setInteracting(false)} onPointerLeave={() => setInteracting(false)} onScroll={() => {
      const track = ref.current;
      if (!track) return;
      const first = track.children[0] as HTMLElement;
      const second = track.children[1] as HTMLElement;
      const step = second.offsetLeft - first.offsetLeft;
      if (!step) return;
      const next = Math.max(0, Math.min(homeGalleryFilms.length - 1, Math.round(track.scrollLeft / step)));
      activeIndex.current = next;
      setIndex(next);
    }}>
      {homeGalleryFilms.map((film,i) => <Link href={"/video-gallery#gallery-" + film.category.toLowerCase().replaceAll(" ", "-")} key={film.src} className="film-carousel-card" aria-label={film.title + ", film " + (i + 1) + " of " + homeGalleryFilms.length}><div><AmbientVideo {...film} /><span>0{i+1}</span><ArrowUpRight size={23} /></div><h3>{film.title}</h3></Link>)}
      <div className="film-carousel-tail" style={{ flex: "0 0 " + tailWidth + "px" }} aria-hidden="true" />
    </div>
  </section>;
}

export function BrandingFeature(props: { listing?: boolean; showEyebrow?: boolean }) {
  return <BrandingSpotlight {...props} />;
}
