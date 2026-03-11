import FAQAccordion from "@/components/FAQAccordion";
import Link from "next/link";

export default function FAQPage() {
  return (
    <>
      <section className="relative bg-midnight grain pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="gold-line" />
          <h1 className="mt-6 font-heading text-4xl font-semibold text-cream sm:text-5xl">
            Questions & Answers
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-[1.8] text-cream/40">
            Everything you need to know about AquaBLADE. Can&apos;t find your answer?{" "}
            <Link href="/contact" className="text-gold transition-colors hover:text-gold-light cursor-pointer">
              Contact us
            </Link>.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FAQAccordion />
        </div>
      </section>
    </>
  );
}
