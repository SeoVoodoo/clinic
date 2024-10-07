import React, { useEffect, useState } from 'react';
import { css, styled, useTheme } from 'styled-components';
import { Container } from '../../../components/Container';
import { Logo } from '../../../components/logo/Logo';
import { Search } from '../../../components/search/Search';
import { SocialList } from '../../../components/social/SocialList';
import { VisuallyImpairedBtn } from '../VisuallyImpairedBtn';
import { VisuallyImpairedPanel } from '../VisuallyImpairedPanel';
import { Icon } from '../../../components/icon/Icon';
import { initialStateSidebarType } from '../../../redux/sidebarReducer';
import { MobileContactPopup } from './mobilePopup/MobileContactPopup';
import { MenuPopup } from '../MenuPopup';
import { BurgerButton } from '../../../components/BurgerButton';
import { Counter } from '../../../components/counter/Counter';
import { Overlay } from '../../../components/Overlay';


type MobileHeaderPropsType = {    
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
    visuallyImpairedPanel: {show:boolean, translateY:string}
    handleVisuallyImpairedPanel: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void    
    handleToggleModalWindow: (windowName:string) => void  
    windowWidth:number
    breakpoint:number 
    sidebar: initialStateSidebarType 
    isActiveId:string | null
    setIsActiveId: Function
    isOpenMenu:boolean
    setIsOpenNenu: Function
    handleCloseModalWindowMenu: () => void
    handleBurgerBtnClick: () => void
}


export const MobileHeader: React.FC<MobileHeaderPropsType> = (props: MobileHeaderPropsType) => {
    const theme = useTheme();    
    const [isOpenContact, setIsOpenContact] = useState(false);
    
    const handleContactBtnClick = () => {
        setIsOpenContact(prev => !prev);
    }
    const handleCloseMobileModalWindowContact = () => {
        setIsOpenContact(prev => !prev);
    }    
    useEffect(() => {
        
        if(isOpenContact) {
            document.body.style.overflowY = "hidden";            
        }
        return () => {
            document.body.style.overflowY = "unset";
        }        
     }, [isOpenContact]);


    return (
        <StyledMobileHeader>
            <VisuallyImpairedPanel 
                handleToggleTheme={props.handleToggleTheme} 
                handleFontSize={props.handleFontSize}
                breakpoint={props.breakpoint}
                windowWidth={props.windowWidth}
            />
            <LevelTop>
                <Container>  
                    <VisuallyImpairedBtn 
                        handleVisuallyImpairedPanel={props.handleVisuallyImpairedPanel}
                        isShowVisuallyImpairedPanel={props.visuallyImpairedPanel.show} 
                        breakpoint={props.breakpoint}
                        windowWidth={props.windowWidth}                           
                    />                  
                    <Search windowWidth={props.windowWidth} />
                    <SocialList 
                        themeName={props.themeName} 
                        socials={props.socials} 
                        width={props.windowWidth > 576 ? "30" : "24"}
                        height={props.windowWidth > 576 ? "30" : "24"} 
                    />
                    <Button onClick={handleContactBtnClick}>
                        <Icon 
                            id="phone"
                            width="18"
                            height="18"
                            viewBox="0 0 20 20" 
                            fill={theme.color.mobileFillPhoneBtn}               
                        />
                    </Button>
                    {props.windowWidth > 576 && (<BurgerButton handleBurgerBtnClick={props.handleBurgerBtnClick} />)}
                    <MobileContactPopup 
                        isOpen={isOpenContact} 
                        handleToggleModalWindow={props.handleToggleModalWindow}
                        handleCloseMobileModalWindowContact={handleCloseMobileModalWindowContact}
                        themeName={props.themeName}
                        contacts={props.contacts}
                        socials={props.socials}
                        windowWidth={props.windowWidth}
                    />                    
                </Container>
            </LevelTop>
            <LevelBottom>
                <Container> 
                    <Logo head />                    
                    {props.windowWidth > 576 && (<Counter counter={props.counter} />)}
                    {props.windowWidth <= 576 && (<BurgerButton handleBurgerBtnClick={props.handleBurgerBtnClick} />)}                                        
                </Container> 
                {props.isOpenMenu && <Overlay />}               
                 <MenuPopup 
                    isOpen={props.isOpenMenu}
                    handleCloseModalWindowMenu={props.handleCloseModalWindowMenu}
                    counter={props.counter}
                    handleToggleModalWindow={props.handleToggleModalWindow}
                    sidebar={props.sidebar}
                    isActiveId={props.isActiveId}
                    setIsActiveId={props.setIsActiveId}
                 />
            </LevelBottom>
        </StyledMobileHeader> 
    );
};


const StyledMobileHeader = styled.header` 
    display: flex;
    flex-direction: column;   
`

const LevelTop = styled.div` 
    background-color: ${({theme}) => theme.bgCol.header.mobileTop};
    height: 46px;
    overflow: hidden;

    ${Container} {
        display: flex;        
        align-items: center;
        justify-content: space-between; 
        gap: 14px;  
    }    
`
const Button = styled.button`
    width: 40px;    
    height: 26px;
    background-color: ${({theme}) => theme.bgCol.btn.mobileFhone};    
    border: none;
    border-radius: 8px;
    flex-shrink: 0;
`
const LevelBottom = styled.div`
    padding: 10px 0;

    ${Container} {
        display: flex; 
        justify-content: space-between;       
        align-items: center;        
    }       
`