import { FC } from "react";

import './text.scss';

export interface TextProps {
    className?: string;
    text: string;
}

export const Text: FC<TextProps> = ({ className, text }) => {
    return (
        <p className={`zpt-text__main-element ${className}`}>
            { text }
        </p>
    )
}