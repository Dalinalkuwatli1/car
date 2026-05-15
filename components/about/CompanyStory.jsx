"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Reusable hook for counters
function useAnimatedCounter(endValue, duration, inView) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (inView && !hasStarted) {
      setHasStarted(true);
      let startTime = null;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOut * endValue));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else if (endValue % 1 !== 0) {
            setCount(endValue); // for floats like 4.9
        }
      };
      requestAnimationFrame(animate);
    }
  }, [endValue, duration, inView, hasStarted]);

  return count;
}

function StatBox({ value, suffix, label, delay, isFloat = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useAnimatedCounter(value, 2000, inView);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white/[0.02] border border-white/[0.05] rounded-[20px] p-6 backdrop-blur-md relative group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 via-[#D4AF37]/0 to-[#D4AF37]/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="flex items-baseline gap-1 mb-1">
          <span className="font-display text-[40px] font-bold text-[#D4AF37]">
            {isFloat ? count.toFixed(1) : count}
          </span>
          <span className="font-display text-[28px] font-bold text-[#D4AF37]">
            {suffix}
          </span>
        </div>
        <span className="font-body text-white/60 text-[14px] uppercase tracking-[2px]">
          {label}
        </span>
      </div>
    </motion.div>
  );
}

export default function CompanyStory() {
  return (
    <section className="relative w-full py-[140px] bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-[140px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-[80px] items-center">
          
          {/* Left Column: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="pl-[40px] md:pl-[140px] lg:pl-[120px] xl:pl-[160px]"
          >
            <span className="font-body text-[#D4AF37] uppercase tracking-[5px] text-[13px] font-semibold mb-[24px] block">
              The Velox Standard
            </span>
            <h2 className="font-display text-white text-[40px] md:text-[64px] leading-[1.08] font-bold mb-[40px]">
              A Legacy of <br />Uncompromising Luxury
            </h2>
            <div className="space-y-[30px]">
              <p className="font-body text-white/80 text-[18px] md:text-[20px] leading-[1.9] font-light">
                VELOX was founded with one vision: to create a seamless luxury car rental experience for clients who expect more than transportation.
              </p>
              <p className="font-body text-white/60 text-[16px] md:text-[18px] leading-[1.9] font-light">
                From executive sedans to high-performance sports cars, our curated fleet is designed for comfort, prestige, and unforgettable journeys. We believe that true luxury lies in the details—from the pristine condition of our vehicles to the personalized touch of our concierge team.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Image & Stats */}
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/[0.05] blur-[140px] rounded-full pointer-events-none z-[-1]" />
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full h-[350px] md:h-[450px] rounded-[30px] overflow-hidden mb-[40px] border border-white/[0.05]"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/default-car.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
            </motion.div>

            <div className="grid grid-cols-2 gap-[24px] relative z-20">
              <StatBox value={200} suffix="+" label="Premium Vehicles" delay={0.2} />
              <StatBox value={15} suffix="K+" label="Satisfied Clients" delay={0.3} />
              <StatBox value={24} suffix="/7" label="Concierge Support" delay={0.4} />
              <StatBox value={4.9} suffix="" label="Average Rating" delay={0.5} isFloat={true} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
