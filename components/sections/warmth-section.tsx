import Image from "next/image";
import { warmth } from "@/lib/site-content";

export function WarmthSection() {
  return (
    <section className="scroll-mt-20 border-y border-[var(--brand-lime)]/30 bg-[var(--brand-lime)]/10">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-[var(--brand-black)]/55">
          {warmth.eyebrowEn}
        </p>
        <h2 className="mt-3 text-2xl font-bold leading-snug sm:text-3xl">
          {warmth.titleMl}
        </h2>
        <p className="mt-2 font-display text-lg text-[var(--brand-black)]/65">
          {warmth.subtitleEn}
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-stretch">
          <div className="relative min-h-[220px] overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5 sm:min-h-[280px] lg:min-h-0">
            <Image
              src="/images/nios-warmth.jpg"
              alt="മെന്റർ കൂടെ — ചൂമുള്ള പിന്തുണ"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
              <p className="text-base leading-relaxed text-[var(--brand-black)]/85 sm:text-lg">
                {warmth.bodyMl}
              </p>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-4 rounded-2xl bg-[var(--brand-black)] p-6 text-white sm:p-8">
              {warmth.promises.map((item) => (
                <div key={item.ml} className="flex gap-3">
                  <span
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--brand-lime)]"
                    aria-hidden
                  />
                  <div>
                    <p className="font-semibold">{item.ml}</p>
                    {item.en ? (
                      <p className="mt-0.5 text-sm text-white/65">{item.en}</p>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
