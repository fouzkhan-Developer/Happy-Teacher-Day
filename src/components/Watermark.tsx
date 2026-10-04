import React from 'react';

export const Watermark: React.FC = () => {
  return (
    <aside
      aria-label="Developer credits"
      className="fixed bottom-3 right-4 z-40 pointer-events-none select-none"
    >
      <div className="animate-watermark text-[10px] tracking-[0.25em] font-sans uppercase text-[#EDE7DC] drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
        DEVELOPED BY JARRAR
      </div>
    </aside>
  );
};
