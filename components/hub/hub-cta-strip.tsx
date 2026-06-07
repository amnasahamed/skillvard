import Link from "next/link";
import { hubCtaStrip } from "@/lib/hub-content";
import { siteConfig } from "@/lib/site-config";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function HubCtaStrip() {
  return (
    <section className="bg-[var(--brand-lime)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 text-center sm:px-6 sm:py-14 md:flex-row md:items-center md:text-left">
        <div className="flex-1">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {hubCtaStrip.titleEn}
          </h2>
          <p className="mt-2 text-base text-[var(--brand-black)]/78 sm:text-lg">
            {hubCtaStrip.bodyEn}
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <WhatsAppButton
            location="hub-cta-strip"
            variant="primary"
            message={siteConfig.hubWhatsappMessage}
          >
            {hubCtaStrip.ctaWhatsapp}
          </WhatsAppButton>
          <Link
            href="#programs"
            className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-[var(--brand-black)] px-6 py-3 text-sm font-bold text-[var(--brand-black)] transition hover:bg-[var(--brand-black)] hover:text-white"
          >
            {hubCtaStrip.ctaPrograms}
          </Link>
        </div>
      </div>
    </section>
  );
}
