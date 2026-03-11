import Link from "next/link";

export default function ShippingPage() {
  return (
    <>
      <section className="relative bg-midnight grain pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="gold-line" />
          <h1 className="mt-6 font-heading text-3xl font-semibold text-cream sm:text-4xl">Shipping Policy</h1>
          <p className="mt-3 text-[12px] text-cream/30">Last updated: March 2026</p>
        </div>
      </section>
      <section className="bg-ivory py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 space-y-10">
          <div>
            <h2 className="font-heading text-xl font-medium text-charcoal">Shipping Rates</h2>
            <div className="mt-4 border border-border-light divide-y divide-border-light">
              {[
                { dest: "United States (Continental)", rate: "Free" },
                { dest: "Canada", rate: "$9.99" },
                { dest: "United Kingdom", rate: "$12.99" },
                { dest: "Australia", rate: "$14.99" },
              ].map((r) => (
                <div key={r.dest} className="flex items-center justify-between px-5 py-3.5 text-sm">
                  <span className="text-charcoal">{r.dest}</span>
                  <span className="font-medium text-gold">{r.rate}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-heading text-xl font-medium text-charcoal">Delivery Times</h2>
            <ul className="mt-4 space-y-3 text-sm leading-[1.7] text-slate">
              <li><strong className="text-charcoal">US orders:</strong> 2-3 business days via USPS Priority Mail</li>
              <li><strong className="text-charcoal">Canada &amp; UK:</strong> 5-8 business days</li>
              <li><strong className="text-charcoal">Australia:</strong> 7-12 business days</li>
              <li><strong className="text-charcoal">Expedited:</strong> Available at checkout</li>
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-xl font-medium text-charcoal">Order Tracking</h2>
            <p className="mt-4 text-sm leading-[1.7] text-slate">
              Once your order ships, you will receive a confirmation email with a tracking number. If you have not received tracking within 2 business days, <Link href="/contact" className="text-gold hover:text-gold-light cursor-pointer">contact us</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
