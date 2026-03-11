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
  beforeAlt = "Surface before cleaning with visible streaks",
  afterAlt = "Surface after AquaBLADE, completely clear",
}: BeforeAfterProps) {
  const [position, setPosition] = useState(50);

  return (
    <div className="space-y-3">
      <div
        className="relative aspect-[16/10] overflow-hidden bg-ocean select-none"
        role="img"
        aria-label={`Before and after comparison`}
      >
        {/* After layer */}
        <Image src={afterImage} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" aria-hidden="true" />

        {/* Before layer (clipped) */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
          <Image src={beforeImage} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" aria-hidden="true" />
        </div>

        {/* Divider */}
        <div className="absolute top-0 bottom-0 w-px bg-aqua/80" style={{ left: `${position}%` }} aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center border border-aqua/60 bg-ocean/80 backdrop-blur-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-aqua" aria-hidden="true">
              <path d="M18 8L22 12L18 16" /><path d="M6 8L2 12L6 16" />
            </svg>
          </div>
        </div>

        {/* Hidden range input */}
        <label className="sr-only" htmlFor="ba-slider">Adjust comparison</label>
        <input
          id="ba-slider"
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="absolute inset-0 z-10 h-full w-full opacity-0 cursor-ew-resize"
        />

        {/* Labels */}
        <span className="absolute bottom-4 left-4 text-[11px] font-medium uppercase tracking-[0.15em] text-cloud/60">Before</span>
        <span className="absolute bottom-4 right-4 text-[11px] font-medium uppercase tracking-[0.15em] text-aqua">After</span>
      </div>
    </div>
  );
}
