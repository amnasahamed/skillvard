import Image from "next/image";
import Link from "next/link";
import { guideHero } from "@/lib/nios-guide-content";

const highlights = [
  { value: "5 വർഷം", label: "അഡ്മിഷൻ സാധുത" },
  { value: "2 ചക്രം", label: "പരീക്ഷാ ബ്ലോക്ക്" },
  { value: "5–7", label: "വിഷയങ്ങൾ" },
];

export function GuideHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--brand-black)] text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(184,230,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(184,230,0,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[var(--brand-lime)]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-[var(--brand-lime)]/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
          <div>
            <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--brand-lime)] sm:text-xs sm:tracking-[0.25em]">
              {guideHero.eyebrowEn}
            </p>
            <h1 className="mt-4 max-w-2xl text-2xl font-bold leading-[1.2] tracking-tight sm:mt-5 sm:text-3xl sm:leading-[1.15] lg:text-5xl">
              {guideHero.titleMl}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:mt-6 sm:text-lg">
              {guideHero.subtitleMl}
            </p>
            <Link
              href={guideHero.backHref}
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/90 transition active:scale-[0.98] hover:border-[var(--brand-lime)]/50 hover:bg-white/10 sm:mt-8"
            >
              {guideHero.backLabel}
            </Link>
          </div>

          <div className="space-y-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-2xl sm:rounded-3xl">
              <Image
                src="/images/nios-guide.jpg"
                alt="NIOS പൂർണ്ണ ഗൈഡ് — മെന്റർ കൂടെ പഠന പാത"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex min-h-[4.5rem] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-2 py-3.5 text-center backdrop-blur-sm sm:px-3 sm:py-4"
                >
                  <p className="font-display text-base font-bold text-[var(--brand-lime)] sm:text-lg lg:text-xl">
                    {item.value}
                  </p>
                  <p className="mt-1 text-[10px] leading-snug text-white/60 sm:text-[11px]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
