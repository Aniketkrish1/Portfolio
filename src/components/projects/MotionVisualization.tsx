'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function MotionVisualization() {
  const steps = [
    'VIDEO FRAME',
    'POSE LANDMARKS',
    'SKELETON',
    '3D BODY',
    'BIOMECHANICAL ANALYSIS',
  ];

  const joints = [
    { cx: 120, cy: 50, label: 'Head' },
    { cx: 120, cy: 80, label: 'Neck' },
    { cx: 90, cy: 95, label: 'L Shoulder' },
    { cx: 150, cy: 95, label: 'R Shoulder' },
    { cx: 75, cy: 140, label: 'L Elbow' },
    { cx: 165, cy: 140, label: 'R Elbow' },
    { cx: 65, cy: 180, label: 'L Wrist' },
    { cx: 175, cy: 180, label: 'R Wrist' },
    { cx: 100, cy: 180, label: 'L Hip' },
    { cx: 140, cy: 180, label: 'R Hip' },
    { cx: 95, cy: 240, label: 'L Knee' },
    { cx: 145, cy: 235, label: 'R Knee' },
    { cx: 90, cy: 300, label: 'L Ankle' },
    { cx: 150, cy: 295, label: 'R Ankle' },
  ];

  const bones = [
    { x1: 120, y1: 50, x2: 120, y2: 80 },
    { x1: 90, y1: 95, x2: 150, y2: 95 },
    { x1: 90, y1: 95, x2: 75, y2: 140 },
    { x1: 150, y1: 95, x2: 165, y2: 140 },
    { x1: 75, y1: 140, x2: 65, y2: 180 },
    { x1: 165, y1: 140, x2: 175, y2: 180 },
    { x1: 120, y1: 80, x2: 120, y2: 180 },
    { x1: 120, y1: 180, x2: 100, y2: 180 },
    { x1: 120, y1: 180, x2: 140, y2: 180 },
    { x1: 100, y1: 180, x2: 95, y2: 240 },
    { x1: 140, y1: 180, x2: 145, y2: 235 },
    { x1: 95, y1: 240, x2: 90, y2: 300 },
    { x1: 145, y1: 235, x2: 150, y2: 295 },
  ];

  return (
    <div className="w-full flex flex-col items-center bg-[#111113] p-6 sm:p-8 rounded-lg border border-[#1f1f23]">
      {/* Pipeline Steps Header */}
      <div className="w-full mb-8">
        <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#555558] mb-3 text-center">
          Processing Pipeline
        </div>
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          {steps.map((step, idx) => (
            <React.Fragment key={step}>
              <span className="font-mono text-[9px] sm:text-[10px] px-2 py-1 bg-[#0a0a0b] text-[#3ecf8e] border border-[#1f1f23] rounded-sm uppercase tracking-wider">
                {step}
              </span>
              {idx < steps.length - 1 && (
                <span className="text-[#555558] text-[10px]">→</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* SVG Skeleton Diagram & Overlay Analytics */}
      <div className="relative w-full max-w-[320px] h-[340px] flex items-center justify-center bg-[#0a0a0b] rounded border border-[#1f1f23] overflow-hidden">
        {/* Background motion trail outline */}
        <svg
          viewBox="0 0 240 340"
          className="absolute inset-0 w-full h-full opacity-15 pointer-events-none transform translate-x-2 translate-y-1"
        >
          {bones.map((b, i) => (
            <line
              key={`ghost-bone-${i}`}
              x1={b.x1}
              y1={b.y1}
              x2={b.x2}
              y2={b.y2}
              stroke="#8a8a8e"
              strokeWidth="1.5"
              strokeDasharray="2 2"
            />
          ))}
        </svg>

        {/* Main interactive skeleton */}
        <svg viewBox="0 0 240 340" className="w-full h-full z-10">
          {/* Bones */}
          {bones.map((b, i) => (
            <motion.line
              key={`bone-${i}`}
              x1={b.x1}
              y1={b.y1}
              x2={b.x2}
              y2={b.y2}
              stroke="#3ecf8e"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: i * 0.05 }}
              viewport={{ once: true }}
            />
          ))}

          {/* Joint Nodes */}
          {joints.map((j, i) => (
            <g key={`joint-${i}`}>
              <motion.circle
                cx={j.cx}
                cy={j.cy}
                r="4"
                fill="#0a0a0b"
                stroke="#3ecf8e"
                strokeWidth="2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.03 }}
                viewport={{ once: true }}
              />
              <motion.circle
                cx={j.cx}
                cy={j.cy}
                r="7"
                fill="none"
                stroke="#3ecf8e"
                strokeWidth="0.8"
                opacity="0.6"
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0.1, 0.6] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: 'easeInOut',
                }}
              />
            </g>
          ))}
        </svg>

        {/* Real-time Biomechanical Annotations */}
        <div className="absolute top-3 left-3 bg-[#111113]/90 backdrop-blur border border-[#1f1f23] p-2 rounded text-[10px] font-mono z-20">
          <div className="text-[#555558]">KNEE ANGLE</div>
          <div className="text-[#3ecf8e] font-bold">162.4°</div>
        </div>

        <div className="absolute top-3 right-3 bg-[#111113]/90 backdrop-blur border border-[#1f1f23] p-2 rounded text-[10px] font-mono z-20 text-right">
          <div className="text-[#555558]">VELOCITY</div>
          <div className="text-[#f0ece5] font-bold">5.2 m/s</div>
        </div>

        <div className="absolute bottom-3 left-3 right-3 bg-[#111113]/90 backdrop-blur border border-[#1f1f23] p-2 rounded text-[10px] font-mono z-20 flex justify-between items-center">
          <span className="text-[#555558]">LANDMARK CONFIDENCE</span>
          <span className="text-[#3ecf8e] font-bold">92% ACCURACY</span>
        </div>
      </div>

      <div className="mt-4 text-center">
        <span className="font-mono text-[10px] text-[#555558]">
          Conceptual markerless biomechanics visualization
        </span>
      </div>
    </div>
  );
}
