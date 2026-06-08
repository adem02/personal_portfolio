import { HERO_CONTENT, MARQUEE_TECHS } from "../constants";
import profilePic from "../assets/meProfile.jpg";
import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi2";

export const Hero = () => {
  return (
    <section className="relative min-h-[88vh] flex flex-col justify-between">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-neutral-500"
      >
        <span>01 / Introduction</span>
        <span className="hidden sm:inline">Reims · Paris, France</span>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-12 lg:mt-0">
        <div className="lg:col-span-8 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/40 px-3 py-1.5 text-xs text-neutral-300 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Disponible pour de nouveaux challenges
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-5xl sm:text-6xl lg:text-[7.5rem] leading-[0.95] tracking-tight text-neutral-50"
          >
            Ahmed{" "}
            <span className="font-serif-display italic text-amber-200/90">DEM</span>
            <br />
            <span className="text-neutral-400">Ingénieur</span>{" "}
            <span className="font-serif-display italic">Full&nbsp;Stack</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 max-w-xl text-sm sm:text-base leading-relaxed text-neutral-400"
          >
            {HERO_CONTENT}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-neutral-50 px-5 py-3 text-sm font-medium text-neutral-950 transition hover:bg-amber-200"
            >
              Travaillons ensemble
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-5 py-3 text-sm font-medium text-neutral-200 transition hover:border-neutral-400 hover:text-white"
            >
              Voir les projets
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-4 order-1 lg:order-2 relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-amber-300/10 blur-3xl" aria-hidden />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-amber-200/40 via-neutral-700/30 to-transparent blur-md" aria-hidden />
            <img
              src={profilePic}
              alt="Ahmed DEM"
              className="relative h-56 w-56 sm:h-72 sm:w-72 lg:h-80 lg:w-80 rounded-full object-cover grayscale-[40%] ring-1 ring-neutral-800"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-16 lg:mt-20 -mx-4 sm:-mx-6 lg:-mx-8 border-y border-neutral-900 overflow-hidden"
      >
        <div className="flex whitespace-nowrap animate-marquee py-4">
          {[...MARQUEE_TECHS, ...MARQUEE_TECHS].map((t, i) => (
            <span
              key={i}
              className="mx-8 font-serif-display italic text-2xl sm:text-3xl text-neutral-500/80"
            >
              {t} <span className="text-amber-200/40 not-italic">✦</span>
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="mt-8 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-neutral-500"
      >
        <HiArrowDown className="animate-bounce" />
        Scroll
      </motion.div>
    </section>
  );
};
