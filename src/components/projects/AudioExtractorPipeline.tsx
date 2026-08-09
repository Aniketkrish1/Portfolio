'use client';

import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function AudioExtractorPipeline() {
  const steps = [
    'VIDEO CONTAINER',
    'FFMPEG DEMUXER',
    'AUDIO STREAM',
    'SUBTITLE TRACK',
    'TIME ALIGNMENT',
  ];

  const [activeStep, setActiveStep] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [prefersReducedMotion, steps.length]);

  return (
    <div className="w-full flex flex-col items-center bg-[#111113] p-6 sm:p-8 rounded-xl border border-[#1f1f23] hover:border-[#3ecf8e]/30 transition-colors">
      {/* Pipeline Steps Header */}
      <div className="w-full mb-8">
        <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#555558] mb-3 text-center">
          Multimodal Media Demux Pipeline
        </div>
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          {steps.map((step, idx) => (
            <React.Fragment key={step}>
              <span
                className={`font-mono text-[9px] sm:text-[10px] px-2.5 py-1 rounded-sm uppercase tracking-wider transition-all duration-300 ${
                  activeStep === idx
                    ? 'bg-[#3ecf8e] text-[#0a0a0b] font-bold shadow-[0_0_12px_rgba(62,207,142,0.4)]'
                    : 'bg-[#0a0a0b] text-[#8a8a8e] border border-[#1f1f23]'
                }`}
              >
                {step}
              </span>
              {idx < steps.length - 1 && (
                <span className="text-[#555558] text-[10px]">→</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Interactive Waveform & Subtitle Alignment Box */}
      <div className="relative w-full max-w-[340px] h-[340px] flex flex-col items-center justify-between bg-[#0a0a0b] rounded-lg border border-[#1f1f23] p-4 overflow-hidden">
        {/* Top Badges */}
        <div className="w-full flex items-center justify-between gap-2 z-20">
          <div className="bg-[#111113]/90 backdrop-blur border border-[#1f1f23] p-2 rounded text-[10px] font-mono">
            <div className="text-[#555558]">AUDIO STREAM</div>
            <div className="text-[#3ecf8e] font-bold">48kHz WAV</div>
          </div>
          <div className="bg-[#111113]/90 backdrop-blur border border-[#1f1f23] p-2 rounded text-[10px] font-mono text-right">
            <div className="text-[#555558]">SUBTITLE FORMAT</div>
            <div className="text-[#f0ece5] font-bold">EN / ES (.SRT)</div>
          </div>
        </div>

        {/* Center Live Audio Waveform & Subtitle Track Visual */}
        <div className="relative w-full flex-1 flex flex-col items-center justify-center my-3 gap-4 z-10">
          {/* Audio Waveform Bars */}
          <div className="w-full h-16 flex items-center justify-between gap-1 px-2">
            {[40, 65, 30, 85, 95, 45, 70, 100, 60, 35, 80, 50, 90, 40, 75, 55, 30, 85].map((height, idx) => (
              <motion.div
                key={idx}
                className="w-1.5 bg-[#3ecf8e] rounded-full"
                animate={
                  prefersReducedMotion
                    ? { height: `${height}%` }
                    : { height: [`${Math.max(15, height - 30)}%`, `${height}%`, `${Math.max(15, height - 20)}%`] }
                }
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  delay: idx * 0.05,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          {/* Subtitle Alignment Timeline Bar */}
          <div className="w-full bg-[#111113] border border-[#1f1f23] p-2.5 rounded font-mono text-[10px] flex items-center justify-between">
            <span className="text-[#555558]">00:01:24.150</span>
            <span className="text-[#f0ece5] font-medium tracking-wide">"Building AI systems that scale..."</span>
            <span className="text-[#3ecf8e]">SYNC</span>
          </div>
        </div>

        {/* Bottom Synchronization Bar */}
        <div className="w-full bg-[#111113]/90 backdrop-blur border border-[#1f1f23] p-2 rounded text-[10px] font-mono z-20 flex justify-between items-center">
          <span className="text-[#555558]">TIMECODE DRIFT</span>
          <span className="text-[#3ecf8e] font-bold">±2ms ACCURACY</span>
        </div>
      </div>

      {/* Caption */}
      <div className="mt-4 text-center">
        <span className="font-mono text-[10px] text-[#555558]">
          Automated FFmpeg stream demuxing & time-aligned subtitle extraction visual
        </span>
      </div>
    </div>
  );
}
