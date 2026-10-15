import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
  onToggle404?: () => void;
  isNotFoundPage?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onToggle404, isNotFoundPage }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-[#1C1E1D]/8 bg-[#F4EFEB] text-xs text-[#797E7A] font-sans">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Identity & Quiet Philosophy */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-serif text-sm font-medium text-[#1C1E1D]">
            Shreyansh Surana
          </span>
          <span aria-hidden="true" className="hidden sm:inline text-[#1C1E1D]/20">·</span>
          <span>Computer Science & Engineering</span>
          <span aria-hidden="true" className="hidden sm:inline text-[#1C1E1D]/20">·</span>
          <span>© {new Date().getFullYear()}</span>
        </div>

        {/* Center: Quiet Aesthetic Note */}
        <div className="text-[11px] font-serif italic text-[#797E7A] text-center">
          Designed with restraint · Web Audio synthesized in-browser · Clicks create harmony
        </div>

        {/* Right: Quick Links, 404 Preview & Back to Top */}
        <div className="flex items-center gap-5">
          <button
            onClick={onOpenResume}
            className="hover:text-[#1C1E1D] transition-colors font-mono text-[11px]"
          >
            Resume
          </button>
          <a
            href="https://github.com/Shreyansh2025"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1C1E1D] transition-colors font-mono text-[11px]"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/shreyansh-surana-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1C1E1D] transition-colors font-mono text-[11px]"
          >
            LinkedIn
          </a>
          
          {onToggle404 && (
            <button
              onClick={onToggle404}
              type="button"
              className="hover:text-[#476655] transition-colors font-mono text-[11px] text-[#797E7A]"
              title="Preview minimal 404 error page"
            >
              {isNotFoundPage ? '← Portfolio' : '404 Detour'}
            </button>
          )}

          <button
            onClick={scrollToTop}
            type="button"
            className="group inline-flex items-center gap-1.5 text-[#476655] hover:text-[#3B5647] transition-colors font-mono text-[11px]"
            aria-label="Back to top of page"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
