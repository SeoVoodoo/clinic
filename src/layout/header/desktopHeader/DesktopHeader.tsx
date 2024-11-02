import React from 'react';
import { css, styled } from 'styled-components';
import { Container } from '../../../components/Container';
import { StyledBtn, StyledCallbackBtn } from '../../../components/StyledBtn';
import { Logo } from '../../../components/logo/Logo';
import { Counter } from '../../../components/counter/Counter';
import { Search } from '../../../components/search/Search';
import { ContactBox } from '../../../components/contact_box/ContactBox';
import { SocialList } from '../../../components/social/SocialList';
import { VisuallyImpairedBtn } from '../VisuallyImpairedBtn';
import { DesktopMenu } from './desktopMenu/DesktopMenu';
import { VisuallyImpairedPanel } from '../VisuallyImpairedPanel';
import { BurgerButton } from '../../../components/BurgerButton';
import { initialStateSidebarType } from '../../../redux/sidebarReducer';
import { MenuPopup } from '../MenuPopup';
// import { Route, Routes } from 'react-router-dom';
// import { Prices } from '../../pages/main/Prices';
// import { Doctors } from '../../pages/main/Doctors';
// import { Timetable } from '../../pages/main/Timetable';
// import { Eco } from '../../pages/main/Eco';
// import { Faq } from '../../pages/main/Faq';
// import { Contacts } from '../../pages/main/Contacts';


type DesktopHeaderPropsType = {
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

//const initialState = {show: false, translateY: "-58px"}

export const DesktopHeader: React.FC<DesktopHeaderPropsType> = (props: DesktopHeaderPropsType) => {
    
    return (
        <StyledDesktopHeader>
            <VisuallyImpairedPanel 
                handleToggleTheme={props.handleToggleTheme} 
                handleFontSize={props.handleFontSize}
                breakpoint={props.breakpoint}
                windowWidth={props.windowWidth}
            />            
            <TopLevel>
                <Container>
                        <VisuallyImpairedBtn 
                            handleVisuallyImpairedPanel={props.handleVisuallyImpairedPanel}
                            isShowVisuallyImpairedPanel={props.visuallyImpairedPanel.show} 
                            breakpoint={props.breakpoint}
                            windowWidth={props.windowWidth}                           
                        />
                        <WrapBtn>
                            <StyledBtn onClick={() => props.handleToggleModalWindow("3ndfl")}>
                                Возврат 13%
                            </StyledBtn>                            
                            <StyledBtn onClick={() => props.handleToggleModalWindow("record")}>
                                Запись на прием
                            </StyledBtn>
                            <StyledCallbackBtn onClick={() => props.handleToggleModalWindow("callback")}>
                                {props.windowWidth > 992 ? "Заказать обратный звонок" : "Заказать звонок"}                                
                            </StyledCallbackBtn>
                            <BurgerButton handleBurgerBtnClick={props.handleBurgerBtnClick} />
                            <MenuPopup 
                                isOpen={props.isOpenMenu}
                                handleCloseModalWindowMenu={props.handleCloseModalWindowMenu}
                                counter={props.counter}
                                handleToggleModalWindow={props.handleToggleModalWindow}
                                sidebar={props.sidebar}
                                isActiveId={props.isActiveId}
                                setIsActiveId={props.setIsActiveId}
                            />                                
                        </WrapBtn>
                </Container>
            </TopLevel>
            <MiddleLevel fontSize={props.fontSize} >
                <Container>
                    <Logo head/> 
                    <Counter counter={props.counter} fontSize={props.fontSize} />
                    <Search windowWidth={props.windowWidth} />
                    <SocialList 
                        themeName={props.themeName} 
                        socials={props.socials} 
                        width={props.windowWidth > 992 ? "40" : "30"} 
                        height={props.windowWidth > 992 ? "40" : "30"}
                        fontSize={props.fontSize}
                    />
                    <ContactBox themeName={props.themeName} contacts={props.contacts} windowWidth={props.windowWidth} />
                </Container>
            </MiddleLevel>
            <BottomLevel>
                <Container>
                    <DesktopMenu 
                        mainMenu={props.mainMenu} 
                        subMenu={props.subMenu}
                        handleToggleSidebar={props.handleToggleSidebar}
                    />           
                </Container>
            </BottomLevel>
        </StyledDesktopHeader> 
    );
};

const StyledDesktopHeader = styled.div` 
    
`
const TopLevel = styled.div`
    background-color: ${({theme}) => theme.bgCol.header.top};
    height: 70px; 
    
    ${Container} {
        display: flex;        
        align-items: center;        
    }
`
const WrapBtn = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;    
    gap: 10px;    

    ${StyledBtn} {
        padding: 16px 20px;        
    } 

    ${StyledCallbackBtn} {
        max-width: 312px;
        width: 100%;
        padding: 16px 20px;        
    }

    button:last-of-type {
        margin-left: 10px;
    }
    
    @media ${({theme}) => theme.media.lg992} {
        ${StyledBtn} {
            padding: 14px 16px;                    
        }

        ${StyledCallbackBtn} {           
            padding: 14px 16px;                  
        }
    }
`
const MiddleLevel = styled.div<{fontSize:number}>`
    background-color: ${({theme}) => theme.bgCol.header.default};
    height: 182px;
    
    ${Container} {
        display: grid; 
        grid-template-columns: minmax(164px, 198px) 1fr auto;
        grid-template-rows: repeat(4, minmax(20px, auto));
        grid-template-areas:    
            "logo counter_children social" 
            "logo counter_children contact"  
            "logo search contact"
            "logo search contact";
        align-items: center;
    }

    @media ${({theme}) => theme.media.lg992} {
        ${props => props.fontSize > 14 && css<{fontSize:number}>`    
            ${Container} {
                //grid-template-columns: minmax(164px, 198px) 1fr;
                grid-template-rows: repeat(3, minmax(20px, auto));
                grid-template-areas:    
                    "logo social contact" 
                    "logo search contact"  
                    "logo search contact";
            }
        `}        
    }
`
const BottomLevel = styled.div`
    background-color: ${({theme}) => theme.bgCol.header.bottom};    
`
