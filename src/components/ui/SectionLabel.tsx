import React from 'react';

type SectionLabelProps = {
  number?: string;
  label: string;
  className?: string;
};

export function SectionLabel({ number, label, className = '' }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest ${className}`}>
      {number ? (
        <span className="text-[#3ecf8e] font-semibold">{number}</span>
      ) : (
        <span className="w-1.5 h-1.5 rounded-full bg-[#3ecf8e]" />
      )}
      <span className="text-[#8a8a8e] font-medium">{label}</span>
    </div>
  );
}

export default SectionLabel;
