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
          <div className="flex items-center gap-2" aria-label="Payment methods">
            {/* Visa */}
            <div className="flex h-7 w-11 items-center justify-center rounded bg-cloud/10">
              <span className="text-[10px] font-bold italic text-cloud">VISA</span>
            </div>
            {/* Mastercard */}
            <div className="flex h-7 w-11 items-center justify-center rounded bg-cloud/10">
              <svg width="24" height="16" viewBox="0 0 24 16" fill="none" aria-hidden="true">
                <circle cx="9" cy="8" r="6" fill="#EB001B" opacity="0.9"/>
                <circle cx="15" cy="8" r="6" fill="#F79E1B" opacity="0.9"/>
                <path d="M12 3.2a6 6 0 010 9.6 6 6 0 000-9.6z" fill="#FF5F00"/>
              </svg>
            </div>
            {/* Amex */}
            <div className="flex h-7 w-11 items-center justify-center rounded bg-cloud/10">
              <span className="text-[8px] font-bold text-cloud tracking-wider">AMEX</span>
            </div>
            {/* PayPal */}
            <div className="flex h-7 w-11 items-center justify-center rounded bg-cloud/10">
              <span className="text-[9px] font-bold text-[#00457C]">Pay</span>
              <span className="text-[9px] font-bold text-[#0079C1]">Pal</span>
            </div>
          </div>
          <p className="text-[11px] tracking-wider text-cloud/20">
            &copy; {new Date().getFullYear()} AquaBLADE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
