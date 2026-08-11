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
  const mouseRef = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let dpr = window.devicePixelRatio || 1;
    let width = (canvas.width = window.innerWidth * dpr);
    let height = (canvas.height = window.innerHeight * dpr);
    ctx.scale(dpr, dpr);

    const handleResize = () => {
      if (!canvas) return;
      dpr = window.devicePixelRatio || 1;
      width = canvas.width = window.innerWidth * dpr;
      height = canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Initialize 40 crisp particles
    const particleCount = 40;
    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.5 + 1.2,
    }));

    const signalPulses: SignalPulse[] = [];

    const maybeSpawnPulse = (speedMult: number) => {
      if (particles.length < 2 || signalPulses.length > 10) return;
      if (Math.random() < 0.06 * speedMult) {
        const from = Math.floor(Math.random() * particles.length);
        let to = Math.floor(Math.random() * particles.length);
        if (from !== to) {
          signalPulses.push({
            fromIndex: from,
            toIndex: to,
            progress: 0,
            speed: (0.012 + Math.random() * 0.02) * speedMult,
          });
        }
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      let speedMult = isTraining ? 3.5 : 1;
      let connectionDistance = isTraining ? 170 : 130;
      let lineAlphaBase = isTraining ? 0.28 : 0.14;

      if (activeSection === 'systems') {
        connectionDistance = 150;
        lineAlphaBase = 0.2;
      } else if (activeSection === 'work') {
        speedMult = isTraining ? 3.5 : 1.3;
        lineAlphaBase = 0.16;
      } else if (activeSection === 'contact') {
        lineAlphaBase = 0.22;
      }

      const mouse = mouseRef.current;

      // Update & render particles with subtle mouse magnetism
      particles.forEach((p, i) => {
        if (!prefersReducedMotion) {
          // Mouse magnetism force
          const dxMouse = mouse.x - p.x;
          const dyMouse = mouse.y - p.y;
          const mouseDist = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
          
          if (mouseDist < 160) {
            const force = (1 - mouseDist / 160) * 0.8;
            p.x += (dxMouse / mouseDist) * force;
            p.y += (dyMouse / mouseDist) * force;
          }

          p.x += p.vx * speedMult;
          p.y += p.vy * speedMult;

          if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
          if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = isTraining ? '#3ecf8e' : '#3ecf8e';
        ctx.globalAlpha = isTraining ? 0.85 : 0.45;
        ctx.fill();

        // Draw connections
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
            ctx.strokeStyle = '#3ecf8e';
            ctx.globalAlpha = alpha;
            ctx.lineWidth = isTraining ? 1.2 : 0.8;
            ctx.stroke();
          }
        }
      });

      // Signal pulses
      maybeSpawnPulse(speedMult);

      for (let i = signalPulses.length - 1; i >= 0; i--) {
        const pulse = signalPulses[i];
        const p1 = particles[pulse.fromIndex];
        const p2 = particles[pulse.toIndex];

        if (!p1 || !p2) {
          signalPulses.splice(i, 1);
          continue;
        }

        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          signalPulses.splice(i, 1);
          continue;
        }

        const currentX = p1.x + (p2.x - p1.x) * pulse.progress;
        const currentY = p1.y + (p2.y - p1.y) * pulse.progress;

        ctx.beginPath();
        ctx.arc(currentX, currentY, isTraining ? 2.5 : 1.8, 0, Math.PI * 2);
        ctx.fillStyle = '#3ecf8e';
        ctx.globalAlpha = 0.9;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeSection, isTraining, prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700 opacity-60"
      style={{ opacity: isTraining ? 0.85 : 0.45 }}
    />
  );
}
