'use client';

import React from 'react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Reveal } from '@/components/ui/Reveal';
import { Container } from '@/components/ui/Container';

interface ProjectShowcaseProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  metrics: { value: string; label: string }[];
  github: string;
  children: React.ReactNode;
  reverse?: boolean;
}

export function ProjectShowcase({
  number,
  title,
  subtitle,
  description,
  technologies,
  metrics,
  github,
  children,
  reverse = false,
}: ProjectShowcaseProps) {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className={reverse ? 'lg:order-2' : 'lg:order-1'}>
            <Reveal>
              <SectionLabel number={number} label="Featured Project" />
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f0ece5] mt-4 tracking-tight">
                {title}
              </h3>
              <div className="font-mono text-sm text-[#3ecf8e] font-medium mt-2">{subtitle}</div>
              <p className="text-[#8a8a8e] mt-5 text-sm sm:text-base leading-relaxed max-w-lg">
                {description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-6">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[10px] px-3 py-1 bg-[#121215] border border-[#1f1f23] text-[#8a8a8e] rounded-sm uppercase tracking-wider hover:border-[#3ecf8e] hover:text-[#f0ece5] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {metrics.length > 0 && (
                <div className="grid grid-cols-2 gap-6 mt-8 p-4 rounded-lg bg-[#111113]/60 border border-[#1f1f23]/60">
                  {metrics.map((metric, index) => (
                    <div key={index}>
                      <div className="font-display text-xl sm:text-2xl text-[#f0ece5] font-bold">
                        {metric.value}
                      </div>
                      <div className="font-mono text-[10px] text-[#8a8a8e] uppercase tracking-wider mt-0.5">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 mt-8 font-mono text-xs text-[#8a8a8e] hover:text-[#3ecf8e] transition-colors"
                >
                  <span>View on GitHub</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </a>
              )}
            </Reveal>
          </div>
          <div className={reverse ? 'lg:order-1' : 'lg:order-2'}>
            <Reveal delay={0.2}>
              {children}
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProjectShowcase;
