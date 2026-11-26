import {motion} from 'motion/react';
import {
  ArrowDown,
  CalendarRange,
  CheckCircle2,
  ClipboardCheck,
  Layers,
} from 'lucide-react';
import {HeroIllustration} from './HeroIllustration';

const HERO_HIGHLIGHTS = [
  {
    icon: CalendarRange,
    label: '27 Days of Learning',
  },
  {
    icon: ClipboardCheck,
    label: 'Practical Assignments',
  },
  {
    icon: Layers,
    label: 'Real-World BD Skills',
  },
];

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-white pt-10 pb-16 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28"
    >
      {/* Premium ambient gradient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 right-0 h-[540px] w-[540px] rounded-full bg-[#527EFA]/9 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 -left-32 h-[360px] w-[360px] rounded-full bg-[#EAF0FF] blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Copy & Highlights */}
          <motion.div
            initial={{opacity: 0, y: 18}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, ease: [0.16, 1, 0.3, 1]}}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Architectural Coming Soon Badge */}
            <div className="mb-6 inline-flex items-center rounded-lg border border-[#527EFA]/25 bg-gradient-to-r from-[#F4F7FF] to-[#EAF0FF] px-3.5 py-1.5 text-xs font-semibold tracking-wider text-[#527EFA] shadow-2xs">
              COMING SOON | 27-DAY LEARNING EXPERIENCE
            </div>

            <h1
              id="hero-heading"
              className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.35rem] lg:leading-[1.1] [text-wrap:balance]"
            >
              Master the Art of{' '}
              <span className="bg-gradient-to-r from-[#527EFA] to-[#3B66E0] bg-clip-text text-transparent">
                Business Development
              </span>{' '}
              in{' '}
              <span className="relative inline-block text-[#527EFA]">
                27 Days
                <span
                  aria-hidden="true"
                  className="absolute right-0 -bottom-1 left-0 h-1 rounded-full bg-[#527EFA]/25"
                />
              </span>
              .
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              From understanding business development fundamentals to finding
              clients, mastering freelancing platforms, generating leads, and
              closing business opportunities, learn the practical skills that
              help businesses grow.
            </p>

            {/* Three Visual Highlights */}
            <div className="mt-8 grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
              {HERO_HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-2.5 rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white to-[#F4F7FF]/80 px-3.5 py-3 shadow-2xs transition-all duration-150 hover:border-[#527EFA]/35 hover:shadow-sm"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#EAF0FF] text-[#527EFA]">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-semibold text-slate-800 leading-snug">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Pure Exploratory Navigation Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#roadmap"
                className="inline-flex min-h-[46px] items-center gap-2 rounded-full bg-[#527EFA] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#527EFA]/25 transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#3B66E0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#527EFA]"
              >
                <span>Explore 27-Day Roadmap</span>
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#curriculum"
                className="inline-flex min-h-[46px] items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-2xs transition-all duration-150 hover:border-[#527EFA]/40 hover:bg-[#F4F7FF] hover:text-[#527EFA] focus-visible:outline-2 focus-visible:outline-[#527EFA]"
              >
                <CheckCircle2 className="h-4 w-4 text-[#527EFA]" aria-hidden="true" />
                <span>What You&apos;ll Learn</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive BD Ecosystem Illustration */}
          <motion.div
            initial={{opacity: 0, y: 22}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1]}}
            className="lg:col-span-6"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
