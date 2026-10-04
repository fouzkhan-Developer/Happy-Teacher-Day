import React from 'react';
import { motion } from 'motion/react';
import { Feather, Award } from 'lucide-react';

export const MessageSection: React.FC = () => {
  return (
    <section className="relative py-24 px-6 max-w-4xl mx-auto" id="message-section">
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3 text-xs tracking-[0.25em] uppercase font-sans text-[#D4AF37] mb-3"
        >
          <Feather className="w-4 h-4 text-[#D4AF37]" />
          <span>Personal Tribute</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white"
        >
          A MESSAGE FROM JARRAR
        </motion.h2>
      </div>

      {/* Premium Parchment / Gold Glassmorphism Letter Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-3xl p-8 sm:p-12 md:p-16 bg-gradient-to-b from-[#0E162B]/85 via-[#0B1224]/90 to-[#070C1A]/95 border border-[#D4AF37]/30 shadow-[0_15px_50px_rgba(0,0,0,0.5),0_0_35px_rgba(212,175,55,0.08)] backdrop-blur-xl"
      >
        {/* Ornate Corner Accents */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37]/50 rounded-tl pointer-events-none" />
        <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37]/50 rounded-tr pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37]/50 rounded-bl pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37]/50 rounded-br pointer-events-none" />

        {/* Wax Seal / Emblem Graphic */}
        <div className="flex items-center justify-between border-b border-[#D4AF37]/20 pb-6 mb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-sans text-[#D4AF37]/80">Dedication Note</span>
            <p className="font-serif text-lg text-white">To Sir Kashif</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#F3E5AB]">
            <Award className="w-5 h-5" />
          </div>
        </div>

        {/* Letter Body */}
        <div className="space-y-6 text-[#EDE7DC]/90 text-base sm:text-lg leading-relaxed font-sans font-light">
          <p className="font-serif text-xl sm:text-2xl text-[#FFF8E7] italic font-normal">
            Dear Sir Kashif,
          </p>

          <p>
            A great teacher is not remembered only for the lessons taught in a classroom, but for the confidence, motivation and direction they give to their students.
          </p>

          <p>
            You have been more than just a teacher to me. You are one of those teachers whose words, guidance and way of teaching leave a lasting impression.
          </p>

          <p>
            On this Teacher&apos;s Day, I simply want to say thank you — for your patience, your support, your guidance, and for being the kind of teacher a student can genuinely look up to.
          </p>

          <p className="text-[#F3E5AB] font-normal">
            I feel lucky to have had a teacher like you.
          </p>

          <p className="font-serif text-xl sm:text-2xl text-[#FFF8E7] italic pt-2">
            Happy Teacher&apos;s Day, Sir Kashif.
          </p>
        </div>

        {/* Signature Section */}
        <div className="mt-12 pt-6 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-xs font-sans uppercase tracking-[0.2em] text-[#C5A059]/80">With sincere respect and gratitude,</p>
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-cormorant text-3xl sm:text-4xl text-[#FFF8E7] font-semibold italic mt-1"
            >
              — Jarrar Khan
            </motion.p>
          </div>

          <div className="text-right">
            <span className="text-[11px] font-sans tracking-widest uppercase text-[#D4AF37]/60">
              A Student&apos;s Respect
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
