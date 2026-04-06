import FadeUp from "./FadeUp";

export default function PreFooterCTA() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background image */}
      <img loading="lazy"
        src="/images/lifestyle-outdoor.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 px-6 max-w-4xl">
        <FadeUp>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-headline)] font-medium text-white tracking-[-0.03em] leading-[1.1]">
            Your path to precision health starts now
          </h2>
        </FadeUp>
        <FadeUp delay={0.15}>
          <a
            href="#pricing"
            className="mt-8 inline-block bg-lime text-black px-8 py-4 rounded-full text-base font-bold hover:bg-lime-hover transition-colors"
          >
            Get Started
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
