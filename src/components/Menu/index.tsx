import React from 'react';
import { Colors } from '../../environment';

import { CircleIcon } from '../../environment/icons/Circle';
import {
    MenuContainer,
    MenuItem
} from './Menu.style';


export const Menu = () => {
    return (
        <MenuContainer>
            {
                [1, 2, 3, 4, 5, 6, 7, 8].map((item: number) => (
                    <MenuItem key={`meni-item-${item}`}>
                        <CircleIcon color={item === 7 ? Colors.white : ''} />
                    </MenuItem>
                ))
            }
        </MenuContainer>
    )
}