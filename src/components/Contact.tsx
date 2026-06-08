import { CONTACT_CHANNELS, SOCIAL_LINKS } from "../constants";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export const Contact = () => {
  return (
    <section id="contact" className="relative py-24 sm:py-32 border-t border-neutral-900">
      <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.25em] text-neutral-500">
        <span>07 / Contact</span>
        <span className="h-px flex-1 bg-neutral-800" />
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight text-neutral-100 leading-[1]">
            Une idée,{" "}
            <span className="font-serif-display italic text-amber-200/90">
              un&nbsp;projet
            </span>
            ,<br />
            ou une{" "}
            <span className="font-serif-display italic">collaboration</span>&nbsp;?
          </h2>
          <p className="mt-8 max-w-lg text-sm sm:text-base leading-relaxed text-neutral-400">
            Email ou téléphone, choisissez ce qui vous arrange. Je réponds dans la journée.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-5"
        >
          <ul className="divide-y divide-neutral-800 rounded-2xl border border-neutral-800 bg-neutral-900/30 backdrop-blur">
            {CONTACT_CHANNELS.map(({ Icon, label, value, href }) => {
              const content = (
                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 text-neutral-300">
                      <Icon className="text-base" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                        {label}
                      </span>
                      <span className="text-sm text-neutral-100">{value}</span>
                    </div>
                  </div>
                  {href && (
                    <FiArrowUpRight className="text-neutral-500 transition group-hover:text-amber-200 group-hover:-translate-y-0.5" />
                  )}
                </div>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      className="group block transition hover:bg-neutral-900/50"
                    >
                      {content}
                    </a>
                  ) : (
                    <div>{content}</div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Socials */}
          <div className="mt-6 flex items-center gap-3">
            {SOCIAL_LINKS.map(({ Icon, link, label }) => (
              <a
                key={label}
                href={link}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900/30 text-neutral-300 backdrop-blur transition hover:border-amber-200/40 hover:text-amber-200"
              >
                <Icon className="text-lg" />
              </a>
            ))}
            <span className="ml-2 text-[10px] uppercase tracking-[0.25em] text-neutral-500">
              Réseaux
            </span>
          </div>
        </motion.div>
      </div>

      <div className="mt-24 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-neutral-900 pt-8 text-xs text-neutral-500">
        <p>
          &copy; {new Date().getFullYear()} Ahmed Dem. Tous droits réservés.
        </p>
        <p className="font-serif-display italic text-sm">
          Designed &amp; built avec soin.
        </p>
      </div>
    </section>
  );
};
