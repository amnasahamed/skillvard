import Image from "next/image";
import Link from "next/link";
import { hubPrograms } from "@/lib/hub-content";
import { siteConfig } from "@/lib/site-config";
import { programs, type Program } from "@/lib/programs";
import { WhatsAppButton } from "@/components/whatsapp-button";

function ProgramCard({ program }: { program: Program }) {
  return (
    <Link href={program.href} className="group block">
      <article className="interactive-lift overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_50px_rgb(16_19_13/0.08)] ring-1 ring-black/5 transition duration-300 group-hover:ring-[var(--brand-lime-dark)]/35 group-hover:shadow-[0_28px_70px_rgb(16_19_13/0.12)]">
        <div className="relative aspect-[16/10] sm:aspect-[21/9]">
          <Image
            src={program.image}
            alt={program.titleEn}
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 1024px) 100vw, 66vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          {program.badgeEn ? (
            <span className="absolute left-5 top-5 rounded-lg bg-[var(--brand-lime)] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-[var(--brand-black)] shadow-sm">
              {program.badgeEn}
            </span>
          ) : null}
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              {program.titleEn}
            </h3>
          </div>
        </div>
        <div className="p-5 sm:p-6">
          <p className="text-base leading-relaxed text-[var(--brand-black)]/75">
            {program.descriptionEn}
          </p>
          <p className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[var(--brand-black)] group-hover:underline">
            Learn more
            <span aria-hidden>→</span>
          </p>
        </div>
      </article>
    </Link>
  );
}

function ComingSoonTeaser() {
  return (
    <article className="brand-grid relative flex h-full min-h-72 flex-col justify-between overflow-hidden rounded-[2rem] border border-[var(--brand-black)]/10 bg-[var(--brand-mist)] p-6 sm:p-8">
      <div>
        <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--brand-black)]/40">
          Coming soon
        </p>
        <h3 className="mt-2 text-xl font-bold sm:text-2xl">
          {hubPrograms.comingSoonTitleEn}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--brand-black)]/65 sm:text-base">
          {hubPrograms.comingSoonBodyEn}
        </p>
      </div>
      <WhatsAppButton
        location="hub-programs-coming-soon"
        variant="outline"
        className="mt-6 w-full sm:w-auto"
        message={siteConfig.hubWhatsappMessage}
      >
        {hubPrograms.comingSoonCtaEn}
      </WhatsAppButton>
    </article>
  );
}

export function ProgramsSection() {
  return (
    <section id="programs" className="scroll-mt-20 bg-[var(--brand-cream)] py-18 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--brand-black)]/40 sm:text-xs sm:tracking-[0.2em]">
          {hubPrograms.eyebrowEn}
        </p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl">
          {hubPrograms.titleEn}
        </h2>
        <p className="mt-2 max-w-2xl text-base text-[var(--brand-black)]/65 sm:text-lg">
          {hubPrograms.subtitleEn}
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.45fr_0.55fr] lg:items-stretch">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
          <ComingSoonTeaser />
        </div>
      </div>
    </section>
  );
}
