import { useState } from "react";
import { heroContent } from "../data/content";
import FadeUp from "./FadeUp";

export default function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);
  const hasVideo = !videoFailed;

  return (
    <section className="relative overflow-hidden">
      {/* Video background */}
      {hasVideo && (
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            onError={() => setVideoFailed(true)}
          >
            <source src="/video/hero-bg.mp4" type="video/mp4" />
          </video>
          {/* Overlay gradient — darker at top for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-cream" />
        </div>
      )}

      {/* Content */}
      <div
        className={`relative z-10 flex min-h-[100vh] flex-col items-center justify-center px-6 text-center ${
          !hasVideo ? "bg-cream" : ""
        }`}
      >
        <FadeUp>
          <h1
            className="mx-auto max-w-5xl leading-[1.05] tracking-[-0.03em]"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            <span
              className={`block text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl ${
                hasVideo ? "text-white" : "text-text"
              }`}
            >
              {heroContent.headline}
            </span>
            <span
              className={`mt-2 block text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl ${
                hasVideo ? "text-white/90" : "text-text/80"
              }`}
            >
              {heroContent.headlineAccent}
            </span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p
            className={`mx-auto mt-8 max-w-2xl text-lg sm:text-xl leading-relaxed ${
              hasVideo ? "text-white/80" : "text-text-secondary"
            }`}
          >
            {heroContent.subheadline}
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:brightness-110"
            >
              {heroContent.cta}
            </a>
            <a
              href="#how-it-works"
              className={`inline-flex items-center rounded-full border-2 px-8 py-4 text-base font-semibold transition-all ${
                hasVideo
                  ? "border-white/40 text-white hover:bg-white/10"
                  : "border-text/20 text-text hover:bg-text/5"
              }`}
            >
              {heroContent.ctaSecondary}
            </a>
          </div>
        </FadeUp>
      </div>

      {/* Floating protocol preview card */}
      <div className="relative z-10 mx-auto -mt-24 max-w-4xl px-6 pb-8">
        <FadeUp delay={0.45}>
          <div className="overflow-hidden rounded-2xl bg-dark-surface shadow-[0_24px_48px_rgba(0,0,0,0.2)]">
            {/* macOS-style dots */}
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
              <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
              <span className="h-3 w-3 rounded-full bg-[#28CA41]" />
              <span className="ml-4 text-xs text-white/40">
                protocol-preview.ts
              </span>
            </div>
            <div className="p-6" style={{ fontFamily: "var(--font-mono)" }}>
              <pre className="text-sm leading-relaxed text-white/70">
                <code>
                  <span className="text-primary-light">const</span>{" "}
                  <span className="text-white">protocol</span> = {"{"}
                  {"\n"}
                  {"  "}
                  <span className="text-favorable">methylation</span>:{" "}
                  <span className="text-alert">"MTHFR C677T — CT variant"</span>
                  ,{"\n"}
                  {"  "}
                  <span className="text-favorable">recommendation</span>:{" "}
                  <span className="text-alert">
                    "Methylated B-complex 800mcg/day"
                  </span>
                  ,{"\n"}
                  {"  "}
                  <span className="text-favorable">confidence</span>:{" "}
                  <span className="text-data">0.94</span>,{"\n"}
                  {"  "}
                  <span className="text-favorable">source</span>:{" "}
                  <span className="text-alert">"Nature Genetics 2024"</span>
                  {"\n"}
                  {"}"};
                </code>
              </pre>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
