"use client";

import Link from "next/link";
import CarCard from "@/components/cars/CarCard";
import { getFeaturedCars } from "@/lib/utils";
import cars from "@/data/cars";

export default function FeaturedCars() {
  const featured = getFeaturedCars(cars).slice(0, 6);

  return (
    <section className="relative bg-[#050505] overflow-hidden" style={{ padding: "140px 0" }}>

      {/* ── Ambient background atmosphere ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
      />
      {/* Noise texture for depth */}
      <div className="absolute inset-0 noise pointer-events-none opacity-30" />

      <div
        className="relative z-10"
        style={{
          width: "min(1400px, 92%)",
          margin: "0 auto",
        }}
      >

        {/* ── Section Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">

          {/* Left: Title block */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 mb-6">
              <div
                className="w-10 h-px"
                style={{ background: "linear-gradient(90deg, #c9a84c, transparent)" }}
              />
              <span className="text-[10px] font-body font-semibold tracking-[0.35em] uppercase"
                style={{ color: "#D4AF37" }}>
                Curated Selection
              </span>
            </div>

            {/* Main heading */}
            <h2 
              className="font-display flex items-center gap-3"
              style={{
                fontSize: "clamp(56px, 7vw, 88px)",
                lineHeight: "0.95",
                fontWeight: "800",
                letterSpacing: "-3px",
                marginBottom: "18px",
              }}
            >
              <span className="text-white">Featured</span>
              <span style={{ color: "#D6B25E" }}>Vehicles</span>
            </h2>

            {/* Subtitle */}
            <p className="font-body font-light lg:whitespace-nowrap"
               style={{
                 maxWidth: "620px",
                 color: "rgba(255,255,255,0.72)",
                 fontSize: "18px",
                 lineHeight: "1.8",
               }}
            >
              Handpicked from our premium fleet — each car a statement in its own right.
            </p>
          </div>

          {/* Right: CTA button */}
          <Link
            href="/cars"
            className="group inline-flex items-center gap-3 font-body uppercase transition-all duration-400 shrink-0 self-start lg:self-auto"
            style={{
              padding: "16px 32px",
              borderRadius: "999px",
              background: "linear-gradient(135deg, #E0BE6F, #B68A2F)",
              color: "black",
              fontWeight: "700",
              letterSpacing: "1px",
              boxShadow: "0 10px 30px rgba(214,178,94,0.2)",
              fontSize: "12px",
              textDecoration: "none"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 18px 40px rgba(214,178,94,0.35)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(214,178,94,0.2)";
            }}
          >
            View All Cars
            <svg
              className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* ── Vehicle Grid ── */}
        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
            gap: "38px",
            marginTop: "70px"
          }}
        >
          {featured.map((car, index) => (
            <CarCard key={car.id} car={car} index={index} />
          ))}
        </div>

        {/* ── Bottom divider ── */}
        <div
          className="w-full h-px mt-24"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
          }}
        />
      </div>
    </section>
  );
}
