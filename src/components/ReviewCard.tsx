import type { Review } from "@/lib/reviews";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex flex-col border border-border-light bg-white p-7 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5">
      {/* Stars */}
      <div className="flex gap-1" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill={i < review.rating ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.5"
            className={i < review.rating ? "text-gold" : "text-border-light"}
            aria-hidden="true"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="mt-5 flex-1 text-sm leading-[1.7] text-slate">
        &ldquo;{review.text}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="mt-6 flex items-center justify-between border-t border-border-light pt-5">
        <div>
          <p className="text-[13px] font-medium text-charcoal">{review.name}</p>
          <p className="mt-0.5 text-[12px] text-slate-light">{review.location}</p>
        </div>
        <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-gold/70">
          Verified
        </span>
      </div>
    </div>
  );
}
