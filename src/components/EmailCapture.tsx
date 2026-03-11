"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // In production, this would POST to an API endpoint
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-sage-light/30 bg-sage/5 px-6 py-8 text-center">
        <svg
          width="32"
          height="32"
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
        <p className="mt-3 font-heading text-lg font-semibold text-charcoal">
          You&apos;re in!
        </p>
        <p className="mt-1 text-sm text-slate">
          Check your inbox for a welcome discount.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:flex-row sm:gap-2"
    >
      <label htmlFor="email-capture" className="sr-only">
        Email address
      </label>
      <input
        id="email-capture"
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-gray-400 transition-colors duration-200 focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/20"
      />
      <button
        type="submit"
        className="rounded-lg bg-sage px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-sage-dark hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 active:scale-[0.98] cursor-pointer"
      >
        Get 10% Off
      </button>
    </form>
  );
}
