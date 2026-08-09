'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TrainEasterEggProps {
  onTrainingStateChange: (isTraining: boolean) => void;
}

export default function TrainEasterEgg({ onTrainingStateChange }: TrainEasterEggProps) {
  const [isActive, setIsActive] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let keyBuffer = '';

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing inside input/textarea
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      ) {
        return;
      }

      const key = e.key.toLowerCase();
      if (key.length === 1 && key >= 'a' && key <= 'z') {
        keyBuffer = (keyBuffer + key).slice(-5);
        if (keyBuffer === 'train' && !isActive) {
          triggerTrainingSequence();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isActive]);

  const triggerTrainingSequence = () => {
    setIsActive(true);
    onTrainingStateChange(true);
    setLogs(['> train']);
    setProgress(0);

    const steps = [
      { text: 'INITIALIZING MODEL WEIGHTS...', delay: 600, prog: 15 },
      { text: 'INGESTING MULTIMODAL SIGNALS...', delay: 1400, prog: 35 },
      { text: 'OPTIMIZING LATENT EMBEDDINGS...', delay: 2400, prog: 60 },
      { text: 'EPOCH 40/40  ██████████  LOSS: 0.014 ↓', delay: 3800, prog: 90 },
      { text: 'MODEL CONVERGED · SYSTEM OPTIMIZED ✓', delay: 4800, prog: 100 },
    ];

    steps.forEach(({ text, delay, prog }) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, text]);
        setProgress(prog);
      }, delay);
    });

    // Close after 7 seconds
    setTimeout(() => {
      setIsActive(false);
      onTrainingStateChange(false);
    }, 7200);
  };

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 w-80 bg-[#0d0d0f]/95 border border-[#3ecf8e]/50 shadow-[0_0_30px_rgba(62,207,142,0.25)] rounded-lg p-4 font-mono text-xs text-[#f0ece5] backdrop-blur-xl"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-[#1f1f23] pb-2 mb-3">
            <div className="flex items-center gap-2 text-[#3ecf8e]">
              <span className="w-2 h-2 rounded-full bg-[#3ecf8e] animate-ping" />
              <span className="font-bold tracking-widest text-[10px] uppercase">TRAINING MODE</span>
            </div>
            <span className="text-[10px] text-[#555558]">{progress}%</span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-1 bg-[#161619] rounded-full overflow-hidden mb-3">
            <motion.div
              className="h-full bg-[#3ecf8e]"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Log Statements */}
          <div className="space-y-1 max-h-36 overflow-y-auto text-[11px] leading-relaxed">
            {logs.map((log, i) => (
              <div
                key={i}
                className={
                  log.startsWith('>')
                    ? 'text-[#3ecf8e] font-bold'
                    : log.includes('CONVERGED')
                    ? 'text-[#3ecf8e] font-bold'
                    : 'text-[#8a8a8e]'
                }
              >
                {log}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
