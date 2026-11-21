import { siteConfig } from "@/config/site";
import { seoBuyingRedirects } from "@/data/services/seo-buying-redirects";
import sanitizeHtml from "sanitize-html";
function editorialHref(href: string) {
  if (!href || href.startsWith("#")) return href;
  try {
    const url = new URL(href, siteConfig.url);
    const legacy: Record<string, string> = {
      "/seo-services": "/seo-agency-kolkata",
      "/seo-services/local-seo-services": "/local-seo-packages-for-small-business",
      "/seo-for-interior-designers": "/interior-design-seo-agency-kolkata",
      "/vaphers.com": "https://www.vaphers.com/",
      "/video-production-agency-kolkata": "/",
      "/video-production-kolkata": "/",
      "/services/video-production": "/",
      "/services/seo": "/seo-agency-kolkata",
      "/services/ppc-advertising": "/paid-ads-agency-kolkata",
      "/services/social-media": "/social-media-marketing-agency-kolkata",
      "/services/branding": "/branding-agency-kolkata",
      "/services/web-design": "/web-design-agency-kolkata",
    };
    if (
      [
        "sparklines.studio",
        "www.sparklines.studio",
        "sparklinesstudio.com",
        "www.sparklinesstudio.com",
      ].includes(url.hostname)
    )
      return (
        (legacy[url.pathname] || (Object.hasOwn(seoBuyingRedirects, url.pathname.slice(1)) ? "/" + seoBuyingRedirects[url.pathname.slice(1)] : url.pathname)) +
        url.search +
        (url.hash === "#video-masonry" ? "#selected-films" : url.hash)
      );
    if (["vaphers.com", "www.vaphers.com"].includes(url.hostname)) {
      const relevant: Record<string, string> = {
        "/seo-for-interior-designers": "/interior-design-seo-agency-kolkata",
        "/seo-services/local-seo-services": "/local-seo-packages-for-small-business",
      };
      if (relevant[url.pathname]) return relevant[url.pathname];
    }
  } catch {
    /* sanitizer handles unsupported URLs */
  }
  return href;
}
export function cleanHtml(html: string) {
  return sanitizeHtml(html, {
    allowedTags: [
      "div",
      "span",
      "p",
      "br",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "strong",
      "b",
      "em",
      "i",
      "u",
      "s",
      "blockquote",
      "pre",
      "code",
      "ul",
      "ol",
      "li",
      "hr",
      "a",
      "img",
      "figure",
      "figcaption",
      "table",
      "colgroup",
      "col",
      "thead",
      "tbody",
      "tr",
      "th",
      "td",
      "iframe",
    ],
    allowedAttributes: {
      "*": ["class", "style"],
      div: [
        "data-type",
        "data-src",
        "data-url",
        "data-title",
        "data-desc",
        "data-image",
        "data-sitename",
        "data-favicon",
        "data-images",
        "data-columns",
      ],
      a: ["href", "title", "target", "rel"],
      img: ["src", "alt", "title", "width", "height", "loading"],
      iframe: ["src", "title", "allow", "allowfullscreen", "loading"],
      td: ["colspan", "rowspan", "colwidth"],
      th: ["colspan", "rowspan", "colwidth"],
      col: ["span", "width"],
    },
    allowedStyles: {
      "*": {
        "text-align": [/^(left|center|right|justify)$/],
        float: [/^(left|right|none)$/],
        width: [/^\d+(px|%)$/, /^auto$/],
        height: [/^\d+(px|%)$/, /^auto$/],
        "background-color": [/^#[0-9a-f]{3,8}$/i],
        "background-size": [/^\d+px \d+px$/],
      },
    },
    allowedIframeHostnames: ["www.youtube-nocookie.com"],
    allowedSchemes: ["https", "http", "mailto", "tel"],
    allowedSchemesByTag: { img: ["https"], iframe: ["https"] },
    allowProtocolRelative: false,
    transformTags: {
      a: (tag, attrs) => ({
        tagName: tag,
        attribs: {
          ...attrs,
          href: editorialHref(attrs.href || ""),
          rel: "noopener noreferrer",
        },
      }),
      img: (tag, attrs) => ({
        tagName: tag,
        attribs: { ...attrs, loading: "lazy" },
      }),
      iframe: (tag, attrs) => ({
        tagName: tag,
        attribs: {
          ...attrs,
          title: attrs.title || "YouTube video player",
          loading: "lazy",
        },
      }),
    },
  });
}
export function textContent(html: string) {
  return sanitizeHtml(html, { allowedTags: [], allowedAttributes: {} })
    .replace(/&nbsp;/g, " ")
    .trim();
}
export function articleContent(html: string) {
  const toc: { id: string; text: string; level: number }[] = [];
  const content = cleanHtml(html).replace(
    /<(h[234])([^>]*)>([\s\S]*?)<\/\1>/gi,
    (_match, tag: string, attrs: string, inner: string) => {
      const text = textContent(inner);
      const id = "section-" + (toc.length + 1);
      toc.push({ id, text, level: Number(tag[1]) });
      return "<" + tag + attrs + ' id="' + id + '">' + inner + "</" + tag + ">";
    },
  );
  return {
    html: content,
    toc,
    readingMinutes: Math.max(
      1,
      Math.ceil(textContent(content).split(/\s+/).length / 220),
    ),
  };
}
