import React from 'react';

import { TopBarContainer } from './TopBar.style';
import { BalanceCard } from '../BalanceCard';

export const TopBar = () => {
    return (
        <TopBarContainer>
            <BalanceCard label={'Balance'} value={213920} />
            <BalanceCard label={'Payout'} value={159465} />
        </TopBarContainer>
    )
}