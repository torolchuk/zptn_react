import { FC, ReactNode } from "react"
import './container.scss';

export interface ContainerProps {
    className?: string;
    children: ReactNode | ReactNode[];
}

export const Container: FC<ContainerProps> = ({ className = '', children }) => {
    return (
        <div className={`zptn-grid__container ${className}`}>{children}</div>
    )
}