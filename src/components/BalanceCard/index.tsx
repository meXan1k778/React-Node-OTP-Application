import React from 'react';
import { BalanceCardContainer, CardLabel, CardValue } from './BalanceCard.style';

interface BalanceCardProps {
    label: string;
    value: number;
};


export const BalanceCard = ({label, value}: BalanceCardProps) => {
    return (
        <BalanceCardContainer>
            <CardLabel>{label}</CardLabel>
            <CardValue>{value} $</CardValue>
        </BalanceCardContainer>
    )
}