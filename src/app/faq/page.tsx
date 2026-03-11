import FAQAccordion from "@/components/FAQAccordion";
import Link from "next/link";

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
    </>
  );
}
