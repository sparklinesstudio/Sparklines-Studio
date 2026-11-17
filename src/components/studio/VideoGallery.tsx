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
import { INSTAGRAM_VIDEOS } from "@/data/instagramVideos";
import importedVideos from "@/data/importedGalleryVideos.json";
import "./video-gallery.css";

const categories = ["Food", "Clothing", "Personal Branding", "Real Estate"] as const;
type Category = (typeof categories)[number];
const categorize = (videos: MasonryVideoItem[], category: Category) => videos.map(video => ({ ...video, category }));
const removedFoodIds = new Set(["dine-2", "dine-3", "dine-4", "dine-6"]);
const removedFoodSources = new Set(RESTAURANT_RETAIL_VIDEOS.filter(video => removedFoodIds.has(video.id)).map(video => video.src));
// These source files also occur under other titles in the legacy collection.
const foodVideos = RESTAURANT_RETAIL_VIDEOS.filter(video => !removedFoodSources.has(video.src));
const removedClothingIds = new Set(["wear-1", "wear-2", "wear-3", "wear-4"]);
const removedClothingSources = new Set(CLOTHING_VIDEOS.filter(video => removedClothingIds.has(video.id)).map(video => video.src));
const clothingVideos = CLOTHING_VIDEOS.filter(video => !removedClothingSources.has(video.src));
const existingVideos = [...categorize(foodVideos, "Food"), ...categorize(clothingVideos, "Clothing"), ...categorize(REAL_ESTATE_VIDEOS, "Real Estate")];
const seen = new Set<string>();
const allVideos = [...categorize(INSTAGRAM_VIDEOS, "Food"), ...importedVideos, ...existingVideos].filter(video => { if (!video.src) return false; const key = video.src.split(/\/v\d+\//).pop() || video.src; if (seen.has(key)) return false; seen.add(key); return true; });

function VideoCard({ video }: { video: MasonryVideoItem }) {
  return (
    <article className="video-gallery-card">
      <div className="video-gallery-media">
        <AmbientVideo src={video.src} poster={video.poster} />
      </div>
      <div className="video-gallery-caption">
        <div><p>{video.category}</p><h3>{video.title}</h3></div>
      </div>
    </article>
  );
}

export function VideoGallery() {
  return (
    <main id="main-content" className="video-gallery-page">
      <header className="video-gallery-heading">
        <p className="studio-kicker">SPARKLINES STUDIO · MOVING PICTURES</p>
        <h1>Video <em>gallery.</em></h1>
        <p>Food, personal brands, real estate and clothing, told one frame at a time.</p>
      </header>
      {categories.map(category => {
        const videos = allVideos.filter(video => video.category === category);
        const sectionId = `gallery-${category.toLowerCase().replaceAll(" ", "-")}`;
        return <section key={category} className="video-gallery-section" aria-labelledby={sectionId}>
          <div className="video-gallery-section-heading">
            <h2 id={sectionId}>{category === "Food" ? "Restaurants & Food" : category}</h2>
            <span>{videos.length} {videos.length === 1 ? "film" : "films"}</span>
          </div>
          <div className="video-gallery-grid">{videos.map(video => <VideoCard key={video.id} video={video} />)}</div>
        </section>;
      })}
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

