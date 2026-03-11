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
      <section className="relative bg-midnight grain pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="gold-line" />
          <h1 className="mt-6 font-heading text-4xl font-semibold text-cream sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-[1.8] text-cream/40">
            Have a question about the AquaBLADE? We typically respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20 sm:py-24">
        <div className="mx-auto max-w-lg px-6 lg:px-10">
          {submitted ? (
            <div className="border border-gold/20 bg-gold/5 px-8 py-12 text-center">
              <span className="gold-line mx-auto" />
              <h2 className="mt-6 font-heading text-2xl font-medium text-charcoal">
                Message Sent
              </h2>
              <p className="mt-3 text-sm text-slate">
                We will get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="c-name" className="block text-[11px] font-medium uppercase tracking-[0.15em] text-slate">
                  Name
                </label>
                <input
                  id="c-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-2 w-full border border-border-light bg-white px-4 py-3.5 text-sm text-charcoal placeholder:text-slate-light focus:border-gold focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="c-email" className="block text-[11px] font-medium uppercase tracking-[0.15em] text-slate">
                  Email
                </label>
                <input
                  id="c-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-2 w-full border border-border-light bg-white px-4 py-3.5 text-sm text-charcoal placeholder:text-slate-light focus:border-gold focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="c-msg" className="block text-[11px] font-medium uppercase tracking-[0.15em] text-slate">
                  Message
                </label>
                <textarea
                  id="c-msg"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-2 w-full resize-y border border-border-light bg-white px-4 py-3.5 text-sm text-charcoal placeholder:text-slate-light focus:border-gold focus:outline-none"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold px-6 py-3.5 text-[13px] font-medium uppercase tracking-[0.15em] text-midnight transition-colors hover:bg-gold-light cursor-pointer"
              >
                Send Message
              </button>
            </form>
          )}

          <div className="mt-14 border border-border-light p-6 text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-slate-light">
              Or email us directly
            </p>
            <a
              href="mailto:support@your-anwei.com"
              className="mt-2 inline-block text-sm font-medium text-gold hover:text-gold-light transition-colors cursor-pointer"
            >
              support@your-anwei.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
