'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

import Container from '@/components/ui/Container';

import SystemVisualization from './SystemVisualization';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };

  const ctaVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: 0.4 // Extra delay for CTAs to appear last
      }
    }
  };
  
  const visualizationVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
        delay: 0.5
      }
    }
  };


  const scrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-[#0a0a0b]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            className="flex flex-col z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="font-mono text-xs uppercase tracking-[0.3em] text-[#3ecf8e] mb-4">
              AI SYSTEMS & INFRASTRUCTURE ENGINEER
            </motion.div>
            
            <motion.div variants={itemVariants} className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold text-[#f0ece5] tracking-tight leading-none mb-4">
              ANIKET.
            </motion.div>

            <motion.div variants={itemVariants} className="font-mono text-sm text-[#3ecf8e] font-semibold tracking-wide mb-6">
              Specialized in LLM Pipelines, Computer Vision & Agentic Systems
            </motion.div>
            
            <motion.div variants={itemVariants} className="text-base sm:text-lg text-[#8a8a8e] leading-relaxed max-w-lg mb-8">
              Engineering production-grade AI systems, multimodal signal pipelines, and high-performance backend infrastructure.
            </motion.div>
            
            <motion.div variants={ctaVariants} className="flex flex-wrap items-center gap-3">
              <a 
                href="#work"
                onClick={scrollToWork}
                className="inline-flex items-center gap-2 bg-[#3ecf8e] text-[#0a0a0b] px-5 py-2.5 font-semibold text-xs uppercase tracking-wider rounded-sm hover:bg-[#34b87d] transition-colors"
              >
                View Systems
                <span>→</span>
              </a>
              <a 
                href="https://github.com/Aniketkrish1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#1f1f23] text-[#8a8a8e] px-4 py-2.5 text-xs font-mono rounded-sm hover:border-[#3ecf8e] hover:text-[#f0ece5] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/aniketkrish1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#1f1f23] text-[#8a8a8e] px-4 py-2.5 text-xs font-mono rounded-sm hover:border-[#3ecf8e] hover:text-[#f0ece5] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right Column: Visualization */}
          <motion.div 
            className="z-10"
            variants={visualizationVariants}
            initial="hidden"
            animate="visible"
          >
            <SystemVisualization />
          </motion.div>
          
        </div>
      </Container>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="font-mono text-[10px] text-[#555558] tracking-[0.3em]">
          SCROLL TO EXPLORE
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#555558" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
