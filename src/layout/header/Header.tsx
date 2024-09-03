import React, { useState } from 'react';
import { styled } from 'styled-components';

import { MobileHeader } from './mobileHeader/MobileHeader';
//import { WindowSize } from '../../hooks/WindowSize';
import { DesktopHeader } from './desktopHeader/DesktopHeader';
import { initialStateSidebarType } from '../../redux/sidebarReducer';



type HeaderPropsType = {
    mainMenu: Array<{ancor:string, path:string}>
    subMenu: Array<{ancor:string, path:string}>
    counter: {
        boys: number,
        girls: number         
    }    
    contacts: {
        phone1: string
        phone2: string
        email: string
        callback:boolean
    }
    socials: Array<{id:string, link:string}>
    
    handleToggleTheme: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
    handleFontSize: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
    themeName: string
    setThemeName: Function
    //initialFontSize: number
    fontSize: number
    //setFontSize: Function
    visuallyImpairedPanel: {show:boolean, translateY:string}
    handleVisuallyImpairedPanel: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void    
    handleToggleSidebar: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
    handleToggleModalWindow: (windowName:string) => void    
    sidebar: initialStateSidebarType
    windowWidth:number
}


export const Header: React.FC<HeaderPropsType> = (props: HeaderPropsType) => {

    const breakpoint = 767;
    //const windowWidth = WindowSize();
    const [isActiveId, setIsActiveId] = useState(null);
    const [isOpenMenu, setIsOpenNenu] = useState(false);    
    const handleCloseModalWindowMenu = () => {
        setIsOpenNenu(prev => !prev);        
    };
    const handleBurgerBtnClick = () => {
        setIsOpenNenu(prev => !prev);
    } 

    return (
        <StyledHeader>            
            {props.windowWidth > breakpoint 
            ? <DesktopHeader 
                mainMenu={props.mainMenu}
                subMenu={props.subMenu}
                contacts={props.contacts}
                counter={props.counter}
                socials={props.socials}          
                handleToggleTheme={props.handleToggleTheme}
                handleFontSize={props.handleFontSize}
                themeName={props.themeName}
                setThemeName={props.setThemeName}
                //initialFontSize={props.initialFontSize}
                fontSize={props.fontSize}
                //setFontSize={props.setFontSize}
                handleVisuallyImpairedPanel={props.handleVisuallyImpairedPanel}
                visuallyImpairedPanel={props.visuallyImpairedPanel}
                handleToggleSidebar={props.handleToggleSidebar} 
                handleToggleModalWindow={props.handleToggleModalWindow}
                breakpoint={breakpoint}   
                windowWidth={props.windowWidth}
                sidebar={props.sidebar} 
                isActiveId={isActiveId}
                setIsActiveId={setIsActiveId}
                isOpenMenu={isOpenMenu}
                setIsOpenNenu={setIsOpenNenu}
                handleCloseModalWindowMenu={handleCloseModalWindowMenu} 
                handleBurgerBtnClick={handleBurgerBtnClick}            
            /> 
            : <MobileHeader 
                counter={props.counter}
                socials={props.socials} 
                contacts={props.contacts}         
                handleToggleTheme={props.handleToggleTheme}
                handleFontSize={props.handleFontSize}
                themeName={props.themeName}                
                handleVisuallyImpairedPanel={props.handleVisuallyImpairedPanel}
                visuallyImpairedPanel={props.visuallyImpairedPanel}                 
                handleToggleModalWindow={props.handleToggleModalWindow}  
                breakpoint={breakpoint}   
                windowWidth={props.windowWidth}  
                sidebar={props.sidebar}
                isActiveId={isActiveId}
                setIsActiveId={setIsActiveId}  
                isOpenMenu={isOpenMenu}
                setIsOpenNenu={setIsOpenNenu}
                handleCloseModalWindowMenu={handleCloseModalWindowMenu} 
                handleBurgerBtnClick={handleBurgerBtnClick}  
            />}
        </StyledHeader> 
    );
};

const StyledHeader = styled.div` 
    
`

