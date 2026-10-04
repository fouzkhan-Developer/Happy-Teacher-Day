import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export const FinalMessage: React.FC = () => {
  return (
    <section className="relative py-28 px-6 max-w-3xl mx-auto text-center">
      {/* Header Kicker */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center gap-2 text-xs tracking-[0.25em] uppercase font-sans text-[#D4AF37] mb-4"
      >
        <Heart className="w-3.5 h-3.5 text-[#D4AF37]" />
        <span>From The Heart</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-12 tracking-wide"
      >
        JUST ONE MORE THING...
      </motion.h2>

      {/* Narrative Paragraphs with Staggered Scroll Animations */}
      <div className="space-y-8 text-left sm:text-center text-[#EDE7DC]/90 text-lg sm:text-xl font-sans font-light leading-relaxed">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          Teachers may teach hundreds of students, but sometimes one teacher becomes unforgettable to a student.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="font-serif text-2xl sm:text-3xl text-[#FFF8E7] italic font-normal py-2"
        >
          For me, that teacher is you.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          Thank you for every lesson, every explanation, every correction, every piece of advice and every moment that helped me become better.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="text-[#F3E5AB] font-normal"
        >
          You are genuinely one of my favorite teachers, and I will always be grateful for that.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="pt-6"
        >
          <span className="font-serif text-2xl sm:text-3xl text-white font-normal block">
            Happy Teacher&apos;s Day, Sir Kashif.
          </span>
        </motion.div>
      </div>
    </section>
  );
};
