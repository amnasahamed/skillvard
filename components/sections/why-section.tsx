import { whyNotCoaching } from "@/lib/site-content";

export function WhySection() {
  return (
    <section
      id="why"
      className="scroll-mt-20 bg-[var(--brand-black)] text-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-[var(--brand-lime)]">
          {whyNotCoaching.titleEn}
        </p>
        <h2 className="mt-4 text-2xl font-bold leading-snug sm:text-3xl lg:text-4xl">
          {whyNotCoaching.titleMl}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/85">
          {whyNotCoaching.bodyMl}
        </p>
      </div>
    </section>
  );
}
