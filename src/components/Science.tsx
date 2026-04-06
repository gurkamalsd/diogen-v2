import { scienceJournals } from "../data/content";
import FadeUp from "./FadeUp";

/** Per-journal faux-logo styling */
const journalTypography: Record<
  string,
  { className: string; style?: React.CSSProperties; display?: string }
> = {
  Nature: {
    className: "italic font-normal text-3xl md:text-4xl",
    style: { fontFamily: "Georgia, 'Times New Roman', serif" },
  },
  "The Lancet": {
    className: "font-extrabold uppercase tracking-tight text-2xl md:text-3xl",
    style: { fontFamily: "var(--font-headline)" },
    display: "THE LANCET",
  },
  Cell: {
    className: "italic font-medium text-3xl md:text-4xl",
    style: { fontFamily: "Georgia, 'Times New Roman', serif" },
  },
  NEJM: {
    className: "font-bold uppercase tracking-[0.12em] text-2xl md:text-3xl",
    style: { fontFamily: "var(--font-headline)" },
  },
};

export default function Science() {
  return (
    <section id="science" className="bg-white px-6 py-[120px] md:py-[160px]">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <FadeUp>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-headline)] font-medium tracking-[-0.03em] text-text">
              Grounded in peer-reviewed science
            </h2>
            <p className="mt-5 mx-auto max-w-2xl text-lg text-text-secondary leading-relaxed">
              Every recommendation in your protocol is backed by research from the world's leading journals. Here's the foundation.
            </p>
          </div>
        </FadeUp>

        {/* Journal cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {scienceJournals.map((journal, i) => {
            const typo = journalTypography[journal.name] ?? {
              className: "italic font-medium text-3xl md:text-4xl",
              style: { fontFamily: "Georgia, 'Times New Roman', serif" },
            };

            return (
              <FadeUp key={journal.name} delay={i * 0.08}>
                <div className="rounded-2xl bg-cream p-8 h-full flex flex-col border border-border/50">
                  {/* Journal name styled as faux-logo */}
                  <span
                    className={`text-text select-none ${typo.className}`}
                    style={typo.style}
                  >
                    {typo.display ?? journal.name}
                  </span>

                  {/* Stat */}
                  <div className="mt-6">
                    <p className="text-4xl font-[family-name:var(--font-headline)] font-medium text-text tracking-tight">
                      {journal.stat}
                    </p>
                    <p className="text-sm text-text-muted font-medium">
                      {journal.statLabel}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm text-text-secondary leading-relaxed flex-1">
                    {journal.description}
                  </p>
                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* Methodology note */}
        <FadeUp delay={0.4}>
          <div className="mt-16 text-center">
            <p className="text-sm text-text-muted max-w-2xl mx-auto leading-relaxed">
              Our protocols reference 125+ peer-reviewed studies across genomics,
              nutrition science, and clinical medicine. Every variant-supplement
              interaction is graded by evidence strength before inclusion.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
