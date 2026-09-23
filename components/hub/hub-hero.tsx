import Link from "next/link";
import { hubHero, hubHighlights } from "@/lib/hub-content";
import { siteConfig } from "@/lib/site-config";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { HubHeroVideo } from "@/components/hub/hub-hero-video";

export function HubHero() {
  return (
    <section id="home" className="relative scroll-mt-20 overflow-hidden bg-[var(--brand-cream)]">
      <div className="brand-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[var(--brand-lime)]/28 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[var(--brand-lime)]/12 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div className="hub-enter hub-enter-delay-1">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--brand-lime-dark)]" aria-hidden />
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-[var(--brand-black)]/55">
                Skillvard · {hubHero.taglineEn}
              </p>
            </div>
            <h1 className="mt-6 max-w-[13ch] text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-[3.85rem]">
              {hubHero.headlineEn}
            </h1>
            <p className="mt-6 text-lg font-bold leading-snug text-[var(--brand-black)]/88 sm:text-xl">
              {hubHero.subheadlineEn}
            </p>
            <p className="mt-4 max-w-[58ch] text-base leading-7 text-[var(--brand-black)]/65 sm:text-lg sm:leading-8">
              {hubHero.bodyEn}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2 sm:gap-2.5">
              {hubHero.bullets.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[var(--brand-black)]/10 bg-white/70 px-3.5 py-1.5 text-xs font-semibold shadow-sm sm:px-4 sm:py-2 sm:text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="#programs"
                className="interactive-lift inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--brand-black)] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_28px_rgb(16_19_13/0.2)] transition duration-200 hover:bg-[#252a1f]"
              >
                {hubHero.ctaPrograms}
              </Link>
              <Link
                href="/nios-plus-two"
                className="inline-flex min-h-11 items-center justify-center px-3 py-3 text-sm font-bold text-[var(--brand-black)] underline decoration-[var(--brand-lime-dark)] decoration-2 underline-offset-4 transition hover:decoration-[var(--brand-black)] active:scale-[0.98]"
              >
                {hubHero.ctaNios}
              </Link>
              <WhatsAppButton
                location="hub-hero"
                variant="outline"
                message={siteConfig.hubWhatsappMessage}
              >
                {hubHero.ctaWhatsapp}
              </WhatsAppButton>
            </div>
          </div>

          <div className="hub-enter hub-enter-delay-2 relative space-y-4 lg:translate-y-4">
            <div className="absolute -left-5 -top-5 hidden h-24 w-24 border-l border-t border-[var(--brand-lime-dark)]/35 lg:block" aria-hidden />
            <HubHeroVideo caption={hubHero.imageCaptionEn} />

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {hubHighlights.map((item, index) => {
                const delayClass =
                  index === 0
                    ? "hub-enter-delay-3"
                    : index === 1
                      ? "hub-enter-delay-4"
                      : "hub-enter-delay-5";
                return (
                <div
                  key={item.label}
                  className={`hub-enter ${delayClass} border-l border-black/10 bg-white/45 px-2 py-3 text-left first:border-l-0 sm:px-4 sm:py-4`}
                >
                  <p className="font-display text-sm font-bold text-[var(--brand-black)] sm:text-base">
                    {item.value}
                  </p>
                  <p className="mt-0.5 text-[10px] leading-snug text-[var(--brand-black)]/55 sm:text-xs">
                    {item.label}
                  </p>
                </div>
              );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
