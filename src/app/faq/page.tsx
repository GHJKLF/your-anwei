import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";

export default function FAQPage() {
  return (
    <div className="pt-16">
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-center font-heading text-3xl font-bold text-charcoal sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-slate sm:text-base">
            Can&apos;t find the answer you&apos;re looking for? Reach out to our team on
            the{" "}
            <Link
              href="/contact"
              className="font-semibold text-sage-dark underline underline-offset-2 transition-colors duration-200 hover:text-sage cursor-pointer"
            >
              contact page
            </Link>
            .
          </p>
          <div className="mt-10">
            <FAQAccordion />
          </div>
        </div>
      </section>
    </div>
  );
}
