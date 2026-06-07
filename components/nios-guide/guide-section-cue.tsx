"use client";

import { useGuideSectionActive } from "./guide-scroll-provider";

export function GuideSectionCue({ sectionId }: { sectionId: string }) {
  const isActive = useGuideSectionActive(sectionId);

  return (
    <div
      className={`pointer-events-none absolute inset-y-0 left-0 w-[3px] transition-all duration-500 ease-out ${
        isActive
          ? "bg-[var(--brand-lime)] opacity-100"
          : "bg-[var(--brand-lime)] opacity-0"
      }`}
      aria-hidden
    />
  );
}
