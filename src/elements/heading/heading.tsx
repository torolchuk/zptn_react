import React, { FC } from "react";

import './heading.scss';

type HeadingTypeProp = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h5';
type HeadingTypeConfig = {
    className?: string;
}
type HeadingTypeInstruction = (children: React.ReactNode, config: HeadingTypeConfig) => React.ReactElement;

const composeClassName = (type: string, className?: string): string => `zpt-heading__wrapper zpt-heading__wrapper__${type} ${className}`;

const HEADING_TYPE_INSTRUCTIONS: Record<HeadingTypeProp, HeadingTypeInstruction> = {
    'h1': (children, { className }) => (<h1 className={composeClassName('h1', className)}>{children}</h1>),
    'h2': (children, { className }) => (<h2 className={composeClassName('h2', className)}>{children}</h2>),
    'h3': (children, { className }) => (<h3 className={composeClassName('h3', className)}>{children}</h3>),
    'h4': (children, { className }) => (<h4 className={composeClassName('h4', className)}>{children}</h4>),
    'h5': (children, { className }) => (<h5 className={composeClassName('h5', className)}>{children}</h5>),
}

export interface HeadingProps {
    text: string;
    className?: string;
    type?: HeadingTypeProp;
}

export const Heading: FC<HeadingProps> = ({ text, type = 'h1', className = '' }) => {
    const headingRenderer = HEADING_TYPE_INSTRUCTIONS[type];
    return (
        headingRenderer(<span>{ text }</span>, { className })
    );
}