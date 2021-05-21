import React from 'react';

import { BaseButton } from './Button.style';

interface ButtonProps {
    className?: string;
    title: string;
    onClick: () => void;
    variant?: 'primary' | 'default';
}

export const Button = ({className, title, onClick, variant = 'default'}: ButtonProps) => {
    return (
        <BaseButton
            className={className}
            onClick={onClick}
            variant={variant}
        >
            {title}
        </BaseButton>
    )
}