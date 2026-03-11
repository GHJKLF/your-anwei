"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images?: { src: string; alt: string }[];
}

const defaultImages = [
  { src: "/images/product-1.webp", alt: "AquaBLADE Squeegee Kit - full kit view" },
  { src: "/images/product-2.webp", alt: "AquaBLADE silicone blade close-up" },
  { src: "/images/product-3.webp", alt: "AquaBLADE ergonomic grip detail" },
  { src: "/images/product-4.webp", alt: "AquaBLADE complete kit contents" },
  { src: "/images/product-5.webp", alt: "AquaBLADE in use on window" },
];

export default function ProductGallery({ images = defaultImages }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-3">
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-cream">
        <Image
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          fill
          className="object-contain p-6"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={activeIndex === 0}
        />
      </div>

      {/* Thumbnail Strip */}
      <div className="flex gap-2" role="tablist" aria-label="Product images">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`View ${image.alt}`}
            onClick={() => setActiveIndex(index)}
            className={`relative aspect-square w-16 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-200 sm:w-20 cursor-pointer ${
              index === activeIndex
                ? "border-sage ring-1 ring-sage/30"
                : "border-gray-200 hover:border-sage-light"
            }`}
          >
            <Image
              src={image.src}
              alt=""
              fill
              className="object-contain bg-cream p-1"
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
