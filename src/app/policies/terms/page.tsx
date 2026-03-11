import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | AquaBLADE",
};

export default function TermsPage() {
  return (
    <>
      <section className="relative bg-ocean grain pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="teal-bar" />
          <h1 className="mt-6 font-heading text-3xl font-semibold text-cloud sm:text-4xl">Terms of Service</h1>
          <p className="mt-3 text-[12px] text-cloud/30">Last updated: March 2026</p>
        </div>
      </section>
      <section className="bg-glass py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 space-y-10 text-sm leading-[1.7] text-stone">
          <div>
            <h2 className="font-heading text-xl font-medium text-ink">Agreement to Terms</h2>
            <p className="mt-4">By accessing or using the AquaBLADE website and purchasing our products, you agree to be bound by these Terms of Service.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-medium text-ink">Products &amp; Pricing</h2>
            <p className="mt-4">All prices are in US dollars and subject to change. We make every effort to ensure accuracy of product descriptions. We reserve the right to limit quantities or cancel orders, issuing a full refund if payment was collected.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-medium text-ink">Intellectual Property</h2>
            <p className="mt-4">All content on this website is the property of AquaBLADE and protected by copyright and trademark laws. No reproduction without written permission.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-medium text-ink">Limitation of Liability</h2>
            <p className="mt-4">To the maximum extent permitted by law, AquaBLADE shall not be liable for any indirect, incidental, special, or consequential damages. Total liability shall not exceed the amount paid for the product.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-medium text-ink">Governing Law</h2>
            <p className="mt-4">These terms shall be governed by the laws of the United States. Disputes shall be resolved in courts of competent jurisdiction.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-medium text-ink">Contact</h2>
            <p className="mt-4">Questions? Email <a href="mailto:support@anwei.com" className="text-aqua hover:text-aqua-light cursor-pointer">support@anwei.com</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
