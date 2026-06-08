import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { IExperience } from "../types";

export const Experience = () => {
  const items = [...(EXPERIENCES as IExperience[])].reverse();

  return (
    <section id="experience" className="relative py-24 sm:py-32 border-t border-neutral-900">
      <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.25em] text-neutral-500">
        <span>03 / Expérience</span>
        <span className="h-px flex-1 bg-neutral-800" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mt-6 text-4xl sm:text-5xl lg:text-6xl tracking-tight text-neutral-100 max-w-4xl leading-[1.05]"
      >
        Construire,{" "}
        <span className="font-serif-display italic text-amber-200/90">livrer</span>,{" "}
        itérer.
      </motion.h2>

      <div className="relative mt-20">
        <div
          className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-800 to-transparent"
          aria-hidden
        />

        <ol className="space-y-16 sm:space-y-24">
          {items.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <li key={idx} className="relative">
                <span
                  className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-2 h-3 w-3 rounded-full bg-amber-200 ring-4 ring-neutral-950 shadow-[0_0_20px_rgba(251,191,36,0.6)]"
                  aria-hidden
                />

                <div
                  className={`grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 pl-12 sm:pl-0 ${
                    isLeft ? "" : "sm:[&>*:first-child]:order-2"
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className={`${isLeft ? "sm:text-right sm:pr-12" : "sm:pl-12"}`}
                  >
                    <p className="font-serif-display italic text-3xl sm:text-4xl text-amber-200/90 leading-tight">
                      {exp.year}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-neutral-500">
                      {exp.company}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`${isLeft ? "sm:pl-12" : "sm:pr-12 sm:text-right"}`}
                  >
                    <div className="group relative rounded-2xl border border-neutral-800 bg-neutral-900/30 p-6 backdrop-blur transition duration-500 hover:border-amber-200/30 hover:bg-neutral-900/50">
                      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-amber-200/0 via-amber-200/0 to-amber-200/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-amber-200/10 pointer-events-none" />

                      <h3 className="text-lg sm:text-xl font-medium text-neutral-100">
                        {exp.role}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                        {exp.description}
                      </p>
                      <div className={`mt-5 flex flex-wrap gap-2 ${!isLeft ? "sm:justify-end" : ""}`}>
                        {exp.technologies.map((t, i) => (
                          <span
                            key={i}
                            className="rounded-full border border-neutral-800 bg-neutral-950/60 px-2.5 py-1 text-[11px] text-neutral-300 transition group-hover:border-neutral-700"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
