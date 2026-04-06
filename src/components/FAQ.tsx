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
    <div className="overflow-hidden rounded-xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
      <button
        className="flex w-full items-center justify-between gap-4 px-7 py-6 text-left transition-colors hover:bg-cream/50"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-text">{question}</span>
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
          <p className="px-7 pb-6 text-base leading-relaxed text-text-secondary">
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
          <h2
            className="text-center text-4xl font-bold tracking-[-0.02em] text-text md:text-5xl"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Common questions
          </h2>
        </FadeUp>

        <div className="mt-14 space-y-4">
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
