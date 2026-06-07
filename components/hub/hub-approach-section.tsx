import { hubApproach } from "@/lib/hub-content";
import { HubApproachMedia } from "@/components/hub/hub-approach-media";

export function HubApproachSection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-y border-[var(--brand-lime)]/25 bg-[var(--brand-lime)]/8"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--brand-black)]/45 sm:text-xs sm:tracking-[0.2em]">
          {hubApproach.eyebrowEn}
        </p>
        <h2 className="mt-2 max-w-2xl text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
          {hubApproach.titleEn}
        </h2>
        <p className="font-display mt-2 max-w-xl text-base text-[var(--brand-black)]/60 sm:text-lg">
          {hubApproach.subtitleEn}
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <HubApproachMedia />

          <div className="flex flex-col gap-4 sm:gap-5">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
              <p className="text-base leading-relaxed text-[var(--brand-black)]/82 sm:text-lg">
                {hubApproach.bodyEn}
              </p>
            </div>
            <div className="grid flex-1 gap-3 sm:grid-cols-1">
              {hubApproach.promises.map((item) => (
                <article
                  key={item.titleEn}
                  className="rounded-2xl bg-[var(--brand-black)] p-5 text-white sm:p-6"
                >
                  <h3 className="font-semibold text-[var(--brand-lime)]">
                    {item.titleEn}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/78">
                    {item.bodyEn}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
