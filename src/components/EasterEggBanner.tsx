import React from 'react';
import { Sparkles, Music2 } from 'lucide-react';
import { useSound } from '../audio/SoundContext.tsx';

export const EasterEggBanner: React.FC = () => {
  const { isEasterEggActive, easterEggNotice } = useSound();

  if (!isEasterEggActive && !easterEggNotice) return null;

  return (
    <aside
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 max-w-sm p-4 rounded-xl border border-[#476655]/30 bg-[#FBF9F5]/95 backdrop-blur-md shadow-xl text-[#1C1E1D] transition-all animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#EEF4F0] border border-[#476655]/20 flex items-center justify-center shrink-0">
          <Music2 className="w-4 h-4 text-[#476655] animate-pulse" />
        </div>
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-[#476655] font-semibold flex items-center gap-1.5">
            <span>Harmonic Resonance</span>
            <Sparkles className="w-3 h-3 text-[#476655]" />
          </div>
          <p className="text-xs font-serif text-[#1C1E1D] mt-0.5">
            {easterEggNotice || 'A quiet melody unfolds...'}
          </p>
        </div>
      </div>

      {isEasterEggActive && (
        <div className="w-full bg-[#1C1E1D]/10 h-0.5 rounded-full overflow-hidden mt-3">
          <div
            className="h-full bg-[#476655] transition-all duration-[5800ms] ease-linear"
            style={{ width: '100%' }}
          />
        </div>
      )}
    </aside>
  );
};
