'use client';

import React, { useState } from 'react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Reveal } from '@/components/ui/Reveal';
import { Container } from '@/components/ui/Container';
import { playClickSound } from '@/lib/utils/sound';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    playClickSound(1200, 0.04);
    navigator.clipboard.writeText('aniketpatilkrish11@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0b] relative z-10">
      <Container>
        <div className="text-center flex flex-col items-center max-w-4xl mx-auto">
          <Reveal>
            <div className="flex justify-center mb-8">
              <SectionLabel label="Let's Connect & Collaborate" />
            </div>
            
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight">
              <div className="text-[#f0ece5]">BUILD</div>
              <div className="text-[#f0ece5]">SOMETHING</div>
              <div className="text-gradient-emerald">INTELLIGENT.</div>
            </h2>

            {/* Direct Copy Email Box */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 bg-[#111113] border border-[#1f1f23] hover:border-[#3ecf8e]/40 p-3.5 sm:px-6 sm:py-4 rounded-full max-w-lg mx-auto transition-all shadow-lg">
              <span className="font-mono text-xs text-[#8a8a8e] truncate">
                aniketpatilkrish11@gmail.com
              </span>
              <button
                onClick={handleCopyEmail}
                className="bg-[#3ecf8e] hover:bg-[#34b87d] text-[#0a0a0b] px-4 py-1.5 rounded-full font-mono text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 shadow-sm"
              >
                <span>{copied ? '✓' : '📋'}</span>
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Email'}</span>
              </button>
            </div>

            {/* Social Quick Links Bar */}
            <div className="flex justify-center flex-wrap gap-8 mt-12">
              <a href="https://github.com/Aniketkrish1" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                <div className="p-3.5 rounded-2xl bg-[#111113] border border-[#1f1f23] group-hover:border-[#3ecf8e] group-hover:bg-[#3ecf8e]/10 transition-all">
                  <svg className="w-5 h-5 text-[#8a8a8e] group-hover:text-[#3ecf8e] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </div>
                <span className="font-mono text-xs text-[#8a8a8e] group-hover:text-[#3ecf8e] transition-colors">GitHub</span>
              </a>

              <a href="https://www.linkedin.com/in/aniketpatil11" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                <div className="p-3.5 rounded-2xl bg-[#111113] border border-[#1f1f23] group-hover:border-[#3ecf8e] group-hover:bg-[#3ecf8e]/10 transition-all">
                  <svg className="w-5 h-5 text-[#8a8a8e] group-hover:text-[#3ecf8e] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <span className="font-mono text-xs text-[#8a8a8e] group-hover:text-[#3ecf8e] transition-colors">LinkedIn</span>
              </a>

              <a href="https://leetcode.com/u/aniketkrish11" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                <div className="p-3.5 rounded-2xl bg-[#111113] border border-[#1f1f23] group-hover:border-[#3ecf8e] group-hover:bg-[#3ecf8e]/10 transition-all">
                  <svg className="w-5 h-5 text-[#8a8a8e] group-hover:text-[#3ecf8e] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <span className="font-mono text-xs text-[#8a8a8e] group-hover:text-[#3ecf8e] transition-colors">LeetCode</span>
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
