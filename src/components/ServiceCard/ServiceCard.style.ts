import styled from 'styled-components';
import { Colors, Fonts } from '../../environment';
import { Input } from '../ui';
import { Button } from '../ui/Button';

export const ServiceCardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 24px 32px;
    border: 1px solid #E2E5EC;
    border-radius: 6px;
    margin-bottom: 24px;
    cursor: pointer;
`;

export const CardInfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const CardTitle = styled.h2`
    margin-bottom: 5px;
    font-size: 29px;
    font-weight: 300;
    color: ${Colors.black};
    font-family: ${Fonts.roboto};
`;

export const CardDescription = styled.p`
    font-size: 15px;
    color: ${Colors.placeholder};
    font-family: ${Fonts.roboto};
`;

export const PromoCodeInput = styled(Input)`
    margin-right: 24px;
`;

export const ToggleActiveButton = styled(Button)`
    width: 300px;
`;