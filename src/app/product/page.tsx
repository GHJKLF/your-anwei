"use client";

import { useState } from "react";
import { PRODUCT, FAQ_ITEMS } from "@/lib/config";
import { REVIEWS } from "@/lib/reviews";
import ProductGallery from "@/components/ProductGallery";
import QuantitySelector from "@/components/QuantitySelector";
import CTAButton from "@/components/CTAButton";
import TrustBadges from "@/components/TrustBadges";
import BeforeAfter from "@/components/BeforeAfter";
import ComparisonTable from "@/components/ComparisonTable";
import ReviewCard from "@/components/ReviewCard";
import UseCaseGrid from "@/components/UseCaseGrid";
import FAQAccordion from "@/components/FAQAccordion";
import EmailCapture from "@/components/EmailCapture";

function Stars({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill={i < Math.floor(rating) ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.5"
            className={i < Math.floor(rating) ? "text-gold" : "text-border-light"}
            aria-hidden="true"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>
      <span className="text-[12px] text-slate">
        {rating} ({count.toLocaleString()} reviews)
      </span>
    </div>
  );
}

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);

  const price = quantity >= 2 ? 69.95 : 39.95;
  const compare = quantity >= 2 ? 119.98 : 59.99;
  const pct = Math.round(((compare - price) / compare) * 100);

  return (
    <>
      {/* === 1. HERO === */}
      <section className="bg-ivory pt-28 pb-20 sm:pt-32 sm:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <ProductGallery />

            <div className="flex flex-col justify-center">
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-gold/70">
                Complete Kit
              </span>
              <h1 className="mt-3 font-heading text-3xl font-semibold text-charcoal sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                {PRODUCT.name}
              </h1>

              <div className="mt-4">
                <Stars rating={PRODUCT.rating} count={PRODUCT.reviewCount} />
              </div>

              {/* Price */}
              <div className="mt-6 flex items-baseline gap-4">
                <span className="font-heading text-3xl font-semibold text-charcoal">
                  ${price.toFixed(2)}
                </span>
                <span className="text-base text-slate-light line-through">
                  ${compare.toFixed(2)}
                </span>
                <span className="border border-gold/30 bg-gold/5 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-gold">
                  Save {pct}%
                </span>
              </div>

              <p className="mt-6 max-w-md text-sm leading-[1.8] text-slate">
                {PRODUCT.tagline} The complete kit to clean every glass surface
                in your home. Medical-grade silicone blade, stainless steel core,
                and a streak-free concentrate that actually works.
              </p>

              <div className="mt-8">
                <QuantitySelector onChange={setQuantity} />
              </div>

              <div className="mt-8">
                <CTAButton
                  text="Add to Cart"
                  quantity={quantity}
                  size="lg"
                  className="w-full sm:w-auto"
                />
              </div>

              <div className="mt-8">
                <TrustBadges />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === 2. VIDEO DEMO === */}
      <section className="relative bg-midnight grain py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="text-center">
            <span className="gold-line mx-auto" />
            <h2 className="mt-6 font-heading text-3xl font-medium text-cream sm:text-4xl">
              See It In Action
            </h2>
            <p className="mt-4 text-sm text-cream/40">
              Watch the AquaBLADE deliver a perfect finish in a single pass.
            </p>
          </div>
          <div className="mt-12 overflow-hidden border border-gold/10">
            <video
              controls
              poster="/images/video-poster.png"
              className="aspect-video w-full"
              preload="metadata"
            >
              <source src="/videos/demo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* === 3. PROBLEM / AGITATION === */}
      <section className="bg-ivory py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="gold-line" />
              <h2 className="mt-6 font-heading text-3xl font-medium text-charcoal sm:text-4xl lg:text-[2.5rem]">
                &ldquo;No Matter What I Do,
                <br />
                It Still Streaks.&rdquo;
              </h2>
              <p className="mt-6 text-sm leading-[1.8] text-slate">
                You have tried paper towels. Newspaper. Microfiber cloths.
                Vinegar. That blue spray from the store. And somehow, every
                single time, you step back and see streaks, smudges, and lint
                staring right back at you.
              </p>
              <p className="mt-4 text-sm leading-[1.8] text-slate">
                It is not you. It is the tools. Consumer-grade squeegees use
                cheap rubber that degrades after weeks, skips on the surface, and
                leaves water behind.
              </p>
              <p className="mt-6 text-sm font-medium text-charcoal">
                The AquaBLADE is the fix. One pass. Done.
              </p>
            </div>
            <BeforeAfter />
          </div>
        </div>
      </section>

      {/* === 4. HOW IT WORKS === */}
      <section id="how-it-works" className="relative bg-midnight grain py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center">
            <span className="gold-line mx-auto" />
            <h2 className="mt-6 font-heading text-3xl font-medium text-cream sm:text-4xl">
              Four Steps. Spotless Glass.
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
            {[
              { n: "01", title: "Spray", desc: "Mist the surface with diluted concentrate." },
              { n: "02", title: "Scrub", desc: "Wipe with the microfiber cloth to loosen grime." },
              { n: "03", title: "Squeegee", desc: "Pull the AquaBLADE down in one smooth stroke." },
              { n: "04", title: "Done", desc: "Spotless glass. No buffing. No second pass." },
            ].map((step) => (
              <div key={step.n} className="text-center">
                <span className="inline-block font-heading text-5xl font-semibold text-gold/20">
                  {step.n}
                </span>
                <h3 className="mt-4 font-heading text-xl font-medium text-cream">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/40">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === 5. KIT CONTENTS === */}
      <section className="bg-ivory py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="text-center">
            <span className="gold-line mx-auto" />
            <h2 className="mt-6 font-heading text-3xl font-medium text-charcoal sm:text-4xl">
              Everything You Need
            </h2>
          </div>
          <div className="mt-12 border border-border-light divide-y divide-border-light">
            {PRODUCT.kitContents.map((item) => (
              <div
                key={item.item}
                className="flex items-center justify-between px-6 py-5"
              >
                <span className="text-sm font-medium text-charcoal">
                  {item.item}
                </span>
                <span className="text-sm text-slate-light">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 border border-gold/20 bg-gold/5 px-6 py-6 text-center">
            <p className="text-sm text-slate">
              Total value:{" "}
              <span className="line-through">$59.96</span>
            </p>
            <p className="mt-1 font-heading text-2xl font-semibold text-charcoal">
              Your price: <span className="text-gold">${PRODUCT.price}</span>
            </p>
          </div>
          <div className="mt-8 text-center">
            <CTAButton text="Get the Kit" quantity={quantity} />
          </div>
        </div>
      </section>

      {/* === 6. COMPARISON === */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="text-center">
            <span className="gold-line mx-auto" />
            <h2 className="mt-6 font-heading text-3xl font-medium text-charcoal sm:text-4xl">
              How It Compares
            </h2>
          </div>
          <div className="mt-12">
            <ComparisonTable />
          </div>
          <div className="mt-10 text-center">
            <CTAButton text="Choose the Best" quantity={quantity} variant="outline" />
          </div>
        </div>
      </section>

      {/* === 7. REVIEWS === */}
      <section className="bg-ivory py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center">
            <span className="gold-line mx-auto" />
            <h2 className="mt-6 font-heading text-3xl font-medium text-charcoal sm:text-4xl">
              {PRODUCT.reviewCount.toLocaleString()}+ Happy Customers
            </h2>
            <p className="mt-3 text-sm text-slate">
              Rated {PRODUCT.rating}/5 stars
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r) => (
              <ReviewCard key={r.name} review={r} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTAButton text="Join Them" quantity={quantity} />
          </div>
        </div>
      </section>

      {/* === 8. USE CASES === */}
      <section className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center sm:py-32 lg:px-10">
          <span className="gold-line mx-auto" />
          <h2 className="mt-6 font-heading text-3xl font-medium text-charcoal sm:text-4xl">
            One Tool. Every Surface.
          </h2>
          <p className="mt-4 text-sm text-slate">
            Windows, mirrors, shower glass, cooktops, car windshields, and more.
          </p>
        </div>
        <UseCaseGrid />
      </section>

      {/* === 9. COST COMPARISON === */}
      <section className="bg-ivory py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="text-center">
            <span className="gold-line mx-auto" />
            <h2 className="mt-6 font-heading text-3xl font-medium text-charcoal sm:text-4xl">
              The Math Is Simple
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {/* Without */}
            <div className="border border-border-light bg-white p-8">
              <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-slate-light">
                Without AquaBLADE
              </span>
              <p className="mt-4 font-heading text-4xl font-semibold text-charcoal">
                $118+
                <span className="text-lg font-normal text-slate">/year</span>
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Paper towels: ~$60/year",
                  "Glass cleaner: ~$30/year",
                  "Cheap squeegees: ~$28/year",
                  "Still get streaks",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate">
                    <span className="mt-1 text-slate-light" aria-hidden="true">&times;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* With */}
            <div className="border-2 border-gold bg-gold/5 p-8">
              <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-gold">
                With AquaBLADE
              </span>
              <p className="mt-4 font-heading text-4xl font-semibold text-charcoal">
                $39.95
                <span className="text-lg font-normal text-slate"> once</span>
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Complete kit included",
                  "Lasts 5+ years",
                  "Zero waste",
                  "Streak-free every time",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-charcoal">
                    <span className="mt-0.5 text-gold" aria-hidden="true">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 text-center">
            <CTAButton text="Save $78+ This Year" quantity={quantity} />
          </div>
        </div>
      </section>

      {/* === 10. GUARANTEE === */}
      <section className="relative bg-midnight grain py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <span className="gold-line mx-auto" />
          <h2 className="mt-6 font-heading text-3xl font-medium text-cream sm:text-4xl">
            Streak-Free or Free
          </h2>
          <p className="mt-6 text-sm leading-[1.8] text-cream/40">
            We are so confident in the AquaBLADE that we back every kit with a
            30-day, no-questions-asked guarantee. If you are not blown away by
            the results, send it back in any condition for a full refund.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-8">
            {[
              "Full refund within 30 days",
              "Return in any condition",
              "We cover return shipping",
            ].map((item) => (
              <span
                key={item}
                className="text-[12px] font-medium text-gold/70"
              >
                &#10003; {item}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <CTAButton
              text="Try It Risk-Free"
              quantity={quantity}
              size="lg"
              variant="outline"
            />
          </div>
        </div>
      </section>

      {/* === 11. FAQ === */}
      <section className="bg-ivory py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center">
            <span className="gold-line mx-auto" />
            <h2 className="mt-6 font-heading text-3xl font-medium text-charcoal sm:text-4xl">
              Common Questions
            </h2>
          </div>
          <div className="mt-12">
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* === 12. FINAL CTA === */}
      <section className="relative bg-midnight grain py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <h2 className="font-heading text-3xl font-medium text-cream sm:text-4xl">
            Ready for Perfect Glass?
          </h2>
          <div className="mt-6 flex items-baseline justify-center gap-4">
            <span className="font-heading text-4xl font-semibold text-gold">
              ${price.toFixed(2)}
            </span>
            <span className="text-lg text-cream/30 line-through">
              ${compare.toFixed(2)}
            </span>
          </div>
          <p className="mt-4 text-[12px] font-medium uppercase tracking-[0.15em] text-cream/30">
            Free US Shipping &middot; 30-Day Guarantee &middot; Made in Germany
          </p>
          <div className="mt-8">
            <CTAButton
              text="Get Your AquaBLADE Kit"
              quantity={quantity}
              size="lg"
            />
          </div>
        </div>
      </section>

      {/* === 13. EMAIL CAPTURE === */}
      <section className="bg-ivory py-20 sm:py-24">
        <div className="mx-auto max-w-xl px-6 text-center lg:px-10">
          <h2 className="font-heading text-2xl font-medium text-charcoal">
            Get 10% Off Your First Order
          </h2>
          <p className="mt-3 text-sm text-slate">
            Join our list for tips, deals, and cleaning hacks.
          </p>
          <div className="mt-8">
            <EmailCapture />
          </div>
        </div>
      </section>
    </>
  );
}
