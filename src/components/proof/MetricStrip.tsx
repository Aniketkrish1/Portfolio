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
    { value: 5, suffix: '×', label: 'OCR Processing Improvement', sublabel: '15s → 3s' },
    { value: 92, suffix: '%', label: 'Skeleton Extraction Accuracy' },
    { value: 30, suffix: '%', label: 'Reduction in Manual Analysis' },
    { value: 'RAG', label: 'Production AI System' }
  ];

  return (
    <section className="py-10 border-y border-[#1f1f23] bg-[#0a0a0b]">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#1f1f23]">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col items-center text-center px-8">
              <div className="font-display text-4xl sm:text-5xl font-bold text-[#f0ece5]">
                <AnimatedNumber 
                  value={metric.value} 
                  suffix={metric.suffix} 
                  delay={index * 0.15} 
                />
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-[#8a8a8e] mt-3">
                {metric.label}
              </div>
              {metric.sublabel && (
                <div className="font-mono text-[10px] text-[#555558] mt-1">
                  {metric.sublabel}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
