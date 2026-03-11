import Link from "next/link";
import { NAV_LINKS, POLICY_LINKS } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="relative bg-ocean grain" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 lg:px-10">
        {/* Top section */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <h3 className="font-heading text-2xl font-semibold tracking-wide text-cloud">
              AQUA<span className="text-aqua">BLADE</span>
            </h3>
            <span className="teal-bar mt-4" />
            <p className="mt-6 text-sm leading-relaxed text-cloud/40">
              Precision glass cleaning, engineered in Germany. Every detail
              considered. Every surface perfected.
            </p>
            <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.2em] text-aqua/60">
              German Engineered &middot; Built to Last
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-aqua/60">
              Navigate
            </h4>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cloud/40 transition-colors duration-300 hover:text-aqua cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-aqua/60">
              Legal
            </h4>
            <ul className="mt-5 space-y-3">
              {POLICY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cloud/40 transition-colors duration-300 hover:text-aqua cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-aqua/10" />

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-4" aria-label="Payment methods">
            {["Visa", "Mastercard", "Amex", "PayPal"].map((m) => (
              <span
                key={m}
                className="text-[11px] font-medium uppercase tracking-wider text-cloud/20"
              >
                {m}
              </span>
            ))}
          </div>
          <p className="text-[11px] tracking-wider text-cloud/20">
            &copy; {new Date().getFullYear()} AquaBLADE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
