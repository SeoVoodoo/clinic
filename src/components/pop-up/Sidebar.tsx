import React, { useState } from 'react';
import { styled } from 'styled-components';
import { StyledCloseBtn } from '../StyledBtn';

type SidebarPropsType = {
    isOpenSidebar: boolean
    handleToggleSidebar: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void 
}

export const Sidebar: React.FC<SidebarPropsType> = (props: SidebarPropsType) => {

    
    return (
        <StyledPopUpMenu isOpenSidebar={props.isOpenSidebar}>
            <StyledCloseBtn onClick={props.handleToggleSidebar}></StyledCloseBtn>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
            </ul>            
        </StyledPopUpMenu>
    );
};

const StyledPopUpMenu = styled.div<{isOpenSidebar:boolean}>`
    
    width: 386px;
    padding: 40px 40px 0;
    height: 100%;
    overflow: auto;
    background-color: white;
    z-index: 100;
    text-align: right;

    position: fixed;
    top: 0;    
    left: 0;
    transform: ${props => props.isOpenSidebar ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 0.5s;  
    
    
    ul {
        text-align: center;
        margin-top: 100px;
    }
`