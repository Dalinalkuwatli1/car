"use client";

import { useState } from "react";
import { CAR_TYPES, TRANSMISSIONS, FUEL_TYPES } from "@/lib/utils";

const FilterChip = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-5 py-3 rounded-xl font-body transition-all duration-300 whitespace-nowrap ${
      active
        ? "bg-[#D4AF37] text-black font-semibold shadow-[0_0_25px_rgba(212,175,55,0.35)]"
        : "bg-white/[0.03] text-zinc-400 text-[17px] font-medium border border-white/10 hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
    }`}
  >
    {children}
  </button>
);

export default function FilterBar({ filters, onChange, total, filtered }) {
  const [priceOpen, setPriceOpen] = useState(false);

  const set = (key, value) => onChange({ ...filters, [key]: value });

  return (
    <div className="backdrop-blur-xl border border-white/10 shadow-[0_0_60px_rgba(212,175,55,0.08)] rounded-[32px] bg-[#070707]/60 p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="font-display font-semibold text-white text-base">Filters</h2>
        <div className="flex items-center gap-3">
          <span className="text-xs font-body text-platinum-500">
            <span className="text-gold font-semibold">{filtered}</span> of {total} vehicles
          </span>
          <button
            onClick={() =>
              onChange({ type: "all", transmission: "all", fuelType: "all", maxPrice: 1000 })
            }
            className="text-xs font-body text-platinum-500 hover:text-gold transition-colors underline underline-offset-2"
          >
            Reset all
          </button>
        </div>
      </div>

      {/* Car Type */}
      <div>
        <p className="text-[13px] tracking-[0.28em] uppercase text-zinc-500 font-medium mb-3">
          Vehicle Type
        </p>
        <div className="flex flex-wrap gap-2">
          {CAR_TYPES.map((t) => (
            <FilterChip
              key={t.value}
              active={filters.type === t.value}
              onClick={() => set("type", t.value)}
            >
              {t.label}
            </FilterChip>
          ))}
        </div>
      </div>

      {/* Transmission */}
      <div>
        <p className="text-[13px] tracking-[0.28em] uppercase text-zinc-500 font-medium mb-3">
          Transmission
        </p>
        <div className="flex flex-wrap gap-2">
          {TRANSMISSIONS.map((t) => (
            <FilterChip
              key={t.value}
              active={filters.transmission === t.value}
              onClick={() => set("transmission", t.value)}
            >
              {t.label}
            </FilterChip>
          ))}
        </div>
      </div>

      {/* Fuel Type */}
      <div>
        <p className="text-[13px] tracking-[0.28em] uppercase text-zinc-500 font-medium mb-3">
          Fuel Type
        </p>
        <div className="flex flex-wrap gap-2">
          {FUEL_TYPES.map((f) => (
            <FilterChip
              key={f.value}
              active={filters.fuelType === f.value}
              onClick={() => set("fuelType", f.value)}
            >
              {f.label}
            </FilterChip>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <p className="text-[13px] tracking-[0.28em] uppercase text-zinc-500 font-medium">
            Max Price / Day
          </p>
          <span className="text-sm font-body font-semibold text-gold">
            ${filters.maxPrice === 1000 ? "1,000+" : filters.maxPrice}
          </span>
        </div>
        <div className="relative">
          <input
            type="range"
            min={50}
            max={1000}
            step={25}
            value={filters.maxPrice}
            onChange={(e) => set("maxPrice", Number(e.target.value))}
            className="w-full h-1.5 appearance-none rounded-full cursor-pointer"
            style={{
              background: `linear-gradient(to right, #c9a84c ${((filters.maxPrice - 50) / 950) * 100}%, #2c2c2e ${((filters.maxPrice - 50) / 950) * 100}%)`,
            }}
          />
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-xs text-platinum-500 font-body">$50</span>
          <span className="text-xs text-platinum-500 font-body">$1,000+</span>
        </div>
      </div>

      {/* Active filter summary */}
      {(filters.type !== "all" || filters.transmission !== "all" || filters.fuelType !== "all" || filters.maxPrice < 1000) && (
        <div className="pt-4 border-t border-white/6">
          <p className="text-xs font-body text-platinum-500 mb-2">Active filters:</p>
          <div className="flex flex-wrap gap-2">
            {filters.type !== "all" && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-body">
                {CAR_TYPES.find((t) => t.value === filters.type)?.label}
                <button onClick={() => set("type", "all")} className="hover:text-white transition-colors">×</button>
              </span>
            )}
            {filters.transmission !== "all" && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-body">
                {TRANSMISSIONS.find((t) => t.value === filters.transmission)?.label}
                <button onClick={() => set("transmission", "all")} className="hover:text-white transition-colors">×</button>
              </span>
            )}
            {filters.fuelType !== "all" && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-body">
                {FUEL_TYPES.find((f) => f.value === filters.fuelType)?.label}
                <button onClick={() => set("fuelType", "all")} className="hover:text-white transition-colors">×</button>
              </span>
            )}
            {filters.maxPrice < 1000 && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-body">
                Up to ${filters.maxPrice}/day
                <button onClick={() => set("maxPrice", 1000)} className="hover:text-white transition-colors">×</button>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
