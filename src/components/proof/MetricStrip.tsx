'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate, useReducedMotion } from 'framer-motion';
import Container from '@/components/ui/Container';

interface MetricProps {
  value: number | string;
  suffix?: string;
  label: string;
  sublabel?: string;
  delay: number;
}

function AnimatedNumber({ value, suffix, delay }: { value: number | string; suffix?: string; delay: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  
  useEffect(() => {
    if (typeof value === 'number' && isInView && !prefersReducedMotion) {
      animate(motionValue, value, { duration: 1.5, delay, ease: "easeOut" });
    }
  }, [isInView, value, delay, prefersReducedMotion, motionValue]);

  if (typeof value === 'string') {
    return (
      <motion.span 
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView || prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay }}
      >
        {value}
        {suffix}
      </motion.span>
    );
  }

  return (
    <motion.span ref={ref}>
      {prefersReducedMotion ? (
        <span>{value}</span>
      ) : (
        <motion.span>{rounded}</motion.span>
      )}
      {suffix}
    </motion.span>
  );
}

export default function MetricStrip() {
  const metrics: Omit<MetricProps, 'delay'>[] = [
    { value: 5, suffix: '×', label: 'OCR Processing Speedup', sublabel: '15s → 3s Optimization' },
    { value: 92, suffix: '%', label: 'Pose Extraction Accuracy' },
    { value: 30, suffix: '%', label: 'Manual Analysis Reduction' },
    { value: 'RAG', label: 'Production LLM Pipeline', sublabel: 'FastAPI + Vector DB' }
  ];

  return (
    <section className="py-12 border-y border-[#1f1f23] bg-[#0a0a0b]/60 relative z-10">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <motion.div 
              key={index} 
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="glass-card p-6 rounded-2xl flex flex-col justify-between border border-[#1f1f23] hover:border-[#3ecf8e]/40 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Subtle top glow line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#3ecf8e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#3ecf8e] mb-2 font-semibold">
                  METRIC // 0{index + 1}
                </div>
                <div className="font-display text-4xl sm:text-5xl font-bold text-[#f0ece5] tracking-tight group-hover:text-gradient-emerald transition-all">
                  <AnimatedNumber 
                    value={metric.value} 
                    suffix={metric.suffix} 
                    delay={index * 0.15} 
                  />
                </div>
              </div>

              <div className="mt-4">
                <div className="font-mono text-xs uppercase tracking-wider text-[#8a8a8e] group-hover:text-[#f0ece5] transition-colors">
                  {metric.label}
                </div>
                {metric.sublabel && (
                  <div className="font-mono text-[10px] text-[#555558] mt-1">
                    {metric.sublabel}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
