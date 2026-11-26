import {motion} from 'motion/react';
import {Award, Compass, Handshake} from 'lucide-react';
import {OPPORTUNITY_HIGHLIGHTS} from '../data/challengeData';

const HIGHLIGHT_ICONS = [Award, Compass, Handshake];

export function OpportunitiesSection() {
  return (
    <section
      id="opportunities"
      aria-labelledby="opportunities-heading"
      className="bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#527EFA]/20 bg-gradient-to-br from-[#F4F7FF] via-white to-[#EAF0FF]/80 p-8 sm:p-12 lg:p-16 shadow-[0_20px_60px_-20px_rgba(82,126,250,0.16)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#527EFA]/10 blur-3xl"
          />

          <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            {/* Left Copy */}
            <motion.div
              initial={{opacity: 0, y: 16}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-50px'}}
              transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
              className="lg:col-span-7"
            >
              <p className="text-xs font-bold tracking-widest uppercase text-[#527EFA]">
                Future Opportunities
              </p>
              <h2
                id="opportunities-heading"
                className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-4xl [text-wrap:balance]"
              >
                Learn Skills. Create Opportunities.
              </h2>

              <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600">
                <p>
                  Business Development skills can open doors to exciting
                  professional opportunities. Throughout this challenge,
                  participants will have the opportunity to demonstrate their
                  learning, consistency, communication, and practical abilities.
                </p>
                <p className="font-semibold text-slate-800">
                  The strongest participants may be considered for potential
                  collaboration and business development opportunities with our
                  team.
                </p>
              </div>
            </motion.div>

            {/* Right Three Highlights */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {OPPORTUNITY_HIGHLIGHTS.map((highlight, idx) => {
                const Icon = HIGHLIGHT_ICONS[idx] ?? Award;
                return (
                  <motion.div
                    key={highlight}
                    initial={{opacity: 0, y: 14}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, margin: '-40px'}}
                    transition={{
                      duration: 0.4,
                      delay: idx * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group flex items-center gap-4 rounded-2xl border border-slate-200/85 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#527EFA]/35 hover:shadow-md hover:shadow-[#527EFA]/10"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EAF0FF] text-[#527EFA] transition-colors duration-200 group-hover:bg-[#527EFA] group-hover:text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="text-base font-bold text-slate-900">
                      {highlight}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
