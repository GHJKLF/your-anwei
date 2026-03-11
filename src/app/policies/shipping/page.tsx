import Link from "next/link";

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
            <div className="mt-4 border border-mist divide-y divide-mist">
              {[
                { dest: "United States (Continental)", rate: "Free" },
                { dest: "Canada", rate: "$9.99" },
                { dest: "United Kingdom", rate: "$12.99" },
                { dest: "Australia", rate: "$14.99" },
              ].map((r) => (
                <div key={r.dest} className="flex items-center justify-between px-5 py-3.5 text-sm">
                  <span className="text-ink">{r.dest}</span>
                  <span className="font-medium text-aqua">{r.rate}</span>
                </div>
              ))}
            </div>
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
