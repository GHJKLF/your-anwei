import Link from "next/link";

export default function ShippingPage() {
  return (
    <div className="pt-16">
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h1 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
            Shipping Policy
          </h1>
          <p className="mt-4 text-sm text-slate">
            Last updated: March 2026
          </p>

          <div className="mt-10 space-y-8">
            <div>
              <h2 className="font-heading text-xl font-semibold text-charcoal">
                Shipping Rates
              </h2>
              <div className="mt-4 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 bg-cream/50">
                      <th className="px-5 py-3 text-left font-semibold text-charcoal">
                        Destination
                      </th>
                      <th className="px-5 py-3 text-right font-semibold text-charcoal">
                        Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { dest: "United States (Continental)", rate: "Free" },
                      { dest: "Canada", rate: "$9.99" },
                      { dest: "United Kingdom", rate: "$12.99" },
                      { dest: "Australia", rate: "$14.99" },
                    ].map((row) => (
                      <tr key={row.dest}>
                        <td className="px-5 py-3 text-charcoal">{row.dest}</td>
                        <td className="px-5 py-3 text-right font-semibold text-sage-dark">
                          {row.rate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm text-slate">
                For destinations not listed, shipping rates will be calculated at
                checkout.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-charcoal">
                Delivery Times
              </h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sage" />
                  <span>
                    <strong className="text-charcoal">US orders:</strong> 2-3
                    business days via USPS Priority Mail
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sage" />
                  <span>
                    <strong className="text-charcoal">Canada &amp; UK:</strong>{" "}
                    5-8 business days
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sage" />
                  <span>
                    <strong className="text-charcoal">Australia:</strong> 7-12
                    business days
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sage" />
                  <span>
                    <strong className="text-charcoal">
                      Expedited shipping:
                    </strong>{" "}
                    Available at checkout for an additional fee
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-charcoal">
                Order Tracking
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                Once your order ships, you will receive a confirmation email with
                a tracking number. You can track your package at any time using
                the link provided. If you have not received a tracking email
                within 2 business days, please{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-sage-dark underline underline-offset-2 transition-colors duration-200 hover:text-sage cursor-pointer"
                >
                  contact us
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
