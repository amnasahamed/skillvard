import Image from "next/image";
import Link from "next/link";
import { guideLink } from "@/lib/nios-guide-content";
import { hero } from "@/lib/site-content";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative scroll-mt-20 overflow-hidden bg-white"
    >
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[var(--brand-lime)]/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[var(--brand-lime)]/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 lg:order-1">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-black)]/50 sm:text-sm">
              {hero.brand}
            </p>
            <p className="font-display mt-2 text-base text-[var(--brand-black)]/65 sm:text-lg">
              {hero.taglineEn}
            </p>

            <h1 className="mt-5 text-2xl font-bold leading-[1.2] tracking-tight sm:text-3xl lg:text-4xl xl:text-5xl">
              {hero.headlineMl}
            </h1>
            <p className="mt-3 text-lg font-semibold leading-snug text-[var(--brand-black)]/90 sm:text-xl">
              {hero.subheadlineMl}
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--brand-black)]/78 sm:mt-6 sm:text-lg">
              {hero.empathyMl}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2 sm:gap-3">
              {hero.bullets.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[var(--brand-lime)]/50 bg-[var(--brand-lime)]/15 px-3.5 py-1.5 text-xs font-medium sm:px-4 sm:py-2 sm:text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <WhatsAppButton location="hero" variant="primary">
                {hero.cta}
              </WhatsAppButton>
              <Link
                href={guideLink.href}
                className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-[var(--brand-black)] px-5 py-2.5 text-sm font-semibold transition hover:bg-[var(--brand-black)] hover:text-white"
              >
                {guideLink.labelMl}
              </Link>
            </div>
            <p className="font-display mt-3 text-sm text-[var(--brand-black)]/45">
              {hero.ctaEn}
            </p>
            <Link
              href="/"
              className="mt-5 inline-block text-sm text-[var(--brand-black)]/40 underline-offset-2 hover:text-[var(--brand-black)]/60 hover:underline"
            >
              ← Skillvard ഹോം
            </Link>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5 sm:rounded-3xl lg:aspect-[4/3]">
              <Image
                src="/images/nios-hero.jpg"
                alt="യുവതി വീട്ടിൽ സ്വയം പഠിക്കുന്നു — NIOS Plus Two"
                fill
                className="object-cover object-[center_20%]"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4 sm:p-5">
                <p className="text-sm font-semibold text-white sm:text-base">
                  {hero.withNiosMl}
                </p>
                <p className="mt-0.5 text-xs text-white/80 sm:text-sm">{hero.pathMl}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
