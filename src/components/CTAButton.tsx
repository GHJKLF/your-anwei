"use client";

import { getCheckoutUrl } from "@/lib/config";

interface CTAButtonProps {
  text?: string;
  quantity?: number;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function CTAButton({
  text = "Buy Now - $39.95",
  quantity = 1,
  className = "",
  size = "md",
}: CTAButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-9 py-4 text-lg",
  };

  const handleClick = () => {
    window.location.href = getCheckoutUrl(quantity);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center justify-center rounded-lg bg-sage font-body font-semibold text-white shadow-sm transition-all duration-200 hover:bg-sage-dark hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 active:scale-[0.98] cursor-pointer ${sizeClasses[size]} ${className}`}
    >
      {text}
    </button>
  );
}
