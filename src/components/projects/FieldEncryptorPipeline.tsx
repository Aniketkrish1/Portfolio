'use client';

import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function FieldEncryptorPipeline() {
  const steps = [
    'RAW PAYLOAD',
    'SCHEMA PARSER',
    'AES-256 ENGINE',
    'CIPHER PAYLOAD',
    'REST API',
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
          Zero-Trust Security Pipeline
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

      {/* Interactive Field Encryption Box */}
      <div className="relative w-full max-w-[340px] h-[340px] flex flex-col items-center justify-between bg-[#0a0a0b] rounded-lg border border-[#1f1f23] p-4 overflow-hidden">
        {/* Top Badges */}
        <div className="w-full flex items-center justify-between gap-2 z-20">
          <div className="bg-[#111113]/90 backdrop-blur border border-[#1f1f23] p-2 rounded text-[10px] font-mono">
            <div className="text-[#555558]">ALGORITHM</div>
            <div className="text-[#3ecf8e] font-bold">AES-256-GCM</div>
          </div>
          <div className="bg-[#111113]/90 backdrop-blur border border-[#1f1f23] p-2 rounded text-[10px] font-mono text-right">
            <div className="text-[#555558]">THROUGHPUT</div>
            <div className="text-[#f0ece5] font-bold">12,500 req/s</div>
          </div>
        </div>

        {/* Center Live Field Encryption Transformer */}
        <div className="relative w-full flex-1 flex flex-col items-center justify-center my-3 gap-3 z-10 font-mono text-[11px]">
          {/* Cleartext Input Card */}
          <div className="w-full p-2.5 rounded bg-[#111113] border border-[#1f1f23] flex items-center justify-between">
            <span className="text-[#555558]">"card_num":</span>
            <span className="text-[#f0ece5] font-semibold">"4532-8821-..."</span>
          </div>

          {/* Encryption Engine Pulse Lock Icon */}
          <div className="w-8 h-8 rounded-full bg-[#161619] border border-[#3ecf8e] text-[#3ecf8e] flex items-center justify-center shadow-[0_0_15px_rgba(62,207,142,0.35)] my-0.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
          </div>

          {/* Encrypted Ciphertext Output Card */}
          <div className="w-full p-2.5 rounded bg-[#161619] border border-[#3ecf8e]/50 flex items-center justify-between shadow-[0_0_10px_rgba(62,207,142,0.15)]">
            <span className="text-[#3ecf8e]">"card_num":</span>
            <span className="text-[#3ecf8e] font-mono text-[10px] truncate max-w-[150px]">
              "enc:8f9a2e1d7c4b..."
            </span>
          </div>
        </div>

        {/* Bottom Integrity Bar */}
        <div className="w-full bg-[#111113]/90 backdrop-blur border border-[#1f1f23] p-2 rounded text-[10px] font-mono z-20 flex justify-between items-center">
          <span className="text-[#555558]">PAYLOAD INTEGRITY</span>
          <span className="text-[#3ecf8e] font-bold">HMAC-SHA256 VERIFIED</span>
        </div>
      </div>

      {/* Caption */}
      <div className="mt-4 text-center">
        <span className="font-mono text-[10px] text-[#555558]">
          Granular field-level encryption & cipher payload visual
        </span>
      </div>
    </div>
  );
}
