export function blogThumbnail(post: { slug: string; title: string; featuredImage?: string | null; imageAlt?: string | null }) {
  const image = post.featuredImage?.trim();
  return image
    ? { src: image, alt: post.imageAlt || post.title, generated: false }
    : { src: `/blog-thumbnail/${encodeURIComponent(post.slug)}`, alt: "", generated: true };
}
