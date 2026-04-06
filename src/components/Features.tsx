import { features } from "../data/content";
import FadeUp from "./FadeUp";

const statusColors: Record<string, { bg: string; text: string }> = {
  FAVORABLE: { bg: "bg-favorable/15", text: "text-favorable" },
  OPTIMIZE: { bg: "bg-data/15", text: "text-data" },
  "HIGH RISK": { bg: "bg-alert/15", text: "text-alert" },
};

export default function Features() {
  return (
    <section id="science" className="bg-dark px-6 py-[120px] md:py-[160px]">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <p
            className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-light"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            What we analyze
          </p>
          <h2
            className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-[-0.02em] text-white md:text-5xl"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Evidence-based biology in every recommendation
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/60">
            Your protocol is built on peer-reviewed genetics research.
            Here is a glimpse of what a DioGen analysis covers.
          </p>
        </FadeUp>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const color = statusColors[feature.status] ?? statusColors.OPTIMIZE;
            return (
              <FadeUp key={feature.variant} delay={i * 0.08}>
                <div className="rounded-2xl bg-dark-surface p-7 shadow-[0_12px_32px_rgba(0,0,0,0.3)] transition-transform hover:-translate-y-1">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium text-white/50">
                        {feature.label}
                      </p>
                      <p
                        className="mt-1 text-base font-medium text-white"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {feature.variant}
                      </p>
                    </div>
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${color.bg} ${color.text}`}
                    >
                      {feature.status}
                    </span>
                  </div>

                  {/* Detail */}
                  <p className="mt-5 text-sm leading-relaxed text-white/60">
                    {feature.detail}
                  </p>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
