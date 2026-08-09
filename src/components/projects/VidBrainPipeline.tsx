'use client';

import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function VidBrainPipeline() {
  const steps = [
    'VIDEO FILE',
    'WHISPER ASR',
    'SEGMENTATION',
    'HDBSCAN CLUSTER',
    'LLM SUMMARY',
    'FAISS VECTOR DB',
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
          Video Intelligence Pipeline
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

      {/* Interactive HDBSCAN Cluster Visual Box */}
      <div className="relative w-full max-w-[340px] h-[340px] flex flex-col items-center justify-between bg-[#0a0a0b] rounded-lg border border-[#1f1f23] p-4 overflow-hidden">
        {/* Top Badges */}
        <div className="w-full flex items-center justify-between gap-2 z-20">
          <div className="bg-[#111113]/90 backdrop-blur border border-[#1f1f23] p-2 rounded text-[10px] font-mono">
            <div className="text-[#555558]">TRANSCRIPTION</div>
            <div className="text-[#3ecf8e] font-bold">WHISPER-LARGE</div>
          </div>
          <div className="bg-[#111113]/90 backdrop-blur border border-[#1f1f23] p-2 rounded text-[10px] font-mono text-right">
            <div className="text-[#555558]">LATENT INDEX</div>
            <div className="text-[#f0ece5] font-bold">FAISS HNSW</div>
          </div>
        </div>

        {/* Center Semantic Topic Clusters Visual */}
        <div className="relative w-full flex-1 flex items-center justify-center my-2 z-10">
          <svg className="w-full h-full" viewBox="-100 -100 200 200">
            {/* Cluster 1: Green */}
            <circle cx="-40" cy="-30" r="35" fill="#3ecf8e" fillOpacity="0.1" stroke="#3ecf8e" strokeWidth="1" strokeDasharray="3,3" />
            <circle cx="-45" cy="-35" r="4" fill="#3ecf8e" />
            <circle cx="-30" cy="-20" r="3" fill="#3ecf8e" />
            <circle cx="-55" cy="-25" r="3" fill="#3ecf8e" />
            <text x="-40" y="-75" textAnchor="middle" className="font-mono text-[9px]" fill="#3ecf8e">Topic 1: System Design</text>

            {/* Cluster 2: White */}
            <circle cx="45" cy="-20" r="30" fill="#f0ece5" fillOpacity="0.08" stroke="#8a8a8e" strokeWidth="1" strokeDasharray="3,3" />
            <circle cx="40" cy="-25" r="4" fill="#f0ece5" />
            <circle cx="55" cy="-15" r="3" fill="#f0ece5" />
            <circle cx="35" cy="-10" r="3" fill="#f0ece5" />
            <text x="45" y="-60" textAnchor="middle" className="font-mono text-[9px]" fill="#8a8a8e">Topic 2: Vector DB</text>

            {/* Cluster 3: Grey */}
            <circle cx="0" cy="40" r="28" fill="#555558" fillOpacity="0.1" stroke="#555558" strokeWidth="1" strokeDasharray="3,3" />
            <circle cx="-5" cy="35" r="4" fill="#8a8a8e" />
            <circle cx="10" cy="45" r="3" fill="#8a8a8e" />
            <circle cx="-10" cy="50" r="3" fill="#8a8a8e" />
            <text x="0" y="80" textAnchor="middle" className="font-mono text-[9px]" fill="#555558">Topic 3: Benchmarks</text>
          </svg>
        </div>

        {/* Bottom Status Bar */}
        <div className="w-full bg-[#111113]/90 backdrop-blur border border-[#1f1f23] p-2 rounded text-[10px] font-mono z-20 flex justify-between items-center">
          <span className="text-[#555558]">TOPIC CLUSTER ACCURACY</span>
          <span className="text-[#3ecf8e] font-bold">94% CONFIDENCE</span>
        </div>
      </div>

      {/* Caption */}
      <div className="mt-4 text-center">
        <span className="font-mono text-[10px] text-[#555558]">
          Conceptual HDBSCAN topic clustering & vector summarization visual
        </span>
      </div>
    </div>
  );
}
