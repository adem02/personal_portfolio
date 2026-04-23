import aboutImage from "../assets/aboutMe.jpg";
import {ABOUT_TEXT} from "../constants";
import {SectionTitle} from "./UI/SectionTitle.tsx";
import {Section} from "./UI/Section.tsx";
import {motion} from "framer-motion";

export const About = () => {
  return (
    <Section>
      <SectionTitle animation/>
      <div className={"flex flex-wrap"}>
        <motion.div
          initial={{x: -100, opacity: 0}}
          whileInView={{x: 0, opacity: 1}}
          transition={{duration: 0.5}}
          className={"w-full lg:w-1/2 lg:p-8"}>
          <div className={"flex items-center justify-center"}>
            <img className={"rounded-2xl"} src={`${aboutImage}`} alt={"about"}/>
          </div>
        </motion.div>
        <motion.div
          initial={{x: 100, opacity: 0}}
          whileInView={{x: 0, opacity: 1}}
          transition={{duration: 0.5}}
          className={"w-full lg:w-1/2"}
        >
          <div className={"flex justify-center lg:justify-start"}>
            <p className={"my-2 max-w-xl py-6 tracking-tighter whitespace-pre-line"}>{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
