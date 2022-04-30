import React from "react";
import './button.scss';

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
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => {}
}

export const Button: React.FC<ButtonProps> = ({ 
    text, 
    disabled,
    role = 'primary',
    size = 'medium',
    onClick
}) => (
    <button 
        onClick={onClick} 
        className={`zpt-button__main-element ${BUTTON_ROLE_CLASS_NAMES[role]} ${BUTTON_SIZE_CLASS_NAMES[size]}`}
        disabled={disabled}
    >
        {text}
    </button>
)
