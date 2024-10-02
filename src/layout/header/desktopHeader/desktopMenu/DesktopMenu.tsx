import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { useTheme } from "styled-components";
import { Icon } from '../../../../components/icon/Icon';



type MenuPropsType = {
    mainMenu: Array<{ancor:string, path:string}>
    subMenu: Array<{ancor:string, path:string}>
    handleToggleSidebar:(e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
}
export const DesktopMenu: React.FC<MenuPropsType> = (props: MenuPropsType) => { 
    
    const theme = useTheme();
    
    const activeLinkMenu = theme.color.activeLinkMenu;
    const defaultLinkMenu = theme.color.defaultLinkMenu; 

    

    const subMenuLinksElements = props.subMenu.map((obj, index) => {
        return (
            <SabMenuItem key={index}>
                <NavLink 
                    to={`/${obj.path}`}
                >
                    {obj.ancor}
                </NavLink>
            </SabMenuItem>
        );
    });

    const menuLinksElements = props.mainMenu.map((obj, index) => {

        if (index === 0) {
            return (
                <DesktopMenuItem key={index}>
                    <NavLink 
                        to={`${obj.path}`}
                        onClick={props.handleToggleSidebar}
                    >
                        <Icon 
                            id="burgermenu"
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24"
                            stroke={theme.color.firstLinkMenu}
                        />
                        {obj.ancor}
                    </NavLink>
                </DesktopMenuItem>
            )    
        }

        if (index === 6) {
            return (
                <DesktopMenuItem key={index}>
                    <NavLink to={`/#`}>
                        {obj.ancor}
                            <SabMenu>
                                {subMenuLinksElements}
                            </SabMenu>
                    </NavLink>
                </DesktopMenuItem>
            );
        }

        else {
            return (
                <DesktopMenuItem key={index}>
                    <NavLink 
                        to={`/${obj.path}`}
                        style={({ isActive, isPending }) => {
                            return {                                                      
                                color: isActive ? activeLinkMenu : defaultLinkMenu                        
                            };
                        }}    
                    >
                        {obj.ancor}
                    </NavLink>
                </DesktopMenuItem>
            );
        }
    })

    return (
        <StyledDesktopMenu>
            <DesktopMenuList>
                {menuLinksElements}
            </DesktopMenuList>
        </StyledDesktopMenu>
    );
};

const StyledDesktopMenu = styled.nav` 
    @media ${({theme}) => theme.media.lg992}{
        display: none;
    }
    
`
const DesktopMenuList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 16px;
    min-height: 64px;
    list-style: none;
    
    & > li:first-child a { 
        display: flex;
        align-items: center;
        gap: 10px;
        
        height: 54px;       
        padding: 12px 20px;
        border-radius: 10px;
        text-decoration: none;
        background-color: ${({theme}) => theme.bgCol.firstLinkMenu};
        color: ${({theme}) => theme.color.firstLinkMenu} !important;               
    }

    
    & > li:first-child a:hover {
        box-shadow: ${({theme}) => theme.color.firstLinkMenu} 0px 0px 10px 2px inset;
    }

    & > li:nth-child(7) a {        
        position: relative;
        display: inline-block;
        padding: 22.5px 5px;                
    }
`

const DesktopMenuItem = styled.li`

    a {
        font-size: 1.1rem;
        font-weight: 700;
        text-decoration: none;
        color: ${({theme}) => theme.color.defaultLinkMenu};
        padding: 6px 0; 
    }

    a::after {
        content: "";
        display: block;        
        height: 1.25px;
        background-color: ${({theme}) => theme.bgCol.header.menu.textDecorationLink};
        transform: scale(0);
        transition: transform 0.4s;
    }

    
    &:nth-child(7):hover ul {
        opacity: 1;
        transform: scale(1);
    } 

    &:not(:nth-child(7)) a:hover::after {
        transform: scale(1);  
    }
`

const SabMenu = styled.ul`
    position: absolute; 
    
    list-style: none;
    width: 178px;    
    background-color: ${({theme}) => theme.bgCol.header.menu.submenu}; 
    padding: 15px;
    border-radius: 10px;
    top: 64.5px;
    left: -58px;
    z-index: 10;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 6px;    
    
    opacity: 0;
    transform: scaleY(0);
    transform-origin: 0 0;
    transition: .5s ease-in-out;


    &::before {
        position: absolute;
        left: 50%;
        top: -2px;
        content: '';
        display: block;
        width: 15px;
        height: 15px;
        background-color: ${({theme}) => theme.bgCol.header.bottom};
        transform: rotate(45deg) translateX(-50%);
        /* margin: 0 auto; 
        margin-top: -22px; */
    }
`

const SabMenuItem = styled.li`
    

    & > a {
        font-size: 1rem;
        font-weight: 500;
        line-height: 17px;
        color: ${({theme}) => theme.color.defaultText};
        padding: 4px 0 !important;        
    }

    & > a::after {
        content: "";
        display: block;               
        /* height: 1.25px; */
        background-color: ${({theme}) => theme.color.defaultText};
        transform: scale(0);
        transition: transform 0.4s;
    }

    & > a:hover::after {
        transform: scale(1);  
    }   

`



// const IconWrap = styled.div`
//     position: absolute;
//     width: 24px;
//     height: 24px;
//     left: 20px;
//     top: 50%;
//     transform: translateY(-50%); 
//     z-index: 4;  
// `




// switch (index) {
//     case 0: (<DesktopMenuItem key={index}>
//                 <NavLink 
//                 to={`/${obj.path}`}
//                 >
//                     <Icon 
//                         id="burgermenu"
//                         width="24" 
//                         height="24" 
//                         viewBox="0 0 24 24"
//                         stroke="white"
//                     />
//                     {obj.ancor}
//                 </NavLink>
//             </DesktopMenuItem>);
//             break;

//     case 6: (<DesktopMenuItem key={index}>
//                 <NavLink 
//                     to={`/${obj.path}`}
//                     onMouseEnter={toggleHover} 
//                     onMouseLeave={toggleHover}
//                 >
//                     {obj.ancor}
//                     {isHover && 
//                         <SabMenu>

//                         </SabMenu>}
//                 </NavLink>
//             </DesktopMenuItem>); 
//             break;
//     default: (<DesktopMenuItem key={index}>
//                 <NavLink 
//                     to={`/${obj.path}`}
//                     style={({ isActive, isPending }) => {
//                         return {                                                      
//                             color: isActive ? activeLinkMenu : defaultLinkMenu                        
//                         };
//                     }}    
//                 >
//                     {obj.ancor}
//                 </NavLink>
//             </DesktopMenuItem>);       
//  }}

                    

                                 