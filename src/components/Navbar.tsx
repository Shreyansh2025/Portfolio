import React, { useState } from 'react';
import { Volume2, VolumeX, ChevronDown, Music, Pause } from 'lucide-react';
import { useSound } from '../audio/SoundContext.tsx';
import { SoundTheme } from '../audio/audioEngine.ts';

interface NavbarProps {
  onOpenResume: () => void;
  onNavigateHome?: () => void;
  isNotFoundPage?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onNavigateHome, isNotFoundPage }) => {
  const { isMuted, toggleMute, theme, setTheme, isAmbientPlaying, toggleAmbientMusic } = useSound();
  const [showThemeMenu, setShowThemeMenu] = useState<boolean>(false);

  const soundThemes: { id: SoundTheme; label: string; desc: string }[] = [
    { id: 'piano', label: 'Felt Piano', desc: 'Warm acoustic tone' },
    { id: 'chime', label: 'Zen Chime', desc: 'Ethereal singing bowl' },
    { id: 'celesta', label: 'Celesta', desc: 'Music box sparkle' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/92 backdrop-blur-md border-b border-[#1C1E1D]/8 transition-colors">
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Wordmark */}
        <button
          onClick={onNavigateHome}
          type="button"
          className="group flex items-baseline gap-2 text-xl font-serif font-medium tracking-tight text-[#1C1E1D] whitespace-nowrap shrink-0 hover:text-[#476655] transition-colors focus:outline-none"
        >
          <span>Shreyansh Surana</span>
          <span className="text-xs font-sans tracking-normal font-normal text-[#797E7A] hidden sm:inline">
            / CSE & Systems
          </span>
        </button>

        {/* Zone 2: Navigation Links */}
        {!isNotFoundPage ? (
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-[#484C49]"
          >
            <a
              href="#work"
              className="hover:text-[#1C1E1D] transition-colors hover:underline underline-offset-4 decoration-[#476655]/40 whitespace-nowrap shrink-0"
            >
              Work
            </a>
            <a
              href="#architecture"
              className="hover:text-[#1C1E1D] transition-colors hover:underline underline-offset-4 decoration-[#476655]/40 whitespace-nowrap shrink-0"
            >
              Systems
            </a>
            <a
              href="#about"
              className="hover:text-[#1C1E1D] transition-colors hover:underline underline-offset-4 decoration-[#476655]/40 whitespace-nowrap shrink-0"
            >
              About
            </a>
            <a
              href="#pursuits"
              className="hover:text-[#1C1E1D] transition-colors hover:underline underline-offset-4 decoration-[#476655]/40 whitespace-nowrap shrink-0"
            >
              Pursuits
            </a>
            <a
              href="#contact"
              className="hover:text-[#1C1E1D] transition-colors hover:underline underline-offset-4 decoration-[#476655]/40 whitespace-nowrap shrink-0"
            >
              Contact
            </a>
            <button
              onClick={onOpenResume}
              className="text-xs font-mono uppercase tracking-wider text-[#476655] hover:text-[#3B5647] hover:underline underline-offset-4 decoration-[#476655] whitespace-nowrap shrink-0"
            >
              Resume ↗
            </button>
          </nav>
        ) : (
          <div className="text-xs font-mono text-[#797E7A] hidden md:block">
            Page Not Found · Error 404
          </div>
        )}

        {/* Zone 3: Audio Controls (Ambient Mode + Click Instrument) */}
        <div className="flex items-center gap-2 shrink-0 relative">
          
          {/* Peaceful Background Piano Track Toggle */}
          <button
            onClick={toggleAmbientMusic}
            type="button"
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border text-xs font-mono transition-all whitespace-nowrap shrink-0 ${
              isAmbientPlaying
                ? 'bg-[#EEF4F0] border-[#476655]/40 text-[#476655] shadow-xs'
                : 'bg-[#F4EFEB] border-[#1C1E1D]/10 text-[#797E7A] hover:text-[#1C1E1D]'
            }`}
            title={isAmbientPlaying ? 'Pause peaceful background piano' : 'Play peaceful background piano'}
            aria-label={isAmbientPlaying ? 'Pause peaceful background piano' : 'Play peaceful background piano'}
          >
            {isAmbientPlaying ? (
              <>
                <Pause className="w-3 h-3 text-[#476655]" />
                <span className="text-[11px] font-medium text-[#476655]">Ambient Playing</span>
              </>
            ) : (
              <>
                <Music className="w-3 h-3 text-[#797E7A]" />
                <span className="text-[11px] hidden sm:inline">Peaceful Music</span>
              </>
            )}
          </button>

          {/* Master Click Sound Mute Toggle */}
          <button
            onClick={toggleMute}
            type="button"
            className="group flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-[#1C1E1D]/10 bg-[#F4EFEB] hover:bg-[#EDE7E0] hover:border-[#1C1E1D]/20 text-xs font-medium text-[#484C49] hover:text-[#1C1E1D] transition-all whitespace-nowrap shrink-0"
            aria-label={isMuted ? 'Unmute interactive piano notes' : 'Mute interactive piano notes'}
            title={isMuted ? 'Click to enable sounds' : 'Click to mute'}
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#797E7A] group-hover:text-[#1C1E1D] transition-colors" />
                <span className="font-mono text-[11px] text-[#797E7A]">Muted</span>
              </>
            ) : (
              <>
                <div className="flex items-end gap-0.5 h-3 w-3" aria-hidden="true">
                  <span className="w-0.5 bg-[#476655] rounded-full animate-[pulse_1s_ease-in-out_infinite] h-2" />
                  <span className="w-0.5 bg-[#476655] rounded-full animate-[pulse_1.4s_ease-in-out_infinite] h-3" />
                  <span className="w-0.5 bg-[#476655] rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-1.5" />
                </div>
                <span className="font-mono text-[11px] text-[#476655] hidden sm:inline">Clicks On</span>
              </>
            )}
          </button>

          {/* Instrument Theme Selector */}
          {!isMuted && (
            <div className="relative">
              <button
                onClick={() => setShowThemeMenu(!showThemeMenu)}
                type="button"
                className="px-2 py-1.5 rounded-full border border-[#1C1E1D]/10 bg-[#F4EFEB] hover:bg-[#EDE7E0] text-[11px] font-mono text-[#476655] flex items-center gap-1 transition-colors"
                title="Select relaxing sound instrument"
                aria-label="Select sound instrument theme"
                aria-expanded={showThemeMenu}
              >
                <span className="capitalize">{theme}</span>
                <ChevronDown className="w-3 h-3 text-[#797E7A]" />
              </button>

              {/* Theme Dropdown Menu */}
              {showThemeMenu && (
                <div
                  className="absolute right-0 mt-2 w-44 rounded-xl border border-[#1C1E1D]/10 bg-[#FBF9F5] shadow-lg py-1.5 z-50 text-xs animate-in fade-in duration-150"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="px-3 py-1 font-mono text-[10px] uppercase text-[#797E7A] border-b border-[#1C1E1D]/6 mb-1">
                    Click Instrument
                  </div>
                  {soundThemes.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setTheme(item.id);
                        setShowThemeMenu(false);
                      }}
                      type="button"
                      className={`w-full text-left px-3 py-2 flex flex-col transition-colors ${
                        theme === item.id
                          ? 'bg-[#EEF4F0] text-[#476655] font-medium'
                          : 'text-[#484C49] hover:bg-[#F4EFEB]'
                      }`}
                    >
                      <span className="text-xs">{item.label}</span>
                      <span className="text-[10px] text-[#797E7A] font-mono">{item.desc}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </header>
  );
};
