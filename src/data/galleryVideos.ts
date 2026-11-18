import { CLOTHING_VIDEOS, REAL_ESTATE_VIDEOS, RESTAURANT_RETAIL_VIDEOS, type MasonryVideoItem } from "./videoProductionGallery";
import { INSTAGRAM_VIDEOS } from "./instagramVideos";
import importedVideos from "./importedGalleryVideos.json";

export const categories = ["Food", "Clothing", "Personal Branding", "Real Estate"] as const;
type Category = (typeof categories)[number];
const categorize = (videos: MasonryVideoItem[], category: Category) => videos.map(video => ({ ...video, category }));
const removedFoodIds = new Set(["dine-2", "dine-3", "dine-4", "dine-6"]);
const removedFoodSources = new Set(RESTAURANT_RETAIL_VIDEOS.filter(video => removedFoodIds.has(video.id)).map(video => video.src));
// These source files also occur under other titles in the legacy collection.
const foodVideos = RESTAURANT_RETAIL_VIDEOS.filter(video => !removedFoodSources.has(video.src));
const removedClothingIds = new Set(["wear-1", "wear-2", "wear-3", "wear-4"]);
const removedClothingSources = new Set(CLOTHING_VIDEOS.filter(video => removedClothingIds.has(video.id)).map(video => video.src));
const clothingVideos = CLOTHING_VIDEOS.filter(video => !removedClothingSources.has(video.src));
const removedPropertyIds = new Set(["prop-1", "prop-2"]);
const removedPropertySources = new Set(REAL_ESTATE_VIDEOS.filter(video => removedPropertyIds.has(video.id)).map(video => video.src));
const propertyVideos = REAL_ESTATE_VIDEOS.filter(video => !removedPropertySources.has(video.src));
const existingVideos = [...categorize(foodVideos, "Food"), ...categorize(clothingVideos, "Clothing"), ...categorize(propertyVideos, "Real Estate")];
const seen = new Set<string>();
export const allVideos = [...categorize(INSTAGRAM_VIDEOS, "Food"), ...importedVideos, ...existingVideos].filter(video => { if (!video.src) return false; const key = video.src.split(/\/v\d+\//).pop() || video.src; if (seen.has(key)) return false; seen.add(key); return true; });

// A compact selection from every gallery category for homepage previews.
export const homeGalleryFilms = categories.flatMap(category => allVideos.filter(video => video.category === category).slice(0, 2));
