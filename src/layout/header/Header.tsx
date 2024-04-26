import React, { useEffect, useState } from 'react';
import { css, styled } from 'styled-components';
import { Container } from '../../components/Container';
import { StyledBtn, StyledCallbackBtn } from '../../components/StyledBtn';
import { Logo } from '../../components/logo/Logo';
import { Counter } from '../../components/counter/Counter';
import { Search } from '../../components/search/Search';
import { ContactBox } from '../../components/contact_box/ContactBox';
import { SocialList } from '../../components/social/SocialList';
import { VisuallyImpairedBtn } from './VisuallyImpairedBtn';
import { DesktopMenu } from './headerMenu/desktopMenu/DesktopMenu';
import { VisuallyImpairedPanel } from './VisuallyImpairedPanel';
// import { Route, Routes } from 'react-router-dom';
// import { Prices } from '../../pages/main/Prices';
// import { Doctors } from '../../pages/main/Doctors';
// import { Timetable } from '../../pages/main/Timetable';
// import { Eco } from '../../pages/main/Eco';
// import { Faq } from '../../pages/main/Faq';
// import { Contacts } from '../../pages/main/Contacts';


type HeaderPropsType = {
    mainMenu: Array<{ancor:string, path:string}>
    subMenu: Array<{ancor:string, path:string}>
    counter: {
        boys: number,
        girls: number         
    }    
    contacts: {
        phone1: string,
        phone2: string,
        email: string
    }
    socials: Array<{id:string, link:string}>
    handleToggleTheme: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
    handleFontSize: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
    themeName: string
    setThemeName: Function
    initialFontSize: number
    setFontSize: Function  
}

const initialState = {show: false, translateY: "-58px"}

export const Header: React.FC<HeaderPropsType> = (props: HeaderPropsType) => {

    const [visuallyImpairedPanel, setVisuallyImpairedPanel] = useState(initialState); 
    
    //window.localStorage.clear();

    const handleVisuallyImpairedPanel = () => {        

        if(!visuallyImpairedPanel.show){
            window.localStorage.setItem("translateY", "0");
            window.localStorage.setItem("show", "true");
            setVisuallyImpairedPanel({
                ...visuallyImpairedPanel,
                show: true,
                translateY: "0"
            });
        }

        if(visuallyImpairedPanel.show) {

            if(props.themeName === "default") {
                window.localStorage.setItem("translateY", "-58px");
                window.localStorage.setItem("show", "false");
                window.localStorage.fontSize = props.initialFontSize;
            }
            else {
                window.localStorage.clear();
                props.setThemeName("default");
            }
            props.setFontSize(props.initialFontSize);
            setVisuallyImpairedPanel({
                ...visuallyImpairedPanel,
                show: false,
                translateY: "-58px"
            });
        }

        // if(props.themeName === "default" && visuallyImpairedPanel.show){
        //     window.localStorage.setItem("translateY", "-58px");
        //     window.localStorage.setItem("show", "false");
        //     window.localStorage.fontSize = props.initialFontSize;

        //     props.setFontSize(props.initialFontSize); 
        //     setVisuallyImpairedPanel({
        //         ...visuallyImpairedPanel,
        //         show: false,
        //         translateY: "-58px"
        //     });           
        // }

        // if(props.themeName !== "default" && visuallyImpairedPanel.show) {             
        //     window.localStorage.clear();
        //     props.setThemeName("default");

        //     props.setFontSize(props.initialFontSize);
        //     setVisuallyImpairedPanel({
        //         ...visuallyImpairedPanel,
        //         show: false,
        //         translateY: "-58px"
        //     });
        // }        
    }

    useEffect(() => { 
        const offset = window.localStorage.getItem('translateY');
        const panel = window.localStorage.getItem('show') === "true" ? true : false;
        offset && setVisuallyImpairedPanel({...visuallyImpairedPanel, translateY: offset, show: panel});
      }, []);
      
    console.log("localStorage", localStorage);
    //console.log("offset", offset);
    

    return (
        <StyledHeader offset={visuallyImpairedPanel.translateY}>
            <VisuallyImpairedPanel 
                handleToggleTheme={props.handleToggleTheme} 
                handleFontSize={props.handleFontSize}
            />
            
            <Top>
                <Container>
                        <VisuallyImpairedBtn 
                            handleVisuallyImpairedPanel={handleVisuallyImpairedPanel}
                            isShowVisuallyImpairedPanel={visuallyImpairedPanel.show}
                            
                        />
                        <WrapBtn>
                            <StyledBtn>Возврат 13%</StyledBtn>
                            <StyledBtn>Запись на прием</StyledBtn>
                            <StyledCallbackBtn>Заказать обратный звонок</StyledCallbackBtn>
                        </WrapBtn>
                </Container>
            </Top>
            <Middle>
                <Container>
                    <Logo /> 
                    <Counter counter={props.counter} />
                    <Search />
                    <SocialList themeName={props.themeName} socials={props.socials}/>
                    <ContactBox themeName={props.themeName} contacts={props.contacts} />
                </Container>
            </Middle>
            <Bottom>
                <Container>
                    <DesktopMenu mainMenu={props.mainMenu} subMenu={props.subMenu}/>           
                </Container>
            </Bottom>
        </StyledHeader> 
    );
};

type StyledHeaderPropsType = {    
    offset:string
}

const StyledHeader = styled.div<StyledHeaderPropsType>` 
    transform: translateY(${props => props.offset}); 
    transition: transform 0.5s ease-in-out;
`

const Top = styled.div`
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
`
const Middle = styled.div`
    background-color: ${({theme}) => theme.bgCol.header.default};
    height: 182px;
    
    ${Container} {
        display: grid; 
        grid-template-columns: 198px 1fr auto;
        grid-template-rows: repeat(4, minmax(20px, auto));
        grid-template-areas:    
            "logo counter_children social" 
            "logo counter_children contact"  
            "logo search contact"
            "logo search contact";
        align-items: center;
    }
    
    
`
const Bottom = styled.div`
    background-color: ${({theme}) => theme.bgCol.header.bottom};    
`