"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const timelineEvents = [
  { year: "2022", title: "VELOX Founded", description: "Launched with a small, highly curated fleet of luxury sedans in London." },
  { year: "2023", title: "5K Clients Reached", description: "Established a strong reputation for unparalleled service and executive transport." },
  { year: "2024", title: "Expanded Luxury Fleet", description: "Introduced hypercars and bespoke SUVs to meet the demands of our elite clientele." },
  { year: "2025", title: "International Premium Services", description: "Expanding our white-glove concierge and delivery services across Europe." }
];

export default function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative w-full py-[160px] bg-[#050505] overflow-hidden">
      
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: "url('/images/timeline-bg.png')" }}
      />
      
      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#050505] via-[#050505]/60 to-[#050505]" />
      <div className="absolute inset-0 z-0 bg-[#0A0A0A]/70" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-[140px] relative z-10">
        
        <div className="flex flex-col items-center justify-center text-center mb-[100px]">
          <span className="font-body text-[#D4AF37] uppercase tracking-[5px] text-[13px] font-semibold mb-[24px] block">
            Our Journey
          </span>
          <h2 className="font-display text-white text-[40px] md:text-[64px] leading-[1.08] font-bold">
            The Velox Timeline
          </h2>
        </div>

        <div className="w-full max-w-[900px] mx-auto">
          <div className="space-y-[80px] w-full flex flex-col items-center">
            {timelineEvents.map((event, index) => {
              return (
                <motion.div 
                  key={event.year} 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="group w-full flex flex-col items-center text-center transition-all duration-400 ease-out hover:-translate-y-[4px]"
                >
                  <div className="mb-[16px]">
                    <span className="font-display text-[#D4AF37] text-[18px] md:text-[22px] font-bold tracking-[4px]">
                      {event.year}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-white text-[32px] md:text-[40px] font-bold mb-[20px] group-hover:text-[#D4AF37] transition-colors duration-300">
                    {event.title}
                  </h3>
                  
                  <p className="font-body text-white/70 text-[16px] md:text-[18px] leading-[1.9] font-light max-w-[500px] mx-auto">
                    {event.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
