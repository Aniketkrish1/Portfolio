'use client';

import React, { useState } from 'react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Reveal } from '@/components/ui/Reveal';
import { Container } from '@/components/ui/Container';

export function ExperienceTimeline() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const experiences = [
    {
      id: 'finprohub',
      company: 'FinProhub',
      product: 'AI Finance Tracker Platform',
      role: 'Backend & Systems Engineer',
      period: 'Nov 2025 – Present',
      badge: 'PRODUCTION ACTIVE',
      highlights: [
        {
          tag: 'Tenforty System',
          text: 'Integrated Stripe Payment Gateway for PCI-compliant checkout sessions, recurring subscription lifecycle management, and automated invoice processing.'
        },
        {
          tag: 'Tenforty System',
          text: 'Engineered zero-downtime Stripe Webhook listeners (checkout.session.completed, invoice.payment_succeeded) with idempotent database event processing and retry workflows.'
        },
        {
          tag: 'FinProhub Core',
          text: 'Integrated Azure OCR + PaddleOCR fallback with Pydantic validation, reducing document processing latency from 15s down to 3s.'
        },
        {
          tag: 'FinProhub Core',
          text: 'Built RAG-powered chatbot for financial queries using vector embeddings and LLM generation.'
        },
        {
          tag: 'FinProhub Core',
          text: 'Built and shipped JWT-based authentication securing user sessions, REST APIs, and automated GoDaddy SMTP notification pipeline.'
        }
      ],
      tech: ['FastAPI', 'Stripe API', 'Webhooks', 'Azure OCR', 'PaddleOCR', 'RAG / Vector DB', 'JWT', 'PostgreSQL', 'GoDaddy SMTP']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[#0a0a0b] relative z-10">
      <Container>
        <Reveal>
          <div className="mb-10">
            <SectionLabel label="Career & Track Record" />
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#f0ece5] mt-4 tracking-tight">
              Engineering Experience
            </h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                onMouseEnter={() => setHoveredCard(exp.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-[#1f1f23] hover:border-[#3ecf8e]/50 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Glow line indicator */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#3ecf8e]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Organization Title, Product & Role */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#1f1f23]">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-2xl sm:text-3xl text-[#f0ece5] font-bold group-hover:text-gradient-emerald transition-all">
                        {exp.company}
                      </h3>
                      <span className="font-mono text-xs text-[#8a8a8e] bg-[#111113] border border-[#1f1f23] px-2.5 py-0.5 rounded-full">
                        {exp.product}
                      </span>
                      <span className="font-mono text-[10px] text-[#3ecf8e] bg-[#3ecf8e]/10 border border-[#3ecf8e]/30 px-2.5 py-0.5 rounded-full font-bold">
                        {exp.badge}
                      </span>
                    </div>
                    <div className="font-mono text-sm text-[#3ecf8e] font-semibold mt-1.5">
                      Role: {exp.role}
                    </div>
                  </div>
                  <div className="font-mono text-xs text-[#8a8a8e] bg-[#111113] px-3.5 py-1.5 rounded-full border border-[#1f1f23] w-fit">
                    {exp.period}
                  </div>
                </div>

                {/* Highlights List */}
                <ul className="space-y-3.5 max-w-4xl mb-6">
                  {exp.highlights.map((item, idx) => (
                    <li key={idx} className="text-[#8a8a8e] text-xs sm:text-sm leading-relaxed flex items-start gap-2.5">
                      <span className="text-[#3ecf8e] mt-0.5 font-bold">➢</span>
                      <div>
                        <span className="font-mono text-[10px] text-[#3ecf8e] bg-[#3ecf8e]/10 border border-[#3ecf8e]/30 px-2 py-0.5 rounded mr-2 font-semibold">
                          {item.tag}
                        </span>
                        <span className="text-[#f0ece5]">{item.text}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="pt-4 border-t border-[#1f1f23] flex flex-wrap items-center gap-2 text-[11px] font-mono text-[#8a8a8e]">
                  <span className="text-[#3ecf8e] font-bold text-[10px] uppercase tracking-wider mr-1">STACK:</span>
                  {exp.tech.map((t) => (
                    <span key={t} className="bg-[#111113] border border-[#1f1f23] text-[#8a8a8e] group-hover:text-[#f0ece5] px-2.5 py-1 rounded-full text-[10px] transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Education Section */}
        <Reveal delay={0.2}>
          <div className="mt-16">
            <div className="font-mono text-xs uppercase tracking-widest text-[#3ecf8e] mb-4 flex items-center gap-2 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#3ecf8e]" />
              Academic Credentials
            </div>
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#1f1f23] hover:border-[#3ecf8e]/40 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-xl sm:text-2xl text-[#f0ece5] font-bold">
                  B.E. in Artificial Intelligence and Machine Learning
                </h3>
                <div className="text-[#8a8a8e] font-mono text-xs sm:text-sm mt-1">
                  Bangalore Institute of Technology
                </div>
              </div>
              <div className="font-mono text-xs text-[#3ecf8e] bg-[#3ecf8e]/10 px-4 py-2 rounded-full border border-[#3ecf8e]/30 w-fit font-bold shadow-sm">
                2022 – 2026 · CGPA: 8.66 / 10
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default ExperienceTimeline;
