"use client";

import { AmbientVideo } from "./StudioMotion";
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
const seen = new Set<string>();
const allVideos = [...INSTAGRAM_VIDEOS, ...existingVideos].filter(video => { if (!video.src) return false; const key = video.src.split(/\/v\d+\//).pop() || video.src; if (seen.has(key)) return false; seen.add(key); return true; });
const instagramUrlById = new Map(INSTAGRAM_VIDEOS.map((video, index) => [video.id, INSTAGRAM_VIDEO_URLS[index]]));

function VideoCard({ video }: { video: MasonryVideoItem }) {
  const originalUrl = instagramUrlById.get(video.id);

  return (
    <article className="video-gallery-card">
      <div className="video-gallery-media">
        {video.src ? (
          <AmbientVideo src={video.src} poster={video.poster} />
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
  const videos = allVideos.filter(video => video.src);
  return (
    <main id="main-content" className="video-gallery-page">
      <header className="video-gallery-heading">
        <p className="studio-kicker">SPARKLINES STUDIO · MOVING PICTURES</p>
        <h1>Video <em>gallery.</em></h1>
        <p>A collection of food, fashion and spaces, told one frame at a time.</p>
      </header>
      <div className="video-gallery-grid">{videos.map((video) => <VideoCard key={video.id} video={video} />)}</div>
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

