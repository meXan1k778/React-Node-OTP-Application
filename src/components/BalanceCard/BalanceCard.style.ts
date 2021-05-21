import styled from 'styled-components';
import { Colors, Fonts } from '../../environment';

export const BalanceCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 24px;
`;

export const CardLabel = styled.p`
    font-size: 13px;
    margin-bottom: 1px;
    color: ${Colors.placeholder};
    font-family: ${Fonts.roboto};

`;

export const CardValue = styled.p`
    font-size: 19px;
    color: ${Colors.primaryDark};
    font-family: ${Fonts.rubik};
`;