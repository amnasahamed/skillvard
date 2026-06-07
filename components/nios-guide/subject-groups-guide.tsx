import { subjectGroups } from "@/lib/nios-guide-content";
import { GuideCallout, GuideCard, GuideSection } from "./guide-ui";

export function SubjectGroupsGuide() {
  return (
    <GuideSection
      id="subjects"
      eyebrow="Subject groups"
      title={subjectGroups.titleMl}
      subtitle={subjectGroups.subtitleEn}
      tone="muted"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {subjectGroups.groups.map((group) => (
          <GuideCard key={group.code} variant="default" className="group hover:ring-[var(--brand-lime)]/30">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-black)]/40">
              Group {group.code}
            </p>
            <h3 className="mt-2 text-lg font-bold">{group.nameMl}</h3>
            <p className="font-display text-sm text-[var(--brand-black)]/50">{group.nameEn}</p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--brand-black)]/75">
              {group.examples}
            </p>
            <p className="mt-3 rounded-xl bg-zinc-100 px-3 py-2 text-sm font-medium text-[var(--brand-black)]/70">
              {group.noteMl}
            </p>
          </GuideCard>
        ))}
      </div>

      <div className="mt-10 sm:mt-14">
        <h3 className="text-lg font-bold tracking-tight sm:text-xl">കരിയർ ലക്ഷ്യം അനുസരിച്ച്</h3>
        <p className="font-display mt-2 text-sm text-[var(--brand-black)]/50">
          PCM, PCB, NEET, JEE — എന്ത് തിരഞ്ഞെടുക്കണം
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subjectGroups.careerPaths.map((path) => (
            <article
              key={path.goalMl}
              className="flex flex-col overflow-hidden rounded-2xl bg-[var(--brand-black)] p-4 text-white shadow-xl shadow-black/20 sm:rounded-3xl sm:p-6 sm:transition sm:hover:-translate-y-1"
            >
              <span className="font-display w-fit rounded-full bg-[var(--brand-lime)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--brand-black)]">
                {path.tag}
              </span>
              <h4 className="mt-4 text-lg font-bold">{path.goalMl}</h4>
              <p className="mt-2 text-sm font-semibold text-[var(--brand-lime)]">
                {path.subjectsMl}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-white/78">
                {path.detailMl}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <GuideCallout variant="info">{subjectGroups.clashNoteMl}</GuideCallout>
      </div>
    </GuideSection>
  );
}
