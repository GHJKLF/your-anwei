"use client";

import { useState } from "react";
import Image from "next/image";

const defaultImages = [
  { src: "/images/product-1.webp", alt: "AquaBLADE Kit - complete set" },
  { src: "/images/product-2.webp", alt: "AquaBLADE silicone blade detail" },
  { src: "/images/product-3.webp", alt: "AquaBLADE grip and construction" },
  { src: "/images/product-4.webp", alt: "AquaBLADE kit contents" },
  { src: "/images/product-5.webp", alt: "AquaBLADE in use" },
];

interface ProductGalleryProps {
  images?: { src: string; alt: string }[];
}

export default function ProductGallery({ images = defaultImages }: ProductGalleryProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="relative aspect-square overflow-hidden bg-cloud">
        <Image
          src={images[active].src}
          alt={images[active].alt}
          fill
          className="object-contain p-10"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={active === 0}
        />
        {/* Subtle corner accents */}
        <div className="absolute top-4 left-4 h-8 w-8 border-t border-l border-aqua/20" aria-hidden="true" />
        <div className="absolute top-4 right-4 h-8 w-8 border-t border-r border-aqua/20" aria-hidden="true" />
        <div className="absolute bottom-4 left-4 h-8 w-8 border-b border-l border-aqua/20" aria-hidden="true" />
        <div className="absolute bottom-4 right-4 h-8 w-8 border-b border-r border-aqua/20" aria-hidden="true" />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2" role="tablist" aria-label="Product images">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`View ${img.alt}`}
            onClick={() => setActive(i)}
            className={`relative aspect-square w-16 overflow-hidden transition-all duration-300 sm:w-[72px] cursor-pointer ${
              i === active
                ? "ring-1 ring-aqua ring-offset-2 ring-offset-glass"
                : "opacity-50 hover:opacity-80"
            }`}
          >
            <Image
              src={img.src}
              alt=""
              fill
              loading="lazy"
              className="object-contain bg-cloud p-2"
              sizes="72px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
