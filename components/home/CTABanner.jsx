import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section className="py-24 bg-obsidian-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gold/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-6 tracking-tight">
          Ready to Take the <span className="text-gold-gradient bg-gold-gradient [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background-clip:text]">Wheel?</span>
        </h2>
        <p className="text-lg text-platinum-400 font-body max-w-2xl mx-auto mb-10 leading-relaxed">
          Join thousands of satisfied clients who have elevated their journey with Velox. Book your premium vehicle today.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/cars" variant="primary" size="lg" className="w-full sm:w-auto">
            Book Your Car Now
          </Button>
          <Button href="#contact" variant="ghost" size="lg" className="w-full sm:w-auto">
            Contact Support
          </Button>
        </div>
        
        <p className="mt-8 text-xs font-body text-platinum-500 flex items-center justify-center gap-2">
          <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          No deposit required for selected vehicles.
        </p>
      </div>
    </section>
  );
}
