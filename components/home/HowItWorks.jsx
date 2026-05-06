import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Choose Your Car",
    description:
      "Browse our curated fleet of premium vehicles. Filter by type, fuel, transmission, and budget to find your perfect match.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Book Instantly",
    description:
      "Select your dates, add extras, and confirm your reservation in under 2 minutes. Flexible cancellation included.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Drive & Enjoy",
    description:
      "We deliver the car to your door or preferred location. Full tank, cleaned, and ready. Return at your convenience.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-graphite-700 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Simple Process"
          heading={
            <>
              How It{" "}
              <span className="text-gold-gradient bg-gold-gradient [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background-clip:text]">
                Works
              </span>
            </>
          }
          subtext="Renting a premium vehicle should feel effortless. We've distilled the process to three simple steps."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-14 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center group"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Number + Icon */}
              <div className="relative mb-8">
                <div className="w-24 h-24 rounded-2xl bg-graphite-600 border border-white/8 flex items-center justify-center text-gold group-hover:bg-gold/8 group-hover:border-gold/25 transition-all duration-300 group-hover:shadow-gold">
                  {step.icon}
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gold-gradient flex items-center justify-center">
                  <span className="font-display font-black text-xs text-obsidian-900">{i + 1}</span>
                </div>
              </div>

              <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-gold transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-sm font-body text-platinum-500 leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
