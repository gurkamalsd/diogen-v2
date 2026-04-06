import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqItems } from "../data/content";
import FadeUp from "./FadeUp";

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border/60">
      <button
        className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:opacity-80"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-base md:text-lg font-semibold text-text">
          {question}
        </span>
        {open ? (
          <Minus className="h-5 w-5 flex-shrink-0 text-text-secondary" />
        ) : (
          <Plus className="h-5 w-5 flex-shrink-0 text-text-secondary" />
        )}
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{
          gridTemplateRows: open ? "1fr" : "0fr",
        }}
      >
        <div className="overflow-hidden">
          <p className="pb-6 text-base leading-relaxed text-text-secondary">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-cream px-6 py-[120px] md:py-[160px]">
      <div className="mx-auto max-w-3xl">
        <FadeUp>
          <h2 className="text-center text-4xl md:text-5xl font-[family-name:var(--font-headline)] font-medium tracking-[-0.03em] text-text">
            Common questions
          </h2>
        </FadeUp>

        <div className="mt-14 border-t border-border/60">
          {faqItems.map((item, i) => (
            <FadeUp key={item.question} delay={i * 0.06}>
              <FAQItem question={item.question} answer={item.answer} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
