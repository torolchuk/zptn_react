import { FC } from "react";

import './card.scss';

export interface CardProps {
    className?: string;
    children?: React.ReactNode;
}

export const Card: FC<CardProps> = ({ children }) => {
    return (
        <div className="zpt-card__wrapper">
            { children }
        </div>
    )
}