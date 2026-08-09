'use client';

import { SectionLabel } from '@/components/ui/SectionLabel';
import { Reveal } from '@/components/ui/Reveal';
import { Container } from '@/components/ui/Container';

export function ExperienceTimeline() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <Reveal>
          <SectionLabel number="06" label="Experience" />
          <div className="mt-8">
            <h3 className="font-display text-2xl text-[#f0ece5] font-bold">FinProhub</h3>
            <div className="font-mono text-sm text-[#8a8a8e] mt-1">Finance Tracker | Freelance Backend Developer</div>
            <div className="font-mono text-xs text-[#3ecf8e] mt-2 mb-4">Nov 2025 – Present</div>
            
            <ul className="space-y-3">
              <li className="text-[#8a8a8e] text-sm leading-relaxed flex items-start gap-2">
                <span className="text-[#3ecf8e] mt-1.5">-</span>
                Built and shipped JWT-based authentication securing user sessions and API access.
              </li>
              <li className="text-[#8a8a8e] text-sm leading-relaxed flex items-start gap-2">
                <span className="text-[#3ecf8e] mt-1.5">-</span>
                Integrated Azure OCR + PaddleOCR fallback with Pydantic validation. Cut processing from 15s to 3s.
              </li>
              <li className="text-[#8a8a8e] text-sm leading-relaxed flex items-start gap-2">
                <span className="text-[#3ecf8e] mt-1.5">-</span>
                Built RAG-powered chatbot for finance queries using vector embeddings and LLM generation.
              </li>
              <li className="text-[#8a8a8e] text-sm leading-relaxed flex items-start gap-2">
                <span className="text-[#3ecf8e] mt-1.5">-</span>
                Developed email notification system using GoDaddy SMTP integration.
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-24">
            <SectionLabel number="07" label="Education" />
            <div className="mt-8">
              <h3 className="font-display text-xl text-[#f0ece5]">B.E. in Artificial Intelligence and Machine Learning</h3>
              <div className="text-[#8a8a8e] mt-1">Bangalore Institute of Technology</div>
              <div className="font-mono text-xs text-[#555558] mt-2">2022 – 2026 · CGPA: 8.66/10</div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default ExperienceTimeline;
