import React, { useEffect, useState } from 'react';
import { css, styled } from 'styled-components';
import { Container } from '../../components/Container';
import { StyledBtn, StyledCallbackBtn } from '../../components/StyledBtn';
import { Logo } from '../../components/logo/Logo';
import { Counter } from '../../components/counter/Counter';
import { Search } from '../../components/search/Search';

import { SocialList } from '../../components/social/SocialList';
import { VisuallyImpairedBtn } from './VisuallyImpairedBtn';

import { VisuallyImpairedPanel } from './VisuallyImpairedPanel';
import { MobileMenu } from './headerMenu/mobileMenu/MobileMenu';
// import { Route, Routes } from 'react-router-dom';
// import { Prices } from '../../pages/main/Prices';
// import { Doctors } from '../../pages/main/Doctors';
// import { Timetable } from '../../pages/main/Timetable';
// import { Eco } from '../../pages/main/Eco';
// import { Faq } from '../../pages/main/Faq';
// import { Contacts } from '../../pages/main/Contacts';


type MobileHeaderPropsType = {
    // mainMenu: Array<{ancor:string, path:string}>
    // subMenu: Array<{ancor:string, path:string}>
    // counter: {
    //     boys: number,
    //     girls: number         
    // }    
    // contacts: {
    //     phone1: string
    //     phone2: string
    //     email: string
    //     callback:boolean
    // }
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


export const MobileHeader: React.FC<MobileHeaderPropsType> = (props: MobileHeaderPropsType) => {

    const [isOpenMenu, setIsOpenNenu] = useState(false);

    const handleBurgerBtnClick = () => {
        setIsOpenNenu(!isOpenMenu);
    }

    return (
        <StyledMobileHeader>
            <VisuallyImpairedPanel 
                handleToggleTheme={props.handleToggleTheme} 
                handleFontSize={props.handleFontSize}
            />
            <LevelTop>
                <Container>  
                    <VisuallyImpairedBtn 
                        handleVisuallyImpairedPanel={props.handleVisuallyImpairedPanel}
                        isShowVisuallyImpairedPanel={props.visuallyImpairedPanel.show}                            
                        />                  
                    <Search />
                    <SocialList themeName={props.themeName} socials={props.socials}/>
                    <button></button>
                </Container>
            </LevelTop>
            <LevelBottom>
                <Logo />
                <BurgerButton isOpen={isOpenMenu} onClick={handleBurgerBtnClick}>
                    <span></span>
                </BurgerButton>
                <MobileMenuPopup isOpen={isOpenMenu} >
                    <MobileMenu />
                </MobileMenuPopup>
            </LevelBottom>
        </StyledMobileHeader> 
    );
};


const StyledMobileHeader = styled.header` 
    display: flex;
    flex-direction: column;    
`

const LevelTop = styled.div` 
    background-color: green;
    height: 46px;

    ${Container} {
        display: flex;        
        align-items: center;        
    }
    
`
const LevelBottom = styled.div`
    display: flex; 
    justify-content: space-between;       
    align-items: center;    
    
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    width: 45px;
    height: 45px;
    top: 10px;
    left: calc(50% - 22.5px);
    z-index: 9999999;
    cursor: pointer;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${({theme}) => theme.color.defaultText};
        position: absolute;    

        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: rgba(255, 255, 255, 0);    
        `}

        &::before{
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${({theme}) => theme.color.defaultText};
            transform: translateY(-10px);
            position: absolute;

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(-45deg) translateY(0);   
            `}

        }
        &::after{
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${({theme}) => theme.color.defaultText};
            transform: translateY(8px);
            position: absolute;

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(45deg) translateY(0);
                width: 36px;    
            `}
        }
    }
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: ${({theme}) => theme.bgCol.default};
    /* opacity: 0.9; */    
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);    
    transition: transform .8s ease-in-out;    
    
    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        transition: gap .5s ease-in-out; 
    }

    ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: translateY(0);

        ul {
            gap: 35px;
        }
    `};
`

