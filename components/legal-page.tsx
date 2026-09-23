import type { ReactNode } from "react";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type LegalPageProps = {
  eyebrow?: string;
  title: string;
  summary: string;
  children: ReactNode;
};

export function LegalPage({
  eyebrow = "Legal",
  title,
  summary,
  children,
}: LegalPageProps) {
  return (
    <>
      <SiteHeader variant="hub" />
      <main id="main-content" className="bg-[var(--brand-cream)]">
        <header className="brand-noise border-b border-black/[0.06] bg-[var(--brand-black)] text-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
            <Link
              href="/"
              className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-white/55 transition hover:text-white"
            >
              <span aria-hidden>←</span> Back to Skillvard
            </Link>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-lime)]">
              {eyebrow}
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-[-0.045em] sm:text-6xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              {summary}
            </p>
            <p className="mt-6 text-xs text-white/45">Last updated: 23 September 2026</p>
          </div>
        </header>

        <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-20">
          <div className="space-y-12 rounded-[2rem] bg-white p-6 text-[15px] leading-7 text-[var(--brand-black)]/72 shadow-[0_24px_70px_rgb(16_19_13/0.08)] ring-1 ring-black/[0.05] sm:p-12 [&_a]:font-semibold [&_a]:text-[var(--brand-black)] [&_a]:underline [&_a]:decoration-[var(--brand-lime-dark)] [&_a]:decoration-2 [&_a]:underline-offset-4 [&_h2]:text-xl [&_h2]:font-extrabold [&_h2]:tracking-[-0.02em] [&_h2]:text-[var(--brand-black)] [&_li]:ml-5 [&_li]:list-disc [&_p+p]:mt-3 [&_section]:border-b [&_section]:border-black/[0.06] [&_section]:pb-10 [&_section:last-child]:border-0 [&_section:last-child]:pb-0 [&_ul]:mt-3 [&_ul]:space-y-2">
            {children}
          </div>
        </article>
      </main>
      <SiteFooter variant="hub" />
    </>
  );
}
