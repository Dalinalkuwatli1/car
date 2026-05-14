"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505]">

      {/* ── Background car image ── */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=85"
          alt="Luxury sports car"
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.35, filter: "brightness(0.72)" }}
        />
        {/* Cinematic dark vignette */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 50% 50%, transparent 20%, rgba(5,5,5,0.7) 70%, #050505 100%)"
        }} />
        {/* Strong left readability gradient */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(90deg, rgba(0,0,0,0.92) 10%, rgba(0,0,0,0.78) 35%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.20) 100%)"
        }} />
        {/* Top and bottom edge fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,5,5,0.6)] via-transparent to-[#050505]" />
      </div>

      {/* ── Ambient gold glows ── */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gold/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gold/5 rounded-full blur-[80px] pointer-events-none" />

      {/* ── Subtle grid pattern ── */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      {/* ── Soft Light Glow Behind Content ── */}
      <div className="absolute top-1/2 -left-[10%] w-[700px] h-[700px] -translate-y-1/2 z-[1] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(214,178,94,0.12) 0%, transparent 70%)" }} />

      {/* ── Content (Left-Centered Luxury Layout) ── */}
      <div
        className="absolute z-10 hero-content-responsive"
        style={{
          left: "9%",
          top: "50%",
          transform: "translateY(-48%)",
          maxWidth: "650px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          textAlign: "left",
          animation: "fadeUp 1.2s ease forwards",
        }}
      >

        {/* Headline */}
        <h1
          className="font-display hero-title-responsive"
          style={{
            fontSize: "76px",
            lineHeight: "1.02",
            fontWeight: "700",
            color: "white",
            marginBottom: "24px",
            letterSpacing: "-0.02em",
          }}
        >
          Drive Your <br />
          <span style={{ color: "#D6B25E" }}>Experience.</span>
        </h1>

        {/* Subheading */}
        <p
          className="font-body font-light hero-desc-responsive"
          style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: "18px",
            lineHeight: "1.8",
            maxWidth: "540px",
            marginBottom: "40px",
          }}
        >
          From executive city transfers to unforgettable weekend escapes, discover a curated
          collection of the world&apos;s finest luxury vehicles designed for comfort, performance,
          and prestige.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap"
          style={{ gap: "16px", marginBottom: "0" }}
        >
          <Link
            href="/cars"
            className="font-body font-bold uppercase transition-all duration-400"
            style={{
              padding: "14px 30px",
              background: "linear-gradient(135deg, #E0BE6F, #B68A2F)",
              color: "black",
              borderRadius: "999px",
              textDecoration: "none",
              letterSpacing: "0.05em",
              fontSize: "14px",
              boxShadow: "0 10px 35px rgba(214,178,94,0.25)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 18px 45px rgba(214,178,94,0.4)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 10px 35px rgba(214,178,94,0.25)";
            }}
          >
            Browse Fleet
          </Link>
          <Link
            href="#how-it-works"
            className="font-body font-bold uppercase transition-all duration-350"
            style={{
              padding: "14px 30px",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "white",
              borderRadius: "999px",
              textDecoration: "none",
              backdropFilter: "blur(8px)",
              letterSpacing: "0.05em",
              fontSize: "14px",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >
            How It Works
          </Link>
        </div>

        {/* Stats */}
        <div
          className="hero-stats-responsive"
          style={{
            display: "flex",
            gap: "70px",
            marginTop: "70px",
          }}
        >
          {[
            { value: "200+", label: "Premium Vehicles" },
            { value: "15K+", label: "Satisfied Clients" },
            { value: "4.9★", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label}>
              <h2
                className="font-display hero-stat-val-responsive"
                style={{
                  fontSize: "42px",
                  color: "white",
                  marginBottom: "6px",
                  fontWeight: "300",
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em",
                }}
              >
                {stat.value}
              </h2>
              <span
                className="font-body uppercase"
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "13px",
                  letterSpacing: "2px",
                  fontWeight: "500",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Responsive Styles & Animations ── */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(-48%);
          }
        }
        @media(max-width: 768px) {
          .hero-content-responsive {
            left: 7% !important;
            right: 7% !important;
            top: 52% !important;
            maxWidth: 100% !important;
            transform: translateY(-50%) !important;
            animation: none !important; /* Mobile fallback without custom transform */
          }
          .hero-title-responsive {
            font-size: 48px !important;
          }
          .hero-desc-responsive {
            font-size: 15px !important;
            line-height: 1.7 !important;
          }
          .hero-stats-responsive {
            gap: 24px !important;
            flex-wrap: wrap !important;
          }
          .hero-stat-val-responsive {
            font-size: 32px !important;
          }
        }
      `}</style>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[9px] font-body tracking-[0.3em] uppercase text-platinum-600">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-platinum-500/40 to-transparent animate-pulse" />
      </div>

    </section>
  );
}
