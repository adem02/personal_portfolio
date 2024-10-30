import {SectionTitle} from "./UI/SectionTitle.tsx";
import {CONTACT} from "../constants";
import {Section} from "./UI/Section.tsx";
import {motion} from "framer-motion";

export const Contact = () => {
    return (
        <Section>
            <SectionTitle title={"Contact"} className={"my-10 text-center text-4xl"} animation />
            <div className={"text-center tracking-tighter"}>
                <motion.p
                    initial={{x: -100, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{duration: 1}}
                    className={"my-4"}
                >
                    {CONTACT.address}
                </motion.p>
                <motion.p
                    initial={{x: 100, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{duration: 1}}
                    className={"my-4"}
                >
                    {CONTACT.phoneNo}
                </motion.p>
                <a href={"#"} className={"border-b"}>{CONTACT.email}</a>
            </div>
        </Section>
    );
};
