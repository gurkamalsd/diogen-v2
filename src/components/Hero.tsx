import { useState } from "react";
import { heroContent, pressLogos } from "../data/content";
import FadeUp from "./FadeUp";

/** Per-journal faux-logo styling — bigger and more logo-like */
const journalStyles: Record<
  string,
  { className: string; style?: React.CSSProperties; display?: string }
> = {
  Nature: {
    className: "italic font-normal text-xl md:text-2xl",
    style: { fontFamily: "Georgia, 'Times New Roman', serif" },
  },
  "The Lancet": {
    className: "font-extrabold uppercase tracking-[0.15em] text-base md:text-lg",
    style: { fontFamily: "var(--font-headline)" },
    display: "THE LANCET",
  },
  Cell: {
    className: "italic font-medium text-xl md:text-2xl",
    style: { fontFamily: "Georgia, 'Times New Roman', serif" },
  },
  NEJM: {
    className: "font-bold uppercase tracking-wider text-lg md:text-xl",
    style: { fontFamily: "var(--font-headline)" },
  },
  "The New York Times": {
    className: "font-extrabold tracking-wider uppercase text-sm md:text-base",
    style: { fontFamily: "var(--font-headline)" },
    display: "The New York Times",
  },
};

export default function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Video background */}
      {!videoFailed && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setVideoFailed(true)}
        >
          <source src="/video/hero-bg.mp4" type="video/mp4" />
        </video>
      )}

      {/* Dark overlay — darker at top for navbar legibility, lighter in middle */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/50" />

      {/* Fallback dark bg if no video */}
      {videoFailed && <div className="absolute inset-0 bg-dark" />}

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 pt-20 pb-40 md:pb-48">
        <FadeUp>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[family-name:var(--font-headline)] font-medium text-white tracking-[-0.03em] leading-[1.05]">
            {heroContent.headline}
            <br />
            {heroContent.headlineAccent}
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            {heroContent.subheadline}
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <a
            href="#pricing"
            className="mt-8 inline-block bg-lime text-black px-8 py-4 rounded-full text-base font-bold hover:bg-lime-hover transition-colors"
          >
            {heroContent.cta}
          </a>
        </FadeUp>
      </div>

      {/* Bottom gradient for logo legibility */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 to-transparent z-[5]" />

      {/* Press logos pinned to bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pb-6">
        <FadeUp delay={0.5}>
          <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap px-6">
            {pressLogos.map((name) => {
              const s = journalStyles[name] ?? {
                className: "italic font-medium text-xl md:text-2xl",
                style: { fontFamily: "Georgia, 'Times New Roman', serif" },
              };
              return (
                <span
                  key={name}
                  className={`text-white/60 select-none ${s.className}`}
                  style={s.style}
                >
                  {s.display ?? name}
                </span>
              );
            })}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
