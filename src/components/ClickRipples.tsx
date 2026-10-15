import React from 'react';
import { useSound } from '../audio/SoundContext.tsx';

export const ClickRipples: React.FC = () => {
  const { ripples } = useSound();

  if (ripples.length === 0) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
      aria-hidden="true"
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full border border-[#476655]/30 bg-[#476655]/5 animate-ping-ripple"
          style={{
            left: ripple.x - 24,
            top: ripple.y - 24,
            width: 48,
            height: 48,
          }}
        />
      ))}
    </div>
  );
};
