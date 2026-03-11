"use client";

import { getCheckoutUrl } from "@/lib/config";

interface CTAButtonProps {
  text?: string;
  quantity?: number;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "gold" | "outline" | "dark";
}

export default function CTAButton({
  text = "Buy Now",
  quantity = 1,
  className = "",
  size = "md",
  variant = "gold",
}: CTAButtonProps) {
  const sizeClasses = {
    sm: "px-6 py-2.5 text-[12px]",
    md: "px-8 py-3.5 text-[13px]",
    lg: "px-10 py-4 text-[14px]",
  };

  const variantClasses = {
    gold: "bg-gold text-midnight hover:bg-gold-light",
    outline: "border border-gold/40 text-gold hover:bg-gold hover:text-midnight",
    dark: "bg-midnight text-cream hover:bg-midnight-light",
  };

  const handleClick = () => {
    window.location.href = getCheckoutUrl(quantity);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center justify-center font-medium uppercase tracking-[0.15em] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 active:scale-[0.98] cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {text}
    </button>
  );
}
