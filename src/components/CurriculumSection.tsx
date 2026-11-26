import {motion} from 'motion/react';
import {
  ArrowUpRight,
  Briefcase,
  Check,
  Compass,
  Mail,
  PhoneCall,
  Target,
  Users,
} from 'lucide-react';
import {LEARNING_CATEGORIES, type LearningCategory} from '../data/challengeData';

interface CurriculumSectionProps {
  onSelectPhase: (phaseNumber: string) => void;
}

function getCategoryIcon(iconName: LearningCategory['iconName']) {
  switch (iconName) {
    case 'compass':
      return Compass;
    case 'target':
      return Target;
    case 'briefcase':
      return Briefcase;
    case 'users':
      return Users;
    case 'mail':
      return Mail;
    case 'phone':
      return PhoneCall;
  }
}

export function CurriculumSection({onSelectPhase}: CurriculumSectionProps) {
  const handleJumpToPhase = (phaseNumber: string) => {
    onSelectPhase(phaseNumber);
    const el = document.getElementById('roadmap');
    if (el) {
      el.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <section
      id="curriculum"
      aria-labelledby="curriculum-heading"
      className="bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-widest uppercase text-[#527EFA]">
            What Will You Learn?
          </p>
          <h2
            id="curriculum-heading"
            className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-4xl [text-wrap:balance]"
          >
            Everything You Need to Start Your BD Journey.
          </h2>
          <p className="mt-3.5 text-base leading-relaxed text-slate-600">
            Six core skill pillars structured to take you from foundational
            business concepts to real-world outreach and closing.
          </p>
        </div>

        {/* Six Learning Category Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {LEARNING_CATEGORIES.map((category, index) => {
            const Icon = getCategoryIcon(category.iconName);
            return (
              <motion.article
                key={category.id}
                initial={{opacity: 0, y: 16}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: '-40px'}}
                transition={{
                  duration: 0.4,
                  delay: (index % 3) * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200/85 bg-white p-6 sm:p-7 shadow-[0_8px_24px_-12px_rgba(15,23,42,0.06)] transition-all duration-200 hover:-translate-y-1 hover:border-[#527EFA]/40 hover:shadow-[0_20px_44px_-16px_rgba(82,126,250,0.18)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF0FF] text-[#527EFA] transition-all duration-200 group-hover:bg-[#527EFA] group-hover:text-white group-hover:shadow-md group-hover:shadow-[#527EFA]/25">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="rounded-lg bg-[#F4F7FF] px-2.5 py-1 font-mono text-xs font-bold text-[#527EFA] tabular-nums">
                      {category.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-extrabold tracking-tight text-slate-900">
                    {category.number}. {category.title}
                  </h3>

                  <ul className="mt-4 space-y-3">
                    {category.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-start gap-2.5 text-sm text-slate-600"
                      >
                        <span className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#EAF0FF] text-[#527EFA]">
                          <Check className="h-3 w-3 stroke-[2.5]" aria-hidden="true" />
                        </span>
                        <span className="leading-snug">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-4">
                  <button
                    type="button"
                    onClick={() => handleJumpToPhase(category.linkedPhaseNumber)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#527EFA] transition-colors hover:text-[#3B66E0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#527EFA]"
                  >
                    <span>See in Phase {category.linkedPhaseNumber}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
