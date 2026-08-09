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
    <section id="systems" className="py-16 lg:py-20">
      <Container>
        <Reveal>
          <SectionLabel label="Technical Ecosystem" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#f0ece5] mt-4 mb-10">
            Technologies I Work With
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {ecosystems.map((eco, index) => (
              <div key={index} className="p-6 sm:p-8 rounded-xl bg-[#111113]/80 border border-[#1f1f23] hover:border-[#3ecf8e]/40 transition-colors duration-300">
                <h3 className="font-mono text-xs text-[#3ecf8e] uppercase tracking-wider mb-5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3ecf8e]" />
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
                        className={`font-mono text-xs px-3.5 py-1.5 bg-[#1a1a1d] border rounded-md transition-all duration-300 cursor-default ${
                          isSelf
                            ? 'border-[#3ecf8e] text-[#f0ece5] bg-[#3ecf8e]/10 shadow-[0_0_12px_rgba(62,207,142,0.3)] scale-105'
                            : active
                            ? 'border-[#3ecf8e]/40 text-[#f0ece5] opacity-100'
                            : 'border-[#26262b] text-[#8a8a8e] opacity-35'
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
