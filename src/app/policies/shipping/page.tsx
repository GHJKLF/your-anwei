import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shipping Policy | AquaBLADE",
};

export default function ShippingPage() {
  return (
    <>
      <section className="relative bg-ocean grain pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="teal-bar" />
          <h1 className="mt-6 font-heading text-3xl font-semibold text-cloud sm:text-4xl">Shipping Policy</h1>
          <p className="mt-3 text-[12px] text-cloud/30">Last updated: March 2026</p>
        </div>
      </section>
      <section className="bg-glass py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 space-y-10">
          <div>
            <h2 className="font-heading text-xl font-medium text-ink">Shipping Rates</h2>
            <table className="mt-4 w-full border border-mist text-sm">
              <thead>
                <tr className="border-b border-mist">
                  <th scope="col" className="px-5 py-3.5 text-left font-medium text-ink">Destination</th>
                  <th scope="col" className="px-5 py-3.5 text-right font-medium text-ink">Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-mist">
                {[
                  { dest: "United States (Continental)", rate: "Free" },
                  { dest: "Canada", rate: "$9.99" },
                  { dest: "United Kingdom", rate: "$12.99" },
                  { dest: "Australia", rate: "$14.99" },
                ].map((r) => (
                  <tr key={r.dest}>
                    <td className="px-5 py-3.5 text-ink">{r.dest}</td>
                    <td className="px-5 py-3.5 text-right font-medium text-aqua">{r.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <h2 className="font-heading text-xl font-medium text-ink">Delivery Times</h2>
            <ul className="mt-4 space-y-3 text-sm leading-[1.7] text-stone">
              <li><strong className="text-ink">US orders:</strong> 2-3 business days via USPS Priority Mail</li>
              <li><strong className="text-ink">Canada &amp; UK:</strong> 5-8 business days</li>
              <li><strong className="text-ink">Australia:</strong> 7-12 business days</li>
              <li><strong className="text-ink">Expedited:</strong> Available at checkout</li>
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-xl font-medium text-ink">Order Tracking</h2>
            <p className="mt-4 text-sm leading-[1.7] text-stone">
              Once your order ships, you will receive a confirmation email with a tracking number. If you have not received tracking within 2 business days, <Link href="/contact" className="text-aqua hover:text-aqua-light cursor-pointer">contact us</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
