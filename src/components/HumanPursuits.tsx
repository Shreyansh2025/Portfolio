import React from 'react';

interface Pursuit {
  id: string;
  tag: string;
  title: string;
  description: string;
  detail: string;
}

const PURSUITS: Pursuit[] = [
  {
    id: 'chess',
    tag: 'Board & Tactics',
    title: 'Chess & Positional Play',
    description:
      'I play rapid and blitz chess regularly. I am by no means a master, but I love the mental discipline: calculating candidate moves, managing clock pressure, and learning to stay patient when a position gets complicated.',
    detail: 'Favorite openings: Vienna Game & Caro-Kann · Teaches patience & consequence',
  },
  {
    id: 'sound-experiments',
    tag: 'Creative Code',
    title: 'Audio Synthesis & Web Audio Toys',
    description:
      'I enjoy building small, tactile browser instruments—synthesizing warm Rhodes and acoustic piano harmonics with Web Audio oscillators, custom biquad filters, and mathematical soundwaves.',
    detail: 'Minimal JS audio engines · Additive synthesis · Interactive ripples',
  },
  {
    id: 'small-tools',
    tag: 'Automation & Hacks',
    title: 'Small Command-Line Utilities',
    description:
      'Whenever I encounter a repeated manual chore, I write a quick CLI script or Python daemon: PDF page normalizers, clipboard formatters, local file indexing scripts, and terminal productivity tweaks.',
    detail: 'Python asyncio · Bash pipelines · Pragmatic productivity hacks',
  },
  {
    id: 'mindset',
    tag: 'Craft & Philosophy',
    title: 'The Unix Philosophy & Calm Tools',
    description:
      'I admire tools that do one thing exceptionally well and compose cleanly via text streams. I strive to design software that does not demand constant attention and works predictably for years.',
    detail: 'Plain text formats · Predictable behavior · Zero dark patterns',
  },
];

export const HumanPursuits: React.FC = () => {
  return (
    <section id="pursuits" className="py-16 sm:py-24 md:py-28 border-b border-[#1C1E1D]/8 bg-[#FBF9F5]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-6 mb-8 sm:mb-12 border-b border-[#1C1E1D]/8">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#476655] font-medium">
              Beyond the Resume
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-[#1C1E1D] mt-1 sm:mt-2">
              Curious Pursuits
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#797E7A] max-w-md font-sans">
            The hobbies, side explorations, and mental models that keep me energized outside of coursework.
          </p>
        </div>

        {/* 4-Item Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
          {PURSUITS.map((item, idx) => (
            <div
              key={item.id}
              className="p-5 sm:p-8 rounded-2xl border border-[#1C1E1D]/8 bg-[#F6F2EC] hover:bg-[#F2ECE3] hover:border-[#1C1E1D]/15 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline justify-between pb-2.5 mb-2.5 border-b border-[#1C1E1D]/6">
                  <span className="text-xs font-mono text-[#797E7A]">0{idx + 1}</span>
                  <span className="text-[11px] sm:text-xs font-mono text-[#476655]">{item.tag}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-serif font-normal text-[#1C1E1D] mb-2 sm:mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#484C49] leading-relaxed mb-4 sm:mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#1C1E1D]/6 text-[11px] sm:text-xs font-mono text-[#797E7A]">
                {item.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
