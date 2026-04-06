import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/85 shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
      style={{
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Wordmark */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-primary"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          DioGen
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-secondary transition-opacity hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#pricing"
            className="hidden rounded-full bg-dark px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 md:inline-block"
          >
            Get your protocol
          </a>
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6 text-text" />
            ) : (
              <Menu className="h-6 w-6 text-text" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border/40 bg-cream px-6 pb-6 pt-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-base font-medium text-text-secondary"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            className="mt-4 block rounded-full bg-dark px-6 py-3 text-center text-sm font-semibold text-white"
            onClick={() => setMobileOpen(false)}
          >
            Get your protocol
          </a>
        </div>
      )}
    </nav>
  );
}
