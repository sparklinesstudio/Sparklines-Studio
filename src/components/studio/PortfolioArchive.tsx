"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Plus, X } from "lucide-react";
import { HOUSE_OF_KOLAM_SLIDES } from "@/data/houseOfKolamData";
import { useStudioMotion } from "./StudioMotion";
const filters = ["All boards", "Identity", "Packaging & print", "Photography & spaces", "Digital & motion"];
const groups: Record<string, number[]> = { Identity: [1,2,3,5,6,7,8,9,10,12,17,23], "Packaging & print": [18,20,21,22], "Photography & spaces": [13,14,15,19], "Digital & motion": [4,11,16] };
export function PortfolioArchive() {
  const [filter, setFilter] = useState("All boards");
  const [visible, setVisible] = useState(9);
  const [selected, setSelected] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { enabled } = useStudioMotion();
  const boards = HOUSE_OF_KOLAM_SLIDES.filter(slide => filter === "All boards" || groups[filter].includes(slide.id));
  const current = HOUSE_OF_KOLAM_SLIDES.find(slide => slide.id === selected);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (selected === null || !dialog) return;
    if (!dialog.open) dialog.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [selected]);
  const image = (url: string, animated?: boolean) => animated && !enabled ? HOUSE_OF_KOLAM_SLIDES[7].url : url;
  const step = (direction: number) => setSelected(id => ((id! - 1 + direction + HOUSE_OF_KOLAM_SLIDES.length) % HOUSE_OF_KOLAM_SLIDES.length) + 1);
  return <section id="portfolio-archive" className="experience-section experience-pad portfolio-archive"><div className="experience-section-heading"><div><p className="studio-kicker">ONE IDENTITY. A WHOLE CREATIVE WORLD.</p><h2>The details<br /><em>make the difference.</em></h2></div><p>Explore the House of Kolam project board by board. Filter by discipline or open a board for a closer look.</p></div>
  <div className="experience-filter" role="group" aria-label="Filter portfolio boards">{filters.map(label => <button key={label} aria-pressed={filter === label} onClick={() => {setFilter(label);setVisible(9);}}>{label}</button>)}<span aria-live="polite">{boards.length} boards</span></div>
  <div className="portfolio-board-grid">{boards.slice(0,visible).map((slide,index) => <article key={slide.id} className={index % 5 === 0 ? "board-feature" : ""}><button className="portfolio-board-image" aria-label={"Open " + slide.title} onClick={() => setSelected(slide.id)}><Image src={image(slide.url,slide.isAnimated)} alt={slide.title} fill sizes="(max-width: 650px) 100vw, (max-width: 1000px) 50vw, 33vw" unoptimized={slide.isAnimated && enabled} /><span><Plus size={22} /></span></button><div className="portfolio-board-caption"><div><span>{slide.category}</span><h3>{slide.title}</h3></div><span>{String(slide.id).padStart(2,"0")}</span></div></article>)}</div>
  {visible < boards.length && <div className="portfolio-load-more"><button className="studio-button" onClick={() => setVisible(count => count + 6)}>Show more boards <Plus size={18} /></button><p>Showing {Math.min(visible,boards.length)} of {boards.length}</p></div>}
  <div className="portfolio-case-link"><span>Want the story behind the identity?</span><Link href="/work/branding/house-of-kolam">Read the complete case study <ArrowUpRight size={18} /></Link></div>
  <dialog ref={dialogRef} className="portfolio-lightbox" aria-labelledby="board-dialog-title" onClose={() => setSelected(null)} onClick={event => { if(event.target === event.currentTarget) dialogRef.current?.close(); }} onKeyDown={event => {if(event.key === "ArrowRight"){event.preventDefault();step(1);}else if(event.key === "ArrowLeft"){event.preventDefault();step(-1);}}}>
  {current && <div className="portfolio-lightbox-content" data-lenis-prevent><header><div><span>HOUSE OF KOLAM / {String(current.id).padStart(2,"0")} OF 23</span><h2 id="board-dialog-title">{current.title}</h2></div><button autoFocus aria-label="Close board preview" onClick={() => dialogRef.current?.close()}><X size={23} /></button></header><div className="portfolio-lightbox-image"><Image src={image(current.url,current.isAnimated)} alt={current.title} fill sizes="90vw" unoptimized={current.isAnimated && enabled} /></div><div className="portfolio-lightbox-bottom"><button aria-label="Previous project board" onClick={() => step(-1)}><ArrowLeft size={22} /></button><p>{current.description}</p><button aria-label="Next project board" onClick={() => step(1)}><ArrowRight size={22} /></button></div></div>}
  </dialog></section>;
}
