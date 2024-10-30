import {EXPERIENCES} from "../constants";
import {SectionTitle} from "./UI/SectionTitle.tsx";
import {Section} from "./UI/Section.tsx";
import {motion} from "framer-motion";

interface ExperienceType {
    year: string;
    role: string;
    company: string;
    description: string;
    technologies: string[];
}

export const Experience = () => {
    return (
        <Section>
            <SectionTitle title={"Experience"} animation />
            <div>
                {
                    (EXPERIENCES as ExperienceType[]).map((experience, index) => (
                        <div key={index} className={"mb-8 flex flex-wrap lg:justify-center"}>
                            <motion.div
                                initial={{x: -100, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                transition={{duration: 1}}
                                className={"w-full lg:w-1/4"}
                            >
                                <p className={"mb-2 text-sm text-neutral-400"}>{experience.year}</p>
                            </motion.div>
                            <motion.div
                                initial={{x: 100, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                transition={{duration: 1}}
                                className={"w-full max-w-xl lg:w-3/4"}
                            >
                                <h6 className={"mb-2 font-semibold"}>{experience.role} -{" "}
                                    <span className={"text-sm text-purple-100"}>{experience.company}</span>
                                </h6>
                                <p className={"mb-4 text-neutral-400"}>{experience.description}</p>
                                {experience.technologies.map((technology, index) => (
                                    <span key={index} className={"mr-2 text-sm bg-neutral-900 px-2 py-1 rounded text-purple-800 font-medium"}>
                                        {technology}
                                    </span>
                                ))}
                            </motion.div>
                        </div>
                    ))
                }
            </div>
        </Section>
    );
};
