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
        <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-stone">
          Quantity
        </span>
        <div className="inline-flex items-center border border-mist">
          <button
            type="button"
            onClick={() => update(quantity - 1)}
            disabled={quantity <= 1}
            className="flex h-11 w-11 items-center justify-center text-sm text-ink transition-colors hover:bg-cloud disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer"
            aria-label="Decrease quantity"
          >
            &minus;
          </button>
          <span
            className="flex h-11 w-14 items-center justify-center border-x border-mist text-sm font-medium text-ink"
            aria-live="polite"
          >
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => update(quantity + 1)}
            disabled={quantity >= 10}
            className="flex h-11 w-11 items-center justify-center text-sm text-ink transition-colors hover:bg-cloud disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer"
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
          className="flex w-full items-center justify-between border border-aqua/20 bg-aqua/5 px-5 py-3.5 text-left transition-all duration-300 hover:border-aqua/40 hover:bg-aqua/10 cursor-pointer"
        >
          <div>
            <span className="block text-[13px] font-medium text-ink">
              Buy 2 &amp; Save $10
            </span>
            <span className="block text-[12px] text-stone">
              Most popular choice
            </span>
          </div>
          <span className="font-heading text-lg font-semibold text-aqua">
            $69.95
          </span>
        </button>
      )}
    </div>
  );
}
