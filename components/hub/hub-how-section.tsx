import { hubHow } from "@/lib/hub-content";

export function HubHowSection() {
  return (
    <section id="how" className="scroll-mt-20 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--brand-black)]/40 sm:text-xs sm:tracking-[0.2em]">
          {hubHow.eyebrowEn}
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          {hubHow.titleEn}
        </h2>
        <p className="mt-2 max-w-xl text-base text-[var(--brand-black)]/60 sm:text-lg">
          {hubHow.subtitleEn}
        </p>

        <ol className="mt-10 grid gap-5 sm:grid-cols-3 sm:gap-6">
          {hubHow.steps.map((step, index) => (
            <li key={step.number} className="relative">
              <article className="h-full rounded-2xl border border-black/[0.06] bg-zinc-50 p-6 transition hover:border-[var(--brand-lime)]/40 hover:shadow-sm sm:p-7">
                <span className="font-display text-3xl font-bold text-[var(--brand-lime-dark)]">
                  {step.number}
                </span>
                <h3 className="mt-3 text-lg font-bold">{step.titleEn}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--brand-black)]/72">
                  {step.bodyEn}
                </p>
              </article>
              {index < hubHow.steps.length - 1 ? (
                <span
                  className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-[var(--brand-black)]/20 sm:block"
                  aria-hidden
                >
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
