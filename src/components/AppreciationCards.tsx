import React from 'react';
import { motion } from 'motion/react';
import { Compass, Clock, Zap, BookOpen, Shield, Sparkles } from 'lucide-react';

interface CardItem {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CARDS: CardItem[] = [
  {
    number: '01',
    title: 'GUIDANCE',
    description: 'Your guidance makes difficult things easier to understand.',
    icon: Compass,
  },
  {
    number: '02',
    title: 'PATIENCE',
    description: 'Your patience gives students the confidence to keep learning.',
    icon: Clock,
  },
  {
    number: '03',
    title: 'MOTIVATION',
    description: 'You inspire students to believe they can do better.',
    icon: Zap,
  },
  {
    number: '04',
    title: 'KNOWLEDGE',
    description: "You don't just teach a subject — you make learning meaningful.",
    icon: BookOpen,
  },
  {
    number: '05',
    title: 'SUPPORT',
    description: 'A good teacher teaches. A great teacher supports.',
    icon: Shield,
  },
  {
    number: '06',
    title: 'IMPACT',
    description: 'Some lessons stay in notebooks. The best ones stay in life.',
    icon: Sparkles,
  },
];

export const AppreciationCards: React.FC = () => {
  return (
    <section className="relative py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-2 text-xs tracking-[0.25em] uppercase font-sans text-[#D4AF37] mb-3"
        >
          <span>Pillars of Impact</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white max-w-2xl mx-auto leading-tight"
        >
          WHY YOU ARE ONE OF MY FAVORITE TEACHERS
        </motion.h2>
      </div>

      {/* Grid of 6 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {CARDS.map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.8,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative rounded-2xl p-8 bg-gradient-to-b from-[#0F182F]/75 to-[#080E1E]/90 border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(212,175,55,0.15)] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Subtle top edge glow on hover */}
              <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#F3E5AB]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono tracking-widest text-[#C5A059]/60">
                    {card.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 group-hover:bg-[#D4AF37]/20 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-normal text-white mb-3 tracking-wide">
                  {card.title}
                </h3>

                <p className="font-sans text-sm sm:text-base text-[#EDE7DC]/80 leading-relaxed font-light">
                  {card.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#D4AF37]/15 flex items-center justify-between text-xs font-sans text-[#C5A059]/60">
                <span>Sir Kashif</span>
                <span className="text-[#D4AF37]/75 font-serif italic">Teacher&apos;s Day 2026</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
