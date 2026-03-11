"use client";

import { useState } from "react";
import Image from "next/image";

interface BeforeAfterProps {
  beforeImage?: string;
  afterImage?: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export default function BeforeAfter({
  beforeImage = "/images/before.png",
  afterImage = "/images/after.png",
  beforeAlt = "Surface before cleaning with visible streaks and smudges",
  afterAlt = "Surface after cleaning with AquaBLADE, completely streak-free",
}: BeforeAfterProps) {
  const [position, setPosition] = useState(50);

  return (
    <div className="space-y-4">
      <div
        className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-cream select-none"
        role="img"
        aria-label={`Before and after comparison. Before: ${beforeAlt}. After: ${afterAlt}`}
      >
        {/* After (bottom layer, full) */}
        <Image
          src={afterImage}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 80vw"
          aria-hidden="true"
        />

        {/* Before (top layer, clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <Image
            src={beforeImage}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
            aria-hidden="true"
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-sage text-white shadow-lg">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6" />
              <polyline points="9 18 15 12 9 6" transform="translate(6, 0)" />
            </svg>
          </div>
        </div>

        {/* Slider input */}
        <label className="sr-only" htmlFor="before-after-slider">
          Adjust comparison slider
        </label>
        <input
          id="before-after-slider"
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="absolute inset-0 z-10 h-full w-full opacity-0 cursor-pointer"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={position}
          aria-label="Before and after comparison position"
        />
      </div>

      {/* Labels */}
      <div className="flex justify-between px-2 text-sm font-medium text-slate">
        <span>Before</span>
        <span>After</span>
      </div>
    </div>
  );
}
