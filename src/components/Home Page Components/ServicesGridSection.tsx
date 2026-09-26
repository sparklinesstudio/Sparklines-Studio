"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

// =========================================================================
// 1. ANIMATED 3D SVGS (INTERACTIVE ON CARD HOVER)
// =========================================================================

interface SVGProps {
  isHovered: boolean;
}

/**
 * 1. Vintage Cinema Camera SVG (Video Production)
 * - Reels spin continuously when hovered (one clockwise, one counter-clockwise)
 * - Tally recording red light pulses
 * - Camera chassis tilts with micro-spring
 * - Lens gleam glints
 */
function CineCameraSVG({ isHovered }: SVGProps) {
  return (
    <svg
      viewBox="0 0 240 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.22)] select-none"
    >
      <defs>
        <linearGradient id="camReelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3f3f46" />
          <stop offset="50%" stopColor="#18181b" />
          <stop offset="100%" stopColor="#09090b" />
        </linearGradient>
        <radialGradient id="camHub" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e4e4e7" />
          <stop offset="40%" stopColor="#71717a" />
          <stop offset="100%" stopColor="#18181b" />
        </radialGradient>
        <linearGradient id="camBodyGrad" x1="0%" y1="0%" x2="100%" y2="80%">
          <stop offset="0%" stopColor="#3f3f46" />
          <stop offset="35%" stopColor="#27272a" />
          <stop offset="80%" stopColor="#18181b" />
          <stop offset="100%" stopColor="#09090b" />
        </linearGradient>
        <linearGradient id="camLensCoating" x1="20%" y1="10%" x2="80%" y2="90%">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.85" />
          <stop offset="45%" stopColor="#818cf8" stopOpacity="0.5" />
          <stop offset="85%" stopColor="#312e81" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>

      {/* Ground Cast Ambient Shadow */}
      <ellipse cx="120" cy="180" rx="75" ry="12" fill="black" fillOpacity="0.25" filter="blur(6px)" />

      <motion.g
        animate={isHovered ? { y: -3, rotate: -1.5 } : { y: 0, rotate: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* REEL 1 (Left Back Reel) - Spins on hover */}
        <g transform="translate(80, 68)">
          <motion.g
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ repeat: isHovered ? Infinity : 0, duration: 2.8, ease: "linear" }}
          >
            <circle cx="0" cy="0" r="32" fill="url(#camReelGrad)" stroke="#52525b" strokeWidth="2.5" />
            <circle cx="0" cy="0" r="24" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
            {[0, 60, 120, 180, 240, 300].map((deg) => (
              <circle
                key={deg}
                cx={Math.cos((deg * Math.PI) / 180) * 15}
                cy={Math.sin((deg * Math.PI) / 180) * 15}
                r="4"
                fill="#09090b"
              />
            ))}
            <circle cx="0" cy="0" r="10" fill="url(#camHub)" stroke="#52525b" strokeWidth="1" />
            <circle cx="0" cy="0" r="3" fill="#09090b" />
          </motion.g>
        </g>

        {/* REEL 2 (Right Front Reel) - Overlapping, spins on hover */}
        <g transform="translate(125, 55)">
          <motion.g
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ repeat: isHovered ? Infinity : 0, duration: 2.2, ease: "linear" }}
          >
            <circle cx="0" cy="0" r="38" fill="url(#camReelGrad)" stroke="#71717a" strokeWidth="3" />
            <circle cx="0" cy="0" r="29" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
            {[30, 90, 150, 210, 270, 330].map((deg) => (
              <circle
                key={deg}
                cx={Math.cos((deg * Math.PI) / 180) * 18}
                cy={Math.sin((deg * Math.PI) / 180) * 18}
                r="5"
                fill="#09090b"
              />
            ))}
            <circle cx="0" cy="0" r="12" fill="url(#camHub)" stroke="#71717a" strokeWidth="1.2" />
            <circle cx="0" cy="0" r="3.5" fill="#09090b" />
          </motion.g>
        </g>

        {/* CAMERA MAIN CHASSIS BODY */}
        <rect x="68" y="98" width="95" height="62" rx="10" fill="url(#camBodyGrad)" stroke="#52525b" strokeWidth="1.5" />
        {/* Top Chamfer Reflection */}
        <path d="M 74 100 L 157 100" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.45" strokeLinecap="round" />

        {/* Side Panel Inset & Screws */}
        <rect x="76" y="106" width="44" height="44" rx="6" fill="#121215" stroke="#27272a" strokeWidth="1" />
        <circle cx="83" cy="113" r="1.8" fill="#71717a" />
        <circle cx="113" cy="113" r="1.8" fill="#71717a" />
        <circle cx="83" cy="143" r="1.8" fill="#71717a" />
        <circle cx="113" cy="143" r="1.8" fill="#71717a" />

        {/* Center Control Dial */}
        <circle cx="98" cy="128" r="9" fill="url(#camHub)" stroke="#3f3f46" strokeWidth="1" />
        <circle cx="98" cy="128" r="4.5" fill="#09090b" />

        {/* Audio VU Meter */}
        <rect x="127" y="108" width="28" height="14" rx="2" fill="#09090b" stroke="#3f3f46" strokeWidth="0.8" />
        <rect x="130" y="112" width="3" height="6" rx="0.5" fill="#22c55e" />
        <rect x="135" y="112" width="3" height="6" rx="0.5" fill="#22c55e" />
        <rect x="140" y="112" width="3" height="6" rx="0.5" fill="#eab308" />
        <rect x="145" y="112" width="3" height="6" rx="0.5" fill="#ef4444" />

        {/* Red Recording Tally Indicator (Blinks on hover) */}
        <motion.circle
          cx="152"
          cy="138"
          r="3.5"
          fill="#ef4444"
          stroke="#991b1b"
          strokeWidth="0.8"
          animate={isHovered ? { opacity: [1, 0.25, 1], scale: [1, 1.25, 1] } : { opacity: 0.85, scale: 1 }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        />
        <circle cx="152" cy="138" r="1.2" fill="#fca5a5" />

        {/* Viewfinder Eyepiece (Back Left) */}
        <rect x="48" y="114" width="20" height="18" rx="3" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
        <ellipse cx="46" cy="123" rx="4" ry="10" fill="#09090b" stroke="#52525b" strokeWidth="1" />

        {/* LENS BARREL EXTENSION (Front Right) */}
        <path d="M 162 108 L 176 113 L 176 149 L 162 154 Z" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
        <rect x="175" y="114" width="14" height="34" rx="2" fill="#27272a" stroke="#52525b" strokeWidth="1" />
        <line x1="179" y1="116" x2="179" y2="146" stroke="#52525b" strokeWidth="1" />
        <line x1="183" y1="116" x2="183" y2="146" stroke="#52525b" strokeWidth="1" />

        {/* Matte Box & Front Lens Element */}
        <path d="M 188 112 L 208 104 L 208 158 L 188 150 Z" fill="#141416" stroke="#52525b" strokeWidth="1" />
        <ellipse cx="208" cy="131" rx="6.5" ry="26" fill="url(#camLensCoating)" stroke="#93c5fd" strokeWidth="1.2" />

        {/* Lens Reflection Highlight (Pulsing gleam on hover) */}
        <motion.path
          d="M 207 112 Q 211 131 207 150"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          animate={isHovered ? { opacity: [0.6, 1, 0.6] } : { opacity: 0.7 }}
          transition={{ repeat: Infinity, duration: 1.2 }}
        />
        <circle cx="208" cy="120" r="2.2" fill="#ffffff" opacity="0.9" />

        {/* Base Plate & Mount */}
        <rect x="72" y="160" width="85" height="9" rx="2" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
        <rect x="92" y="169" width="45" height="6" rx="1.5" fill="#09090b" stroke="#27272a" strokeWidth="0.8" />
      </motion.g>
    </svg>
  );
}

/**
 * 2. 3D Beveled Cursor SVG (Pay-Per-Click Advertising)
 * - Emits expanding animated "click" ripple rings from tip when hovered
 * - Simulates a springy tactile click motion
 * - Rich extruded beveled sides in warm gold/bronze
 */
function Cursor3DSVG({ isHovered }: SVGProps) {
  return (
    <svg
      viewBox="0 0 240 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.32)] select-none"
    >
      <defs>
        <linearGradient id="curFace" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="65%" stopColor="#fef3f2" />
          <stop offset="100%" stopColor="#fed7aa" />
        </linearGradient>
        <linearGradient id="curBevelRight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="30%" stopColor="#ea580c" />
          <stop offset="80%" stopColor="#9a3412" />
          <stop offset="100%" stopColor="#7c2d12" />
        </linearGradient>
        <linearGradient id="curBevelBottom" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7c2d12" />
          <stop offset="50%" stopColor="#c2410c" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
      </defs>

      {/* Ground Cast Ambient Shadow */}
      <ellipse cx="140" cy="175" rx="55" ry="14" fill="#000000" fillOpacity="0.25" filter="blur(8px)" />

      {/* ANIMATED CLICK RIPPLES (Emit from pointer tip on hover) */}
      <motion.circle
        cx="155"
        cy="36"
        r="14"
        stroke="#ffffff"
        strokeWidth="2.5"
        fill="none"
        initial={{ scale: 0.3, opacity: 0 }}
        animate={isHovered ? { scale: [0.3, 2.2], opacity: [0.9, 0] } : { scale: 0.3, opacity: 0 }}
        transition={{ repeat: Infinity, duration: 1.1, ease: "easeOut" }}
      />
      <motion.circle
        cx="155"
        cy="36"
        r="14"
        stroke="#fed7aa"
        strokeWidth="1.8"
        fill="none"
        initial={{ scale: 0.3, opacity: 0 }}
        animate={isHovered ? { scale: [0.3, 2.2], opacity: [0.7, 0] } : { scale: 0.3, opacity: 0 }}
        transition={{ repeat: Infinity, duration: 1.1, delay: 0.35, ease: "easeOut" }}
      />

      {/* CURSOR CHASSIS (Click spring animation on hover) */}
      <motion.g
        animate={
          isHovered
            ? { scale: [1, 0.94, 1], y: [0, 2.5, 0] }
            : { y: [0, -3, 0] }
        }
        transition={
          isHovered
            ? { repeat: Infinity, duration: 1.1, ease: "easeInOut" }
            : { repeat: Infinity, duration: 3.5, ease: "easeInOut" }
        }
      >
        {/* 3D Extruded Depth Bevels */}
        <path d="M 166 38 L 198 145 L 186 153 L 154 46 Z" fill="url(#curBevelRight)" />
        <path d="M 198 145 L 162 130 L 150 138 L 186 153 Z" fill="url(#curBevelBottom)" />
        <path d="M 162 130 L 190 174 L 178 182 L 150 138 Z" fill="url(#curBevelRight)" />
        <path d="M 190 174 L 158 186 L 146 178 L 178 182 Z" fill="#5c1d09" />
        <path d="M 158 186 L 130 142 L 122 134 L 146 178 Z" fill="#9a3412" />
        <path d="M 130 142 L 98 158 L 90 150 L 122 134 Z" fill="url(#curBevelBottom)" />
        <path d="M 98 158 L 154 46 L 166 38 L 90 150 Z" fill="url(#curBevelRight)" opacity="0.9" />

        {/* TOP GLOSSY FACE */}
        <path
          d="M 154 38 L 186 142 L 150 126 L 178 170 L 146 182 L 118 138 L 86 154 Z"
          fill="url(#curFace)"
          stroke="#ffffff"
          strokeWidth="2"
        />

        {/* Knife-Edge Specular Light Reflection */}
        <path d="M 154 40 L 88 152" stroke="#ffffff" strokeWidth="2.8" strokeLinecap="round" opacity="0.95" />
        <path d="M 152 44 L 181 138 L 150 125" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" opacity="0.75" />

        {/* Tip Click Starburst Flare */}
        <motion.g
          animate={isHovered ? { rotate: 180, scale: [0.9, 1.4, 0.9] } : { scale: 1, rotate: 0 }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{ originX: "154px", originY: "38px" }}
        >
          <circle cx="154" cy="38" r="3.5" fill="#ffffff" />
          <path d="M 154 31 L 154 45 M 147 38 L 161 38" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
        </motion.g>
      </motion.g>
    </svg>
  );
}

/**
 * 3. 3D Dartboard Bullseye & Darts SVG (Social Media Marketing)
 * - Concentric bullseye rings pulse with viral reach waves on hover
 * - 3 Aerodynamic darts vibrate/tremor on impact
 * - Impact spark particles sparkle from center
 */
function DartboardSVG({ isHovered }: SVGProps) {
  return (
    <svg
      viewBox="0 0 240 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] select-none"
    >
      <defs>
        <radialGradient id="dartPlate" cx="45%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#27272a" />
          <stop offset="85%" stopColor="#0d0d10" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        <linearGradient id="chromeShaft" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f4f4f5" />
          <stop offset="40%" stopColor="#a1a1aa" />
          <stop offset="70%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#52525b" />
        </linearGradient>
        <linearGradient id="flightRed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff7844" />
          <stop offset="50%" stopColor="#f95721" />
          <stop offset="100%" stopColor="#b91c1c" />
        </linearGradient>
      </defs>

      {/* ANGLED PERSPECTIVE DARTBOARD BASE */}
      <g transform="translate(155, 130) rotate(-22)">
        <ellipse cx="0" cy="0" rx="75" ry="50" fill="url(#dartPlate)" stroke="#52525b" strokeWidth="3" />
        {/* Outer White Ring */}
        <ellipse cx="0" cy="0" rx="63" ry="42" fill="none" stroke="#f4f4f5" strokeWidth="5.5" opacity="0.9" />
        {/* Orange Multiplier Ring */}
        <ellipse cx="0" cy="0" rx="48" ry="32" fill="none" stroke="#f95721" strokeWidth="5" />
        {/* Inner White Ring */}
        <ellipse cx="0" cy="0" rx="35" ry="23" fill="none" stroke="#f4f4f5" strokeWidth="5" opacity="0.9" />

        {/* VIRAL REACH ENGAGEMENT WAVE (Pulsing ripple on hover) */}
        <motion.ellipse
          cx="0"
          cy="0"
          rx="21"
          ry="14"
          fill="none"
          stroke="#f95721"
          strokeWidth="3"
          animate={isHovered ? { rx: [21, 55], ry: [14, 37], opacity: [0.9, 0] } : { rx: 21, ry: 14, opacity: 0.9 }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeOut" }}
        />

        {/* Center Bullseye */}
        <ellipse cx="0" cy="0" rx="12" ry="8" fill="#ef4444" stroke="#ffffff" strokeWidth="1.2" />
        <ellipse cx="0" cy="0" rx="5" ry="3.5" fill="#fde047" />

        {/* Spider Wire Dividers */}
        {[0, 45, 90, 135].map((deg) => (
          <line
            key={deg}
            x1={Math.cos((deg * Math.PI) / 180) * -70}
            y1={Math.sin((deg * Math.PI) / 180) * -45}
            x2={Math.cos((deg * Math.PI) / 180) * 70}
            y2={Math.sin((deg * Math.PI) / 180) * 45}
            stroke="#71717a"
            strokeWidth="0.8"
            opacity="0.5"
          />
        ))}
      </g>

      {/* DART 1 (Center Bullseye Target Hit - Tremors on hover) */}
      <motion.g
        transform="translate(135, 118)"
        animate={isHovered ? { x: [0, -2, 1.5, -0.8, 0], y: [0, 1.5, -1, 0.5, 0] } : {}}
        transition={{ repeat: isHovered ? Infinity : 0, repeatDelay: 0.8, duration: 0.3 }}
      >
        <path d="M 0 0 L -38 -38" stroke="url(#chromeShaft)" strokeWidth="3.5" strokeLinecap="round" />
        <rect x="-25" y="-25" width="10" height="5" rx="1.5" fill="url(#chromeShaft)" transform="rotate(45 -20 -22)" />
        {/* Sculpted Wings */}
        <path d="M -38 -38 C -34 -55 -21 -59 -17 -51 C -21 -42 -30 -38 -38 -38 Z" fill="url(#flightRed)" stroke="#fca5a5" strokeWidth="0.8" />
        <path d="M -38 -38 C -55 -51 -59 -38 -51 -34 C -42 -38 -38 -30 -38 -38 Z" fill="url(#flightRed)" stroke="#fca5a5" strokeWidth="0.8" />
        <path d="M -38 -38 C -46 -21 -38 -13 -30 -21 C -30 -30 -34 -34 -38 -38 Z" fill="#b91c1c" stroke="#fca5a5" strokeWidth="0.8" />
        <circle cx="-38" cy="-38" r="3" fill="#fef08a" />
      </motion.g>

      {/* DART 2 (Upper Cluster Dart) */}
      <motion.g
        transform="translate(118, 102)"
        animate={isHovered ? { x: [0, -1.8, 1, 0], y: [0, 1.2, -0.8, 0] } : {}}
        transition={{ repeat: isHovered ? Infinity : 0, repeatDelay: 0.9, delay: 0.1, duration: 0.3 }}
      >
        <path d="M 0 0 L -38 -46" stroke="url(#chromeShaft)" strokeWidth="3" strokeLinecap="round" />
        <rect x="-25" y="-30" width="8" height="4" rx="1" fill="url(#chromeShaft)" transform="rotate(50 -21 -28)" />
        <path d="M -38 -46 C -34 -63 -19 -65 -17 -54 C -21 -48 -32 -46 -38 -46 Z" fill="url(#flightRed)" />
        <path d="M -38 -46 C -57 -57 -60 -42 -50 -38 C -43 -42 -40 -38 -38 -46 Z" fill="url(#flightRed)" />
        <path d="M -38 -46 C -46 -29 -35 -21 -29 -29 Z" fill="#991b1b" />
        <circle cx="-38" cy="-46" r="2.5" fill="#fef08a" />
      </motion.g>

      {/* DART 3 (Lower Cluster Dart) */}
      <motion.g
        transform="translate(152, 110)"
        animate={isHovered ? { x: [0, -1.5, 1.2, 0], y: [0, 1.4, -0.9, 0] } : {}}
        transition={{ repeat: isHovered ? Infinity : 0, repeatDelay: 1, delay: 0.2, duration: 0.3 }}
      >
        <path d="M 0 0 L -34 -42" stroke="url(#chromeShaft)" strokeWidth="3" strokeLinecap="round" />
        <rect x="-24" y="-27" width="8" height="4" rx="1" fill="url(#chromeShaft)" transform="rotate(48 -20 -25)" />
        <path d="M -34 -42 C -30 -59 -15 -61 -15 -51 C -19 -46 -27 -42 -34 -42 Z" fill="url(#flightRed)" />
        <path d="M -34 -42 C -51 -52 -55 -38 -47 -34 C -41 -38 -37 -35 -34 -42 Z" fill="url(#flightRed)" />
        <path d="M -34 -42 C -42 -27 -32 -19 -27 -25 Z" fill="#991b1b" />
        <circle cx="-34" cy="-42" r="2.5" fill="#fef08a" />
      </motion.g>

      {/* Sparkle Impact Hit Flare */}
      <motion.circle
        cx="135"
        cy="118"
        r="4"
        fill="#fde047"
        animate={isHovered ? { scale: [1, 2, 1], opacity: [0.8, 1, 0.8] } : { scale: 1, opacity: 0.8 }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      />
    </svg>
  );
}

/**
 * 4. 3D Magnifying Glass SVG (Search Engine Optimization)
 * - Sweeps across scanning for keywords when hovered
 * - Refractive lens specular sheen sweeps across glass
 * - Reveals green "#1" Search Ranking badge underneath lens
 */
function MagnifyingGlassSVG({ isHovered }: SVGProps) {
  return (
    <svg
      viewBox="0 0 240 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.28)] select-none"
    >
      <defs>
        <linearGradient id="magChrome" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="25%" stopColor="#cbd5e1" />
          <stop offset="50%" stopColor="#475569" />
          <stop offset="75%" stopColor="#64748b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <radialGradient id="magLens" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="35%" stopColor="#e0f2fe" stopOpacity="0.45" />
          <stop offset="75%" stopColor="#bae6fd" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#0284c7" stopOpacity="0.12" />
        </radialGradient>
        <linearGradient id="magHandle" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="35%" stopColor="#0f172a" />
          <stop offset="70%" stopColor="#020617" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
      </defs>

      {/* Ground Cast Ambient Shadow */}
      <ellipse cx="145" cy="175" rx="55" ry="12" fill="black" fillOpacity="0.22" filter="blur(6px)" />

      {/* REVEALED UNDERNEATH: SEO #1 Search Ranking Badge (Visible on hover) */}
      <motion.g
        transform="translate(130, 80)"
        animate={isHovered ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0.35, scale: 0.9, y: 4 }}
        transition={{ duration: 0.4 }}
      >
        <rect x="-35" y="-14" width="70" height="28" rx="14" fill="#22c55e" stroke="#ffffff" strokeWidth="2" filter="drop-shadow(0 4px 8px rgba(34,197,94,0.4))" />
        <text x="0" y="5" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
          ★ #1 RANK
        </text>
      </motion.g>

      {/* SCANNING MAGNIFYING GLASS ASSEMBLY (Organic search sweep motion on hover) */}
      <motion.g
        animate={
          isHovered
            ? { x: [-5, 6, -3, 0], y: [-3, 4, -2, 0], rotate: [-2, 3, -1, 0] }
            : { x: 0, y: 0, rotate: 0 }
        }
        transition={{ repeat: isHovered ? Infinity : 0, duration: 2.8, ease: "easeInOut" }}
        style={{ originX: "155px", originY: "82px" }}
      >
        {/* Handle (Tilted down-left) */}
        <g transform="translate(118, 126) rotate(52)">
          <rect x="-7" y="0" width="14" height="15" rx="2" fill="url(#magChrome)" stroke="#64748b" strokeWidth="0.8" />
          <line x1="-7" y1="5" x2="7" y2="5" stroke="#1e293b" strokeWidth="1" />
          <line x1="-7" y1="10" x2="7" y2="10" stroke="#ffffff" strokeWidth="0.8" />
          <path
            d="M -6 15 L -8 72 C -8 80 -3 85 0 85 C 3 85 8 80 8 72 L 6 15 Z"
            fill="url(#magHandle)"
            stroke="#0f172a"
            strokeWidth="1.2"
          />
          <path d="M -3 17 L -4 75" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
          <ellipse cx="0" cy="83" rx="6" ry="2.5" fill="url(#magChrome)" />
        </g>

        {/* Circular Magnifying Bezel & Glass Lens */}
        <g transform="translate(155, 82)">
          <circle cx="0" cy="0" r="52" fill="url(#magChrome)" stroke="#0f172a" strokeWidth="2.5" />
          <circle cx="0" cy="0" r="45" fill="#09090b" stroke="#64748b" strokeWidth="1.2" />
          <circle cx="0" cy="0" r="42" fill="none" stroke="#ffffff" strokeWidth="1.2" opacity="0.75" />
          <circle cx="0" cy="0" r="41" fill="url(#magLens)" />

          {/* Sweeping Refraction Specular Sheen (Moves on hover) */}
          <motion.path
            d="M -28 -20 C -20 -35 5 -38 24 -26 C 12 -28 -12 -26 -20 -12 Z"
            fill="#ffffff"
            animate={isHovered ? { opacity: [0.5, 1, 0.5], x: [-6, 6, -6] } : { opacity: 0.75, x: 0 }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          />
          <path
            d="M -20 26 C 0 36 20 32 30 16 C 20 26 4 28 -14 20 Z"
            fill="#ffffff"
            opacity="0.45"
          />
          <circle cx="-12" cy="-28" r="2.5" fill="#ffffff" />
        </g>
      </motion.g>
    </svg>
  );
}

/**
 * 5. 3D Responsive Browser UI SVG (Website Design)
 * - Layer separation: Top UI card & analytics card lift off in exploded 3D view on hover
 * - Real-time animated sparkline chart draws across
 * - Code badge `</>` floats and wiggles
 */
function WebsiteDesignSVG({ isHovered }: SVGProps) {
  return (
    <svg
      viewBox="0 0 240 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.25)] select-none"
    >
      <defs>
        <linearGradient id="webWindow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f1f5f9" />
        </linearGradient>
        <linearGradient id="webCardGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f8fafc" />
        </linearGradient>
        <linearGradient id="webOrange" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f95721" />
          <stop offset="100%" stopColor="#ff7a45" />
        </linearGradient>
      </defs>

      {/* ISOMETRIC BROWSER WINDOW SHELL */}
      <g transform="translate(130, 95) rotate(-10) skewX(-6)">
        {/* Main Window */}
        <rect
          x="-70"
          y="-52"
          width="140"
          height="105"
          rx="12"
          fill="url(#webWindow)"
          stroke="#cbd5e1"
          strokeWidth="1.8"
          filter="drop-shadow(0 10px 20px rgba(0,0,0,0.08))"
        />

        {/* Browser Top Navigation Bar */}
        <path d="M -70 -40 L 70 -40" stroke="#e2e8f0" strokeWidth="1.2" />
        <circle cx="-58" cy="-46" r="2.8" fill="#ef4444" />
        <circle cx="-50" cy="-46" r="2.8" fill="#eab308" />
        <circle cx="-42" cy="-46" r="2.8" fill="#22c55e" />
        <rect x="-30" cy="-49" width="75" height="6.5" rx="3" fill="#e2e8f0" />

        {/* DETACHED UI CARD 1: Hero Block (Exploded 3D Lift on Hover) */}
        <motion.g
          animate={isHovered ? { y: -8, scale: 1.04 } : { y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 280, damping: 18 }}
        >
          <rect x="-60" y="-30" width="70" height="42" rx="6" fill="url(#webCardGlow)" stroke="#cbd5e1" strokeWidth="1" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.06))" />
          <rect x="-52" y="-22" width="32" height="4" rx="1.5" fill="#0f172a" />
          <rect x="-52" y="-14" width="44" height="2.5" rx="1" fill="#94a3b8" />
          <rect x="-52" y="-8" width="28" height="2.5" rx="1" fill="#94a3b8" />
          <rect x="-52" y="-1" width="22" height="6.5" rx="3" fill="url(#webOrange)" />
        </motion.g>

        {/* DETACHED UI CARD 2: Analytics Chart (Lifts with live animated drawing line) */}
        <motion.g
          animate={isHovered ? { y: -10, x: 3, scale: 1.05 } : { y: 0, x: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.05 }}
        >
          <rect x="16" y="-30" width="44" height="34" rx="5" fill="#0f172a" stroke="#1e293b" strokeWidth="1" filter="drop-shadow(0 6px 12px rgba(0,0,0,0.15))" />
          <motion.path
            d="M 22 -6 L 30 -16 L 38 -10 L 52 -24"
            stroke="#f95721"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0.5 }}
            animate={isHovered ? { pathLength: [0.3, 1, 0.3] } : { pathLength: 0.6 }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
          <circle cx="52" cy="-24" r="2.5" fill="#f95721" />
        </motion.g>

        {/* Bottom Responsive Layout Modules */}
        <rect x="-60" y="18" width="34" height="26" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.8" />
        <rect x="-20" y="18" width="34" height="26" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.8" />
        <rect x="20" y="18" width="40" height="26" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.8" />
      </g>

      {/* FLOATING 3D CODE PILL: </> (Floats & wiggles on hover) */}
      <motion.g
        transform="translate(170, 145)"
        animate={
          isHovered
            ? { y: [-2, -8, -2], rotate: [8, -4, 8], scale: 1.1 }
            : { y: 0, rotate: 8, scale: 1 }
        }
        transition={
          isHovered
            ? { repeat: Infinity, duration: 2, ease: "easeInOut" }
            : { duration: 0.3 }
        }
      >
        <rect x="-24" y="-12" width="48" height="24" rx="12" fill="#0f172a" stroke="#ffffff" strokeWidth="1.8" filter="drop-shadow(0 8px 16px rgba(0,0,0,0.2))" />
        <text x="0" y="4" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
          &lt;/&gt;
        </text>
      </motion.g>
    </svg>
  );
}

/**
 * 6. 3D Faceted Diamond Prism SVG (Branding)
 * - Shimmers and oscillates on hover with iridescent light
 * - Golden ratio geometric arcs spin smoothly in background
 * - Vertex sparkle flare twinkles
 */
function BrandingPrismSVG({ isHovered }: SVGProps) {
  return (
    <svg
      viewBox="0 0 240 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.35)] select-none"
    >
      <defs>
        <linearGradient id="gemTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#e0e7ff" />
          <stop offset="100%" stopColor="#c7d2fe" />
        </linearGradient>
        <linearGradient id="gemCenter" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#a5b4fc" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="gemLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="60%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#3730a3" />
        </linearGradient>
        <linearGradient id="gemRight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="60%" stopColor="#3730a3" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>
        <linearGradient id="gemBottom" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4338ca" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>
      </defs>

      {/* GOLDEN RATIO PRECISION ARCS (Spin smoothly in background) */}
      <g transform="translate(145, 95)">
        <motion.ellipse
          cx="0"
          cy="0"
          rx="62"
          ry="62"
          stroke="#ffffff"
          strokeWidth="0.8"
          strokeDasharray="3 3"
          opacity="0.3"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: isHovered ? 12 : 32, ease: "linear" }}
        />
        <motion.ellipse
          cx="0"
          cy="0"
          rx="42"
          ry="42"
          stroke="#ffffff"
          strokeWidth="0.8"
          strokeDasharray="2 2"
          opacity="0.25"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: isHovered ? 10 : 26, ease: "linear" }}
        />
      </g>

      {/* 3D FACETED GEMSTONE PRISM */}
      <motion.g
        transform="translate(145, 95)"
        animate={
          isHovered
            ? { rotate: [-3, 5, -3], y: [-2, 2, -2] }
            : { rotate: 0, y: 0 }
        }
        transition={{ repeat: isHovered ? Infinity : 0, duration: 3.2, ease: "easeInOut" }}
      >
        {/* Top Flat Table Facet */}
        <polygon points="0,-48 38,-28 0,-12 -38,-28" fill="url(#gemTop)" stroke="#ffffff" strokeWidth="1.2" />

        {/* Upper Left Kite */}
        <polygon points="-38,-28 0,-12 -22,20 -55,4" fill="url(#gemLeft)" stroke="#ffffff" strokeWidth="1" />

        {/* Upper Center Shield */}
        <polygon points="0,-12 22,20 0,32 -22,20" fill="url(#gemCenter)" stroke="#ffffff" strokeWidth="1.2" />

        {/* Upper Right Kite */}
        <polygon points="0,-12 38,-28 55,4 22,20" fill="url(#gemRight)" stroke="#ffffff" strokeWidth="1" />

        {/* Lower Left Pavilion */}
        <polygon points="-55,4 -22,20 0,60 -32,36" fill="url(#gemBottom)" stroke="#c7d2fe" strokeWidth="0.8" />

        {/* Lower Center Pavilion */}
        <polygon points="-22,20 0,32 22,20 0,60" fill="url(#gemLeft)" stroke="#ffffff" strokeWidth="1.2" />

        {/* Lower Right Pavilion */}
        <polygon points="22,20 55,4 32,36 0,60" fill="url(#gemBottom)" stroke="#c7d2fe" strokeWidth="0.8" />

        {/* Specular Edge Highlights */}
        <line x1="0" y1="-48" x2="0" y2="-12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        <line x1="0" y1="-12" x2="0" y2="32" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" opacity="0.85" />

        {/* Vertex Twinkle Flare (Twinkles on hover) */}
        <motion.g
          transform="translate(-38, -28)"
          animate={
            isHovered
              ? { scale: [0.6, 1.4, 0.6], rotate: [0, 90, 180], opacity: [0.6, 1, 0.6] }
              : { scale: 0.9, opacity: 0.7 }
          }
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          <circle cx="0" cy="0" r="3" fill="#ffffff" />
          <path d="M 0 -8 L 0 8 M -8 0 L 8 0" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
        </motion.g>
      </motion.g>
    </svg>
  );
}

// =========================================================================
// 2. CARD CONFIGURATION (3x2 GRID: ORANGE, BLUE, BLACK, GRAY STONE, BLUE STONE, ETC.)
// =========================================================================

interface ServiceCardItem {
  id: string;
  titleFirst: string;
  titleSecond: string;
  href: string;
  // Visual Theme Styling
  cardBg: string;
  titleFirstColor: string;
  titleSecondColor: string;
  btnCircleBg: string;
  btnCircleTextColor: string;
  btnTextColor: string;
  renderGraphic: (props: SVGProps) => React.JSX.Element;
}

const SERVICES_DATA: ServiceCardItem[] = [
  // ROW 1
  {
    id: "video-production",
    titleFirst: "Video",
    titleSecond: "Production",
    href: "#contact",
    // Clean Stone White with crisp tactile border
    cardBg: "bg-white border border-zinc-200/90 shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)] hover:border-zinc-300",
    titleFirstColor: "text-zinc-950",
    titleSecondColor: "text-zinc-400",
    btnCircleBg: "bg-zinc-950 text-white",
    btnCircleTextColor: "text-white",
    btnTextColor: "text-zinc-950",
    renderGraphic: CineCameraSVG,
  },
  {
    id: "ppc-advertising",
    titleFirst: "Pay-per-click",
    titleSecond: "advertising",
    href: "#contact",
    // Signature Electric Brand Orange (Matches uploaded mockup)
    cardBg: "bg-gradient-to-br from-[#ff6433] via-[#f95721] to-[#e4420e] border border-orange-400/40 shadow-[0_10px_35px_rgba(249,87,33,0.3)] hover:shadow-[0_22px_50px_rgba(249,87,33,0.48)]",
    titleFirstColor: "text-white",
    titleSecondColor: "text-orange-100/90",
    btnCircleBg: "bg-white text-[#f95721]",
    btnCircleTextColor: "text-[#f95721]",
    btnTextColor: "text-white",
    renderGraphic: Cursor3DSVG,
  },
  {
    id: "social-media",
    titleFirst: "Social Media",
    titleSecond: "Marketing",
    href: "#contact",
    // Stealth Matte Black / Midnight Charcoal (Matches uploaded mockup)
    cardBg: "bg-[#111114] border border-zinc-800 shadow-[0_10px_35px_rgba(0,0,0,0.45)] hover:shadow-[0_22px_50px_rgba(0,0,0,0.7)] hover:border-zinc-700",
    titleFirstColor: "text-white",
    titleSecondColor: "text-zinc-400",
    btnCircleBg: "bg-white text-zinc-950",
    btnCircleTextColor: "text-zinc-950",
    btnTextColor: "text-white",
    renderGraphic: DartboardSVG,
  },

  // ROW 2
  {
    id: "seo",
    titleFirst: "Search engine",
    titleSecond: "optimization",
    href: "#contact",
    // Vibrant Blue Stone / Blue 400 (Explicitly requested by user!)
    cardBg: "bg-gradient-to-br from-[#38bdf8] via-[#2563eb] to-[#1d4ed8] border border-blue-400/35 shadow-[0_10px_35px_rgba(37,99,235,0.28)] hover:shadow-[0_22px_50px_rgba(37,99,235,0.45)]",
    titleFirstColor: "text-white",
    titleSecondColor: "text-blue-100/90",
    btnCircleBg: "bg-white text-[#2563eb]",
    btnCircleTextColor: "text-[#2563eb]",
    btnTextColor: "text-white",
    renderGraphic: MagnifyingGlassSVG,
  },
  {
    id: "web-design",
    titleFirst: "Website",
    titleSecond: "Design",
    href: "#contact",
    // Refined Gray Stone / Cool Slate (Explicitly requested by user!)
    cardBg: "bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] border border-slate-300/90 shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)] hover:border-slate-400",
    titleFirstColor: "text-slate-900",
    titleSecondColor: "text-slate-500",
    btnCircleBg: "bg-slate-900 text-white",
    btnCircleTextColor: "text-white",
    btnTextColor: "text-slate-900",
    renderGraphic: WebsiteDesignSVG,
  },
  {
    id: "branding",
    titleFirst: "Branding",
    titleSecond: "Identity",
    href: "#contact",
    // Deep Royal Indigo / Midnight Stone
    cardBg: "bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#4338ca] border border-indigo-400/35 shadow-[0_10px_35px_rgba(49,46,129,0.32)] hover:shadow-[0_22px_50px_rgba(49,46,129,0.48)]",
    titleFirstColor: "text-white",
    titleSecondColor: "text-indigo-100/90",
    btnCircleBg: "bg-white text-[#312e81]",
    btnCircleTextColor: "text-[#312e81]",
    btnTextColor: "text-white",
    renderGraphic: BrandingPrismSVG,
  },
];

// =========================================================================
// 3. MAIN COMPONENT: ServicesGridSection
// =========================================================================

export function ServicesGridSection() {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  return (
    <section
      id="services-grid"
      className="relative bg-[#F4F4F6] py-20 sm:py-28 lg:py-32 border-b border-zinc-200/80 overflow-hidden"
    >
      {/* Expanded Container Width for Generous Breathing Room */}
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/90 px-3.5 py-1 text-xs font-semibold text-[#f95721] border border-orange-200/60 mb-3.5">
              <Sparkles className="h-3 w-3 text-[#f95721]" />
              Core Capabilities
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl font-editorial">
              Crafted for Growth & Authority
            </h2>
            <p className="mt-3.5 text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
              High-impact digital services designed to command prestige, dominate search rankings, and attract high-budget clients.
            </p>
          </div>

          <div className="hidden md:block">
            <Link
              href="#contact"
              className="relative inline-flex items-center gap-2 rounded-full bg-zinc-950/95 px-7 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.3)] border border-white/15 transition-all duration-300 hover:bg-[#f95721] hover:border-[#f95721]/50 hover:shadow-[0_6px_20px_rgba(249,87,33,0.35)] active:scale-95 group overflow-hidden"
            >
              <span className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              <span>Discuss a Custom Scope</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* 3x2 Grid Format */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const isHovered = hoveredCardId === service.id;
            const GraphicComponent = service.renderGraphic;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onMouseEnter={() => setHoveredCardId(service.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-[32px] p-7 sm:p-9 min-h-[250px] sm:min-h-[270px] lg:min-h-[280px] flex flex-col justify-between transition-all duration-300 cursor-pointer ${service.cardBg}`}
              >
                {/* Specular Inner Glaze Highlight */}
                <div className="pointer-events-none absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                {/* Left Side: Clean Typography & Learn More Action */}
                <div className="z-10 flex flex-col justify-between h-full min-h-[180px] max-w-[58%] select-none">
                  <div>
                    <h3 className="text-2xl sm:text-[26px] lg:text-[28px] font-bold tracking-tight leading-[1.14]">
                      <span className={`block font-bold ${service.titleFirstColor}`}>
                        {service.titleFirst}
                      </span>
                      <span className={`block font-medium mt-1 ${service.titleSecondColor}`}>
                        {service.titleSecond}
                      </span>
                    </h3>
                  </div>

                  {/* Bottom "LEARN MORE" Button (Matches reference image) */}
                  <div className="pt-6 sm:pt-8">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2.5 group/btn"
                    >
                      <div
                        className={`flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full ${service.btnCircleBg} shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12`}
                      >
                        <ArrowUpRight
                          className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${service.btnCircleTextColor} transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5`}
                        />
                      </div>
                      <span
                        className={`text-[11px] sm:text-xs font-bold tracking-wider uppercase ${service.btnTextColor}`}
                      >
                        LEARN MORE
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Right Side: Animated 3D SVG (Properly Sized & Positioned) */}
                <div className="pointer-events-none absolute right-1 bottom-1 sm:right-3 sm:bottom-3 w-[45%] sm:w-[46%] h-[82%] sm:h-[88%] flex items-center justify-center">
                  <GraphicComponent isHovered={isHovered} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
