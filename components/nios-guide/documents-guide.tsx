import { documentsSection } from "@/lib/nios-guide-content";
import { GuideCallout, GuideSection } from "./guide-ui";

export function DocumentsGuide() {
  return (
    <GuideSection
      id="documents"
      eyebrow="Before you apply"
      title={documentsSection.titleMl}
      subtitle={documentsSection.subtitleEn}
      tone="white"
    >
      <div className="space-y-8 sm:space-y-10">
        {documentsSection.required.map((group, groupIndex) => (
          <article key={group.titleMl}>
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-black)] text-xs font-bold text-[var(--brand-lime)]">
                {groupIndex + 1}
              </span>
              <h3 className="text-base font-bold leading-snug sm:text-lg">{group.titleMl}</h3>
            </div>
            <ul className="mt-4 grid gap-2.5 sm:mt-5 sm:grid-cols-2 sm:gap-3">
              {group.items.map((item) => (
                <li
                  key={item.ml}
                  className={`rounded-xl border p-3.5 transition sm:rounded-2xl sm:p-4 sm:hover:-translate-y-0.5 sm:hover:shadow-md ${
                    "important" in item && item.important
                      ? "border-amber-300/80 bg-gradient-to-br from-amber-50 to-amber-100/50 shadow-sm"
                      : "border-black/[0.06] bg-zinc-50 hover:border-[var(--brand-lime)]/40"
                  }`}
                >
                  <p className="font-medium leading-snug">{item.ml}</p>
                  <p className="font-display mt-1.5 text-xs text-[var(--brand-black)]/50">
                    {item.en}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-10 space-y-2">
        {documentsSection.tips.map((tip) => (
          <GuideCallout key={tip} variant="tip">
            {tip}
          </GuideCallout>
        ))}
      </div>
    </GuideSection>
  );
}
