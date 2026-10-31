"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  FileText,
  Camera,
  Film,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { HeaderNavigation } from "@/components/Home Page Components/HeaderNavigation";
import { CtaFloatingSection } from "@/components/Home Page Components/CtaFloatingSection";
import { BrandFooterBanner } from "@/components/Home Page Components/BrandFooterBanner";
import { Button } from "@/components/ui/Button";
import "@/app/seo-agency-kolkata/seo-kolkata.css";

// =========================================================================
// MASONRY VIDEO DATA CONTRACT
// =========================================================================
interface MasonryVideoItem {
  id: string;
  title: string;
  category: string;
  client: string;
  duration: string;
  src: string;
  poster: string;
  aspect: string;
}

// =========================================================================
// 1. DATA: RESTAURANTS, CAFES & RETAIL MASONRY (24 VIDEOS)
// 6 rows of 4 perfectly balanced across 4 columns so bottom finishes cleanly
// =========================================================================
const RESTAURANT_RETAIL_VIDEOS: MasonryVideoItem[] = [
  // --- Row 0 (Pattern A) ---
  {
    id: "dine-1",
    title: "Decadent Culinary & Gastronomy Film",
    category: "Culinary & Dining",
    client: "Park Street Heritage",
    duration: "0:45",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714905/decadentdepictions_ssspin.io_1790714806.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714905/decadentdepictions_ssspin.io_1790714806.jpg",
    aspect: "aspect-[9/16]",
  },
  {
    id: "dine-2",
    title: "Chiffon & Spice Artisanal Visuals",
    category: "Cafe & Hospitality",
    client: "Ballygunge Gourmet",
    duration: "0:35",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714449/chiffonandspice_ssspin.io_1790714410.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714449/chiffonandspice_ssspin.io_1790714410.jpg",
    aspect: "aspect-[16/10]",
  },
  {
    id: "dine-3",
    title: "Boutique Retail Brand Showcase",
    category: "Luxury Retail",
    client: "Camac Street Archive",
    duration: "0:30",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714840/minipagebioarchive_ssspin.io_1790714828.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714840/minipagebioarchive_ssspin.io_1790714828.jpg",
    aspect: "aspect-[4/5]",
  },
  {
    id: "dine-4",
    title: "Sensory Spice Table Macro Cut",
    category: "Artisanal Kitchen",
    client: "South Kolkata Hospitality",
    duration: "0:32",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714439/chiffonandspice_ssspin.io_1790714426.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714439/chiffonandspice_ssspin.io_1790714426.jpg",
    aspect: "aspect-[9/14]",
  },

  // --- Row 1 (Pattern B) ---
  {
    id: "dine-5",
    title: "Artisan Dessert & Pastry Framing",
    category: "Patisserie & Cafe",
    client: "Flurys Heritage Series",
    duration: "0:40",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714905/decadentdepictions_ssspin.io_1790714806.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714905/decadentdepictions_ssspin.io_1790714806.jpg",
    aspect: "aspect-[4/5]",
  },
  {
    id: "dine-6",
    title: "Flagship Retail Experience Commercial",
    category: "Flagship Retail",
    client: "Quest Mall Kolkata",
    duration: "0:55",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_1920/v1790422620/From_Klickpin.com-_4855512095374493-pin-id-4855512095374493.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_800,so_1/v1790422620/From_Klickpin.com-_4855512095374493-pin-id-4855512095374493.jpg",
    aspect: "aspect-[9/14]",
  },
  {
    id: "dine-7",
    title: "Gourmet Plating & Chef Narrative",
    category: "Fine Dining",
    client: "House of Kolam",
    duration: "0:36",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714449/chiffonandspice_ssspin.io_1790714410.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714449/chiffonandspice_ssspin.io_1790714410.jpg",
    aspect: "aspect-[9/16]",
  },
  {
    id: "dine-8",
    title: "Specialty Cafe Counter & Cold Brew Pour",
    category: "Roastery & Cafe",
    client: "Southern Avenue Roastery",
    duration: "0:28",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714840/minipagebioarchive_ssspin.io_1790714828.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714840/minipagebioarchive_ssspin.io_1790714828.jpg",
    aspect: "aspect-[16/10]",
  },

  // --- Row 2 (Pattern C) ---
  {
    id: "dine-9",
    title: "Sensory Cocoa & Confectionery Macro",
    category: "Culinary & Dining",
    client: "Artisan Chocolate Lab",
    duration: "0:42",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714905/decadentdepictions_ssspin.io_1790714806.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714905/decadentdepictions_ssspin.io_1790714806.jpg",
    aspect: "aspect-[16/10]",
  },
  {
    id: "dine-10",
    title: "Modern Bistro Ambiance & Lighting",
    category: "Bistro & Lounge",
    client: "Salt Lake Sector V Eatery",
    duration: "0:34",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714439/chiffonandspice_ssspin.io_1790714426.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714439/chiffonandspice_ssspin.io_1790714426.jpg",
    aspect: "aspect-[9/16]",
  },
  {
    id: "dine-11",
    title: "Luxury Department Store Visuals",
    category: "Luxury Retail",
    client: "Forum Courtyard Retail",
    duration: "0:30",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714840/minipagebioarchive_ssspin.io_1790714828.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714840/minipagebioarchive_ssspin.io_1790714828.jpg",
    aspect: "aspect-[9/14]",
  },
  {
    id: "dine-12",
    title: "Heritage Cocktail Mixology Sequence",
    category: "Bar & Lounge",
    client: "Park Street Speakeasy",
    duration: "0:45",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714905/decadentdepictions_ssspin.io_1790714806.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714905/decadentdepictions_ssspin.io_1790714806.jpg",
    aspect: "aspect-[4/5]",
  },

  // --- Row 3 (Pattern D) ---
  {
    id: "dine-13",
    title: "Tasting Menu Sizzle & Steam Cinema",
    category: "Fine Dining",
    client: "New Town Culinary Guild",
    duration: "0:38",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714449/chiffonandspice_ssspin.io_1790714410.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714449/chiffonandspice_ssspin.io_1790714410.jpg",
    aspect: "aspect-[9/14]",
  },
  {
    id: "dine-14",
    title: "Flagship Fashion Retail Atrium Tour",
    category: "Retail Atrium",
    client: "Mani Square Retail",
    duration: "0:50",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_1920/v1790422620/From_Klickpin.com-_4855512095374493-pin-id-4855512095374493.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_800,so_1/v1790422620/From_Klickpin.com-_4855512095374493-pin-id-4855512095374493.jpg",
    aspect: "aspect-[4/5]",
  },
  {
    id: "dine-15",
    title: "Woodfired Oven & Artisanal Crust",
    category: "Cafe & Dining",
    client: "Hindustan Park Pizzeria",
    duration: "0:33",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714439/chiffonandspice_ssspin.io_1790714426.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714439/chiffonandspice_ssspin.io_1790714426.jpg",
    aspect: "aspect-[16/10]",
  },
  {
    id: "dine-16",
    title: "Handmade Gelato & Waffle Flow",
    category: "Dessert Parlor",
    client: "Alipore Confectionery",
    duration: "0:44",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714905/decadentdepictions_ssspin.io_1790714806.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714905/decadentdepictions_ssspin.io_1790714806.jpg",
    aspect: "aspect-[9/16]",
  },

  // --- Row 4 (Pattern E) ---
  {
    id: "dine-17",
    title: "Curated Concept Store Experience",
    category: "Concept Store",
    client: "Ballygunge Lifestyle Space",
    duration: "0:31",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714840/minipagebioarchive_ssspin.io_1790714828.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714840/minipagebioarchive_ssspin.io_1790714828.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: "dine-18",
    title: "Artisanal Spice Extraction & Infusion",
    category: "Gourmet Lab",
    client: "Bengal Spice Atelier",
    duration: "0:37",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714449/chiffonandspice_ssspin.io_1790714410.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714449/chiffonandspice_ssspin.io_1790714410.jpg",
    aspect: "aspect-[9/16]",
  },
  {
    id: "dine-19",
    title: "Fine Dining Table Ambiance & Glassware",
    category: "Fine Dining",
    client: "Chowringhee Grand Table",
    duration: "0:45",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714905/decadentdepictions_ssspin.io_1790714806.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714905/decadentdepictions_ssspin.io_1790714806.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: "dine-20",
    title: "Chef Table Flame & Plating Symphony",
    category: "Culinary & Dining",
    client: "Salt Lake Gastronomy Studio",
    duration: "0:35",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714439/chiffonandspice_ssspin.io_1790714426.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714439/chiffonandspice_ssspin.io_1790714426.jpg",
    aspect: "aspect-[9/16]",
  },

  // --- Row 5 (Pattern F: Perfectly balancing all column heights) ---
  {
    id: "dine-21",
    title: "Luxury Cafe Barista Pour Slow-Motion",
    category: "Cafe & Bar",
    client: "Park Street Coffee Atelier",
    duration: "0:33",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714840/minipagebioarchive_ssspin.io_1790714828.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714840/minipagebioarchive_ssspin.io_1790714828.jpg",
    aspect: "aspect-[9/16]",
  },
  {
    id: "dine-22",
    title: "Gourmet Herb Infusion & Smoke",
    category: "Culinary Art",
    client: "Ballygunge Chef Lab",
    duration: "0:38",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714449/chiffonandspice_ssspin.io_1790714410.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714449/chiffonandspice_ssspin.io_1790714410.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: "dine-23",
    title: "Pastry Sugar Glaze Architectural Cut",
    category: "Patisserie",
    client: "Salt Lake Bakery Atelier",
    duration: "0:42",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714905/decadentdepictions_ssspin.io_1790714806.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714905/decadentdepictions_ssspin.io_1790714806.jpg",
    aspect: "aspect-[9/16]",
  },
  {
    id: "dine-24",
    title: "Signature Dish Finishing Touches",
    category: "Fine Dining",
    client: "Alipore Heritage Kitchen",
    duration: "0:36",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714439/chiffonandspice_ssspin.io_1790714426.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714439/chiffonandspice_ssspin.io_1790714426.jpg",
    aspect: "aspect-[3/4]",
  },
];

// =========================================================================
// 2. DATA: CLOTHING & APPAREL MASONRY (24 VIDEOS)
// Positioned directly below "The Video Production Agency in Kolkata Built for cinematic Conversion."
// 6 rows of 4 with identical column height sum across all 4 columns
// =========================================================================
const CLOTHING_VIDEOS: MasonryVideoItem[] = [
  // --- Row 0 (Pattern A) ---
  {
    id: "wear-1",
    title: "Editorial Haute Couture Movement Master",
    category: "Haute Couture",
    client: "Camac Street Fashion Week",
    duration: "0:38",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714352/IMG_5738.MOV.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714352/IMG_5738.MOV.jpg",
    aspect: "aspect-[9/16]",
  },
  {
    id: "wear-2",
    title: "Streetwear Motion & Kinetic Ad Hook",
    category: "Streetwear & D2C",
    client: "Urban Bengal Apparel",
    duration: "0:24",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714315/lv_0_20260930014015.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714315/lv_0_20260930014015.jpg",
    aspect: "aspect-[16/10]",
  },
  {
    id: "wear-3",
    title: "Autumn Lookbook Model Direction",
    category: "Lookbook & Campaign",
    client: "Kolkata Designer Collective",
    duration: "0:42",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714269/lv_0_20260930013757.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714269/lv_0_20260930013757.jpg",
    aspect: "aspect-[4/5]",
  },
  {
    id: "wear-4",
    title: "Tactile Silk & Fabric Physics Cinema",
    category: "Textile & Craftsmanship",
    client: "Bengal Weavers Guild",
    duration: "0:48",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714249/IMG_5657.MOV.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714249/IMG_5657.MOV.jpg",
    aspect: "aspect-[9/14]",
  },

  // --- Row 1 (Pattern B) ---
  {
    id: "wear-5",
    title: "Bridal Couture Drapes & Embroidery Macro",
    category: "Bridal & Heritage",
    client: "Burrabazar Atelier",
    duration: "0:38",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714352/IMG_5738.MOV.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714352/IMG_5738.MOV.jpg",
    aspect: "aspect-[4/5]",
  },
  {
    id: "wear-6",
    title: "Performance Activewear High-Hook Cut",
    category: "Activewear",
    client: "Kinetiq Apparel India",
    duration: "0:24",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714315/lv_0_20260930014015.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714315/lv_0_20260930014015.jpg",
    aspect: "aspect-[9/14]",
  },
  {
    id: "wear-7",
    title: "Minimalist Linen Silhouette Story",
    category: "Ready-To-Wear",
    client: "Southern Avenue Studio",
    duration: "0:42",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714269/lv_0_20260930013757.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714269/lv_0_20260930013757.jpg",
    aspect: "aspect-[9/16]",
  },
  {
    id: "wear-8",
    title: "Chiaroscuro Studio Lighting on Cashmere",
    category: "Studio Campaign",
    client: "Alipore Winterwear",
    duration: "0:48",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714249/IMG_5657.MOV.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714249/IMG_5657.MOV.jpg",
    aspect: "aspect-[16/10]",
  },

  // --- Row 2 (Pattern C) ---
  {
    id: "wear-9",
    title: "Modern Jamdani Contemporary Styling",
    category: "Heritage Revival",
    client: "House of Kolam Couture",
    duration: "0:38",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714352/IMG_5738.MOV.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714352/IMG_5738.MOV.jpg",
    aspect: "aspect-[16/10]",
  },
  {
    id: "wear-10",
    title: "E-Commerce Scroll-Stopping Reel Ad",
    category: "Social Performance",
    client: "D2C Denim Brand",
    duration: "0:24",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714315/lv_0_20260930014015.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714315/lv_0_20260930014015.jpg",
    aspect: "aspect-[9/16]",
  },
  {
    id: "wear-11",
    title: "Spring Summer Runway Motion Reel",
    category: "Runway & Presentation",
    client: "Park Mansions Fashion Week",
    duration: "0:42",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714269/lv_0_20260930013757.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714269/lv_0_20260930013757.jpg",
    aspect: "aspect-[9/14]",
  },
  {
    id: "wear-12",
    title: "Hand-Stitched Leather Goods Macro",
    category: "Accessories & Leather",
    client: "Topsia Tannery Guild",
    duration: "0:48",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714249/IMG_5657.MOV.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714249/IMG_5657.MOV.jpg",
    aspect: "aspect-[4/5]",
  },

  // --- Row 3 (Pattern D) ---
  {
    id: "wear-13",
    title: "Contemporary Indo-Western Lookbook",
    category: "Indo-Western",
    client: "Salt Lake Fashion Lab",
    duration: "0:38",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714352/IMG_5738.MOV.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714352/IMG_5738.MOV.jpg",
    aspect: "aspect-[9/14]",
  },
  {
    id: "wear-14",
    title: "Monochrome Minimalist Capsule Film",
    category: "Capsule Collection",
    client: "New Town Modern Wear",
    duration: "0:24",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714315/lv_0_20260930014015.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714315/lv_0_20260930014015.jpg",
    aspect: "aspect-[4/5]",
  },
  {
    id: "wear-15",
    title: "Evening Gown Fabric Flow & Swirl",
    category: "Evening Wear",
    client: "Rowdon Street Designer House",
    duration: "0:42",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714269/lv_0_20260930013757.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714269/lv_0_20260930013757.jpg",
    aspect: "aspect-[16/10]",
  },
  {
    id: "wear-16",
    title: "Metallic Accent & Jewelry Macro Reflection",
    category: "Jewelry & Accents",
    client: "Bowbazar Goldsmiths Studio",
    duration: "0:48",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714249/IMG_5657.MOV.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714249/IMG_5657.MOV.jpg",
    aspect: "aspect-[9/16]",
  },

  // --- Row 4 (Pattern E) ---
  {
    id: "wear-17",
    title: "Festive Silk Sari Movement & Drape",
    category: "Ethnic Wear",
    client: "Gariahat Heritage Handlooms",
    duration: "0:38",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714352/IMG_5738.MOV.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714352/IMG_5738.MOV.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: "wear-18",
    title: "Urban Utility Streetwear Movement Hook",
    category: "Streetwear",
    client: "Salt Lake Street Club",
    duration: "0:24",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714315/lv_0_20260930014015.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714315/lv_0_20260930014015.jpg",
    aspect: "aspect-[9/16]",
  },
  {
    id: "wear-19",
    title: "Studio High-Key Color Blocking Fashion Film",
    category: "High Fashion",
    client: "Kolkata Haute Studio",
    duration: "0:42",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714269/lv_0_20260930013757.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714269/lv_0_20260930013757.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: "wear-20",
    title: "Knitted Wool Texture & Stitch Macro",
    category: "Textile Cinema",
    client: "Bengal Knitwear Collective",
    duration: "0:48",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714249/IMG_5657.MOV.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714249/IMG_5657.MOV.jpg",
    aspect: "aspect-[9/16]",
  },

  // --- Row 5 (Pattern F: Perfectly balancing all column heights) ---
  {
    id: "wear-21",
    title: "Avant-Garde Silhouette & Dramatic Shadows",
    category: "Avant-Garde",
    client: "Camac Street Couture House",
    duration: "0:38",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714352/IMG_5738.MOV.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714352/IMG_5738.MOV.jpg",
    aspect: "aspect-[9/16]",
  },
  {
    id: "wear-22",
    title: "Fast-Paced Footwear & Sneaker Drop Ad",
    category: "Footwear",
    client: "Kolkata Kicks Collective",
    duration: "0:24",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714315/lv_0_20260930014015.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714315/lv_0_20260930014015.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: "wear-23",
    title: "Summer Chiffon Breeze & Slow-Mo Spin",
    category: "Resort Wear",
    client: "Ballygunge Fashion Atelier",
    duration: "0:42",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714269/lv_0_20260930013757.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714269/lv_0_20260930013757.jpg",
    aspect: "aspect-[9/16]",
  },
  {
    id: "wear-24",
    title: "Natural Dye Organic Linen Weave Cinema",
    category: "Sustainable Fashion",
    client: "Eco Bengal Textiles",
    duration: "0:48",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714249/IMG_5657.MOV.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714249/IMG_5657.MOV.jpg",
    aspect: "aspect-[3/4]",
  },
];

// =========================================================================
// 3. DATA: REAL ESTATE & ARCHITECTURAL MASONRY (20 VIDEOS)
// 5 rows of 4 with identical column height sum across all 4 columns
// =========================================================================
const REAL_ESTATE_VIDEOS: MasonryVideoItem[] = [
  // --- Row 0 (Pattern A) ---
  {
    id: "prop-1",
    title: "Modernist Penthouse & Horizon Spatial Tour",
    category: "Ultra-Luxury Residential",
    client: "Alipore Prime Residences",
    duration: "0:52",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714705/Video-36346.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714705/Video-36346.jpg",
    aspect: "aspect-[9/16]",
  },
  {
    id: "prop-2",
    title: "Colonial Heritage Mansion Architectural Cinema",
    category: "Heritage Estate",
    client: "Chowringhee Colonial Trust",
    duration: "1:00",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_1920/v1790422620/From_Klickpin.com-_4855512095374493-pin-id-4855512095374493.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_800,so_1/v1790422620/From_Klickpin.com-_4855512095374493-pin-id-4855512095374493.jpg",
    aspect: "aspect-[16/10]",
  },
  {
    id: "prop-3",
    title: "Glass-Fronted Sky Villa Interior Walkthrough",
    category: "Sky Villa",
    client: "EM Bypass Heights",
    duration: "0:52",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714705/Video-36346.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714705/Video-36346.jpg",
    aspect: "aspect-[4/5]",
  },
  {
    id: "prop-4",
    title: "Corporate IT Campus Masterplan & Drone Survey",
    category: "Commercial Real Estate",
    client: "Sector V FinTech Tower",
    duration: "1:00",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_1920/v1790422620/From_Klickpin.com-_4855512095374493-pin-id-4855512095374493.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_800,so_1/v1790422620/From_Klickpin.com-_4855512095374493-pin-id-4855512095374493.jpg",
    aspect: "aspect-[9/14]",
  },

  // --- Row 1 (Pattern B) ---
  {
    id: "prop-5",
    title: "Gourmet Marble Kitchen & Living Pavilion",
    category: "Interior Architecture",
    client: "Ballygunge Park Road",
    duration: "0:52",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714705/Video-36346.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714705/Video-36346.jpg",
    aspect: "aspect-[4/5]",
  },
  {
    id: "prop-6",
    title: "Riverfront Luxury Waterfront Enclave Film",
    category: "Waterfront Development",
    client: "Howrah Riverside Residences",
    duration: "1:00",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_1920/v1790422620/From_Klickpin.com-_4855512095374493-pin-id-4855512095374493.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_800,so_1/v1790422620/From_Klickpin.com-_4855512095374493-pin-id-4855512095374493.jpg",
    aspect: "aspect-[9/14]",
  },
  {
    id: "prop-7",
    title: "Cantilevered Modernist Balcony Sunset Framing",
    category: "Architectural Detail",
    client: "New Town Eco Vista",
    duration: "0:52",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714705/Video-36346.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714705/Video-36346.jpg",
    aspect: "aspect-[9/16]",
  },
  {
    id: "prop-8",
    title: "Commercial Grade-A Office Atrium Walk",
    category: "Corporate Headquarters",
    client: "Rajarhat Business Park",
    duration: "1:00",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_1920/v1790422620/From_Klickpin.com-_4855512095374493-pin-id-4855512095374493.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_800,so_1/v1790422620/From_Klickpin.com-_4855512095374493-pin-id-4855512095374493.jpg",
    aspect: "aspect-[16/10]",
  },

  // --- Row 2 (Pattern C) ---
  {
    id: "prop-9",
    title: "Private Courtyard & Zen Water Garden",
    category: "Landscape Architecture",
    client: "Queens Park Mansions",
    duration: "0:52",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714705/Video-36346.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714705/Video-36346.jpg",
    aspect: "aspect-[16/10]",
  },
  {
    id: "prop-10",
    title: "Luxury Clubhouse & Infinity Pool Cinematography",
    category: "Residential Amenities",
    client: "Silver Spring Estate",
    duration: "1:00",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_1920/v1790422620/From_Klickpin.com-_4855512095374493-pin-id-4855512095374493.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_800,so_1/v1790422620/From_Klickpin.com-_4855512095374493-pin-id-4855512095374493.jpg",
    aspect: "aspect-[9/16]",
  },
  {
    id: "prop-11",
    title: "Double-Height Foyer & Travertine Textures",
    category: "Spatial Interior",
    client: "Loudon Street Villa",
    duration: "0:52",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714705/Video-36346.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714705/Video-36346.jpg",
    aspect: "aspect-[9/14]",
  },
  {
    id: "prop-12",
    title: "Architectural Facade Twilight Lighting Film",
    category: "Exterior Architecture",
    client: "Camac Street Commercial Plaza",
    duration: "1:00",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_1920/v1790422620/From_Klickpin.com-_4855512095374493-pin-id-4855512095374493.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_800,so_1/v1790422620/From_Klickpin.com-_4855512095374493-pin-id-4855512095374493.jpg",
    aspect: "aspect-[4/5]",
  },

  // --- Row 3 (Pattern D) ---
  {
    id: "prop-13",
    title: "Curated Master Bedroom Suite & Morning Light",
    category: "Residential Architecture",
    client: "Alipore Reserve",
    duration: "0:52",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714705/Video-36346.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714705/Video-36346.jpg",
    aspect: "aspect-[9/14]",
  },
  {
    id: "prop-14",
    title: "Urban High-Rise Structural Drone Ascend",
    category: "Drone Cinematography",
    client: "Park Circus Skyline",
    duration: "1:00",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_1920/v1790422620/From_Klickpin.com-_4855512095374493-pin-id-4855512095374493.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_800,so_1/v1790422620/From_Klickpin.com-_4855512095374493-pin-id-4855512095374493.jpg",
    aspect: "aspect-[4/5]",
  },
  {
    id: "prop-15",
    title: "Minimalist Terrazzo Bathroom Spa Walk",
    category: "Interior Spatial",
    client: "Salt Lake Sector III Villa",
    duration: "0:52",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714705/Video-36346.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714705/Video-36346.jpg",
    aspect: "aspect-[16/10]",
  },
  {
    id: "prop-16",
    title: "Suburban Villa Gated Enclave Masterplan",
    category: "Enclave Masterplan",
    client: "Baruipur Garden Villas",
    duration: "1:00",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_1920/v1790422620/From_Klickpin.com-_4855512095374493-pin-id-4855512095374493.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_800,so_1/v1790422620/From_Klickpin.com-_4855512095374493-pin-id-4855512095374493.jpg",
    aspect: "aspect-[9/16]",
  },

  // --- Row 4 (Balancing Row: Identical aspect ratios ensure laser-precise bottom alignment) ---
  {
    id: "prop-17",
    title: "Panoramic Penthouse Rooftop Deck Sunset",
    category: "Rooftop Architecture",
    client: "New Town Sky Residences",
    duration: "0:52",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714705/Video-36346.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714705/Video-36346.jpg",
    aspect: "aspect-[4/5]",
  },
  {
    id: "prop-18",
    title: "Flagship Corporate Glass Atrium Architecture",
    category: "Commercial Real Estate",
    client: "Salt Lake IT Park",
    duration: "1:00",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_1920/v1790422620/From_Klickpin.com-_4855512095374493-pin-id-4855512095374493.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_800,so_1/v1790422620/From_Klickpin.com-_4855512095374493-pin-id-4855512095374493.jpg",
    aspect: "aspect-[4/5]",
  },
  {
    id: "prop-19",
    title: "Lush Interior Courtyard & Floating Staircase",
    category: "Architectural Interior",
    client: "Ballygunge Circular Road",
    duration: "0:52",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_480/v1790714705/Video-36346.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714705/Video-36346.jpg",
    aspect: "aspect-[4/5]",
  },
  {
    id: "prop-20",
    title: "Riverside Promenade & Architectural Skyline",
    category: "Urban Architecture",
    client: "Millennium Park Waterfront",
    duration: "1:00",
    src: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_h264,q_auto,w_1920/v1790422620/From_Klickpin.com-_4855512095374493-pin-id-4855512095374493.mp4",
    poster: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_800,so_1/v1790422620/From_Klickpin.com-_4855512095374493-pin-id-4855512095374493.jpg",
    aspect: "aspect-[4/5]",
  },
];

const VIDEO_MARQUEE_ITEMS = [
  "Commercial Hero Films",
  "4K / 6K Cinema Cameras",
  "Salt Lake Sector V Studio",
  "DaVinci Resolve Color Grading",
  "High-Hook Performance Reels",
  "Founder & Keynote Documentaries",
  "Architectural & Macro Detail",
  "Rapid 5-Day Rough Cut",
  "Sound Design & Audio Mastering",
  "RED & Sony FX Cinema Glass",
];

export default function VideoProductionAgencyKolkataPage() {
  // Modal state for form
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);

  // Lightbox Modal State for Selected Video
  const [activeVideoModal, setActiveVideoModal] = useState<MasonryVideoItem | null>(null);

  // Mobile Masonry Expansion State (Only applies on mobile screens < sm)
  const [mobileExpanded, setMobileExpanded] = useState<{ [key: string]: boolean }>({});

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    brand: "",
    videoType: "Commercial Hero Film / Brand Anthem",
  });

  // Animated counters on viewport entry
  const [countersVisible, setCountersVisible] = useState(false);
  const metricsRef = useRef<HTMLDivElement>(null);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  // Video card refs for hover play
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  // Observer for counter animation
  useEffect(() => {
    const el = metricsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCountersVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!countersVisible) return;

    const duration = 1650;
    const start = performance.now();

    const frame = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount1(Math.floor(eased * 120));
      setCount2(Math.floor(eased * 84));
      setCount3(Math.floor(eased * 6));
      setCount4(Math.floor(eased * 5));

      if (progress < 1) {
        requestAnimationFrame(frame);
      }
    };
    requestAnimationFrame(frame);
  }, [countersVisible]);

  // Observer for scroll-reveal animations across all sections
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".reveal, .method-top-line, .method-row"
    );
    if (!revealElements.length) return;

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, []);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModalOpen(false);
        setActiveVideoModal(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalSuccess(true);
  };

  const openAuditModal = () => {
    setModalSuccess(false);
    setModalOpen(true);
  };

  // Video hover helpers for masonry items
  const handleMouseEnter = (id: string) => {
    const vid = videoRefs.current[id];
    if (vid) {
      vid.muted = true;
      vid.play().catch(() => {});
    }
  };

  const handleMouseLeave = (id: string) => {
    const vid = videoRefs.current[id];
    if (vid) {
      vid.pause();
    }
  };

  const commercialCorridors = [
    {
      name: "SALT LAKE SECTOR V",
      desc: "Enterprise IT, SaaS product walkthroughs, B2B software keynotes, and global venture demo films.",
    },
    {
      name: "PARK STREET & CAMAC STREET",
      desc: "Flagship luxury retail spots, heritage culinary commercials, and high-street fashion visual campaigns.",
    },
    {
      name: "NEW TOWN & RAJARHAT",
      desc: "Fintech brand anthems, tech corporate campus tours, and fast-growing startup leadership documentaries.",
    },
    {
      name: "ALIPORE & BALLYGUNGE",
      desc: "Ultra-prime residential architecture films, interior design showcases, and bespoke private commission films.",
    },
    {
      name: "CHOWRINGHEE & CBD",
      desc: "Heritage corporate conglomerates, boardroom executive interviews, and institutional milestone films.",
    },
    {
      name: "TOPSIA & EM BYPASS",
      desc: "Modern commercial real estate developments, automobile showrooms, and lifestyle retail commercials.",
    },
    {
      name: "BURRABAZAR & POSTA",
      desc: "Large-scale manufacturing walkthroughs, wholesale distribution hubs, and export facility films.",
    },
    {
      name: "HOWRAH RIVERFRONT",
      desc: "Heavy industrial engineering documentaries, port infrastructure, and atmospheric riverfront cinematography.",
    },
  ];

  // Render single video card (Pure video, hover-play, click-to-modal)
  const renderVideoCard = (video: MasonryVideoItem) => (
    <div
      key={video.id}
      onClick={() => setActiveVideoModal(video)}
      onMouseEnter={() => handleMouseEnter(video.id)}
      onMouseLeave={() => handleMouseLeave(video.id)}
      className="group relative rounded-2xl overflow-hidden border border-[#D5D2C9] bg-black shadow-xs hover:shadow-2xl hover:border-blue-600 transition-all duration-300 cursor-pointer select-none"
    >
      <div className={`relative w-full ${video.aspect} overflow-hidden bg-black`}>
        <video
          ref={(el) => {
            videoRefs.current[video.id] = el;
          }}
          src={video.src}
          poster={video.poster}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  );

  // =========================================================================
  // HELPER: RENDER EVEN-ENDING BALANCED MASONRY GRID
  // On Desktop/Tablet (sm+): 4 balanced columns with equal aspect sums
  // On Mobile (< sm): Shows only 3 videos initially + "View More" toggle button
  // =========================================================================
  const renderMasonryGrid = (items: MasonryVideoItem[], sectionKey: string) => {
    const isExpanded = Boolean(mobileExpanded[sectionKey]);
    const visibleMobileItems = isExpanded ? items : items.slice(0, 3);

    // Desktop: 4 balanced columns
    const numCols = 4;
    const cols: MasonryVideoItem[][] = Array.from({ length: numCols }, () => []);
    items.forEach((item, idx) => {
      cols[idx % numCols].push(item);
    });

    return (
      <>
        {/* DESKTOP & TABLET: Full 4-Column Balanced Grid (hidden on mobile) */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cols.map((colItems, colIdx) => (
            <div key={`col-${sectionKey}-${colIdx}`} className="flex flex-col gap-4 sm:gap-6">
              {colItems.map((video) => renderVideoCard(video))}
            </div>
          ))}
        </div>

        {/* MOBILE ONLY: 3 Videos Initially + "View More" Button (hidden on sm+) */}
        <div className="block sm:hidden space-y-4">
          <div className="flex flex-col gap-4">
            {visibleMobileItems.map((video) => renderVideoCard(video))}
          </div>

          {items.length > 3 && (
            <div className="pt-2">
              <button
                type="button"
                onClick={() =>
                  setMobileExpanded((prev) => ({
                    ...prev,
                    [sectionKey]: !prev[sectionKey],
                  }))
                }
                className="w-full py-3.5 px-6 bg-white hover:bg-zinc-50 border border-[#D5D2C9] rounded-2xl text-xs font-semibold uppercase tracking-wider text-[#0B0C10] hover:text-blue-600 transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <span>
                  {isExpanded ? "Show Less" : `View More (${items.length - 3} More Videos)`}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-blue-600 transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </div>
          )}
        </div>
      </>
    );
  };

  return (
    <div className="bg-[#F7F6F2] text-[#0B0C10] selection:bg-blue-600 selection:text-white min-h-screen">
      {/* Site's Official Floating Header Navigation */}
      <HeaderNavigation />

      {/* ============================================================== */}
      {/* 1. ATMOSPHERIC HERO SECTION                                     */}
      {/* ============================================================== */}
      <header className="relative text-white border-b border-[#232630] overflow-hidden bg-[#090B10] pt-28 sm:pt-36 lg:pt-40 min-h-[82vh] flex flex-col justify-between">
        {/* Left Vertical Edge Label */}
        <div className="hidden xl:flex absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center items-center gap-2 text-[10px] font-mono tracking-[0.28em] text-zinc-500 uppercase select-none pointer-events-none z-20 whitespace-nowrap">
          <span>EST. 2024 — KOLKATA, WB</span>
        </div>

        {/* Right Vertical Edge Label */}
        <div className="hidden xl:flex absolute right-8 top-1/2 -translate-y-1/2 rotate-90 origin-center items-center gap-2 text-[10px] font-mono tracking-[0.28em] text-zinc-500 uppercase select-none pointer-events-none z-20 whitespace-nowrap">
          <span>INDEX #002 | CINEMA · REELS · NARRATIVE</span>
        </div>

        {/* Cityscape Background Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#090B10]/92 via-[#090B10]/75 to-[#090B10] z-0" />

        {/* Ambient Blue Horizon Glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[360px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none z-0" />
        <div className="ambient-glow-blue absolute top-16 right-[10%] w-[26rem] h-[26rem] rounded-full z-0 opacity-50 pointer-events-none" />

        {/* Background Giant Infinite Watermark Marquee */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden pointer-events-none select-none z-0">
          <div className="watermark-marquee-wrap">
            <div className="flex shrink-0 items-center whitespace-nowrap text-[8rem] sm:text-[12rem] md:text-[15rem] lg:text-[18rem] font-bold leading-none text-white/[0.045] tracking-tight uppercase font-sans">
              <span className="pr-16">// CINEMA IN MOTION //</span>
              <span className="pr-16">// CINEMA IN MOTION //</span>
              <span className="pr-16">// CINEMA IN MOTION //</span>
            </div>
            <div
              className="flex shrink-0 items-center whitespace-nowrap text-[8rem] sm:text-[12rem] md:text-[15rem] lg:text-[18rem] font-bold leading-none text-white/[0.045] tracking-tight uppercase font-sans"
              aria-hidden="true"
            >
              <span className="pr-16">// CINEMA IN MOTION //</span>
              <span className="pr-16">// CINEMA IN MOTION //</span>
              <span className="pr-16">// CINEMA IN MOTION //</span>
            </div>
          </div>
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-4 pb-16 sm:pb-24 lg:pb-28 w-full">
          {/* Top Status Eyebrow */}
          <div className="hero-fade-up flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.22em] text-zinc-400 mb-6 sm:mb-8">
            <span className="w-2 h-2 bg-blue-600 inline-block shadow-sm shadow-blue-600/60" />
            <span>COMMERCIAL PRODUCTION STUDIO · KOLKATA &amp; GLOBAL</span>
          </div>

          {/* Monumental Stacked Headline: FRAME. DIRECT. CONVERT. */}
          <div className="text-6xl sm:text-8xl md:text-9xl lg:text-[9.5rem] font-bold uppercase tracking-[-0.035em] leading-[0.88] mb-6 font-sans">
            <div className="hero-line-mask">
              <span className="hero-word hero-word-1 text-white">FRAME.</span>
            </div>
            <div className="hero-line-mask">
              <span className="hero-word hero-word-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
                DIRECT.
              </span>
            </div>
            <div className="hero-line-mask">
              <span className="hero-word hero-word-3 text-white">CONVERT.</span>
            </div>
          </div>

          {/* H1 Subheading: video production agency in Kolkata */}
          <h1 className="hero-fade-up hero-delay-1 text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-10 sm:mb-12 font-sans">
            video production agency in Kolkata
          </h1>

          {/* Bottom Split Row: Paragraph on Left, CTAs on Right */}
          <div className="hero-fade-up hero-delay-2 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pt-2">
            <div className="lg:col-span-7">
              <p className="text-zinc-300 text-xs sm:text-sm md:text-[15px] leading-relaxed font-normal max-w-xl">
                Sparklines Studio is a commercial video production agency in Kolkata crafting cinema-grade
                hero films, founder keynotes, high-converting performance reels, and corporate brand documentaries.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-wrap items-center gap-4 lg:justify-end">
              <Button
                size="md"
                tint="#2563eb"
                lineColor="#bfdbfe"
                baseColor="#1d4ed8"
                onClick={openAuditModal}
                className="text-xs sm:text-sm font-semibold tracking-wider uppercase px-7 py-3.5 shadow-lg shadow-blue-600/30 group cursor-pointer"
              >
                <span>BOOK PRODUCTION SCOPE</span>
              </Button>

              <a
                href="tel:+919641861932"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-black/40 hover:bg-black/70 border border-white/20 hover:border-blue-500/60 text-white font-mono text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer backdrop-blur-sm"
              >
                <svg
                  className="w-3.5 h-3.5 text-zinc-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>CALL (964) 186-1932</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ============================================================== */}
      {/* 2. INFINITE SERVICE MARQUEE SECTION                             */}
      {/* ============================================================== */}
      <div className="relative w-full overflow-hidden bg-[#F7F6F2] border-b border-[#D5D2C9] py-4 sm:py-5 select-none">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-36 bg-gradient-to-r from-[#F7F6F2] to-transparent select-none" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-36 bg-gradient-to-l from-[#F7F6F2] to-transparent select-none" />

        <div className="watermark-marquee-wrap hover:[animation-play-state:paused]">
          <div className="flex shrink-0 items-center">
            {VIDEO_MARQUEE_ITEMS.map((item, idx) => (
              <div
                key={`marquee-item-1-${idx}`}
                className="flex items-center gap-4 sm:gap-6 px-4 sm:px-6 shrink-0"
              >
                <span className="text-sm sm:text-base font-semibold uppercase tracking-[0.14em] text-[#0B0C10] hover:text-blue-600 transition-colors whitespace-nowrap font-sans">
                  {item}
                </span>
                <span className="text-blue-600 font-light text-base sm:text-lg select-none">
                  ✦
                </span>
              </div>
            ))}
          </div>
          <div className="flex shrink-0 items-center" aria-hidden="true">
            {VIDEO_MARQUEE_ITEMS.map((item, idx) => (
              <div
                key={`marquee-item-2-${idx}`}
                className="flex items-center gap-4 sm:gap-6 px-4 sm:px-6 shrink-0"
              >
                <span className="text-sm sm:text-base font-semibold uppercase tracking-[0.14em] text-[#0B0C10] hover:text-blue-600 transition-colors whitespace-nowrap font-sans">
                  {item}
                </span>
                <span className="text-blue-600 font-light text-base sm:text-lg select-none">
                  ✦
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 3. MASONRY 1: RESTAURANTS, CAFES & RETAIL (24 VIDEOS)          */}
      {/* Even-ending balanced grid with zero text overlays on cards      */}
      {/* ============================================================== */}
      <section
        id="video-masonry"
        className="w-full bg-[#F7F6F2] py-16 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12 border-b border-[#D5D2C9]"
      >
        <div className="max-w-[1600px] mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-6 border-b border-[#D5D2C9]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">
                  Motion Archive // 24 Curated Productions
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B0C10] font-sans">
                Restaurants, Cafes &amp;{" "}
                <span className="font-editorial italic font-normal text-blue-600">
                  Retail
                </span>
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 max-w-md font-normal leading-relaxed">
              Sensory culinary storytelling, cafe ambience, and high-conversion retail commercial films. Hover on desktop to preview; tap any card to open the cinema theater.
            </p>
          </div>

          {/* 24-Video Balanced Grid (Desktop 4-col, Mobile 3 videos + View More) */}
          {renderMasonryGrid(RESTAURANT_RETAIL_VIDEOS, "dining")}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. EDITORIAL MANIFESTO SECTION                                  */}
      {/* ============================================================== */}
      <section className="bg-[#F7F6F2] py-20 sm:py-28 px-5 sm:px-8 lg:px-12 border-b border-[#D5D2C9]">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal delay-75 text-xl sm:text-2xl md:text-[28px] lg:text-5xl font-semibold uppercase tracking-[-0.02em] leading-snug text-[#0B0C10] mb-8 font-sans">
            The Video Production Agency in Kolkata Built for{" "}
            <span className="font-editorial italic font-normal lowercase text-blue-600 text-2xl sm:text-3xl lg:text-6xl">
              cinematic
            </span>{" "}
            Conversion.
          </h2>

          <div className="space-y-5 text-xs sm:text-[13.5px] lg:text-lg leading-[1.9] text-zinc-700 font-normal">
            <p className="reveal delay-150">
              Most videography vendors in Kolkata deliver flat, generic corporate footage:
              static talking heads, cookie-cutter stock background music, and predictable pans that
              audiences scroll past in a fraction of a second.
            </p>
            <p className="reveal delay-225">
              At Sparklines Studio, we treat motion picture as a high-leverage growth asset.
              Every camera move, lighting contrast, sound bite, and color grade is calculated
              to arrest attention, instill immediate brand prestige, and move decision-makers to action.
            </p>
            <p className="reveal delay-300">
              Whether documenting high-level tech leadership in Salt Lake Sector V, unveiling a luxury
              flagship along Park Street, or driving national customer acquisition with hook-tested
              9:16 vertical ads—our cinema crew delivers motion work that elevates your brand far above
              the competition.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. MASONRY 2: CLOTHING & APPAREL FILMS (24 VIDEOS)             */}
      {/* Positioned directly below "The Video Production Agency in      */}
      {/* Kolkata Built for cinematic Conversion" as requested          */}
      {/* ============================================================== */}
      <section
        id="clothing-masonry"
        className="w-full bg-white py-16 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12 border-b border-[#D5D2C9]"
      >
        <div className="max-w-[1600px] mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-6 border-b border-zinc-200">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">
                  Fashion Archive // 24 Commercial Productions
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B0C10] font-sans">
                Clothing &amp;{" "}
                <span className="font-editorial italic font-normal text-blue-600">
                  Apparel
                </span>{" "}
                Films
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 max-w-md font-normal leading-relaxed">
              Editorial lookbooks, runway motion, streetwear hook campaigns, and tactile textile cinema crafted for fashion houses and D2C apparel labels.
            </p>
          </div>

          {/* 24-Video Balanced Grid (Desktop 4-col, Mobile 3 videos + View More) */}
          {renderMasonryGrid(CLOTHING_VIDEOS, "clothing")}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. PRODUCTION METRICS STRIP (ANIMATED STATS // 01 — INDEX)     */}
      {/* Styled to exactly match the reference image with blue accent   */}
      {/* ============================================================== */}
      <section
        ref={metricsRef}
        className="w-full bg-[#07080B] text-white py-20 sm:py-28 lg:py-32 px-6 sm:px-12 lg:px-16 border-b border-zinc-800/80"
      >
        <div className="w-full max-w-7xl mx-auto">
          {/* Top Header with Blue Accent & Hairline Divider */}
          <div className="flex items-center gap-4 sm:gap-6 mb-14 sm:mb-20">
            <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.22em] text-blue-500 whitespace-nowrap">
              // 01 — INDEX
            </span>
            <div className="h-[1px] flex-1 bg-zinc-800/80" />
          </div>

          {/* 4 Architectural Columns with Tall Vertical Dividers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 sm:gap-y-16">
            {/* Stat 01 */}
            <div className="pr-6 sm:pr-8 lg:pr-12 lg:border-r border-zinc-800/80">
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white mb-3 sm:mb-4 font-sans leading-none">
                {count1}
                <span className="text-blue-500 font-light">M+</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                Organic &amp; Paid Views Generated
              </p>
            </div>

            {/* Stat 02 */}
            <div className="sm:pl-6 lg:pl-12 sm:pr-6 lg:pr-12 sm:border-r-0 lg:border-r border-zinc-800/80">
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white mb-3 sm:mb-4 font-sans leading-none">
                {count2}
                <span className="text-blue-500 font-light">%</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                Average Video Retention Rate
              </p>
            </div>

            {/* Stat 03 */}
            <div className="lg:pl-12 lg:pr-12 lg:border-r border-zinc-800/80">
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white mb-3 sm:mb-4 font-sans leading-none">
                {count3}
                <span className="text-blue-500 font-light">K</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                Cinema RAW Capture Standard
              </p>
            </div>

            {/* Stat 04 */}
            <div className="sm:pl-6 lg:pl-12">
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white mb-3 sm:mb-4 font-sans leading-none">
                {count4}
                <span className="text-blue-500 font-light">d</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                Average Turnaround to First Cut
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. KOLKATA PRODUCTION HUBS (4x2 ARCHITECTURAL GRID)            */}
      {/* ============================================================== */}
      <section
        id="kolkata-production-hubs"
        className="w-full bg-[#F7F6F2] py-20 sm:py-28 lg:py-32 border-b border-[#D5D2C9]"
      >
        <div className="w-full px-6 sm:px-12 lg:px-16 mb-12 sm:mb-16 lg:mb-20">
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-zinc-500 mb-4 sm:mb-6">
            // LOCAL FOOTPRINT &amp; ON-LOCATION CAPABILITIES
          </p>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-[-0.03em] text-[#0B0C10] leading-[1.05] font-sans mb-6 max-w-5xl">
            SHOOTING ACROSS KOLKATA&apos;S PREMIER COMMERCIAL CORRIDORS
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed max-w-3xl">
            Our cinema crew and equipment trucks deploy directly to your offices, industrial facilities,
            retail flagships, and heritage estates across Kolkata and Eastern India.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-b border-[#D5D2C9]">
          {commercialCorridors.map((hub, idx) => (
            <div
              key={`hub-${idx}`}
              onClick={openAuditModal}
              className="relative p-8 sm:p-10 lg:p-12 min-h-[190px] sm:min-h-[220px] flex flex-col justify-between bg-[#F7F6F2] hover:bg-blue-600 transition-all duration-500 ease-in-out border-b sm:border-r border-[#D5D2C9] group cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none" />
              <div className="relative z-10 flex items-start justify-between gap-4 mb-4">
                <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#0B0C10] group-hover:text-white transition-colors duration-500 ease-in-out">
                  {hub.name}
                </h3>
                <span className="text-xs font-mono text-zinc-400 group-hover:text-white transition-colors duration-500">
                  0{idx + 1}
                </span>
              </div>
              <p className="relative z-10 text-xs sm:text-sm text-zinc-600 group-hover:text-blue-100 font-normal leading-relaxed transition-colors duration-500 ease-in-out">
                {hub.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. FOUR STAGES. ONE TRAJECTORY. (ARCHITECTURAL HAIRLINE GRID)   */}
      {/* ============================================================== */}
      <section
        id="production-pipeline"
        className="w-full bg-[#F7F6F2] py-20 sm:py-28 lg:py-32 border-b border-[#D5D2C9]"
      >
        {/* Full-Width Section Header matching screenshot */}
        <div className="w-full px-6 sm:px-12 lg:px-16 mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-[-0.03em] text-[#0B0C10] leading-[1.04] font-sans">
            Four stages.<br />
            <span className="font-editorial italic font-normal text-[#0B0C10]">
              One
            </span>{" "}
            trajectory.
          </h2>
        </div>

        {/* Full-Width Architectural Grid Matching Screenshot */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-b border-[#D5D2C9]">
          {/* Stage 01: Treatment & Concept */}
          <div
            onClick={openAuditModal}
            className="relative p-8 sm:p-12 lg:p-16 border-b sm:border-r lg:border-b-0 lg:border-r border-[#D5D2C9] bg-[#F7F6F2] hover:bg-blue-600 transition-all duration-500 ease-in-out flex flex-col justify-between min-h-[300px] sm:min-h-[360px] group cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between mb-16 sm:mb-24">
              <FileText className="w-7 h-7 text-[#0B0C10] stroke-[1.5] group-hover:text-white group-hover:scale-105 transition-all duration-500 ease-in-out" />
              <span className="text-xs font-mono text-zinc-400 group-hover:text-blue-100 transition-colors duration-500 ease-in-out">
                01
              </span>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-tight text-[#0B0C10] group-hover:text-white transition-colors duration-500 ease-in-out mb-3 font-sans">
                Treatment &amp; Concept
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 group-hover:text-blue-100 font-normal leading-relaxed max-w-sm transition-colors duration-500 ease-in-out">
                Script framing, storyboards, location scouting, and aesthetic moodboarding to lock the narrative before shooting.
              </p>
            </div>
          </div>

          {/* Stage 02: Cinema Shoot */}
          <div
            onClick={openAuditModal}
            className="relative p-8 sm:p-12 lg:p-16 border-b sm:border-r-0 lg:border-r lg:border-b-0 border-[#D5D2C9] bg-[#F7F6F2] hover:bg-blue-600 transition-all duration-500 ease-in-out flex flex-col justify-between min-h-[300px] sm:min-h-[360px] group cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between mb-16 sm:mb-24">
              <Camera className="w-7 h-7 text-[#0B0C10] stroke-[1.5] group-hover:text-white group-hover:scale-105 transition-all duration-500 ease-in-out" />
              <span className="text-xs font-mono text-zinc-400 group-hover:text-blue-100 transition-colors duration-500 ease-in-out">
                02
              </span>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-tight text-[#0B0C10] group-hover:text-white transition-colors duration-500 ease-in-out mb-3 font-sans">
                Cinema Shoot
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 group-hover:text-blue-100 font-normal leading-relaxed max-w-sm transition-colors duration-500 ease-in-out">
                Full cinema crew on set with RED/Sony FX bodies, specialized cinema glass, multi-point lighting, and sound capture.
              </p>
            </div>
          </div>

          {/* Stage 03: Edit & Sound Design */}
          <div
            onClick={openAuditModal}
            className="relative p-8 sm:p-12 lg:p-16 border-b sm:border-b-0 sm:border-r lg:border-b-0 lg:border-r border-[#D5D2C9] bg-[#F7F6F2] hover:bg-blue-600 transition-all duration-500 ease-in-out flex flex-col justify-between min-h-[300px] sm:min-h-[360px] group cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between mb-16 sm:mb-24">
              <Film className="w-7 h-7 text-[#0B0C10] stroke-[1.5] group-hover:text-white group-hover:scale-105 transition-all duration-500 ease-in-out" />
              <span className="text-xs font-mono text-zinc-400 group-hover:text-blue-100 transition-colors duration-500 ease-in-out">
                03
              </span>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-tight text-[#0B0C10] group-hover:text-white transition-colors duration-500 ease-in-out mb-3 font-sans">
                Edit &amp; Sound Design
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 group-hover:text-blue-100 font-normal leading-relaxed max-w-sm transition-colors duration-500 ease-in-out">
                Rhythmic montage pacing, dialogue cleanup, sound design Foley, and original musical score synchronization.
              </p>
            </div>
          </div>

          {/* Stage 04: Color & Multi-Delivery */}
          <div
            onClick={openAuditModal}
            className="relative p-8 sm:p-12 lg:p-16 border-[#D5D2C9] bg-[#F7F6F2] hover:bg-blue-600 transition-all duration-500 ease-in-out flex flex-col justify-between min-h-[300px] sm:min-h-[360px] group cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between mb-16 sm:mb-24">
              <Sparkles className="w-7 h-7 text-[#0B0C10] stroke-[1.5] group-hover:text-white group-hover:scale-105 transition-all duration-500 ease-in-out" />
              <span className="text-xs font-mono text-zinc-400 group-hover:text-blue-100 transition-colors duration-500 ease-in-out">
                04
              </span>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-tight text-[#0B0C10] group-hover:text-white transition-colors duration-500 ease-in-out mb-3 font-sans">
                Color &amp; Multi-Delivery
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 group-hover:text-blue-100 font-normal leading-relaxed max-w-sm transition-colors duration-500 ease-in-out">
                DaVinci Resolve HDR color grading, 16:9 master export, and 9:16 vertical social cutdown delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 9. MASONRY 3: REAL ESTATE & ARCHITECTURAL CINEMA (20 VIDEOS)   */}
      {/* Even-ending balanced grid with zero text overlays on cards      */}
      {/* ============================================================== */}
      <section
        id="real-estate-masonry"
        className="w-full bg-white py-16 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12 border-b border-[#D5D2C9]"
      >
        <div className="max-w-[1600px] mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-6 border-b border-zinc-200">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">
                  Spatial Archive // 20 Verified Productions
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B0C10] font-sans">
                Real Estate &amp;{" "}
                <span className="font-editorial italic font-normal text-blue-600">
                  Architectural
                </span>{" "}
                Cinema
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 max-w-md font-normal leading-relaxed">
              Ultra-luxury residential estates, commercial Grade-A developments, spatial interior tours, and high-framerate architectural drone cinematography.
            </p>
          </div>

          {/* 20-Video Balanced Grid (Desktop 4-col, Mobile 3 videos + View More) */}
          {renderMasonryGrid(REAL_ESTATE_VIDEOS, "realestate")}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 10. PRE-FOOTER FULL-WIDTH MARKETING CTA                         */}
      {/* ============================================================== */}
      <CtaFloatingSection />

      {/* ============================================================== */}
      {/* 11. GLOBAL BRAND FOOTER BANNER                                  */}
      {/* ============================================================== */}
      <BrandFooterBanner />

      {/* ============================================================== */}
      {/* 12. PURE VIDEO LIGHTBOX MODAL (NO TEXT, NO WHITESPACE, BLURRED BG) */}
      {/* ============================================================== */}
      {activeVideoModal && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveVideoModal(null)}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 backdrop-blur-2xl p-4 sm:p-8 md:p-12 animate-fadeIn cursor-pointer"
        >
          {/* Floating Close Button Top Right */}
          <button
            type="button"
            onClick={() => setActiveVideoModal(null)}
            className="fixed top-5 right-5 sm:top-8 sm:right-8 h-11 w-11 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white backdrop-blur-xl border border-white/20 flex items-center justify-center transition-all cursor-pointer z-[10000] shadow-2xl hover:scale-105"
            title="Close (Esc)"
            aria-label="Close video"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Clean Pure Video Element - Zero Whitespace, Zero Text */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex items-center justify-center cursor-default max-w-[92vw] max-h-[90vh]"
          >
            <video
              src={activeVideoModal.src}
              poster={activeVideoModal.poster}
              controls
              autoPlay
              playsInline
              className="max-w-[92vw] max-h-[90vh] w-auto h-auto rounded-2xl shadow-2xl object-contain overflow-hidden"
            />
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 13. INTERACTIVE PRODUCTION TREATMENT MODAL                      */}
      {/* ============================================================== */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalOpen(false);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fadeIn"
        >
          <div className="bg-[#F7F6F2] border border-[#D5D2C9] max-w-lg w-full p-6 sm:p-9 relative rounded-2xl shadow-2xl">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 text-zinc-500 hover:text-[#0B0C10] font-normal text-lg leading-none cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>

            {!modalSuccess ? (
              <>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                    Complimentary Production Discovery
                  </span>
                </div>
                <h3 className="text-2xl font-semibold uppercase tracking-[-0.02em] text-[#0B0C10] mb-2 font-sans">
                  Book Your Kolkata{" "}
                  <span className="font-editorial italic font-normal lowercase text-blue-600">
                    Video
                  </span>{" "}
                  Treatment.
                </h3>
                <p className="text-xs text-zinc-600 font-normal mb-6">
                  Enter your details below. A Senior Commercial Director in our Salt Lake Sector V studio
                  will draft a personalized narrative concept, reference moodboard, and line-item estimate.
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-[#0B0C10] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sen"
                      className="w-full bg-white border border-[#D5D2C9] px-3.5 py-2.5 text-xs font-normal text-[#0B0C10] focus:outline-none focus:border-blue-600 rounded-xl transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-wider text-[#0B0C10] mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full bg-white border border-[#D5D2C9] px-3.5 py-2.5 text-xs font-normal text-[#0B0C10] focus:outline-none focus:border-blue-600 rounded-xl transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-wider text-[#0B0C10] mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98300 00000"
                        className="w-full bg-white border border-[#D5D2C9] px-3.5 py-2.5 text-xs font-normal text-[#0B0C10] focus:outline-none focus:border-blue-600 rounded-xl transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-[#0B0C10] mb-1">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      value={formData.brand}
                      onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                      placeholder="Your brand or agency name"
                      className="w-full bg-white border border-[#D5D2C9] px-3.5 py-2.5 text-xs font-normal text-[#0B0C10] focus:outline-none focus:border-blue-600 rounded-xl transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-[#0B0C10] mb-1">
                      Primary Production Objective
                    </label>
                    <select
                      value={formData.videoType}
                      onChange={(e) => setFormData({ ...formData, videoType: e.target.value })}
                      className="w-full bg-white border border-[#D5D2C9] px-3.5 py-2.5 text-xs font-normal text-[#0B0C10] focus:outline-none focus:border-blue-600 rounded-xl transition-all cursor-pointer"
                    >
                      <option>Commercial Hero Film / Brand Anthem</option>
                      <option>Founder Keynote &amp; Leadership Documentary</option>
                      <option>High-Converting Social Reels (Meta / YouTube Shorts)</option>
                      <option>Product Launch &amp; Macro Detail Video</option>
                      <option>Architectural &amp; Real Estate Spatial Tour</option>
                    </select>
                  </div>
                  <div className="pt-2">
                    <Button
                      type="submit"
                      size="md"
                      tint="#2563eb"
                      lineColor="#bfdbfe"
                      baseColor="#1d4ed8"
                      className="w-full shadow-lg shadow-blue-600/25 group"
                    >
                      <span>Send My Production Concept →</span>
                    </Button>
                  </div>
                </form>
              </>
            ) : (
              <div className="py-8 text-center animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-4 font-normal text-xl shadow-lg shadow-blue-600/30">
                  ✓
                </div>
                <h4 className="text-lg font-semibold uppercase text-[#0B0C10] mb-2 font-sans">
                  Treatment Request Received
                </h4>
                <p className="text-xs text-zinc-600 font-normal max-w-sm mx-auto mb-6 leading-relaxed">
                  Our Commercial Director in Salt Lake Sector V is reviewing your project details.
                  Expect your visual moodboard and itemized proposal within 1 business day.
                </p>
                <Button
                  size="sm"
                  tint="#2563eb"
                  lineColor="#bfdbfe"
                  baseColor="#1d4ed8"
                  onClick={() => setModalOpen(false)}
                >
                  Back to Page
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
