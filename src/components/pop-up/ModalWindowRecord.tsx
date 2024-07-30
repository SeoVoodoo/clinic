import React from 'react';
import { styled } from 'styled-components';
import { StyledH2 } from '../StyledH2';
import { StyledCallbackBtn } from '../StyledBtn';
import { CloseButton } from './CloseButton';
import { fadeIn } from '../../styles/Animations';
import { Checkbox } from './Checkbox';
import bgForm_3ndfl from '../../assets/images/single-img/desctop/bg_form_3ndfl.svg'

type ModalWindowRecordPropsType = {
    handleToggleModalWindow: (windowName:string) => void    
}

export const ModalWindowRecord: React.FC<ModalWindowRecordPropsType> = (props: ModalWindowRecordPropsType) => {
    return (
        <StyledModalWindowRecord>
            <ModalWindow>
                <CloseButton handleToggleModalWindow={() => props.handleToggleModalWindow("record")} /> 
                <StyledH2>
                    <span>Записаться на прием</span>
                </StyledH2>

                <Form action="" method="post">                    
                    <Field type="text" name="username" placeholder="ФИО*" maxLength={50} required />
                    <Field type="tel" name="phone" placeholder="Телефон*" required />
                    <Field type="email" name="email" placeholder="Электронная почта*" required />
                    <Checkbox agreement />
                    <StyledCallbackBtn type="submit">Отправить</StyledCallbackBtn>
                    <span>* - поля обязательные для заполнения</span>
                </Form>  

            </ModalWindow>          
        </StyledModalWindowRecord>
    );
};

const StyledModalWindowRecord = styled.div`
    display: flex;
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
`

const ModalWindow = styled.div`
    width: 782px;    
    padding: 34px 30px 24px;
    border-radius: 10px;
    background-color: ${({theme}) => theme.bgCol.default};    
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
    text-align: center;
    background-image: url(${bgForm_3ndfl});

    //position: relative;

    @media ${({theme}) => theme.media.laptop} {
        width: 620px;
    }

    @media ${({theme}) => theme.media.tablet} {
        width: 514px;
    }
`

const Form = styled.form`
    max-width: 702px;
    width: 100%;     
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin: 0 auto;
    
    ${StyledCallbackBtn} {
        width: 100%;
        padding: 16px;
    }

    span:last-of-type {
        align-self: start;
        color: ${({theme}) => theme.color.multiСhannel};
        font-size: calc((100vw - 26rem)/(137 - 26) * (1.29 - 1.14) + 1.14rem);
    }
`

const Field = styled.input`
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.14rem;
    background-color: ${({theme}) => theme.bgCol.default}; 
    
    &::placeholder {
        color: ${({theme}) => theme.color.multiСhannel};
    }

    &:focus-visible {
        outline: 1px solid ${({theme}) => theme.color.multiСhannel};
    }

    &:not([type="checkbox"]) {
        padding: 16px 20px;
        border: none;
        border-radius: 10px;
        box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
    }

    @media ${({theme}) => theme.media.tablet} {
        &:not([type="checkbox"]) {
            padding: 10px 20px;
        }
    }
`



