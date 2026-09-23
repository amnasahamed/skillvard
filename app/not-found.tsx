import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <>
      <SiteHeader variant="hub" />
      <main id="main-content" className="brand-grid relative flex min-h-[70dvh] items-center overflow-hidden bg-[var(--brand-cream)]">
        <div className="pointer-events-none absolute -right-20 top-12 h-80 w-80 rounded-full bg-[var(--brand-lime)]/25 blur-3xl" aria-hidden />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[var(--brand-lime-dark)]">404 · Page not found</p>
          <h1 className="mt-5 max-w-3xl text-5xl font-extrabold leading-[1.02] tracking-[-0.05em] sm:text-7xl">
            This path doesn’t lead anywhere yet.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--brand-black)]/65">
            Head back to Skillvard, explore the current programme, or talk to us if you were looking for something specific.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/" className="interactive-lift inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--brand-black)] px-6 py-3 text-sm font-bold text-white transition duration-200 hover:bg-[#252a1f]">
              Back to home
            </Link>
            <Link href="/nios-plus-two" className="interactive-lift inline-flex min-h-11 items-center justify-center rounded-full border border-black/20 bg-white px-6 py-3 text-sm font-bold transition duration-200 hover:border-black">
              Explore NIOS Plus Two
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter variant="hub" />
    </>
  );
}
