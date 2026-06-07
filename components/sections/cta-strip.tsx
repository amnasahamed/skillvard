import { ctaStrip } from "@/lib/site-content";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function CtaStrip() {
  return (
    <section className="bg-[var(--brand-lime)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 text-center sm:px-6 sm:py-14 md:flex-row md:text-left">
        <div className="flex-1">
          <h2 className="text-2xl font-bold sm:text-3xl">{ctaStrip.titleMl}</h2>
          <p className="mt-2 text-[var(--brand-black)]/80">{ctaStrip.bodyMl}</p>
        </div>
        <WhatsAppButton location="cta-strip" variant="primary">
          {ctaStrip.cta}
        </WhatsAppButton>
      </div>
    </section>
  );
}
