"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Asterisk, ChevronDown } from "lucide-react";
import { serviceGroups } from "@/data/serviceNavigation";
import "./navigation.css";

const navigationLinks = [["About", "/about"], ["Work", "/work"], ["Video Gallery", "/video-gallery"], ["Blog", "/blogs"]];
// Matching cubic curves let the drawer's leading edge flow into a flat surface.
const liquidClosed = "M 100 0 H 100 V 100 H 100 C 100 75 100 25 100 0 Z";
const liquidWave = "M 0 0 H 100 V 100 H 0 C -24 75 24 25 0 0 Z";
const liquidOpen = "M 0 0 H 100 V 100 H 0 C 0 75 0 25 0 0 Z";

export function HeaderNavigation() {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const drawer = useRef<HTMLDialogElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const servicesToggle = useRef<HTMLButtonElement>(null);

  const close = () => {
    setServicesOpen(false);
    if (drawer.current?.open) setClosing(true);
  };

  useEffect(() => {
    const panel = drawer.current;
    if (!mobileOpen) return;
    if (!panel?.open) panel?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.dispatchEvent(new CustomEvent("studio-navigation-toggle", { detail: { open: true } }));
    return () => {
      panel?.close();
      document.body.style.overflow = previous;
      window.dispatchEvent(new CustomEvent("studio-navigation-toggle", { detail: { open: false } }));
    };
  }, [mobileOpen]);

  useEffect(() => {
    // Route changes must release the modal and scroll lock immediately.
    drawer.current?.close();
    setMobileOpen(false);
    setClosing(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const outside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setServicesOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && servicesOpen) {
        setServicesOpen(false);
        servicesToggle.current?.focus();
      }
    };
    const resize = () => {
      if (window.innerWidth >= 900) {
        drawer.current?.close();
        setMobileOpen(false);
        setClosing(false);
      }
    };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    window.addEventListener("resize", resize);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
      window.removeEventListener("resize", resize);
    };
  }, [servicesOpen]);

  const current = (href: string) => pathname === href || pathname.startsWith(href + "/") ? "page" as const : undefined;
  const links = (mobile = false) => navigationLinks.map(([name, href], index) => (
    <Link key={href} href={href} onClick={close} aria-current={current(href)}>
      {mobile && <span className="studio-drawer-index">0{index + 1}</span>}
      <span>{name}</span>{mobile && <ArrowUpRight size={23} aria-hidden="true" />}
    </Link>
  ));
  const groups = () => <div className="studio-mega-groups">{serviceGroups.map(group => (
    <div key={group.title}><h2>{group.title}</h2>{group.links.map(service => (
      <Link key={service.slug} href={"/" + service.slug} onClick={close} aria-current={current("/" + service.slug)}>
        {service.name}<ArrowUpRight size={15} aria-hidden="true" />
      </Link>
    ))}</div>
  ))}</div>;

  return <>
    <a href="#main-content" className="studio-skip-link">Skip to content</a>
    <header ref={header} className="studio-nav" onBlur={event => {
      if (!event.currentTarget.contains(event.relatedTarget as Node)) setServicesOpen(false);
    }}>
      <Link href="/" onClick={close} className="studio-nav-logo" aria-label="Sparklines Studio home">
        <Image src="/logo.png" alt="Sparklines Studio" width={140} height={42} priority unoptimized />
      </Link>
      <nav className="studio-desktop-links" aria-label="Main navigation">
        {links()}
        <div className="studio-services-nav">
          <button type="button" ref={servicesToggle} aria-expanded={servicesOpen} aria-controls="desktop-services-menu" onClick={() => setServicesOpen(!servicesOpen)}>
            Services <ChevronDown size={15} className={servicesOpen ? "is-rotated" : ""} />
          </button>
          {servicesOpen && <div id="desktop-services-menu" className="studio-mega-menu" data-lenis-prevent>
            <div className="studio-mega-intro"><span>THE SPARKLINES STUDIO</span><p>Good stories.<br />Considered experiences.</p><Link href="/services" onClick={close}>Explore all services <ArrowUpRight size={16} /></Link></div>
            {groups()}
          </div>}
        </div>
        <Link href="/contact" onClick={close} aria-current={current("/contact")}>Contact</Link>
        <Link href="/contact" onClick={close} className="studio-nav-cta">Let’s talk <ArrowUpRight size={16} /></Link>
      </nav>
      <button ref={toggle} type="button" className="studio-mobile-toggle" aria-label="Open navigation" aria-expanded={mobileOpen} aria-controls="studio-mobile-navigation" onClick={() => { setClosing(false); setMobileOpen(true); }}>
        <span className="studio-hamburger" aria-hidden="true"><span /><span /><span /></span>
      </button>
    </header>
    <dialog ref={drawer} id="studio-mobile-navigation" className="studio-mobile-dialog" data-closing={closing} aria-labelledby="studio-drawer-title"
      onCancel={event => { event.preventDefault(); close(); }}
      onClose={() => { setMobileOpen(false); setClosing(false); setMobileServicesOpen(false); toggle.current?.focus(); }}
      onClick={event => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) close();
      }}>
      {mobileOpen && <>
        <svg className="studio-drawer-liquid" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <motion.path fill="#93a5ff" initial={{ d: liquidClosed }} animate={{ d: closing ? [liquidOpen, liquidWave, liquidClosed] : [liquidClosed, liquidWave, liquidOpen] }} transition={{ duration: reducedMotion ? 0 : .62, times: [0, .7, 1], ease: [.65, 0, .25, 1] }} />
          <motion.path fill="#073bff" initial={{ d: liquidClosed }} animate={{ d: closing ? [liquidOpen, liquidWave, liquidClosed] : [liquidClosed, liquidWave, liquidOpen] }} transition={{ duration: reducedMotion ? 0 : .72, delay: closing || reducedMotion ? 0 : .07, times: [0, .7, 1], ease: [.65, 0, .25, 1] }} onAnimationComplete={() => { if (closing) drawer.current?.close(); }} />
        </svg>
        <div className="studio-drawer-heading">
          <span className="studio-drawer-brand"><Asterisk size={32} strokeWidth={1.5} aria-hidden="true" /><span>SPARKLINES<br />STUDIO</span></span>
          <button type="button" aria-label="Close navigation" onClick={close} autoFocus><span className="studio-hamburger is-open" aria-hidden="true"><span /><span /><span /></span></button>
        </div>
        <div className="studio-drawer-scroll" data-lenis-prevent>
          <div className="studio-drawer-intro"><span id="studio-drawer-title">EXPLORE THE STUDIO</span><p>A good place <em>to start.</em></p></div>
          <nav aria-label="Mobile navigation">
            {links(true)}
            <button type="button" className="studio-drawer-services" aria-controls="mobile-services-menu" aria-expanded={mobileServicesOpen} onClick={() => setMobileServicesOpen(!mobileServicesOpen)}>
              <span className="studio-drawer-index">05</span><span>Services</span><ChevronDown size={23} className={mobileServicesOpen ? "is-rotated" : ""} />
            </button>
            {mobileServicesOpen && <div id="mobile-services-menu">{groups()}<Link href="/services" className="studio-drawer-all" onClick={close}>Explore all services <ArrowUpRight size={17} /></Link></div>}
            <Link href="/contact" onClick={close} aria-current={current("/contact")}><span className="studio-drawer-index">06</span><span>Contact</span><ArrowUpRight size={23} aria-hidden="true" /></Link>
          </nav>
          <div className="studio-drawer-footer"><Link href="/contact" className="studio-drawer-cta" onClick={close}><span>Got a spark?<strong>Let’s make it happen.</strong></span><ArrowUpRight size={26} aria-hidden="true" /></Link><p className="studio-drawer-note"><span>Kolkata roots.<br />A wider perspective.</span><Asterisk size={32} strokeWidth={1.3} aria-hidden="true" /></p></div>
        </div>
      </>}
    </dialog>
  </>;
}
