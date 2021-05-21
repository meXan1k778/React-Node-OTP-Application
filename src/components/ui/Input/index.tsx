import React from 'react';

import { InputContainer, BaseInput, InputLabel, RightIcon } from './Input.style';

interface InputProps {
    className?: string;
    label?: string;
    placeholder?: string;
    value: string;
    name?: string;
    type?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: () => void;
    readOnly?: boolean;
    rightIcon?: React.ReactNode;
    onRightIconClick?: () => void;
}

export const Input = ({
    className, 
    label, 
    placeholder,
    value, 
    name,
    type = 'text',
    onChange,
    onClick,
    readOnly = false,
    rightIcon,
    onRightIconClick
}: InputProps) => {
    return (
        <InputContainer className={className} onClick={onClick}>
            {label && <InputLabel>{label}</InputLabel>}
            <BaseInput 
                value={value} 
                name={name}
                placeholder={placeholder}
                type={type}
                onChange={onChange}
                readOnly={readOnly}
            />
            {rightIcon && <RightIcon onClick={onRightIconClick}>{rightIcon}</RightIcon>}
        </InputContainer>
    )
}