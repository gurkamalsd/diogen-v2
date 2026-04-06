import { Check, Shield, RotateCcw, Lock } from "lucide-react";
import { pricingContent } from "../data/content";
import FadeUp from "./FadeUp";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-cream px-6 py-[120px] md:py-[160px]">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <FadeUp>
          <div className="text-center">
            <h2
              className="text-4xl font-bold tracking-[-0.02em] text-text md:text-5xl"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Investment in your biology.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-text-secondary">
              One precise diagnostic protocol. No recurring subscriptions.
            </p>
          </div>
        </FadeUp>

        {/* Pricing card */}
        <FadeUp delay={0.15}>
          <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl bg-white shadow-[0_16px_48px_rgba(0,0,0,0.1)]">
            <div className="grid gap-0 md:grid-cols-2">
              {/* Left: Price */}
              <div className="flex flex-col justify-center p-10 md:p-14">
                <span className="inline-block w-fit rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                  {pricingContent.badge}
                </span>
                <p
                  className="mt-6 text-6xl font-bold tracking-tight text-text md:text-7xl"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  {pricingContent.price}
                </p>
                <p className="mt-2 text-base text-text-secondary">
                  One-time investment
                </p>
                <a
                  href="#"
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:brightness-110"
                >
                  {pricingContent.cta}
                </a>
                <p className="mt-4 text-center text-xs text-text-muted">
                  HSA / FSA eligible
                </p>
              </div>

              {/* Right: Deliverables */}
              <div className="border-t border-border/40 bg-cream/50 p-10 md:border-l md:border-t-0 md:p-14">
                <p className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
                  What you receive
                </p>
                <ul className="mt-6 space-y-5">
                  {pricingContent.deliverables.map((item) => (
                    <li key={item.title} className="flex gap-4">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <p className="font-semibold text-text">{item.title}</p>
                        <p className="mt-0.5 text-sm text-text-secondary">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Trust badges */}
        <FadeUp delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-10 opacity-50">
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <Shield className="h-5 w-5" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <RotateCcw className="h-5 w-5" />
              <span>30-Day Money Back</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <Lock className="h-5 w-5" />
              <span>256-bit Encrypted</span>
            </div>
          </div>
        </FadeUp>

        {/* Terminal preview */}
        <FadeUp delay={0.4}>
          <div className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-2xl bg-dark-surface shadow-[0_24px_48px_rgba(0,0,0,0.15)]">
            {/* macOS dots */}
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
              <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
              <span className="h-3 w-3 rounded-full bg-[#28CA41]" />
              <span className="ml-4 text-xs text-white/40">
                your-protocol.json
              </span>
            </div>
            <div className="p-6" style={{ fontFamily: "var(--font-mono)" }}>
              <pre className="text-sm leading-relaxed text-white/70 overflow-x-auto">
                <code>
{`{
  "patient_id": "DG-29481",
  "protocol_version": "3.2",
  "supplements": [
    { "name": "Methylfolate", "dose": "800mcg", "timing": "AM" },
    { "name": "Omega-3 EPA/DHA", "dose": "2g", "timing": "PM" },
    { "name": "Vitamin D3+K2", "dose": "5000IU", "timing": "AM" }
  ],
  "confidence_score": 0.94,
  "reviewed_by": "Dr. Sarah Chen, MD"
}`}
                </code>
              </pre>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
