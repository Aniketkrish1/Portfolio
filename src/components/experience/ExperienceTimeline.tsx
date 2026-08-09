'use client';

import React, { useState } from 'react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Reveal } from '@/components/ui/Reveal';
import { Container } from '@/components/ui/Container';

export function ExperienceTimeline() {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <section id="experience" className="py-16 lg:py-20 bg-[#0a0a0b]">
      <Container>
        <Reveal>
          <SectionLabel label="Experience & Education" />
          
          {/* FinProhub Experience Card */}
          <div
            onMouseEnter={() => setShowDetail(true)}
            onMouseLeave={() => setShowDetail(false)}
            className="mt-8 p-6 sm:p-8 rounded-xl bg-[#111113]/60 border border-[#1f1f23] hover:border-[#3ecf8e]/40 transition-all duration-300 relative group"
          >
            {/* Title & Role Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="font-display text-2xl text-[#f0ece5] font-bold">FinProhub</h3>
                <div className="font-mono text-sm text-[#3ecf8e] font-semibold mt-0.5">
                  Finance Tracker | Freelance Backend Developer
                </div>
              </div>
              <div className="font-mono text-xs text-[#8a8a8e] bg-[#1a1a1d] px-3 py-1 rounded border border-[#26262b] w-fit">
                Nov 2025 – Present
              </div>
            </div>
            
            {/* Highlights */}
            <ul className="space-y-3 max-w-3xl mb-6">
              <li className="text-[#8a8a8e] text-sm leading-relaxed flex items-start gap-2">
                <span className="text-[#3ecf8e] mt-1.5">-</span>
                Built and shipped JWT-based authentication securing user sessions and API access.
              </li>
              <li className="text-[#8a8a8e] text-sm leading-relaxed flex items-start gap-2">
                <span className="text-[#3ecf8e] mt-1.5">-</span>
                Integrated Azure OCR + PaddleOCR fallback with Pydantic validation. Cut processing latency from 15s down to 3s.
              </li>
              <li className="text-[#8a8a8e] text-sm leading-relaxed flex items-start gap-2">
                <span className="text-[#3ecf8e] mt-1.5">-</span>
                Built RAG-powered chatbot for financial queries using vector embeddings and LLM generation.
              </li>
              <li className="text-[#8a8a8e] text-sm leading-relaxed flex items-start gap-2">
                <span className="text-[#3ecf8e] mt-1.5">-</span>
                Developed automated email notification system using GoDaddy SMTP integration.
              </li>
            </ul>

            {/* Hover Detail Expansion */}
            <div className="pt-4 border-t border-[#1f1f23]/60 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-[#8a8a8e]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3ecf8e]" />
                <span>SYSTEM ARCHITECTURE:</span>
                <span className="text-[#f0ece5] font-medium">FastAPI · Azure OCR · PaddleOCR · RAG · JWT</span>
              </div>
              <span className="text-[#3ecf8e] text-[10px] uppercase tracking-wider font-semibold">
                {showDetail ? '● PRODUCTION ACTIVE' : 'HOVER FOR ARCHITECTURE'}
              </span>
            </div>
          </div>
        </Reveal>

        {/* Education Section */}
        <Reveal delay={0.2}>
          <div className="mt-16">
            <div className="font-mono text-xs uppercase tracking-widest text-[#3ecf8e] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3ecf8e]" />
              Academic Credentials
            </div>
            <div className="p-6 sm:p-8 rounded-xl bg-[#111113]/60 border border-[#1f1f23] hover:border-[#3ecf8e]/40 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-display text-xl text-[#f0ece5] font-bold">B.E. in Artificial Intelligence and Machine Learning</h3>
                <div className="text-[#8a8a8e] text-sm mt-1">Bangalore Institute of Technology</div>
              </div>
              <div className="font-mono text-xs text-[#3ecf8e] bg-[#3ecf8e]/10 px-3 py-1 rounded border border-[#3ecf8e]/30 w-fit">
                2022 – 2026 · CGPA: 8.66/10
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default ExperienceTimeline;
