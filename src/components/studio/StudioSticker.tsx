import Image from "next/image";
import "./stickers.css";

const stickers = {
  craft: "v1795004332/image_9.png",
  video: "v1795004335/Generated_Image_November_17_2026_-_6_39PM.png",
  smile: "v1795004333/image_3.png",
  studio: "v1795004332/Generated_Image_November_17_2026_-_6_19PM.png",
  creature: "v1795004332/image_4.png",
};

export function StudioSticker({ variant, className = "" }: { variant: keyof typeof stickers; className?: string }) {
  return <span className={`studio-art-sticker ${className}`} aria-hidden="true"><Image src={`https://res.cloudinary.com/vt5gqi1c/image/upload/e_trim/${stickers[variant]}`} alt="" fill sizes="(max-width: 750px) 80px, 140px" draggable={false} /></span>;
}
