import React, { useEffect } from 'react';
import { X, Printer, ExternalLink, Mail, Github, Linkedin, Award, Briefcase } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1C1E1D]/50 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#FBF9F5] border border-[#1C1E1D]/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1C1E1D]/10 bg-[#F5F1EB] shrink-0">
          <div className="flex items-center gap-3">
            <h2 id="resume-title" className="text-sm font-mono uppercase tracking-wider text-[#1C1E1D] font-medium">
              Curriculum Vitae · Shreyansh Surana
            </h2>
            <span className="hidden sm:inline-block text-xs font-mono text-[#476655]">
              (Official 2026 / 2027)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#1C1E1D]/10 bg-[#FBF9F5] hover:bg-[#EDE7E0] text-xs font-medium text-[#484C49] hover:text-[#1C1E1D] transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              type="button"
              className="p-1.5 rounded-lg text-[#797E7A] hover:text-[#1C1E1D] hover:bg-[#1C1E1D]/5 transition-colors"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Document Body */}
        <div className="overflow-y-auto p-6 sm:p-10 font-sans text-xs sm:text-sm text-[#484C49] space-y-7 print:p-0">
          
          {/* Header */}
          <div className="border-b border-[#1C1E1D]/10 pb-6">
            <h1 className="text-2xl sm:text-3xl font-serif font-normal text-[#1C1E1D] mb-1.5">
              SHREYANSH SURANA
            </h1>
            <p className="text-sm text-[#476655] font-mono mb-3">
              Computer Science Student & Full-Stack Developer · Applied AI & Systems
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-[#797E7A]">
              <span>+91 8871296211</span>
              <span aria-hidden="true">·</span>
              <span>shreyanshsurana100@gmail.com</span>
              <span aria-hidden="true">·</span>
              <span>github.com/Shreyansh2025</span>
              <span aria-hidden="true">·</span>
              <span>linkedin.com/in/shreyansh-surana-dev</span>
              <span aria-hidden="true">·</span>
              <span>leetcode.com/u/ShreyanshSurana</span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#476655] font-semibold pb-1.5 mb-2.5 border-b border-[#1C1E1D]/8">
              Education
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
              <span className="text-sm font-medium text-[#1C1E1D]">
                Mandsaur University — Bachelor of Technology in Computer Science and Engineering
              </span>
              <span className="font-mono text-xs text-[#797E7A]">2023 – 2027 · Mandsaur, India</span>
            </div>
            <p className="text-xs font-mono text-[#476655]">
              Cumulative GPA: 8.32 / 10.0
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#476655] font-semibold pb-1.5 mb-3 border-b border-[#1C1E1D]/8">
              Work Experience
            </h3>

            <div className="space-y-4">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                  <span className="text-sm font-medium text-[#1C1E1D]">
                    Costipro — Full-Stack Development Intern
                  </span>
                  <span className="font-mono text-xs text-[#797E7A]">July 2026 – Present · Remote / Mandsaur, India</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-[#484C49] leading-relaxed">
                  <li>Architected BrochureIQ (React/TypeScript, FastAPI) for client Bonc Network (boncnetwork.com), delivering a catalog intelligence platform via agile workflows.</li>
                  <li>Integrated Tesseract OCR and Groq-hosted LLMs to extract and verify product data from raw PDFs and images, enabling AI-assisted B2B semantic search.</li>
                  <li>Implemented an AI-assisted search architecture using FAISS and vector embeddings (Sentence Transformers) for highly relevant product discovery.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                  <span className="text-sm font-medium text-[#1C1E1D]">
                    Heal Bharat — Frontend Web Development Intern
                  </span>
                  <span className="font-mono text-xs text-[#797E7A]">Jan 2025 – Feb 2025 · India</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-[#484C49] leading-relaxed">
                  <li>Developed responsive, interactive web applications focusing on semantic structure, cross-browser compatibility, and dynamic UI state management.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Selected Projects */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#476655] font-semibold pb-1.5 mb-3 border-b border-[#1C1E1D]/8">
              Selected Engineering Projects
            </h3>

            <div className="space-y-4">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                  <span className="text-sm font-medium text-[#1C1E1D]">
                    BrochureIQ: B2B Product Extraction Platform
                  </span>
                  <span className="font-mono text-xs text-[#797E7A]">
                    github.com/Shreyansh2025/BONC_Project · boncnetwork.com
                  </span>
                </div>
                <p className="text-xs font-mono text-[#797E7A] mb-1">
                  Python, FastAPI, React, TypeScript, FAISS, SQL Server, Tesseract OCR, Groq LLM
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-[#484C49]">
                  <li>Converts uploaded PDF/image catalogs into structured, searchable product databases via Tesseract OCR and Groq LLMs.</li>
                  <li>Combined exact keyword matching and FAISS semantic search (Sentence Transformers); automated background removal; enforced Zod schema validation.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                  <span className="text-sm font-medium text-[#1C1E1D]">
                    Second Brain: AI Knowledge Management Platform
                  </span>
                  <span className="font-mono text-xs text-[#797E7A]">
                    second-brain-ten-phi.vercel.app
                  </span>
                </div>
                <p className="text-xs font-mono text-[#797E7A] mb-1">
                  React, Node.js, MongoDB, Groq LLM (Llama 3), Cloudinary, Tesseract.js, Socket.io
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-[#484C49]">
                  <li>Engineered an AI media pipeline using Tesseract.js and Groq Llama 3 to analyze screenshots and Instagram reel captions, automatically querying YouTube Data API to discover and save relevant videos.</li>
                  <li>Built full-stack personal knowledge vault with JWT auth, handling automated content extraction and real-time Socket.io sync.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                  <span className="text-sm font-medium text-[#1C1E1D]">
                    SafeHer: Women’s Safety Application
                  </span>
                  <span className="font-mono text-xs text-[#797E7A]">
                    github.com/Shreyansh2025/SafeHer
                  </span>
                </div>
                <p className="text-xs font-mono text-[#797E7A] mb-1">
                  React Native, Node.js, Express, SQL Server, Socket.IO, Twilio, Vonage, ESP8266 IoT
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-[#484C49]">
                  <li>Developed full-stack IoT safety application featuring SOS alerts, real-time location tracking, and Guardian Web portal.</li>
                  <li>Integrated Twilio/Vonage APIs for emergency messaging and an ESP8266 microcontroller prototype for hardware-triggered emergencies.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#476655] font-semibold pb-1.5 mb-2.5 border-b border-[#1C1E1D]/8">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <span className="font-mono text-[#797E7A]">Languages:</span>{' '}
                <span className="text-[#1C1E1D]">Python, C++, TypeScript, JavaScript (ES6+), SQL, HTML5, CSS3</span>
              </div>
              <div>
                <span className="font-mono text-[#797E7A]">AI & Applied ML:</span>{' '}
                <span className="text-[#1C1E1D]">Tesseract OCR, Groq LLM, Sentence Transformers, FAISS, Vector Embeddings</span>
              </div>
              <div>
                <span className="font-mono text-[#797E7A]">Backend & Databases:</span>{' '}
                <span className="text-[#1C1E1D]">FastAPI, Node.js, Express.js, MongoDB, SQL Server, RESTful APIs, Socket.IO</span>
              </div>
              <div>
                <span className="font-mono text-[#797E7A]">Frontend & Tools:</span>{' '}
                <span className="text-[#1C1E1D]">React.js, Tailwind CSS, Git, GitHub, Postman, OAuth 2.0</span>
              </div>
            </div>
          </div>

          {/* Leadership & Achievements */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#476655] font-semibold pb-1.5 mb-2.5 border-b border-[#1C1E1D]/8">
              Leadership & Key Achievements
            </h3>
            <ul className="space-y-1.5 text-xs text-[#484C49]">
              <li className="flex items-start gap-2">
                <span className="text-[#476655] font-mono">·</span>
                <span><strong className="text-[#1C1E1D]">GATE 2026 Qualified:</strong> Successfully qualified the Graduate Aptitude Test in Engineering (GATE) in Computer Science & Engineering.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#476655] font-mono">·</span>
                <span><strong className="text-[#1C1E1D]">Google Gemini Student Ambassador (Gold Tier):</strong> Achieved "The Architect (Gold)" tier at Mandsaur University facilitating AI prompt challenges.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#476655] font-mono">·</span>
                <span><strong className="text-[#1C1E1D]">Google Cloud "Arcade Legend":</strong> Completed advanced hands-on labs covering cloud infrastructure, serverless computing, and GCP deployment.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#476655] font-mono">·</span>
                <span><strong className="text-[#1C1E1D]">GeeksforGeeks Design & Creative Head:</strong> Campus Mantri Team lead managing visual branding and technical workshops.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-[#1C1E1D]/10 bg-[#F5F1EB] flex items-center justify-between text-xs font-mono text-[#797E7A] shrink-0">
          <span>shreyanshsurana100@gmail.com</span>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-full bg-[#1C1E1D] text-[#FBF9F5] hover:bg-[#476655] transition-colors font-sans text-xs"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
