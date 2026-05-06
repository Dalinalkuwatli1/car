import SectionHeader from "@/components/ui/SectionHeader";

const benefits = [
  {
    title: "All-Inclusive Insurance",
    description: "Every rental includes premium comprehensive coverage. No hidden fees, no deductible surprises. Drive with absolute peace of mind.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "White-Glove Delivery",
    description: "We deliver your chosen vehicle to your home, hotel, or directly to the arrivals terminal at any major London airport.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Pristine Condition",
    description: "Our fleet is meticulously maintained. Every vehicle is deep-cleaned and undergoes a 40-point inspection before every single handover.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "24/7 Concierge Support",
    description: "Your dedicated concierge is available around the clock to assist with route planning, restaurant reservations, or roadside assistance.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-graphite-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left: Image/Visual */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-card">
              <img 
                src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1000&q=90" 
                alt="Premium car interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-obsidian-900/80 via-transparent to-transparent" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-8 -right-8 bg-obsidian-900 border border-white/10 p-6 rounded-2xl shadow-card-hover hidden sm:block max-w-[240px] animate-float">
              <div className="flex items-center gap-2 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-display font-bold text-white mb-1">5.0 / 5 Rating</p>
              <p className="text-xs font-body text-platinum-400">Based on 2,000+ client reviews on Trustpilot.</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2">
            <SectionHeader
              eyebrow="The Velox Difference"
              heading={
                <>
                  Beyond Just <span className="text-gold-gradient bg-gold-gradient [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background-clip:text]">Renting</span>
                </>
              }
              subtext="We don't just hand over the keys; we curate an experience. From booking to drop-off, expect nothing less than perfection."
              align="left"
              className="mb-12"
            />

            <div className="space-y-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-5 group">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-graphite-600 border border-white/6 flex items-center justify-center text-platinum-300 group-hover:bg-gold/10 group-hover:text-gold group-hover:border-gold/30 transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-gold transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-sm font-body text-platinum-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
