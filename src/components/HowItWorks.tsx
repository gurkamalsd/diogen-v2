import { howItWorksSteps } from "../data/content";
import FadeUp from "./FadeUp";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-cream px-6 py-[120px] md:py-[160px]">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <p
            className="text-xs font-semibold uppercase tracking-[0.15em] text-primary"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            How it works
          </p>
          <h2
            className="mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-[-0.02em] text-text md:text-5xl"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Four steps to a protocol built for your biology.
          </h2>
        </FadeUp>

        <div className="mt-20 space-y-[100px] md:mt-28 md:space-y-[140px]">
          {howItWorksSteps.map((step, i) => {
            const isReversed = i % 2 === 1;
            return (
              <FadeUp key={step.step}>
                <div
                  className={`flex flex-col items-center gap-12 md:gap-20 ${
                    isReversed ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  {/* Text side */}
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                      Step {step.step}
                    </p>
                    <h3
                      className="mt-3 text-3xl font-bold tracking-[-0.02em] text-text md:text-4xl"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-5 max-w-md text-lg leading-relaxed text-text-secondary">
                      {step.description}
                    </p>
                  </div>

                  {/* Image side */}
                  <div className="flex-1">
                    <div className="overflow-hidden rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="h-auto w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
