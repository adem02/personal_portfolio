import { TECHICONS } from "../constants";
import { motion } from "framer-motion";
import { Tooltip as ReactToolTip } from "react-tooltip";

export const Technologies = () => {
  return (
    <section id="technologies" className="relative py-24 sm:py-32 border-t border-neutral-900">
      <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.25em] text-neutral-500">
        <span>06 / Stack</span>
        <span className="h-px flex-1 bg-neutral-800" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mt-6 text-4xl sm:text-5xl lg:text-6xl tracking-tight text-neutral-100 max-w-4xl leading-[1.05]"
      >
        Les{" "}
        <span className="font-serif-display italic text-amber-200/90">outils</span>{" "}
        que je manie au quotidien.
      </motion.h2>

      <p className="mt-6 max-w-xl text-sm sm:text-base text-neutral-400">
        Une stack que je choisis selon le besoin, pas par habitude. Du front au back,
        en passant par la data et l'infra.
      </p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="mt-16 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4"
      >
        {TECHICONS.map((tech, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            whileHover={{ y: -4 }}
            data-tooltip-id="techIconTooltip"
            data-tooltip-content={tech?.tooltip}
            className="group relative flex aspect-square items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900/30 backdrop-blur transition duration-500 hover:border-amber-200/30 hover:bg-neutral-900/60 cursor-default"
          >
            <span
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(251,191,36,0.08), transparent 70%)",
              }}
              aria-hidden
            />
            <tech.icon className={`text-4xl sm:text-5xl ${tech.color} transition-transform duration-500 group-hover:scale-110`} />
          </motion.div>
        ))}
      </motion.div>

      <ReactToolTip id="techIconTooltip" />
    </section>
  );
};
