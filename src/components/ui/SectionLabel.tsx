import React from 'react';

type SectionLabelProps = {
  number: string;
  label: string;
  className?: string;
};

export function SectionLabel({ number, label, className = '' }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-4 font-mono text-xs uppercase tracking-wider ${className}`}>
      <span className="text-[#3ecf8e]">{number}</span>
      <span className="text-[#555558]">{label}</span>
    </div>
  );
}

export default SectionLabel;

