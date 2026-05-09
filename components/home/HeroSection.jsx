import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-obsidian-900">
      {/* Background layers */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/4 rounded-full blur-3xl pointer-events-none" />

      {/* Background car image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80"
          alt="Luxury sports car"
          className="w-full h-full object-cover object-center opacity-30"
        />
        {/* Subtle radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-obsidian-900/50 to-obsidian-900 opacity-80" />
        {/* Stronger left-side gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian-900 via-obsidian-900/95 to-transparent w-full md:w-[85%] lg:w-[70%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-transparent to-obsidian-900/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-2xl w-full">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-10 h-px bg-gold-gradient" />
            <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-gold">
              Premium Car Rental · London
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-light leading-[1.1] tracking-tight mb-10">
            <span className="block text-[2.75rem] sm:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] text-white">
              Drive Your
            </span>
            <span className="block text-[2.75rem] sm:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] font-bold text-gold-gradient bg-gold-gradient [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background-clip:text]">
              Experience.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-[17px] sm:text-lg text-platinum-300 font-body font-light leading-[1.8] mb-14 max-w-xl">
            From executive city transfers to unforgettable weekend escapes, discover a curated collection of the world&apos;s finest luxury vehicles designed for comfort, performance, and prestige.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-5 mb-20">
            <Link 
              href="/cars" 
              className="inline-flex items-center justify-center gap-2.5 px-9 py-4 text-sm font-body font-semibold tracking-[0.15em] text-obsidian-900 bg-gold hover:bg-white transition-all duration-500 uppercase rounded-full shadow-gold hover:shadow-[0_0_24px_rgba(255,255,255,0.4)] group"
            >
              <svg className="w-4 h-4 transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.739 10.921c-1.347-.39-1.885-.572-3.516-1.01C17.219 8.589 15.78 7 15 7H5c-1.5 0-2.474 1.12-3 3.5L1 15.5V18h1.5c0 1.381 1.119 2.5 2.5 2.5S7.5 19.381 7.5 18h9c0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5H23v-4.5c0-.5-.853-.869-1.261-.079z" />
              </svg>
              Browse Fleet
            </Link>
            <Link 
              href="#how-it-works" 
              className="inline-flex items-center justify-center px-9 py-4 text-sm font-body font-semibold tracking-[0.15em] text-platinum-200 border border-white/20 hover:border-gold hover:text-gold transition-all duration-500 uppercase rounded-full bg-obsidian-900/30 backdrop-blur-md"
            >
              How It Works
            </Link>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 sm:gap-14">
            {[
              { value: "200+", label: "Premium Vehicles" },
              { value: "15K+", label: "Satisfied Clients" },
              { value: "4.9★", label: "Average Rating" },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8 sm:gap-14">
                <div className="flex flex-col gap-2">
                  <p className="font-display font-light text-[2rem] sm:text-[2.5rem] text-white tracking-tight">{stat.value}</p>
                  <p className="text-[10px] font-body font-semibold text-gold tracking-[0.2em] uppercase">{stat.label}</p>
                </div>
                {i !== 2 && <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/15 to-transparent hidden sm:block" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-platinum-600">
        <span className="text-2xs font-body tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-platinum-500/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
