import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/content";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 h-16">
        {/* Wordmark */}
        <a
          href="#"
          className="font-[family-name:var(--font-headline)] text-xl font-bold tracking-tight text-white"
        >
          DioGen
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side: Login + CTA + Mobile toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden text-sm text-white/60 transition-colors hover:text-white md:inline-block cursor-pointer"
          >
            Login
          </a>
          <a
            href="#pricing"
            className="bg-lime text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-lime-hover transition-colors"
          >
            Get Started
          </a>
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-black/95 px-6 pb-6 pt-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-base font-medium text-white/70 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className="mt-2 block py-3 text-base font-medium text-white/50 hover:text-white"
            onClick={() => setMobileOpen(false)}
          >
            Login
          </a>
          <a
            href="#pricing"
            className="mt-4 block rounded-full bg-lime px-6 py-3 text-center text-sm font-bold text-black"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
