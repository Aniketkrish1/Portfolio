'use client';

import React, { useState } from 'react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Reveal } from '@/components/ui/Reveal';
import { Container } from '@/components/ui/Container';

const ecosystems = [
  {
    category: 'AI / ML',
    technologies: ['LLMs', 'RAG', 'Agentic AI', 'Transformers', 'PyTorch', 'TensorFlow', 'Scikit-learn'],
  },
  {
    category: 'Computer Vision / OCR',
    technologies: ['OpenCV', 'MediaPipe', 'PaddleOCR', 'Azure OCR'],
  },
  {
    category: 'Backend / Infrastructure',
    technologies: ['FastAPI', 'Next.js', 'Pydantic', 'Docker', 'Git'],
  },
  {
    category: 'Databases',
    technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Vector Databases'],
  }
];

// Map related technology clusters
const RELATED_MAP: Record<string, string[]> = {
  LLMs: ['RAG', 'Agentic AI', 'Transformers', 'FastAPI', 'Vector Databases', 'PostgreSQL'],
  RAG: ['LLMs', 'Agentic AI', 'Vector Databases', 'FastAPI', 'PostgreSQL'],
  'Agentic AI': ['LLMs', 'RAG', 'Pydantic', 'FastAPI', 'Vector Databases'],
  Transformers: ['LLMs', 'PyTorch', 'TensorFlow', 'Scikit-learn'],
  PyTorch: ['Transformers', 'TensorFlow', 'OpenCV', 'MediaPipe'],
  OpenCV: ['MediaPipe', 'PaddleOCR', 'Azure OCR', 'PyTorch'],
  FastAPI: ['Next.js', 'Pydantic', 'Docker', 'PostgreSQL', 'LLMs'],
  PostgreSQL: ['FastAPI', 'MySQL', 'MongoDB', 'Vector Databases'],
  'Vector Databases': ['LLMs', 'RAG', 'FastAPI', 'PostgreSQL'],
};

export function TechnicalEcosystem() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const isRelated = (tech: string) => {
    if (!hoveredTech) return true;
    if (tech === hoveredTech) return true;
    const relatedList = RELATED_MAP[hoveredTech] || [];
    return relatedList.includes(tech);
  };

  return (
    <section id="systems" className="py-20 relative z-10">
      <Container>
        <Reveal>
          <div className="mb-12">
            <SectionLabel label="Engineering Stack" />
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#f0ece5] mt-4 tracking-tight">
              Technical Ecosystem
            </h2>
            <p className="font-mono text-xs text-[#8a8a8e] mt-2">
              Hover any technology to reveal interconnected AI pipeline & infrastructure dependencies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ecosystems.map((eco, index) => (
              <div 
                key={index} 
                className="glass-card p-8 rounded-3xl border border-[#1f1f23] hover:border-[#3ecf8e]/40 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Glow line indicator */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#3ecf8e]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <h3 className="font-mono text-xs text-[#3ecf8e] uppercase tracking-wider mb-6 flex items-center gap-2 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#3ecf8e] shadow-[0_0_8px_#3ecf8e]" />
                  {eco.category}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {eco.technologies.map((tech) => {
                    const active = isRelated(tech);
                    const isSelf = hoveredTech === tech;

                    return (
                      <span
                        key={tech}
                        onMouseEnter={() => setHoveredTech(tech)}
                        onMouseLeave={() => setHoveredTech(null)}
                        className={`font-mono text-xs px-4 py-2 rounded-full border transition-all duration-200 cursor-pointer select-none ${
                          isSelf
                            ? 'border-[#3ecf8e] text-[#0a0a0b] bg-[#3ecf8e] shadow-[0_0_16px_rgba(62,207,142,0.4)] scale-105 font-bold'
                            : active
                            ? 'border-[#3ecf8e]/40 text-[#f0ece5] bg-[#111113]/90 hover:border-[#3ecf8e]'
                            : 'border-[#1f1f23] text-[#555558] bg-[#0a0a0b]/50 opacity-30'
                        }`}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default TechnicalEcosystem;
