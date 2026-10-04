import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';

interface RevealWishProps {
  onWishRevealed?: () => void;
}

export const RevealWish: React.FC<RevealWishProps> = ({ onWishRevealed }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => {
    setIsRevealed(true);
    onWishRevealed?.();
  };

  return (
    <section className="relative py-28 px-6 max-w-4xl mx-auto text-center" id="final-wish">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1),transparent_70%)] pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center gap-2 text-xs tracking-[0.3em] uppercase font-sans text-[#D4AF37] mb-3"
      >
        <Sparkles className="w-4 h-4 text-[#D4AF37]" />
        <span>The Climax</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-white mb-10 tracking-wide"
      >
        ONE LAST WISH
      </motion.h2>

      <div className="relative min-h-[300px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {!isRevealed ? (
            <motion.div
              key="unrevealed-state"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.5 } }}
              className="flex flex-col items-center"
            >
              <p className="font-cormorant text-xl sm:text-2xl text-[#EDE7DC]/80 italic mb-8">
                Click to reveal ✨
              </p>

              <div className="relative group">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFF8E7] to-[#C5A059] blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <button
                  type="button"
                  onClick={handleReveal}
                  className="relative px-8 py-4 sm:px-12 sm:py-5 rounded-full bg-gradient-to-r from-[#17233D] via-[#1E2E4F] to-[#121B30] text-[#FFF8E7] font-serif text-base sm:text-lg tracking-widest uppercase border border-[#D4AF37]/70 shadow-[0_8px_32px_rgba(212,175,55,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 cursor-pointer"
                >
                  <Sparkles className="w-5 h-5 text-[#F3E5AB]" />
                  <span>REVEAL MY WISH</span>
                  <Sparkles className="w-5 h-5 text-[#F3E5AB]" />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="revealed-state"
              initial={{ opacity: 0, scale: 0.92, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-[#131F3A]/95 via-[#0D1629]/95 to-[#080E1C]/98 border border-[#D4AF37]/50 shadow-[0_20px_60px_rgba(0,0,0,0.7),0_0_50px_rgba(212,175,55,0.2)] backdrop-blur-2xl"
            >
              {/* Expanding light halo */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-[#F3E5AB] to-transparent" />

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring' }}
                className="w-14 h-14 mx-auto mb-6 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#F3E5AB]"
              >
                <Heart className="w-7 h-7 text-[#D4AF37] fill-[#D4AF37]/30" />
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal mb-6 tracking-tight drop-shadow-[0_4px_20px_rgba(212,175,55,0.25)]"
              >
                Happy Teacher&apos;s Day, Sir Kashif! ❤️
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="font-cormorant text-2xl sm:text-3xl text-[#F3E5AB] italic max-w-2xl mx-auto leading-relaxed mb-10"
              >
                &ldquo;May you always continue to inspire, guide and make a difference in the lives of your students.&rdquo;
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="pt-8 border-t border-[#D4AF37]/25 max-w-sm mx-auto"
              >
                <p className="text-xs uppercase tracking-[0.25em] font-sans text-[#C5A059]/80 mb-2">
                  With the greatest respect,
                </p>
                <p className="font-serif text-2xl sm:text-3xl text-[#FFF8E7] font-semibold italic">
                  Jarrar Khan
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
