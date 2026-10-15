import React from 'react';

interface ExpertiseItem {
  number: string;
  title: string;
  focus: string;
  description: string;
  stack: string[];
  principles: string[];
}

const EXPERTISE_AREAS: ExpertiseItem[] = [
  {
    number: '01',
    title: 'High-Throughput & Async Backends',
    focus: 'FastAPI, Node.js & Distributed Tasks',
    description:
      'Designing non-blocking server architectures capable of managing long-running data transformations without degrading client API responsiveness. Leveraging connection pooling, asynchronous queues, and structured logging.',
    stack: ['FastAPI (asyncio)', 'Node.js', 'Express', 'Redis', 'Docker'],
    principles: [
      'Stateless API workers with idempotent task execution',
      'Graceful degradation when downstream services experience backpressure',
      'Strict schema validation at system boundaries (Pydantic, Zod)',
    ],
  },
  {
    number: '02',
    title: 'Document Processing & OCR Pipelines',
    focus: 'Layout Preservation & Clean Extraction',
    description:
      'Extracting high-fidelity tabular data and textual hierarchies from noisy real-world documents (scanned catalogs, invoices, and specs). Balancing OCR error compensation with strict schema conformance.',
    stack: ['Tesseract OCR', 'OpenCV Preprocessing', 'PyMuPDF', 'Layout Heuristics'],
    principles: [
      'Spatial bounding-box retention for multi-column preservation',
      'Adaptive image contrast filtering prior to character segmentation',
      'Deterministic fallback heuristics for low-confidence characters',
    ],
  },
  {
    number: '03',
    title: 'Intelligent Search & Semantic Retrieval',
    focus: 'FAISS Dense Vectors + SQL Server Full-Text',
    description:
      'Building search experiences that don’t fail on keyword typos or domain jargon. Blending traditional BM25/FTS inverted indices with high-dimensional vector embeddings for intuitive relevance ranking.',
    stack: ['FAISS', 'SQL Server Full-Text', 'Sentence Transformers', 'Reciprocal Rank Fusion'],
    principles: [
      'Hybrid scoring: exact alphanumeric matches prioritized alongside conceptual similarity',
      'Pre-filtering vectors by tenant and category metadata before cosine ranking',
      'Sub-50ms query latency budgets under concurrent load',
    ],
  },
  {
    number: '04',
    title: 'Data Integrity & Relational Modeling',
    focus: 'PostgreSQL, SQL Server & Schema Migrations',
    description:
      'Modeling clean relational representations for complex multi-variant entities. Ensuring strong ACID guarantees, foreign key cascades, and performant indexes without over-normalizing query paths.',
    stack: ['SQL Server', 'MongoDB', 'PostgreSQL', 'Zod', 'Prisma'],
    principles: [
      'Index strategy grounded in actual query execution plan profiling',
      'Zero unvalidated database writes; strong type enforcement throughout',
      'Safe, backwards-compatible migration workflows',
    ],
  },
];

export const SystemsExpertise: React.FC = () => {
  return (
    <section id="architecture" className="py-16 sm:py-24 md:py-28 border-b border-[#1C1E1D]/8 bg-[#F8F5EE]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-6 mb-8 sm:mb-12 border-b border-[#1C1E1D]/8">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#476655] font-medium">
              Technical Core
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-[#1C1E1D] mt-1 sm:mt-2">
              Systems & Engineering Focus
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#797E7A] max-w-md font-sans">
            Principles guiding how I design data flow, handle edge cases, and ensure production stability.
          </p>
        </div>

        {/* 4-Item Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {EXPERTISE_AREAS.map((item) => (
            <div
              key={item.number}
              className="p-5 sm:p-8 rounded-2xl border border-[#1C1E1D]/8 bg-[#FBF9F5] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline justify-between pb-2.5 mb-3 border-b border-[#1C1E1D]/6">
                  <span className="text-xs font-mono text-[#797E7A]">{item.number}</span>
                  <span className="text-[11px] sm:text-xs font-mono text-[#476655]">{item.focus}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-serif font-normal text-[#1C1E1D] mb-2 sm:mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#484C49] leading-relaxed mb-4 sm:mb-6">
                  {item.description}
                </p>

                {/* Principles list */}
                <div className="mb-4 sm:mb-6 space-y-1.5 sm:space-y-2">
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#797E7A] block">
                    Core Engineering Rules
                  </span>
                  {item.principles.map((principle, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] sm:text-xs text-[#484C49]">
                      <span className="text-[#476655] font-mono mt-0.5">·</span>
                      <span className="leading-normal">{principle}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-3 border-t border-[#1C1E1D]/6 flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-[#797E7A]">
                {item.stack.map((s, i) => (
                  <React.Fragment key={s}>
                    {i > 0 && <span aria-hidden="true">·</span>}
                    <span className="text-[#1C1E1D]">{s}</span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
