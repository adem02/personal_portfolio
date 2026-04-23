import {FORMATIONS} from "../constants";
import {SectionTitle} from "./UI/SectionTitle.tsx";
import {Section} from "./UI/Section.tsx";
import {motion} from "framer-motion";

export const Formation = () => {
  return (
    <Section>
      <SectionTitle title={"Formations"} animation/>
      <div>
        {
          FORMATIONS.map((formation, index) => (
            <div key={index} className={"mb-8 flex flex-wrap lg:justify-center"}>
              <motion.div
                initial={{x: -100, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{duration: 1}}
                className={"w-full lg:w-1/4"}
              >
                <p className={"mb-2 text-sm text-neutral-400"}>{formation.year}</p>
              </motion.div>
              <motion.div
                initial={{x: 100, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{duration: 1}}
                className={"w-full max-w-xl lg:w-3/4"}
              >
                <h6 className={"mb-2 font-semibold"}>{formation.grade}</h6>
                <h5 className={"text-sm text-purple-100"}>{formation.school}</h5>
                <p className={"mb-4 text-neutral-400"}>{formation.description}</p>
              </motion.div>
            </div>
          ))
        }
      </div>
    </Section>
  );
};
