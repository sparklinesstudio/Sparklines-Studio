"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Asterisk } from "lucide-react";
import { studioFilms } from "@/data/studioFilms";
import { HOUSE_OF_KOLAM_SLIDES } from "@/data/houseOfKolamData";
import { AmbientVideo, MotionSwitch, Reveal, useStudioMotion } from "./StudioMotion";

const caseStudyUrl = "/work/branding/house-of-kolam";

const heroFilms = [studioFilms[3], studioFilms[0], studioFilms[1], studioFilms[5]];

export function StudioHero() {
  const { enabled } = useStudioMotion();
  const [activeFilm, setActiveFilm] = useState(0);
  const x = useMotionValue(0), y = useMotionValue(0);
  const rotateX = useSpring(y, { stiffness: 80, damping: 25 });
  const rotateY = useSpring(x, { stiffness: 80, damping: 25 });
  const featured = heroFilms[activeFilm];
  const previews = heroFilms.map((film, index) => ({ ...film, index }))
    .filter(film => film.index !== activeFilm).slice(0, 2);

  return <section className="experience-hero experience-pad hero-video-first" onPointerMove={event => {
    if (!enabled || event.pointerType !== "mouse") return;
    const box = event.currentTarget.getBoundingClientRect();
    x.set(((event.clientX - box.left) / box.width - 0.5) * 2);
    y.set(((event.clientY - box.top) / box.height - 0.5) * -2);
  }} onPointerLeave={() => { x.set(0); y.set(0); }}>
    <div className="experience-hero-grid">
      <div className="experience-hero-copy">
        <h1 className="hero-keyword-heading">Video{" "}<br />Production{" "}<br />Agency <em>Kolkata.</em></h1>
        <p>From the first spark to the final cut. We make brand films, social stories and motion-led content that feel impossible to ignore.</p>
        <div className="studio-actions"><Link href="/contact" className="studio-button">Let’s make your next film <ArrowUpRight size={18} /></Link><a className="hero-work-link" href="#selected-films">Explore our films <ArrowDownRight size={19} /></a></div>
      </div>
      <motion.div className="hero-cinema-stage" style={{ rotateX, rotateY, transformPerspective: 1200 }}>
        <div className="hero-cinema-grid">
          <a href="#selected-films" className="hero-cinema-main" aria-label={"Explore our films — " + featured.title}>
            <AmbientVideo key={featured.src} src={featured.src.replace("w_480", "w_960")} poster={featured.poster.replace("w_500", "w_960")} />
            <span className="hero-cinema-caption"><span>{featured.title}</span><ArrowUpRight size={25} /></span>
          </a>
          <div className="hero-cinema-previews">{previews.map(film => <button type="button" key={film.src} className="hero-cinema-preview" onClick={() => setActiveFilm(film.index)} aria-label={"Feature " + film.title}>
            <AmbientVideo {...film} />
            <span>{film.title}<ArrowUpRight size={17} /></span>
          </button>)}</div>
        </div>
        <div className="hero-film-selector" role="group" aria-label="Choose featured hero film">{heroFilms.map((film,index) => <button type="button" key={film.src} aria-pressed={activeFilm === index} onClick={() => setActiveFilm(index)}><span>0{index + 1}</span>{["Fashion", "Food", "Spaces", "Lifestyle"][index]}<ArrowUpRight size={13} /></button>)}</div>
      </motion.div>
    </div>
    <div className="hero-bottom"><MotionSwitch /><a href="#about" aria-label="Discover the studio"><ArrowDownRight size={24} /></a></div>
  </section>;
}

export function MotionMarquee({ words, reverse = false }: { words: string[]; reverse?: boolean }) {
  return <div className={"experience-marquee " + (reverse ? "marquee-blue" : "")}><div className="experience-marquee-track">{[0, 1].map(copy => <div key={copy} className="experience-marquee-group" aria-hidden={copy === 1}>{words.map(word => <span key={word}>{word}<Asterisk size={28} strokeWidth={1.3} aria-hidden="true" /></span>)}</div>)}</div></div>;
}

const aboutTabs = [
  { label: "The story", heading: "A small spark can change the whole picture.", text: "We’re Sparklines Studio, a creative partner based in Kolkata. We bring curiosity, visual thinking and hands-on craft to films, brand identities and digital experiences. The work starts with your story, and grows from there." },
  { label: "The craft", heading: "One idea. Every detail considered.", text: "From the first script and storyboard to the final colour grade, we connect strategy with production. Filming, editing, motion design and brand thinking work together, so your story feels consistent wherever people find it." },
  { label: "The partnership", heading: "Your next chapter. Made together.", text: "You know your business. We bring a fresh perspective. We listen, ask questions, share work in progress and make room for useful feedback. Clear scopes and thoughtful reviews keep the collaboration moving." },
];

export function InteractiveAbout({ showEyebrow = true }: { showEyebrow?: boolean }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  return <section id="about" className="experience-about experience-pad experience-section">
    <Reveal className="experience-about-visual"><div className="about-video-frame"><AmbientVideo {...studioFilms[2]} /></div><div className="about-note"><Asterisk size={35} /><span>Curious minds.<br />Considered work.</span></div><span className="studio-micro">BASED IN KOLKATA / CREATING EVERYWHERE</span></Reveal>
    <Reveal className="experience-about-copy">{showEyebrow && <p className="studio-kicker">HELLO, WE’RE SPARKLINES.</p>}<h2>Big on ideas.<br /><em>Closer to the craft.</em></h2><div className="experience-tabs" role="tablist" aria-label="About our studio">{aboutTabs.map((tab, index) => <button ref={el => { tabRefs.current[index] = el; }} key={tab.label} id={"about-tab-" + index} role="tab" aria-selected={active === index} aria-controls={"about-panel-" + index} tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={event => {
      let next = index;
      if (event.key === "ArrowRight") next = (index + 1) % aboutTabs.length;
      else if (event.key === "ArrowLeft") next = (index + aboutTabs.length - 1) % aboutTabs.length;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = aboutTabs.length - 1;
      else return;
      event.preventDefault(); setActive(next); tabRefs.current[next]?.focus();
    }}>{tab.label}</button>)}</div>{aboutTabs.map((tab,index) => <div id={"about-panel-" + index} key={tab.label} role="tabpanel" aria-labelledby={"about-tab-" + index} hidden={active !== index} tabIndex={0}><h3>{tab.heading}</h3><p>{tab.text}</p></div>)}<Link href="/about" className="studio-text-link">A little more about us <ArrowUpRight size={18} /></Link></Reveal>
  </section>;
}

export function HomeFilmMasonry() {
  const [filter, setFilter] = useState("All films");
  const filters = ["All films", "Brand & lifestyle", "Food & spaces", "People"];
  const matching = studioFilms.filter((_,index) => filter === "All films" || (filter === "Brand & lifestyle" ? [3,5].includes(index) : filter === "Food & spaces" ? [0,1].includes(index) : [2,4].includes(index)));
  return <section id="selected-films" className="experience-section experience-pad experience-work"><Reveal><div className="experience-section-heading"><div><h2>Less ordinary.<br /><em>More you.</em></h2></div><div><p>Different stories. Different formats. A shared obsession with making every frame count.</p><Link href="/video-production-agency-kolkata" className="studio-text-link">Explore video production <ArrowUpRight size={18} /></Link></div></div></Reveal>
    <div className="experience-filter" role="group" aria-label="Filter films">{filters.map(label => <button key={label} aria-pressed={filter === label} onClick={() => setFilter(label)}>{label}</button>)}<span aria-live="polite">{matching.length} films</span></div>
    <div className="home-film-masonry">{matching.map((film) => <Reveal key={film.src} className="home-film-card"><Link href="/video-production-agency-kolkata#video-masonry" aria-label={"Explore " + film.title}><AmbientVideo {...film} /><span className="film-hover-label">Explore the work <ArrowUpRight size={22} /></span></Link><div><h3>{film.title}</h3><span>FILM & EDIT</span></div></Reveal>)}</div>
  </section>;
}

export function FilmCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const { enabled } = useStudioMotion();
  const inView = useInView(ref);
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const move = (next: number, smooth = true) => {
    const track = ref.current;
    if (!track) return;
    const child = track.children[next] as HTMLElement;
    if (child) track.scrollTo({ left: child.offsetLeft - (track.children[0] as HTMLElement).offsetLeft, behavior: smooth ? "smooth" : "instant" });
  };
  useEffect(() => {
    if (!enabled || !inView || hovered || focused) return;
    const timer = window.setInterval(() => move((index + 1) % studioFilms.length), 4500);
    return () => window.clearInterval(timer);
  }, [index, enabled, inView, hovered, focused]);
  return <section className="experience-section film-carousel-section" aria-label="Video inspiration carousel" aria-roledescription="carousel" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setFocused(false); }}>
    <div className="experience-pad carousel-heading"><div><h2>Always in <em>motion.</em></h2></div><div className="carousel-controls"><button aria-label="Previous film" onClick={() => move((index + studioFilms.length - 1) % studioFilms.length, enabled)}><ArrowLeft size={20} /></button><span>{String(index + 1).padStart(2, "0")} / 06</span><button aria-label="Next film" onClick={() => move((index + 1) % studioFilms.length, enabled)}><ArrowRight size={20} /></button></div></div>
    <div className="film-carousel-track" ref={ref} onScroll={() => { const track = ref.current; if (!track) return; const step = (track.children[1] as HTMLElement)?.offsetLeft - (track.children[0] as HTMLElement)?.offsetLeft; if (step) setIndex(Math.min(studioFilms.length - 1, Math.round(track.scrollLeft / step))); }}>{studioFilms.map((film,i) => <Link href="/video-production-agency-kolkata" key={film.src} className="film-carousel-card" aria-label={film.title + ", film " + (i + 1) + " of 6"}><div><Image src={film.poster} alt={film.title} fill sizes="(max-width: 600px) 78vw, 30vw" /><span>0{i+1}</span><ArrowUpRight size={23} /></div><h3>{film.title}</h3></Link>)}</div>
  </section>;
}

export function BrandingFeature({ listing = false, showEyebrow = true }: { listing?: boolean; showEyebrow?: boolean }) {
  return <section className={"experience-branding experience-pad experience-section " + (listing ? "branding-listing" : "")}><Reveal><div className="experience-section-heading"><div>{showEyebrow && <p className="studio-kicker">FEATURED BRAND IDENTITY / HOUSE OF KOLAM</p>}<h2>A tradition.<br /><em>A whole new expression.</em></h2></div><div><p>A complete identity rooted in the art of Kolam. From the first mark to packaging, print and the spaces in between.</p><Link href={caseStudyUrl} className="studio-text-link">Explore the full case study <ArrowUpRight size={18} /></Link></div></div></Reveal>
    <Link href={caseStudyUrl} className="branding-cover"><Image src={HOUSE_OF_KOLAM_SLIDES[0].url} alt="House of Kolam master brand identity" fill sizes="100vw" /><span className="branding-cover-tag">HOUSE OF KOLAM <ArrowUpRight size={28} /></span></Link>
    <div className="branding-caption"><span>BRAND STRATEGY · IDENTITY · PACKAGING · MOTION</span><Link href={caseStudyUrl}>View project <ArrowUpRight size={18} /></Link></div>
    <div className="branding-ribbon" aria-label="House of Kolam design details"><div className="branding-ribbon-track">{[0,1].map(copy => <div className="branding-ribbon-group" key={copy} aria-hidden={copy === 1}>{[7,8,16,17,21].map(index => <div key={index}><Image src={HOUSE_OF_KOLAM_SLIDES[index].url} alt={copy === 0 ? HOUSE_OF_KOLAM_SLIDES[index].title : ""} fill sizes="(max-width: 600px) 60vw, 28vw" /></div>)}</div>)}</div></div>
  </section>;
}
