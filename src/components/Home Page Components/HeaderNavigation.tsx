"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { serviceGroups } from "@/data/kolkataServices";
import "./navigation.css";

export function HeaderNavigation() {
 const [mobileOpen, setMobileOpen] = useState(false);
 const [servicesOpen, setServicesOpen] = useState(false);
 const pathname = usePathname();
 const headerRef = useRef<HTMLElement>(null);
 const mobileToggle = useRef<HTMLButtonElement>(null);
 const servicesToggle = useRef<HTMLButtonElement>(null);
 const close = () => { setMobileOpen(false); setServicesOpen(false); };
 useEffect(() => {
  if (!mobileOpen) return;
  const previous = document.body.style.overflow;
  document.body.style.overflow = "hidden";
  return () => { document.body.style.overflow = previous; };
 }, [mobileOpen]);
 useEffect(() => {
  const onPointer = (event: PointerEvent) => {
   if (!headerRef.current?.contains(event.target as Node)) { setMobileOpen(false); setServicesOpen(false); }
  };
  const onKey = (event: KeyboardEvent) => {
   if (event.key === "Escape") {
    setMobileOpen(false); setServicesOpen(false);
    if (mobileOpen) mobileToggle.current?.focus();
    else if (servicesOpen) servicesToggle.current?.focus();
   }
   if (event.key === "Tab" && mobileOpen && headerRef.current) {
    const targets = Array.from(headerRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')).filter(el => el.getClientRects().length > 0);
    const first = targets[0], last = targets[targets.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
   }
  };
  const onResize = () => { if (window.innerWidth >= 900) setMobileOpen(false); };
  document.addEventListener("pointerdown",onPointer); document.addEventListener("keydown",onKey); window.addEventListener("resize",onResize);
  return () => { document.removeEventListener("pointerdown",onPointer); document.removeEventListener("keydown",onKey); window.removeEventListener("resize",onResize); };
 }, [mobileOpen,servicesOpen]);
 return <>
 <a href="#main-content" className="studio-skip-link">Skip to content</a>
 {mobileOpen && <div className="studio-nav-backdrop" aria-hidden="true" />}
 <header ref={headerRef} className="studio-nav" onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setServicesOpen(false); }}>
 <Link href="/" onClick={close} className="studio-nav-logo" aria-label="Sparklines Studio home"><Image src="/logo.png" alt="Sparklines Studio" width={140} height={42} priority unoptimized /></Link>
 <button ref={mobileToggle} className="studio-mobile-toggle" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} aria-controls="studio-navigation" onClick={() => {setMobileOpen(!mobileOpen);setServicesOpen(false);}}>{mobileOpen ? <X size={21} /> : <Menu size={21} />}</button>
 <nav data-lenis-prevent id="studio-navigation" aria-label="Main navigation" className={"studio-nav-links " + (mobileOpen ? "is-open" : "")}>
 <Link href="/about" onClick={close} aria-current={pathname === "/about" ? "page" : undefined}>About</Link><Link href="/work" onClick={close} aria-current={pathname.startsWith("/work") ? "page" : undefined}>Work</Link>
 <div className="studio-services-nav"><button ref={servicesToggle} type="button" aria-expanded={servicesOpen} aria-controls="studio-mega-menu" onClick={() => setServicesOpen(!servicesOpen)}>Services <ChevronDown size={14} className={servicesOpen ? "is-rotated" : ""} /></button>
 {servicesOpen && <div data-lenis-prevent id="studio-mega-menu" className="studio-mega-menu"><div className="studio-mega-intro"><span>THE SPARKLINES STUDIO</span><p>Good stories.<br />Considered experiences.</p><Link href="/services" onClick={close}>Explore all services <ArrowUpRight size={16} /></Link></div><div className="studio-mega-groups">{serviceGroups.map(group => <div key={group.title}><h2>{group.title}</h2>{group.links.map(service => <Link key={service.slug} href={"/"+service.slug} onClick={close} aria-current={pathname === "/"+service.slug ? "page" : undefined}>{service.name}<ArrowUpRight size={14} /></Link>)}</div>)}</div></div>}
 </div><Link href="/blogs" onClick={close} aria-current={pathname.startsWith("/blogs") ? "page" : undefined}>Blog</Link><Link href="/services" onClick={close} className="studio-nav-all">All services</Link><Link href="/contact" onClick={close} aria-current={pathname === "/contact" ? "page" : undefined}>Contact</Link><Link href="/contact" onClick={close} className="studio-nav-cta">Let’s talk <ArrowUpRight size={15} /></Link>
 </nav>
 </header></>;
}
