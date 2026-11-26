import {useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {ArrowRight, Menu, X} from 'lucide-react';

const NAV_LINKS = [
  {label: 'About', href: '#about'},
  {label: 'Curriculum', href: '#curriculum'},
  {label: 'Roadmap', href: '#roadmap'},
  {label: 'Approach', href: '#approach'},
  {label: 'Audience', href: '#audience'},
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const [activeHref, setActiveHref] = useState<string>('#about');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setActiveHref(href);
    setMobileMenuOpen(false);
  };

  return (
    <div className="sticky top-0 z-40 w-full px-3 pt-3 sm:px-6 sm:pt-4 pointer-events-none">
      <motion.header
        initial={{opacity: 0, y: -18}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
        className={`pointer-events-auto mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 sm:gap-8 rounded-full border px-4 sm:px-5 transition-all duration-300 ${
          scrolled
            ? 'border-[#527EFA]/20 bg-white/90 shadow-[0_12px_36px_-10px_rgba(15,23,42,0.12),0_4px_16px_-4px_rgba(82,126,250,0.12)] backdrop-blur-xl'
            : 'border-slate-200/90 bg-white/80 shadow-[0_8px_28px_-12px_rgba(15,23,42,0.08)] backdrop-blur-lg'
        }`}
      >
        {/* Zone 1: Single-line brand wordmark */}
        <a
          href="#"
          className="pl-1 font-display text-sm sm:text-base font-extrabold tracking-tight text-slate-900 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#527EFA]"
        >
          27 Days <span className="text-[#527EFA]">BD Challenge</span>
        </a>

        {/* Zone 2: Animated pill-hover navigation links */}
        <nav
          aria-label="Primary navigation"
          onMouseLeave={() => setHoveredHref(null)}
          className="hidden md:flex items-center gap-1 rounded-full bg-slate-100/70 p-1"
        >
          {NAV_LINKS.map((item) => {
            const isHighlighted =
              hoveredHref === item.href ||
              (hoveredHref === null && activeHref === item.href);
            return (
              <a
                key={item.href}
                href={item.href}
                onMouseEnter={() => setHoveredHref(item.href)}
                onClick={() => handleLinkClick(item.href)}
                className={`relative rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#527EFA] ${
                  isHighlighted
                    ? 'text-[#527EFA]'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {isHighlighted && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    transition={{
                      type: 'spring',
                      stiffness: 420,
                      damping: 32,
                    }}
                    className="absolute inset-0 rounded-full bg-white shadow-xs ring-1 ring-[#527EFA]/15"
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single pill primary action */}
        <div className="flex items-center gap-2 shrink-0">
          <motion.a
            href="#roadmap"
            onClick={() => handleLinkClick('#roadmap')}
            whileHover={{scale: 1.02}}
            whileTap={{scale: 0.98}}
            transition={{duration: 0.15}}
            className="group hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#527EFA] px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-[#527EFA]/25 transition-colors duration-150 hover:bg-[#3B66E0] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#527EFA]"
          >
            <span>27-Day Roadmap</span>
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </motion.a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={
              mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-[#F4F7FF] hover:text-[#527EFA] md:hidden focus-visible:outline-2 focus-visible:outline-[#527EFA]"
          >
            {mobileMenuOpen ? (
              <X className="h-4.5 w-4.5" aria-hidden="true" />
            ) : (
              <Menu className="h-4.5 w-4.5" aria-hidden="true" />
            )}
          </button>
        </div>
      </motion.header>

      {/* Animated Mobile Pill Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{opacity: 0, y: -10, scale: 0.98}}
            animate={{opacity: 1, y: 0, scale: 1}}
            exit={{opacity: 0, y: -10, scale: 0.98}}
            transition={{duration: 0.2, ease: [0.16, 1, 0.3, 1]}}
            className="pointer-events-auto mx-auto mt-2 max-w-5xl rounded-3xl border border-slate-200/90 bg-white/95 p-3 shadow-xl shadow-slate-900/8 backdrop-blur-xl md:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleLinkClick(item.href)}
                  className={`flex min-h-[44px] items-center rounded-full px-4 text-sm font-semibold transition-colors ${
                    activeHref === item.href
                      ? 'bg-[#EAF0FF] text-[#527EFA]'
                      : 'text-slate-700 hover:bg-[#F4F7FF] hover:text-[#527EFA]'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#roadmap"
                onClick={() => handleLinkClick('#roadmap')}
                className="mt-1 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#527EFA] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3B66E0]"
              >
                <span>Explore 27-Day Roadmap</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
