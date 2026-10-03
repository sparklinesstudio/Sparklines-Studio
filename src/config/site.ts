export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  navItems: { label: string; href: string }[];
  socialLinks: { label: string; href: string }[];
}

export const siteConfig: SiteConfig = {
  name: "Sparklines Studio",
  tagline: "Designing and engineering next-generation digital experiences.",
  description:
    "Sparklines Studio is a creative digital agency specializing in bespoke web applications, interactive experiences, brand identities, and high-performance engineering.",
  url: "https://sparklines.studio",
  navItems: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
  socialLinks: [
    { label: "Twitter / X", href: "https://twitter.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
};
