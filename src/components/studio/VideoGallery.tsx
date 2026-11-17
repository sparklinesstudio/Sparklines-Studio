"use client";

import { AmbientVideo } from "./StudioMotion";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  CLOTHING_VIDEOS,
  REAL_ESTATE_VIDEOS,
  RESTAURANT_RETAIL_VIDEOS,
  type MasonryVideoItem,
} from "@/data/videoProductionGallery";
import { INSTAGRAM_VIDEOS } from "@/data/instagramVideos";
import importedVideos from "@/data/importedGalleryVideos.json";
import "./video-gallery.css";

const categories = ["Food", "Personal Branding", "Real Estate", "Clothing"] as const;
type Category = (typeof categories)[number];
const categorize = (videos: MasonryVideoItem[], category: Category) => videos.map(video => ({ ...video, category }));
const existingVideos = [...categorize(RESTAURANT_RETAIL_VIDEOS, "Food"), ...categorize(CLOTHING_VIDEOS, "Clothing"), ...categorize(REAL_ESTATE_VIDEOS, "Real Estate")];
const seen = new Set<string>();
const allVideos = [...categorize(INSTAGRAM_VIDEOS, "Food"), ...importedVideos, ...existingVideos].filter(video => { if (!video.src) return false; const key = video.src.split(/\/v\d+\//).pop() || video.src; if (seen.has(key)) return false; seen.add(key); return true; });

function VideoCard({ video }: { video: MasonryVideoItem }) {
  return (
    <article className="video-gallery-card">
      <div className="video-gallery-media">
        <AmbientVideo src={video.src} poster={video.poster} />
      </div>
      <div className="video-gallery-caption">
        <div><p>{video.category}</p><h2>{video.title}</h2></div>
      </div>
    </article>
  );
}

export function VideoGallery() {
  const [category, setCategory] = useState<Category>("Food");
  const videos = allVideos.filter(video => video.category === category);
  return (
    <main id="main-content" className="video-gallery-page">
      <header className="video-gallery-heading">
        <p className="studio-kicker">SPARKLINES STUDIO · MOVING PICTURES</p>
        <h1>Video <em>gallery.</em></h1>
        <p>Food, personal brands, real estate and clothing, told one frame at a time.</p>
      </header>
      <div className="video-gallery-filters" role="group" aria-label="Filter videos by category">
        {categories.map(item => <button key={item} type="button" aria-pressed={category === item} aria-controls="gallery-videos" onClick={() => setCategory(item)}>{item}</button>)}
        <span role="status">{videos.length} {videos.length === 1 ? "film" : "films"}</span>
      </div>
      {videos.length === 0 && <p className="video-gallery-empty">Films in this category are coming soon.</p>}
      <div id="gallery-videos" key={category} className="video-gallery-grid video-gallery-category-enter" aria-label={`${category} videos`}>{videos.map((video) => <VideoCard key={video.id} video={video} />)}</div>
      <Link className="video-gallery-contact" href="/contact">Have a story in mind? Let’s make it move <ArrowUpRight size={18} /></Link>
    </main>
  );
}

export function HomeFeaturedVideos() {
  const featured = INSTAGRAM_VIDEOS.filter(video => video.src).slice(0, 6);
  return (
    <section className="home-featured-videos experience-section experience-pad" aria-labelledby="home-featured-videos-title">
      <div className="home-featured-videos-heading"><div><p className="studio-kicker">RESTAURANTS · CAFES · RETAIL</p><h2 id="home-featured-videos-title">A little more <em>appetite.</em></h2></div><Link href="/video-gallery">Explore all {allVideos.length} films <ArrowUpRight size={18} /></Link></div>
      <div className="home-featured-videos-grid">{featured.map((video) => <VideoCard key={video.id} video={video} />)}</div>
    </section>
  );
}

