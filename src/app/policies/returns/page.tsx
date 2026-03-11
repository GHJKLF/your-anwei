import Link from "next/link";

export default function ReturnsPage() {
  return (
    <div className="pt-16">
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h1 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
            Returns &amp; Refund Policy
          </h1>
          <p className="mt-4 text-sm text-slate">
            Last updated: March 2026
          </p>

          <div className="mt-10 space-y-8">
            <div>
              <h2 className="font-heading text-xl font-semibold text-charcoal">
                30-Day Satisfaction Guarantee
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                We stand behind every AquaBLADE kit. If you are not completely
                satisfied with your purchase, you may return it within 30 days of
                delivery for a full refund. No questions asked.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-charcoal">
                How to Return
              </h2>
              <ol className="mt-3 space-y-3 text-sm leading-relaxed text-slate">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sage text-xs font-bold text-white">
                    1
                  </span>
                  <span>
                    Email{" "}
                    <a
                      href="mailto:support@aquablade.com"
                      className="font-semibold text-sage-dark underline underline-offset-2 transition-colors duration-200 hover:text-sage cursor-pointer"
                    >
                      support@aquablade.com
                    </a>{" "}
                    with your order number and reason for return.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sage text-xs font-bold text-white">
                    2
                  </span>
                  <span>
                    We will send you a prepaid return shipping label within one
                    business day.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sage text-xs font-bold text-white">
                    3
                  </span>
                  <span>
                    Ship the item back using the label provided. Your refund will
                    be processed within 3-5 business days of receipt.
                  </span>
                </li>
              </ol>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-charcoal">
                Condition
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                Items may be returned in any condition, used or unused. We want
                you to try it. If it does not meet your expectations, send it
                back and we will cover the return shipping.
              </p>
            </div>

            <div className="rounded-2xl border border-sage-light/30 bg-sage/5 p-5 sm:p-6">
              <p className="text-sm leading-relaxed text-charcoal">
                Have questions about a return?{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-sage-dark underline underline-offset-2 transition-colors duration-200 hover:text-sage cursor-pointer"
                >
                  Contact us
                </Link>{" "}
                and we will help you through the process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
