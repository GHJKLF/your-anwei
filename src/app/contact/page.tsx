"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative bg-ocean grain pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="teal-bar" />
          <h1 className="mt-6 font-heading text-4xl font-semibold text-cloud sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-[1.8] text-cloud/40">
            Have a question about the AquaBLADE? We typically respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="bg-glass py-20 sm:py-24">
        <div className="mx-auto max-w-lg px-6 lg:px-10">
          {submitted ? (
            <div className="border border-aqua/20 bg-aqua/5 px-8 py-12 text-center">
              <span className="teal-bar mx-auto" />
              <h2 className="mt-6 font-heading text-2xl font-medium text-ink">
                Message Sent
              </h2>
              <p className="mt-3 text-sm text-stone">
                We will get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="c-name" className="block text-[11px] font-medium uppercase tracking-[0.15em] text-stone">
                  Name
                </label>
                <input
                  id="c-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-2 w-full border border-mist bg-white px-4 py-3.5 text-sm text-ink placeholder:text-stone-light focus:border-aqua focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="c-email" className="block text-[11px] font-medium uppercase tracking-[0.15em] text-stone">
                  Email
                </label>
                <input
                  id="c-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-2 w-full border border-mist bg-white px-4 py-3.5 text-sm text-ink placeholder:text-stone-light focus:border-aqua focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="c-msg" className="block text-[11px] font-medium uppercase tracking-[0.15em] text-stone">
                  Message
                </label>
                <textarea
                  id="c-msg"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-2 w-full resize-y border border-mist bg-white px-4 py-3.5 text-sm text-ink placeholder:text-stone-light focus:border-aqua focus:outline-none"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-coral px-6 py-3.5 text-[13px] font-medium uppercase tracking-[0.15em] text-ocean transition-colors hover:bg-coral-light cursor-pointer"
              >
                Send Message
              </button>
            </form>
          )}

          <div className="mt-14 border border-mist p-6 text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-stone-light">
              Or email us directly
            </p>
            <a
              href="mailto:support@your-anwei.com"
              className="mt-2 inline-block text-sm font-medium text-aqua hover:text-aqua-light transition-colors cursor-pointer"
            >
              support@your-anwei.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
