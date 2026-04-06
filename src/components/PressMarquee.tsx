import { pressLogos } from "../data/content";

export default function PressMarquee() {
  const logos = [...pressLogos, ...pressLogos, ...pressLogos, ...pressLogos];

  return (
    <section className="relative overflow-hidden border-t border-b border-border/40 bg-cream py-6">
      <div className="flex animate-marquee whitespace-nowrap">
        {logos.map((name, i) => (
          <span
            key={i}
            className="mx-10 inline-block text-lg font-medium italic text-text-secondary/60 select-none"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
