"use client";

import { useState } from "react";

interface QuantitySelectorProps {
  onChange?: (quantity: number) => void;
}

export default function QuantitySelector({ onChange }: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(1);

  const update = (newQty: number) => {
    if (newQty < 1 || newQty > 10) return;
    setQuantity(newQty);
    onChange?.(newQty);
  };

  return (
    <div className="space-y-3">
      <div className="inline-flex items-center rounded-lg border border-gray-200 bg-white">
        <button
          type="button"
          onClick={() => update(quantity - 1)}
          disabled={quantity <= 1}
          className="flex h-10 w-10 items-center justify-center text-lg font-medium text-slate transition-colors duration-200 hover:bg-cream disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span
          className="flex h-10 w-12 items-center justify-center border-x border-gray-200 text-sm font-semibold text-charcoal"
          aria-live="polite"
          aria-label={`Quantity: ${quantity}`}
        >
          {quantity}
        </span>
        <button
          type="button"
          onClick={() => update(quantity + 1)}
          disabled={quantity >= 10}
          className="flex h-10 w-10 items-center justify-center text-lg font-medium text-slate transition-colors duration-200 hover:bg-cream disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      {/* Upsell nudge */}
      {quantity === 1 && (
        <button
          type="button"
          onClick={() => update(2)}
          className="block rounded-lg border border-terracotta-light/30 bg-terracotta-light/10 px-4 py-2.5 text-left transition-colors duration-200 hover:border-terracotta-light/50 hover:bg-terracotta-light/15 cursor-pointer"
        >
          <span className="block text-sm font-semibold text-terracotta">
            Buy 2 &amp; Save
          </span>
          <span className="block text-xs text-slate">
            2 for $69.95 (save $10)
          </span>
        </button>
      )}
    </div>
  );
}
