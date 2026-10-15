import React, { useState } from 'react';
import { Mail, Github, Linkedin, FileText, Check, Copy, ArrowUpRight, Code2, Phone } from 'lucide-react';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const email = 'shreyanshsurana100@gmail.com';
  const phone = '+91 8871296211';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-[#1C1E1D]/8 bg-[#FBF9F5]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-12 border-b border-[#1C1E1D]/8">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#476655] font-medium">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-[#1C1E1D] mt-2">
              Let’s build something durable.
            </h2>
          </div>
          <p className="text-sm text-[#797E7A] max-w-md font-sans">
            Open for software engineering internships, backend & AI contract projects, and technical discussions.
          </p>
        </div>

        {/* Contact Grid Card */}
        <div className="p-8 sm:p-12 rounded-2xl border border-[#1C1E1D]/10 bg-[#F5F1EB]">
          
          <div className="max-w-2xl mb-10">
            <h3 className="text-2xl font-serif font-normal text-[#1C1E1D] mb-3">
              Direct Channels
            </h3>
            <p className="text-sm sm:text-base text-[#484C49] leading-relaxed">
              Based in Mandsaur, India. Whether you want to discuss my work on BrochureIQ and Groq LLM pipelines,
              explore backend engineering internships, or talk about system architectures, my inbox is open.
            </p>
          </div>

          {/* Channels Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            
            {/* Email Channel */}
            <div className="p-5 rounded-xl border border-[#1C1E1D]/8 bg-[#FBF9F5] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#797E7A] mb-3">
                  <span>Direct Email</span>
                  <Mail className="w-3.5 h-3.5 text-[#476655]" />
                </div>
                <div className="text-xs font-mono text-[#1C1E1D] break-all select-all font-medium mb-3">
                  {email}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-[#1C1E1D]/6">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#476655] hover:text-[#3B5647] transition-colors"
                >
                  <span>Write</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <span aria-hidden="true" className="text-[#1C1E1D]/20">·</span>
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="inline-flex items-center gap-1 text-xs text-[#797E7A] hover:text-[#1C1E1D] transition-colors"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-[#476655]" />
                      <span className="text-[#476655]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* LinkedIn Channel */}
            <a
              href="https://linkedin.com/in/shreyansh-surana-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl border border-[#1C1E1D]/8 bg-[#FBF9F5] hover:bg-[#F2ECE3] hover:border-[#1C1E1D]/15 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#797E7A] mb-3">
                  <span>Professional</span>
                  <Linkedin className="w-3.5 h-3.5 text-[#476655]" />
                </div>
                <div className="text-sm font-medium text-[#1C1E1D] mb-1">
                  LinkedIn
                </div>
                <div className="text-xs text-[#797E7A] font-mono">
                  /in/shreyansh-surana-dev
                </div>
              </div>

              <div className="pt-4 border-t border-[#1C1E1D]/6 flex items-center justify-between text-xs text-[#476655] font-medium">
                <span>Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>

            {/* GitHub Channel */}
            <a
              href="https://github.com/Shreyansh2025"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl border border-[#1C1E1D]/8 bg-[#FBF9F5] hover:bg-[#F2ECE3] hover:border-[#1C1E1D]/15 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#797E7A] mb-3">
                  <span>Source Code</span>
                  <Github className="w-3.5 h-3.5 text-[#476655]" />
                </div>
                <div className="text-sm font-medium text-[#1C1E1D] mb-1">
                  GitHub
                </div>
                <div className="text-xs text-[#797E7A] font-mono">
                  @Shreyansh2025
                </div>
              </div>

              <div className="pt-4 border-t border-[#1C1E1D]/6 flex items-center justify-between text-xs text-[#476655] font-medium">
                <span>View repos</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>

            {/* LeetCode & Coding Channel */}
            <a
              href="https://leetcode.com/u/ShreyanshSurana"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl border border-[#1C1E1D]/8 bg-[#FBF9F5] hover:bg-[#F2ECE3] hover:border-[#1C1E1D]/15 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#797E7A] mb-3">
                  <span>Problem Solving</span>
                  <Code2 className="w-3.5 h-3.5 text-[#476655]" />
                </div>
                <div className="text-sm font-medium text-[#1C1E1D] mb-1">
                  LeetCode
                </div>
                <div className="text-xs text-[#797E7A] font-mono">
                  /u/ShreyanshSurana
                </div>
              </div>

              <div className="pt-4 border-t border-[#1C1E1D]/6 flex items-center justify-between text-xs text-[#476655] font-medium">
                <span>Algorithms</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>

          </div>

          {/* Closing Line with verified contact metadata */}
          <div className="pt-6 border-t border-[#1C1E1D]/8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#797E7A]">
            <p className="font-serif italic text-sm text-[#484C49]">
              “Make fewer things happen, but make every detail feel intentional.”
            </p>
            <div className="font-mono text-[11px] text-[#476655] flex items-center gap-3">
              <span>Mandsaur, India</span>
              <span aria-hidden="true">·</span>
              <span>GATE 2026 Qualified</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
