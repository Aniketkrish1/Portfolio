'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0a0a0b]/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="w-full max-w-3xl bg-[#0d0d10] border border-[#3ecf8e]/40 rounded-3xl p-6 sm:p-8 font-mono text-xs text-[#8a8a8e] shadow-2xl relative max-h-[90vh] overflow-y-auto"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-[#1f1f23] pb-4 mb-6">
            <div>
              <h2 className="font-display text-2xl text-[#f0ece5] font-bold">
                ANIKET PATIL // RESUME
              </h2>
              <div className="text-xs text-[#3ecf8e] mt-1 font-semibold">
                AI Systems & Backend Infrastructure Engineer
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/Aniket_Resume.pdf"
                download="Aniket_Patil_Resume.pdf"
                className="bg-[#3ecf8e] hover:bg-[#34b87d] text-[#0a0a0b] px-4 py-2 rounded-full font-bold text-xs flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <span>📥</span>
                <span>Download PDF</span>
              </a>
              <button
                onClick={onClose}
                className="bg-[#111113] border border-[#1f1f23] text-[#8a8a8e] hover:text-[#f0ece5] px-3 py-2 rounded-full text-xs transition-colors"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Resume Contents */}
          <div className="space-y-6 text-sm font-sans text-[#f0ece5]">
            {/* Contact Header */}
            <div className="flex flex-wrap gap-4 text-xs font-mono text-[#8a8a8e] bg-[#070709] border border-[#1f1f23] p-3.5 rounded-xl">
              <span>📍 Bangalore, India</span>
              <span>•</span>
              <a href="https://github.com/Aniketkrish1" target="_blank" rel="noreferrer" className="text-[#3ecf8e] hover:underline">
                github.com/Aniketkrish1
              </a>
              <span>•</span>
              <a href="https://www.linkedin.com/in/aniketpatil11" target="_blank" rel="noreferrer" className="text-[#3ecf8e] hover:underline">
                linkedin.com/in/aniketpatil11
              </a>
            </div>

            {/* Section: Summary */}
            <div className="space-y-2">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#3ecf8e] font-bold">
                PROFILED SUMMARY
              </h3>
              <p className="text-xs sm:text-sm text-[#8a8a8e] leading-relaxed">
                AI Systems & Backend Infrastructure Engineer specialized in FastAPI microservices, zero-downtime Stripe payment integrations, vector search retrieval (FAISS), and multimodal signal extraction pipelines.
              </p>
            </div>

            {/* Section: Experience */}
            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#3ecf8e] font-bold">
                COMMERCIAL EXPERIENCE
              </h3>
              
              <div className="bg-[#070709] border border-[#1f1f23] p-4 rounded-xl space-y-2">
                <div className="flex justify-between items-center font-mono text-xs">
                  <span className="text-[#f0ece5] font-bold text-sm">FinProhub</span>
                  <span className="text-[#8a8a8e]">Nov 2025 – Present</span>
                </div>
                <div className="font-mono text-xs text-[#3ecf8e]">
                  Role: Backend & Systems Engineer (Product: AI Finance Tracker Platform)
                </div>
                <ul className="space-y-1.5 text-xs text-[#8a8a8e] list-disc list-inside">
                  <li>Integrated Stripe Payment Gateway for PCI-compliant checkout sessions, recurring subscription lifecycle management, and automated invoicing.</li>
                  <li>Engineered zero-downtime Stripe Webhook listeners (checkout.session.completed, invoice.payment_succeeded) with idempotent database event processing.</li>
                  <li>Integrated Azure OCR + PaddleOCR fallback with Pydantic validation, reducing document processing latency from 15s to 3s.</li>
                  <li>Built RAG-powered chatbot for financial queries using vector embeddings and LLM generation.</li>
                </ul>
              </div>
            </div>

            {/* Section: Key Projects */}
            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#3ecf8e] font-bold">
                FEATURED AI SYSTEMS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-[#070709] border border-[#1f1f23] p-3 rounded-xl">
                  <div className="font-bold text-[#f0ece5]">VidBrain</div>
                  <div className="text-[#8a8a8e] text-[11px] mt-1">Speech-to-Text → Embedding → HDBSCAN clustering for video summarization.</div>
                </div>
                <div className="bg-[#070709] border border-[#1f1f23] p-3 rounded-xl">
                  <div className="font-bold text-[#f0ece5]">3D Motion Analysis</div>
                  <div className="text-[#8a8a8e] text-[11px] mt-1">Computer vision keypoint analysis & biomechanics joint angle computation.</div>
                </div>
              </div>
            </div>

            {/* Section: Education */}
            <div className="space-y-2">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#3ecf8e] font-bold">
                EDUCATION
              </h3>
              <div className="flex justify-between items-center bg-[#070709] border border-[#1f1f23] p-3 rounded-xl text-xs">
                <div>
                  <div className="font-bold text-[#f0ece5]">Bangalore Institute of Technology</div>
                  <div className="text-[#8a8a8e]">B.E. in Artificial Intelligence and Machine Learning</div>
                </div>
                <div className="font-mono text-[#3ecf8e] font-bold">
                  CGPA: 8.66 / 10
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#1f1f23] flex justify-between items-center font-mono text-[10px] text-[#555558]">
            <span>Place your PDF file at: /public/Aniket_Resume.pdf</span>
            <button onClick={onClose} className="text-[#3ecf8e] hover:underline">Close Preview ✕</button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default ResumeModal;
