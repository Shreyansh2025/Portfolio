import React from 'react';
import { Award, Briefcase, GraduationCap, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-[#1C1E1D]/8">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-12 border-b border-[#1C1E1D]/8">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#476655] font-medium">
              Background & Perspective
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-[#1C1E1D] mt-2">
              About Shreyansh
            </h2>
          </div>
          <p className="text-sm text-[#797E7A] max-w-md font-sans">
            Computer Science and Engineering student at Mandsaur University. Focused on applied AI, document intelligence, and backend architectures.
          </p>
        </div>

        {/* 2-Column Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Story (Prose) */}
          <div className="lg:col-span-7 space-y-6 text-[#484C49] text-base leading-relaxed">
            <p className="text-lg text-[#1C1E1D] font-serif font-light">
              I am a Computer Science and Engineering student at Mandsaur University (GPA: 8.32/10.0),
              passionate about turning unstructured, real-world data into reliable systems.
            </p>

            <p>
              Currently, as a Full-Stack Development Intern at <strong className="text-[#1C1E1D] font-medium">Costipro</strong>,
              I architected <strong className="text-[#1C1E1D] font-medium">BrochureIQ</strong> for our client
              Bonc Network (<a href="https://boncnetwork.com" target="_blank" rel="noreferrer" className="text-[#476655] underline underline-offset-2">boncnetwork.com</a>).
              The project involved building an end-to-end catalog extraction pipeline that pairs Tesseract OCR with Groq-hosted LLMs
              and FAISS vector embeddings, allowing engineers to semantically search thousands of industrial product specifications.
            </p>

            <p>
              I recently qualified <strong className="text-[#1C1E1D] font-medium">GATE 2026</strong> in Computer Science and Engineering
              and served as a <strong className="text-[#1C1E1D] font-medium">Google Gemini Student Ambassador</strong>, where I earned
              “The Architect (Gold)” tier for leading technical AI and prompt-engineering workshops on campus.
            </p>

            <p>
              I believe great software is characterized by engineering restraint: picking predictable technologies where reliability
              matters, handling edge cases and noisy OCR inputs gracefully, and keeping user interfaces calm, quiet, and fast.
            </p>

            {/* Quick Facts Strip */}
            <div className="pt-4 border-t border-[#1C1E1D]/8 flex flex-wrap items-center gap-6 text-xs text-[#797E7A]">
              <div>
                <span className="block font-mono text-[10px] uppercase text-[#797E7A]">Institution</span>
                <span className="text-[#1C1E1D] font-medium">Mandsaur University</span>
              </div>
              <div aria-hidden="true" className="h-6 w-px bg-[#1C1E1D]/10"></div>
              <div>
                <span className="block font-mono text-[10px] uppercase text-[#797E7A]">Academic Status</span>
                <span className="text-[#1C1E1D] font-medium">B.Tech CSE (2023–2027) · GPA 8.32</span>
              </div>
              <div aria-hidden="true" className="h-6 w-px bg-[#1C1E1D]/10"></div>
              <div>
                <span className="block font-mono text-[10px] uppercase text-[#797E7A]">Milestone</span>
                <span className="text-[#476655] font-medium">GATE 2026 Qualified</span>
              </div>
            </div>
          </div>

          {/* Right Column: Work Experience & Credibility Box */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Experience Box */}
            <div className="p-6 sm:p-7 rounded-2xl border border-[#1C1E1D]/8 bg-[#F6F2EC]">
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#476655] font-medium mb-4 flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Industry Experience</span>
              </h3>

              <div className="space-y-4 text-xs">
                <div>
                  <div className="flex items-baseline justify-between mb-0.5">
                    <span className="text-sm font-medium text-[#1C1E1D]">Costipro</span>
                    <span className="font-mono text-[#797E7A] text-[11px]">July 2026 – Present</span>
                  </div>
                  <span className="text-xs text-[#476655] font-mono block mb-1.5">
                    Full-Stack Development Intern · Remote
                  </span>
                  <p className="text-[#484C49] leading-relaxed">
                    Architected BrochureIQ for Bonc Network. Integrated Tesseract OCR, Groq LLMs, and FAISS for B2B catalog intelligence.
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1C1E1D]/6">
                  <div className="flex items-baseline justify-between mb-0.5">
                    <span className="text-sm font-medium text-[#1C1E1D]">Heal Bharat</span>
                    <span className="font-mono text-[#797E7A] text-[11px]">Jan 2025 – Feb 2025</span>
                  </div>
                  <span className="text-xs text-[#476655] font-mono block mb-1.5">
                    Frontend Web Development Intern
                  </span>
                  <p className="text-[#484C49] leading-relaxed">
                    Built responsive, interactive web applications prioritizing semantic DOM structure and dynamic state management.
                  </p>
                </div>
              </div>
            </div>

            {/* Achievements Box */}
            <div className="p-6 sm:p-7 rounded-2xl border border-[#1C1E1D]/8 bg-[#F6F2EC]">
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#476655] font-medium mb-3 flex items-center gap-2">
                <Award className="w-3.5 h-3.5" />
                <span>Verified Milestones</span>
              </h3>
              <ul className="space-y-2 text-xs text-[#484C49]">
                <li className="flex items-start gap-2">
                  <span className="text-[#476655] font-mono font-medium">✓</span>
                  <span><strong className="text-[#1C1E1D]">GATE 2026 Qualified:</strong> Graduate Aptitude Test in Engineering in CSE.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#476655] font-mono font-medium">✓</span>
                  <span><strong className="text-[#1C1E1D]">Google Gemini Ambassador:</strong> "The Architect (Gold)" tier at Mandsaur University.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#476655] font-mono font-medium">✓</span>
                  <span><strong className="text-[#1C1E1D]">Google Cloud "Arcade Legend":</strong> Hands-on cloud infrastructure & serverless labs.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
