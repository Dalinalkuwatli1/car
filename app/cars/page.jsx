"use client";

import { useState, useMemo } from "react";
import cars from "@/data/cars";
import CarCard from "@/components/cars/CarCard";
import FilterBar from "@/components/cars/FilterBar";
import SectionHeader from "@/components/ui/SectionHeader";

export default function CarsListingPage() {
  const [filters, setFilters] = useState({
    type: "all",
    transmission: "all",
    fuelType: "all",
    maxPrice: 1000,
  });

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      if (filters.type !== "all" && car.type !== filters.type) return false;
      if (filters.transmission !== "all" && car.transmission !== filters.transmission) return false;
      if (filters.fuelType !== "all" && car.fuelType !== filters.fuelType) return false;
      if (car.pricePerDay > filters.maxPrice) return false;
      return true;
    });
  }, [filters]);

  return (
    <main className="min-h-screen bg-obsidian-900 pt-32 pb-24">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <SectionHeader
          heading="Our Fleet"
          subtext="Discover our entire collection of premium vehicles. Use the filters to find the perfect match for your next journey."
          align="left"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar / Filters */}
          <div className="w-full lg:w-80 shrink-0">
            <div className="sticky top-28">
              <FilterBar
                filters={filters}
                onChange={setFilters}
                total={cars.length}
                filtered={filteredCars.length}
              />
            </div>
          </div>

          {/* Grid */}
          <div className="flex-1">
            {filteredCars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            ) : (
              <div className="bg-graphite-700 border border-white/6 rounded-2xl p-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-graphite-600 flex items-center justify-center text-platinum-400 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2">No vehicles found</h3>
                <p className="text-platinum-400 font-body mb-6">
                  We couldn&apos;t find any vehicles matching your current filter criteria.
                </p>
                <button
                  onClick={() => setFilters({ type: "all", transmission: "all", fuelType: "all", maxPrice: 1000 })}
                  className="px-6 py-2.5 rounded-xl bg-gold text-obsidian-900 font-semibold font-body hover:bg-gold-light transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
