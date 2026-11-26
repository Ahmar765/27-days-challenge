import {motion} from 'motion/react';
import {GraduationCap, Laptop, Sprout, TrendingUp} from 'lucide-react';
import {AUDIENCE_ITEMS, type AudienceItem} from '../data/challengeData';

function getAudienceIcon(iconName: AudienceItem['iconName']) {
  switch (iconName) {
    case 'sprout':
      return Sprout;
    case 'graduation':
      return GraduationCap;
    case 'laptop':
      return Laptop;
    case 'trending':
      return TrendingUp;
  }
}

export function AudienceSection() {
  return (
    <section
      id="audience"
      aria-labelledby="audience-heading"
      className="border-t border-slate-100 bg-gradient-to-b from-[#F4F7FF]/70 to-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-widest uppercase text-[#527EFA]">
            Who Is This For?
          </p>
          <h2
            id="audience-heading"
            className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-4xl [text-wrap:balance]"
          >
            Who Should Be Part of This Journey?
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIENCE_ITEMS.map((item, idx) => {
            const Icon = getAudienceIcon(item.iconName);
            return (
              <motion.article
                key={item.title}
                initial={{opacity: 0, y: 16}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: '-40px'}}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group rounded-3xl border border-slate-200/85 bg-white p-6 sm:p-7 shadow-[0_8px_24px_-12px_rgba(15,23,42,0.06)] transition-all duration-200 hover:-translate-y-1 hover:border-[#527EFA]/40 hover:shadow-[0_18px_40px_-14px_rgba(82,126,250,0.16)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF0FF] text-[#527EFA] transition-all duration-200 group-hover:bg-[#527EFA] group-hover:text-white group-hover:shadow-md group-hover:shadow-[#527EFA]/25">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>

                <h3 className="mt-5 text-lg font-extrabold tracking-tight text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
