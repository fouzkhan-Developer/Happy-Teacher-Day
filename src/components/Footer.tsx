import React from 'react';
import { motion } from 'motion/react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative py-24 px-6 border-t border-[#D4AF37]/15 text-center overflow-hidden">
      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.06),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto space-y-4">
        {/* Large Prominent Respect Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight"
        >
          THANK YOU, SIR KASHIF.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-cormorant text-xl sm:text-2xl text-[#D4AF37] italic"
        >
          Happy Teacher&apos;s Day 2026
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-xs sm:text-sm font-sans tracking-widest uppercase text-[#EDE7DC]/60 pt-4"
        >
          Made with respect &amp; gratitude by Jarrar Khan.
        </motion.p>
      </div>
    </footer>
  );
};
