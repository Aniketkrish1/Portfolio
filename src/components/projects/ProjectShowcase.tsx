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
    <section className="py-16 lg:py-24 relative z-10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className={reverse ? 'lg:order-2' : 'lg:order-1'}>
            <Reveal>
              <div className="glass-card p-8 rounded-3xl border border-[#1f1f23] hover:border-[#3ecf8e]/30 transition-all duration-300 relative group overflow-hidden">
                {/* Glow line indicator */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#3ecf8e]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <SectionLabel number={number} label="Featured System" />
                <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#f0ece5] mt-4 tracking-tight group-hover:text-gradient-emerald transition-all">
                  {title}
                </h3>
                <div className="font-mono text-xs sm:text-sm text-[#3ecf8e] font-semibold mt-2">{subtitle}</div>
                <p className="text-[#8a8a8e] mt-4 text-sm sm:text-base leading-relaxed">
                  {description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-6">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] px-3 py-1.5 bg-[#111113] border border-[#1f1f23] text-[#8a8a8e] rounded-full uppercase tracking-wider hover:border-[#3ecf8e]/50 hover:text-[#3ecf8e] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {metrics.length > 0 && (
                  <div className="grid grid-cols-2 gap-4 mt-8 p-4 rounded-2xl bg-[#0a0a0b]/80 border border-[#1f1f23]">
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
                    className="inline-flex items-center gap-2 mt-8 px-4 py-2 bg-[#111113] border border-[#1f1f23] rounded-full font-mono text-xs text-[#8a8a8e] hover:text-[#3ecf8e] hover:border-[#3ecf8e]/40 transition-all group/btn"
                  >
                    <span>View Repository on GitHub</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform duration-200">→</span>
                  </a>
                )}
              </div>
            </Reveal>
          </div>
          <div className={reverse ? 'lg:order-1' : 'lg:order-2'}>
            <Reveal delay={0.2}>
              <div className="glass-card p-6 rounded-3xl border border-[#1f1f23] hover:border-[#3ecf8e]/30 transition-all duration-300">
                {children}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProjectShowcase;
