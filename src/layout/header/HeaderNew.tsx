import React from 'react';
import { styled } from 'styled-components';

import { MobileHeader } from './MobileHeader';
import { WindowSize } from '../../hooks/WindowSize';
import { DesktopHeader } from './DesktopHeader';



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
    initialFontSize: number
    setFontSize: Function
    visuallyImpairedPanel: {show:boolean, translateY:string}
    handleVisuallyImpairedPanel: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void    
    handleToggleSidebar: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
    handleToggleModalWindow: (windowName:string) => void    
}


export const HeaderNew: React.FC<HeaderPropsType> = (props: HeaderPropsType) => {

    const breakpoint = 576;
    const WindowWidth = WindowSize();
    return (
        <StyledHeader>            
            {WindowWidth > breakpoint 
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
                initialFontSize={props.initialFontSize}
                setFontSize={props.setFontSize}
                handleVisuallyImpairedPanel={props.handleVisuallyImpairedPanel}
                visuallyImpairedPanel={props.visuallyImpairedPanel}
                handleToggleSidebar={props.handleToggleSidebar} 
                handleToggleModalWindow={props.handleToggleModalWindow}
            
            /> 
            : <MobileHeader 
                socials={props.socials}          
                handleToggleTheme={props.handleToggleTheme}
                handleFontSize={props.handleFontSize}
                themeName={props.themeName}
                setThemeName={props.setThemeName}
                initialFontSize={props.initialFontSize}
                setFontSize={props.setFontSize}
                handleVisuallyImpairedPanel={props.handleVisuallyImpairedPanel}
                visuallyImpairedPanel={props.visuallyImpairedPanel}
                handleToggleSidebar={props.handleToggleSidebar} 
                handleToggleModalWindow={props.handleToggleModalWindow}            
            />}
        </StyledHeader> 
    );
};

const StyledHeader = styled.div` 
    
`

