import { useState } from "react";
import { heroContent } from "../data/content";
import FadeUp from "./FadeUp";

function ProtocolCard({ className = "" }: { className?: string }) {
  const genes = [
    { label: "MTHFR C677T", status: "OPTIMIZE", color: "text-data", bgColor: "bg-data/15" },
    { label: "CYP1A2", status: "FAVORABLE", color: "text-favorable", bgColor: "bg-favorable/15" },
    { label: "VDR Bsm1", status: "HIGH RISK", color: "text-alert", bgColor: "bg-alert/15" },
  ];

  return (
    <div className={`overflow-hidden rounded-2xl bg-dark-surface shadow-[0_24px_48px_rgba(0,0,0,0.3)] ${className}`}>
      {/* Card header */}
      <div className="border-b border-white/10 px-6 py-4">
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white/40">
          Protocol Preview
        </p>
      </div>

      {/* Score */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-end gap-3">
          <p
            className="text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            87
          </p>
          <p className="mb-1 text-lg text-white/40">/100</p>
        </div>
        <p className="mt-1 text-sm text-white/50">DioGen Score</p>

        {/* Score bar */}
        <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-alert via-data to-favorable"
            style={{ width: "87%" }}
          />
        </div>
      </div>

      {/* Gene rows */}
      <div className="px-6 pb-6 pt-2">
        <div className="space-y-3">
          {genes.map((gene) => (
            <div
              key={gene.label}
              className="flex items-center justify-between rounded-lg bg-white/[0.04] px-4 py-3"
            >
              <span
                className="text-sm font-medium text-white/80"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {gene.label}
              </span>
              <span
                className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${gene.bgColor} ${gene.color}`}
              >
                {gene.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

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
          {/* Overlay gradient — stronger at top for legibility, fades to cream */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[var(--color-cream)]" />
        </div>
      )}

      {/* Content */}
      <div
        className={`relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center ${
          !hasVideo ? "bg-cream" : ""
        }`}
      >
        <FadeUp>
          <h1
            className="mx-auto max-w-6xl leading-[1.0] tracking-[-0.03em]"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            <span
              className={`block text-5xl font-bold sm:text-7xl md:text-8xl lg:text-9xl ${
                hasVideo ? "text-white" : "text-text"
              }`}
            >
              {heroContent.headline}
            </span>
            <span
              className={`mt-2 block text-5xl font-bold sm:text-7xl md:text-8xl lg:text-9xl ${
                hasVideo ? "text-white/90" : "text-text/80"
              }`}
            >
              {heroContent.headlineAccent}
            </span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p
            className={`mx-auto mt-8 max-w-2xl text-lg leading-relaxed sm:text-xl ${
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

        {/* Protocol card — visible on mobile below CTA */}
        <FadeUp delay={0.45}>
          <ProtocolCard className="mt-12 w-72 lg:hidden" />
        </FadeUp>
      </div>

      {/* Floating protocol card — desktop only, positioned right */}
      <div className="pointer-events-none absolute inset-0 z-10 hidden lg:block">
        <div className="relative mx-auto h-full max-w-7xl">
          <FadeUp delay={0.45}>
            <div className="pointer-events-auto absolute right-8 top-1/2 -translate-y-1/2">
              <ProtocolCard className="w-72" />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
