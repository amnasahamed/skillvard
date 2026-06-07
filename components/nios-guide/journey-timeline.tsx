import { annualCycle, niosJourney } from "@/lib/nios-guide-content";
import { GuideCallout, GuideSection } from "./guide-ui";

export function JourneyTimeline() {
  return (
    <GuideSection
      id="journey"
      eyebrow="Step by step"
      title={niosJourney.titleMl}
      subtitle={niosJourney.subtitleEn}
      tone="muted"
    >
      <ol className="relative space-y-0">
        {niosJourney.steps.map((step, index) => (
          <li key={step.step} className="relative flex gap-3 pb-6 last:pb-0 sm:gap-5 sm:pb-8 lg:gap-8 lg:pb-10">
            {index < niosJourney.steps.length - 1 ? (
              <span
                className="absolute left-[1.15rem] top-12 h-[calc(100%-3rem)] w-px bg-gradient-to-b from-[var(--brand-lime)] to-[var(--brand-lime)]/20 sm:left-[1.35rem] sm:top-14 sm:h-[calc(100%-3.5rem)]"
                aria-hidden
              />
            ) : null}
            <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-black)] text-xs font-bold text-[var(--brand-lime)] shadow-lg shadow-black/10 sm:h-11 sm:w-11 sm:rounded-2xl sm:text-sm">
              {step.step}
            </div>
            <article className="min-w-0 flex-1 rounded-2xl bg-white p-4 ring-1 ring-black/[0.06] transition sm:rounded-3xl sm:p-6 sm:hover:shadow-md sm:hover:shadow-black/[0.04]">
              <p className="font-display text-[11px] font-bold uppercase tracking-wider text-[var(--brand-black)]/40">
                {step.titleEn}
              </p>
              <h3 className="mt-1 text-lg font-bold">{step.titleMl}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--brand-black)]/72">
                {step.bodyMl}
              </p>
              {step.tipMl ? (
                <div className="mt-4">
                  <GuideCallout variant="tip">
                    <span className="font-semibold">Tip: </span>
                    {step.tipMl}
                  </GuideCallout>
                </div>
              ) : null}
            </article>
          </li>
        ))}
      </ol>

      <div className="mt-12 border-t border-black/5 pt-10 sm:mt-16 sm:pt-14">
        <h3 className="text-lg font-bold tracking-tight sm:text-xl lg:text-2xl">
          {annualCycle.titleMl}
        </h3>
        <p className="font-display mt-2 text-[var(--brand-black)]/55">{annualCycle.subtitleEn}</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {annualCycle.blocks.map((block) => (
            <article
              key={block.name}
              className={`overflow-hidden rounded-3xl ${
                block.color === "lime"
                  ? "bg-[var(--brand-lime)]/30 ring-1 ring-[var(--brand-lime)]/50"
                  : "bg-[var(--brand-black)] text-white shadow-xl shadow-black/20"
              }`}
            >
              <div
                className={`px-6 py-3 ${
                  block.color === "lime"
                    ? "bg-[var(--brand-lime)]/40"
                    : "bg-white/5"
                }`}
              >
                <p
                  className={`font-display text-xs font-bold uppercase tracking-[0.2em] ${
                    block.color === "lime"
                      ? "text-[var(--brand-black)]/50"
                      : "text-[var(--brand-lime)]"
                  }`}
                >
                  {block.name}
                </p>
              </div>
              <div className="p-4 sm:p-6">
                <h4 className="text-lg font-bold sm:text-xl">{block.seasonMl}</h4>
                <dl
                  className={`mt-5 space-y-3 text-sm ${
                    block.color === "lime"
                      ? "text-[var(--brand-black)]/78"
                      : "text-white/85"
                  }`}
                >
                  <div>
                    <dt className="font-semibold opacity-70">രജിസ്ട്രേഷൻ</dt>
                    <dd className="mt-0.5">{block.registerMl}</dd>
                    <dd className="mt-1 text-xs opacity-65">{block.registerNoteMl}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold opacity-70">പരീക്ഷ</dt>
                    <dd className="mt-0.5">{block.examMl}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold opacity-70">ഫലം</dt>
                    <dd className="mt-0.5">{block.resultMl}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <GuideCallout variant="info">{annualCycle.noteMl}</GuideCallout>
        </div>
      </div>
    </GuideSection>
  );
}
