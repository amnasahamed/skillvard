import Image from "next/image";
import Link from "next/link";
import { applySection, documents } from "@/lib/site-content";
import { guideLink } from "@/lib/nios-guide-content";
import { siteConfig } from "@/lib/site-config";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function ApplySection() {
  return (
    <section id="apply" className="scroll-mt-20 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center">
          <p className="font-display text-2xl font-bold sm:text-3xl">
            {applySection.dreamEn}
          </p>
          <p className="font-display text-2xl font-bold sm:text-3xl">
            {applySection.successEn}
          </p>
        </div>

        {/* Required Documents */}
        <div className="mt-12 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
          <div className="grid lg:grid-cols-[1fr_1.1fr]">
            <div className="relative min-h-[200px] lg:min-h-full">
              <Image
                src="/images/nios-documents.jpg"
                alt="ആവശ്യമായ രേഖകൾ തയ്യാറാക്കുന്നു"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <div className="p-6 sm:p-8 lg:p-10">
              <header className="max-w-2xl">
                <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--brand-black)]/40 sm:text-xs sm:tracking-[0.2em]">
                  {applySection.documentsEyebrowEn}
                </p>
                <h2 className="mt-2 text-xl font-bold leading-snug tracking-tight sm:text-2xl lg:text-[2rem]">
                  {applySection.documentsTitleMl}
                </h2>
                <p className="font-display mt-2 text-sm leading-relaxed text-[var(--brand-black)]/55 sm:text-base">
                  {applySection.documentsSubtitleEn}
                </p>
              </header>

              <ul className="mt-6 grid gap-2.5 sm:mt-8 sm:grid-cols-2 sm:gap-3">
                {documents.map((doc) => {
                  const isImportant = "noteMl" in doc && doc.noteMl;
                  return (
                    <li
                      key={doc.labelMl}
                      className={`rounded-xl border p-3.5 sm:rounded-2xl sm:p-4 ${
                        isImportant
                          ? "border-amber-300/80 bg-gradient-to-br from-amber-50 to-amber-100/50"
                          : "border-black/[0.06] bg-zinc-50"
                      }`}
                    >
                      <div className="flex gap-2.5">
                        <span
                          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-xs font-bold ${
                            isImportant
                              ? "bg-amber-200/80 text-amber-900"
                              : "bg-[var(--brand-lime)] text-[var(--brand-black)]"
                          }`}
                          aria-hidden
                        >
                          ✓
                        </span>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold leading-snug">{doc.labelMl}</p>
                          <p className="font-display mt-0.5 text-[11px] text-[var(--brand-black)]/50">
                            {doc.labelEn}
                          </p>
                          {isImportant && (
                            <p className="mt-1.5 text-xs leading-relaxed text-amber-900/80">
                              {doc.noteMl}
                            </p>
                          )}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6 rounded-2xl border border-[var(--brand-lime)]/40 bg-[var(--brand-lime)]/10 px-4 py-3.5 sm:px-5 sm:py-4">
                <p className="text-sm leading-relaxed text-[var(--brand-black)]/80">
                  {applySection.documentsTipMl}
                </p>
                <Link
                  href={guideLink.href}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-[var(--brand-black)] underline-offset-2 hover:underline"
                >
                  {applySection.documentsGuideCtaMl}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Why Skillvard */}
        <div className="mt-10 overflow-hidden rounded-3xl bg-[var(--brand-black)] text-white sm:mt-12">
          <div className="p-6 sm:p-8 lg:p-10">
            <header className="max-w-2xl">
              <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--brand-lime)] sm:text-xs sm:tracking-[0.2em]">
                {applySection.valueEyebrowEn}
              </p>
              <h2 className="mt-2 text-xl font-bold leading-snug tracking-tight sm:text-2xl lg:text-[2rem]">
                {applySection.valueTitleMl}
              </h2>
              <p className="font-display mt-2 text-sm leading-relaxed text-white/55 sm:text-base">
                {applySection.valueSubtitleEn}
              </p>
            </header>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
              {applySection.valueBodyMl}
            </p>

            <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3">
              {applySection.valueReasons.map((reason) => (
                <article
                  key={reason.titleMl}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6"
                >
                  <h3 className="text-base font-bold text-[var(--brand-lime)] sm:text-lg">
                    {reason.titleMl}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    {reason.bodyMl}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-[var(--brand-lime)]/30 bg-[var(--brand-lime)]/10 px-5 py-5 sm:mt-10 sm:flex-row sm:items-center sm:gap-5 sm:px-6">
              <span className="font-display shrink-0 text-xs font-semibold uppercase tracking-wide text-white/55">
                {siteConfig.programFeeLabel}
              </span>
              <span className="text-2xl font-bold text-[var(--brand-lime)] sm:text-3xl">
                {siteConfig.programFeeApprox}
              </span>
              <span className="text-sm leading-relaxed text-white/70 sm:flex-1">
                {siteConfig.programFeeNoteMl}
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-3xl bg-[var(--brand-black)] px-6 py-10 text-center text-white sm:mt-12 sm:px-12 sm:py-14">
          <h2 className="text-2xl font-bold sm:text-3xl">
            {applySection.ctaTitleMl}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            &ldquo;{applySection.quoteMl}&rdquo;
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppButton location="apply" variant="footer">
              {applySection.cta}
            </WhatsAppButton>
            <Link
              href={guideLink.href}
              className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-white/25 px-6 py-2.5 text-sm font-semibold text-white transition hover:border-[var(--brand-lime)] hover:text-[var(--brand-lime)]"
            >
              {guideLink.labelMl} →
            </Link>
          </div>
          <div className="mt-10 space-y-1">
            <p className="text-xl font-bold text-[var(--brand-lime)]">
              {applySection.closingMl1}
            </p>
            <p className="text-xl font-bold">{applySection.closingMl2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
