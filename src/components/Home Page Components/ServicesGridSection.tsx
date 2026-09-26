"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

// =========================================================================
// HIGH-PRECISION 3D-STYLED SVGS MATCHING THE USER REFERENCE DESIGN
// =========================================================================

/**
 * 1. Vintage Cinema Camera SVG (Video Production)
 * Rich matte-black body, dual top film reels with spokes, multi-ring lens, metallic highlights.
 */
function CineCameraSVG() {
  return (
    <svg
      viewBox="0 0 280 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.25)]"
    >
      <defs>
        {/* Gradients for reels and body */}
        <linearGradient id="reelGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#404045" />
          <stop offset="50%" stopColor="#1c1c1f" />
          <stop offset="100%" stopColor="#0d0d10" />
        </linearGradient>
        <linearGradient id="reelRim" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#71717a" />
          <stop offset="50%" stopColor="#27272a" />
          <stop offset="100%" stopColor="#18181b" />
        </linearGradient>
        <radialGradient id="reelCenter" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#d4d4d8" />
          <stop offset="35%" stopColor="#71717a" />
          <stop offset="70%" stopColor="#27272a" />
          <stop offset="100%" stopColor="#09090b" />
        </radialGradient>
        <linearGradient id="bodyMetal" x1="0%" y1="0%" x2="100%" y2="70%">
          <stop offset="0%" stopColor="#3f3f46" />
          <stop offset="30%" stopColor="#27272a" />
          <stop offset="70%" stopColor="#18181b" />
          <stop offset="100%" stopColor="#09090b" />
        </linearGradient>
        <linearGradient id="lensShine" x1="20%" y1="10%" x2="80%" y2="90%">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
          <stop offset="30%" stopColor="#818cf8" stopOpacity="0.4" />
          <stop offset="70%" stopColor="#312e81" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="specularGleam" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Ground Soft Ambient Shadow */}
      <ellipse cx="145" cy="215" rx="100" ry="16" fill="black" fillOpacity="0.3" filter="blur(8px)" />

      {/* REEL 1 (Back/Left Reel) */}
      <g transform="translate(90, 80)">
        <circle cx="0" cy="0" r="42" fill="url(#reelGrad1)" stroke="url(#reelRim)" strokeWidth="3" />
        <circle cx="0" cy="0" r="32" fill="#18181b" stroke="#3f3f46" strokeWidth="1.5" />
        {/* Spoke Cutouts */}
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <ellipse
            key={deg}
            cx={Math.cos((deg * Math.PI) / 180) * 20}
            cy={Math.sin((deg * Math.PI) / 180) * 20}
            rx="5.5"
            ry="5.5"
            fill="#09090b"
          />
        ))}
        {/* Center Hub */}
        <circle cx="0" cy="0" r="13" fill="url(#reelCenter)" stroke="#52525b" strokeWidth="1" />
        <circle cx="0" cy="0" r="4" fill="#09090b" />
      </g>

      {/* REEL 2 (Front/Right Reel - Overlapping) */}
      <g transform="translate(145, 65)">
        <circle cx="0" cy="0" r="48" fill="url(#reelGrad1)" stroke="url(#reelRim)" strokeWidth="3.5" />
        <circle cx="0" cy="0" r="37" fill="#18181b" stroke="#3f3f46" strokeWidth="1.5" />
        {/* Film tape strip edge */}
        <path d="M-30 30 Q 10 50 60 40" stroke="#0f0f11" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
        {/* Spoke Cutouts */}
        {[30, 90, 150, 210, 270, 330].map((deg) => (
          <ellipse
            key={deg}
            cx={Math.cos((deg * Math.PI) / 180) * 23}
            cy={Math.sin((deg * Math.PI) / 180) * 23}
            rx="6.5"
            ry="6.5"
            fill="#09090b"
          />
        ))}
        {/* Center Hub */}
        <circle cx="0" cy="0" r="16" fill="url(#reelCenter)" stroke="#71717a" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="5" fill="#09090b" />
      </g>

      {/* CAMERA MAIN CHASSIS BODY */}
      <rect x="75" y="115" width="115" height="75" rx="14" fill="url(#bodyMetal)" stroke="#52525b" strokeWidth="2" />
      {/* Top chamfer highlight line */}
      <path d="M 82 117 L 183 117" stroke="url(#specularGleam)" strokeWidth="1.5" strokeLinecap="round" />

      {/* Mechanical Side Compartment & Screws */}
      <rect x="85" y="125" width="55" height="55" rx="8" fill="#121215" stroke="#27272a" strokeWidth="1.5" />
      <circle cx="95" cy="135" r="2.5" fill="#71717a" />
      <circle cx="130" cy="135" r="2.5" fill="#71717a" />
      <circle cx="95" cy="170" r="2.5" fill="#71717a" />
      <circle cx="130" cy="170" r="2.5" fill="#71717a" />
      {/* Side Dial Knob */}
      <circle cx="112" cy="152" r="11" fill="url(#reelCenter)" stroke="#3f3f46" strokeWidth="1" />
      <circle cx="112" cy="152" r="6" fill="#09090b" />
      <rect x="110" y="143" width="4" height="6" rx="1" fill="#a1a1aa" />

      {/* Audio / Tape Level Display Panel */}
      <rect x="148" y="128" width="32" height="18" rx="3" fill="#09090b" stroke="#3f3f46" strokeWidth="1" />
      <rect x="152" y="133" width="4" height="8" rx="1" fill="#22c55e" />
      <rect x="158" y="133" width="4" height="8" rx="1" fill="#22c55e" />
      <rect x="164" y="133" width="4" height="8" rx="1" fill="#eab308" />
      <rect x="170" y="133" width="4" height="8" rx="1" fill="#ef4444" />

      {/* Red Recording Tally Indicator */}
      <circle cx="180" cy="165" r="4.5" fill="#ef4444" stroke="#991b1b" strokeWidth="1" />
      <circle cx="180" cy="165" r="2" fill="#fca5a5" />

      {/* Viewfinder Eyepiece Assembly (Back Left) */}
      <rect x="52" y="135" width="26" height="22" rx="4" fill="#18181b" stroke="#3f3f46" strokeWidth="1.5" />
      <ellipse cx="50" cy="146" rx="5" ry="13" fill="#09090b" stroke="#52525b" strokeWidth="1.5" />
      <ellipse cx="50" cy="146" rx="2" ry="8" fill="#27272a" />

      {/* LENS BARREL EXTENSION (Front Right) */}
      {/* Stage 1: Base Mount */}
      <path d="M 188 127 L 205 133 L 205 177 L 188 183 Z" fill="#1c1c20" stroke="#3f3f46" strokeWidth="1.5" />
      {/* Stage 2: Stepped Ring */}
      <rect x="203" y="135" width="18" height="40" rx="3" fill="#27272a" stroke="#52525b" strokeWidth="1.5" />
      {/* Focus Ring Ridges */}
      <line x1="208" y1="137" x2="208" y2="173" stroke="#52525b" strokeWidth="1.5" />
      <line x1="213" y1="137" x2="213" y2="173" stroke="#52525b" strokeWidth="1.5" />

      {/* Stage 3: Front Matte Box / Lens Bell */}
      <path d="M 220 132 L 244 122 L 244 188 L 220 178 Z" fill="#141416" stroke="#52525b" strokeWidth="1.5" />
      {/* Front Optical Lens Element (Glossy Refraction Ellipse) */}
      <ellipse cx="244" cy="155" rx="8" ry="33" fill="url(#lensShine)" stroke="#93c5fd" strokeWidth="1.5" />
      {/* Lens Specular Reflection Crescent */}
      <path
        d="M 243 130 Q 248 155 243 180"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.85"
      />
      <circle cx="244" cy="142" r="3" fill="#ffffff" opacity="0.9" />

      {/* Heavy Base Plate & Tripod Mount */}
      <rect x="80" y="190" width="105" height="12" rx="3" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
      <rect x="105" y="202" width="55" height="8" rx="2" fill="#09090b" stroke="#27272a" strokeWidth="1" />
    </svg>
  );
}

/**
 * 2. 3D Beveled Extruded Cursor SVG (Pay-Per-Click Advertising)
 * Glossy porcelain face, warm golden extruded beveled side facets, ambient bounce.
 */
function Cursor3DSVG() {
  return (
    <svg
      viewBox="0 0 280 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]"
    >
      <defs>
        {/* Porcelain white top face */}
        <linearGradient id="cursorFace" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#fdf8f6" />
          <stop offset="100%" stopColor="#fed7aa" />
        </linearGradient>

        {/* Deep extruded bevel sides */}
        <linearGradient id="extrusionSide" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="25%" stopColor="#ea580c" />
          <stop offset="70%" stopColor="#9a3412" />
          <stop offset="100%" stopColor="#7c2d12" />
        </linearGradient>

        {/* Underside shadow bevel */}
        <linearGradient id="bottomBevel" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7c2d12" />
          <stop offset="50%" stopColor="#c2410c" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
      </defs>

      {/* Ground Projection Cast Shadow */}
      <path
        d="M 175 60 L 255 170 L 210 185 L 245 225 L 205 235 L 170 195 L 130 220 Z"
        fill="#000000"
        fillOpacity="0.25"
        filter="blur(12px)"
        transform="translate(15, 15) scale(0.95)"
      />

      {/* 3D EXTRUDED SIDES (The depth thickness behind the pointer) */}
      {/* Right Bevel Face */}
      <path
        d="M 205 45 L 240 180 L 225 190 L 190 55 Z"
        fill="url(#extrusionSide)"
      />
      {/* Bottom Notch Bevel */}
      <path
        d="M 240 180 L 195 160 L 180 170 L 225 190 Z"
        fill="url(#bottomBevel)"
      />
      {/* Stem Right Bevel */}
      <path
        d="M 195 160 L 230 215 L 215 225 L 180 170 Z"
        fill="url(#extrusionSide)"
      />
      {/* Stem Bottom End Bevel */}
      <path
        d="M 230 215 L 190 230 L 175 220 L 215 225 Z"
        fill="#5c1d09"
      />
      {/* Stem Left Bevel */}
      <path
        d="M 190 230 L 155 175 L 145 165 L 175 220 Z"
        fill="#9a3412"
      />
      {/* Left Wing Cutout Bevel */}
      <path
        d="M 155 175 L 115 195 L 105 185 L 145 165 Z"
        fill="url(#bottomBevel)"
      />
      {/* Left Main Edge Bevel */}
      <path
        d="M 115 195 L 190 55 L 205 45 L 105 185 Z"
        fill="url(#extrusionSide)"
        opacity="0.9"
      />

      {/* TOP GLOSSY FACE (Classic Arrow Cursor Shape rotated gracefully) */}
      <path
        d="M 190 45 L 230 175 L 185 155 L 220 210 L 180 225 L 145 170 L 105 190 Z"
        fill="url(#cursorFace)"
        stroke="#ffffff"
        strokeWidth="2.5"
      />

      {/* Glossy Edge Specular Reflection (Gleaming white line along left knife-edge) */}
      <path
        d="M 190 47 L 108 188"
        stroke="#ffffff"
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.95"
      />
      {/* Inner Face Highlight Contour */}
      <path
        d="M 188 52 L 224 170 L 186 153"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.75"
      />

      {/* Sparkle Gleam on Tip */}
      <circle cx="190" cy="45" r="4" fill="#ffffff" />
      <path d="M 190 37 L 190 53 M 182 45 L 198 45" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/**
 * 3. 3D Dartboard Target & Darts SVG (Social Media Marketing)
 * Concentric angled bullseye board with 3 bright orange/red aerodynamic darts hitting the mark.
 */
function DartboardSVG() {
  return (
    <svg
      viewBox="0 0 280 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)]"
    >
      <defs>
        <radialGradient id="targetPlate" cx="45%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#27272a" />
          <stop offset="85%" stopColor="#09090b" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        <linearGradient id="chromeDart" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f4f4f5" />
          <stop offset="40%" stopColor="#a1a1aa" />
          <stop offset="70%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#52525b" />
        </linearGradient>
        <linearGradient id="dartFlight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff7844" />
          <stop offset="50%" stopColor="#f95721" />
          <stop offset="100%" stopColor="#b91c1c" />
        </linearGradient>
      </defs>

      {/* Angled Perspective Dartboard Base (Right side of card) */}
      <g transform="translate(180, 160) rotate(-22)">
        {/* Outer Ring */}
        <ellipse cx="0" cy="0" rx="90" ry="60" fill="url(#targetPlate)" stroke="#52525b" strokeWidth="4" />
        {/* Ring 1 - White Outer Score Zone */}
        <ellipse cx="0" cy="0" rx="76" ry="50" fill="none" stroke="#f4f4f5" strokeWidth="7" opacity="0.9" />
        {/* Ring 2 - Orange Triple Score Zone */}
        <ellipse cx="0" cy="0" rx="58" ry="38" fill="none" stroke="#f95721" strokeWidth="6" />
        {/* Ring 3 - White Inner Score Zone */}
        <ellipse cx="0" cy="0" rx="42" ry="27" fill="none" stroke="#f4f4f5" strokeWidth="6" opacity="0.9" />
        {/* Ring 4 - Orange Bullseye Ring */}
        <ellipse cx="0" cy="0" rx="26" ry="17" fill="none" stroke="#f95721" strokeWidth="5" />
        {/* Bullseye Center Red/Orange Dot */}
        <ellipse cx="0" cy="0" rx="14" ry="9" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
        <ellipse cx="0" cy="0" rx="6" ry="4" fill="#fde047" />

        {/* Wire Spider Dividers */}
        {[0, 45, 90, 135].map((deg) => (
          <line
            key={deg}
            x1={Math.cos((deg * Math.PI) / 180) * -85}
            y1={Math.sin((deg * Math.PI) / 180) * -55}
            x2={Math.cos((deg * Math.PI) / 180) * 85}
            y2={Math.sin((deg * Math.PI) / 180) * 55}
            stroke="#71717a"
            strokeWidth="1"
            opacity="0.6"
          />
        ))}
      </g>

      {/* DART 1: Centered Bullseye Dart (Sticking out toward viewer) */}
      <g transform="translate(155, 145)">
        {/* Shaft */}
        <path d="M 0 0 L -45 -45" stroke="url(#chromeDart)" strokeWidth="4" strokeLinecap="round" />
        {/* Metallic Grip Barrel */}
        <rect x="-30" y="-30" width="12" height="6" rx="2" fill="url(#chromeDart)" transform="rotate(45 -24 -27)" />
        {/* 4 Feather Flights (Red/Orange Petal Fins) */}
        {/* Top-Right Wing */}
        <path d="M -45 -45 C -40 -65 -25 -70 -20 -60 C -25 -50 -35 -45 -45 -45 Z" fill="url(#dartFlight)" stroke="#fca5a5" strokeWidth="1" />
        {/* Top-Left Wing */}
        <path d="M -45 -45 C -65 -60 -70 -45 -60 -40 C -50 -45 -45 -35 -45 -45 Z" fill="url(#dartFlight)" stroke="#fca5a5" strokeWidth="1" />
        {/* Bottom Wing */}
        <path d="M -45 -45 C -55 -25 -45 -15 -35 -25 C -35 -35 -40 -40 -45 -45 Z" fill="#b91c1c" stroke="#fca5a5" strokeWidth="1" />
        {/* Center Point Flare */}
        <circle cx="-45" cy="-45" r="3.5" fill="#fef08a" />
      </g>

      {/* DART 2: High Cluster Dart (Upper Left angle) */}
      <g transform="translate(135, 125)">
        <path d="M 0 0 L -45 -55" stroke="url(#chromeDart)" strokeWidth="3.5" strokeLinecap="round" />
        <rect x="-30" y="-35" width="10" height="5" rx="1.5" fill="url(#chromeDart)" transform="rotate(50 -25 -32)" />
        {/* Flights */}
        <path d="M -45 -55 C -40 -75 -22 -78 -20 -65 C -25 -58 -38 -55 -45 -55 Z" fill="url(#dartFlight)" />
        <path d="M -45 -55 C -68 -68 -72 -50 -60 -45 C -52 -50 -48 -45 -45 -55 Z" fill="url(#dartFlight)" />
        <path d="M -45 -55 C -55 -35 -42 -25 -35 -35 Z" fill="#991b1b" />
        <circle cx="-45" cy="-55" r="3" fill="#fef08a" />
      </g>

      {/* DART 3: Lower Cluster Dart */}
      <g transform="translate(175, 135)">
        <path d="M 0 0 L -40 -50" stroke="url(#chromeDart)" strokeWidth="3.5" strokeLinecap="round" />
        <rect x="-28" y="-32" width="10" height="5" rx="1.5" fill="url(#chromeDart)" transform="rotate(48 -23 -29)" />
        {/* Flights */}
        <path d="M -40 -50 C -35 -70 -18 -72 -18 -60 C -22 -54 -32 -50 -40 -50 Z" fill="url(#dartFlight)" />
        <path d="M -40 -50 C -60 -62 -65 -45 -55 -40 C -48 -45 -44 -42 -40 -50 Z" fill="url(#dartFlight)" />
        <path d="M -40 -50 C -50 -32 -38 -22 -32 -30 Z" fill="#991b1b" />
        <circle cx="-40" cy="-50" r="3" fill="#fef08a" />
      </g>
    </svg>
  );
}

/**
 * 4. 3D Magnifying Glass SVG (Search Engine Optimization)
 * Polished black ergonomic handle, metallic chrome bezel, refractive curved glass lens.
 */
function MagnifyingGlassSVG() {
  return (
    <svg
      viewBox="0 0 280 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.3)]"
    >
      <defs>
        {/* Metallic Bezel Rim */}
        <linearGradient id="chromeBezel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="25%" stopColor="#a1a1aa" />
          <stop offset="50%" stopColor="#3f3f46" />
          <stop offset="75%" stopColor="#71717a" />
          <stop offset="100%" stopColor="#18181b" />
        </linearGradient>

        {/* Refractive Glass Lens Gradient */}
        <radialGradient id="glassLens" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="40%" stopColor="#e0f2fe" stopOpacity="0.4" />
          <stop offset="80%" stopColor="#bae6fd" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
        </radialGradient>

        {/* Glossy Black Handle Gradient */}
        <linearGradient id="handleBody" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3f3f46" />
          <stop offset="35%" stopColor="#18181b" />
          <stop offset="70%" stopColor="#09090b" />
          <stop offset="100%" stopColor="#27272a" />
        </linearGradient>
      </defs>

      {/* Ground Cast Ambient Shadow */}
      <ellipse cx="170" cy="205" rx="65" ry="16" fill="black" fillOpacity="0.25" filter="blur(8px)" />

      {/* HANDLE (Tilted down-left from center) */}
      <g transform="translate(135, 150) rotate(52)">
        {/* Chrome Metal Collar Connector */}
        <rect x="-8" y="0" width="16" height="18" rx="2" fill="url(#chromeBezel)" stroke="#71717a" strokeWidth="1" />
        <line x1="-8" y1="6" x2="8" y2="6" stroke="#27272a" strokeWidth="1" />
        <line x1="-8" y1="12" x2="8" y2="12" stroke="#ffffff" strokeWidth="1" />

        {/* Tapered Glossy Handle */}
        <path
          d="M -7 18 L -9 85 C -9 95 -4 100 0 100 C 4 100 9 95 9 85 L 7 18 Z"
          fill="url(#handleBody)"
          stroke="#18181b"
          strokeWidth="1.5"
        />
        {/* Specular White Highlight Line on Handle */}
        <path d="M -4 20 L -5 88" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        {/* Handle Chrome End Cap */}
        <ellipse cx="0" cy="98" rx="7" ry="3" fill="url(#chromeBezel)" />
      </g>

      {/* CIRCULAR MAGNIFYING LENS FRAME (Top Right) */}
      <g transform="translate(180, 95)">
        {/* Deep Bevel Outer Rim */}
        <circle cx="0" cy="0" r="62" fill="url(#chromeBezel)" stroke="#27272a" strokeWidth="3" />
        {/* Inner Stepped Metal Groove */}
        <circle cx="0" cy="0" r="54" fill="#09090b" stroke="#71717a" strokeWidth="1.5" />
        {/* Inner Shiny Metal Lip */}
        <circle cx="0" cy="0" r="51" fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.8" />

        {/* GLASS OPTICAL LENS */}
        <circle cx="0" cy="0" r="50" fill="url(#glassLens)" />

        {/* Curved Glass Specular Highlight (The classic crescent gleam) */}
        <path
          d="M -35 -25 C -25 -42 5 -45 28 -32 C 15 -35 -15 -32 -25 -15 Z"
          fill="#ffffff"
          opacity="0.85"
        />
        {/* Bottom Refraction Rim Glow */}
        <path
          d="M -25 32 C 0 45 25 40 38 20 C 25 32 5 35 -18 25 Z"
          fill="#ffffff"
          opacity="0.5"
        />
        {/* Sparkle Pinpoint Flare */}
        <circle cx="-15" cy="-35" r="3" fill="#ffffff" />
      </g>
    </svg>
  );
}

/**
 * 5. 3D Website Design SVG (Website Design)
 * Floating isometric browser window with glowing UI tabs, code brackets, and responsive card layers.
 */
function WebsiteDesignSVG() {
  return (
    <svg
      viewBox="0 0 280 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)]"
    >
      <defs>
        <linearGradient id="browserWindow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#27272a" />
          <stop offset="100%" stopColor="#121215" />
        </linearGradient>
        <linearGradient id="glassCard" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="orangeGlow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f95721" />
          <stop offset="100%" stopColor="#ff8a50" />
        </linearGradient>
      </defs>

      {/* Isometric Browser Shell */}
      <g transform="translate(155, 115) rotate(-10) skewX(-6)">
        {/* Background Canvas */}
        <rect
          x="-85"
          y="-65"
          width="170"
          height="130"
          rx="14"
          fill="url(#browserWindow)"
          stroke="#3f3f46"
          strokeWidth="2"
        />

        {/* Top Header Bar */}
        <path d="M -85 -51 L 85 -51" stroke="#3f3f46" strokeWidth="1.5" />
        {/* 3 macOS Window Controls */}
        <circle cx="-70" cy="-58" r="3.5" fill="#ef4444" />
        <circle cx="-60" cy="-58" r="3.5" fill="#eab308" />
        <circle cx="-50" cy="-58" r="3.5" fill="#22c55e" />
        {/* Search URL Pill in Window */}
        <rect x="-35" y="-62" width="90" height="8" rx="4" fill="#09090b" stroke="#27272a" strokeWidth="1" />

        {/* Floating Hero UI Card */}
        <rect x="-72" y="-38" width="85" height="52" rx="8" fill="url(#glassCard)" stroke="#52525b" strokeWidth="1" />
        <rect x="-62" y="-28" width="40" height="5" rx="2" fill="#ffffff" opacity="0.9" />
        <rect x="-62" y="-18" width="55" height="3" rx="1.5" fill="#a1a1aa" opacity="0.6" />
        <rect x="-62" y="-11" width="35" height="3" rx="1.5" fill="#a1a1aa" opacity="0.6" />
        {/* Mini Accent CTA Button */}
        <rect x="-62" y="-2" width="28" height="8" rx="4" fill="url(#orangeGlow)" />

        {/* Floating Analytics Graph Box */}
        <rect x="22" y="-38" width="52" height="42" rx="6" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
        <path d="M 28 -8 L 38 -20 L 48 -14 L 64 -30" stroke="#f95721" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

        {/* Bottom Feature Columns */}
        <rect x="-72" y="22" width="42" height="32" rx="6" fill="#18181b" stroke="#27272a" strokeWidth="1" />
        <rect x="-24" y="22" width="42" height="32" rx="6" fill="#18181b" stroke="#27272a" strokeWidth="1" />
        <rect x="24" y="22" width="50" height="32" rx="6" fill="#18181b" stroke="#27272a" strokeWidth="1" />
      </g>

      {/* Floating 3D Code Bracket Pill */}
      <g transform="translate(195, 175) rotate(8)">
        <rect x="-30" y="-15" width="60" height="30" rx="15" fill="#f95721" stroke="#ffffff" strokeWidth="2" filter="drop-shadow(0 10px 15px rgba(249,87,33,0.4))" />
        <text x="0" y="5" fill="#ffffff" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
          &lt;/&gt;
        </text>
      </g>
    </svg>
  );
}

/**
 * 6. 3D Branding Prism SVG (Branding)
 * Faceted isometric diamond / geometric gemstone prism with glowing reflections & gold compass accents.
 */
function BrandingPrismSVG() {
  return (
    <svg
      viewBox="0 0 280 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]"
    >
      <defs>
        {/* Facet Gradients */}
        <linearGradient id="facetTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#ffedd5" />
          <stop offset="100%" stopColor="#fed7aa" />
        </linearGradient>
        <linearGradient id="facetCenter" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffedd5" />
          <stop offset="40%" stopColor="#fdba74" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
        <linearGradient id="facetLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="70%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#c2410c" />
        </linearGradient>
        <linearGradient id="facetRight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="60%" stopColor="#c2410c" />
          <stop offset="100%" stopColor="#9a3412" />
        </linearGradient>
        <linearGradient id="facetBottom" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#7c2d12" />
        </linearGradient>
      </defs>

      {/* Geometric Golden Ratio Compass Wireframe Circles */}
      <ellipse cx="170" cy="115" rx="75" ry="75" stroke="#ffffff" strokeWidth="1" strokeDasharray="3 3" opacity="0.35" />
      <ellipse cx="170" cy="115" rx="50" ry="50" stroke="#ffffff" strokeWidth="1" strokeDasharray="2 2" opacity="0.25" />

      {/* 3D GEMSTONE / PRISM FACETS */}
      <g transform="translate(170, 115)">
        {/* Top Flat Table Facet */}
        <polygon points="0,-60 48,-35 0,-15 -48,-35" fill="url(#facetTop)" stroke="#ffffff" strokeWidth="1.5" />

        {/* Upper Left Kite */}
        <polygon points="-48,-35 0,-15 -28,25 -70,5" fill="url(#facetLeft)" stroke="#ffffff" strokeWidth="1.2" />

        {/* Upper Center Shield */}
        <polygon points="0,-15 28,25 0,40 -28,25" fill="url(#facetCenter)" stroke="#ffffff" strokeWidth="1.5" />

        {/* Upper Right Kite */}
        <polygon points="0,-15 48,-35 70,5 28,25" fill="url(#facetRight)" stroke="#ffffff" strokeWidth="1.2" />

        {/* Lower Left Pavilion */}
        <polygon points="-70,5 -28,25 0,75 -40,45" fill="url(#facetBottom)" stroke="#fed7aa" strokeWidth="1" />

        {/* Lower Center Pavilion (Bottom Point) */}
        <polygon points="-28,25 0,40 28,25 0,75" fill="url(#facetLeft)" stroke="#ffffff" strokeWidth="1.5" />

        {/* Lower Right Pavilion */}
        <polygon points="28,25 70,5 40,45 0,75" fill="url(#facetBottom)" stroke="#fed7aa" strokeWidth="1" />

        {/* Specular Edge Highlights */}
        <line x1="0" y1="-60" x2="0" y2="-15" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="0" y1="-15" x2="0" y2="40" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.9" />

        {/* Brilliant Sparkle Flare on Top Left Vertex */}
        <circle cx="-48" cy="-35" r="3.5" fill="#ffffff" />
        <path d="M -48 -44 L -48 -26 M -57 -35 L -39 -35" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// =========================================================================
// SERVICES CONFIGURATION (3x2 GRID FORMAT)
// =========================================================================

interface ServiceCardItem {
  id: string;
  titleFirst: string;
  titleSecond: string;
  href: string;
  cardTheme: "white" | "orange" | "dark";
  renderGraphic: () => React.JSX.Element;
}

const SERVICES_DATA: ServiceCardItem[] = [
  // ROW 1
  {
    id: "video-production",
    titleFirst: "Video",
    titleSecond: "Production",
    href: "#contact",
    cardTheme: "white",
    renderGraphic: CineCameraSVG,
  },
  {
    id: "ppc-advertising",
    titleFirst: "Pay-per-click",
    titleSecond: "advertising",
    href: "#contact",
    cardTheme: "orange",
    renderGraphic: Cursor3DSVG,
  },
  {
    id: "social-media",
    titleFirst: "Social Media",
    titleSecond: "Marketing",
    href: "#contact",
    cardTheme: "dark",
    renderGraphic: DartboardSVG,
  },
  // ROW 2
  {
    id: "seo",
    titleFirst: "Search engine",
    titleSecond: "optimization",
    href: "#contact",
    cardTheme: "white",
    renderGraphic: MagnifyingGlassSVG,
  },
  {
    id: "web-design",
    titleFirst: "Website",
    titleSecond: "Design",
    href: "#contact",
    cardTheme: "dark",
    renderGraphic: WebsiteDesignSVG,
  },
  {
    id: "branding",
    titleFirst: "Branding",
    titleSecond: "Identity",
    href: "#contact",
    cardTheme: "orange",
    renderGraphic: BrandingPrismSVG,
  },
];

// =========================================================================
// MAIN EXPORTED COMPONENT: ServicesGridSection
// =========================================================================

export function ServicesGridSection() {
  return (
    <section id="services-grid" className="relative bg-[#F4F4F6] py-20 sm:py-28 border-b border-zinc-200/80 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/90 px-3.5 py-1 text-xs font-semibold text-[#f95721] border border-orange-200/60 mb-3">
              <Sparkles className="h-3 w-3 text-[#f95721]" />
              Core Capabilities
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-5xl font-editorial">
              Crafted for Growth & Authority
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
              We combine high-end aesthetic execution with precision performance marketing to scale ambitious digital brands.
            </p>
          </div>

          <div className="hidden md:block">
            <Link
              href="#contact"
              className="relative inline-flex items-center gap-2 rounded-full bg-zinc-950/95 px-6 py-3 text-xs font-semibold text-white shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.3)] border border-white/15 transition-all duration-300 hover:bg-[#f95721] hover:border-[#f95721]/50 hover:shadow-[0_6px_20px_rgba(249,87,33,0.35)] active:scale-95 group overflow-hidden"
            >
              <span className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              <span>Discuss a Custom Scope</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* 3x2 High-Impact Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {SERVICES_DATA.map((service, index) => {
            const GraphicComponent = service.renderGraphic;

            // Card Theme Styling
            let cardBg = "";
            let titleFirstColor = "";
            let titleSecondColor = "";
            let btnCircleBg = "";
            let btnCircleTextColor = "";
            let btnTextColor = "";

            if (service.cardTheme === "white") {
              cardBg = "bg-white border border-zinc-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:border-zinc-300";
              titleFirstColor = "text-zinc-950";
              titleSecondColor = "text-zinc-400";
              btnCircleBg = "bg-zinc-950 text-white";
              btnCircleTextColor = "text-white";
              btnTextColor = "text-zinc-950";
            } else if (service.cardTheme === "orange") {
              cardBg = "bg-gradient-to-br from-[#ff6b38] via-[#f95721] to-[#e44411] border border-orange-400/40 shadow-xl shadow-orange-500/20 hover:shadow-2xl hover:shadow-orange-500/35";
              titleFirstColor = "text-white";
              titleSecondColor = "text-orange-100/90";
              btnCircleBg = "bg-white text-[#f95721]";
              btnCircleTextColor = "text-[#f95721]";
              btnTextColor = "text-white";
            } else {
              // dark
              cardBg = "bg-gradient-to-b from-[#18181b] to-[#09090b] border border-zinc-800 shadow-xl hover:shadow-2xl hover:border-zinc-700";
              titleFirstColor = "text-white";
              titleSecondColor = "text-zinc-400";
              btnCircleBg = "bg-white text-zinc-950";
              btnCircleTextColor = "text-zinc-950";
              btnTextColor = "text-white";
            }

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-[28px] p-6 sm:p-8 min-h-[220px] sm:min-h-[240px] flex flex-col justify-between transition-all duration-300 cursor-pointer ${cardBg}`}
              >
                {/* Specular Inner Glaze for Glass Depth */}
                <div className="pointer-events-none absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                {/* Left Side: Typography & Action Button */}
                <div className="z-10 flex flex-col justify-between h-full min-h-[160px] max-w-[55%]">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight leading-[1.18]">
                      <span className={`block ${titleFirstColor}`}>
                        {service.titleFirst}
                      </span>
                      <span className={`block font-normal mt-0.5 ${titleSecondColor}`}>
                        {service.titleSecond}
                      </span>
                    </h3>
                  </div>

                  {/* Bottom "LEARN MORE" Button matching the reference image */}
                  <div className="pt-8">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2.5 group/btn"
                    >
                      <div
                        className={`flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full ${btnCircleBg} shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}
                      >
                        <ArrowUpRight className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${btnCircleTextColor} transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5`} />
                      </div>
                      <span className={`text-[11px] sm:text-xs font-bold tracking-wider uppercase ${btnTextColor}`}>
                        LEARN MORE
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Right Side: 3D SVG Graphic */}
                <div className="pointer-events-none absolute -right-4 -bottom-4 sm:right-0 sm:bottom-0 w-[55%] sm:w-[50%] h-[92%] sm:h-full flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-1">
                  <GraphicComponent />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
