import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Returns & Refund Policy | AquaBLADE",
};

export default function ReturnsPage() {
  return (
    <>
      <section className="relative bg-ocean grain pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="teal-bar" />
          <h1 className="mt-6 font-heading text-3xl font-semibold text-cloud sm:text-4xl">Returns &amp; Refund Policy</h1>
          <p className="mt-3 text-[12px] text-cloud/30">Last updated: March 2026</p>
        </div>
      </section>
      <section className="bg-glass py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 space-y-10">
          <div>
            <h2 className="font-heading text-xl font-medium text-ink">30-Day Satisfaction Guarantee</h2>
            <p className="mt-4 text-sm leading-[1.7] text-stone">
              We stand behind every AquaBLADE kit. If you are not completely satisfied, return it within 30 days of delivery for a full refund. No questions asked.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-medium text-ink">How to Return</h2>
            <ol className="mt-4 space-y-4 text-sm leading-[1.7] text-stone">
              <li className="flex items-start gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-aqua/30 text-[12px] font-medium text-aqua">1</span>
                <span>Email <a href="mailto:support@anwei.com" className="text-aqua hover:text-aqua-light cursor-pointer">support@anwei.com</a> with your order number.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-aqua/30 text-[12px] font-medium text-aqua">2</span>
                <span>We will send a prepaid return label within one business day.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-aqua/30 text-[12px] font-medium text-aqua">3</span>
                <span>Ship it back. Refund processed within 3-5 business days.</span>
              </li>
            </ol>
          </div>
          <div>
            <h2 className="font-heading text-xl font-medium text-ink">Condition</h2>
            <p className="mt-4 text-sm leading-[1.7] text-stone">
              Items may be returned in any condition, used or unused. We want you to try it. If it does not meet your expectations, send it back and we cover the return shipping.
            </p>
          </div>
          <div className="border border-aqua/20 bg-aqua/5 p-6">
            <p className="text-sm text-ink">
              Questions about a return? <Link href="/contact" className="text-aqua hover:text-aqua-light cursor-pointer">Contact us</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
