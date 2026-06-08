import React from "react";
import {motion} from "framer-motion";

type SectionTitleProps = {
  title?: string;
  className?: string;
  children?: React.ReactNode;
  animation?: boolean;
};

export const SectionTitle = ({className = "my-14 text-center text-3xl sm:my-16 sm:text-4xl", title = "", ...props}: SectionTitleProps) => {
  if (props.animation) {
    return (
      <motion.h2
        initial={{y: -100, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5}}
        className={className}
      >
        {title} {props.children}
      </motion.h2>
    );
  }

  return (
    <h2 className={className}>
      {title} {props.children}
    </h2>
  );
};
