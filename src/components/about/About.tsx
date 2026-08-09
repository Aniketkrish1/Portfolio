'use client';

import { SectionLabel } from '@/components/ui/SectionLabel';
import { Reveal } from '@/components/ui/Reveal';
import { Container } from '@/components/ui/Container';

export function About() {
  return (
    <section id="about" className="py-16">
      <Container>
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <SectionLabel label="About" />
            <h2 className="font-display text-2xl sm:text-3xl text-[#f0ece5] leading-relaxed mt-6 mb-8">
              "I like understanding what happens between an idea and a production system."
            </h2>
            <p className="text-[#8a8a8e] leading-relaxed">
              I'm an AI/ML engineer focused on building systems that work — not just models that run. My work spans LLMs, retrieval-augmented generation, computer vision, OCR pipelines, and backend infrastructure. I care about the full path from raw signal to deployed intelligence.
            </p>
            <p className="text-[#555558] text-sm mt-4">
              Graduated with a B.E. in AI & ML from Bangalore Institute of Technology, building production-grade systems as a freelance developer.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default About;
