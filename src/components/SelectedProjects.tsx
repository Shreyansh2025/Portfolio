import React, { useState } from 'react';
import { ExternalLink, Github, ChevronDown, ChevronUp, Check, ArrowUpRight } from 'lucide-react';
import { SystemDiagram } from './SystemDiagram.tsx';

interface ProjectData {
  id: string;
  title: string;
  affiliation: string;
  tagline: string;
  category: string;
  summary: string;
  technologies: string[];
  problem: string;
  contribution: string;
  technicalApproach: string;
  outcomes: string[];
  githubUrl?: string;
  demoUrl?: string;
  hasDiagram?: boolean;
}

const PROJECTS: ProjectData[] = [
  {
    id: 'brochureiq',
    title: 'BrochureIQ',
    affiliation: 'Costipro Project for Bonc Network',
    tagline: 'Automated Catalog Intelligence & FAISS Hybrid Semantic Search',
    category: 'Document Intelligence · Applied AI & Backend',
    summary:
      'Engineered for client Bonc Network to convert unstructured vendor PDF catalogs and scanned brochures into queryable, structured product databases using Tesseract OCR, Groq-hosted LLMs, and FAISS vector embeddings.',
    technologies: [
      'Python',
      'FastAPI',
      'React',
      'TypeScript',
      'FAISS',
      'SQL Server',
      'Tesseract OCR',
      'Groq Llama 3',
      'Zod',
    ],
    problem:
      'Industrial suppliers receive hundreds of multi-page technical brochures from manufacturers. Manually transcribing tabular specs, part codes, and electrical ratings took hours per catalog and led to frequent data errors.',
    contribution:
      'Architected the end-to-end extraction pipeline, asynchronous processing worker, Groq LLM integration, Zod schema validation layer, and FAISS hybrid search backend over SQL Server.',
    technicalApproach:
      'Asynchronous FastAPI pipeline decomposes incoming catalogs; scanned pages pass through Tesseract OCR with deskew filters, while native PDFs yield direct vector text. Groq-hosted LLMs extract structured product attributes conforming to strict schemas. Combines exact keyword matching with FAISS dense vector search (Sentence Transformers) for high-recall industrial part queries.',
    outcomes: [
      'Automated catalog intelligence for client Bonc Network (boncnetwork.com)',
      'Sub-second hybrid search pairing exact alphanumeric SKUs with natural language queries',
      'Enforced strict schema validation and automated image background normalization',
    ],
    githubUrl: 'https://github.com/Shreyansh2025/BONC_Project',
    demoUrl: 'https://boncnetwork.com',
    hasDiagram: true,
  },
  {
    id: 'second-brain',
    title: 'Second Brain',
    affiliation: 'Personal Full-Stack System',
    tagline: 'Multimodal AI Knowledge Vault with Tesseract.js & Groq Llama 3',
    category: 'Knowledge Systems · Multimodal AI',
    summary:
      'A full-stack knowledge vault that automatically captures and indexes text, whiteboard screenshots, and video references from social reels using Tesseract.js, Groq Llama 3, and YouTube Data API with real-time Socket.io sync.',
    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Groq Llama 3',
      'Cloudinary',
      'Tesseract.js',
      'Socket.io',
      'YouTube Data API',
    ],
    problem:
      'Developers and students capture fragmented insights across whiteboard snapshots, Instagram reels, and code notes. Traditional tools fail to index visual text or connect screenshot captions to actual source videos.',
    contribution:
      'Engineered the media parsing pipeline, JWT-authenticated multi-user vault, Cloudinary image upload via Multer, YouTube Data API integration, and Socket.io real-time state synchronization.',
    technicalApproach:
      'When users save screenshot captures, Tesseract.js extracts visible text and Groq Llama 3 analyzes captions to discover and auto-save related YouTube technical tutorials. WebSocket channels push instant updates across client sessions with duplicate detection.',
    outcomes: [
      'Live deployed production application on Vercel (second-brain-ten-phi.vercel.app)',
      'Automated video curation from screenshot captures via YouTube Data API and Groq',
      'JWT-authenticated multi-user security with real-time bi-directional client sync',
    ],
    githubUrl: 'https://github.com/Shreyansh2025',
    demoUrl: 'https://second-brain-ten-phi.vercel.app',
  },
  {
    id: 'safeher',
    title: 'SafeHer',
    tagline: 'Distributed Women’s Safety Platform with ESP8266 IoT Trigger',
    category: 'Critical Systems · Real-Time Services',
    affiliation: 'Personal IoT & Systems Project',
    summary:
      'An emergency safety ecosystem featuring SOS alerts, real-time location streaming, multi-channel emergency dispatch (Twilio/Vonage), a Guardian Web portal, and an ESP8266 IoT hardware trigger.',
    technologies: [
      'React Native',
      'Expo',
      'Node.js',
      'Express.js',
      'SQL Server',
      'Socket.io',
      'Twilio API',
      'Vonage API',
      'ESP8266 IoT',
    ],
    problem:
      'During personal safety emergencies, phones may be unreachable or cellular data unstable. Users require instant, discrete hardware triggering and reliable alert delivery across multiple channels.',
    contribution:
      'Developed the backend alert orchestrator, the low-latency Socket.io location stream, the Guardian Web portal, SMS/voice fallbacks via Twilio & Vonage, and the ESP8266 hardware prototype.',
    technicalApproach:
      'Engineered an event-driven orchestrator pairing WebSockets with Twilio/Vonage SMS and automated voice calls. Prototyped a discrete physical button using an ESP8266 microcontroller that communicates with the server over Wi-Fi/GSM to trigger SOS alerts without touching the mobile screen.',
    outcomes: [
      'Sub-second incident propagation to designated emergency contacts via parallel channels',
      'Functional hardware prototype with ESP8266 for discrete physical emergency triggers',
      'High-contrast Guardian Web portal with real-time geospatial location breadcrumbs',
    ],
    githubUrl: 'https://github.com/Shreyansh2025/SafeHer',
  },
];

export const SelectedProjects: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('brochureiq');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="work" className="py-20 md:py-28 border-b border-[#1C1E1D]/8">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-12 border-b border-[#1C1E1D]/8">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#476655] font-medium">
              Featured Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-[#1C1E1D] mt-2">
              Selected Projects
            </h2>
          </div>
          <p className="text-sm text-[#797E7A] max-w-md font-sans">
            Production systems and full-stack applications addressing document intelligence, semantic search, and real-time safety telemetry.
          </p>
        </div>

        {/* Streamlined Project List */}
        <div className="space-y-12">
          {PROJECTS.map((project, idx) => {
            const isExpanded = expandedId === project.id;
            return (
              <article
                key={project.id}
                className="p-6 sm:p-9 rounded-2xl border border-[#1C1E1D]/10 bg-[#FAF7F1] hover:border-[#1C1E1D]/20 transition-all"
              >
                {/* Meta Bar */}
                <div className="flex flex-wrap items-baseline justify-between gap-4 pb-4 mb-5 border-b border-[#1C1E1D]/6">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs text-[#797E7A]">
                      0{idx + 1}
                    </span>
                    <span aria-hidden="true" className="text-[#1C1E1D]/20">/</span>
                    <span className="text-xs font-mono text-[#476655] font-medium">
                      {project.category}
                    </span>
                    <span aria-hidden="true" className="hidden sm:inline text-[#1C1E1D]/20">·</span>
                    <span className="hidden sm:inline text-xs font-mono text-[#797E7A]">
                      {project.affiliation}
                    </span>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 text-xs font-medium">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#484C49] hover:text-[#1C1E1D] transition-colors"
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#476655] hover:text-[#3B5647] transition-colors"
                        aria-label={`Open live project for ${project.title}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{project.id === 'brochureiq' ? 'Client Site' : 'Live Demo'}</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Concise Summary */}
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#1C1E1D] mb-1.5 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#476655] font-serif italic mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-sm text-[#484C49] leading-relaxed max-w-3xl">
                    {project.summary}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-mono text-[#797E7A] mb-6 pb-4 border-b border-[#1C1E1D]/6">
                  <span className="text-[#1C1E1D] font-medium mr-1">Stack:</span>
                  {project.technologies.map((tech, i) => (
                    <React.Fragment key={tech}>
                      {i > 0 && <span aria-hidden="true">·</span>}
                      <span className="text-[#484C49]">{tech}</span>
                    </React.Fragment>
                  ))}
                </div>

                {/* Key Outcomes */}
                <div className="mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#797E7A] block mb-2">
                    Verified Outcomes
                  </span>
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-[#484C49]">
                    {project.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#476655] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Deep Dive Disclosure Button */}
                <div className="pt-2">
                  <button
                    onClick={() => toggleExpand(project.id)}
                    type="button"
                    className="inline-flex items-center gap-2 text-xs font-mono text-[#476655] hover:text-[#3B5647] transition-colors py-1 focus:outline-none"
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? 'Hide architectural deep dive' : 'Explore architectural deep dive'}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Collapsible Deep-Dive Details */}
                {isExpanded && (
                  <div className="mt-6 pt-6 border-t border-[#1C1E1D]/8 space-y-6 animate-in fade-in duration-200">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-xs">
                      <div>
                        <h4 className="font-mono uppercase tracking-wider text-[#797E7A] mb-1.5">
                          Problem Context
                        </h4>
                        <p className="text-[#484C49] leading-relaxed">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-mono uppercase tracking-wider text-[#797E7A] mb-1.5">
                          My Direct Contribution
                        </h4>
                        <p className="text-[#484C49] leading-relaxed">{project.contribution}</p>
                      </div>
                      <div>
                        <h4 className="font-mono uppercase tracking-wider text-[#797E7A] mb-1.5">
                          Engineering Approach
                        </h4>
                        <p className="text-[#484C49] leading-relaxed">{project.technicalApproach}</p>
                      </div>
                    </div>

                    {/* Interactive Diagram for BrochureIQ */}
                    {project.hasDiagram && (
                      <div className="mt-6">
                        <SystemDiagram />
                      </div>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
