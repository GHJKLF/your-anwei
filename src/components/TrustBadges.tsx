import { PRODUCT } from "@/lib/config";

const badges = [
  { label: "Made in Germany" },
  { label: `${PRODUCT.rating}/5 Rating` },
  { label: "Free Shipping" },
  { label: "30-Day Guarantee" },
];

export default function TrustBadges() {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
      {badges.map((badge, i) => (
        <div key={badge.label} className="flex items-center gap-3">
          <span className="text-[12px] font-medium uppercase tracking-[0.1em] text-stone-light">
            {badge.label}
          </span>
          {i < badges.length - 1 && (
            <span className="hidden text-aqua/30 sm:inline" aria-hidden="true">&middot;</span>
          )}
        </div>
      ))}
    </div>
  );
}
