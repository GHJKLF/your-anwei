import Image from "next/image";
import Link from "next/link";
import { PRODUCT } from "@/lib/config";

export default function Home() {
  return (
    <>
      {/* Hero - Full screen dark */}
      <section className="relative min-h-screen bg-midnight grain flex items-center overflow-hidden">
        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: "radial-gradient(ellipse at 70% 50%, rgba(200,169,110,0.12) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-10">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            {/* Left - Copy */}
            <div>
              <span className="gold-line animate-fade-up" />
              <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.25em] text-gold/60 animate-fade-up delay-100">
                German Engineered Precision
              </p>
              <h1 className="mt-5 font-heading text-5xl font-semibold leading-[1.1] text-cream animate-fade-up delay-200 sm:text-6xl lg:text-7xl">
                One Pass.
                <br />
                Zero Streaks.
                <br />
                <span className="text-gold">Finally.</span>
              </h1>
              <p className="mt-8 max-w-md text-base leading-[1.8] text-cream/40 animate-fade-up delay-300">
                The AquaBLADE kit replaces paper towels, cheap squeegees, and
                endless frustration. Medical-grade silicone. Stainless steel
                core. One pass is all it takes.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-5 animate-fade-up delay-400">
                <Link
                  href="/product"
                  className="bg-gold px-10 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-midnight transition-all duration-300 hover:bg-gold-light cursor-pointer"
                >
                  Discover the Kit
                </Link>
                <Link
                  href="/product#how-it-works"
                  className="group flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.15em] text-cream/40 transition-colors duration-300 hover:text-gold cursor-pointer"
                >
                  How It Works
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="14 7 19 12 14 17" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right - Product Image */}
            <div className="relative animate-fade-up delay-300">
              <div className="relative aspect-square">
                <Image
                  src="/images/hero-product.webp"
                  alt="AquaBLADE Squeegee Kit"
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-gold/10" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* Value Props - Cream */}
      <section className="bg-ivory py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-16">
            {[
              {
                number: "01",
                title: "Streak-Free",
                desc: "Medical-grade silicone blade delivers a flawless finish on every surface.",
              },
              {
                number: "02",
                title: "German Made",
                desc: "Precision-engineered with stainless steel core and premium materials.",
              },
              {
                number: "03",
                title: "Zero Waste",
                desc: "Replace hundreds of paper towels with one tool that lasts 5+ years.",
              },
              {
                number: "04",
                title: `${PRODUCT.reviewCount.toLocaleString()}+ Reviews`,
                desc: `Rated ${PRODUCT.rating}/5 by verified customers who made the switch.`,
              },
            ].map((prop) => (
              <div key={prop.number}>
                <span className="text-[11px] font-medium text-gold/60">{prop.number}</span>
                <h3 className="mt-3 font-heading text-2xl font-medium text-charcoal">
                  {prop.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.7] text-slate">
                  {prop.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - Dark strip */}
      <section className="relative bg-midnight grain py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <p className="font-heading text-2xl font-medium text-cream/60 sm:text-3xl">
            Join{" "}
            <span className="text-gold">
              {PRODUCT.reviewCount.toLocaleString()}+
            </span>{" "}
            people who stopped fighting streaky glass.
          </p>
          <Link
            href="/product"
            className="mt-8 inline-flex items-center gap-2 border border-gold/30 px-8 py-3.5 text-[13px] font-medium uppercase tracking-[0.15em] text-gold transition-all duration-300 hover:bg-gold hover:text-midnight cursor-pointer"
          >
            See the Kit
          </Link>
        </div>
      </section>
    </>
  );
}
