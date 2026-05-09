import CarCard from "@/components/cars/CarCard";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { getFeaturedCars } from "@/lib/utils";
import cars from "@/data/cars";

export default function FeaturedCars() {
  const featured = getFeaturedCars(cars).slice(0, 6);

  return (
    <section className="pt-8 pb-20 bg-obsidian-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="Curated Selection"
            heading={<><span className="text-white">Featured</span> <span className="text-gold">Vehicles</span></>}
            subtext={<span className="text-platinum-400 font-light tracking-wide">Handpicked from our premium fleet — each car a statement in its own right.</span>}
            align="left"
          />
          <Button href="/cars" variant="secondary" size="md" className="shrink-0">
            View All Cars
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}
