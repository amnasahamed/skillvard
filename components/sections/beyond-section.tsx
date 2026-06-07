import Image from "next/image";
import { beyond, beyondSection } from "@/lib/site-content";

export function BeyondSection() {
  return (
    <section id="beyond" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-widest text-[var(--brand-black)]/50">
              {beyondSection.titleEn}
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[var(--brand-black)]/85">
              {beyondSection.introMl}
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg ring-1 ring-black/5">
            <Image
              src="/images/nios-success.jpg"
              alt="പുതിയ അധ്യായം — വിജയത്തിലേക്കുള്ള വഴി"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {beyond.map((item) => (
            <article
              key={item.number}
              className="rounded-2xl border-2 border-[var(--brand-black)] bg-[var(--brand-black)] p-6 text-white"
            >
              <span className="font-display text-2xl font-bold text-[var(--brand-lime)]">
                {item.number}
              </span>
              <h3 className="mt-2 text-lg font-bold">{item.titleMl}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                {item.bodyMl}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl font-bold">{beyondSection.closingMl}</p>
          <p className="mt-2 text-lg font-semibold text-[var(--brand-black)]/70">
            {beyondSection.supportMl}
          </p>
        </div>
      </div>
    </section>
  );
}
