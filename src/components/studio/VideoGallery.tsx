"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  CLOTHING_VIDEOS,
  REAL_ESTATE_VIDEOS,
  RESTAURANT_RETAIL_VIDEOS,
  type MasonryVideoItem,
} from "@/data/videoProductionGallery";
import { INSTAGRAM_VIDEOS, INSTAGRAM_VIDEO_URLS } from "@/data/instagramVideos";
import "./video-gallery.css";

const existingVideos = [...RESTAURANT_RETAIL_VIDEOS, ...CLOTHING_VIDEOS, ...REAL_ESTATE_VIDEOS];
const allVideos = [...INSTAGRAM_VIDEOS, ...existingVideos];
const instagramUrlById = new Map(INSTAGRAM_VIDEOS.map((video, index) => [video.id, INSTAGRAM_VIDEO_URLS[index]]));

function VideoCard({ video }: { video: MasonryVideoItem }) {
  const originalUrl = instagramUrlById.get(video.id);

  return (
    <article className="video-gallery-card">
      <div className="video-gallery-media">
        {video.src ? (
          <video controls playsInline preload="none" poster={video.poster || undefined} aria-label={video.title}>
            <source src={video.src} type="video/mp4" />
          </video>
        ) : originalUrl ? (
          <iframe
            src={`https://www.instagram.com${new URL(originalUrl).pathname.replace(/\/$/, "")}/embed`}
            title={video.title}
            loading="lazy"
            allow="autoplay; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <a className="video-gallery-source" href="#" aria-label={video.title}>
            <span>Video preview unavailable</span><ArrowUpRight size={22} />
          </a>
        )}
      </div>
      <div className="video-gallery-caption">
        <div><p>{video.category}</p><h2>{video.title}</h2></div>
        {originalUrl && <a href={originalUrl} target="_blank" rel="noreferrer" aria-label={`View original post for ${video.title}`}><ArrowUpRight size={19} /></a>}
      </div>
    </article>
  );
}

export function VideoGallery() {
  const [filter, setFilter] = useState("All videos");
  const filters = ["All videos", "Restaurants, Cafes & Retail", "Fashion & lifestyle", "Spaces & real estate"];
  const videos = useMemo(() => {
    if (filter === "All videos") return allVideos;
    if (filter === "Restaurants, Cafes & Retail") return [...INSTAGRAM_VIDEOS, ...RESTAURANT_RETAIL_VIDEOS];
    if (filter === "Fashion & lifestyle") return CLOTHING_VIDEOS;
    return REAL_ESTATE_VIDEOS;
  }, [filter]);

  return (
    <main id="main-content" className="video-gallery-page">
      <header className="video-gallery-heading">
        <p className="studio-kicker">SPARKLINES STUDIO · MOVING PICTURES</p>
        <h1>Video <em>gallery.</em></h1>
        <p>A collection of food, fashion and spaces, told one frame at a time.</p>
      </header>
      <div className="video-gallery-filters" role="group" aria-label="Filter videos">
        {filters.map((label) => <button key={label} type="button" aria-pressed={filter === label} onClick={() => setFilter(label)}>{label}</button>)}
        <span aria-live="polite">{videos.length} videos</span>
      </div>
      <div className="video-gallery-grid">{videos.map((video) => <VideoCard key={video.id} video={video} />)}</div>
      <Link className="video-gallery-contact" href="/contact">Have a story in mind? Let’s make it move <ArrowUpRight size={18} /></Link>
    </main>
  );
}

export function HomeFeaturedVideos() {
  const featured = INSTAGRAM_VIDEOS.slice(0, 6);
  return (
    <section className="home-featured-videos experience-section experience-pad" aria-labelledby="home-featured-videos-title">
      <div className="home-featured-videos-heading"><div><p className="studio-kicker">RESTAURANTS · CAFES · RETAIL</p><h2 id="home-featured-videos-title">A little more <em>appetite.</em></h2></div><Link href="/video-gallery">Explore all {allVideos.length} films <ArrowUpRight size={18} /></Link></div>
      <div className="home-featured-videos-grid">{featured.map((video) => <VideoCard key={video.id} video={video} />)}</div>
    </section>
  );
}
