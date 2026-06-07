"use client";

import { useState } from "react";
import { niosGuideFaqs } from "@/lib/nios-guide-content";
import { GuideSection } from "./guide-ui";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <GuideSection
      id="faq"
      eyebrow="FAQ"
      title="പതിവ് ചോദ്യങ്ങൾ"
      subtitle="Commonly asked questions about NIOS"
      tone="white"
    >
      <div className="space-y-8 sm:space-y-12">
        {niosGuideFaqs.map((category) => (
          <div key={category.id}>
            <div className="mb-4 flex flex-col gap-1.5 sm:mb-5 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-3 sm:gap-y-1">
              <h3 className="text-base font-bold sm:text-lg">{category.titleMl}</h3>
              <span className="font-display w-fit rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-[var(--brand-black)]/45">
                {category.titleEn}
              </span>
            </div>
            <div className="space-y-2">
              {category.items.map((item, index) => {
                const id = `${category.id}-${index}`;
                const isOpen = openId === id;
                return (
                  <article
                    key={id}
                    className={`overflow-hidden rounded-xl border transition sm:rounded-2xl ${
                      isOpen
                        ? "border-[var(--brand-lime)]/50 bg-[var(--brand-lime)]/8 shadow-sm"
                        : "border-black/[0.06] bg-zinc-50 active:bg-zinc-100 sm:hover:border-black/10"
                    }`}
                  >
                    <button
                      type="button"
                      className="flex min-h-12 w-full items-start justify-between gap-3 px-4 py-3.5 text-left sm:min-h-0 sm:gap-4 sm:px-6 sm:py-5"
                      aria-expanded={isOpen}
                      onClick={() => setOpenId(isOpen ? null : id)}
                    >
                      <span className="text-[15px] font-semibold leading-snug text-[var(--brand-black)] sm:text-base">
                        {item.q}
                      </span>
                      <span
                        className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl leading-none transition sm:h-8 sm:w-8 sm:text-lg ${
                          isOpen
                            ? "rotate-45 bg-[var(--brand-black)] text-[var(--brand-lime)]"
                            : "bg-white text-[var(--brand-black)]/40 ring-1 ring-black/8"
                        }`}
                        aria-hidden
                      >
                        +
                      </span>
                    </button>
                    {isOpen ? (
                      <p className="border-t border-black/5 px-4 pb-4 pt-2.5 text-sm leading-relaxed text-[var(--brand-black)]/75 sm:px-6 sm:pb-5 sm:pt-3">
                        {item.a}
                      </p>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </GuideSection>
  );
}
