import styled from 'styled-components';
import { Colors, Fonts } from '../../../environment';

interface BaseButtonProps {
    variant: 'primary' | 'default'
}

export const BaseButton = styled.button<BaseButtonProps>`
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 19px;
    font-family: ${Fonts.roboto};
    color: ${props => props.variant === 'default' ? Colors.primaryDark : Colors.white};
    background-color: ${props => props.variant === 'default' ? Colors.light : Colors.blue};
    border: 1px solid #CFD2D9;
    border-radius: 4px;
    outline: none;
    padding: 10px 0;
    cursor: pointer;
    min-width: 150px;
`;