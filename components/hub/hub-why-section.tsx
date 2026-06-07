import { hubWhy } from "@/lib/hub-content";

export function HubWhySection() {
  return (
    <section className="bg-[var(--brand-black)] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--brand-lime)] sm:text-xs sm:tracking-[0.2em]">
          {hubWhy.eyebrowEn}
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          {hubWhy.titleEn}
        </h2>
        <p className="mt-2 max-w-xl text-base text-white/60 sm:text-lg">
          {hubWhy.subtitleEn}
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-3 sm:gap-6">
          {hubWhy.items.map((item, index) => (
            <article
              key={item.titleEn}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-7"
            >
              <span className="font-display text-sm font-bold text-white/35">
                0{index + 1}
              </span>
              <h3 className="mt-3 text-lg font-bold text-[var(--brand-lime)]">
                {item.titleEn}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/78">
                {item.bodyEn}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
