import { stats } from "../data/content";
import FadeUp from "./FadeUp";

export default function Stats() {
  return (
    <section className="bg-dark px-6 py-[120px] md:py-[160px]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <FadeUp key={stat.value} delay={i * 0.1}>
              <div className="text-center lg:text-left">
                <p
                  className="text-6xl font-normal tracking-tight text-white md:text-7xl"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  {stat.value}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  {stat.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
