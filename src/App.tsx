/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { OpeningScreen } from './components/OpeningScreen';
import { AudioController } from './components/AudioController';
import { HeroSection } from './components/HeroSection';
import { MessageSection } from './components/MessageSection';
import { AppreciationCards } from './components/AppreciationCards';
import { InteractiveReasons } from './components/InteractiveReasons';
import { QuoteSection } from './components/QuoteSection';
import { CustomVideoSection } from './components/CustomVideoSection';
import { FinalMessage } from './components/FinalMessage';
import { RevealWish } from './components/RevealWish';
import { Footer } from './components/Footer';
import { Watermark } from './components/Watermark';
import { CursorGlow } from './components/CursorGlow';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [burstTrigger, setBurstTrigger] = useState(0);
  const [burstIntensity, setBurstIntensity] = useState<'subtle' | 'celebration'>('subtle');

  const handleOpenSurprise = () => {
    setIsOpen(true);
    setBurstIntensity('subtle');
    setBurstTrigger((prev) => prev + 1);
  };

  const handleWishRevealed = () => {
    setBurstIntensity('celebration');
    setBurstTrigger((prev) => prev + 1);
  };

  const handleScrollToContent = () => {
    const el = document.getElementById('message-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#060913] text-[#EDE7DC] selection:bg-[#D4AF37]/30 selection:text-[#FFF8E7] overflow-x-hidden">
      {/* Dynamic Background Particle System */}
      <BackgroundCanvas burstTrigger={burstTrigger} burstIntensity={burstIntensity} />

      {/* Desktop subtle cursor glow */}
      <CursorGlow />

      {/* Invisible YouTube Audio Controller (starts on opening surprise) */}
      <AudioController isPlaying={isOpen} />

      {/* Initial Cinematic Opening Screen Modal */}
      <OpeningScreen isOpen={isOpen} onOpen={handleOpenSurprise} />

      {/* Main Experience Journey */}
      <main className="relative z-10 transition-opacity duration-1000">
        {/* 1. Hero Section */}
        <HeroSection onScrollDown={handleScrollToContent} />

        {/* 2. Personal Letter: A Message From Jarrar */}
        <MessageSection />

        {/* 3. Why You Are One Of My Favorite Teachers (6 Cards) */}
        <AppreciationCards />

        {/* 4. Interactive Appreciation Constellation (9 Words) */}
        <InteractiveReasons />

        {/* 5. Cinematic Teacher's Day Quote */}
        <QuoteSection />

        {/* 6. Custom Native Video Section */}
        <CustomVideoSection />

        {/* 7. Emotional Thank You: Just One More Thing... */}
        <FinalMessage />

        {/* 8. Interactive Final Reveal: One Last Wish */}
        <RevealWish onWishRevealed={handleWishRevealed} />

        {/* 9. Final Closing Screen */}
        <Footer />
      </main>

      {/* Developed by Jarrar subtle breathing watermark */}
      <Watermark />
    </div>
  );
}
