import {motion} from 'motion/react';
import {BookOpen, Hammer, TrendingUp} from 'lucide-react';
import {ABOUT_CARDS} from '../data/challengeData';

const PILLAR_ICONS = [BookOpen, Hammer, TrendingUp];

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-slate-100 bg-gradient-to-b from-[#F4F7FF]/80 to-[#F4F7FF]/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Narrative Overview */}
          <motion.div
            initial={{opacity: 0, y: 16}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-60px'}}
            transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
            className="lg:col-span-5"
          >
            <p className="text-xs font-bold tracking-widest uppercase text-[#527EFA]">
              About the Challenge
            </p>
            <h2
              id="about-heading"
              className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-4xl [text-wrap:balance]"
            >
              What Is the 27 Days BD Challenge?
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                The 27 Days Business Development Challenge is a practical
                learning initiative designed to help individuals understand how
                businesses find clients, generate opportunities, build
                professional relationships, and convert prospects into
                customers.
              </p>
              <p>
                Throughout this journey, participants will explore the
                fundamentals of business development, client hunting,
                freelancing marketplaces, LinkedIn prospecting, email outreach,
                cold calling, and sales strategies.
              </p>
              <p className="font-semibold text-slate-800">
                The focus is not just on learning concepts but understanding how
                to apply them in real business situations.
              </p>
            </div>
          </motion.div>

          {/* Three Feature Cards: Learn, Practice, Grow */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {ABOUT_CARDS.map((card, index) => {
              const Icon = PILLAR_ICONS[index] ?? BookOpen;
              return (
                <motion.article
                  key={card.title}
                  initial={{opacity: 0, y: 16}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true, margin: '-40px'}}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group relative overflow-hidden flex flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_24px_-12px_rgba(15,23,42,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#527EFA]/40 hover:shadow-[0_16px_36px_-12px_rgba(82,126,250,0.16)] lg:flex-row lg:items-start lg:gap-5"
                >
                  <div className="flex items-center justify-between lg:flex-col lg:items-center lg:gap-2">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EAF0FF] text-[#527EFA] transition-all duration-200 group-hover:bg-[#527EFA] group-hover:text-white group-hover:shadow-md group-hover:shadow-[#527EFA]/25">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400 tabular-nums">
                      {card.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold tracking-tight text-slate-900">
                      {card.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {card.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
