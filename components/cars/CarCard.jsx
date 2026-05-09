"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { formatPrice } from "@/lib/utils";

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
    image,
    available,
    badge,
  } = car;

  const [imageError, setImageError] = useState(false);

  // Helper to determine specific type badge color
  const getTypeBadgeClass = (type) => {
    switch(type?.toLowerCase()) {
      case 'sports': return 'bg-graphite-800 text-platinum-200 border-white/10';
      case 'luxury': return 'bg-black/40 text-platinum-100 border-white/20';
      case 'suv': return 'bg-obsidian-900 text-platinum-300 border-white/5';
      case 'ultra luxury': return 'bg-gold-gradient text-black border-gold';
      default: return 'bg-black/50 text-platinum-300 border-white/10';
    }
  };

  return (
    <Link
      href={`/cars/${slug}`}
      className="group flex flex-col relative bg-black rounded-3xl overflow-hidden border border-white/5 hover:border-gold/30 shadow-[0_4px_24px_rgba(0,0,0,0.5)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.7),_0_4px_20px_rgba(201,168,76,0.15)] transition-all duration-500 hover:-translate-y-2 h-full"
      aria-label={`View ${brand} ${model}`}
    >
      {/* Soft glow around card on hover */}
      <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-colors duration-500 pointer-events-none z-10" />

      {/* Image Container */}
      <div className="relative h-60 w-full overflow-hidden bg-graphite-800 rounded-t-3xl shrink-0">
        {!imageError ? (
          <Image
            src={image}
            alt={`${brand} ${model}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-graphite-700 to-obsidian-900 text-platinum-500">
            <svg className="w-12 h-12 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            <span className="text-sm font-medium uppercase tracking-widest">Image Unavailable</span>
          </div>
        )}
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 opacity-80" />

        {/* Badges row */}
        <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-2 z-20">
          <div className="flex flex-wrap gap-2">
            {badge && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold bg-white text-black uppercase tracking-wider shadow-md">
                {badge}
              </span>
            )}
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border ${getTypeBadgeClass(type)}`}>
              {type}
            </span>
          </div>
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg backdrop-blur-md border ${available ? 'bg-success/10 text-success border-success/30' : 'bg-error/10 text-error border-error/30'}`}>
            {available ? 'Available' : 'Unavailable'}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-grow z-20">
        <div className="mb-6">
          <p className="text-xs font-body font-semibold text-gold uppercase tracking-[0.2em] mb-1.5">{brand}</p>
          <h3 className="font-display font-bold text-2xl text-white leading-tight group-hover:text-gold transition-colors duration-300">
            {model}
          </h3>
        </div>

        {/* Specs row */}
        <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/10 mt-auto">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            <span className="text-xs font-body text-platinum-400 capitalize">{transmission}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">{fuelIcons[fuelType] ?? "⛽"}</span>
            <span className="text-xs font-body text-platinum-400 capitalize">{fuelType}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-xs font-body text-platinum-400">{seats} seats</span>
          </div>
        </div>

        {/* Price + CTA */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-platinum-500 font-body mb-1">Daily Rate</p>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display font-bold text-3xl text-white">{formatPrice(pricePerDay)}</span>
              <span className="text-sm text-platinum-500 font-body">/ day</span>
            </div>
          </div>
          <div className="relative flex items-center gap-2 text-gold text-sm font-semibold font-body group-hover:gap-3 transition-all duration-300">
            View Car
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-500 shadow-[0_0_10px_#c9a84c]" />
          </div>
        </div>
      </div>
    </Link>
  );
}
