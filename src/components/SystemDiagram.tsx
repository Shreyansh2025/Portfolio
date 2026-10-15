import React, { useState } from 'react';
import { FileText, ScanText, Cpu, CheckCircle2, Search, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface StageInfo {
  id: string;
  name: string;
  step: string;
  shortDesc: string;
  technicalDetails: {
    title: string;
    description: string;
    stack: string[];
    keyDesignChoice: string;
    resilienceStrategy: string;
  };
}

const STAGES: StageInfo[] = [
  {
    id: 'input',
    name: 'Document Input',
    step: '01',
    shortDesc: 'Multi-format PDF, raster scans & spec sheets',
    technicalDetails: {
      title: 'Heterogeneous Catalog & Document Ingestion',
      description:
        'Accepts arbitrary multi-page vendor catalogs, spec sheets, and scanned technical brochures. Decomposes pages, handles DPI normalizations, and extracts vector text layers where available.',
      stack: ['FastAPI Stream', 'PyMuPDF', 'Pillow'],
      keyDesignChoice:
        'Separates native PDF text stream extraction from rasterized scanned pages upfront to skip redundant OCR compute.',
      resilienceStrategy:
        'Chunked asynchronous file upload with MD5 checksum verification to prevent corrupt or truncated transfers.',
    },
  },
  {
    id: 'ocr',
    name: 'OCR Extraction',
    step: '02',
    shortDesc: 'Image preprocessing & bounding box detection',
    technicalDetails: {
      title: 'Tesseract OCR with Spatial Preprocessing',
      description:
        'Performs adaptive contrast thresholding, deskewing, and noise removal before running optical character recognition. Preserves 2D bounding boxes to maintain column and tabular adjacency.',
      stack: ['Tesseract OCR', 'OpenCV', 'Bounding-Box Mapper'],
      keyDesignChoice:
        'Custom column-boundary heuristics to prevent tabular product specifications from merging horizontally across product rows.',
      resilienceStrategy:
        'Page-level retry with contrasting filter passes if baseline confidence score drops below 75%.',
    },
  },
  {
    id: 'ai-structuring',
    name: 'AI Structuring',
    step: '03',
    shortDesc: 'Groq Llama 3 entity extraction & Zod validation',
    technicalDetails: {
      title: 'Deterministic Groq LLM Schema Extraction',
      description:
        'Translates messy OCR text fragments into strongly typed product specifications (SKUs, physical dimensions, voltage ratings, material compositions, and category hierarchies) using Groq-hosted Llama 3.',
      stack: ['Groq Llama 3', 'Prompt Grammar', 'Zod Schemas'],
      keyDesignChoice:
        'Few-shot domain schema conditioning with strict JSON schema constraints rather than unconstrained generation.',
      resilienceStrategy:
        'Fallback repair pass that fixes broken JSON syntax before schema validation occurs.',
    },
  },
  {
    id: 'validation',
    name: 'Validation',
    step: '04',
    shortDesc: 'Pydantic/Zod schemas & unit verification',
    technicalDetails: {
      title: 'Schema Integrity & Field Deduplication',
      description:
        'Validates structured payloads against strict schemas. Enforces regex for standardized unit parsing (e.g. converting "12V", "12 Volts", "12 VDC" to a uniform metric representation).',
      stack: ['Zod / Pydantic', 'Regex Normalizers', 'Deduplication Cache'],
      keyDesignChoice:
        'Invalid or low-confidence attributes are quarantined into a human-review queue rather than silently corrupting database indices.',
      resilienceStrategy:
        'Multi-stage validation pipeline where non-fatal attribute warnings do not block primary product ingestion.',
    },
  },
  {
    id: 'search',
    name: 'Hybrid Search',
    step: '05',
    shortDesc: 'FAISS vector search + SQL Server full-text',
    technicalDetails: {
      title: 'FAISS Semantic & Lexical Retrieval',
      description:
        'Combines dense semantic vector embeddings (via Sentence Transformers & FAISS) for natural language concept matching with SQL Server full-text search for exact alphanumeric model numbers.',
      stack: ['FAISS', 'SQL Server FTS', 'Sentence Transformers'],
      keyDesignChoice:
        'Reciprocal Rank Fusion (RRF) merges keyword precision with conceptual semantic understanding without requiring manual weight fine-tuning.',
      resilienceStrategy:
        'Instant fallback to relational full-text index if the vector inference service experiences elevated latency.',
    },
  },
];

export const SystemDiagram: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(2); // Default to AI Structuring

  const activeStage = STAGES[activeIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : STAGES.length - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev < STAGES.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="rounded-2xl border border-[#1C1E1D]/10 bg-[#F6F3ED] p-4 sm:p-7">
      
      {/* Header */}
      <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-[#1C1E1D]/8">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#476655] font-medium">
            Interactive Architecture
          </span>
          <h3 className="text-lg sm:text-xl font-serif font-normal text-[#1C1E1D] mt-0.5">
            BrochureIQ Pipeline
          </h3>
        </div>

        {/* Mobile Stage Navigator Counter & Controls */}
        <div className="flex sm:hidden items-center gap-2">
          <span className="text-xs font-mono text-[#797E7A]">
            {activeStage.step}/{STAGES.length}
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              type="button"
              className="p-1.5 rounded-md bg-[#EFECE5] hover:bg-[#EAE6DF] text-[#1C1E1D] border border-[#1C1E1D]/10"
              aria-label="Previous pipeline stage"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleNext}
              type="button"
              className="p-1.5 rounded-md bg-[#EFECE5] hover:bg-[#EAE6DF] text-[#1C1E1D] border border-[#1C1E1D]/10"
              aria-label="Next pipeline stage"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <p className="hidden sm:block text-xs text-[#797E7A] font-sans">
          Click any stage to examine engineering decisions
        </p>
      </div>

      {/* Mobile Horizontal Pill Scroller (Ultra clean on mobile phones) */}
      <div className="flex sm:hidden overflow-x-auto no-scrollbar gap-2 pb-3 mb-3 -mx-1 px-1">
        {STAGES.map((stage, idx) => {
          const isSelected = idx === activeIdx;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveIdx(idx)}
              type="button"
              className={`px-3 py-1.5 rounded-full text-xs font-mono whitespace-nowrap shrink-0 transition-all border ${
                isSelected
                  ? 'bg-[#1C1E1D] text-[#FBF9F5] border-[#1C1E1D] font-medium'
                  : 'bg-[#EFECE5] text-[#484C49] border-[#1C1E1D]/8 hover:bg-[#EAE6DF]'
              }`}
            >
              <span>{stage.step}. {stage.name}</span>
            </button>
          );
        })}
      </div>

      {/* Desktop 5-Column Grid */}
      <div className="hidden sm:grid sm:grid-cols-5 gap-3 mb-5">
        {STAGES.map((stage, idx) => {
          const isSelected = idx === activeIdx;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveIdx(idx)}
              type="button"
              className={`text-left p-3.5 rounded-xl border transition-all relative flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#FBF9F5] border-[#476655] shadow-sm ring-1 ring-[#476655]/20'
                  : 'bg-[#EFECE5] border-[#1C1E1D]/6 hover:bg-[#EAE6DF] hover:border-[#1C1E1D]/15'
              }`}
              aria-pressed={isSelected}
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-[#797E7A] mb-1.5">
                  <span>{stage.step}</span>
                  {idx < STAGES.length - 1 && (
                    <ArrowRight className="w-3 h-3 text-[#797E7A]/50" />
                  )}
                </div>
                <div
                  className={`text-xs font-medium ${
                    isSelected ? 'text-[#1C1E1D]' : 'text-[#484C49]'
                  }`}
                >
                  {stage.name}
                </div>
              </div>
              <p className="text-[11px] text-[#797E7A] line-clamp-1 mt-2">
                {stage.shortDesc}
              </p>
            </button>
          );
        })}
      </div>

      {/* Selected Stage Detail Panel */}
      <div className="p-4 sm:p-6 rounded-xl bg-[#FBF9F5] border border-[#1C1E1D]/8">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 mb-3 border-b border-[#1C1E1D]/6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-medium text-[#476655]">
              Stage {activeStage.step}
            </span>
            <span aria-hidden="true" className="text-[#1C1E1D]/20">/</span>
            <h4 className="text-sm sm:text-base font-serif font-medium text-[#1C1E1D]">
              {activeStage.technicalDetails.title}
            </h4>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-[#797E7A]">
            {activeStage.technicalDetails.stack.map((item, i) => (
              <React.Fragment key={item}>
                {i > 0 && <span aria-hidden="true">·</span>}
                <span className="text-[#484C49]">{item}</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#484C49] leading-relaxed mb-4">
          {activeStage.technicalDetails.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-lg bg-[#F5F2EB] border border-[#1C1E1D]/5">
            <span className="font-mono text-[10px] text-[#476655] uppercase tracking-wide block mb-1">
              Engineering Decision
            </span>
            <p className="text-[#484C49] leading-normal text-[11px] sm:text-xs">
              {activeStage.technicalDetails.keyDesignChoice}
            </p>
          </div>
          <div className="p-3 rounded-lg bg-[#F5F2EB] border border-[#1C1E1D]/5">
            <span className="font-mono text-[10px] text-[#476655] uppercase tracking-wide block mb-1">
              Fault Tolerance
            </span>
            <p className="text-[#484C49] leading-normal text-[11px] sm:text-xs">
              {activeStage.technicalDetails.resilienceStrategy}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
