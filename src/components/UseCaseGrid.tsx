import Image from "next/image";
import { USE_CASES } from "@/lib/config";

export default function UseCaseGrid() {
  return (
    <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-5">
      {USE_CASES.map((uc) => (
        <div
          key={uc.name}
          className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
        >
          <Image
            src={uc.image}
            alt={`AquaBLADE on ${uc.name}`}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/20 to-transparent" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-gold/80">
              {uc.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
