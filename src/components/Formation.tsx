import { FORMATIONS } from "../constants";
import { motion } from "framer-motion";

export const Formation = () => {
  return (
    <section id="formation" className="relative py-24 sm:py-32 border-t border-neutral-900">
      <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.25em] text-neutral-500">
        <span>05 / Formation</span>
        <span className="h-px flex-1 bg-neutral-800" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mt-6 text-4xl sm:text-5xl lg:text-6xl tracking-tight text-neutral-100 max-w-4xl leading-[1.05]"
      >
        Le <span className="font-serif-display italic text-amber-200/90">chemin</span> parcouru.
      </motion.h2>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-5">
        {FORMATIONS.map((f, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative flex flex-col rounded-2xl border border-neutral-800 bg-neutral-900/30 p-6 backdrop-blur transition duration-500 hover:border-amber-200/30 hover:bg-neutral-900/50"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-serif-display italic text-2xl text-amber-200/90">
                {f.year}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                0{i + 1}
              </span>
            </div>

            <h3 className="mt-6 text-lg font-medium leading-snug text-neutral-100">
              {f.grade}
            </h3>
            <p className="mt-1 text-xs uppercase tracking-[0.15em] text-neutral-500">
              {f.school}
            </p>

            <span className="my-5 h-px w-8 bg-neutral-800 transition-all duration-500 group-hover:w-16 group-hover:bg-amber-200/50" />

            <p className="text-sm leading-relaxed text-neutral-400">
              {f.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
