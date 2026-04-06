import { testimonials } from "../data/content";
import FadeUp from "./FadeUp";

export default function Testimonials() {
  return (
    <section className="bg-white px-6 py-[120px] md:py-[160px]">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <FadeUp>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-headline)] font-medium tracking-[-0.03em] text-text">
              94% of DioGen clients improve biomarkers at first retest
            </h2>
            <p className="mt-5 text-lg text-text-secondary">
              Trusted by the Actualize community
            </p>
          </div>
        </FadeUp>

        {/* Testimonial cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={i * 0.08}>
              <div className="relative group overflow-hidden rounded-2xl h-[420px]">
                {/* Background image */}
                <img
                  src={t.image}
                  alt={t.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-sm leading-relaxed text-white/85 line-clamp-4">
                    "{t.quote}"
                  </p>
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-white">
                      {t.name}
                    </p>
                    <p className="text-xs text-white/50">{t.role}</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
