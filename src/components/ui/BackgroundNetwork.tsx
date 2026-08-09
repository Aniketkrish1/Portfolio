'use client';

import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  targetX?: number;
  targetY?: number;
}

interface SignalPulse {
  fromIndex: number;
  toIndex: number;
  progress: number;
  speed: number;
}

interface BackgroundNetworkProps {
  activeSection: string;
  isTraining: boolean;
}

export default function BackgroundNetwork({ activeSection, isTraining }: BackgroundNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Initialize 35 lightweight particles
    const particleCount = 35;
    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.5 + 1,
    }));

    const signalPulses: SignalPulse[] = [];

    // Helper to spawn signal pulses
    const maybeSpawnPulse = (speedMult: number) => {
      if (particles.length < 2 || signalPulses.length > 8) return;
      if (Math.random() < 0.05 * speedMult) {
        const from = Math.floor(Math.random() * particles.length);
        let to = Math.floor(Math.random() * particles.length);
        if (from !== to) {
          signalPulses.push({
            fromIndex: from,
            toIndex: to,
            progress: 0,
            speed: (0.01 + Math.random() * 0.02) * speedMult,
          });
        }
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Determine parameters based on active section & training state
      let speedMult = isTraining ? 3.5 : 1;
      let connectionDistance = isTraining ? 160 : 120;
      let lineAlphaBase = isTraining ? 0.25 : 0.12;

      if (activeSection === 'systems') {
        connectionDistance = 140;
        lineAlphaBase = 0.18;
      } else if (activeSection === 'work') {
        speedMult = isTraining ? 3.5 : 1.3;
        lineAlphaBase = 0.15;
      } else if (activeSection === 'contact') {
        lineAlphaBase = 0.2;
      }

      // Update and draw particles
      particles.forEach((p, i) => {
        if (!prefersReducedMotion) {
          p.x += p.vx * speedMult;
          p.y += p.vy * speedMult;

          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = isTraining ? '#3ecf8e' : '#555558';
        ctx.globalAlpha = isTraining ? 0.8 : 0.4;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p2.x - p.x;
          const dy = p2.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * lineAlphaBase;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isTraining ? '#3ecf8e' : '#3ecf8e';
            ctx.globalAlpha = alpha;
            ctx.lineWidth = isTraining ? 1.2 : 0.8;
            ctx.stroke();
          }
        }
      });

      // Update & render signal pulses moving between connected nodes
      maybeSpawnPulse(speedMult);

      for (let i = signalPulses.length - 1; i >= 0; i--) {
        const pulse = signalPulses[i];
        const p1 = particles[pulse.fromIndex];
        const p2 = particles[pulse.toIndex];

        if (p1 && p2) {
          pulse.progress += pulse.speed;
          const px = p1.x + (p2.x - p1.x) * pulse.progress;
          const py = p1.y + (p2.y - p1.y) * pulse.progress;

          ctx.beginPath();
          ctx.arc(px, py, isTraining ? 2.5 : 1.8, 0, Math.PI * 2);
          ctx.fillStyle = '#3ecf8e';
          ctx.globalAlpha = isTraining ? 0.9 : 0.7;
          ctx.fill();
        }

        if (pulse.progress >= 1) {
          signalPulses.splice(i, 1);
        }
      }

      ctx.globalAlpha = 1;

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeSection, isTraining, prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700"
      style={{ opacity: isTraining ? 0.85 : 0.45 }}
    />
  );
}
