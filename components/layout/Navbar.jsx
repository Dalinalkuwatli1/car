"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const GOLD = "#D6B25E";

const navLinks = [
  { label: "Home",      href: "/" },
  { label: "Inventory", href: "/cars" },
  { label: "Brands",    href: "#brands" },
  { label: "Services",  href: "#services" },
  { label: "About Us",  href: "#about" },
  { label: "Contact",   href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const menuRef = useRef(null);

  useEffect(() => {
    setActiveLink(window.location.pathname);
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Main navbar ── */}
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 999,
          height: "90px",
          display: "flex",
          alignItems: "center",
          transition: "background 0.6s ease, border-color 0.6s ease, box-shadow 0.6s ease, backdrop-filter 0.6s ease",
          background: "rgba(0,0,0,0.35)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.6)" : "none",
        }}
      >
        {/* Subtle gold top line — always visible */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.2), transparent)",
          pointerEvents: "none",
        }} />

        {/* ── Inner container ── */}
        <div
          style={{
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
            paddingLeft: "clamp(24px, 5vw, 70px)",
            paddingRight: "clamp(24px, 5vw, 70px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >

          {/* ── Logo ── */}
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none",
              flexShrink: 0,
              zIndex: 10,
            }}
            aria-label="Velox Rentals home"
          >
            <svg
              style={{
                width: "28px", height: "28px",
                color: GOLD,
                transition: "transform 0.4s ease, filter 0.4s ease",
                flexShrink: 0,
              }}
              fill="currentColor"
              viewBox="0 0 24 24"
              onMouseEnter={e => {
                e.currentTarget.style.transform = "scale(1.12)";
                e.currentTarget.style.filter = `drop-shadow(0 0 8px ${GOLD})`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.filter = "none";
              }}
            >
              <path d="M12 21L2 3h5.5L12 11.5L16.5 3H22L12 21z" />
            </svg>
            <span
              className="font-body font-normal uppercase"
              style={{
                fontSize: "15px",
                letterSpacing: "0.38em",
                color: "#ffffff",
                marginLeft: "4px",
                transition: "color 0.4s ease",
              }}
              onMouseEnter={e => e.currentTarget.style.color = GOLD}
              onMouseLeave={e => e.currentTarget.style.color = "#ffffff"}
            >
              VELOX
            </span>
          </Link>

          {/* ── Desktop nav — absolutely centered ── */}
          <nav
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              alignItems: "center",
              gap: "45px",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = activeLink === link.href;
              return (
                <NavLink
                  key={link.href}
                  href={link.href}
                  isActive={isActive}
                  onClick={() => setActiveLink(link.href)}
                >
                  {link.label}
                </NavLink>
              );
            })}
          </nav>

          {/* ── Desktop CTA buttons ── */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              flexShrink: 0,
              zIndex: 10,
            }}
            className="desktop-ctas"
          >
            {/* Sign In */}
            <Link
              href="/login"
              className="font-body font-semibold uppercase"
              style={{
                fontSize: "11px",
                letterSpacing: "0.14em",
                color: "#ffffff",
                textDecoration: "none",
                padding: "12px 24px",
                borderRadius: "8px",
                border: `1px solid rgba(212,175,55,0.55)`,
                transition: "all 0.3s ease",
                display: "inline-block",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = GOLD;
                e.currentTarget.style.color = "#050505";
                e.currentTarget.style.borderColor = GOLD;
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(212,175,55,0.3)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.borderColor = "rgba(212,175,55,0.55)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Sign In
            </Link>

            {/* List Your Car */}
            <Link
              href="/list-car"
              className="font-body font-bold uppercase"
              style={{
                fontSize: "11px",
                letterSpacing: "0.14em",
                color: "#050505",
                textDecoration: "none",
                padding: "12px 26px",
                borderRadius: "100px",
                background: "linear-gradient(135deg, #c9a84c, #e9c15f)",
                border: "1px solid transparent",
                boxShadow: "0 4px 20px rgba(212,175,55,0.35)",
                transition: "all 0.3s ease",
                display: "inline-block",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 0 28px rgba(212,175,55,0.55)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(212,175,55,0.35)";
              }}
            >
              List Your Car
            </Link>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              width: "40px", height: "40px",
              borderRadius: "10px",
              background: "none",
              border: "none",
              cursor: "pointer",
              zIndex: 10,
              transition: "background 0.2s ease",
            }}
            className="mobile-hamburger"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.06)"}
            onMouseLeave={e => e.currentTarget.style.background = "none"}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "20px", height: "1.5px",
                  background: "#ffffff",
                  borderRadius: "2px",
                  transition: "all 0.35s ease",
                  transform: menuOpen
                    ? i === 0 ? "rotate(45deg) translate(4.5px, 4.5px)"
                    : i === 1 ? "scaleX(0) opacity(0)"
                    : "-rotate-45deg translate(4.5px, -4.5px)"
                    : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>

        </div>
      </header>

      {/* ── Mobile drawer ── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 998,
          visibility: menuOpen ? "visible" : "hidden",
          transition: "visibility 0.4s ease",
          pointerEvents: menuOpen ? "auto" : "none",
        }}
        aria-hidden={!menuOpen}
        className="lg:hidden"
      >
        {/* Backdrop */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.8)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            opacity: menuOpen ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
          onClick={() => setMenuOpen(false)}
        />
        {/* Panel */}
        <div
          ref={menuRef}
          style={{
            position: "absolute",
            top: 0, right: 0, bottom: 0,
            width: "320px",
            background: "#0a0a0a",
            borderLeft: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            flexDirection: "column",
            transform: menuOpen ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {/* Panel header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px", height: "90px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <svg style={{ width: "22px", height: "22px", color: GOLD }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21L2 3h5.5L12 11.5L16.5 3H22L12 21z" />
              </svg>
              <span className="font-body font-normal uppercase" style={{ fontSize: "14px", letterSpacing: "0.35em", color: "#ffffff", marginLeft: "2px" }}>VELOX</span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              style={{ width: "36px", height: "36px", borderRadius: "10px", border: "none", background: "rgba(255,255,255,0.05)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(232,232,232,0.6)", transition: "all 0.2s ease" }}
              aria-label="Close menu"
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#ffffff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "rgba(232,232,232,0.6)"; }}
            >
              <svg style={{ width: "16px", height: "16px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav style={{ flex: 1, padding: "32px 16px", display: "flex", flexDirection: "column", gap: "4px" }}>
            {navLinks.map((link) => {
              const isActive = activeLink === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => { setActiveLink(link.href); setMenuOpen(false); }}
                  className="font-body font-medium uppercase"
                  style={{
                    fontSize: "13px",
                    letterSpacing: "0.16em",
                    textDecoration: "none",
                    padding: "14px 16px",
                    borderRadius: "12px",
                    transition: "all 0.2s ease",
                    color: isActive ? GOLD : "rgba(232,232,232,0.6)",
                    background: isActive ? "rgba(212,175,55,0.06)" : "transparent",
                    border: isActive ? "1px solid rgba(212,175,55,0.15)" : "1px solid transparent",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTAs */}
          <div style={{ padding: "0 16px 32px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <Link href="/login" onClick={() => setMenuOpen(false)}
              className="font-body font-semibold uppercase"
              style={{ display: "block", textAlign: "center", padding: "14px", fontSize: "12px", letterSpacing: "0.15em", color: "#ffffff", textDecoration: "none", border: "1px solid rgba(212,175,55,0.45)", borderRadius: "12px", transition: "all 0.3s ease" }}
              onMouseEnter={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.color = "#050505"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#ffffff"; }}
            >Sign In</Link>
            <Link href="/list-car" onClick={() => setMenuOpen(false)}
              className="font-body font-bold uppercase"
              style={{ display: "block", textAlign: "center", padding: "14px", fontSize: "12px", letterSpacing: "0.15em", color: "#050505", textDecoration: "none", background: "linear-gradient(135deg, #c9a84c, #e9c15f)", borderRadius: "100px", boxShadow: "0 4px 20px rgba(212,175,55,0.3)", transition: "all 0.3s ease" }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(212,175,55,0.5)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 4px 20px rgba(212,175,55,0.3)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >List Your Car</Link>
          </div>
        </div>
      </div>

      {/* ── Responsive: hide desktop nav/CTAs, show hamburger on mobile ── */}
      <style>{`
        .desktop-nav  { display: flex !important; }
        .desktop-ctas { display: flex !important; }
        .mobile-hamburger { display: none !important; }

        @media (max-width: 1024px) {
          .desktop-nav  { display: none !important; }
          .desktop-ctas { display: none !important; }
          .mobile-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}

/* ── NavLink sub-component with gold underline animation ── */
function NavLink({ href, isActive, onClick, children }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="font-body font-semibold uppercase"
      style={{
        position: "relative",
        fontSize: "13px",
        letterSpacing: "1.5px",
        textDecoration: "none",
        color: isActive ? GOLD : "rgba(255,255,255,0.75)",
        transition: "color 0.3s ease",
        paddingBottom: "2px",
      }}
      onMouseEnter={e => {
        if (!isActive) e.currentTarget.style.color = "#ffffff";
        const bar = e.currentTarget.querySelector(".underline-bar");
        if (bar && !isActive) { bar.style.width = "100%"; bar.style.opacity = "1"; }
      }}
      onMouseLeave={e => {
        if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.75)";
        const bar = e.currentTarget.querySelector(".underline-bar");
        if (bar && !isActive) { bar.style.width = "0%"; bar.style.opacity = "0"; }
      }}
    >
      {children}
      {/* Gold underline bar */}
      <span
        className="underline-bar"
        style={{
          position: "absolute",
          left: 0,
          bottom: "-8px",
          height: "2px",
          background: GOLD,
          width: isActive ? "100%" : "0%",
          opacity: isActive ? 1 : 0,
          transition: "width 0.35s ease, opacity 0.35s ease",
          borderRadius: "2px",
        }}
      />
    </Link>
  );
}
