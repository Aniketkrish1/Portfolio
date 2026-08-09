'use client';

import React from 'react';

interface SectionSeparatorProps {
  label?: string;
}

export function SectionSeparator({ label }: SectionSeparatorProps) {
  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 flex items-center justify-center">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#1f1f23] to-transparent" />
      {label && (
        <span className="absolute bg-[#0a0a0b] px-4 font-mono text-[10px] text-[#555558] uppercase tracking-widest border border-[#1f1f23]/60 rounded-full py-0.5">
          {label}
        </span>
      )}
    </div>
  );
}

export default SectionSeparator;
