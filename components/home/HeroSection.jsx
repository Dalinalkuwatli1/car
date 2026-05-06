import Button from "@/components/ui/Button";

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
          className="w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian-900 via-obsidian-900/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-transparent to-obsidian-900/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-10 h-px bg-gold-gradient" />
            <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-gold">
              Premium Car Rental · London
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-black leading-[0.92] tracking-tight mb-6">
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white">
              Drive Your
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-gold-gradient bg-gold-gradient [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background-clip:text]">
              Experience.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-platinum-400 font-body leading-relaxed mb-10 max-w-xl">
            From executive transfers to weekend track escapes — choose from our curated fleet of the world&apos;s finest vehicles.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button href="/cars" variant="primary" size="lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.739 10.921c-1.347-.39-1.885-.572-3.516-1.01C17.219 8.589 15.78 7 15 7H5c-1.5 0-2.474 1.12-3 3.5L1 15.5V18h1.5c0 1.381 1.119 2.5 2.5 2.5S7.5 19.381 7.5 18h9c0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5H23v-4.5c0-.5-.853-.869-1.261-.079z" />
              </svg>
              Browse Fleet
            </Button>
            <Button href="#how-it-works" variant="secondary" size="lg">
              How It Works
            </Button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 sm:gap-12">
            {[
              { value: "200+", label: "Vehicles" },
              { value: "15K+", label: "Happy Clients" },
              { value: "4.9★", label: "Avg. Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display font-bold text-2xl sm:text-3xl text-white">{stat.value}</p>
                <p className="text-xs font-body text-platinum-500 tracking-wide mt-0.5">{stat.label}</p>
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
