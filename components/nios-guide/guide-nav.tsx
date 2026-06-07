"use client";

import { GUIDE_SECTION_IDS, useGuideScroll } from "./guide-scroll-provider";

const links: { id: (typeof GUIDE_SECTION_IDS)[number]; label: string }[] = [
  { id: "about", label: "അടിസ്ഥാനം" },
  { id: "journey", label: "പാത" },
  { id: "documents", label: "രേഖകൾ" },
  { id: "streams", label: "സ്ട്രീമുകൾ" },
  { id: "pass-toc", label: "TOC" },
  { id: "subjects", label: "വിഷയങ്ങൾ" },
  { id: "exams", label: "പരീക്ഷ" },
  { id: "pcp", label: "PCP" },
  { id: "faq", label: "FAQ" },
];

export function GuideNav() {
  const { activeId, progress, scrollToSection } = useGuideScroll();

  return (
    <nav
      aria-label="ഗൈഡ് വിഭാഗങ്ങൾ"
      className="sticky top-16 z-30 border-b border-black/5 bg-white/95 backdrop-blur-md"
    >
      <div
        className="h-0.5 bg-black/[0.06]"
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="ഗൈഡ് വായനാ പുരോഗതി"
      >
        <div
          className="h-full bg-[var(--brand-lime)] transition-[width] duration-200 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="guide-nav-fade relative">
        <span
          className="pointer-events-none absolute right-2 top-1/2 z-10 -translate-y-1/2 text-[var(--brand-black)]/25 sm:right-4"
          aria-hidden
        >
          ›
        </span>
        <div className="guide-nav-scroll mx-auto flex max-w-6xl gap-1 overflow-x-auto px-3 py-2 sm:gap-1.5 sm:px-6 sm:py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {links.map((link) => {
            const isActive = activeId === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className={`relative flex min-h-11 shrink-0 items-center rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ease-out active:scale-[0.98] ${
                  isActive
                    ? "bg-[var(--brand-black)] text-[var(--brand-lime)] shadow-sm"
                    : "text-[var(--brand-black)]/65 hover:bg-[var(--brand-lime)]/25 hover:text-[var(--brand-black)]"
                }`}
                aria-current={isActive ? "true" : undefined}
              >
                {isActive ? (
                  <span
                    className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[var(--brand-lime)] sm:hidden"
                    aria-hidden
                  />
                ) : null}
                {link.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
