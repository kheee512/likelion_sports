// src/Sidebar.js
import React from 'react';
import { SidebarWrapper, ListWrapper } from '../styles/SidebarStyles';

const Sidebar = () => {
    return (
    <SidebarWrapper>
        <ul>
        <ListWrapper>Home</ListWrapper>
        <ListWrapper>Events</ListWrapper>
        <ListWrapper>Settings</ListWrapper>
        </ul>
    </SidebarWrapper>
    );
};

export default Sidebar;