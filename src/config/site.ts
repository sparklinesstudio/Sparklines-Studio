export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  email: string;
  navItems: { label: string; href: string }[];
  socialLinks: { label: string; href: string }[];
}

export const siteConfig: SiteConfig = {
  name: "Sparklines Studio",
  tagline: "Good stories deserve a bigger frame.",
  description:
    "Sparklines Studio is a video production agency in Kolkata creating films, motion graphics, brand stories and digital experiences.",
  url: "https://sparklines.studio",
  email: "sparklinestudio.agency@gmail.com",
  navItems: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/#about" },
    { label: "Process", href: "/#process" },
    { label: "Contact", href: "/contact" },
  ],
  socialLinks: [
    { label: "Twitter / X", href: "https://twitter.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
};
