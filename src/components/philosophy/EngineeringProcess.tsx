'use client';

import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import Reveal from '@/components/ui/Reveal';

export default function EngineeringProcess() {
  const steps = [
    {
      title: 'PROBLEM',
      description: 'Define what needs to be solved, not what model to use'
    },
    {
      title: 'DATA',
      description: 'Understand the signal before choosing representation'
    },
    {
      title: 'REPRESENTATION',
      description: 'Embeddings, features, structured extraction'
    },
    {
      title: 'MODEL',
      description: 'Choose the right tool, not the trending one'
    },
    {
      title: 'EVALUATION',
      description: 'Measure what matters to the system'
    },
    {
      title: 'INFRASTRUCTURE',
      description: 'APIs, databases, authentication, monitoring'
    },
    {
      title: 'DEPLOYMENT',
      description: 'Ship it. Make it reliable.'
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-[#0a0a0b]">
      <Container>
        <SectionLabel label="Philosophy" />

        <div className="mt-10 mb-16">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="block text-[#f0ece5]">I don't start with the model.</span>
              <span className="block text-[#3ecf8e]">I start with the system.</span>
            </h2>
          </Reveal>
        </div>

        <div className="flex flex-col gap-8 max-w-4xl mx-auto relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[1.125rem] sm:left-[1.375rem] top-8 bottom-8 w-px bg-[#1f1f23] hidden sm:block" />

          {steps.map((step, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <div className="flex items-start sm:items-center gap-6 relative">
                {/* Node circle on desktop */}
                <div className="hidden sm:flex items-center justify-center w-11 h-11 rounded-full bg-[#111113] border border-[#1f1f23] z-10 shrink-0">
                  <span className="font-mono text-xs text-[#555558]">0{index + 1}</span>
                </div>
                
                {/* Mobile number */}
                <div className="sm:hidden mt-1 text-[#555558] font-mono text-xs w-6 shrink-0">
                  0{index + 1}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 w-full py-4 px-6 rounded-lg border border-[#1f1f23] bg-[#111113]/50 hover:border-[#3ecf8e]/30 hover:bg-[#141417] transition-all duration-300">
                  <h3 className="font-mono text-sm text-[#3ecf8e] uppercase tracking-wider shrink-0 sm:w-40">
                    {step.title}
                  </h3>
                  <p className="text-[#8a8a8e] text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
