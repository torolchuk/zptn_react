import React from "react";
import { composeClassName } from "../../utils/compose-class-name/compose-class-name";
import './button.scss';
import { buttonTestid as testids } from './button.testid';

type ButtonRole = 'primary' | 'secondary'; 
const BUTTON_ROLE_CLASS_NAMES: Record<ButtonRole, string> = {
    'primary': 'zpt-button__main-element__primary',
    'secondary': 'zpt-button__main-element__secondary',
}

type ButtonSize = 'small' | 'medium' | 'large'; 
const BUTTON_SIZE_CLASS_NAMES: Record<ButtonSize, string> = {
    'small': 'zpt-button__main-element__small',
    'medium': 'zpt-button__main-element__medium',
    'large': 'zpt-button__main-element__large',
}

export interface ButtonProps {
    text: string;
    disabled?: boolean;
    role?: ButtonRole;
    size?: ButtonSize;
    fullWidth?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    testid?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
    text, 
    disabled,
    role = 'primary',
    size = 'medium',
    fullWidth,
    onClick,
    testid,
}) => (
    <button 
        onClick={onClick} 
        className={`zpt-button__main-element ${BUTTON_ROLE_CLASS_NAMES[role]} ${BUTTON_SIZE_CLASS_NAMES[size]} ${fullWidth ? 'zpt-button__main-element__full-width' : ''}`}
        disabled={disabled}
        data-testid={composeClassName([testid, testids.button()])}
    >
        {text}
    </button>
)
