import {SectionTitle} from "./UI/SectionTitle.tsx";
import {Section} from "./UI/Section.tsx";
import {TECHICONS} from "../constants";
import {motion, Variants} from "framer-motion";


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
            <SectionTitle title={"Technologies"} animation />
            <motion.div
                whileInView={{x: 0, opacity: 1}}
                initial={{x: -100, opacity: 0}}
                transition={{duration: 1.5}}
                className={"flex flex-wrap items-center justify-center gap-4"}>
                {
                    TECHICONS.map((techIcon, index) => (
                            <motion.div
                                key={index}
                                variants={iconVariants(getRandomDuration())}
                                initial={"initial"}
                                animate={"animate"}
                                className={"rounded-2xl border-4 border-neutral-800 p-4"}>
                                <techIcon.icon className={`text-7xl ${techIcon.color}`}/>
                            </motion.div>
                    ))
                }
            </motion.div>
        </Section>
    );
};
