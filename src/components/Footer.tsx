import Link from "next/link";
import { NAV_LINKS, POLICY_LINKS } from "@/lib/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="font-heading text-lg font-semibold tracking-tight">
              Aqua<span className="text-sage-light">BLADE</span>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-300">
              Professional-grade squeegee kit engineered in Germany.
              One pass. Zero streaks. Built to last.
            </p>
            <p className="mt-4 text-xs font-medium tracking-wider text-sage-light uppercase">
              Made in Germany
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Quick Links
            </h4>
            <ul className="mt-3 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors duration-200 hover:text-sage-light cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Policies
            </h4>
            <ul className="mt-3 space-y-2">
              {POLICY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors duration-200 hover:text-sage-light cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Badges & Copyright */}
        <div className="mt-10 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            {/* Payment icons */}
            <div className="flex items-center gap-3" aria-label="Accepted payment methods">
              {["Visa", "Mastercard", "Amex", "PayPal"].map((method) => (
                <span
                  key={method}
                  className="rounded bg-white/10 px-2.5 py-1 text-xs font-medium text-gray-300"
                >
                  {method}
                </span>
              ))}
            </div>

            <p className="text-xs text-gray-400">
              &copy; {currentYear} AquaBLADE. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
