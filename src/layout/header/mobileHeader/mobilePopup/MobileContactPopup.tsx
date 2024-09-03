import React from 'react';
import { styled } from 'styled-components';
import { CloseButton } from '../../../../components/pop-up/CloseButton';
import { StyledBtn, StyledCallbackBtn } from '../../../../components/StyledBtn';
import { StyledH2 } from '../../../../components/StyledH2';
import { SocialList } from '../../../../components/social/SocialList';
import { ContactBox } from '../../../../components/contact_box/ContactBox';



type MobileContactPopupPropsType = {
    isOpen:boolean
    handleToggleModalWindow: (windowName:string) => void
    handleCloseMobileModalWindowContact: () => void
    themeName: string
    contacts: {
        phone1: string
        phone2: string
        email: string
        callback:boolean
    }
    socials: Array<{id:string, link:string}>
    windowWidth:number
    
}

export const MobileContactPopup: React.FC<MobileContactPopupPropsType> = (props: MobileContactPopupPropsType) => { 
        
    return (
        <StyledMobileContactPopup isOpen={props.isOpen}>
            <CloseButton 
                handleCloseMobileModalWindowContact={props.handleCloseMobileModalWindowContact} 
                top="-20vh"
                right="0"                       
            />
                <StyledH2>Связаться с нами</StyledH2>
                <StyledBtn onClick={() => props.handleToggleModalWindow("record")}>
                    Запись на прием
                </StyledBtn>
                <StyledCallbackBtn onClick={() => props.handleToggleModalWindow("callback")}>
                    Заказать обратный звонок
                </StyledCallbackBtn>
                <SocialList 
                    themeName={props.themeName} 
                    socials={props.socials} 
                    width="60" 
                    height="60"
                />
                <ContactBox 
                    themeName={props.themeName} 
                    contacts={props.contacts} 
                    windowWidth={props.windowWidth}
                />            
        </StyledMobileContactPopup>
    );
};

const StyledMobileContactPopup= styled.div<{isOpen:boolean}>`  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 100vh;
    padding: 0 20px;
       
    
    background-color: ${({theme}) => theme.bgCol.default};
    z-index: 1000;
    
    position: fixed;
    top: 58px;  
    left: 0;
    right: 0;
    bottom: 0;
    transform: ${props => props.isOpen ? "translateY(0)" : "translateY(calc(-100vh - 58px))"};
    transition: transform 0.6s; 

    ${StyledBtn}, ${StyledCallbackBtn} {
        width: 100%;
        padding: 15px 20px; 
        margin-bottom: 20px;       
    }

    & div:last-of-type {
        margin-top: 20px;
    } 
`