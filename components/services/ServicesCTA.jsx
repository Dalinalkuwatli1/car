"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="relative mt-[220px] pb-[120px] bg-[#050505] overflow-hidden flex items-center justify-center text-center">
      
      {/* Background Cinematic Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#D4AF37]/[0.05] blur-[140px] rounded-full pointer-events-none z-[-1]" />

      <div className="relative z-10 w-full max-w-[1000px] mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center w-full"
        >
          <span className="font-body text-[#D4AF37] uppercase tracking-[5px] text-[13px] font-semibold mb-6 block">
            Your Journey Awaits
          </span>
          <h2 className="font-display text-white text-[40px] md:text-[72px] leading-[1.05] font-bold text-center max-w-[900px] mx-auto mb-10">
            Ready to Experience <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F4D76B]">Luxury Mobility?</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-[24px] mt-[50px]">
            <Link 
              href="/inventory"
              className="w-full sm:w-auto h-[48px] px-6 flex items-center justify-center bg-gradient-to-br from-[#D4AF37] to-[#F4D76B] rounded-[14px] text-[#050505] font-body font-bold text-[14px] uppercase tracking-[2px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(212,175,55,0.35)]"
            >
              Browse Fleet
            </Link>
            
            <Link 
              href="/contact"
              className="w-full sm:w-auto group h-[48px] px-6 flex items-center justify-center bg-transparent border border-white/20 rounded-[14px] text-white font-body font-bold text-[14px] uppercase tracking-[2px] transition-all duration-300 hover:bg-white/[0.05] hover:-translate-y-1 hover:border-[#D4AF37]/50"
            >
              <span className="flex items-center gap-3">
                Contact Concierge
                <ArrowRight size={16} className="text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
