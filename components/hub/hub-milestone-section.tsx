"use client";

import Image from "next/image";
import { useState } from "react";
import { hubMilestone } from "@/lib/hub-content";
import { siteMilestone } from "@/lib/site-content";

export function HubMilestoneSection() {
  const [lang, setLang] = useState<"en" | "ml">("en");

  const isEn = lang === "en";

  // Content selection based on active language
  const content = {
    eyebrow: isEn ? hubMilestone.eyebrowEn : siteMilestone.eyebrowMl,
    badge: isEn ? hubMilestone.badgeEn : siteMilestone.badgeMl,
    title: isEn ? hubMilestone.titleEn : siteMilestone.titleMl,
    subtitle: isEn ? hubMilestone.subtitleEn : siteMilestone.subtitleMl,
    body: isEn ? hubMilestone.bodyEn : siteMilestone.bodyMl,
    imageAlt: isEn ? hubMilestone.imageAltEn : siteMilestone.imageAltMl,
    date: isEn ? hubMilestone.dateEn : siteMilestone.dateMl,
  };

  return (
    <section
      id="milestone"
      className="guide-dot-bg relative scroll-mt-20 overflow-hidden border-b border-black/5 bg-zinc-50/70 py-16 sm:py-24"
    >
      {/* Decorative background glows */}
      <div className="pointer-events-none absolute -left-48 top-12 h-96 w-96 rounded-full bg-[var(--brand-lime)]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-36 bottom-12 h-80 w-80 rounded-full bg-zinc-200/50 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Language Toggle */}
        <div className="mb-8 flex justify-end">
          <div className="inline-flex rounded-full border border-black/10 bg-white p-1 shadow-sm">
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-4 py-1 text-xs font-semibold transition-all ${
                isEn
                  ? "bg-[var(--brand-black)] text-white shadow-sm"
                  : "text-[var(--brand-black)]/60 hover:text-[var(--brand-black)]"
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLang("ml")}
              className={`rounded-full px-4 py-1 text-xs font-semibold transition-all ${
                !isEn
                  ? "bg-[var(--brand-black)] text-white shadow-sm"
                  : "text-[var(--brand-black)]/60 hover:text-[var(--brand-black)]"
              }`}
            >
              മലയാളം
            </button>
          </div>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Text Content */}
          <div className="space-y-6 lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--brand-lime)]/20 border border-[var(--brand-lime)]/60 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--brand-lime-dark)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-lime-dark)] animate-pulse" />
                {content.badge}
              </span>
              <span className="text-xs font-medium text-[var(--brand-black)]/45">
                {content.date}
              </span>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-[var(--brand-black)] sm:text-4xl lg:text-5xl">
                {content.title}
              </h2>
              <div className="flex items-center gap-3 border-l-2 border-[var(--brand-lime)] pl-4">
                <p className="text-sm font-semibold tracking-wide text-[var(--brand-black)]/75 sm:text-base">
                  {content.subtitle}
                </p>
              </div>
            </div>

            <p className="text-base leading-relaxed text-[var(--brand-black)]/75 sm:text-lg">
              {content.body}
            </p>

            <div className="rounded-2xl border border-black/[0.05] bg-white p-5 shadow-sm">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-lime)] text-[var(--brand-black)]">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[var(--brand-black)] sm:text-base">
                    {isEn ? "Government Recognized Launch" : "സർക്കാർ തല അംഗീകാരം"}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--brand-black)]/60 sm:text-sm">
                    {isEn
                      ? "Skillvard's vision and brand elements are aligned with the highest educational values, launched by the Hon. Minister of Industries, IT & AI, Government of Kerala."
                      : "കേരള വ്യവസായ-ഐടി-എ.ഐ മന്ത്രിയുടെ നേതൃത്വത്തിൽ നടന്ന ഈ ലോഗോ പ്രകാശനം സ്കിൽവാർഡിന്റെ വിദ്യാഭ്യാസ ദൗത്യങ്ങൾക്ക് കൂടുതൽ കരുത്തും വിശ്വാസ്യതയും പകരുന്നു."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Poster Image */}
          <div className="flex justify-center lg:col-span-5">
            <div className="group relative w-full max-w-[380px] sm:max-w-[420px]">
              {/* Outer decorative borders and shadows */}
              <div className="absolute inset-0 -rotate-2 rounded-2xl bg-gradient-to-tr from-[var(--brand-lime)] to-lime-200 opacity-60 blur-xl transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105" />
              
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/10 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_25px_50px_-12px_rgba(184,230,0,0.25)]">
                <Image
                  src="/images/logo-launch.jpg"
                  alt={content.imageAlt}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
                
                {/* Vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                
                {/* Hover Glow Accent */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-[var(--brand-lime)]/30 transition-all duration-500 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
