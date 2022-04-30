import React, { FC } from "react";

import './heading.scss';

type HeadingTypeProp = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h5';
type HeadingTypeInstruction = (children: React.ReactNode) => React.ReactElement;

const composeClassName = (type: string): string => `zpt-heading__wrapper zpt-heading__wrapper__${type}`;

const HEADING_TYPE_INSTRUCTIONS: Record<HeadingTypeProp, HeadingTypeInstruction> = {
    'h1': (children) => (<h1 className={composeClassName('h1')}>{children}</h1>),
    'h2': (children) => (<h2 className={composeClassName('h2')}>{children}</h2>),
    'h3': (children) => (<h3 className={composeClassName('h3')}>{children}</h3>),
    'h4': (children) => (<h4 className={composeClassName('h4')}>{children}</h4>),
    'h5': (children) => (<h5 className={composeClassName('h5')}>{children}</h5>),
}

export interface HeadingProps {
    text: string;
    type?: HeadingTypeProp;
}

export const Heading: FC<HeadingProps> = ({ text, type = 'h1' }) => {
    const headingRenderer = HEADING_TYPE_INSTRUCTIONS[type];
    return (
        headingRenderer(<span>{ text }</span>)
    );
}