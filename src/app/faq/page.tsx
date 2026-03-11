import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | AquaBLADE - Common Questions Answered",
};

export default function FAQPage() {
  return (
    <>
      <section className="relative bg-ocean grain pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="teal-bar" />
          <h1 className="mt-6 font-heading text-4xl font-semibold text-cloud sm:text-5xl">
            Questions & Answers
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-[1.8] text-cloud/40">
            Everything you need to know about AquaBLADE. Can&apos;t find your answer?{" "}
            <Link href="/contact" className="text-aqua transition-colors hover:text-aqua-light cursor-pointer">
              Contact us
            </Link>.
          </p>
        </div>
      </section>

      <section className="bg-glass py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FAQAccordion />
        </div>
      </section>

      <section className="bg-ocean py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <h2 className="font-heading text-2xl font-bold text-cloud sm:text-3xl">Ready for Streak-Free Glass?</h2>
          <p className="mt-4 text-cloud/60">Join 2,847+ happy customers who switched to AquaBLADE.</p>
          <a href="/product" className="mt-8 inline-block rounded-lg bg-coral px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-coral-light">Shop Now</a>
        </div>
      </section>
    </>
  );
}
