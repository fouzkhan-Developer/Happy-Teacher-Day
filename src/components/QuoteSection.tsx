import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export const QuoteSection: React.FC = () => {
  return (
    <section className="relative py-28 px-6 text-center overflow-hidden">
      {/* Moving Ambient Soft Light Ray */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent_70%)] animate-ambient-ray pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="w-12 h-12 mx-auto rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center text-[#D4AF37] mb-8"
        >
          <Quote className="w-5 h-5 opacity-80" />
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-cormorant text-2xl sm:text-4xl md:text-5xl text-[#FFF8E7] italic font-normal leading-relaxed sm:leading-tight mb-8 drop-shadow-[0_2px_15px_rgba(212,175,55,0.12)]"
        >
          &ldquo;A teacher plants the seeds of knowledge that continue to grow long after the classroom is left behind.&rdquo;
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#111A31]/60 border border-[#D4AF37]/30"
        >
          <span className="font-serif text-sm sm:text-base text-[#F3E5AB]">
            Happy Teacher&apos;s Day, Sir Kashif ❤️
          </span>
        </motion.div>
      </div>
    </section>
  );
};
