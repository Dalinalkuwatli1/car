"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { formatPrice } from "@/lib/utils";

/* ── Fuel icons ─────────────────────────────────────── */
const fuelIcons = { petrol: "⛽", diesel: "🛢", electric: "⚡" };

/* ── Type badge config ───────────────────────────────── */
const typeBadge = {
  sports:         { bg: "rgba(28,28,28,0.9)",  color: "#d4d4d4", border: "rgba(255,255,255,0.12)" },
  luxury:         { bg: "rgba(8,8,8,0.75)",    color: "#e8e8e8", border: "rgba(255,255,255,0.18)" },
  suv:            { bg: "rgba(14,14,14,0.85)", color: "#a3a3a3", border: "rgba(255,255,255,0.10)" },
  economy:        { bg: "rgba(20,20,20,0.85)", color: "#a3a3a3", border: "rgba(255,255,255,0.08)" },
  "ultra luxury": { bg: "linear-gradient(135deg,#c9a84c,#e9c15f)", color: "#050505", border: "#c9a84c" },
};

const GOLD = "#D6B25E";
const FALLBACK_IMAGE = "/images/default-car.jpg";

export default function CarCard({ car, index = 0 }) {
  const { slug, brand, model, type, pricePerDay, transmission, fuelType, seats, image, available, badge } = car;

  const [imgSrc, setImgSrc] = useState(image || FALLBACK_IMAGE);
  const [hovered, setHovered] = useState(false);

  const tKey = type?.toLowerCase() ?? "";
  const tb = typeBadge[tKey] ?? typeBadge.economy;
  const isUltraLuxury = tKey === "ultra luxury";

  const shadowIdle    = "none";
  const shadowHovered = "0 25px 60px rgba(0,0,0,0.45)";

  return (
    <>
      <style>{`
        @keyframes fadeUpCard {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .luxury-card {
          animation: fadeUpCard 1s ease forwards;
          opacity: 0;
        }
      `}</style>
      <Link
        href={`/cars/${slug}`}
        className="group flex flex-col relative overflow-hidden transition-all duration-600 luxury-card"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
          border: hovered ? "1px solid rgba(214,178,94,0.28)" : "1px solid rgba(255,255,255,0.06)",
          boxShadow: hovered ? shadowHovered : shadowIdle,
          transform: hovered ? "translateY(-14px)" : "translateY(0)",
          height: "100%",
          borderRadius: "28px",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          animationDelay: `${index * 0.15}s`,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label={`View ${brand} ${model}`}
      >
      {/* Premium Gradient Lighting */}
      <div
        className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-600"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.08), transparent 35%)",
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* ══ IMAGE ══════════════════════════════════════ */}
      <div className="relative w-full shrink-0 overflow-hidden" style={{ height: "300px" }}>
        <Image
          src={imgSrc}
          alt={`${brand} ${model}`}
          fill
          priority={index < 3}
          className="object-cover"
          style={{ 
            transition: "transform 0.9s ease, filter 0.9s ease",
            transform: hovered ? "scale(1.08)" : "scale(1.0)",
            filter: hovered ? "brightness(0.95) contrast(1.08)" : "brightness(0.82) contrast(1.05)"
          }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onError={() => setImgSrc(FALLBACK_IMAGE)}
        />

        {/* Cinematic bottom-fade overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, transparent 40%, rgba(10,10,10,0.9) 100%)",
          }}
        />

        {/* ── Badges ── */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-start justify-between gap-2 z-20">
          {/* Left: extra badge + type */}
          <div className="flex flex-wrap gap-1.5">
            {badge && (
              <span
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                style={{ background: "#fff", color: "#050505" }}
              >
                {badge}
              </span>
            )}
            <span
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
              style={{
                background: isUltraLuxury ? tb.bg : tb.bg,
                color: tb.color,
                border: `1px solid ${tb.border}`,
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              {type}
            </span>
          </div>

          {/* Right: availability */}
          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
            style={{
              background: available ? "rgba(0,255,153,0.1)" : "rgba(255,77,77,0.1)",
              color: available ? "#00FF99" : "#FF4D4D",
              border: `1px solid ${available ? "rgba(0,255,153,0.3)" : "rgba(255,77,77,0.3)"}`,
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: available ? "#00FF99" : "#FF4D4D" }}
            />
            {available ? "Available" : "Unavailable"}
          </span>
        </div>
      </div>

      {/* ══ BODY ════════════════════════════════════════ */}
      <div className="flex flex-col flex-1" style={{ padding: "28px" }}>

        {/* Brand + Model */}
        <div className="mb-5">
          <p
            className="font-body font-semibold uppercase mb-1.5"
            style={{ fontSize: "10px", color: GOLD, letterSpacing: "0.24em" }}
          >
            {brand}
          </p>
          <h3
            className="font-display transition-colors duration-300"
            style={{
              fontSize: "34px",
              fontWeight: "700",
              letterSpacing: "-1px",
              marginBottom: "16px",
              color: hovered ? GOLD : "#ffffff",
              lineHeight: "1.1",
            }}
          >
            {model}
          </h3>
        </div>

        {/* Specs */}
        <div
          className="flex items-center justify-between py-4 mb-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke={GOLD} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            <span className="font-body capitalize" style={{ fontSize: "11px", color: "#737373" }}>{transmission}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span style={{ fontSize: "13px" }}>{fuelIcons[fuelType] ?? "⛽"}</span>
            <span className="font-body capitalize" style={{ fontSize: "11px", color: "#737373" }}>{fuelType}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke={GOLD} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-body" style={{ fontSize: "11px", color: "#737373" }}>{seats} seats</span>
          </div>
        </div>

        {/* Price + CTA — pushed to bottom */}
        <div className="flex items-end justify-between mt-auto pt-1">
          {/* Price */}
          <div>
            <p
              className="font-body font-semibold uppercase mb-1.5"
              style={{ fontSize: "9px", color: "#525252", letterSpacing: "0.18em" }}
            >
              Daily Rate
            </p>
            <div className="flex items-baseline gap-1">
              <span
                className="font-display"
                style={{ fontSize: "48px", fontWeight: "800", color: "#ffffff" }}
              >
                {formatPrice(pricePerDay)}
              </span>
              <span className="font-body" style={{ fontSize: "16px", color: "#ffffff", opacity: 0.6 }}>/ day</span>
            </div>
          </div>

          {/* View Car CTA */}
          <div
            className="relative flex items-center gap-1.5 font-body font-semibold uppercase transition-all duration-300"
            style={{ fontSize: "11px", color: GOLD, letterSpacing: "0.12em" }}
          >
            <span>View Car</span>
            <svg
              className="w-3.5 h-3.5 transition-transform duration-400"
              style={{ transform: hovered ? "translateX(5px)" : "translateX(0)" }}
              fill="none" stroke={GOLD} viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            {/* Animated gold underline glow */}
            <span
              className="absolute -bottom-1 left-0 h-px transition-all duration-500"
              style={{
                width: hovered ? "calc(100% - 18px)" : "0%",
                background: `linear-gradient(90deg, ${GOLD}, #f0cc6a)`,
                boxShadow: "0 0 8px rgba(212,175,55,0.8)",
              }}
            />
          </div>
        </div>
      </div>
      </Link>
    </>
  );
}
