import Image from "next/image";
import Link from "next/link";
import { guideLink } from "@/lib/nios-guide-content";

export function GuideLinkBanner() {
  return (
    <section className="border-y border-[var(--brand-lime)]/40 bg-[var(--brand-lime)]/10">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_1.15fr] lg:gap-10">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5 sm:rounded-3xl">
            <Image
              src="/images/nios-guide.jpg"
              alt="NIOS ഗൈഡ് — മെന്റർ കൂടെ പഠന പാത"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-widest text-[var(--brand-black)]/50">
              New
            </p>
            <h2 className="mt-1 text-xl font-bold sm:text-2xl">{guideLink.labelMl}</h2>
            <p className="font-display mt-2 text-sm leading-relaxed text-[var(--brand-black)]/60 sm:text-base">
              {guideLink.labelEn}
            </p>
            <Link
              href={guideLink.href}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--brand-black)] px-6 py-3 text-sm font-bold text-white transition hover:bg-[var(--brand-black)]/90"
            >
              ഗൈഡ് വായിക്കുക →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
