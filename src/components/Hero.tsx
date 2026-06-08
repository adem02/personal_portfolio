import {HERO_CONTENT} from "../constants";
import profilePic from "../assets/meProfile.jpg";
import {Section} from "./UI/Section.tsx";
import {motion, Variants} from "framer-motion";

const container = (delay: number): Variants => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {delay: delay, duration: 0.5},
  },
});

export const Hero = () => {
  return (
    <Section className={"border-b border-neutral-900 pb-6 lg:mb-24"}>
      <div className={"flex flex-wrap items-center"}>
        <div className={"w-full sm:w-full lg:w-1/2 lg:p-8"}>
          <div className={"flex justify-center"}>
            <motion.img
              initial={{x: 100, opacity: 0}}
              animate={{x: 0, opacity: 0.4}}
              transition={{delay: 0.5, duration: 1.2}}
              src={`${profilePic}`}
              className="w-full max-w-[220px] rounded-lg sm:max-w-sm md:max-w-md lg:max-w-lg"
              alt={"Profile picture"}
            />
          </div>
        </div>
        <div className={"w-full lg:w-1/2"}>
          <div className={"flex flex-col items-start"}>
            <motion.h1
              variants={container(0)}
              initial={"hidden"}
              animate={"visible"}
              className={"w-full pb-6 text-left text-5xl font-thin tracking-tight sm:text-6xl lg:mt-16 lg:text-8xl"}>
              Ahmed DEM
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial={"hidden"}
              animate={"visible"}
              className={"bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-left text-2xl tracking-tight text-transparent sm:text-3xl"}>
              Ingénieur Full Stack
            </motion.span>
            <motion.p
              variants={container(1)}
              initial={"hidden"}
              animate={"visible"}
              className={"my-2 max-w-xl py-5 text-left leading-relaxed text-neutral-400 tracking-tight whitespace-normal lg:py-6 lg:whitespace-pre-line"}>
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
      </div>
    </Section>
  );
};
