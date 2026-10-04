import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onScrollDown?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollDown }) => {
  const titleWords = ['HAPPY', "TEACHER'S", 'DAY'];

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-6 pt-20 pb-16 overflow-hidden">
      {/* Subtle Gold Ambient Radial Glow behind the Hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.09),transparent_70%)] pointer-events-none" />

      {/* Decorative Top Flourish */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="flex items-center gap-3 mb-6"
      >
        <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/70" />
        <span className="text-[#D4AF37] text-xs font-serif tracking-[0.3em] uppercase">Honoring Excellence</span>
        <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/70" />
      </motion.div>

      {/* Main Title: Staggered Words */}
      <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-5 gap-y-2 mb-4">
        {titleWords.map((word, idx) => (
          <motion.span
            key={word}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.4 + idx * 0.18,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white drop-shadow-[0_4px_24px_rgba(212,175,55,0.18)]"
          >
            {word}
          </motion.span>
        ))}
      </div>

      {/* Kicker line under Happy Teacher's Day */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.95 }}
        className="text-xs sm:text-sm md:text-base font-sans tracking-[0.2em] uppercase text-[#D4AF37]/90 mb-8"
      >
        To The Teacher Who Makes A Difference
      </motion.p>

      {/* Teacher Name Display */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
        className="relative inline-block mb-8 px-8 py-3 rounded-2xl bg-gradient-to-b from-[#10182C]/70 to-[#0A1020]/90 border border-[#D4AF37]/35 shadow-[0_8px_30px_rgba(212,175,55,0.12)] backdrop-blur-md"
      >
        <div className="absolute inset-x-8 -top-px h-px bg-gradient-to-r from-transparent via-[#F3E5AB] to-transparent" />
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#FFF8E7] tracking-normal">
          Sir Kashif
        </h2>
      </motion.div>

      {/* Heartfelt Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="max-w-2xl mx-auto space-y-1.5 mb-8"
      >
        <p className="font-cormorant text-2xl sm:text-3xl text-[#EDE7DC] italic leading-relaxed">
          &ldquo;Some teachers teach lessons.
        </p>
        <p className="font-cormorant text-2xl sm:text-3xl text-[#F3E5AB] italic leading-relaxed">
          The best teachers leave a lasting impact.&rdquo;
        </p>
      </motion.div>

      {/* Signature & Dedication */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, delay: 1.65 }}
        className="text-xs sm:text-sm font-sans tracking-wider text-[#EDE7DC]/70 max-w-md mx-auto"
      >
        With respect, gratitude &amp; heartfelt wishes —{' '}
        <span className="text-[#F3E5AB] font-medium tracking-normal">Jarrar Khan</span>
      </motion.p>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="mt-14 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={onScrollDown}
      >
        <span className="text-[11px] tracking-[0.25em] uppercase text-[#C5A059]/70 group-hover:text-[#F3E5AB] transition-colors">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-[#C5A059] group-hover:text-[#F3E5AB] transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
};
