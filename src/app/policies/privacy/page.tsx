export default function PrivacyPage() {
  return (
    <>
      <section className="relative bg-midnight grain pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="gold-line" />
          <h1 className="mt-6 font-heading text-3xl font-semibold text-cream sm:text-4xl">Privacy Policy</h1>
          <p className="mt-3 text-[12px] text-cream/30">Last updated: March 2026</p>
        </div>
      </section>
      <section className="bg-ivory py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 space-y-10 text-sm leading-[1.7] text-slate">
          <div>
            <h2 className="font-heading text-xl font-medium text-charcoal">Information We Collect</h2>
            <p className="mt-4">When you place an order or sign up, we collect: name, email, shipping/billing address, payment information (processed securely via our payment provider), and browser/device data for analytics.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-medium text-charcoal">How We Use Your Information</h2>
            <p className="mt-4">To fulfill and ship orders, send confirmations and tracking updates, send promotional emails (only if opted in), and improve our site. We never sell your personal information to third parties.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-medium text-charcoal">Cookies</h2>
            <p className="mt-4">We use cookies to improve browsing, analyze traffic, and personalize content. You may disable cookies in browser settings, though some features may not function properly.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-medium text-charcoal">Data Security</h2>
            <p className="mt-4">We implement industry-standard security measures. Payment information is encrypted via PCI-compliant processors. We never store credit card details on our servers.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-medium text-charcoal">Contact</h2>
            <p className="mt-4">Questions about privacy or data deletion? Email <a href="mailto:support@your-anwei.com" className="text-gold hover:text-gold-light cursor-pointer">support@your-anwei.com</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
