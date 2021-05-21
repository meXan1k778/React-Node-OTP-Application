import React from 'react';

import { Logo } from '../Logo';
import { Menu } from '../Menu';
import {
    SidebarContainer
} from './Sidebar.style';


export const Sidebar = () => {
    return (
        <SidebarContainer>
            <Logo />
            <Menu />
        </SidebarContainer>
    )
}