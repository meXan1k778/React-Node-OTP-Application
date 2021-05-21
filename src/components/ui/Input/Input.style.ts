import styled from 'styled-components';
import { Colors, Fonts } from '../../../environment';

export const InputContainer = styled.label`
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const InputLabel = styled.span`
    font-size: 11px;
    color: ${Colors.placeholder};
    font-family: ${Fonts.roboto};
    margin-bottom: 7px;
`;

interface BaseInputProps {

}

export const BaseInput = styled.input<BaseInputProps>`
    height: 48px;
    border: 1px solid ${Colors.placeholder};
    border-radius: 4px;
    outline: none;
    font-size: 15px;
    color: ${Colors.primaryDark};
    padding: 0 17px;


    &:focus {
        border: 1px solid ${Colors.blue};
    }
`;

export const RightIcon = styled.div`
    position: absolute;
    right: 5%;
    top: 55%;
    cursor: pointer;
`;