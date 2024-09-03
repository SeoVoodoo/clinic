import React, { useState } from 'react';
import { styled } from 'styled-components';
// import { StyledCloseBtn } from '../../components/StyledBtn';
import { initialStateSidebarType } from '../../redux/sidebarReducer';
import { TopLevel } from './TopLevel';
import { CloseButton } from '../../components/pop-up/CloseButton';

type SidebarPropsType = {
    isOpenSidebar: boolean
    handleToggleSidebar: () => void
    //handleToggleModalWindow: () => void
    sidebar: initialStateSidebarType
}

export const Sidebar: React.FC<SidebarPropsType> = (props: SidebarPropsType) => {
    const [isActiveId, setIsActiveId] = useState(null);
    
    return (
        <StyledSidebar isOpenSidebar={props.isOpenSidebar}>
                             
            <CloseButton handleToggleSidebar={props.handleToggleSidebar}  top="0" left="274px"/>            
            <Nav> 
                <TopLevel
                    sidebar={props.sidebar}   
                    ids= {props.sidebar.sidebarMenu.entities.topLevelIds.descktop}
                    isActiveId={isActiveId}
                    setIsActiveId={setIsActiveId}
                    descktop
                />            
            </Nav>                        
        </StyledSidebar>
    );
};

const StyledSidebar = styled.div<{isOpenSidebar:boolean}>`
    
    width: 386px;
    padding: 40px;
    height: 100%;
    overflow: auto;
    background-color: ${({theme}) => theme.bgCol.default};
    z-index: 100;
    
    position: fixed;
    top: 0;    
    left: 0;
    transform: ${props => props.isOpenSidebar ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 0.8s;

    /* scrollbar-width: thin;
    scrollbar-color: rgba(193, 193, 193, 1) rgba(227, 227, 227, 1); */

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background-color: rgba(227, 227, 227, 1);
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(193, 193, 193, 1);
        border-radius: 10px;
        border: 2px solid rgba(227, 227, 227, 1);
    }   
    
`

const Nav = styled.nav`    
    margin-top: 50px;    
`