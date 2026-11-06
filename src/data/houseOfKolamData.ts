export interface KolamSlide {
  id: number;
  title: string;
  category: string;
  url: string;
  isAnimated?: boolean;
  aspectRatio?: string;
  description?: string;
}

export const HOUSE_OF_KOLAM_IMAGES: string[] = [
  "https://res.cloudinary.com/vt5gqi1c/image/upload/v1793186166/31b46d250283873.6a1bd914346e2_converted.png",
  "https://res.cloudinary.com/vt5gqi1c/image/upload/v1793186163/7edbe2250283873.6a1bd914363a1_converted-Recov.png",
  "https://res.cloudinary.com/vt5gqi1c/image/upload/v1793186163/7edbe2250283873.6a1bd914363a1_converted-Recovered.png",
  "https://res.cloudinary.com/vt5gqi1c/image/upload/v1793186185/a01649250283873.6a1bd9143aca8.gif",
  "https://res.cloudinary.com/vt5gqi1c/image/upload/v1793186182/e4a7c9250283873.6a1bd9143a3ae_converted.png",
  "https://res.cloudinary.com/vt5gqi1c/image/upload/v1793186164/7edbe2250283873.6a1bd914363a1_converted.png",
  "https://res.cloudinary.com/vt5gqi1c/image/upload/v1793186181/ca9a9b250283873.6a1bd91438d4c_converted.png",
  "https://res.cloudinary.com/vt5gqi1c/image/upload/v1793186182/d1362f250283873.6a1bd914387c6_converted.png",
  "https://res.cloudinary.com/vt5gqi1c/image/upload/v1793186171/77d90e250283873.6a1bd91435ab5_converted_1.png",
  "https://res.cloudinary.com/vt5gqi1c/image/upload/v1793186179/b50d95250283873.6a1bd91435f5f_converted.png",
  "https://res.cloudinary.com/vt5gqi1c/image/upload/v1793186183/b2fdc6250283873.6a1bd914367f5.gif",
  "https://res.cloudinary.com/vt5gqi1c/image/upload/v1793186165/1bc22f250283873.6a1bd9143796f_converted.png",
  "https://res.cloudinary.com/vt5gqi1c/image/upload/v1793186165/04ab2b250283873.6a1bd9143b0dc_converted.png",
  "https://res.cloudinary.com/vt5gqi1c/image/upload/v1793186182/d8fe1d250283873.6a1bd9143a865_converted.png",
  "https://res.cloudinary.com/vt5gqi1c/image/upload/v1793186181/d84e96250283873.6a1bd91437511_converted.png",
  "https://res.cloudinary.com/vt5gqi1c/image/upload/v1793186180/be8225250283873.6a1bd91437df1_converted.png",
  "https://res.cloudinary.com/vt5gqi1c/image/upload/v1793186179/727cf5250283873.6a1bd91439696_converted.png",
  "https://res.cloudinary.com/vt5gqi1c/image/upload/v1793186181/d0f760250283873.6a1bd91439b33_converted.png",
  "https://res.cloudinary.com/vt5gqi1c/image/upload/v1793186181/38962b250283873.6a1bd91436c5b_converted.png",
  "https://res.cloudinary.com/vt5gqi1c/image/upload/v1793186165/9a5c21250283873.6a1bd9143708b_converted.png",
  "https://res.cloudinary.com/vt5gqi1c/image/upload/v1793186181/883cab250283873.6a1bd914382c9_converted.png",
  "https://res.cloudinary.com/vt5gqi1c/image/upload/v1793186182/f753b2250283873.6a1bd914350a6_converted.png",
  "https://res.cloudinary.com/vt5gqi1c/image/upload/v1793186165/1ecbe8250283873.6a1bd91439232_converted.png",
];

export const HOUSE_OF_KOLAM_SLIDES: KolamSlide[] = [
  { id: 1, title: "Brand Cover & Hero Lockup", category: "Brand Identity", url: HOUSE_OF_KOLAM_IMAGES[0], description: "The House of Kolam identity introduced through South Indian food and hospitality." },
  { id: 2, title: "Brand Presentation Index", category: "Brand Overview", url: HOUSE_OF_KOLAM_IMAGES[1], description: "An overview of the identity presentation, from logo and photography to typography and collateral." },
  { id: 3, title: "Multilingual Brand Wordmarks", category: "Wordmark System", url: HOUSE_OF_KOLAM_IMAGES[2], description: "House of Kolam wordmarks presented across three scripts." },
  { id: 4, title: "Animated Brand Study", category: "Motion Identity", url: HOUSE_OF_KOLAM_IMAGES[3], isAnimated: true, description: "An animated study from the House of Kolam identity presentation." },
  { id: 5, title: "The Beginning: Brand Story", category: "Brand Narrative", url: HOUSE_OF_KOLAM_IMAGES[4], description: "The brand story connects filter coffee, handmade recipes and everyday hospitality." },
  { id: 6, title: "Kolam: An Invitation", category: "Cultural Inspiration", url: HOUSE_OF_KOLAM_IMAGES[5], description: "A photographic introduction to the ritual and meaning behind Kolam." },
  { id: 7, title: "A Gesture of Warmth", category: "Brand Philosophy", url: HOUSE_OF_KOLAM_IMAGES[6], description: "The daily ritual of Kolam as a visual expression of patience and welcome." },
  { id: 8, title: "Logo Concept & Rationale", category: "Logo Design", url: HOUSE_OF_KOLAM_IMAGES[7], description: "The primary mark and the cultural thinking behind its form." },
  { id: 9, title: "Kolam Mark Construction", category: "Identity Blueprint", url: HOUSE_OF_KOLAM_IMAGES[8], description: "The continuous-line geometry and symmetry of the House of Kolam symbol." },
  { id: 10, title: "Primary Logo Lockups", category: "Wordmark System", url: HOUSE_OF_KOLAM_IMAGES[9], description: "The emblem and multilingual wordmarks presented in the core brand palette." },
  { id: 11, title: "Animated Identity Study", category: "Motion Identity", url: HOUSE_OF_KOLAM_IMAGES[10], isAnimated: true, description: "A second animated study exploring the brand identity in motion." },
  { id: 12, title: "Pattern in the Everyday", category: "Brand Patterns", url: HOUSE_OF_KOLAM_IMAGES[11], description: "A Kolam-inspired pattern framed by banana leaves and the open sky." },
  { id: 13, title: "Photography Moodboard", category: "Photography Direction", url: HOUSE_OF_KOLAM_IMAGES[12], description: "Food, coffee, ritual and tactile details establish the photographic world of the brand." },
  { id: 14, title: "Exterior Signage", category: "Spatial Identity", url: HOUSE_OF_KOLAM_IMAGES[13], description: "The House of Kolam name applied to a warm, textured architectural setting." },
  { id: 15, title: "Visual Direction Moodboard", category: "Spatial Direction", url: HOUSE_OF_KOLAM_IMAGES[14], description: "Architecture, materials and warm light shape the visual direction for the brand." },
  { id: 16, title: "Social & Editorial Posters", category: "Digital Applications", url: HOUSE_OF_KOLAM_IMAGES[15], description: "A series of brand-led posters connects food photography, colour and editorial typography." },
  { id: 17, title: "Brand Typography System", category: "Typography", url: HOUSE_OF_KOLAM_IMAGES[16], description: "Satoshi and Vintage Rhyme define the core typographic pairing." },
  { id: 18, title: "Product Jar Packaging", category: "Packaging", url: HOUSE_OF_KOLAM_IMAGES[17], description: "Branded jars and colour-coded labels applied across a product range." },
  { id: 19, title: "Lifestyle & Retail Imagery", category: "Photography Direction", url: HOUSE_OF_KOLAM_IMAGES[18], description: "Everyday materials and produce extend the visual world of the brand." },
  { id: 20, title: "Delivery & Unboxing", category: "Packaging", url: HOUSE_OF_KOLAM_IMAGES[19], description: "Product handling, delivery boxes and an unboxing sequence presented through photography." },
  { id: 21, title: "Filter Coffee Packaging", category: "Packaging", url: HOUSE_OF_KOLAM_IMAGES[20], description: "Filter coffee packaging featuring the brand palette, typography and pattern details." },
  { id: 22, title: "Menu & Dining Collateral", category: "Print Applications", url: HOUSE_OF_KOLAM_IMAGES[21], description: "Menu covers and printed dining information carry the identity into the restaurant experience." },
  { id: 23, title: "Embossed Identity Detail", category: "Identity Application", url: HOUSE_OF_KOLAM_IMAGES[22], description: "The Kolam symbol brought into a tactile, embossed brand application." },
];
