import Image from "next/image";
import {
  problems,
  problemsTitle,
  solutions,
  solutionsClosingMl,
  solutionsIntroEn,
  solutionsTitle,
} from "@/lib/site-content";

export function ApproachSection() {
  return (
    <section id="approach" className="scroll-mt-20 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-lg ring-1 ring-black/5">
            <Image
              src="/images/nios-flexible.jpg"
              alt="സ്വയം വേഗത്തിൽ പഠനം — വീട്ടിൽ നിന്ന്"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-[var(--brand-black)]/45">
              Flexible learning
            </p>
            <p className="mt-3 text-lg leading-relaxed text-[var(--brand-black)]/80">
              ജോലി, കുടുംബം, സ്വന്തം വേഗം — എല്ലാം ഒന്നിച്ച്. NIOS നിങ്ങളുടെ ജീവിതത്തിന്
              അനുയോജ്യമാകാൻ Skillvard കൂടെയുണ്ട്.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold sm:text-3xl">{problemsTitle}</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem) => (
              <article
                key={problem.titleMl}
                className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm"
              >
                <h3 className="text-lg font-bold text-[var(--brand-black)]/90">
                  {problem.titleMl}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--brand-black)]/75">
                  {problem.bodyMl}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold sm:text-3xl">{solutionsTitle}</h2>
          <p className="font-display mt-2 text-lg font-semibold text-[var(--brand-black)]/70">
            {solutionsIntroEn}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <article
                key={solution.titleMl}
                className="rounded-2xl border border-[var(--brand-lime)]/50 bg-white p-5 shadow-sm ring-1 ring-[var(--brand-lime)]/30"
              >
                <p className="font-display text-xs font-bold uppercase tracking-wide text-[var(--brand-black)]/50">
                  {solution.titleEn}
                </p>
                <h3 className="mt-1 text-lg font-bold">{solution.titleMl}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--brand-black)]/75">
                  {solution.bodyMl}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-xl font-bold text-[var(--brand-black)]">
            {solutionsClosingMl}
          </p>
        </div>
      </div>
    </section>
  );
}
