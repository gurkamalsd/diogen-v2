import { pressLogos } from "../data/content";

/** Per-journal faux-logo styling to create visual variety */
const journalStyles: Record<string, { className: string; style?: React.CSSProperties; display?: string }> = {
  Nature: {
    className: "italic font-normal text-2xl md:text-3xl",
    style: { fontFamily: "Georgia, 'Times New Roman', serif" },
  },
  "The Lancet": {
    className: "font-extrabold uppercase tracking-tight text-2xl md:text-3xl",
    style: { fontFamily: "var(--font-headline)" },
    display: "THE LANCET",
  },
  Cell: {
    className: "italic font-medium text-2xl md:text-3xl",
    style: { fontFamily: "Georgia, 'Times New Roman', serif" },
  },
  NEJM: {
    className: "font-bold uppercase tracking-[0.12em] text-2xl md:text-3xl",
    style: { fontFamily: "var(--font-headline)" },
  },
  JAMA: {
    className: "font-bold uppercase tracking-[0.06em] text-2xl md:text-3xl",
    style: { fontFamily: "var(--font-headline)" },
  },
};

const defaultStyle = {
  className: "italic font-medium text-2xl md:text-3xl",
  style: { fontFamily: "Georgia, 'Times New Roman', serif" } as React.CSSProperties,
};

export default function PressMarquee() {
  const logos = [...pressLogos, ...pressLogos, ...pressLogos, ...pressLogos];

  return (
    <section className="relative overflow-hidden border-t border-b border-border/40 bg-cream py-8">
      {/* Label */}
      <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-text-muted">
        Research grounded in
      </p>

      <div className="flex animate-marquee whitespace-nowrap opacity-40">
        {logos.map((name, i) => {
          const s = journalStyles[name] ?? defaultStyle;
          return (
            <span
              key={i}
              className={`mx-10 inline-block text-text-secondary select-none ${s.className}`}
              style={s.style}
            >
              {s.display ?? name}
            </span>
          );
        })}
      </div>
    </section>
  );
}
