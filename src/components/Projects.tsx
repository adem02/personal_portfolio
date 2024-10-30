import {SectionTitle} from "./UI/SectionTitle.tsx";
import {PROJECTS} from "../constants";
import {Section} from "./UI/Section.tsx";
import {motion} from "framer-motion";

export const Projects = () => {
    return (
        <Section>
            <SectionTitle title={"Projets"} />
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className={"mb-8 flex flex-wrap lg:justify-center"}>
                        <motion.div
                            initial={{x: -100, opacity: 0}}
                            whileInView={{x: 0, opacity: 1}}
                            transition={{duration: 0.5}}
                            className={"w-full lg:w-1/4"}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className={"mb-6 rounded"}
                                width={150}
                                height={150}
                            />
                        </motion.div>
                        <motion.div
                            initial={{x: 100, opacity: 0}}
                            whileInView={{x: 0, opacity: 1}}
                            transition={{duration: 0.5}}
                            className={"w-full max-w-xl lg:w-3/4"}
                        >
                            <h6 className={"mb-2 font-semibold"}>{project.title}</h6>
                            <p className={"mb-4 text-neutral-400"}>{project.description}</p>
                            {project.technologies.map((technology, index) => (
                                <span key={index}
                                      className={"mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"}>
                                    {technology}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
