import {SectionTitle} from "./UI/SectionTitle.tsx";
import {CONTACT} from "../constants";
import {Section} from "./UI/Section.tsx";
import {motion} from "framer-motion";

export const Contact = () => {
  return (
    <Section>
      <SectionTitle title={"Contact"} className={"my-10 text-center text-4xl"} animation/>
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
        <motion.p
          initial={{x: -100, opacity: 0}}
          whileInView={{x: 0, opacity: 1}}
          transition={{duration: 1}}
          className={"underline"}
        >
          {CONTACT.email}
        </motion.p>
      </div>
      <div className={"text-center mt-6 text-sm text-gray-500"}>
        <p>&copy; {new Date().getFullYear()}. Tous droits réservés.</p>
      </div>
    </Section>
  );
};
