"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/config";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto max-w-3xl divide-y divide-gray-200">
      {FAQ_ITEMS.map((item, index) => (
        <div key={index} className="py-4">
          <button
            type="button"
            onClick={() => toggle(index)}
            className="flex w-full items-center justify-between gap-4 text-left cursor-pointer group"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <span className="font-heading text-base font-semibold text-charcoal transition-colors duration-200 group-hover:text-sage-dark sm:text-lg">
              {item.question}
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`flex-shrink-0 text-sage transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          <div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "mt-3 max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-sm leading-relaxed text-slate sm:text-base">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
