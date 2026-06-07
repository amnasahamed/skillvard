import { examTypes, subjectRules } from "@/lib/nios-guide-content";
import { GuideCard, GuideSection } from "./guide-ui";

export function ExamsGuide() {
  return (
    <GuideSection
      id="exams"
      eyebrow="Public vs ODE"
      title={examTypes.titleMl}
      subtitle={examTypes.subtitleEn}
      tone="white"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {examTypes.types.map((type, index) => (
          <GuideCard
            key={type.nameMl}
            variant={index === 0 ? "lime" : "elevated"}
            className="h-full"
          >
            <h3 className="text-xl font-bold">{type.nameMl}</h3>
            <p className="font-display mt-1 text-sm text-[var(--brand-black)]/50">
              {type.nameEn}
            </p>
            <ul className="mt-6 space-y-3">
              {type.pointsMl.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-relaxed text-[var(--brand-black)]/80"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-black)]" />
                  {point}
                </li>
              ))}
            </ul>
          </GuideCard>
        ))}
      </div>

      <div className="mt-16 border-t border-black/5 pt-14">
        <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
          {subjectRules.titleMl}
        </h3>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {subjectRules.rules.map((rule) => (
            <GuideCard key={rule.titleMl} variant="default">
              <h4 className="font-bold">{rule.titleMl}</h4>
              <p className="mt-2 text-sm leading-relaxed text-[var(--brand-black)]/72">
                {rule.bodyMl}
              </p>
            </GuideCard>
          ))}
        </div>
        <p className="mt-8 text-center text-sm font-medium text-[var(--brand-black)]/60">
          {subjectRules.popularMl}
        </p>
      </div>
    </GuideSection>
  );
}
