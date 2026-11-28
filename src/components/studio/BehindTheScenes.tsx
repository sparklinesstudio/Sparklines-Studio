"use client";

import { ArrowUpRight, Pause, Play } from "lucide-react";
import { AmbientVideo, useStudioMotion } from "./StudioMotion";
import "./behind-the-scenes.css";

const clips = [
  ["v1795856277/IMG_5642", "A little behind the lens"],
  ["v1795856280/FullSizeRender", "The making of a moment"],
  ["v1795856286/IMG_5767", "Another perspective"],
  ["v1795856288/IMG_5341", "On set with the studio"],
  ["v1795856289/IMG_5695", "Finding the right frame"],
  ["v1795856294/IMG_5657", "Between the takes"],
  ["v1795856295/IMG_5698", "The details in motion"],
  ["v1795856302/IMG_5760", "A glimpse of the process"],
];

export function BehindTheScenes() {
  const { enabled, toggle } = useStudioMotion();

  return <section id="behind-the-scenes" className="bts-section experience-pad" aria-labelledby="bts-heading">
    <div className="bts-collage">
      <div className="bts-intro">
        <span className="bts-eyebrow">The studio, unfiltered / BTS</span>
        <h2 id="bts-heading">Behind the scenes.<br /><em>Inside the spark.</em></h2>
        <p>The people, the process, the in-between. A little look at how we bring a story to life.</p>
        <button type="button" className="bts-motion-toggle" onClick={toggle} aria-pressed={enabled}>
          {enabled ? <Pause size={14} /> : <Play size={14} />}
          {enabled ? "Pause the moments" : "Play the moments"}
        </button>
      </div>
      <ul className="bts-notes" aria-label="Behind our work">
        {["Real people.", "Fresh perspectives.", "Happy accidents.", "A lot of heart."].map(note => <li key={note}><ArrowUpRight size={17} aria-hidden="true" />{note}</li>)}
      </ul>
      {clips.map(([asset, title], index) => <figure className={`bts-clip bts-clip-${index + 1}`} key={asset}>
        <AmbientVideo
          src={`https://res.cloudinary.com/vt5gqi1c/video/upload/f_mp4,vc_auto,q_auto,w_640/${asset}.mov`}
          poster={`https://res.cloudinary.com/vt5gqi1c/video/upload/so_0,f_jpg,q_auto,w_640/${asset}.jpg`}
        />
        <figcaption><span>{String(index + 1).padStart(2, "0")}</span>{title}</figcaption>
      </figure>)}
    </div>
    <div className="bts-signoff"><span>Made of moments. Made together.</span><span>Kolkata & everywhere <ArrowUpRight size={16} aria-hidden="true" /></span></div>
  </section>;
}
