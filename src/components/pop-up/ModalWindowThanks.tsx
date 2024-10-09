import React from 'react';
import { styled } from 'styled-components';
import { StyledH2 } from '../StyledH2';
import { CloseButton } from './CloseButton';
import { fadeIn, modalIn, modalOut } from '../../styles/Animations';

import bgForm_3ndfl from '../../assets/images/single-img/desctop/bg_form_3ndfl.svg'
import { StyledCallbackBtn } from '../StyledBtn';

type ModalWindowThanksPropsType = {
    handleToggleModalWindow: (windowName:string) => void   
    isOpenModalWindowThanks:boolean 
}

export const ModalWindowThanks: React.FC<ModalWindowThanksPropsType> = (props: ModalWindowThanksPropsType) => {
    return (
        <StyledModalWindowThanks isOpenModalWindowThanks={props.isOpenModalWindowThanks}>
            <ModalWindow isOpenModalWindowThanks={props.isOpenModalWindowThanks}>
                <CloseButton handleToggleModalWindow={() => props.handleToggleModalWindow("thanks")} /> 
                <StyledH2>
                    <span>Спасибо за вашу заявку!</span>
                </StyledH2>     
                <Message>Мы свяжемся с Вами<br />в ближайшее время</Message> 
                <StyledCallbackBtn onClick={() => props.handleToggleModalWindow("thanks")}>
                    Понятно
                </StyledCallbackBtn>        
            </ModalWindow>          
        </StyledModalWindowThanks>
    );
};

const StyledModalWindowThanks = styled.div<{isOpenModalWindowThanks:boolean}>`
    display: ${props => props.isOpenModalWindowThanks ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 50;    
    //background-color: rgba(140, 174, 200, 0.8);
    background-color: rgba(217, 217, 217, 0.5);
    backdrop-filter: blur(5px);
    animation-name: ${fadeIn};
    animation-duration: 0.8s;
    animation-delay: 0s;
    animation-fill-mode: both;
    /* opacity: ${props => props.isOpenModalWindowThanks ? "1" : "0"};
    transition: opacity 5s ease 2s;     */
`

const ModalWindow = styled.div<{isOpenModalWindowThanks:boolean}>`
    width: 782px;  
    margin: 0 10px;  
    padding: 34px 30px 24px;
    border-radius: 10px;
    background-color: ${({theme}) => theme.bgCol.default};    
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
    text-align: center;
    background-image: url(${bgForm_3ndfl});
    /* animation-name: ${props => props.isOpenModalWindowThanks ? modalIn : modalOut};
    animation-duration: 0.5s;
    animation-timing-function: ${props => props.isOpenModalWindowThanks ? "ease-out" : "ease-in"};
    animation-delay: 1s; */
    //position: relative;

    ${StyledCallbackBtn} {
        width: 100%;
        padding: 16px;
    }

    @media ${({theme}) => theme.media.laptop} {
        max-width: 620px;
    }

    @media ${({theme}) => theme.media.tablet} {
        max-width: 514px;
    }
`
const Message = styled.div`
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.86 - 1.14) + 0.86rem); 
    font-weight: 500;
    margin-bottom: 20px;    
`