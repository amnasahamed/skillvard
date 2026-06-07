import { guideCta } from "@/lib/nios-guide-content";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function GuideCta() {
  return (
    <section className="relative overflow-hidden bg-[var(--brand-lime)] pb-[max(1rem,env(safe-area-inset-bottom))]">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(0,0,0,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0,0,0,0.04) 0%, transparent 40%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-12 text-center sm:px-6 sm:py-20">
        <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--brand-black)]/45 sm:text-xs sm:tracking-[0.2em]">
          Skillvard support
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl text-xl font-bold tracking-tight sm:mt-4 sm:text-3xl lg:text-4xl">
          {guideCta.titleMl}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[var(--brand-black)]/75 sm:mt-5 sm:text-lg">
          {guideCta.bodyMl}
        </p>
        <div className="mt-8 flex justify-center sm:mt-10">
          <WhatsAppButton
            location="nios-guide-cta"
            variant="primary"
            className="w-full max-w-sm min-h-12 text-base sm:w-auto sm:min-h-0 sm:text-sm"
          >
            {guideCta.cta}
          </WhatsAppButton>
        </div>
        <p className="mx-auto mt-8 max-w-lg text-xs leading-relaxed text-[var(--brand-black)]/50 sm:mt-10">
          {guideCta.disclaimerMl}
        </p>
      </div>
    </section>
  );
}
