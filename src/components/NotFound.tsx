import React from 'react';
import { ArrowLeft, Compass, Home, Layers, Mail } from 'lucide-react';

interface NotFoundProps {
  onReturnHome: () => void;
  onExploreWork?: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onReturnHome, onExploreWork }) => {
  return (
    <div className="min-h-[85vh] flex items-center justify-center px-6 py-20 bg-[#FBF9F5] text-[#1C1E1D] relative">
      <div className="max-w-xl w-full text-center flex flex-col items-center">
        
        {/* Subtle Classic Animated Compass / Orbital Coordinate */}
        <div className="relative w-32 h-32 mb-8 flex items-center justify-center select-none">
          {/* Outer dotted ring with slow peaceful rotation */}
          <div className="absolute inset-0 rounded-full border border-dashed border-[#476655]/30 animate-[spin_32s_linear_infinite]" />
          
          {/* Inner ring */}
          <div className="absolute inset-3 rounded-full border border-[#1C1E1D]/10 animate-[spin_24s_linear_infinite_reverse]" />
          
          {/* Compass Icon at center with slow gentle pulse */}
          <div className="relative z-10 w-12 h-12 rounded-full bg-[#F4EFEB] border border-[#1C1E1D]/10 flex items-center justify-center text-[#476655]">
            <Compass className="w-6 h-6 animate-pulse" />
          </div>

          {/* Orbiting star node */}
          <div className="absolute inset-0 animate-[spin_16s_linear_infinite]">
            <div className="w-2 h-2 rounded-full bg-[#476655] absolute -top-1 left-1/2 -translate-x-1/2 shadow-sm" />
          </div>
        </div>

        {/* Unboxed Metadata Kicker */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#797E7A] uppercase tracking-wider mb-4">
          <span>Error 404</span>
          <span aria-hidden="true">·</span>
          <span className="text-[#476655]">Uncharted Route</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#1C1E1D] mb-4 text-balance">
          A quiet detour.
        </h1>

        {/* Descriptive prose */}
        <p className="text-sm sm:text-base text-[#484C49] leading-relaxed max-w-md mb-8 font-normal">
          The path or document coordinate you are looking for does not exist or has been relocated to the archives.
        </p>

        {/* Gentle Return Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-medium">
          <button
            onClick={onReturnHome}
            type="button"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1C1E1D] text-[#FBF9F5] hover:bg-[#476655] transition-colors whitespace-nowrap shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to portfolio</span>
          </button>

          {onExploreWork && (
            <button
              onClick={onExploreWork}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#1C1E1D]/15 bg-[#F4EFEB] hover:bg-[#EDE7E0] text-[#1C1E1D] transition-colors whitespace-nowrap"
            >
              <Layers className="w-3.5 h-3.5 text-[#476655]" />
              <span>Explore selected work</span>
            </button>
          )}
        </div>

        {/* Quiet footnote */}
        <div className="mt-16 pt-6 border-t border-[#1C1E1D]/8 text-xs font-mono text-[#797E7A]">
          <span>Shreyansh Surana</span>
          <span className="mx-2">·</span>
          <span>Computer Science & Engineering</span>
        </div>

      </div>
    </div>
  );
};
