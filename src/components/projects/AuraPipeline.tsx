'use client';

import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function AuraPipeline() {
  const steps = [
    'QUERY INPUT',
    'INTENT CLASSIFIER',
    'CONTEXT ROUTER',
    'LLM REASONER',
    'TOOL EXECUTION',
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
          Agentic Processing Pipeline
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

      {/* Interactive Agentic Decision Box */}
      <div className="relative w-full max-w-[340px] h-[340px] flex flex-col items-center justify-between bg-[#0a0a0b] rounded-lg border border-[#1f1f23] p-4 overflow-hidden">
        {/* Top Badges */}
        <div className="w-full flex items-center justify-between gap-2 z-20">
          <div className="bg-[#111113]/90 backdrop-blur border border-[#1f1f23] p-2 rounded text-[10px] font-mono">
            <div className="text-[#555558]">CONTEXT MATCH</div>
            <div className="text-[#3ecf8e] font-bold">0.98 SCORE</div>
          </div>
          <div className="bg-[#111113]/90 backdrop-blur border border-[#1f1f23] p-2 rounded text-[10px] font-mono text-right">
            <div className="text-[#555558]">ROUTER LATENCY</div>
            <div className="text-[#f0ece5] font-bold">42ms</div>
          </div>
        </div>

        {/* Center Neural Agent Network Visual */}
        <div className="relative w-full flex-1 flex items-center justify-center my-2">
          {/* Animated Glowing Connection Lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 200">
            <line x1="60" y1="100" x2="150" y2="50" stroke="#1f1f23" strokeWidth="1.5" />
            <line x1="60" y1="100" x2="150" y2="150" stroke="#1f1f23" strokeWidth="1.5" />
            <line x1="150" y1="50" x2="240" y2="100" stroke="#1f1f23" strokeWidth="1.5" />
            <line x1="150" y1="150" x2="240" y2="100" stroke="#1f1f23" strokeWidth="1.5" />

            {!prefersReducedMotion && (
              <>
                <motion.line
                  x1="60" y1="100" x2="150" y2="50"
                  stroke="#3ecf8e" strokeWidth="2" strokeDasharray="4,4"
                  animate={{ strokeDashoffset: [0, -16] }}
                  transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                />
                <motion.line
                  x1="150" y1="50" x2="240" y2="100"
                  stroke="#3ecf8e" strokeWidth="2" strokeDasharray="4,4"
                  animate={{ strokeDashoffset: [0, -16] }}
                  transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                />
              </>
            )}
          </svg>

          {/* Node Icons */}
          <div className="relative z-10 w-full flex items-center justify-between px-4">
            {/* User Input Node */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-lg bg-[#161619] border border-[#3ecf8e] text-[#3ecf8e] flex items-center justify-center shadow-[0_0_15px_rgba(62,207,142,0.3)]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <span className="font-mono text-[9px] text-[#8a8a8e] mt-1">Prompt</span>
            </div>

            {/* Middle Router & Reasoner Nodes */}
            <div className="flex flex-col gap-8">
              <div className="w-10 h-10 rounded-lg bg-[#161619] border border-[#3ecf8e] text-[#3ecf8e] flex items-center justify-center shadow-[0_0_15px_rgba(62,207,142,0.3)]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="w-10 h-10 rounded-lg bg-[#111113] border border-[#1f1f23] text-[#555558] flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
            </div>

            {/* Output Node */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-lg bg-[#161619] border border-[#3ecf8e] text-[#3ecf8e] flex items-center justify-center shadow-[0_0_15px_rgba(62,207,142,0.3)]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-mono text-[9px] text-[#3ecf8e] mt-1">Action</span>
            </div>
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="w-full bg-[#111113]/90 backdrop-blur border border-[#1f1f23] p-2 rounded text-[10px] font-mono z-20 flex justify-between items-center">
          <span className="text-[#555558]">EXECUTED TOOL</span>
          <span className="text-[#3ecf8e] font-bold">WEB_SEARCH + SQL_EXEC</span>
        </div>
      </div>

      {/* Caption */}
      <div className="mt-4 text-center">
        <span className="font-mono text-[10px] text-[#555558]">
          Adaptive multi-turn agentic context routing visual
        </span>
      </div>
    </div>
  );
}
