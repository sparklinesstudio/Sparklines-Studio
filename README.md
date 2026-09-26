# Sparklines Studio ⚡

A high-performance digital product and design agency website built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 🚀 Getting Started

Ensure you have [Node.js](https://nodejs.org) (v20+) and [pnpm](https://pnpm.io) installed.

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Run the Development Server
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
pnpm build
pnpm start
```

---

## 📁 Project & Component Structure

All homepage sections have been modularized under `src/components/Home Page Components/`:

```
src/
├── app/
│   ├── globals.css                       # Modern light theme with editorial serif, orange accents & glassmorphism
│   ├── layout.tsx                        # Root layout with Geist & Playfair Display fonts, SEO metadata
│   └── page.tsx                          # Assembles all Home Page Components
├── components/
│   ├── Home Page Components/             # Modular section components matching design mockup
│   │   ├── HeaderNavigation.tsx          # Sticky navigation with brand logo, links, and CTA pill
│   │   ├── HeroSection.tsx               # Headline, editorial styling, orange CTA, and floating device showcase
│   │   ├── ClientLogos.tsx               # Trusted partner logos (FeedHive, MONSTER, Spotify, etc.)
│   │   ├── AboutSection.tsx              # About statement, 2-column narrative, and 4 key metric counters
│   │   ├── OrangeBanner.tsx              # Luminous orange 12-year anniversary experience banner
│   │   ├── FeatureTabsSection.tsx        # Interactive on-demand capabilities & live animated sparklines chart
│   │   ├── ExpertiseBento.tsx            # 6-card bento grid with senior team & architecture guarantees
│   │   ├── TestimonialsSection.tsx       # 3-part testimonial layout with founder portrait & 95% ROI card
│   │   ├── CtaFloatingSection.tsx        # Pre-CTA with floating creative badges & discovery call button
│   │   ├── ContactSection.tsx            # Direct contact details & interactive form
│   │   ├── BrandFooterBanner.tsx         # Scenic wildflower meadow banner with giant typography & footer links
│   │   └── index.ts                      # Barrel export file
│   └── ui/                               # Reusable atomic UI components (Button, Logo, etc.)
├── config/
│   └── site.ts                           # Brand details, site navigation, and social links
└── lib/
    └── utils.ts                          # cn helper (clsx + tailwind-merge)
```

---

## 🎨 Design Features

- **Typography**: Combined sans-serif (Geist) for clean UI and editorial serif (Playfair Display) for italic accents.
- **Color Palette**: Minimalist crisp background with vibrant digital orange (`#f95721`) accents and warm gradients.
- **Animations**: Silky smooth enter animations, staggered reveals, floating cards (`framer-motion`), and interactive tabs.
- **Performance**: 100/100 Core Web Vitals ready, Next.js static prerendering, and Turbopack support.
