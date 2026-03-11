"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/config";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ocean/95 backdrop-blur-xl shadow-[0_1px_0_rgba(200,169,110,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 cursor-pointer"
          >
            <span className="font-heading text-2xl font-semibold tracking-wide text-cloud sm:text-[1.65rem]">
              Your<span className="text-aqua">Anwei</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-10 md:flex" aria-label="Main">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium uppercase tracking-[0.15em] text-cloud/60 transition-colors duration-300 hover:text-aqua cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/product"
              className="ml-2 border border-aqua/40 px-6 py-2.5 text-[13px] font-medium uppercase tracking-[0.15em] text-aqua transition-all duration-300 hover:bg-aqua hover:text-ocean cursor-pointer"
            >
              Shop Now
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-cloud md:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="8" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-aqua/10 bg-ocean/98 backdrop-blur-xl md:hidden">
          <nav className="mx-auto max-w-7xl px-6 py-6" aria-label="Mobile">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-3 text-[13px] font-medium uppercase tracking-[0.15em] text-cloud/60 transition-colors duration-200 hover:text-aqua cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/product"
                className="mt-4 border border-aqua/40 px-6 py-3 text-center text-[13px] font-medium uppercase tracking-[0.15em] text-aqua transition-all duration-300 hover:bg-aqua hover:text-ocean cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                Shop Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
