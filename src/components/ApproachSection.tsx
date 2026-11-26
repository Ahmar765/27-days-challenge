import {motion} from 'motion/react';
import {APPROACH_ITEMS} from '../data/challengeData';

export function ApproachSection() {
  return (
    <section
      id="approach"
      aria-labelledby="approach-heading"
      className="bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-widest uppercase text-[#527EFA]">
            Practical Learning Approach
          </p>
          <h2
            id="approach-heading"
            className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-4xl [text-wrap:balance]"
          >
            Not Just Theory. Real-World Practice.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Business Development is a skill that improves through execution.
            This challenge is designed around practical learning, assignments,
            and real-world business scenarios.
          </p>
        </div>

        {/* Clean 4-column desktop / stacked mobile layout */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {APPROACH_ITEMS.map((item, idx) => (
            <motion.article
              key={item.number}
              initial={{opacity: 0, y: 16}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-40px'}}
              transition={{
                duration: 0.4,
                delay: idx * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col rounded-3xl border border-slate-200/85 bg-gradient-to-b from-[#F4F7FF]/70 to-white p-6 shadow-[0_8px_24px_-12px_rgba(15,23,42,0.05)] transition-all duration-200 hover:-translate-y-1 hover:border-[#527EFA]/40 hover:shadow-[0_18px_40px_-14px_rgba(82,126,250,0.16)]"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#EAF0FF] font-mono text-sm font-bold text-[#527EFA] tabular-nums transition-colors duration-200 group-hover:bg-[#527EFA] group-hover:text-white">
                  {item.number}
                </span>
                <span
                  aria-hidden="true"
                  className="h-px w-10 bg-[#527EFA]/25 transition-all duration-200 group-hover:w-14 group-hover:bg-[#527EFA]/60"
                />
              </div>

              <div className="mt-6">
                <h3 className="text-base font-extrabold tracking-tight text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
