"use client";

import { StudioSticker } from "./StudioSticker";
import { AmbientVideo } from "./StudioMotion";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Asterisk } from "lucide-react";
import { type MasonryVideoItem } from "@/data/videoProductionGallery";
import { INSTAGRAM_VIDEOS } from "@/data/instagramVideos";
import { allVideos, categories } from "@/data/galleryVideos";
import "./video-gallery.css";

const heroVideos = ["Food", "Clothing", "Real Estate"].map(category => allVideos.find(video => video.category === category)).filter((video): video is MasonryVideoItem => Boolean(video));

function VideoCard({ video }: { video: MasonryVideoItem }) {
  return (
    <article className={`video-gallery-card${video.aspect === "aspect-video" ? " video-gallery-card-wide" : ""}`}>
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
        <div className="gallery-hero-copy">
          <p className="studio-kicker">SPARKLINES STUDIO / THE FILM COLLECTION</p>
          <h1>Video <em>gallery</em></h1>
          <p className="gallery-hero-description">Browse our video gallery by food, fashion, personal branding and real estate. If a film has the pace, framing or feel you want, include it when you brief us.</p>
          <a className="gallery-hero-explore" href="#gallery-food"><span>Explore the films</span><ArrowDownRight size={24} /></a>
        </div>
        <div className="gallery-hero-collage" aria-hidden="true">
          <span className="gallery-hero-note">A FEW FRAMES FROM OUR WORLD</span>
          {heroVideos.map((video, index) => <div key={video.id} className={`gallery-hero-frame gallery-hero-frame-${index + 1}`}>
            <AmbientVideo src={video.src} poster={video.poster} />
            <span>0{index + 1} / {video.category === "Food" ? "Food & feeling" : video.category === "Clothing" ? "Style in motion" : "Spaces & stories"}</span>
          </div>)}
          <div className="gallery-hero-stamp"><Asterisk size={30} strokeWidth={1.5} /><span>MADE TO<br />MAKE YOU FEEL.</span></div>
        </div>
        <div className="gallery-hero-footer"><span>{allVideos.length} FILMS. ENDLESS PERSPECTIVES.</span><span>FOOD / FASHION / PEOPLE / PLACES</span></div>
      </header>
      {categories.map(category => {
        const videos = allVideos.filter(video => video.category === category);
        const sectionId = `gallery-${category.toLowerCase().replaceAll(" ", "-")}`;
        return <section key={category} id={sectionId} className="video-gallery-section" aria-labelledby={`${sectionId}-title`}>
          {category === "Food" && <StudioSticker variant="video" className="sticker-video" />}
          <div className="video-gallery-section-heading">
            <h2 id={`${sectionId}-title`}>{category === "Food" ? "Restaurants & Food" : category}</h2>
            <span>{videos.length} {videos.length === 1 ? "film" : "films"}</span>
          </div>
          <div className="video-gallery-grid">{videos.map(video => <VideoCard key={video.id} video={video} />)}</div>
        </section>;
      })}
      <Link className="video-gallery-contact" href="/contact">Send a film brief with your references <ArrowUpRight size={18} /></Link>
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

