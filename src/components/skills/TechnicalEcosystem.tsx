'use client';

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

export function TechnicalEcosystem() {
  return (
    <section id="systems" className="py-16 lg:py-20">
      <Container>
        <Reveal>
          <SectionLabel number="05" label="Technical Ecosystem" />
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
                  {eco.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs text-[#a1a1a6] px-3.5 py-1.5 bg-[#1a1a1d] border border-[#26262b] rounded-md hover:border-[#3ecf8e] hover:text-[#f0ece5] transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
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
