import { niosStreams } from "@/lib/nios-guide-content";
import { GuideCallout, GuideLabel, GuideSection } from "./guide-ui";

export function StreamsGuide() {
  return (
    <GuideSection
      id="streams"
      eyebrow="Choose wisely"
      title={niosStreams.titleMl}
      subtitle={niosStreams.subtitleEn}
      tone="muted"
    >
      <div className="grid gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {niosStreams.streams.map((stream) => (
          <article
            key={stream.id}
            className={`relative flex flex-col overflow-hidden rounded-2xl p-4 transition sm:rounded-3xl sm:p-6 sm:hover:-translate-y-1 ${
              stream.highlight
                ? "bg-[var(--brand-black)] text-white shadow-2xl shadow-black/25 ring-2 ring-[var(--brand-lime)]"
                : "bg-white shadow-sm ring-1 ring-black/[0.06] sm:hover:shadow-lg"
            }`}
          >
            {stream.highlight ? (
              <div className="mb-3 w-fit sm:absolute sm:right-4 sm:top-4 sm:mb-0">
                <GuideLabel>പൊതുവിൽ തെറ്റ്</GuideLabel>
              </div>
            ) : null}
            <h3
              className={`font-display text-xl font-bold tracking-tight sm:text-2xl ${
                stream.highlight ? "text-[var(--brand-lime)] sm:pr-20" : ""
              }`}
            >
              {stream.name}
            </h3>
            <p
              className={`mt-2 text-sm font-medium leading-relaxed sm:mt-3 ${
                stream.highlight ? "text-white/88" : "text-[var(--brand-black)]/80"
              }`}
            >
              {stream.forWhomMl}
            </p>
            <dl
              className={`mt-5 flex flex-1 flex-col gap-3 border-t pt-4 text-sm sm:mt-6 sm:gap-4 sm:pt-5 ${
                stream.highlight ? "border-white/10" : "border-black/5"
              }`}
            >
              {[
                { label: "പരീക്ഷ", value: stream.examMl },
                { label: "TMA", value: stream.tmaMl },
                { label: "TOC", value: stream.tocMl },
              ].map((row) => (
                <div key={row.label}>
                  <dt
                    className={`text-[10px] font-bold uppercase tracking-wider ${
                      stream.highlight ? "text-white/45" : "text-[var(--brand-black)]/40"
                    }`}
                  >
                    {row.label}
                  </dt>
                  <dd className={`mt-1 leading-relaxed ${stream.highlight ? "text-white/90" : ""}`}>
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p
              className={`mt-5 rounded-xl px-3 py-2.5 text-sm font-medium sm:mt-6 ${
                stream.highlight
                  ? "bg-[var(--brand-lime)]/15 text-[var(--brand-lime)]"
                  : "bg-[var(--brand-lime)]/25 text-[var(--brand-black)]"
              }`}
            >
              {stream.bestForMl}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-6 sm:mt-8">
        <GuideCallout variant="tip">
          <p className="font-bold">{niosStreams.tocExplain.titleMl}</p>
          <p className="mt-2">{niosStreams.tocExplain.bodyMl}</p>
        </GuideCallout>
      </div>
    </GuideSection>
  );
}
