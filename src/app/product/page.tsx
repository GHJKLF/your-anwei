"use client";

import { useState } from "react";
import Image from "next/image";
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

function StarRating({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill={i < Math.floor(rating) ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            className={
              i < Math.floor(rating) ? "text-terracotta" : "text-gray-300"
            }
            aria-hidden="true"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>
      <span className="text-sm text-slate">
        {rating} ({count.toLocaleString()} reviews)
      </span>
    </div>
  );
}

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);

  const currentPrice = quantity >= 2 ? 69.95 : 39.95;
  const comparePrice = quantity >= 2 ? 119.98 : 59.99;
  const savingsPercent = Math.round(
    ((comparePrice - currentPrice) / comparePrice) * 100
  );

  return (
    <div className="pt-16">
      {/* === 1. Hero === */}
      <section className="py-10 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Gallery */}
            <ProductGallery />

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
                Professional-Grade Kit
              </p>
              <h1 className="mt-2 font-heading text-3xl font-bold text-charcoal sm:text-4xl">
                {PRODUCT.name}
              </h1>

              <div className="mt-3">
                <StarRating
                  rating={PRODUCT.rating}
                  count={PRODUCT.reviewCount}
                />
              </div>

              {/* Price */}
              <div className="mt-5 flex items-baseline gap-3">
                <span className="font-heading text-3xl font-bold text-charcoal">
                  ${currentPrice.toFixed(2)}
                </span>
                <span className="text-lg text-gray-400 line-through">
                  ${comparePrice.toFixed(2)}
                </span>
                <span className="rounded-full bg-terracotta/10 px-2.5 py-0.5 text-xs font-semibold text-terracotta">
                  Save {savingsPercent}%
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate sm:text-base">
                {PRODUCT.tagline} The complete kit to clean every glass surface
                in your home. Medical-grade silicone blade, stainless steel core,
                and a streak-free concentrate that actually works.
              </p>

              {/* Quantity */}
              <div className="mt-6">
                <QuantitySelector onChange={setQuantity} />
              </div>

              {/* CTA */}
              <div className="mt-6">
                <CTAButton
                  text={`Buy Now - Streak-Free Guaranteed`}
                  quantity={quantity}
                  size="lg"
                  className="w-full sm:w-auto"
                />
              </div>

              {/* Trust Badges */}
              <div className="mt-6">
                <TrustBadges />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === 2. Video Demo === */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-charcoal sm:text-3xl">
            See It In Action
          </h2>
          <p className="mt-3 text-sm text-slate sm:text-base">
            Watch how the AquaBLADE delivers a perfect, streak-free finish in a
            single pass.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl bg-charcoal shadow-lg">
            <video
              controls
              poster="/images/video-poster.png"
              className="aspect-video w-full"
              preload="metadata"
            >
              <source src="/videos/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* === 3. Problem / Agitation === */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h2 className="font-heading text-2xl font-bold text-charcoal sm:text-3xl lg:text-4xl">
                &ldquo;No Matter What I Do,
                <br />
                It Still Streaks.&rdquo;
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate sm:text-base">
                You have tried paper towels. Newspaper. Microfiber cloths.
                Vinegar. That blue spray from the store. And somehow, every
                single time, you step back and see streaks, smudges, and lint
                staring right back at you.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate sm:text-base">
                It is not you. It is the tools. Consumer-grade squeegees use
                cheap rubber that degrades after weeks, skips on the surface, and
                leaves water behind. Paper towels shed fibers no matter how
                careful you are.
              </p>
              <p className="mt-4 text-sm font-semibold leading-relaxed text-charcoal sm:text-base">
                The AquaBLADE is the fix. One pass. Done.
              </p>
            </div>
            <BeforeAfter />
          </div>
        </div>
      </section>

      {/* === 4. How It Works === */}
      <section id="how-it-works" className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center font-heading text-2xl font-bold text-charcoal sm:text-3xl">
            4 Steps to Spotless Glass
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {[
              {
                step: 1,
                title: "Spray",
                description:
                  "Mist the surface with diluted AquaBLADE concentrate.",
              },
              {
                step: 2,
                title: "Scrub",
                description:
                  "Wipe with the included microfiber cloth to loosen grime.",
              },
              {
                step: 3,
                title: "Squeegee",
                description:
                  "Pull the AquaBLADE down in one smooth, even stroke.",
              },
              {
                step: 4,
                title: "Done",
                description:
                  "Spotless, streak-free glass. No buffing. No second pass.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sage text-xl font-bold text-white shadow-sm">
                  {item.step}
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === 5. Kit Contents === */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center font-heading text-2xl font-bold text-charcoal sm:text-3xl">
            Everything You Need, In One Box
          </h2>
          <div className="mt-8 space-y-0 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white shadow-sm">
            {PRODUCT.kitContents.map((item) => (
              <div
                key={item.item}
                className="flex items-center justify-between px-5 py-4 sm:px-6"
              >
                <div className="flex items-center gap-3">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 text-sage"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-sm font-medium text-charcoal sm:text-base">
                    {item.item}
                  </span>
                </div>
                <span className="text-sm text-slate">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-sage-light/30 bg-sage/5 px-5 py-5 text-center sm:px-6">
            <p className="text-sm text-slate">
              Total value:{" "}
              <span className="font-semibold text-charcoal line-through">
                $59.96
              </span>
            </p>
            <p className="mt-1 font-heading text-2xl font-bold text-sage-dark">
              Your price: ${PRODUCT.price}
            </p>
          </div>
        </div>
      </section>

      {/* === 6. Comparison Table === */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-center font-heading text-2xl font-bold text-charcoal sm:text-3xl">
            How AquaBLADE Compares
          </h2>
          <div className="mt-8">
            <ComparisonTable />
          </div>
          <div className="mt-8 text-center">
            <CTAButton
              text="Get the Best Tool for the Job"
              quantity={quantity}
            />
          </div>
        </div>
      </section>

      {/* === 7. Reviews === */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center font-heading text-2xl font-bold text-charcoal sm:text-3xl">
            {PRODUCT.reviewCount.toLocaleString()}+ Happy Customers
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <CTAButton
              text="Join Them - Order Yours Today"
              quantity={quantity}
            />
          </div>
        </div>
      </section>

      {/* === 8. Use Cases === */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center font-heading text-2xl font-bold text-charcoal sm:text-3xl">
            Works On Every Surface
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-slate sm:text-base">
            Windows, mirrors, shower glass, cooktops, car windshields, and more.
          </p>
          <div className="mt-8">
            <UseCaseGrid />
          </div>
        </div>
      </section>

      {/* === 9. Cost Comparison === */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-center font-heading text-2xl font-bold text-charcoal sm:text-3xl">
            The Math Is Simple
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {/* Without */}
            <div className="rounded-2xl border border-gray-200 bg-gray-100 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Without AquaBLADE
              </p>
              <p className="mt-3 font-heading text-3xl font-bold text-charcoal">
                $118+<span className="text-lg font-normal text-slate">/year</span>
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "Paper towels: ~$60/year",
                  "Glass cleaner: ~$30/year",
                  "Cheap squeegees: ~$28/year",
                  "Still get streaks",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-slate"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 flex-shrink-0 text-terracotta"
                      aria-hidden="true"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* With */}
            <div className="rounded-2xl border-2 border-sage bg-sage/5 p-6 shadow-md sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-sage">
                With AquaBLADE
              </p>
              <p className="mt-3 font-heading text-3xl font-bold text-sage-dark">
                $39.95
                <span className="text-lg font-normal text-slate">
                  {" "}one-time
                </span>
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "Complete kit included",
                  "Lasts 5+ years",
                  "Zero waste",
                  "Streak-free every time",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-charcoal"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 flex-shrink-0 text-sage"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* === 10. Guarantee === */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-charcoal sm:text-3xl">
            Streak-Free or Free
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate sm:text-base">
            We are so confident in the AquaBLADE that we back every kit with a
            30-day, no-questions-asked guarantee. If you are not blown away by
            the results, send it back in any condition and we will refund every
            cent. We even cover return shipping.
          </p>
          <div className="mt-6 inline-flex flex-col items-start gap-2.5 text-left">
            {[
              "Full refund within 30 days",
              "Return in any condition",
              "We cover return shipping",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-charcoal"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-sage"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {item}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <CTAButton
              text="Try It Risk-Free"
              quantity={quantity}
              size="lg"
            />
          </div>
        </div>
      </section>

      {/* === 11. FAQ === */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center font-heading text-2xl font-bold text-charcoal sm:text-3xl">
            Common Questions
          </h2>
          <div className="mt-8">
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* === 12. Final CTA === */}
      <section className="bg-sage py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
            Ready for Spotless Glass?
          </h2>
          <p className="mt-4 text-base text-white/80">
            The complete AquaBLADE kit. Everything you need. One price.
          </p>
          <div className="mt-3 flex items-baseline justify-center gap-3">
            <span className="font-heading text-4xl font-bold text-white">
              ${currentPrice.toFixed(2)}
            </span>
            <span className="text-lg text-white/50 line-through">
              ${comparePrice.toFixed(2)}
            </span>
          </div>
          <div className="mt-6">
            <CTAButton
              text="Get Your AquaBLADE Kit Now"
              quantity={quantity}
              size="lg"
              className="bg-white text-sage-dark hover:bg-cream"
            />
          </div>
          <p className="mt-4 text-xs text-white/60">
            Free US shipping. 30-day money-back guarantee.
          </p>
        </div>
      </section>

      {/* === 13. Email Capture === */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <h2 className="text-center font-heading text-xl font-bold text-charcoal sm:text-2xl">
            Get 10% Off Your First Order
          </h2>
          <p className="mt-2 text-center text-sm text-slate">
            Join our list for tips, deals, and cleaning hacks.
          </p>
          <div className="mt-6">
            <EmailCapture />
          </div>
        </div>
      </section>
    </div>
  );
}
