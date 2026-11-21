import Image from "next/image";
import Link from "next/link";
import { founders } from "@/data/founders";
import "./founder-brief.css";

export function FounderPortraits() {
  return (
    <div className="founder-brief-portraits">
      {founders.map(founder => (
        <figure key={founder.name}>
          <div><Image src={founder.image} alt={`${founder.name}, co-founder of Sparklines Studio`} fill sizes="104px" /></div>
          <figcaption>{founder.name}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export function FounderBrief({ title, note, href, label }: { title: string; note: string; href: string; label: string }) {
  return (
    <section className="founder-brief">
      <div className="svc-wrap founder-brief-layout">
        <FounderPortraits />
        <div>
          <h2>{title}</h2>
          <p>{note}</p>
          <Link href={href} className="svc-button">{label}</Link>
        </div>
      </div>
    </section>
  );
}
