import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface OpeningScreenProps {
  isOpen: boolean;
  onOpen: () => void;
}

export const OpeningScreen: React.FC<OpeningScreenProps> = ({ isOpen, onOpen }) => {
  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          key="opening-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#050811] px-6"
        >
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_45%,rgba(212,175,55,0.08),rgba(5,8,17,0.95))]" />
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none" />

          {/* Central Surprise Presentation Card */}
          <div className="relative z-10 max-w-xl w-full text-center flex flex-col items-center">
            {/* Elegant Header Kicker */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="flex items-center gap-3 text-xs md:text-sm tracking-[0.25em] uppercase font-sans text-[#C5A059] mb-4"
            >
              <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#C5A059]/60" />
              <span>FOR A VERY SPECIAL TEACHER</span>
              <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#C5A059]/60" />
            </motion.div>

            {/* Teacher Name */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.4 }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white mb-4 drop-shadow-[0_2px_15px_rgba(212,175,55,0.15)]"
            >
              Sir Kashif
            </motion.h1>

            {/* Little Surprise Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.65 }}
              className="font-cormorant text-xl sm:text-2xl text-[#EDE7DC]/80 italic mb-10 max-w-md"
            >
              A little surprise from Jarrar Khan
            </motion.p>

            {/* Glowing Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.9 }}
              className="relative group"
            >
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#D4AF37]/30 via-[#F3E5AB]/40 to-[#C5A059]/30 blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

              <button
                type="button"
                onClick={onOpen}
                className="relative px-8 py-4 sm:px-10 sm:py-4.5 rounded-full bg-gradient-to-b from-[#141C30] to-[#0A1020] text-[#FFF8E7] text-sm sm:text-base font-medium tracking-wider uppercase border border-[#D4AF37]/50 shadow-[0_4px_25px_rgba(212,175,55,0.2)] hover:border-[#D4AF37] hover:shadow-[0_6px_35px_rgba(212,175,55,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-3 cursor-pointer"
              >
                <span>OPEN YOUR SURPRISE</span>
                <Sparkles className="w-4 h-4 text-[#F3E5AB] animate-pulse" />
              </button>
            </motion.div>

            {/* Subtle Hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 1.3, duration: 1 }}
              className="mt-8 text-xs font-sans tracking-widest text-[#EDE7DC]/50 uppercase"
            >
              Turn on sound for the best experience
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
