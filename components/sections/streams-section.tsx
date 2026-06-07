import { streams, streamsSection } from "@/lib/site-content";

export function StreamsSection() {
  return (
    <section id="streams" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="max-w-3xl text-2xl font-bold leading-snug sm:text-3xl">
          {streamsSection.titleMl}
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {streams.map((stream) => (
            <article
              key={stream.number}
              className="group rounded-2xl border border-black/5 bg-zinc-50 p-6 transition hover:border-[var(--brand-lime)] hover:shadow-md"
            >
              <span className="font-display inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-lime)] text-sm font-bold">
                {stream.number}
              </span>
              <h3 className="mt-4 text-xl font-bold">
                {stream.titleEn}{" "}
                <span className="text-[var(--brand-black)]/70">
                  ({stream.titleMl})
                </span>
              </h3>
              <p className="mt-2 leading-relaxed text-[var(--brand-black)]/75">
                {stream.bodyMl}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-[var(--brand-black)] px-6 py-8 text-center text-white sm:px-10">
          <p className="text-xl font-bold">{streamsSection.closingMl}</p>
          <p className="mt-2 text-lg text-[var(--brand-lime)]">
            {streamsSection.supportMl}
          </p>
        </div>
      </div>
    </section>
  );
}
