import { hubHow } from "@/lib/hub-content";

export function HubHowSection() {
  return (
    <section id="how" className="scroll-mt-20 bg-white py-18 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--brand-black)]/40 sm:text-xs sm:tracking-[0.2em]">
          {hubHow.eyebrowEn}
        </p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl">
          {hubHow.titleEn}
        </h2>
        <p className="mt-2 max-w-xl text-base text-[var(--brand-black)]/60 sm:text-lg">
          {hubHow.subtitleEn}
        </p>

        <ol className="relative mt-12 grid gap-5 sm:grid-cols-3 sm:gap-6 before:absolute before:left-[12%] before:right-[12%] before:top-8 before:hidden before:h-px before:bg-black/10 sm:before:block">
          {hubHow.steps.map((step, index) => (
            <li key={step.number} className="relative">
              <article className="interactive-lift relative h-full rounded-[1.5rem] bg-[var(--brand-cream)] p-6 ring-1 ring-black/[0.06] transition duration-300 hover:bg-white hover:shadow-[0_20px_50px_rgb(16_19_13/0.08)] sm:p-7">
                <span className="relative z-10 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--brand-black)] font-display text-xl font-bold text-[var(--brand-lime)] shadow-lg">
                  {step.number}
                </span>
                <h3 className="mt-3 text-lg font-bold">{step.titleEn}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--brand-black)]/72">
                  {step.bodyEn}
                </p>
              </article>
              {index < hubHow.steps.length - 1 ? <span className="sr-only">then</span> : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
