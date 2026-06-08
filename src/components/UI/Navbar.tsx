import { FiArrowUpRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS, SOCIAL_LINKS } from "../../constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      if (currentY < 80) {
        setVisible(true);
      } else if (delta > 8) {
        setVisible(false);
      } else if (delta < -4) {
        setVisible(true);
      }

      setScrolled(currentY > 20);
      lastScrollY.current = currentY;
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={false}
      animate={{
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        y: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        opacity: { duration: visible ? 0.4 : 0.2 },
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled
          ? "border-b border-neutral-900/80 bg-neutral-950/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
        <a href="#" className="group flex items-center gap-3 shrink-0">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900/40 backdrop-blur transition group-hover:border-amber-200/50">
            <span className="font-serif-display italic text-lg text-neutral-100">a</span>
            <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-amber-200 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
          </span>
          <div className="hidden sm:flex lg:hidden xl:flex flex-col leading-none">
            <span className="text-sm font-medium tracking-tight text-neutral-100">Ahmed Dem</span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">
              Full Stack Engineer
            </span>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-0.5 rounded-full border border-neutral-800/80 bg-neutral-900/30 px-1.5 py-1.5 backdrop-blur">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="group relative flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs text-neutral-400 transition hover:bg-neutral-800/50 hover:text-neutral-50"
              >
                <span className="font-serif-display italic text-amber-200/60 text-[11px]">
                  {l.num}
                </span>
                <span>{l.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="hidden sm:flex items-center gap-1">
            {SOCIAL_LINKS.map(({ Icon, link, label }) => (
              <motion.a
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                key={label}
                href={link}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-transparent text-neutral-400 transition hover:border-neutral-800 hover:text-neutral-100"
              >
                <Icon className="text-base" />
              </motion.a>
            ))}
          </div>

          <span className="hidden sm:block h-5 w-px bg-neutral-800" aria-hidden />

          <a
            href="/CV_DEM_Ahmed_Dev_Fullstack.pdf"
            download
            className="group inline-flex items-center gap-1.5 rounded-full bg-neutral-50 px-4 py-2 text-xs font-medium text-neutral-950 transition hover:bg-amber-200"
          >
            CV
            <FiArrowUpRight className="text-sm transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden flex h-9 w-9 flex-col items-center justify-center gap-1 rounded-full border border-neutral-800"
            aria-label="Menu"
          >
            <span
              className={`block h-px w-4 bg-neutral-200 transition ${
                mobileOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-4 bg-neutral-200 transition ${
                mobileOpen ? "-translate-y-[2px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-t border-neutral-900 bg-neutral-950/95 backdrop-blur-xl"
          >
            <ul className="container mx-auto px-4 py-4 sm:px-6">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-baseline justify-between border-b border-neutral-900 py-3 text-neutral-200"
                  >
                    <span className="text-base">{l.label}</span>
                    <span className="font-serif-display italic text-sm text-amber-200/60">
                      {l.num}
                    </span>
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3 pt-4">
                {SOCIAL_LINKS.map(({ Icon, link, label }) => (
                  <a
                    key={label}
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 text-neutral-300"
                  >
                    <Icon />
                  </a>
                ))}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
