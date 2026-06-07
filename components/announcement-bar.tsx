"use client";

import Link from "next/link";
import { siteAnnouncement } from "@/lib/site-content";

type AnnouncementBarProps = {
  variant?: "hub" | "nios";
};

export function AnnouncementBar({ variant = "hub" }: AnnouncementBarProps) {
  const text = variant === "hub" ? siteAnnouncement.textEn : siteAnnouncement.textMl;
  
  return (
    <div className="relative z-50 bg-[var(--brand-lime)] text-[var(--brand-black)] border-b border-black/5">
      <Link
        href="/#milestone"
        className="group flex min-h-9 items-center justify-center px-4 py-2 text-center text-xs font-semibold tracking-wide sm:text-sm transition-all hover:bg-[var(--brand-black)] hover:text-white"
      >
        <div className="flex items-center justify-center gap-2">
          {/* Pulsing indicator */}
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75 group-hover:bg-[var(--brand-lime)]"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-black group-hover:bg-[var(--brand-lime)]"></span>
          </span>
          
          <span className="line-clamp-1 group-hover:underline decoration-2 underline-offset-2">
            {text}
          </span>
          
          <svg
            className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Link>
    </div>
  );
}
