"use client";

import { useState } from "react";

interface QuantitySelectorProps {
  onChange?: (quantity: number) => void;
}

export default function QuantitySelector({ onChange }: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(1);

  const update = (n: number) => {
    if (n < 1 || n > 10) return;
    setQuantity(n);
    onChange?.(n);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-slate">
          Quantity
        </span>
        <div className="inline-flex items-center border border-border-light">
          <button
            type="button"
            onClick={() => update(quantity - 1)}
            disabled={quantity <= 1}
            className="flex h-11 w-11 items-center justify-center text-sm text-charcoal transition-colors hover:bg-cream disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer"
            aria-label="Decrease quantity"
          >
            &minus;
          </button>
          <span
            className="flex h-11 w-14 items-center justify-center border-x border-border-light text-sm font-medium text-charcoal"
            aria-live="polite"
          >
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => update(quantity + 1)}
            disabled={quantity >= 10}
            className="flex h-11 w-11 items-center justify-center text-sm text-charcoal transition-colors hover:bg-cream disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      {/* Upsell */}
      {quantity === 1 && (
        <button
          type="button"
          onClick={() => update(2)}
          className="flex w-full items-center justify-between border border-gold/20 bg-gold/5 px-5 py-3.5 text-left transition-all duration-300 hover:border-gold/40 hover:bg-gold/10 cursor-pointer"
        >
          <div>
            <span className="block text-[13px] font-medium text-charcoal">
              Buy 2 &amp; Save $10
            </span>
            <span className="block text-[12px] text-slate">
              Most popular choice
            </span>
          </div>
          <span className="font-heading text-lg font-semibold text-gold">
            $69.95
          </span>
        </button>
      )}
    </div>
  );
}
