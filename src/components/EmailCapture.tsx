import { useState } from "react";
import FadeUp from "./FadeUp";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-cream px-6 py-[120px] md:py-[160px]">
      <div className="mx-auto max-w-2xl text-center">
        <FadeUp>
          <h2
            className="text-4xl font-bold tracking-[-0.02em] text-text md:text-5xl"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Your path to precision health starts here
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg text-text-secondary">
            Join the waitlist for early access, research updates, and
            launch pricing.
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          {submitted ? (
            <div className="mt-10 rounded-2xl bg-white p-8 shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
              <p className="text-lg font-semibold text-text">
                You're on the list.
              </p>
              <p className="mt-2 text-text-secondary">
                We'll reach out when your slot opens.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-full border border-border bg-white px-6 py-4 text-base text-text placeholder:text-text-muted outline-none transition-shadow focus:shadow-[0_0_0_3px_rgba(0,96,171,0.15)] focus:border-primary"
              />
              <button
                type="submit"
                className="rounded-full bg-dark px-8 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90"
              >
                Subscribe
              </button>
            </form>
          )}
        </FadeUp>
      </div>
    </section>
  );
}
