'use client';

import React from 'react';
import { useReducedMotion, motion } from 'framer-motion';

// Generalized AI Systems Engineering workflow nodes
const GENERAL_NODES = [
  {
    id: 'ingestion',
    title: 'DATA INGESTION',
    sub: 'Multimodal Signals',
    tag: 'INPUT',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    id: 'extraction',
    title: 'SIGNAL EXTRACTION',
    sub: 'OCR / Vision / Audio',
    tag: 'PROCESSING',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
        <rect x="7" y="7" width="10" height="10" rx="1" />
      </svg>
    ),
  },
  {
    id: 'embedding',
    title: 'VECTOR EMBEDDING',
    sub: 'Latent Representations',
    tag: 'TRANSFORM',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="6" r="2" />
        <circle cx="12" cy="12" r="2.5" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
        <line x1="8" y1="6" x2="16" y2="6" strokeDasharray="2 2" />
        <line x1="6" y1="8" x2="6" y2="16" strokeDasharray="2 2" />
        <line x1="18" y1="8" x2="18" y2="16" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    id: 'retrieval',
    title: 'HYBRID RETRIEVAL',
    sub: 'Vector & Dense Search',
    tag: 'RAG',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
  },
  {
    id: 'llm',
    title: 'LLM REASONING',
    sub: 'Generative Intelligence',
    tag: 'MODELS',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
        <path d="M12 6a6 6 0 0 0-6 6h12a6 6 0 0 0-6-6z" />
      </svg>
    ),
  },
  {
    id: 'agentic',
    title: 'AGENTIC LOGIC',
    sub: 'Tool Orchestration',
    tag: 'AGENTS',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    id: 'api',
    title: 'BACKEND INFRA',
    sub: 'APIs & Microservices',
    tag: 'SYSTEM',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: 'output',
    title: 'PRODUCTION VALUE',
    sub: 'Deployed Intelligence',
    tag: 'OUTPUT',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

export default function SystemVisualization() {
  const prefersReducedMotion = useReducedMotion();
  const [selectedNode, setSelectedNode] = React.useState<typeof GENERAL_NODES[0] | null>(null);

  const marqueeItems = [...GENERAL_NODES, ...GENERAL_NODES];

  return (
    <div className="w-full relative py-6 px-2 lg:px-4 flex flex-col justify-center items-center overflow-hidden">
      {/* Header Badge */}
      <div className="w-full flex items-center justify-between mb-4 px-2">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#3ecf8e]">
          <span className="w-2 h-2 rounded-full bg-[#3ecf8e] animate-ping" />
          AI INFRASTRUCTURE CANVAS (CLICK NODE TO INSPECT CODE)
        </div>
        <span className="font-mono text-[10px] text-[#8a8a8e]">
          Telemetry: <span className="text-[#3ecf8e] font-bold">14ms Context Lookup</span>
        </span>
      </div>

      {/* Infinite Horizontal Scroll Container */}
      <div className="w-full relative overflow-hidden py-4 rounded-3xl glass-card border border-[#1f1f23] backdrop-blur-xl">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0a0a0b] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0a0a0b] to-transparent z-20 pointer-events-none" />

        <motion.div
          className="flex items-center gap-4 w-max"
          animate={prefersReducedMotion ? {} : { x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            duration: 28,
            ease: 'linear',
          }}
        >
          {marqueeItems.map((node, i) => (
            <React.Fragment key={`${node.id}-${i}`}>
              <div
                onClick={() => {
                  setSelectedNode(node);
                }}
                className="flex flex-col items-start p-4 rounded-2xl bg-[#111113] border border-[#1f1f23] hover:border-[#3ecf8e] hover:bg-[#16161a] transition-all duration-300 w-[180px] shrink-0 group cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(62,207,142,0.15)]"
              >
                <div className="w-full flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#1a1a1e] text-[#3ecf8e] group-hover:bg-[#3ecf8e] group-hover:text-[#0a0a0b] flex items-center justify-center transition-all duration-300">
                    {node.icon}
                  </div>
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded-full bg-[#1f1f24] text-[#8a8a8e] group-hover:bg-[#3ecf8e]/20 group-hover:text-[#3ecf8e] transition-colors">
                    {node.tag}
                  </span>
                </div>

                <span className="font-mono text-xs font-bold tracking-wider text-[#f0ece5] mb-1 truncate w-full group-hover:text-[#3ecf8e] transition-colors">
                  {node.title}
                </span>
                <span className="font-mono text-[10px] text-[#8a8a8e] truncate w-full">
                  {node.sub}
                </span>
              </div>

              <div className="flex items-center justify-center text-[#3ecf8e]/40 shrink-0">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* Code Inspector Modal */}
      {selectedNode && (
        <div className="w-full mt-4 p-4 rounded-2xl bg-[#0d0d10] border border-[#3ecf8e]/40 font-mono text-xs text-[#8a8a8e] space-y-2 animate-fadeIn">
          <div className="flex items-center justify-between text-[#f0ece5] border-b border-[#1f1f23] pb-2">
            <span className="text-[#3ecf8e] font-bold">NODE INSPECTOR // {selectedNode.title}</span>
            <button
              onClick={() => setSelectedNode(null)}
              className="text-[10px] bg-[#1f1f23] px-2 py-0.5 rounded text-[#8a8a8e] hover:text-[#f0ece5]"
            >
              CLOSE ✕
            </button>
          </div>
          <div className="text-[11px] text-[#8a8a8e]">
            {selectedNode.sub} — Optimized async pipeline stage executing in FastAPI / Python runtime with zero-copy stream buffers.
          </div>
        </div>
      )}

      {/* General Systems Annotation Bar */}
      <div className="w-full mt-4 pt-3 border-t border-[#1f1f23]/60 flex items-center justify-between font-mono text-[11px] text-[#8a8a8e] px-2 gap-2">
        <span className="flex items-center gap-2 truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3ecf8e] shrink-0" />
          <span className="truncate">SIGNAL PROCESSING → LATENT REPRESENTATIONS → DEPLOYED INTELLIGENCE</span>
        </span>
        <span className="text-[10px] uppercase tracking-widest text-[#3ecf8e] shrink-0 hidden md:inline">
          PRODUCTION READY
        </span>
      </div>
    </div>
  );
}
