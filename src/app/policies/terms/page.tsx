export default function TermsPage() {
  return (
    <div className="pt-16">
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h1 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-slate">
            Last updated: March 2026
          </p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate">
            <div>
              <h2 className="font-heading text-xl font-semibold text-charcoal">
                Agreement to Terms
              </h2>
              <p className="mt-3">
                By accessing or using the AquaBLADE website and purchasing our
                products, you agree to be bound by these Terms of Service. If you
                do not agree to these terms, please do not use our site or
                services.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-charcoal">
                Products &amp; Pricing
              </h2>
              <p className="mt-3">
                All prices are listed in US dollars and are subject to change
                without notice. We make every effort to ensure product
                descriptions and images are accurate. However, we do not warrant
                that descriptions, colors, or other content are error-free.
              </p>
              <p className="mt-3">
                We reserve the right to limit quantities, refuse orders, or
                cancel orders at our discretion. If we cancel an order after
                payment, a full refund will be issued.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-charcoal">
                Intellectual Property
              </h2>
              <p className="mt-3">
                All content on this website, including text, images, logos, and
                product designs, is the property of AquaBLADE and is protected
                by copyright and trademark laws. You may not reproduce,
                distribute, or use any content without our written permission.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-charcoal">
                Limitation of Liability
              </h2>
              <p className="mt-3">
                To the maximum extent permitted by law, AquaBLADE shall not be
                liable for any indirect, incidental, special, or consequential
                damages arising from your use of our products or website. Our
                total liability for any claim shall not exceed the amount you
                paid for the product.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-charcoal">
                Governing Law
              </h2>
              <p className="mt-3">
                These terms shall be governed by and construed in accordance with
                the laws of the United States. Any disputes arising under these
                terms shall be resolved in the courts of competent jurisdiction.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-charcoal">
                Changes to Terms
              </h2>
              <p className="mt-3">
                We reserve the right to update these terms at any time. Changes
                take effect immediately upon posting. Your continued use of the
                site constitutes acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-charcoal">
                Contact
              </h2>
              <p className="mt-3">
                Questions about these terms? Email us at{" "}
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
