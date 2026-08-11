'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playTerminalKeySound, playClickSound } from '@/lib/utils/sound';

interface CommandOutput {
  command: string;
  response: string | React.ReactNode;
}

export function InteractiveTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'init',
      response: 'ANIKET AI INFRASTRUCTURE OS [Version 4.2.0]\nType "help" or "skills" or "projects" to query telemetry.',
    },
  ]);
  
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 't' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    playTerminalKeySound();

    let output: string | React.ReactNode = '';

    switch (cmd) {
      case 'help':
        output = `AVAILABLE TELEMETRY COMMANDS:
  help       - Display command registry
  about      - Display Aniket's profile summary
  skills     - List AI/ML, OCR, Backend & Database stack
  projects   - Show production AI pipelines
  metrics    - View latency & throughput benchmarks
  clear      - Clear terminal logs
  exit       - Close CLI terminal window`;
        break;
      case 'about':
        output = `ANIKET - AI Systems & Infrastructure Engineer
Specialized in high-throughput backend architecture, LLM context routers, vector search, and multimodal signal pipelines (OCR / Biomechanics / Speech).`;
        break;
      case 'skills':
        output = `SYSTEM STACK MATRIX:
  [AI/ML]       LLMs | RAG | Agentic AI | PyTorch | Transformers
  [VISION/OCR]  OpenCV | MediaPipe | PaddleOCR | Azure OCR
  [INFRA/BACK]  FastAPI | Next.js | Pydantic | Docker | REST APIs
  [DATABASES]   PostgreSQL | MySQL | MongoDB | Vector Databases (FAISS)`;
        break;
      case 'projects':
        output = `FEATURED SYSTEMS:
  01. VIDBRAIN            - Video Summarizer & HDBSCAN Semantic Clustering (<60s / 10m)
  02. 3D MOTION ANALYSIS  - Markerless Biomechanics Capture (92% Accuracy)
  03. AURA                - Agentic RAG Context Router (3× Retrieval Speedup)
  04. FIELD ENCRYPTOR     - Zero-Trust Field Level AES-256 Encryption (<2ms)
  05. AUDIO EXTRACTOR     - Multi-Track Signal Processing Utility (10× Extraction)`;
        break;
      case 'metrics':
        output = `SYSTEM BENCHMARKS:
  - OCR Latency: 15s → 3s (5× Acceleration)
  - Biomechanics Joint Accuracy: 92%
  - RAG Context Assembly: 14ms
  - Encryption Overhead: <2ms`;
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      case 'exit':
        setIsOpen(false);
        setInputVal('');
        return;
      default:
        output = `Command not recognized: "${cmd}". Type "help" for valid options.`;
    }

    setHistory((prev) => [...prev, { command: cmd, response: output }]);
    setInputVal('');
  };

  return (
    <>
      {/* Terminal Launcher Pill Button */}
      <button
        onClick={() => {
          playClickSound(1100, 0.03);
          setIsOpen(true);
        }}
        className="fixed bottom-6 right-6 z-40 bg-[#111113]/90 hover:bg-[#1a1a1d] border border-[#3ecf8e]/40 text-[#3ecf8e] px-4 py-2 rounded-full font-mono text-xs shadow-2xl backdrop-blur-md flex items-center gap-2 group transition-all"
      >
        <span className="w-2 h-2 rounded-full bg-[#3ecf8e] animate-pulse" />
        <span>CLI Terminal</span>
        <kbd className="bg-[#1f1f23] text-[#f0ece5] px-1.5 py-0.5 rounded text-[10px] group-hover:bg-[#3ecf8e] group-hover:text-[#0a0a0b] transition-colors">
          T
        </kbd>
      </button>

      {/* Terminal Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#0a0a0b]/85 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ type: 'spring', stiffness: 380, damping: 26 }}
              className="relative w-full max-w-2xl bg-[#08080a] border border-[#3ecf8e]/40 rounded-2xl shadow-[0_0_50px_rgba(62,207,142,0.15)] overflow-hidden z-10 font-mono text-xs text-[#3ecf8e]"
            >
              {/* Header Bar */}
              <div className="bg-[#111113] border-b border-[#1f1f23] px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block cursor-pointer" onClick={() => setIsOpen(false)} />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="text-[#8a8a8e] ml-2 text-[11px]">aniket@infra-node:~</span>
                </div>
                <span className="text-[10px] text-[#555558]">Press ESC to exit</span>
              </div>

              {/* Terminal Screen */}
              <div className="p-5 h-80 overflow-y-auto space-y-4 bg-[#050507]">
                {history.map((h, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-2 text-[#f0ece5]">
                      <span className="text-[#3ecf8e]">&gt;</span>
                      <span>{h.command}</span>
                    </div>
                    <pre className="text-[#8a8a8e] text-[11px] whitespace-pre-wrap leading-relaxed pl-4 font-mono">
                      {h.response}
                    </pre>
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>

              {/* Terminal Input */}
              <form onSubmit={handleCommand} className="bg-[#0b0b0e] border-t border-[#1f1f23] p-3 flex items-center gap-2">
                <span className="text-[#3ecf8e] animate-pulse font-bold">&gt;</span>
                <input
                  type="text"
                  autoFocus
                  placeholder="Type command ('help', 'projects', 'skills')..."
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  className="w-full bg-transparent text-[#f0ece5] focus:outline-none font-mono text-xs placeholder-[#555558]"
                />
                <button type="submit" className="text-[10px] text-[#3ecf8e] bg-[#3ecf8e]/10 border border-[#3ecf8e]/30 px-3 py-1 rounded-md">
                  EXEC
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
