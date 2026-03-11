export default function PrivacyPage() {
  return (
    <div className="pt-16">
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h1 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-slate">
            Last updated: March 2026
          </p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate">
            <div>
              <h2 className="font-heading text-xl font-semibold text-charcoal">
                Information We Collect
              </h2>
              <p className="mt-3">
                When you place an order or sign up for our email list, we collect
                the following information:
              </p>
              <ul className="mt-3 space-y-1.5 pl-4">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sage" />
                  Name and email address
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sage" />
                  Shipping and billing address
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sage" />
                  Payment information (processed securely via our payment
                  provider)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sage" />
                  Browser and device information for analytics
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-charcoal">
                How We Use Your Information
              </h2>
              <ul className="mt-3 space-y-1.5 pl-4">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sage" />
                  To fulfill and ship your order
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sage" />
                  To send order confirmations and shipping updates
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sage" />
                  To send promotional emails (only if you opted in)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sage" />
                  To improve our website and customer experience
                </li>
              </ul>
              <p className="mt-3">
                We never sell your personal information to third parties.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-charcoal">
                Cookies
              </h2>
              <p className="mt-3">
                We use cookies to improve your browsing experience, analyze site
                traffic, and personalize content. You may disable cookies in your
                browser settings, though some site features may not function
                properly.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-charcoal">
                Data Security
              </h2>
              <p className="mt-3">
                We implement industry-standard security measures to protect your
                personal data. Payment information is encrypted and processed
                through PCI-compliant payment processors. We never store credit
                card details on our servers.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-charcoal">
                Contact
              </h2>
              <p className="mt-3">
                If you have questions about this privacy policy or wish to
                request deletion of your data, email us at{" "}
                <a
                  href="mailto:support@aquablade.com"
                  className="font-semibold text-sage-dark underline underline-offset-2 transition-colors duration-200 hover:text-sage cursor-pointer"
                >
                  support@aquablade.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
