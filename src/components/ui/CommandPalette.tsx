'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CommandPaletteProps {
  onTriggerTrain: () => void;
}

export default function CommandPalette({ onTriggerTrain }: CommandPaletteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const commands = [
    { id: 'experience', label: '01. Experience & Credentials', action: () => scrollToSection('experience') },
    { id: 'work', label: '02. Featured Systems & Projects', action: () => scrollToSection('work') },
    { id: 'systems', label: '03. Technical Ecosystem', action: () => scrollToSection('systems') },
    { id: 'contact', label: '04. Contact & Connect', action: () => scrollToSection('contact') },
    { id: 'github', label: 'GitHub Profile (Aniketkrish1)', action: () => window.open('https://github.com/Aniketkrish1', '_blank') },
    { id: 'linkedin', label: 'LinkedIn Profile (Aniket)', action: () => window.open('https://linkedin.com/in/aniketkrish1', '_blank') },
    { id: 'train', label: 'Trigger System Training Mode (train)', action: () => onTriggerTrain() },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
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
    setSelectedIndex(0);
  }, [query]);

  const handleSelect = (index: number) => {
    if (filteredCommands[index]) {
      filteredCommands[index].action();
      setIsOpen(false);
      setQuery('');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0a0a0b]/80 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg bg-[#111113] border border-[#1f1f23] rounded-xl shadow-2xl overflow-hidden z-10"
          >
            {/* Input Bar */}
            <div className="flex items-center px-4 border-b border-[#1f1f23]">
              <span className="text-[#3ecf8e] font-mono text-sm mr-2">›</span>
              <input
                type="text"
                autoFocus
                placeholder="Type a command or search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
                  } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
                  } else if (e.key === 'Enter') {
                    e.preventDefault();
                    handleSelect(selectedIndex);
                  }
                }}
                className="w-full bg-transparent py-4 font-mono text-sm text-[#f0ece5] focus:outline-none placeholder-[#555558]"
              />
              <span className="font-mono text-[10px] text-[#555558] border border-[#1f1f23] px-2 py-0.5 rounded">
                ESC
              </span>
            </div>

            {/* Results List */}
            <div className="p-2 max-h-72 overflow-y-auto">
              {filteredCommands.length > 0 ? (
                filteredCommands.map((cmd, idx) => (
                  <button
                    key={cmd.id}
                    onClick={() => handleSelect(idx)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full text-left font-mono text-xs px-3 py-2.5 rounded-lg flex items-center justify-between transition-colors ${
                      selectedIndex === idx
                        ? 'bg-[#1a1a1d] text-[#3ecf8e] font-semibold'
                        : 'text-[#8a8a8e] hover:text-[#f0ece5]'
                    }`}
                  >
                    <span>{cmd.label}</span>
                    <span className="text-[10px] text-[#555558]">Select ↵</span>
                  </button>
                ))
              ) : (
                <div className="p-4 font-mono text-xs text-[#555558] text-center">
                  No matching commands found
                </div>
              )}
            </div>

            {/* Footer Tip */}
            <div className="px-4 py-2 bg-[#0a0a0b]/60 border-t border-[#1f1f23] flex justify-between items-center font-mono text-[10px] text-[#555558]">
              <span>Navigation & Shortcuts</span>
              <span><kbd className="text-[#8a8a8e]">Ctrl</kbd> + <kbd className="text-[#8a8a8e]">K</kbd></span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
