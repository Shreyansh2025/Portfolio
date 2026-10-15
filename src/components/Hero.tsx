import React from 'react';
import { ArrowDownRight, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative pt-8 pb-14 sm:pt-16 sm:pb-24 md:pt-24 md:pb-32 border-b border-[#1C1E1D]/8 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Intent */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Professional Descriptor */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] sm:text-xs font-mono tracking-wider text-[#797E7A] uppercase mb-4 sm:mb-6 leading-relaxed">
              <span>Software Engineer</span>
              <span aria-hidden="true" className="text-[#1C1E1D]/20">·</span>
              <span className="text-[#476655] font-medium">Applied AI & Backend</span>
              <span aria-hidden="true" className="text-[#1C1E1D]/20">·</span>
              <span>B.Tech CSE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-[#1C1E1D] leading-[1.14] sm:leading-[1.12] tracking-tight mb-4 sm:mb-6 text-balance">
              Building thoughtful software for{' '}
              <em className="italic font-normal text-[#476655]">complex problems.</em>
            </h1>

            {/* Supporting Prose */}
            <p className="text-sm sm:text-lg text-[#484C49] leading-relaxed max-w-xl mb-5 sm:mb-7 font-normal">
              I build backend systems, intelligent search pipelines, and AI-driven
              applications that turn unstructured documents into reliable databases.
            </p>

            {/* Now / Current Focus Kicker */}
            <div className="mb-6 sm:mb-8 py-2 px-3 sm:px-3.5 rounded-lg bg-[#F5F1EB] border border-[#1C1E1D]/6 text-[11px] sm:text-xs text-[#797E7A] font-mono flex items-center gap-2 max-w-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-[#476655] animate-pulse shrink-0" />
              <span className="leading-tight">
                <strong className="text-[#1C1E1D] font-normal">Now:</strong> Interning at Costipro · FAISS search & rapid chess
              </span>
            </div>

            {/* Restrained CTAs (Large 44px+ touch targets on mobile) */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm font-medium w-full sm:w-auto">
              <a
                href="#work"
                className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1C1E1D] text-[#FBF9F5] hover:bg-[#476655] transition-colors whitespace-nowrap shadow-sm group"
              >
                <span>Explore selected work</span>
                <ArrowDownRight className="w-4 h-4 text-[#FBF9F5]/70 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <div className="flex items-center justify-between w-full sm:w-auto gap-4 pt-1 sm:pt-0">
                <button
                  onClick={onOpenResume}
                  type="button"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#476655] hover:text-[#3B5647] hover:underline underline-offset-4 decoration-[#476655] py-2"
                >
                  <span>View Resume ↗</span>
                </button>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-mono text-[#797E7A] hover:text-[#1C1E1D] py-2"
                >
                  <span>Get in touch →</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Signature Slow Ambient Visual (Compact on mobile) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <div className="w-full max-w-md p-4 sm:p-7 rounded-2xl border border-[#1C1E1D]/8 bg-[#F5F1EB] relative">
              
              {/* Header inside visual card */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#1C1E1D]/6 text-[11px] text-[#797E7A] font-mono">
                <span>System Pipeline Dynamics</span>
                <span className="flex items-center gap-1.5 text-[#476655]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#476655]"></span>
                  <span>streaming</span>
                </span>
              </div>

              {/* Ambient SVG: Proportional height on all screens */}
              <div className="relative h-48 sm:h-64 w-full flex items-center justify-center">
                <svg
                  viewBox="0 0 360 260"
                  className="w-full h-full overflow-visible select-none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="streamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#476655" stopOpacity="0.15" />
                      <stop offset="50%" stopColor="#476655" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#476655" stopOpacity="0.15" />
                    </linearGradient>
                  </defs>

                  {/* Flow curves */}
                  <path
                    d="M 40 60 C 120 60, 100 130, 180 130"
                    fill="none"
                    stroke="#D6CFBF"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M 180 130 C 240 130, 260 70, 320 70"
                    fill="none"
                    stroke="#D6CFBF"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M 180 130 C 240 130, 250 200, 320 200"
                    fill="none"
                    stroke="#D6CFBF"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M 40 200 C 110 200, 120 130, 180 130"
                    fill="none"
                    stroke="#D6CFBF"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />

                  {/* Animated packets moving along curves */}
                  <circle r="3.5" fill="#476655">
                    <animateMotion
                      path="M 40 60 C 120 60, 100 130, 180 130"
                      dur="5.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle r="3" fill="#476655" opacity="0.8">
                    <animateMotion
                      path="M 180 130 C 240 130, 260 70, 320 70"
                      dur="4.5s"
                      begin="1.2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle r="3" fill="#476655" opacity="0.8">
                    <animateMotion
                      path="M 180 130 C 240 130, 250 200, 320 200"
                      dur="5s"
                      begin="2.1s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle r="3" fill="#6B8877" opacity="0.6">
                    <animateMotion
                      path="M 40 200 C 110 200, 120 130, 180 130"
                      dur="6s"
                      begin="0.7s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* Nodes */}
                  <g transform="translate(40, 60)">
                    <circle r="16" fill="#EDE7E0" stroke="#CFC5B6" strokeWidth="1" />
                    <circle r="5" fill="#476655" />
                    <text y="28" textAnchor="middle" className="text-[10px] font-mono fill-[#797E7A]">
                      Documents
                    </text>
                  </g>

                  <g transform="translate(40, 200)">
                    <circle r="16" fill="#EDE7E0" stroke="#CFC5B6" strokeWidth="1" />
                    <circle r="4" fill="#6B8877" />
                    <text y="28" textAnchor="middle" className="text-[10px] font-mono fill-[#797E7A]">
                      Events
                    </text>
                  </g>

                  <g transform="translate(180, 130)">
                    <circle
                      r="26"
                      fill="#FBF9F5"
                      stroke="#476655"
                      strokeWidth="1.5"
                    />
                    <circle
                      r="32"
                      fill="none"
                      stroke="#476655"
                      strokeWidth="1"
                      strokeOpacity="0.25"
                      strokeDasharray="2 4"
                    />
                    <circle r="8" fill="#476655" opacity="0.9" />
                    <text y="42" textAnchor="middle" className="text-[11px] font-mono font-medium fill-[#1C1E1D]">
                      Extraction & Auth
                    </text>
                  </g>

                  <g transform="translate(320, 70)">
                    <circle r="18" fill="#EDE7E0" stroke="#CFC5B6" strokeWidth="1" />
                    <circle r="5" fill="#476655" />
                    <text y="29" textAnchor="middle" className="text-[10px] font-mono fill-[#797E7A]">
                      Semantic Index
                    </text>
                  </g>

                  <g transform="translate(320, 200)">
                    <circle r="18" fill="#EDE7E0" stroke="#CFC5B6" strokeWidth="1" />
                    <circle r="5" fill="#476655" />
                    <text y="29" textAnchor="middle" className="text-[10px] font-mono fill-[#797E7A]">
                      Relational DB
                    </text>
                  </g>
                </svg>
              </div>

              {/* Ambient Caption */}
              <div className="mt-3 pt-2.5 border-t border-[#1C1E1D]/6 text-[10px] sm:text-[11px] text-[#797E7A] flex items-center justify-between">
                <span>Deterministic extraction & search flow</span>
                <span className="font-mono text-[10px] text-[#476655]">subtle · active</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
