import { Check } from "lucide-react";
import { pricingTiers } from "../data/content";
import FadeUp from "./FadeUp";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-cream px-6 py-[120px] md:py-[160px]">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <FadeUp>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-headline)] font-medium tracking-[-0.03em] text-text">
              Three tiers, one goal: Your best health
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-text-secondary leading-relaxed">
              Choose the depth of analysis that fits where you are in your health journey.
            </p>
          </div>
        </FadeUp>

        {/* Pricing cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <FadeUp key={tier.name} delay={i * 0.1}>
              <div
                className={`relative flex flex-col rounded-3xl p-8 md:p-10 h-full ${
                  tier.featured
                    ? "bg-dark text-white shadow-[0_24px_48px_rgba(0,0,0,0.2)]"
                    : "bg-white text-text shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-border/50"
                }`}
              >
                {/* Popular badge */}
                {tier.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-lime text-black text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                {/* Tier name */}
                <p
                  className={`text-sm font-semibold uppercase tracking-wider ${
                    tier.featured ? "text-white/50" : "text-text-secondary"
                  }`}
                >
                  {tier.name}
                </p>

                {/* Price */}
                <p className="mt-4 font-[family-name:var(--font-headline)]">
                  <span className="text-5xl md:text-6xl font-medium tracking-tight">
                    {tier.price}
                  </span>
                </p>
                <p
                  className={`mt-1 text-sm ${
                    tier.featured ? "text-white/40" : "text-text-muted"
                  }`}
                >
                  {tier.period}
                </p>

                {/* Description */}
                <p
                  className={`mt-4 text-base leading-relaxed ${
                    tier.featured ? "text-white/60" : "text-text-secondary"
                  }`}
                >
                  {tier.description}
                </p>

                {/* CTA */}
                <a
                  href="#"
                  className={`mt-8 block text-center rounded-full px-6 py-4 text-base font-bold transition-colors ${
                    tier.featured
                      ? "bg-lime text-black hover:bg-lime-hover"
                      : "bg-dark text-white hover:opacity-90"
                  }`}
                >
                  {tier.cta}
                </a>

                {/* Divider */}
                <div
                  className={`mt-8 border-t ${
                    tier.featured ? "border-white/10" : "border-border/60"
                  }`}
                />

                {/* Features */}
                <ul className="mt-8 space-y-4 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                          tier.featured ? "text-lime" : "text-favorable"
                        }`}
                      />
                      <span
                        className={`text-sm leading-relaxed ${
                          tier.featured ? "text-white/70" : "text-text-secondary"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Trust note */}
        <FadeUp delay={0.4}>
          <p className="mt-10 text-center text-sm text-text-muted">
            All tiers include a 30-day money-back guarantee. HSA / FSA eligible.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
