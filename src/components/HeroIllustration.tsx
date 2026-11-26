import {useState} from 'react';
import {motion} from 'motion/react';
import {
  Briefcase,
  Mail,
  Network,
  PhoneCall,
  Search,
  TrendingUp,
} from 'lucide-react';

type EcosystemNodeId = 'research' | 'outreach' | 'pipeline' | 'growth';

interface EcosystemNode {
  id: EcosystemNodeId;
  label: string;
  subtitle: string;
  phase: string;
}

const NODES: EcosystemNode[] = [
  {
    id: 'research',
    label: 'Lead Research',
    subtitle: 'ICP & Decision Makers',
    phase: 'Days 01 to 08',
  },
  {
    id: 'outreach',
    label: 'Multi-Channel Outreach',
    subtitle: 'LinkedIn, Email & Marketplaces',
    phase: 'Days 09 to 23',
  },
  {
    id: 'pipeline',
    label: 'Sales Pipeline',
    subtitle: 'Discovery & Qualification',
    phase: 'Days 24 to 25',
  },
  {
    id: 'growth',
    label: 'Client Acquisition',
    subtitle: 'Pitching & Closing',
    phase: 'Days 26 to 27',
  },
];

export function HeroIllustration() {
  const [activeNode, setActiveNode] = useState<EcosystemNodeId>('growth');

  const currentNode = NODES.find((n) => n.id === activeNode) ?? NODES[3];

  return (
    <div
      className="relative w-full rounded-3xl border border-[#527EFA]/18 bg-gradient-to-br from-[#F4F7FF] via-white to-[#EAF0FF] p-5 sm:p-7 shadow-[0_24px_64px_-18px_rgba(82,126,250,0.22),0_4px_20px_-6px_rgba(15,23,42,0.06)]"
      aria-label="Interactive Business Development Ecosystem Illustration"
    >
      {/* Subtle architectural grid backdrop */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full rounded-3xl opacity-40"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="bd-hero-grid"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 28 0 L 0 0 0 28"
              fill="none"
              stroke="#527EFA"
              strokeOpacity="0.11"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bd-hero-grid)" />
      </svg>

      <div className="relative z-10 flex flex-col gap-5">
        {/* Top Interactive Ecosystem Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#527EFA]/12 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#527EFA] to-[#3B66E0] text-white shadow-md shadow-[#527EFA]/25">
              <Network className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-bold tracking-tight text-slate-900">
                Business Development Workflow
              </p>
              <p className="text-[11px] text-slate-500">
                Connected skills across 27 days
              </p>
            </div>
          </div>

          <span className="rounded-lg border border-[#527EFA]/20 bg-white/90 px-2.5 py-1 font-mono text-xs font-semibold text-[#527EFA] tabular-nums shadow-2xs">
            {currentNode.phase}
          </span>
        </div>

        {/* Center Visual: Growth Trajectory Chart + Pipeline Flow */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
          {/* Left Panel: Growth Trajectory & Connected Nodes */}
          <div className="sm:col-span-7 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800">
                Skill &amp; Opportunity Progression
              </span>
              <TrendingUp className="h-4 w-4 text-[#527EFA]" aria-hidden="true" />
            </div>

            {/* Clean Animated Vector Growth Chart */}
            <div className="relative h-36 w-full">
              <svg
                viewBox="0 0 320 120"
                className="h-full w-full overflow-visible"
                role="img"
                aria-label="Ascending business development skill progression curve"
              >
                <defs>
                  <linearGradient id="bdCurveFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#527EFA" stopOpacity="0.24" />
                    <stop offset="100%" stopColor="#527EFA" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="bdCurveStroke" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#8AA8FC" />
                    <stop offset="100%" stopColor="#527EFA" />
                  </linearGradient>
                </defs>

                {/* Horizontal guide lines */}
                <line x1="0" y1="28" x2="320" y2="28" stroke="#EAF0FF" strokeWidth="1" />
                <line x1="0" y1="62" x2="320" y2="62" stroke="#EAF0FF" strokeWidth="1" />
                <line x1="0" y1="96" x2="320" y2="96" stroke="#EAF0FF" strokeWidth="1" />

                {/* Area fill */}
                <motion.path
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{duration: 0.7, delay: 0.15}}
                  d="M 16 96 C 68 92, 88 74, 120 66 C 160 56, 184 44, 224 34 C 258 26, 282 18, 304 14 L 304 110 L 16 110 Z"
                  fill="url(#bdCurveFill)"
                />

                {/* Smooth curve */}
                <motion.path
                  initial={{pathLength: 0}}
                  animate={{pathLength: 1}}
                  transition={{duration: 0.9, ease: [0.16, 1, 0.3, 1]}}
                  d="M 16 96 C 68 92, 88 74, 120 66 C 160 56, 184 44, 224 34 C 258 26, 282 18, 304 14"
                  fill="none"
                  stroke="url(#bdCurveStroke)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Interactive Stage Nodes */}
                {[
                  {id: 'research' as const, cx: 16, cy: 96},
                  {id: 'outreach' as const, cx: 120, cy: 66},
                  {id: 'pipeline' as const, cx: 224, cy: 34},
                  {id: 'growth' as const, cx: 304, cy: 14},
                ].map((pt) => {
                  const isActive = activeNode === pt.id;
                  return (
                    <g key={pt.id}>
                      {isActive && (
                        <circle
                          cx={pt.cx}
                          cy={pt.cy}
                          r="12"
                          fill="#527EFA"
                          fillOpacity="0.16"
                        />
                      )}
                      <circle
                        cx={pt.cx}
                        cy={pt.cy}
                        r={isActive ? '6' : '4.5'}
                        fill={isActive ? '#527EFA' : '#FFFFFF'}
                        stroke="#527EFA"
                        strokeWidth="2.5"
                      />
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Interactive Node Selector */}
            <div className="mt-2 grid grid-cols-2 gap-1.5">
              {NODES.map((node) => {
                const isActive = activeNode === node.id;
                return (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() => setActiveNode(node.id)}
                    className={`rounded-xl border px-2.5 py-2 text-left transition-all duration-150 focus-visible:outline-2 focus-visible:outline-[#527EFA] ${
                      isActive
                        ? 'border-[#527EFA]/40 bg-[#F4F7FF] text-[#527EFA] shadow-2xs'
                        : 'border-slate-200/70 bg-white text-slate-600 hover:border-[#527EFA]/25 hover:text-slate-900'
                    }`}
                  >
                    <span className="block text-[11px] font-bold leading-tight truncate">
                      {node.label}
                    </span>
                    <span className="block text-[10px] text-slate-500 truncate mt-0.5">
                      {node.subtitle}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Panel: Connected Channel & Pipeline Cards */}
          <div className="sm:col-span-5 flex flex-col gap-3">
            {/* Lead Generation Card */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-sm">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EAF0FF] text-[#527EFA]">
                  <Search className="h-4 w-4" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-900 truncate">
                    Prospect Database
                  </p>
                  <p className="text-[11px] text-slate-500 truncate">
                    ICP &amp; Decision Makers
                  </p>
                </div>
              </div>
              <div className="mt-3 space-y-1.5">
                <div className="flex items-center justify-between rounded-lg bg-[#F4F7FF] px-2.5 py-1.5 text-[11px]">
                  <span className="font-medium text-slate-700">Target Fit</span>
                  <span className="font-mono font-semibold text-[#527EFA]">
                    Qualified
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-slate-50 px-2.5 py-1.5 text-[11px]">
                  <span className="font-medium text-slate-700">CRM Pipeline</span>
                  <span className="font-mono font-medium text-slate-600">
                    Structured
                  </span>
                </div>
              </div>
            </div>

            {/* Outreach Channels Card */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-sm">
              <p className="text-xs font-bold text-slate-900 mb-2.5">
                Outreach Channels
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2.5 rounded-lg border border-slate-100 bg-[#F4F7FF]/70 px-2.5 py-2">
                  <Briefcase className="h-3.5 w-3.5 shrink-0 text-[#527EFA]" aria-hidden="true" />
                  <span className="text-[11px] font-medium text-slate-700 truncate">
                    Fiverr &amp; Upwork Proposals
                  </span>
                </div>
                <div className="flex items-center gap-2.5 rounded-lg border border-slate-100 bg-[#F4F7FF]/70 px-2.5 py-2">
                  <Mail className="h-3.5 w-3.5 shrink-0 text-[#527EFA]" aria-hidden="true" />
                  <span className="text-[11px] font-medium text-slate-700 truncate">
                    Cold Email Sequences
                  </span>
                </div>
                <div className="flex items-center gap-2.5 rounded-lg border border-slate-100 bg-[#F4F7FF]/70 px-2.5 py-2">
                  <PhoneCall className="h-3.5 w-3.5 shrink-0 text-[#527EFA]" aria-hidden="true" />
                  <span className="text-[11px] font-medium text-slate-700 truncate">
                    Discovery &amp; Sales Calls
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Focus Readout */}
        <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-[#527EFA]/15 bg-white/95 px-4 py-2.5 text-xs shadow-2xs">
          <div className="flex items-center gap-2 text-slate-700">
            <span className="font-semibold text-[#527EFA]">Focus Stage:</span>
            <span className="font-bold text-slate-900">{currentNode.label}</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span className="text-slate-500">{currentNode.subtitle}</span>
          </div>
          <span className="text-[11px] font-medium text-slate-500">
            Interactive curriculum preview
          </span>
        </div>
      </div>
    </div>
  );
}
