import { useState } from "react";

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "What We Analyze", href: "#science" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Support", href: "#" },
      { label: "Refund Policy", href: "#" },
    ],
  },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "X", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Facebook", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <footer className="bg-dark px-6 pt-20 pb-12">
      <div className="mx-auto max-w-7xl">
        {/* Top row: Logo + Social */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="#"
            className="text-xl font-bold tracking-tight text-white font-[family-name:var(--font-headline)]"
          >
            DioGen
          </a>
          <div className="flex items-center gap-5">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="text-xs text-white/40 hover:text-white transition-colors"
                aria-label={s.label}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-white/10" />

        {/* Columns + Mailing list */}
        <div className="mt-10 grid gap-12 md:grid-cols-5">
          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Mailing list */}
          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Join our mailing list
            </p>
            <p className="mt-3 text-sm text-white/50 leading-relaxed">
              Research updates, product news, and launch announcements.
            </p>
            {submitted ? (
              <p className="mt-4 text-sm text-lime font-medium">
                You're on the list.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-4 flex gap-2"
              >
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 rounded-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition-all focus:border-lime/50 focus:bg-white/10"
                />
                <button
                  type="submit"
                  className="rounded-full bg-lime px-5 py-2.5 text-sm font-bold text-black hover:bg-lime-hover transition-colors"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-[11px] leading-relaxed text-white/30">
            DioGen does not provide medical diagnoses. All protocols are
            generated using peer-reviewed research and reviewed by licensed
            physicians. Results are informational and should be discussed with
            your healthcare provider before making any changes to your health
            regimen. Individual results may vary based on genetics, lifestyle,
            and other factors. These statements have not been evaluated by the
            Food and Drug Administration. This product is not intended to
            diagnose, treat, cure, or prevent any disease.
          </p>
          <p className="mt-6 text-[11px] text-white/30">
            &copy; {new Date().getFullYear()} DioGen Health, Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
