import React from 'react';

interface MarqueeDividerProps {
  phrase?: string;
}

export const MarqueeDivider: React.FC<MarqueeDividerProps> = ({
  phrase = 'Distributed Architecture · Document Intelligence · Semantic Retrieval · Resilient Pipelines · Calm Software',
}) => {
  return (
    <div
      className="py-4 border-y border-[#1C1E1D]/6 bg-[#F6F2EC]/60 overflow-hidden select-none select-none"
      aria-hidden="true"
    >
      <div className="flex gap-12 whitespace-nowrap animate-marquee font-mono text-[11px] uppercase tracking-widest text-[#797E7A]">
        <span>{phrase}</span>
        <span>·</span>
        <span>{phrase}</span>
        <span>·</span>
        <span>{phrase}</span>
      </div>
    </div>
  );
};
