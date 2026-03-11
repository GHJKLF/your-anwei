"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/config";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-3xl">
      {FAQ_ITEMS.map((item, i) => (
        <div key={i} className="border-b border-mist">
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between gap-6 py-6 text-left cursor-pointer group"
            aria-expanded={openIndex === i}
          >
            <span className="font-heading text-lg font-medium text-ink transition-colors duration-200 group-hover:text-aqua sm:text-xl">
              {item.question}
            </span>
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center border transition-all duration-300 ${
                openIndex === i
                  ? "border-aqua bg-aqua text-ocean rotate-45"
                  : "border-mist text-stone"
              }`}
              aria-hidden="true"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-400 ${
              openIndex === i ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-sm leading-[1.8] text-stone">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
