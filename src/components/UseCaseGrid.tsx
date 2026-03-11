import Image from "next/image";
import { USE_CASES } from "@/lib/config";

export default function UseCaseGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 sm:gap-4">
      {USE_CASES.map((useCase) => (
        <div
          key={useCase.name}
          className="group relative aspect-square overflow-hidden rounded-2xl bg-cream cursor-pointer"
        >
          <Image
            src={useCase.image}
            alt={`AquaBLADE used on ${useCase.name}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden="true"
          />
          {/* Name */}
          <span className="absolute bottom-3 left-3 text-sm font-semibold text-white sm:bottom-4 sm:left-4 sm:text-base">
            {useCase.name}
          </span>
        </div>
      ))}
    </div>
  );
}
