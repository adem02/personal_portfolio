import aboutImage from "../assets/aboutMe.jpg";
import { ABOUT_STATS, ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const paragraphs = ABOUT_TEXT.split("\n\n").filter(Boolean);

export const About = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 border-t border-neutral-900">
      <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.25em] text-neutral-500">
        <span>02 / À propos</span>
        <span className="h-px flex-1 bg-neutral-800" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mt-6 text-4xl sm:text-5xl lg:text-6xl tracking-tight text-neutral-100 max-w-4xl leading-[1.05]"
      >
        Un parcours où la{" "}
        <span className="font-serif-display italic text-amber-200/90">rigueur</span>{" "}
        rencontre la{" "}
        <span className="font-serif-display italic text-amber-200/90">curiosité</span>.
      </motion.h2>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 lg:sticky lg:top-24"
        >
          <div className="relative overflow-hidden rounded-2xl ring-1 ring-neutral-800">
            <img
              src={aboutImage}
              alt="Ahmed DEM"
              className="w-full h-auto object-cover grayscale contrast-110 transition duration-700 hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                <p className="font-serif-display italic text-2xl text-neutral-100">Ahmed Dem</p>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">Full Stack Engineer</p>
              </div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">2026</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {ABOUT_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-neutral-800 bg-neutral-900/30 px-3 py-4 text-center backdrop-blur"
              >
                <div className="font-serif-display italic text-3xl text-amber-200/90">{stat.value}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-neutral-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-7 space-y-10 text-neutral-300/90"
        >
          {paragraphs.map((p, i) => {
            const [lead, ...rest] = p.split(". ");
            const tail = rest.join(". ");
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-l border-neutral-800 pl-6 hover:border-amber-200/40 transition-colors duration-500"
              >
                <p className="font-serif-display text-2xl sm:text-[1.6rem] leading-snug text-neutral-100">
                  {lead}.
                </p>
                {tail && (
                  <p className="mt-3 text-[15px] sm:text-base leading-relaxed text-neutral-400">
                    {tail}
                  </p>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
