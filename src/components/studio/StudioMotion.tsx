"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";

const MotionContext = createContext({ enabled: false, toggle: () => {} });

export function StudioMotion({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(!preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);
  return <MotionContext.Provider value={{ enabled, toggle: () => setEnabled(value => !value) }}>
    <div className={enabled ? "motion-enabled" : "motion-disabled"}>{children}</div>
  </MotionContext.Provider>;
}

export function MotionSwitch() {
  const { enabled, toggle } = useContext(MotionContext);
  return <button className="motion-switch" role="switch" aria-label="Motion effects" aria-checked={enabled} onClick={toggle}>
    <Sparkles size={14} /> Motion effects <span>{enabled ? "On" : "Off"}</span>
  </button>;
}

export function AmbientVideo({ src, poster, className = "" }: { src: string; poster: string; className?: string }) {
  const { enabled } = useContext(MotionContext);
  const ref = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const visible = useInView(ref, { margin: "100px" });
  useEffect(() => {
    if (visible && enabled) setLoaded(true);
    const video = ref.current;
    if (!video) return;
    const update = () => {
      if (visible && enabled && !document.hidden) void video.play().catch(() => {});
      else video.pause();
    };
    update();
    document.addEventListener("visibilitychange", update);
    return () => { document.removeEventListener("visibilitychange", update); video.pause(); };
  }, [visible, enabled, loaded]);
  return <video ref={ref} src={loaded ? src : undefined} poster={poster} muted loop playsInline preload="none" disablePictureInPicture aria-hidden="true" tabIndex={-1} className={className} />;
}

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const { enabled } = useContext(MotionContext);
  return <motion.div className={className} initial={false} whileInView={enabled ? { y: [24, 0] } : undefined} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

export function useStudioMotion() { return useContext(MotionContext); }
