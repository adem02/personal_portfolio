import React from "react";

type SectionContainerProps = {
    children: React.ReactNode;
    className?: string;
};

export const Section = ({className = "border-b border-neutral-900 pb-4", ...props}: SectionContainerProps) => {
    return (
        <div className={className}>
            {props.children}
        </div>
    );
};
