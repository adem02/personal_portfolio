import React from "react";
import {motion} from "framer-motion";

type SectionTitleProps = {
    title: string;
    className?: string;
    children?: React.ReactNode;
    animation?: boolean;
};

export const SectionTitle = ({className="my-20 text-center text-4xl", ...props}: SectionTitleProps) => {
    if (props.animation) {
        return (
            <motion.h2
                initial={{y: -100, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.5}}
                className={className}
            >
                {props.title} {props.children}
            </motion.h2>
        );
    }

    return (
        <h2 className={className}>
            {props.title} {props.children}
        </h2>
    );
};
