import { useState } from "react";
import { guidedPathTabs } from "../data/content";
import FadeUp from "./FadeUp";

export default function GuidedPath() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = guidedPathTabs[activeTab];

  return (
    <section
      id="how-it-works"
      className="bg-cream px-6 py-[120px] md:py-[160px]"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <FadeUp>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-headline)] font-medium tracking-[-0.03em] text-text">
              A guided path, built for you
            </h2>
            <p className="mt-5 mx-auto max-w-2xl text-lg text-text-secondary leading-relaxed">
              Every protocol is personalised to your genetic variants and current
              biomarkers. Choose the dimension that matters most to you.
            </p>
          </div>
        </FadeUp>

        {/* Tabs */}
        <FadeUp delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {guidedPathTabs.map((t, i) => (
              <button
                key={t.label}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  i === activeTab
                    ? "bg-black text-white"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text)] border border-[var(--color-border)]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Tab content */}
        <div className="mt-14">
          <div className="relative overflow-hidden rounded-3xl">
            {/* Lifestyle image */}
            <img loading="lazy"
              src={tab.image}
              alt={tab.label}
              className="w-full h-[400px] md:h-[560px] object-cover"
            />

            {/* Gradient overlay at bottom for data cards */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Text overlay */}
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-headline)] font-medium text-white tracking-[-0.02em]">
                {tab.headline}
              </h3>
              <p className="mt-3 max-w-xl text-base text-white/70 leading-relaxed">
                {tab.description}
              </p>

              {/* Floating data cards */}
              <div className="mt-6 flex flex-wrap gap-3">
                {tab.dataCards.map((card) => (
                  <div
                    key={card.label}
                    className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl px-5 py-3 min-w-[120px] text-white shadow-lg"
                  >
                    <p className="text-xs text-white/50 font-medium">
                      {card.label}
                    </p>
                    <p className="text-xl font-bold text-white font-[family-name:var(--font-headline)]">
                      {card.value}
                    </p>
                    <p className="text-xs text-white/40">{card.sublabel}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
