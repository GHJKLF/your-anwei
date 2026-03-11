"use client";

import { getCheckoutUrl } from "@/lib/config";

interface CTAButtonProps {
  text?: string;
  quantity?: number;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "coral" | "outline" | "dark";
}

export default function CTAButton({
  text = "Buy Now",
  quantity = 1,
  className = "",
  size = "md",
  variant = "coral",
}: CTAButtonProps) {
  const sizeClasses = {
    sm: "px-6 py-2.5 text-[12px]",
    md: "px-8 py-3.5 text-[13px]",
    lg: "px-10 py-4 text-[14px]",
  };

  const variantClasses = {
    coral: "bg-coral text-ocean hover:bg-coral-light",
    outline: "border border-aqua/40 text-aqua hover:bg-aqua hover:text-ocean",
    dark: "bg-ocean text-cloud hover:bg-ocean-light",
  };

  const handleClick = () => {
    window.location.href = getCheckoutUrl(quantity);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center justify-center font-medium uppercase tracking-[0.15em] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral/50 focus-visible:ring-offset-2 active:scale-[0.98] cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {text}
    </button>
  );
}
