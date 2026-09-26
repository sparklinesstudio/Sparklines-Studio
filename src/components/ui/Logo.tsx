import Link from "next/link";
import { siteConfig } from "@/config/site";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 font-bold tracking-tight text-foreground transition-opacity hover:opacity-90 ${className}`}
    >
      <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1.5 shadow-sm shadow-indigo-500/20">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-full w-full text-white"
        >
          <polyline points="3 17 9 11 13 15 21 7" />
          <polyline points="17 7 21 7 21 11" />
        </svg>
      </div>
      {showText && (
        <span className="text-base font-semibold tracking-tight text-foreground">
          {siteConfig.name}
        </span>
      )}
    </Link>
  );
}
