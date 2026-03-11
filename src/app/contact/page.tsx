"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    // In production, this would POST to an API endpoint
    setSubmitted(true);
  };

  return (
    <div className="pt-16">
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-center font-heading text-3xl font-bold text-charcoal sm:text-4xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-slate sm:text-base">
            Have a question about the AquaBLADE? We typically respond within 24
            hours.
          </p>

          <div className="mx-auto mt-10 max-w-lg">
            {submitted ? (
              <div className="rounded-2xl border border-sage-light/30 bg-sage/5 px-6 py-10 text-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mx-auto text-sage"
                  aria-hidden="true"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <h2 className="mt-4 font-heading text-xl font-bold text-charcoal">
                  Message Sent
                </h2>
                <p className="mt-2 text-sm text-slate">
                  Thank you for reaching out. We will get back to you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-charcoal"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="mt-1.5 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-gray-400 transition-colors duration-200 focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/20"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-charcoal"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="mt-1.5 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-gray-400 transition-colors duration-200 focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/20"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-charcoal"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="mt-1.5 w-full resize-y rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-gray-400 transition-colors duration-200 focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/20"
                    placeholder="How can we help?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-sage px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-sage-dark hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 active:scale-[0.98] cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            )}

            {/* Other ways */}
            <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <h3 className="font-heading text-lg font-semibold text-charcoal">
                Other Ways to Reach Us
              </h3>
              <p className="mt-3 text-sm text-slate">
                Email us directly at{" "}
                <a
                  href="mailto:support@aquablade.com"
                  className="font-semibold text-sage-dark underline underline-offset-2 transition-colors duration-200 hover:text-sage cursor-pointer"
                >
                  support@aquablade.com
                </a>
              </p>
              <p className="mt-2 text-xs text-gray-400">
                We respond to all inquiries within one business day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
