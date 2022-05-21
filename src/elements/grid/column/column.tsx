import { FC, ReactNode } from "react";
import './column.scss';

type ColumnSizeAsString = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
type ColumnSizeAsNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type ColumnSize = ColumnSizeAsNumber | ColumnSizeAsString;

export interface ColumnProps {
    size?: ColumnSize;
    className?: string;
    children?: ReactNode;
}

export const Column: FC<ColumnProps> = ({ size = 12, className = '', children, }) => {
    const sizeClassName = `zptn-grid__column__s${size}`;
    return (
        <div className={`zptn-grid__column ${sizeClassName} ${className}`}>{children}</div>
    )
}