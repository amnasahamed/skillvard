import { whatIsNios } from "@/lib/nios-guide-content";
import { GuideCard, GuideSection } from "./guide-ui";

const iconPaths: Record<string, string> = {
  gov: "M12 2L4 5v6.09c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12.09V5l-8-3z",
  web: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
  location: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
  calendar: "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z",
};

export function WhatIsNios() {
  return (
    <GuideSection
      id="about"
      eyebrow={whatIsNios.titleEn}
      title={whatIsNios.titleMl}
      tone="white"
    >
      <p className="-mt-2 max-w-3xl text-base leading-relaxed text-[var(--brand-black)]/80 sm:-mt-4 sm:text-lg">
        {whatIsNios.bodyMl}
      </p>

      <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
        {whatIsNios.facts.map((fact) => (
          <GuideCard key={fact.labelMl} variant="elevated" className="flex gap-3 sm:gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-lime)]/50 sm:h-12 sm:w-12 sm:rounded-2xl">
              <svg
                className="h-5 w-5 text-[var(--brand-black)]"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d={iconPaths[fact.icon] ?? iconPaths.gov} />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-[var(--brand-black)]/40">
                {fact.labelMl}
              </p>
              <p className="mt-1 font-semibold">{fact.valueMl}</p>
              {"valueEn" in fact && fact.valueEn ? (
                <p className="font-display mt-0.5 text-sm text-[var(--brand-black)]/50">
                  {fact.valueEn}
                </p>
              ) : null}
            </div>
          </GuideCard>
        ))}
      </div>
    </GuideSection>
  );
}
