import { hubWhy } from "@/lib/hub-content";

export function HubWhySection() {
  return (
    <section className="brand-noise bg-[var(--brand-black)] py-18 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--brand-lime)] sm:text-xs sm:tracking-[0.2em]">
          {hubWhy.eyebrowEn}
        </p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl">
          {hubWhy.titleEn}
        </h2>
        <p className="mt-2 max-w-xl text-base text-white/60 sm:text-lg">
          {hubWhy.subtitleEn}
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {hubWhy.items.map((item, index) => (
            <article
              key={item.titleEn}
              className={`interactive-lift rounded-[1.5rem] border border-white/10 p-7 transition duration-300 hover:border-[var(--brand-lime)]/35 ${
                index === 0
                  ? "bg-[var(--brand-lime)] text-[var(--brand-black)] sm:col-span-2 lg:col-span-5"
                  : index === 1
                    ? "bg-white/[0.06] lg:col-span-3"
                    : "bg-white/[0.06] lg:col-span-4"
              }`}
            >
              <span className={`font-display text-sm font-bold ${index === 0 ? "text-[var(--brand-black)]/45" : "text-white/35"}`}>
                0{index + 1}
              </span>
              <h3 className={`mt-7 text-xl font-bold ${index === 0 ? "text-[var(--brand-black)]" : "text-[var(--brand-lime)]"}`}>
                {item.titleEn}
              </h3>
              <p className={`mt-2 text-sm leading-7 ${index === 0 ? "text-[var(--brand-black)]/70" : "text-white/70"}`}>
                {item.bodyEn}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
