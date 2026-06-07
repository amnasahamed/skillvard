"use client";

import { hubContact } from "@/lib/hub-content";
import { siteConfig } from "@/lib/site-config";
import { trackPhoneClick } from "@/lib/analytics";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function HubContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--brand-black)]/40 sm:text-xs sm:tracking-[0.2em]">
            {hubContact.eyebrowEn}
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            {hubContact.titleEn}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--brand-black)]/72 sm:text-lg">
            {hubContact.bodyEn}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-black/[0.06] bg-zinc-50 p-6 shadow-sm sm:p-10">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <WhatsAppButton
              location="hub-contact"
              variant="primary"
              message={siteConfig.hubWhatsappMessage}
            >
              {hubContact.ctaWhatsapp}
            </WhatsAppButton>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-[var(--brand-black)] px-6 py-3 text-sm font-bold text-[var(--brand-black)] transition hover:bg-[var(--brand-black)] hover:text-white"
            >
              {hubContact.ctaEmail}
            </a>
          </div>

          <ul className="mt-8 space-y-3 border-t border-black/[0.06] pt-8 text-center text-sm text-[var(--brand-black)]/70">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-semibold text-[var(--brand-black)] hover:underline"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="font-semibold text-[var(--brand-black)] hover:underline"
                onClick={() => trackPhoneClick("hub-contact")}
              >
                {siteConfig.phone}
              </a>
            </li>
            <li>{siteConfig.address.nameEn}</li>
            {siteConfig.address.linesEn.map((line) => (
              <li key={line}>{line}</li>
            ))}
            <li className="text-[var(--brand-black)]/50">{hubContact.hoursEn}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
