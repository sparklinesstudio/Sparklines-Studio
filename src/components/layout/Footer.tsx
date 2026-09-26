import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200/80 bg-zinc-50/50 dark:border-zinc-800/80 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Brand Info */}
          <div className="space-y-4 lg:col-span-2">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {siteConfig.description}
            </p>
            {/* Availability status */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              Accepting select client partnerships
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              {siteConfig.navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-zinc-950 dark:hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Agency Focus */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              Capabilities
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>Digital Strategy & Systems</li>
              <li>Bespoke Web Applications</li>
              <li>Brand Identity & UI/UX</li>
              <li>High-Performance Next.js</li>
              <li>Interactive 3D & Motion</li>
            </ul>
          </div>

          {/* Social / Connect */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              Connect
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              {siteConfig.socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-zinc-950 dark:hover:text-white"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-zinc-200/60 pt-8 text-xs text-zinc-500 sm:flex-row dark:border-zinc-800/80 dark:text-zinc-400">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p className="mt-4 sm:mt-0">
            Crafted for speed, aesthetics, and scale.
          </p>
        </div>
      </div>
    </footer>
  );
}
