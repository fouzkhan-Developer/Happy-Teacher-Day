import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play } from 'lucide-react';

interface CustomVideoSectionProps {
  /**
   * Easily replace with your own direct video path or URL.
   * Default points to /assets/teacher-day-video.mp4 located in the public directory.
   */
  videoSrc?: string;
  posterSrc?: string;
}

export const CustomVideoSection: React.FC<CustomVideoSectionProps> = ({
  videoSrc = '/assets/teacher-day-video.mp4',
  posterSrc = '/assets/teacher-day-poster.jpg',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const handleStartPlay = () => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasStarted(true);
        })
        .catch((err) => {
          console.error('Video play error:', err);
          // Still unhide controls so the user can interact directly
          setHasStarted(true);
        });
    }
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
    setHasStarted(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setHasStarted(false);
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 max-w-4xl mx-auto text-center" id="video-section">
      {/* Simple Clean Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.9 }}
        className="mb-8"
      >
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-3 tracking-wide">
          A LITTLE SURPRISE FOR YOU 🎁
        </h2>
        <p className="font-cormorant text-xl sm:text-2xl text-[#EDE7DC]/80 italic max-w-xl mx-auto">
          Because a special teacher deserves a special wish.
        </p>
      </motion.div>

      {/* Responsive 9:16 Vertical Video Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 25 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] md:max-w-[400px] rounded-3xl overflow-hidden bg-[#0A0F1D] border border-[#D4AF37]/35 shadow-[0_20px_60px_rgba(0,0,0,0.7),0_0_35px_rgba(212,175,55,0.12)]"
        style={{ aspectRatio: '9 / 16' }}
      >
        {/* Native HTML5 Video Element */}
        <video
          ref={videoRef}
          controls={hasStarted}
          playsInline
          preload="metadata"
          poster={posterSrc}
          onPlay={handleVideoPlay}
          onPause={handleVideoPause}
          onEnded={handleVideoEnded}
          className="w-full h-full object-cover rounded-3xl"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Custom Play Overlay (visible before the user taps play) */}
        <AnimatePresence>
          {!hasStarted && (
            <motion.div
              key="play-overlay"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.4 } }}
              onClick={handleStartPlay}
              className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/40 hover:bg-black/30 backdrop-blur-[2px] transition-colors cursor-pointer group p-6"
            >
              {/* Outer Pulsing Glow */}
              <div className="relative">
                <div className="absolute -inset-3 rounded-full bg-[#D4AF37]/30 blur-md group-hover:bg-[#D4AF37]/50 group-hover:scale-110 transition-all duration-300" />
                
                {/* Custom Play Button */}
                <button
                  type="button"
                  aria-label="Play Video"
                  className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-b from-[#1C2844] to-[#0D1527] border-2 border-[#D4AF37] flex items-center justify-center text-[#FFF8E7] shadow-[0_8px_30px_rgba(212,175,55,0.4)] group-hover:scale-105 active:scale-95 transition-transform duration-200"
                >
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 text-[#F3E5AB] fill-[#F3E5AB] ml-1.5" />
                </button>
              </div>

              {/* Text indicator */}
              <span className="mt-6 text-xs sm:text-sm font-sans tracking-[0.25em] uppercase text-[#FFF8E7] font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                PLAY VIDEO
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
