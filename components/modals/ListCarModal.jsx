"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, UploadCloud, CheckCircle2 } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function ListCarModal({ isOpen, onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImages(Array.from(e.target.files));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setSelectedImages(Array.from(e.dataTransfer.files));
    }
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsSubmitting(false);
      setIsSuccess(false);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
      }, 3000);
    }, 2000);
  };

  const inputStyles = `
    w-full
    h-[56px]
    px-5
    rounded-xl
    bg-white/[0.03]
    border border-white/10
    text-white
    placeholder:text-zinc-500
    text-[15px]
    tracking-wide
    font-body
    transition-all duration-300
    focus:border-[#D4AF37]
    focus:bg-white/[0.05]
    focus:outline-none
  `;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/80
            backdrop-blur-md
            p-4
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
            className="
              relative
              w-full
              max-w-[520px]
              rounded-[32px]
              border
              border-white/10
              bg-[#070707]
              p-6 md:p-8
              shadow-[0_0_80px_rgba(0,0,0,0.9)]
              backdrop-blur-2xl
              overflow-hidden
            "
          >
            {/* Cinematic Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#D4AF3720,transparent_60%)] pointer-events-none" />

            {/* Professional Close Button */}
            <button
              onClick={onClose}
              className="
                absolute top-6 right-6 z-50
                w-12 h-12
                rounded-full
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                flex items-center justify-center
                transition-all duration-300
                hover:border-[#D4AF37]
                hover:bg-[#D4AF37]/10
                hover:rotate-90
                group
              "
            >
              <X size={20} className="text-white/70 group-hover:text-[#D4AF37] transition-colors" />
            </button>

            {!isSuccess ? (
              <div className="relative z-10">
                {/* Header Layout */}
                <div className="mb-8 pr-12">
                  <p className="mb-2 text-[11px] tracking-[0.45em] text-[#D4AF37] uppercase font-semibold">
                    Partnership
                  </p>
                  <h2
                    className="
                      text-3xl md:text-4xl
                      font-bold
                      leading-[1.15]
                      text-white
                      font-display
                      mb-3
                    "
                  >
                    List Your Luxury Car
                  </h2>
                  <p className="text-zinc-400 text-[14px] leading-[1.7] font-body">
                    Join our exclusive fleet. Provide your details and our concierge team will contact you.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className={inputStyles}
                  />

                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    className={inputStyles}
                  />

                  <input
                    type="text"
                    required
                    placeholder="Car Brand & Model (e.g. Porsche 911)"
                    className={inputStyles}
                  />

                  {/* Premium Upload Area */}
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    className="
                      relative
                      w-full 
                      border border-dashed border-white/15
                      rounded-2xl
                      bg-gradient-to-b from-white/[0.03] to-transparent
                      py-8 px-6
                      flex flex-col items-center justify-center text-center cursor-pointer 
                      transition-all duration-500
                      hover:border-[#D4AF37]
                      hover:bg-[#D4AF37]/[0.03]
                      group
                    "
                  >
                    <input 
                      type="file" 
                      ref={fileInputRef} 
                      onChange={handleFileChange} 
                      accept="image/*" 
                      multiple 
                      className="hidden" 
                    />

                    {selectedImages.length > 0 ? (
                      <div className="flex flex-col items-center animate-in fade-in zoom-in duration-300">
                        <CheckCircle2 size={40} className="text-[#D4AF37] mb-3" />
                        <p className="font-display text-white text-[16px] font-bold mb-1">
                          {selectedImages.length} Image{selectedImages.length > 1 ? 's' : ''} Ready
                        </p>
                        <p 
                          className="font-body text-zinc-500 text-[13px] hover:text-white transition-colors mt-1"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImages([]);
                          }}
                        >
                          Remove selection
                        </p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <UploadCloud size={40} className="text-[#D4AF37] mb-3 opacity-80 group-hover:opacity-100 transition-opacity" />
                        <p className="font-display text-white text-[15px] font-bold mb-1">Upload Vehicle Images</p>
                        <p className="font-body text-zinc-500 text-[13px]">Drag & drop or click to browse</p>
                      </div>
                    )}
                  </div>

                  <textarea
                    required
                    placeholder="Tell us about your vehicle... (Condition, location)"
                    className={`
                      ${inputStyles}
                      h-[120px]
                      py-4
                      resize-none
                    `}
                  />

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="
                      relative
                      w-full
                      h-[60px]
                      mt-2
                      rounded-xl
                      bg-[#D4AF37]
                      text-black
                      font-semibold
                      tracking-[0.2em]
                      text-[14px]
                      transition-all duration-500
                      hover:scale-[1.02]
                      hover:shadow-[0_0_30px_rgba(212,175,55,0.45)]
                      active:scale-[0.98]
                      disabled:opacity-80
                      disabled:hover:scale-100
                      overflow-hidden
                      group
                    "
                  >
                    <span className="relative z-10 font-display font-bold">
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                          SUBMITTING...
                        </div>
                      ) : (
                        "SUBMIT VEHICLE"
                      )}
                    </span>

                    {!isSubmitting && (
                      <span
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-r
                          from-transparent
                          via-white/30
                          to-transparent
                          -translate-x-full
                          group-hover:translate-x-full
                          transition-transform
                          duration-1000
                        "
                      />
                    )}
                  </button>
                </form>
              </div>
            ) : (
              /* Success State */
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-16 relative z-10"
              >
                <div className="w-20 h-20 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-6 border border-[#D4AF37]/30 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
                  <CheckCircle2 size={40} className="text-[#D4AF37]" />
                </div>
                <h3 className="font-display text-[32px] font-bold text-white mb-3">Request Received</h3>
                <p className="font-body text-zinc-400 text-[15px] leading-[1.7] max-w-[300px] mx-auto">
                  Our concierge team will review your luxury vehicle details and contact you within 24 hours.
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
