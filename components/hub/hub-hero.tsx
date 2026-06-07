import Link from "next/link";
import { hubHero, hubHighlights } from "@/lib/hub-content";
import { siteConfig } from "@/lib/site-config";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { HubHeroVideo } from "@/components/hub/hub-hero-video";

export function HubHero() {
  return (
    <section id="home" className="relative scroll-mt-20 overflow-hidden bg-white">
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[var(--brand-lime)]/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[var(--brand-lime)]/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="hub-enter hub-enter-delay-1">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-black)]/50 sm:text-sm">
              Skillvard
            </p>
            <p className="font-display mt-2 text-base text-[var(--brand-lime-dark)] sm:text-lg">
              {hubHero.taglineEn}
            </p>
            <h1 className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
              {hubHero.headlineEn}
            </h1>
            <p className="mt-4 text-lg font-semibold leading-snug text-[var(--brand-black)]/88 sm:text-xl">
              {hubHero.subheadlineEn}
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--brand-black)]/72 sm:text-lg">
              {hubHero.bodyEn}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2 sm:gap-2.5">
              {hubHero.bullets.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[var(--brand-lime)]/45 bg-[var(--brand-lime)]/12 px-3.5 py-1.5 text-xs font-medium sm:px-4 sm:py-2 sm:text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="#programs"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--brand-black)] px-6 py-3 text-sm font-bold text-white transition hover:bg-[var(--brand-black)]/90"
              >
                {hubHero.ctaPrograms}
              </Link>
              <Link
                href="/nios-plus-two"
                className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-[var(--brand-black)] px-6 py-3 text-sm font-bold text-[var(--brand-black)] transition hover:bg-[var(--brand-black)] hover:text-white"
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

          <div className="hub-enter hub-enter-delay-2 space-y-4">
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
                  className={`hub-enter ${delayClass} rounded-2xl border border-black/[0.06] bg-zinc-50 px-2 py-3 text-center sm:px-3 sm:py-4`}
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
