import { features, featuresSection } from "@/lib/site-content";

export function FeaturesSection() {
  return (
    <section id="features" className="scroll-mt-20 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-bold sm:text-3xl">
          {featuresSection.titleMl}
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
            >
              <span className="font-display text-3xl font-bold text-[var(--brand-lime-dark)]">
                {feature.number}
              </span>
              <h3 className="mt-2 text-lg font-bold">{feature.titleMl}</h3>
              {"subtitle" in feature && feature.subtitle && (
                <p className="text-sm text-[var(--brand-black)]/60">
                  {feature.subtitle}
                </p>
              )}
              <p className="mt-2 text-sm leading-relaxed text-[var(--brand-black)]/75">
                {feature.bodyMl}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-[var(--brand-lime)]/30 px-6 py-8 text-center sm:px-10">
          <p className="text-lg font-bold sm:text-xl">
            {featuresSection.taglineMl}
          </p>
          <ul className="mt-6 flex flex-wrap justify-center gap-3">
            {featuresSection.bullets.map((item) => (
              <li
                key={item}
                className="font-display rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide shadow-sm sm:text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
