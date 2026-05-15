"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function MeetTheTeam() {
  return (
    <section className="relative w-full pt-[200px] pb-[200px] bg-[#050505] border-t border-white/[0.05] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-[140px] relative z-10">
        
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Top Column: Title & Text */}
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center mb-[140px]"
          >
            <span className="font-body text-[#D4AF37] uppercase tracking-[5px] text-[13px] font-semibold mb-[24px] block">
              Leadership
            </span>
            <h2 className="font-display text-white text-[40px] md:text-[64px] leading-[1.08] font-bold mb-[30px]">
              Meet The Team
            </h2>
            <p className="font-body text-white/70 text-[18px] md:text-[20px] leading-[1.9] font-light max-w-[600px] mx-auto">
              VELOX is led by a passionate team of automotive enthusiasts and digital innovators dedicated to redefining luxury mobility.
            </p>
          </motion.div>

          {/* Bottom Column: Team Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="w-full flex justify-center"
          >
            {/* Team Card */}
            <div className="group relative w-full max-w-[520px] bg-white/[0.025] border border-white/[0.05] rounded-[32px] p-[50px] backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-[#D4AF37]/30 hover:shadow-[0_20px_60px_rgba(212,175,55,0.08)] hover:-translate-y-[5px]">
              
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 via-[#D4AF37]/0 to-[#D4AF37]/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="w-[160px] h-[160px] mx-auto mb-8 rounded-full border-2 border-white/10 group-hover:border-[#D4AF37]/50 transition-all duration-500 overflow-hidden shadow-2xl">
                  <div className="w-full h-full bg-[#111111] flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                    <span className="font-display text-[#D4AF37] text-[72px] font-bold opacity-50">D</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="font-display text-white text-[32px] font-bold tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300">
                    Dalin Alkuwatli
                  </h3>
                  <span className="font-body text-[#D4AF37] text-[14px] uppercase tracking-[3px] block mb-6 mt-2 font-semibold">
                    Founder & Creative Developer
                  </span>
                  <p className="font-body text-white/60 text-[16px] md:text-[18px] leading-[1.8] font-light max-w-[340px] mx-auto mb-10">
                    Passionate about creating luxury digital experiences through modern UI/UX and premium web technologies.
                  </p>
                  
                  {/* Socials */}
                  <div className="flex items-center justify-center gap-5">
                    <button className="w-[46px] h-[46px] rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 hover:-translate-y-1 transition-all duration-300">
                      <FaLinkedin size={20} />
                    </button>
                    <button className="w-[46px] h-[46px] rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 hover:-translate-y-1 transition-all duration-300">
                      <FaTwitter size={20} />
                    </button>
                    <button className="w-[46px] h-[46px] rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 hover:-translate-y-1 transition-all duration-300">
                      <FaEnvelope size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
