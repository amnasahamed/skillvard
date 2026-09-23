"use client";

import { hubContact } from "@/lib/hub-content";
import { siteConfig } from "@/lib/site-config";
import { trackPhoneClick } from "@/lib/analytics";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function HubContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 bg-[var(--brand-cream)] py-18 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--brand-black)]/40 sm:text-xs sm:tracking-[0.2em]">
            {hubContact.eyebrowEn}
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl">
            {hubContact.titleEn}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--brand-black)]/72 sm:text-lg">
            {hubContact.bodyEn}
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-[2rem] bg-white p-6 shadow-[0_24px_70px_rgb(16_19_13/0.09)] ring-1 ring-black/[0.05] sm:p-10">
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[var(--brand-lime)]/25 blur-3xl" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-2xl font-bold tracking-tight sm:text-3xl">A real person will reply.</p>
              <p className="mt-3 max-w-md text-sm leading-7 text-[var(--brand-black)]/60 sm:text-base">
                Tell us where you are in your learning journey. We’ll help you understand the next step without pressure.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton
              location="hub-contact"
              variant="primary"
              message={siteConfig.hubWhatsappMessage}
            >
              {hubContact.ctaWhatsapp}
            </WhatsAppButton>
                <a
              href={`mailto:${siteConfig.email}`}
                  className="interactive-lift inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--brand-black)]/20 px-6 py-3 text-sm font-bold text-[var(--brand-black)] transition duration-200 hover:border-[var(--brand-black)] hover:bg-[var(--brand-black)] hover:text-white"
            >
              {hubContact.ctaEmail}
            </a>
              </div>
            </div>

            <ul className="space-y-3 rounded-2xl bg-[var(--brand-cream)] p-6 text-sm leading-6 text-[var(--brand-black)]/65 ring-1 ring-black/[0.05] sm:p-8">
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
            <li className="pt-3 font-bold text-[var(--brand-black)]">{siteConfig.address.nameEn}</li>
            {siteConfig.address.linesEn.map((line) => (
              <li key={line}>{line}</li>
            ))}
            <li className="text-[var(--brand-black)]/50">{hubContact.hoursEn}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
