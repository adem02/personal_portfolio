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
    <Section className={"border-b border-neutral-900 pb-4 lg:mb-35"}>
      <div className={"flex flex-wrap"}>
        <div className={"w-full lg:w-1/2 lg:p-8 sm:w-full"}>
          <div className={"flex justify-center"}>
            <motion.img
              initial={{x: 100, opacity: 0}}
              animate={{x: 0, opacity: 0.4}}
              transition={{delay: 0.5, duration: 1.2}}
              src={`${profilePic}`}
              className="rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
              alt={"Profile picture"}
            />
          </div>
        </div>
        <div className={"w-full lg:w-1/2"}>
          <div className={"flex flex-col items-center lg:items-start"}>
            <motion.h1
              variants={container(0)}
              initial={"hidden"}
              animate={"visible"}
              className={"pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-center"}>
              Ahmed DEM
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial={"hidden"}
              animate={"visible"}
              className={"bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"}>
              Développeur Full Stack
            </motion.span>
            <motion.p
              variants={container(1)}
              initial={"hidden"}
              animate={"visible"}
              className={"my-2 max-w-xl py-6 font-light tracking-tighter whitespace-pre-line"}>
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
      </div>
    </Section>
  );
};
