"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Fleet", href: "/cars" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-obsidian-900/95 backdrop-blur-xl border-b border-white/5 shadow-nav py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group" aria-label="Velox Rentals home">
              <div className="relative w-9 h-9 flex items-center justify-center">
                <div className="absolute inset-0 bg-gold-gradient rounded-lg opacity-90 group-hover:opacity-100 transition-opacity" />
                <svg className="relative z-10 w-5 h-5 text-obsidian-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.739 10.921c-1.347-.39-1.885-.572-3.516-1.01C17.219 8.589 15.78 7 15 7H5c-1.5 0-2.474 1.12-3 3.5L1 15.5V18h1.5c0 1.381 1.119 2.5 2.5 2.5S7.5 19.381 7.5 18h9c0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5H23v-4.5c0-.5-.853-.869-1.261-.079zM5 8.5h9.5l1.5 3.5H5.5L5 8.5zM5 19c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm14 0c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z"/>
                </svg>
              </div>
              <span className="font-display font-bold text-xl tracking-widest text-white uppercase">
                VELOX
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-body font-medium text-platinum-400 hover:text-white transition-colors duration-200 hover-underline rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Button href="/cars" variant="secondary" size="sm">
                View Fleet
              </Button>
              <Button href="/cars" variant="primary" size="sm">
                Book a Car
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${menuOpen ? "visible" : "invisible"}`}
        aria-hidden={!menuOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMenuOpen(false)}
        />
        {/* Panel */}
        <div
          ref={menuRef}
          className={`absolute top-0 right-0 bottom-0 w-72 bg-graphite-700 border-l border-white/8 transition-transform duration-300 flex flex-col ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
            <span className="font-display font-bold text-lg tracking-widest text-white uppercase">VELOX</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/8 text-platinum-400"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex-1 px-4 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-base font-body font-medium text-platinum-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-4 pb-8 flex flex-col gap-3">
            <Button href="/cars" variant="outline" size="md" className="w-full" onClick={() => setMenuOpen(false)}>
              View Fleet
            </Button>
            <Button href="/cars" variant="primary" size="md" className="w-full" onClick={() => setMenuOpen(false)}>
              Book a Car
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
