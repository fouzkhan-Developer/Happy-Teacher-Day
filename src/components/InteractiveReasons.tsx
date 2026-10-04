import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, CheckCircle2 } from 'lucide-react';

interface ReasonItem {
  id: string;
  word: string;
  message: string;
  note: string;
}

const REASONS: ReasonItem[] = [
  {
    id: 'guidance',
    word: 'Guidance',
    message: 'Thank you for always showing the way when things felt difficult.',
    note: 'Your advice was a steady compass through every academic challenge.',
  },
  {
    id: 'motivation',
    word: 'Motivation',
    message: 'Thank you for reminding your students that they can always do better.',
    note: 'You saw potential even when self-doubt was in the way.',
  },
  {
    id: 'respect',
    word: 'Respect',
    message: 'Some teachers earn respect naturally. You are one of them.',
    note: 'Your character, dignity, and passion command genuine admiration.',
  },
  {
    id: 'patience',
    word: 'Patience',
    message: 'Thank you for giving students the time and space to understand without pressure.',
    note: 'No question was ever dismissed; you explained until clarity was found.',
  },
  {
    id: 'inspiration',
    word: 'Inspiration',
    message: 'You showed us that curiosity and ambition are life-long superpowers.',
    note: 'Your teaching makes students want to strive for higher horizons.',
  },
  {
    id: 'knowledge',
    word: 'Knowledge',
    message: "You don't just teach a subject; you make learning meaningful and memorable.",
    note: 'Deep insights explained with crystalline simplicity and enthusiasm.',
  },
  {
    id: 'support',
    word: 'Support',
    message: 'A good teacher teaches. A great teacher genuinely supports their student.',
    note: 'Knowing our teacher believed in us made all the difference.',
  },
  {
    id: 'kindness',
    word: 'Kindness',
    message: 'Your warmth created a learning environment where every student felt seen.',
    note: 'Gentle encouragement that leaves a lifelong positive mark.',
  },
  {
    id: 'impact',
    word: 'Impact',
    message: 'Some lessons stay in notebooks. The best ones stay in life forever.',
    note: 'The values and mindset you instilled will remain for years to come.',
  },
];

export const InteractiveReasons: React.FC = () => {
  const [selectedReason, setSelectedReason] = useState<ReasonItem | null>(null);
  const [discoveredIds, setDiscoveredIds] = useState<Set<string>>(new Set());

  const handleSelect = (reason: ReasonItem) => {
    setSelectedReason(reason);
    setDiscoveredIds((prev) => new Set([...prev, reason.id]));
  };

  return (
    <section className="relative py-24 px-6 max-w-5xl mx-auto text-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center gap-2 text-xs tracking-[0.25em] uppercase font-sans text-[#D4AF37] mb-3"
      >
        <Sparkles className="w-4 h-4 text-[#D4AF37]" />
        <span>Interactive Constellation</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-4"
      >
        ONE TEACHER. MANY REASONS TO SAY THANK YOU.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="font-sans text-sm sm:text-base text-[#EDE7DC]/70 max-w-xl mx-auto mb-4"
      >
        Click on any word below to reveal a heartfelt reason of appreciation.
      </motion.p>

      {/* Progress Counter */}
      <div className="text-xs font-sans tracking-widest text-[#C5A059]/80 uppercase mb-12 flex items-center justify-center gap-2">
        <span>Discovered:</span>
        <span className="font-mono text-[#F3E5AB] font-semibold">{discoveredIds.size}</span>
        <span>/ {REASONS.length}</span>
      </div>

      {/* Floating Words Constellation Container */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 max-w-3xl mx-auto py-6">
        {REASONS.map((item, idx) => {
          const isDiscovered = discoveredIds.has(item.id);
          const isSelected = selectedReason?.id === item.id;

          return (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => handleSelect(item)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.07 }}
              whileHover={{ scale: 1.07, y: -4 }}
              whileTap={{ scale: 0.96 }}
              animate={{
                y: [0, (idx % 2 === 0 ? -6 : 6), 0],
              }}
              className={`relative px-5 py-3 sm:px-6 sm:py-3.5 rounded-full text-sm sm:text-base font-serif tracking-wide transition-all duration-300 cursor-pointer flex items-center gap-2.5 ${
                isSelected
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#0A0F1D] shadow-[0_0_25px_rgba(212,175,55,0.4)] font-medium'
                  : isDiscovered
                  ? 'bg-[#121A30] text-[#FFF8E7] border border-[#D4AF37]/50 shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                  : 'bg-[#0B1224]/80 hover:bg-[#121C34] text-[#EDE7DC]/90 border border-[#D4AF37]/25 hover:border-[#D4AF37]/60'
              }`}
            >
              <span>{item.word}</span>
              {isDiscovered && (
                <CheckCircle2 className={`w-3.5 h-3.5 ${isSelected ? 'text-[#0A0F1D]' : 'text-[#D4AF37]'}`} />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Popover / Revealer Card for Selected Reason */}
      <AnimatePresence mode="wait">
        {selectedReason && (
          <motion.div
            key={selectedReason.id}
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.96 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 max-w-2xl mx-auto text-left relative rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-[#131E38]/95 to-[#0A1224]/95 border border-[#D4AF37]/45 shadow-[0_12px_45px_rgba(0,0,0,0.5),0_0_30px_rgba(212,175,55,0.15)] backdrop-blur-xl"
          >
            <button
              type="button"
              onClick={() => setSelectedReason(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-[#EDE7DC]/60 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close message"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] font-sans mb-3">
              <span>Reason for Tribute:</span>
              <span className="font-serif font-bold text-white text-sm">{selectedReason.word}</span>
            </div>

            <p className="font-serif text-xl sm:text-2xl text-[#FFF8E7] leading-snug mb-3 italic">
              &ldquo;{selectedReason.message}&rdquo;
            </p>

            <p className="font-sans text-xs sm:text-sm text-[#EDE7DC]/70 font-light leading-relaxed">
              {selectedReason.note}
            </p>

            <div className="mt-4 pt-3 border-t border-[#D4AF37]/20 flex items-center justify-between text-[11px] font-sans text-[#C5A059]/70 uppercase tracking-widest">
              <span>Dedicated to Sir Kashif</span>
              <span>— Jarrar Khan</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
