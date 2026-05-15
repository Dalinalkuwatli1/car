"use client";

import { motion } from "framer-motion";
import { LogIn } from "lucide-react";

export default function SignInButton({ onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.05,
        y: -2,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-full
        border
        border-white/20
        bg-white/10
        backdrop-blur-xl
        px-6
        py-3
        text-white
        font-body
        font-semibold
        uppercase
        text-xs
        tracking-[0.14em]
        transition-all
        duration-500
        hover:border-[#D6B25E]/50
        hover:shadow-[0_0_25px_rgba(214,178,94,0.15)]
      "
    >
      {/* Animated Glow */}
      <span
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-transparent
          via-[#D6B25E]/20
          to-transparent
          translate-x-[-100%]
          group-hover:translate-x-[100%]
          transition-transform
          duration-1000
        "
      />

      {/* Content */}
      <div className="relative flex items-center gap-2">
        <LogIn size={16} className="text-[#D6B25E] transition-colors group-hover:text-white" />
        <span>Sign In</span>
      </div>
    </motion.button>
  );
}
