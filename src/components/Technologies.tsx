import {SectionTitle} from "./UI/SectionTitle.tsx";
import {Section} from "./UI/Section.tsx";
import {TECHICONS} from "../constants";
import {motion, Variants} from "framer-motion";
import {Tooltip as ReactToolTip} from "react-tooltip";


const iconVariants = (duration: number): Variants => ({
  initial: {x: 8},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
});

const getRandomDuration = () => {
  const durations = [2, 4, 5, 3.5];
  return durations[Math.floor(Math.random() * durations.length)];
}


export const Technologies = () => {
  return (
    <Section className={"border-b border-neutral-800 pb-24"}>
      <SectionTitle title={"Technologies"} animation/>
      <motion.div
        whileInView={{x: 0, opacity: 1}}
        initial={{x: -100, opacity: 0}}
        transition={{duration: 1.5}}
        className={"flex flex-wrap items-center justify-center gap-3 sm:gap-4"}>
        {
          TECHICONS.map((techIcon, index) => (
            <motion.div
              key={index}
              variants={iconVariants(getRandomDuration())}
              initial={"initial"}
              animate={"animate"}
              className={"rounded-2xl border-2 border-neutral-800 p-3 hover:opacity-100 sm:border-4 sm:p-4"}
              data-tooltip-id={"techIconTooltip"}
              data-tooltip-content={techIcon?.tooltip}

            >
              <techIcon.icon className={`text-5xl sm:text-6xl lg:text-7xl ${techIcon.color}`}/>
            </motion.div>
          ))
        }
      </motion.div>
      <ReactToolTip id={"techIconTooltip"}/>
    </Section>
  );
};
