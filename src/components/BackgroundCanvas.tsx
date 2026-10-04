import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  baseOpacity: number;
  pulseSpeed: number;
  color: string;
}

interface BurstParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
  shape: 'star' | 'circle' | 'spark';
  rotation: number;
  rotationSpeed: number;
}

interface BackgroundCanvasProps {
  burstTrigger?: number; // increments when a burst should happen
  burstIntensity?: 'subtle' | 'celebration';
}

const GOLD_PALETTE = [
  '#F3E5AB', // Vanilla gold
  '#E6CA65', // Champagne gold
  '#D4AF37', // Metallic gold
  '#FFF8E7', // Starlight ivory
  '#C5A059', // Antique gold
];

export const BackgroundCanvas: React.FC<BackgroundCanvasProps> = ({
  burstTrigger = 0,
  burstIntensity = 'subtle',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const burstsRef = useRef<BurstParticle[]>([]);
  const animFrameId = useRef<number>(0);
  const prevTrigger = useRef(burstTrigger);

  // Helper to draw a delicate 4-point golden star
  const drawStar = (
    ctx: CanvasRenderingContext2D,
    cx: number,
    cy: number,
    spikes: number,
    outerRadius: number,
    innerRadius: number,
    color: string,
    alpha: number,
    rotation: number
  ) => {
    let rot = (Math.PI / 2) * 3 + rotation;
    let x = cx;
    let y = cy;
    const step = Math.PI / spikes;

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y);
      rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.globalAlpha = alpha;
    ctx.fill();
    ctx.restore();
  };

  // Trigger burst
  useEffect(() => {
    if (burstTrigger > prevTrigger.current) {
      prevTrigger.current = burstTrigger;
      const canvas = canvasRef.current;
      if (!canvas) return;

      const centerX = canvas.width / 2;
      const centerY = canvas.height * (burstIntensity === 'celebration' ? 0.6 : 0.45);
      const count = burstIntensity === 'celebration' ? 90 : 50;

      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = (Math.random() * 4 + 2) * (burstIntensity === 'celebration' ? 1.4 : 1);
        const shapes: ('star' | 'circle' | 'spark')[] = ['star', 'circle', 'spark'];
        const chosenShape = shapes[Math.floor(Math.random() * shapes.length)];

        burstsRef.current.push({
          x: centerX + (Math.random() - 0.5) * 80,
          y: centerY + (Math.random() - 0.5) * 60,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - (burstIntensity === 'celebration' ? 2 : 1),
          size: Math.random() * 3.5 + 1.5,
          color: GOLD_PALETTE[Math.floor(Math.random() * GOLD_PALETTE.length)],
          alpha: 1,
          decay: Math.random() * 0.012 + 0.008,
          shape: chosenShape,
          rotation: Math.random() * Math.PI,
          rotationSpeed: (Math.random() - 0.5) * 0.08,
        });
      }
    }
  }, [burstTrigger, burstIntensity]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    const initParticles = () => {
      const density = Math.floor((width * height) / 22000);
      const count = Math.min(Math.max(density, 30), 65);
      particlesRef.current = [];

      for (let i = 0; i < count; i++) {
        const baseOpacity = Math.random() * 0.4 + 0.15;
        particlesRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.8 + 0.6,
          speedX: (Math.random() - 0.5) * 0.25,
          speedY: -(Math.random() * 0.35 + 0.1),
          opacity: baseOpacity,
          baseOpacity,
          pulseSpeed: Math.random() * 0.02 + 0.005,
          color: GOLD_PALETTE[Math.floor(Math.random() * GOLD_PALETTE.length)],
        });
      }
    };

    initParticles();

    let isDocumentVisible = true;
    const handleVisibilityChange = () => {
      isDocumentVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const render = () => {
      if (!isDocumentVisible) {
        animFrameId.current = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Draw and update ambient floating particles
      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.speedX;
          p.y += p.speedY;
          p.opacity = p.baseOpacity + Math.sin(Date.now() * p.pulseSpeed * 0.1) * 0.15;

          // Wrap around edges
          if (p.y < -10) p.y = height + 10;
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.05, Math.min(p.opacity, 0.7));
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.restore();
      }

      // Draw burst particles
      const bursts = burstsRef.current;
      for (let i = bursts.length - 1; i >= 0; i--) {
        const b = bursts[i];
        b.x += b.vx;
        b.y += b.vy;
        b.vy += 0.05; // slight gravity
        b.vx *= 0.98;
        b.alpha -= b.decay;
        b.rotation += b.rotationSpeed;

        if (b.alpha <= 0) {
          bursts.splice(i, 1);
          continue;
        }

        if (b.shape === 'star') {
          drawStar(ctx, b.x, b.y, 4, b.size * 2, b.size * 0.8, b.color, b.alpha, b.rotation);
        } else if (b.shape === 'spark') {
          ctx.save();
          ctx.translate(b.x, b.y);
          ctx.rotate(b.rotation);
          ctx.beginPath();
          ctx.moveTo(-b.size * 2, 0);
          ctx.lineTo(b.size * 2, 0);
          ctx.strokeStyle = b.color;
          ctx.lineWidth = 1;
          ctx.globalAlpha = b.alpha;
          ctx.stroke();
          ctx.restore();
        } else {
          ctx.save();
          ctx.beginPath();
          ctx.arc(b.x, b.y, b.size, 0, Math.PI * 2);
          ctx.fillStyle = b.color;
          ctx.globalAlpha = b.alpha;
          ctx.shadowBlur = 6;
          ctx.shadowColor = b.color;
          ctx.fill();
          ctx.restore();
        }
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.85 }}
    />
  );
};
