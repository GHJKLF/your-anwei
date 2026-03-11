"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-aqua/20 bg-aqua/5 px-8 py-10 text-center">
        <span className="teal-bar mx-auto" />
        <p className="mt-4 font-heading text-xl font-medium text-ink">
          You&apos;re on the list.
        </p>
        <p className="mt-2 text-sm text-stone">
          Check your inbox for a welcome offer.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:gap-0">
      <label htmlFor="email-capture" className="sr-only">Email address</label>
      <input
        id="email-capture"
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 border border-mist bg-white px-5 py-3.5 text-sm text-ink placeholder:text-stone-light transition-colors duration-200 focus:border-aqua focus:outline-none sm:border-r-0"
      />
      <button
        type="submit"
        className="bg-coral px-8 py-3.5 text-[13px] font-medium uppercase tracking-[0.15em] text-ocean transition-colors duration-300 hover:bg-coral-light cursor-pointer"
      >
        Subscribe
      </button>
    </form>
  );
}
