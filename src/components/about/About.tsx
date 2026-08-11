'use client';

import { SectionLabel } from '@/components/ui/SectionLabel';
import { Reveal } from '@/components/ui/Reveal';
import { Container } from '@/components/ui/Container';

export function About() {
  const offerings = [
    {
      title: '1. Production AI & RAG Infrastructure',
      desc: 'Architecting vector search databases (FAISS), hybrid BM25 + dense retrieval, and low-latency LLM agent pipelines with zero-hallucination guardrails.'
    },
    {
      title: '2. High-Throughput REST & Payment Backends',
      desc: 'Building zero-downtime Stripe payment integrations, webhook listener idempotency, JWT session security, and FastAPI microservices.'
    },
    {
      title: '3. Multimodal Signal & OCR Optimization',
      desc: 'Deploying Azure OCR + PaddleOCR computer vision fallback pipelines with Pydantic validation, optimizing document extraction latency by up to 80%.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#0a0a0b] relative z-10">
      <Container>
        <div className="max-w-5xl mx-auto space-y-12">
          <Reveal>
            <SectionLabel label="Engineering Background & Focus" />
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#f0ece5] leading-tight mt-6 mb-6 tracking-tight">
              &quot;I bridge the gap between complex AI research and reliable production systems.&quot;
            </h2>
            <p className="text-[#8a8a8e] text-base sm:text-lg leading-relaxed max-w-3xl">
              I am an AI Systems & Backend Infrastructure Engineer specialized in building resilient APIs, real-time multimodal processing pipelines, and vector-backed intelligence applications.
            </p>
          </Reveal>

          {/* Client & Recruiter Capabilities Bento Grid */}
          <Reveal delay={0.2}>
            <div className="pt-4">
              <div className="font-mono text-xs uppercase tracking-widest text-[#3ecf8e] mb-6 font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#3ecf8e]" />
                What I Deliver For Companies & Clients
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {offerings.map((item, idx) => (
                  <div
                    key={idx}
                    className="glass-card p-6 rounded-3xl border border-[#1f1f23] hover:border-[#3ecf8e]/40 transition-all duration-300 space-y-3 group"
                  >
                    <h3 className="font-mono text-sm text-[#3ecf8e] font-bold group-hover:text-[#f0ece5] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#8a8a8e] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default About;
