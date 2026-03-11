import Image from "next/image";
import Link from "next/link";
import { PRODUCT } from "@/lib/config";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
                Professional-Grade Glass Cleaning
              </p>
              <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-charcoal sm:text-5xl lg:text-6xl">
                One Pass.
                <br />
                Zero Streaks.
                <br />
                <span className="text-sage">Finally.</span>
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-slate sm:text-lg">
                The AquaBLADE kit replaces paper towels, cheap squeegees, and
                endless frustration. Medical-grade silicone. German-engineered.
                One pass is all it takes.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/product"
                  className="inline-flex items-center justify-center rounded-lg bg-sage px-7 py-3 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-sage-dark hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 active:scale-[0.98] cursor-pointer"
                >
                  Shop Now
                </Link>
                <Link
                  href="/product#how-it-works"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-sage-dark transition-colors duration-200 hover:text-sage cursor-pointer"
                >
                  See How It Works
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right */}
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-cream">
              <Image
                src="/images/hero-product.webp"
                alt="AquaBLADE Squeegee Kit displayed on a clean surface"
                fill
                className="object-contain p-8"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {[
              {
                title: "Streak-Free",
                description:
                  "Medical-grade silicone blade delivers a flawless finish every time.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                ),
              },
              {
                title: "Made in Germany",
                description:
                  "Precision-engineered with stainless steel core and premium materials.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
              },
              {
                title: "Eco-Friendly",
                description:
                  "Zero waste. Replace hundreds of paper towels with one tool that lasts 5+ years.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 2a10 10 0 1 0 10 10" />
                    <path d="M12 2v10l7-7" />
                  </svg>
                ),
              },
              {
                title: `${PRODUCT.rating}/5 Stars`,
                description: `Rated by ${PRODUCT.reviewCount.toLocaleString()}+ verified customers who made the switch.`,
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ),
              },
            ].map((prop) => (
              <div key={prop.title} className="text-center sm:text-left">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-sage/10 text-sage sm:mx-0">
                  {prop.icon}
                </div>
                <h3 className="font-heading text-lg font-semibold text-charcoal">
                  {prop.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Banner */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <p className="text-base text-slate sm:text-lg">
            Join{" "}
            <span className="font-semibold text-charcoal">
              {PRODUCT.reviewCount.toLocaleString()}+
            </span>{" "}
            happy customers who ditched streaky windows for good.
          </p>
          <Link
            href="/product"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-sage-dark transition-colors duration-200 hover:text-sage cursor-pointer"
          >
            See the AquaBLADE Kit
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
