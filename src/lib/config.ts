export const PRODUCT = {
  name: "AquaBLADE Squeegee Kit",
  tagline: "One pass. Zero streaks.",
  price: 39.95,
  compareAtPrice: 59.99,
  discount: 25,
  currency: "USD",
  rating: 4.9,
  reviewCount: 2847,
  origin: "Made in Germany",
  kitContents: [
    { item: "AquaBLADE Pro Squeegee", value: "$29.99" },
    { item: "Microfiber Cleaning Cloth (2x)", value: "$12.99" },
    { item: "Streak-Free Concentrate (250ml)", value: "$9.99" },
    { item: "Suction Cup Storage Hook", value: "$6.99" },
  ],
  features: [
    "Medical-grade silicone blade for zero-streak finish",
    "Ergonomic non-slip grip for comfortable use",
    "Stainless steel core for lasting durability",
    "Works on glass, mirrors, tiles, and smooth surfaces",
    "Includes concentrated cleaning solution (makes 2L)",
    "Compact storage hook mounts to any smooth surface",
  ],
};

export const SHOPIFY = {
  domain: process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN || "your-anwei.myshopify.com",
  variantId: process.env.NEXT_PUBLIC_VARIANT_ID || "REPLACE_WITH_VARIANT_ID",
  bundleVariantId: process.env.NEXT_PUBLIC_BUNDLE_VARIANT_ID || "",
};

export function getCheckoutUrl(quantity: number = 1): string {
  return `https://${SHOPIFY.domain}/cart/${SHOPIFY.variantId}:${quantity}`;
}

export const NAV_LINKS = [
  { label: "AquaBLADE", href: "/product" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const POLICY_LINKS = [
  { label: "Shipping", href: "/policies/shipping" },
  { label: "Returns", href: "/policies/returns" },
  { label: "Privacy", href: "/policies/privacy" },
  { label: "Terms", href: "/policies/terms" },
];

export const COMPARISON = [
  {
    feature: "Streak-Free Finish",
    aquablade: "Every time",
    paperTowels: "Rarely",
    cheapSqueegee: "Sometimes",
  },
  {
    feature: "Lint & Fiber Residue",
    aquablade: "None",
    paperTowels: "Always",
    cheapSqueegee: "Occasional",
  },
  {
    feature: "Durability",
    aquablade: "5+ years",
    paperTowels: "Single use",
    cheapSqueegee: "3-6 months",
  },
  {
    feature: "Cost Over 1 Year",
    aquablade: "$39.95 once",
    paperTowels: "$150+",
    cheapSqueegee: "$60+ (replacements)",
  },
  {
    feature: "Environmental Impact",
    aquablade: "Zero waste",
    paperTowels: "High waste",
    cheapSqueegee: "Plastic waste",
  },
];

export const USE_CASES = [
  { name: "Windows", image: "/images/use-windows.png" },
  { name: "Mirrors", image: "/images/use-mirrors.png" },
  { name: "Shower Glass", image: "/images/use-shower.png" },
  { name: "Cooktops", image: "/images/use-cooktop.png" },
  { name: "Car Glass", image: "/images/use-car.png" },
];

export const FAQ_ITEMS = [
  {
    question: "How does AquaBLADE achieve streak-free results?",
    answer:
      "The medical-grade silicone blade maintains perfect contact with the surface, channeling water to the edges in a single pass. Unlike rubber blades that degrade and skip, our silicone edge stays consistently smooth for years.",
  },
  {
    question: "Does it work on surfaces with hard water stains?",
    answer:
      "Yes. The included concentrate is formulated to dissolve mineral deposits on contact. Spray, wait 30 seconds, then squeegee. For heavy buildup, a second application may be needed. Regular use prevents future buildup entirely.",
  },
  {
    question: "What is included in the kit?",
    answer:
      "The AquaBLADE Kit includes: 1x Pro Squeegee with stainless steel core, 2x premium microfiber cloths, 1x 250ml streak-free concentrate (makes 2 liters), and 1x suction cup storage hook. Everything you need to get started.",
  },
  {
    question: "How long does the blade last?",
    answer:
      "The medical-grade silicone blade is rated for 5+ years of regular household use. Unlike rubber blades that crack and harden, silicone maintains its flexibility and edge quality over time. We also offer replacement blades if needed.",
  },
  {
    question: "How is AquaBLADE different from other squeegees?",
    answer:
      "Three key differences: (1) medical-grade silicone vs cheap rubber, (2) stainless steel core vs plastic frame, and (3) ergonomic grip engineered for the natural wrist angle. The result is a professional tool that outperforms everything in the consumer market.",
  },
  {
    question: "What surfaces can I use it on?",
    answer:
      "AquaBLADE works on any smooth, non-porous surface: windows, mirrors, glass shower doors, glass cooktops, car windshields, tile, marble countertops, and stainless steel appliances. Do not use on textured or matte surfaces.",
  },
  {
    question: "Is the cleaning solution safe for all surfaces?",
    answer:
      "Yes. Our concentrate is pH-neutral, ammonia-free, and safe for coated glass, tinted windows, and natural stone. It is biodegradable and leaves no chemical residue. Safe around children and pets once dry.",
  },
  {
    question: "Is there a learning curve?",
    answer:
      "Minimal. Most people achieve perfect results on their first try. The key technique: start at the top, pull down in one smooth motion, and wipe the blade between passes. A 30-second tutorial is included in the box.",
  },
  {
    question: "Do you offer free shipping?",
    answer:
      "Yes. All orders within the continental US ship free via USPS Priority Mail (2-3 business days). Expedited shipping is available at checkout. We also ship internationally at competitive rates.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day satisfaction guarantee. If you are not completely happy with your AquaBLADE, return it in any condition for a full refund, no questions asked. We even cover return shipping.",
  },
];
