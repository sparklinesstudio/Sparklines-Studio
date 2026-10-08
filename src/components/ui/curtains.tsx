"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";

export type CurtainEffect = "columns" | "wipe" | "doors";

interface CurtainsContextType {
  navigate: (href: string, effect?: CurtainEffect) => void;
  isTransitioning: boolean;
}

const CurtainsContext = createContext<CurtainsContextType>({
  navigate: () => {},
  isTransitioning: false,
});

export const useCurtains = () => useContext(CurtainsContext);

interface CurtainsProps {
  /**
   * Primary curtain color. Defaults to luminous lighter blue (#3b82f6).
   */
  color?: string;
  /**
   * Secondary lighter blue shade for soft alternating column tones (#60a5fa).
   */
  accentColor?: string;
  /**
   * Transition style: "columns" (staggered slats), "wipe" (single smooth wipe), "doors" (split center)
   */
  effect?: CurtainEffect;
  /**
   * Default number of columns on desktop (default: 5)
   */
  columnCount?: number;
  /**
   * Duration in seconds for cover/reveal (default: 0.5s for ultra-smooth motion)
   */
  duration?: number;
  /**
   * Stagger delay between columns (default: 0.035s)
   */
  stagger?: number;
}

type TransitionState = "idle" | "covering" | "covered" | "revealing";

// Ultra-smooth bespoke agency easing (Apple / Motion.dev fluid curve)
const SMOOTH_EASE = [0.65, 0, 0.35, 1] as const;

export function Curtains({
  color = "#3b82f6", // Vibrant Lighter Blue (replaces heavy dark blue & yellow)
  accentColor = "#60a5fa", // Soft Light Sky Blue
  effect = "columns",
  columnCount = 5,
  duration = 0.48,
  stagger = 0.035,
}: CurtainsProps) {
  const router = useRouter();
  const currentPathname = usePathname();

  const [state, setState] = useState<TransitionState>("idle");
  const [activeEffect, setActiveEffect] = useState<CurtainEffect>(effect);
  const [responsiveCols, setResponsiveCols] = useState(columnCount);

  const targetHrefRef = useRef<string | null>(null);
  const pendingPathRef = useRef<string | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive column adaptation:
  // Mobile (<640px): 3 columns (snappier, less visual clutter)
  // Tablet (<1024px): 4 columns
  // Desktop (>=1024px): 5 columns
  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setResponsiveCols(Math.min(columnCount, 3));
      } else if (width < 1024) {
        setResponsiveCols(Math.min(columnCount, 4));
      } else {
        setResponsiveCols(columnCount);
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns, { passive: true });
    return () => window.removeEventListener("resize", updateColumns);
  }, [columnCount]);

  const clearTimers = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const startReveal = useCallback(() => {
    setState("revealing");
    const totalDuration =
      (duration + (responsiveCols - 1) * stagger) * 1000 + 60;

    timerRef.current = setTimeout(() => {
      setState("idle");
      targetHrefRef.current = null;
      pendingPathRef.current = null;
    }, totalDuration);
  }, [duration, responsiveCols, stagger]);

  // When pathname changes after router.push, start the reveal
  useEffect(() => {
    if (state === "covered" && pendingPathRef.current) {
      const timeout = setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        startReveal();
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [currentPathname, state, startReveal]);

  // Programmatic curtain navigation
  const navigate = useCallback(
    (href: string, chosenEffect?: CurtainEffect) => {
      if (state !== "idle") return;

      setActiveEffect(chosenEffect || effect);
      targetHrefRef.current = href;

      try {
        const url = new URL(href, window.location.origin);
        pendingPathRef.current = url.pathname;
      } catch {
        pendingPathRef.current = href.split("?")[0].split("#")[0];
      }

      setState("covering");

      const coverDuration =
        (duration + (responsiveCols - 1) * stagger) * 1000;

      clearTimers();
      timerRef.current = setTimeout(() => {
        setState("covered");
        if (targetHrefRef.current) {
          router.push(targetHrefRef.current);
        }
      }, coverDuration);
    },
    [state, effect, duration, responsiveCols, stagger, router]
  );

  // Intercept internal link clicks seamlessly across the site
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.altKey ||
        e.shiftKey
      ) {
        return;
      }

      let target = e.target as HTMLElement | null;
      while (target && target.tagName !== "A") {
        target = target.parentElement;
      }

      if (!target || !(target instanceof HTMLAnchorElement)) return;

      const href = target.getAttribute("href");
      const targetAttr = target.getAttribute("target");

      if (!href || targetAttr === "_blank") return;

      // Ignore external protocols or mailto/tel
      if (
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
      ) {
        try {
          const targetUrl = new URL(href, window.location.origin);
          if (targetUrl.origin !== window.location.origin) return;
        } catch {
          return;
        }
      }

      try {
        const currentUrl = new URL(window.location.href);
        const targetUrl = new URL(href, window.location.origin);

        // If in-page anchor hash on the same path (e.g. /#contact, #about):
        if (targetUrl.pathname === currentUrl.pathname && targetUrl.hash) {
          return; // Let native smooth scroll happen
        }

        // If same exact URL
        if (
          targetUrl.pathname === currentUrl.pathname &&
          targetUrl.search === currentUrl.search &&
          !targetUrl.hash
        ) {
          return;
        }

        // Internal page transition
        e.preventDefault();
        navigate(targetUrl.pathname + targetUrl.search + targetUrl.hash);
      } catch {
        // fallback ignore
      }
    };

    document.addEventListener("click", handleDocumentClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleDocumentClick, {
        capture: true,
      });
    };
  }, [navigate]);

  useEffect(() => {
    return () => clearTimers();
  }, []);

  const isActive = state !== "idle";

  return (
    <CurtainsContext.Provider
      value={{
        navigate,
        isTransitioning: isActive,
      }}
    >
      {/* Overlay Container: Fully responsive across 100dvh & all screen sizes */}
      {isActive && (
        <div
          className="fixed inset-0 h-[100dvh] w-screen max-w-full pointer-events-auto z-[999999] overflow-hidden select-none"
          style={{ willChange: "transform" }}
          aria-hidden="true"
        >
          {/* Columns Curtain Effect (Fluid Staggered Slats) */}
          {activeEffect === "columns" && (
            <div className="relative flex w-full h-full">
              {Array.from({ length: responsiveCols }).map((_, index) => {
                const isEven = index % 2 === 0;
                const columnBg = isEven ? color : accentColor;
                const delay =
                  state === "covering"
                    ? index * stagger
                    : (responsiveCols - 1 - index) * stagger;

                return (
                  <motion.div
                    key={index}
                    initial={{ y: "-100%" }}
                    animate={{
                      y:
                        state === "covering" || state === "covered"
                          ? "0%"
                          : "100%",
                    }}
                    transition={{
                      duration,
                      delay,
                      ease: SMOOTH_EASE,
                    }}
                    style={{
                      flex: 1,
                      backgroundColor: columnBg,
                      // Subpixel anti-bleed overlap to guarantee zero hairline gaps on mobile & retina
                      marginLeft: index > 0 ? "-1px" : "0",
                      willChange: "transform",
                    }}
                    className="relative h-full shadow-[0_0_50px_rgba(59,130,246,0.18)]"
                  >
                    {/* Subtle, soft light specular gradients for velvety fluid feel */}
                    <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-b from-transparent to-black/10 pointer-events-none" />
                    <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* Wipe Curtain Effect */}
          {activeEffect === "wipe" && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{
                x:
                  state === "covering" || state === "covered"
                    ? "0%"
                    : "100%",
              }}
              transition={{
                duration: duration * 1.25,
                ease: SMOOTH_EASE,
              }}
              style={{
                background: `linear-gradient(135deg, ${accentColor} 0%, ${color} 100%)`,
                willChange: "transform",
              }}
              className="absolute inset-0 w-full h-full shadow-2xl"
            />
          )}

          {/* Doors Curtain Effect */}
          {activeEffect === "doors" && (
            <div className="relative flex w-full h-full">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{
                  x:
                    state === "covering" || state === "covered"
                      ? "0%"
                      : "-100%",
                }}
                transition={{
                  duration,
                  ease: SMOOTH_EASE,
                }}
                style={{ backgroundColor: color, willChange: "transform" }}
                className="w-1/2 h-full border-r border-white/15"
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{
                  x:
                    state === "covering" || state === "covered"
                      ? "0%"
                      : "100%",
                }}
                transition={{
                  duration,
                  ease: SMOOTH_EASE,
                }}
                style={{ backgroundColor: accentColor, willChange: "transform" }}
                className="w-1/2 h-full border-l border-white/15"
              />
            </div>
          )}
        </div>
      )}
    </CurtainsContext.Provider>
  );
}

/**
 * Optional dedicated Link component for explicit curtain navigation
 */
export function CurtainLink({
  href,
  children,
  className,
  effect,
  onClick,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  effect?: CurtainEffect;
}) {
  const { navigate } = useCurtains();

  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        if (onClick) onClick(e);
        if (!e.defaultPrevented) {
          e.preventDefault();
          navigate(href, effect);
        }
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
