import {motion} from 'motion/react';
import {CheckCircle2} from 'lucide-react';
import {ROADMAP_PHASES} from '../data/challengeData';

interface RoadmapSectionProps {
  selectedPhase: string;
  onSelectPhase: (phaseNumber: string) => void;
}

export function RoadmapSection({
  selectedPhase,
  onSelectPhase,
}: RoadmapSectionProps) {
  const visiblePhases =
    selectedPhase === 'all'
      ? ROADMAP_PHASES
      : ROADMAP_PHASES.filter((p) => p.phase === selectedPhase);

  return (
    <section
      id="roadmap"
      aria-labelledby="roadmap-heading"
      className="border-t border-slate-100 bg-gradient-to-b from-[#F4F7FF] via-[#F4F7FF]/55 to-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Animated Pill Filter */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest uppercase text-[#527EFA]">
              The 27-Day Learning Roadmap
            </p>
            <h2
              id="roadmap-heading"
              className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-4xl [text-wrap:balance]"
            >
              Your 27-Day Journey Starts Here.
            </h2>
            <p className="mt-3.5 text-base leading-relaxed text-slate-600">
              From learning the basics to executing real business development
              activities.
            </p>
          </div>

          {/* Interactive Animated Pill Phase Filter Bar */}
          <div
            role="tablist"
            aria-label="Filter roadmap by phase"
            className="flex flex-wrap items-center gap-1 rounded-full border border-slate-200/90 bg-white p-1.5 shadow-sm"
          >
            <button
              type="button"
              role="tab"
              aria-selected={selectedPhase === 'all'}
              onClick={() => onSelectPhase('all')}
              className={`relative rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#527EFA] ${
                selectedPhase === 'all'
                  ? 'text-white'
                  : 'text-slate-600 hover:text-[#527EFA]'
              }`}
            >
              {selectedPhase === 'all' && (
                <motion.span
                  layoutId="roadmap-phase-pill"
                  transition={{type: 'spring', stiffness: 420, damping: 32}}
                  className="absolute inset-0 rounded-full bg-[#527EFA] shadow-xs"
                />
              )}
              <span className="relative z-10">All 6 Phases</span>
            </button>
            {ROADMAP_PHASES.map((phase) => {
              const isSelected = selectedPhase === phase.phase;
              return (
                <button
                  key={phase.phase}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => onSelectPhase(phase.phase)}
                  className={`relative rounded-full px-3 py-1.5 font-mono text-xs font-semibold transition-colors whitespace-nowrap shrink-0 tabular-nums focus-visible:outline-2 focus-visible:outline-[#527EFA] ${
                    isSelected
                      ? 'text-white'
                      : 'text-slate-600 hover:text-[#527EFA]'
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="roadmap-phase-pill"
                      transition={{type: 'spring', stiffness: 420, damping: 32}}
                      className="absolute inset-0 rounded-full bg-[#527EFA] shadow-xs"
                    />
                  )}
                  <span className="relative z-10">P{phase.phase}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Six-Phase Visual Roadmap */}
        <div className="relative mt-12">
          {/* Desktop Center Timeline Spine when viewing all phases */}
          {selectedPhase === 'all' && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-4 bottom-4 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-[#527EFA]/45 via-[#527EFA]/25 to-transparent lg:block"
            />
          )}

          <div
            className={`grid grid-cols-1 gap-6 ${
              selectedPhase === 'all'
                ? 'lg:grid-cols-2 lg:gap-x-12 lg:gap-y-8'
                : 'max-w-2xl'
            }`}
          >
            {visiblePhases.map((item, idx) => (
              <motion.article
                key={item.phase}
                layout
                initial={{opacity: 0, y: 16}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: '-40px'}}
                transition={{
                  duration: 0.4,
                  delay: (idx % 2) * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative rounded-3xl border border-slate-200/85 bg-white p-6 sm:p-7 shadow-[0_8px_24px_-12px_rgba(15,23,42,0.06)] transition-all duration-200 hover:border-[#527EFA]/40 hover:shadow-[0_18px_40px_-14px_rgba(82,126,250,0.16)]"
              >
                {/* Prominent Day Range & Phase Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div>
                    <span className="font-mono text-xs font-bold tracking-wider text-[#527EFA] tabular-nums">
                      PHASE {item.phase}
                    </span>
                    <h3 className="mt-1 text-lg font-extrabold tracking-tight text-slate-900">
                      {item.title}
                    </h3>
                  </div>

                  {/* Prominent Day Range Block */}
                  <div className="rounded-xl border border-[#527EFA]/25 bg-gradient-to-br from-[#F4F7FF] to-[#EAF0FF] px-3.5 py-2 text-right">
                    <span className="block font-mono text-xs sm:text-sm font-bold text-[#527EFA] tabular-nums">
                      {item.dayRange}
                    </span>
                  </div>
                </div>

                {/* Phase Topics */}
                <ul className="mt-5 space-y-2.5">
                  {item.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-2.5 text-sm text-slate-700"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#527EFA]"
                        aria-hidden="true"
                      />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
