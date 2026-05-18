"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.14, delayChildren: 0.35 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">

      {/* ── Background: pure dark left, car image on right only ── */}
      <div className="absolute inset-0">
        {/* Pure dark left side behind text */}
        <div className="absolute inset-0" style={{ background: "#050505" }} />

        {/* Car image — right 58% only */}
        <div className="absolute top-0 bottom-0 right-0" style={{ width: "58%" }}>
          <motion.img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=85"
            alt="Luxury sports car"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center center" }}
            initial={{ scale: 1.07, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.85 }}
            transition={{ duration: 3.2, ease: [0.16, 1, 0.3, 1] }}
          />
          {/* Fade left edge of car image into dark */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, #050505 0%, rgba(5,5,5,0.6) 25%, rgba(5,5,5,0.1) 55%, rgba(5,5,5,0.3) 100%)" }} />
        </div>

        {/* Cinematic vignette overall */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 50%, transparent 30%, rgba(5,5,5,0.4) 70%, rgba(5,5,5,0.9) 100%)" }} />
        {/* Top + bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,5,5,0.5)] via-transparent to-[#050505]" />
      </div>

      {/* ── Ambient gold glows ── */}
      <div className="absolute top-1/3 left-1/4 w-[480px] h-[480px] rounded-full blur-[130px] pointer-events-none" style={{ background: "rgba(201,168,76,0.04)" }} />
      <div className="absolute bottom-1/4 left-1/3 w-60 h-60 rounded-full blur-[80px] pointer-events-none" style={{ background: "rgba(201,168,76,0.06)" }} />

      {/* ── Grid pattern ── */}
      <div className="absolute inset-0 grid-pattern opacity-25" />

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto pl-8 sm:pl-16 md:pl-28 lg:pl-40 xl:pl-48 pr-6 sm:pr-10 pt-40 pb-28">
        <motion.div
          className="flex flex-col items-start text-left gap-7 lg:gap-8"
          style={{ maxWidth: "660px" }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* ── Headline ── */}
          <motion.h1
            className="font-display tracking-tight"
            style={{ lineHeight: 1.04 }}
            variants={itemVariants}
          >
            {/* "Drive Your" — white, extrabold */}
            <span
              className="block font-extrabold text-white"
              style={{ fontSize: "clamp(2.3rem, 4.8vw, 4.4rem)" }}
            >
              Drive Your
            </span>

            {/* "Experience." — gold gradient, black weight */}
            <span
              className="block font-black"
              style={{
                fontSize: "clamp(2.3rem, 4.8vw, 4.4rem)",
                background: "linear-gradient(135deg, #c9a84c 0%, #e9c15f 48%, #b08a2e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Experience.
            </span>
          </motion.h1>

          {/* ── Subtitle ── */}
          <motion.p
            className="font-body font-light leading-[1.8] text-white/55"
            style={{ fontSize: "clamp(14px, 1.6vw, 17px)", maxWidth: "520px" }}
            variants={itemVariants}
          >
            From executive city transfers to unforgettable weekend escapes, discover a curated
            collection of the world&apos;s finest luxury vehicles designed for comfort, performance,
            and prestige.
          </motion.p>

          {/* ── CTA Buttons — side by side, content-sized ── */}
          <motion.div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto" variants={itemVariants}>
            {/* Primary — gold pill */}
            <Link
              href="/cars"
              className="inline-flex w-full sm:w-auto items-center justify-center font-body font-semibold uppercase rounded-full transition-all duration-[400ms] hover:-translate-y-[3px]"
              style={{
                padding: "14px 32px",
                fontSize: "13px",
                letterSpacing: "0.15em",
                color: "#050505",
                background: "linear-gradient(135deg, #c9a84c, #e9c15f)",
                boxShadow: "0 8px 28px rgba(201,168,76,0.35)",
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 18px 48px rgba(201,168,76,0.6)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 8px 28px rgba(201,168,76,0.35)"; }}
            >
              Browse Fleet
            </Link>

            {/* Secondary — dark pill with border */}
            <Link
              href="#how-it-works"
              className="inline-flex w-full sm:w-auto items-center justify-center font-body font-semibold uppercase rounded-full transition-all duration-[400ms] hover:-translate-y-[3px] hover:border-[rgba(201,168,76,0.5)] hover:text-white"
              style={{
                padding: "14px 32px",
                fontSize: "13px",
                letterSpacing: "0.15em",
                color: "rgba(255,255,255,0.75)",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(12px)",
              }}
            >
              How It Works
            </Link>
          </motion.div>

          {/* ── Stats ── */}
          <motion.div
            className="flex flex-wrap items-center mt-4 gap-y-4"
            variants={itemVariants}
          >
            {[
              { value: "200+", label: "Premium Vehicles" },
              { value: "15K+", label: "Satisfied Clients" },
              { value: "4.9★", label: "Average Rating" },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center">
                {/* Stat block */}
                <div className="flex flex-col gap-[6px] pr-8 sm:pr-12">
                  <p
                    className="font-display font-light text-white tracking-tight leading-none"
                    style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="font-body font-semibold uppercase text-[#c9a84c]"
                    style={{ fontSize: "10px", letterSpacing: "0.28em", opacity: 0.85 }}
                  >
                    {stat.label}
                  </p>
                </div>

                {/* Vertical divider */}
                {i !== 2 && (
                  <div
                    className="hidden sm:block"
                    style={{
                      width: "1px",
                      height: "52px",
                      marginRight: "52px",
                      background: "linear-gradient(to bottom, transparent, rgba(201,168,76,0.28), transparent)",
                    }}
                  />
                )}
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* ── Scroll cue ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <span className="font-body uppercase text-white/30" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/25 to-transparent animate-pulse" />
      </div>

    </section>
  );
}
