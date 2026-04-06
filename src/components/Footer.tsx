const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "What We Analyze", href: "#science" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Science",
    links: [
      { label: "Research", href: "#" },
      { label: "Publications", href: "#" },
      { label: "Clinical Advisory", href: "#" },
      { label: "Methodology", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "HIPAA Notice", href: "#" },
      { label: "Data Deletion", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark px-6 pt-20 pb-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-5">
          {/* Brand column */}
          <div className="md:col-span-1">
            <a
              href="#"
              className="text-xl font-bold tracking-tight text-white"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              DioGen
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              Precision health protocols built on your DNA and blood data.
            </p>
          </div>

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
        </div>

        {/* Disclaimer */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-xs leading-relaxed text-white/45">
            DioGen does not provide medical diagnoses. All protocols are
            generated using peer-reviewed research and reviewed by licensed
            physicians. Results are informational and should be discussed with
            your healthcare provider before making any changes to your health
            regimen. Individual results may vary based on genetics, lifestyle,
            and other factors.
          </p>
          <p className="mt-6 text-xs text-white/45">
            &copy; {new Date().getFullYear()} DioGen Health, Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
