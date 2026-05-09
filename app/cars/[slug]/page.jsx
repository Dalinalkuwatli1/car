import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import cars from "@/data/cars";
import Button from "@/components/ui/Button";
import { AvailabilityBadge, TypeBadge } from "@/components/ui/Badge";
import { formatPrice } from "@/lib/utils";

// Generate static routes at build time
export function generateStaticParams() {
  return cars.map((car) => ({
    slug: car.slug,
  }));
}

export function generateMetadata({ params }) {
  const car = cars.find((c) => c.slug === params.slug);
  if (!car) return { title: "Vehicle Not Found | Velox Rentals" };
  
  return {
    title: `${car.brand} ${car.model} Rental | Velox Rentals`,
    description: car.description,
  };
}

export default function CarDetailPage({ params }) {
  const car = cars.find((c) => c.slug === params.slug);

  if (!car) {
    notFound();
  }

  const {
    brand,
    model,
    type,
    pricePerDay,
    transmission,
    fuelType,
    seats,
    year,
    mileage,
    engine,
    topSpeed,
    acceleration,
    description,
    features,
    image,
    available,
  } = car;

  return (
    <main className="min-h-screen bg-obsidian-900 pt-28 pb-24">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 text-sm font-body text-platinum-500">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link href="/cars" className="hover:text-gold transition-colors">Fleet</Link>
          <span>/</span>
          <span className="text-white">{brand} {model}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Image & Details */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-12">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-graphite-800">
              <Image
                src={image}
                alt={`${brand} ${model}`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Content section */}
            <div>
              <div className="mb-8">
                <h1 className="font-display font-black text-4xl sm:text-5xl text-white mb-4">
                  {brand} <span className="text-gold">{model}</span>
                </h1>
                <p className="text-lg font-body text-platinum-400 leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="mb-12">
                <h2 className="font-display font-bold text-2xl text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-gold" />
                  Technical Specifications
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Engine", value: engine },
                    { label: "0-100 km/h", value: acceleration },
                    { label: "Top Speed", value: topSpeed },
                    { label: "Transmission", value: transmission, capitalize: true },
                    { label: "Fuel Type", value: fuelType, capitalize: true },
                    { label: "Seats", value: seats },
                    { label: "Year", value: year },
                    { label: "Mileage", value: mileage },
                  ].map((spec) => (
                    <div key={spec.label} className="bg-graphite-700/50 rounded-xl p-4 border border-white/5 flex items-center justify-between">
                      <span className="text-sm font-body text-platinum-500">{spec.label}</span>
                      <span className={`text-sm font-body font-semibold text-white ${spec.capitalize ? "capitalize" : ""}`}>
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Premium Features */}
              <div>
                <h2 className="font-display font-bold text-2xl text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-gold" />
                  Premium Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm font-body text-platinum-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Booking Card */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="sticky top-32 bg-graphite-700 rounded-3xl p-8 border border-white/6 shadow-card">
              {/* Badges row */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/6">
                <TypeBadge type={type} />
                <AvailabilityBadge available={available} />
              </div>

              {/* Price block */}
              <div className="mb-8">
                <p className="text-sm font-body text-platinum-500 uppercase tracking-widest mb-2">Daily Rate</p>
                <div className="flex items-end gap-2">
                  <span className="font-display font-black text-5xl text-white tracking-tight">
                    {formatPrice(pricePerDay)}
                  </span>
                  <span className="text-base font-body text-platinum-500 mb-1">/ day</span>
                </div>
                <p className="text-xs font-body text-platinum-500 mt-2">
                  Includes comprehensive insurance & 150 miles/day.
                </p>
              </div>

              {/* CTA */}
              <div className="space-y-4">
                <Button 
                  variant="primary" 
                  size="xl" 
                  className="w-full justify-center text-lg"
                  disabled={!available}
                >
                  {available ? "Request Booking" : "Currently Unavailable"}
                </Button>
                <Button variant="outline" size="lg" className="w-full justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Contact Sales Team
                </Button>
              </div>

              {/* Guarantees */}
              <div className="mt-8 pt-6 border-t border-white/6 space-y-4">
                {[
                  { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", text: "Price match guarantee" },
                  { icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", text: "Free cancellation (48h)" },
                  { icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z", text: "Door-to-door delivery" },
                ].map((g, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-platinum-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={g.icon} />
                    </svg>
                    <span className="text-sm font-body text-platinum-400">{g.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
