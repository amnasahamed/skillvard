import { pcpPractical } from "@/lib/nios-guide-content";
import { GuideCard, GuideSection } from "./guide-ui";

export function PcpPracticalGuide() {
  return (
    <GuideSection
      id="pcp"
      eyebrow="Classes & labs"
      title={pcpPractical.titleMl}
      subtitle={pcpPractical.subtitleEn}
      tone="muted"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <GuideCard variant="elevated">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--brand-lime)]/40">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold">{pcpPractical.pcp.titleMl}</h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--brand-black)]/72">
            {pcpPractical.pcp.bodyMl}
          </p>
          <ul className="mt-6 space-y-3">
            {pcpPractical.pcp.points.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-sm leading-relaxed text-[var(--brand-black)]/80"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-lime)]" />
                {point}
              </li>
            ))}
          </ul>
        </GuideCard>

        <GuideCard variant="elevated">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--brand-black)] text-[var(--brand-lime)]">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M7 2v2h1v18c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V4h1V2H7zm4 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold">{pcpPractical.practical.titleMl}</h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--brand-black)]/72">
            {pcpPractical.practical.bodyMl}
          </p>
          <p className="mt-4 rounded-xl bg-[var(--brand-lime)]/25 px-4 py-2.5 text-xs font-semibold text-[var(--brand-black)]/85">
            {pcpPractical.practical.subjectsMl}
          </p>
          <ul className="mt-6 space-y-3">
            {pcpPractical.practical.points.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-sm leading-relaxed text-[var(--brand-black)]/80"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-lime)]" />
                {point}
              </li>
            ))}
          </ul>
        </GuideCard>
      </div>
    </GuideSection>
  );
}
