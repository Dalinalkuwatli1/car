import Link from "next/link";
import Image from "next/image";
import { formatPrice, TYPE_LABELS } from "@/lib/utils";
import { AvailabilityBadge } from "@/components/ui/Badge";

const typeAccents = {
  economy: "from-blue-500/20",
  suv: "from-emerald-500/20",
  luxury: "from-yellow-500/20",
  sports: "from-red-500/20",
};

const fuelIcons = {
  petrol: "⛽",
  diesel: "🛢",
  electric: "⚡",
};

export default function CarCard({ car }) {
  const {
    slug,
    brand,
    model,
    type,
    pricePerDay,
    transmission,
    fuelType,
    seats,
    year,
    images,
    available,
    badge,
  } = car;

  return (
    <Link
      href={`/cars/${slug}`}
      className="group block relative bg-graphite-700 rounded-2xl overflow-hidden border border-white/6 hover:border-gold/25 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1"
      aria-label={`View ${brand} ${model}`}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-graphite-800">
        <Image
          src={images[0]}
          alt={`${brand} ${model}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t ${typeAccents[type] ?? "from-black/20"} to-transparent opacity-60`} />
        <div className="absolute inset-0 bg-card-gradient opacity-40 group-hover:opacity-20 transition-opacity duration-500" />

        {/* Badges row */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {badge && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-2xs font-semibold bg-gold-gradient text-obsidian-900 uppercase tracking-wide">
                {badge}
              </span>
            )}
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-2xs font-semibold bg-black/50 text-platinum-300 uppercase tracking-wide backdrop-blur-sm border border-white/10">
              {TYPE_LABELS[type]}
            </span>
          </div>
          <AvailabilityBadge available={available} />
        </div>

        {/* Year tag */}
        <div className="absolute bottom-3 right-3">
          <span className="px-2 py-1 rounded-lg text-2xs font-mono font-semibold bg-black/60 text-gold backdrop-blur-sm border border-gold/20">
            {year}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="mb-4">
          <p className="text-xs font-body font-semibold text-gold/70 uppercase tracking-[0.15em] mb-1">{brand}</p>
          <h3 className="font-display font-bold text-lg text-white leading-tight group-hover:text-gold transition-colors duration-300">
            {model}
          </h3>
        </div>

        {/* Specs row */}
        <div className="flex items-center gap-4 mb-5 pb-5 border-b border-white/6">
          <div className="flex items-center gap-1.5 text-platinum-400">
            <svg className="w-3.5 h-3.5 text-gold/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            <span className="text-xs font-body capitalize">{transmission}</span>
          </div>
          <div className="flex items-center gap-1.5 text-platinum-400">
            <span className="text-xs">{fuelIcons[fuelType] ?? "⛽"}</span>
            <span className="text-xs font-body capitalize">{fuelType}</span>
          </div>
          <div className="flex items-center gap-1.5 text-platinum-400">
            <svg className="w-3.5 h-3.5 text-gold/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-xs font-body">{seats} seats</span>
          </div>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xs text-platinum-500 font-body mb-0.5">From</p>
            <div className="flex items-baseline gap-1">
              <span className="font-display font-bold text-2xl text-white">{formatPrice(pricePerDay)}</span>
              <span className="text-xs text-platinum-500 font-body">/ day</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-gold text-sm font-semibold font-body group-hover:gap-2.5 transition-all duration-300">
            View Car
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
