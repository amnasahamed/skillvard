import { passMarksToc } from "@/lib/nios-guide-content";
import { GuideCallout, GuideCard, GuideSection } from "./guide-ui";

export function PassMarksTocGuide() {
  return (
    <GuideSection
      id="pass-toc"
      eyebrow="Rules that matter"
      title={passMarksToc.titleMl}
      subtitle={passMarksToc.subtitleEn}
      tone="white"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-bold">
            <span className="h-2 w-2 rounded-full bg-[var(--brand-lime)]" />
            {passMarksToc.passCriteria.titleMl}
          </h3>
          <div className="mt-5 space-y-3">
            {passMarksToc.passCriteria.items.map((item) => (
              <GuideCard key={item.titleMl} variant="default">
                <h4 className="font-semibold">{item.titleMl}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[var(--brand-black)]/72">
                  {item.bodyMl}
                </p>
              </GuideCard>
            ))}
          </div>
        </div>

        <div>
          <h3 className="flex items-center gap-2 text-lg font-bold">
            <span className="h-2 w-2 rounded-full bg-[var(--brand-black)]" />
            {passMarksToc.tocRules.titleMl}
          </h3>
          <GuideCard variant="elevated" className="mt-5">
            <ul className="space-y-3">
              {passMarksToc.tocRules.items.map((rule) => (
                <li
                  key={rule}
                  className="flex gap-3 border-b border-black/5 pb-3 text-sm leading-relaxed text-[var(--brand-black)]/78 last:border-0 last:pb-0"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--brand-lime)]" />
                  {rule}
                </li>
              ))}
            </ul>
          </GuideCard>
        </div>
      </div>

      <div className="mt-8">
        <GuideCallout variant="warn">
          <p className="text-base font-bold">{passMarksToc.tocRules.failMarksheet.titleMl}</p>
          <p className="mt-2">{passMarksToc.tocRules.failMarksheet.bodyMl}</p>
        </GuideCallout>
      </div>
    </GuideSection>
  );
}
