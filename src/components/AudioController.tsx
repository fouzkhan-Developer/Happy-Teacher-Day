import React, { useEffect, useRef } from 'react';

interface AudioControllerProps {
  isPlaying: boolean;
}

export const AudioController: React.FC<AudioControllerProps> = ({ isPlaying }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Gentle ambient harmonic chord on click as immediate audio feedback
  useEffect(() => {
    if (!isPlaying) return;

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        audioContextRef.current = ctx;

        // Frequencies for a warm pentatonic celebratory chime (D4, F#4, A4, C#5, E5)
        const notes = [293.66, 369.99, 440.0, 554.37, 659.25];
        const startTime = ctx.currentTime;

        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, startTime + idx * 0.08);

          gain.gain.setValueAtTime(0, startTime + idx * 0.08);
          gain.gain.linearRampToValueAtTime(0.08, startTime + idx * 0.08 + 0.04);
          gain.gain.exponentialRampToValueAtTime(0.0001, startTime + idx * 0.08 + 2.2);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(startTime + idx * 0.08);
          osc.stop(startTime + idx * 0.08 + 2.3);
        });
      }
    } catch {
      // AudioContext fallback ignored safely
    }
  }, [isPlaying]);

  if (!isPlaying) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: '-9999px',
        left: '-9999px',
        width: '1px',
        height: '1px',
        opacity: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        visibility: 'hidden',
        zIndex: -1,
      }}
    >
      {/* 
        Completely invisible YouTube background player for:
        https://youtu.be/W-H6XB4RlpY?si=zetpxG5WpJiLZRxh
        Video ID: W-H6XB4RlpY
        Controls hidden, no UI, loop enabled, autoplays upon user click
      */}
      <iframe
        ref={iframeRef}
        width="100"
        height="100"
        src="https://www.youtube-nocookie.com/embed/W-H6XB4RlpY?autoplay=1&loop=1&playlist=W-H6XB4RlpY&enablejsapi=1&controls=0&playsinline=1"
        title="Background Audio"
        allow="autoplay; encrypted-media"
      />
    </div>
  );
};
