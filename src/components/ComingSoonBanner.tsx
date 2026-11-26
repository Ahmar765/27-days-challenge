import {motion} from 'motion/react';

export function ComingSoonBanner() {
  return (
    <section
      aria-labelledby="coming-soon-heading"
      className="relative overflow-hidden bg-gradient-to-br from-[#527EFA] via-[#3E6AE7] to-[#274BDB] py-24 sm:py-32 text-white"
    >
      {/* Subtle architectural line pattern */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-15"
      >
        <defs>
          <pattern
            id="coming-soon-grid"
            width="44"
            height="44"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 44 0 L 0 0 0 44"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#coming-soon-grid)" />
      </svg>

      {/* Ambient radial light blooms */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-white/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 16}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-50px'}}
          transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
          className="flex flex-col items-center"
        >
          {/* Prominent non-clickable decorative badge */}
          <div
            aria-label="Status: Coming Soon"
            className="inline-flex items-center rounded-full border border-white/35 bg-white/15 px-6 py-2 font-mono text-xs font-bold tracking-[0.2em] text-white shadow-lg shadow-black/5 backdrop-blur-md"
          >
            COMING SOON
          </div>

          <h2
            id="coming-soon-heading"
            className="mt-8 text-3xl font-extrabold tracking-tight text-white sm:text-5xl [text-wrap:balance]"
          >
            Something Exciting Is Coming.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            A 27-day journey to understand business development, master client
            acquisition, and build skills that matter in the real business
            world.
          </p>

          <p className="mt-8 border-t border-white/25 pt-6 text-sm font-semibold tracking-wide text-white">
            Stay tuned. The journey begins soon.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
