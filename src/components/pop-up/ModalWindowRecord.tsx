import React, { useState } from 'react';
import { styled } from 'styled-components';
import { StyledH2 } from '../StyledH2';
import { StyledCallbackBtn } from '../StyledBtn';
import { CloseButton } from './CloseButton';
import { fadeIn } from '../../styles/Animations';
import bgForm_3ndfl from '../../assets/images/single-img/desctop/bg_form_3ndfl.svg'
import { Checkbox } from '../../shared/ui/checkbox/Checkbox';
import { Input } from '../../shared/ui/input/Input';
import { Link } from 'react-router-dom';
import { sendForm } from '../../shared/lib/send-form/SendForm';
import { ValidationSchema } from '../../shared/lib/validate-form/ValidateForm';

type ModalWindowRecordPropsType = {
    handleToggleModalWindow: (windowName:string) => void 
    onSuccess: () => void
    onError: () => void 
    scroll:number  
}

const mailMapper = {
    username: "ФИО",
    phone: "Телефон",
    email: "Email"
}

const formSchema: ValidationSchema = {
    username: {
        required: true,
        validator: (value: string) => value.length > 2,
        message: 'ФИО должно быть не меньше 3 символов'
    },    
    phone: {
        required: true,
        validator: (value) => /^(?:\+7|8)(?:\(\d{3}\)|\d{3})\d{3}-?\d\d-?\d\d$/.test(String(value)),
        message: 'Номер введен неверно'
    },
    email: {
        required: true,
        validator: (value) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(value)),
        message: 'Некорректный Email'
    },
    agreement: {
        required: true,        
    }
}

export const ModalWindowRecord: React.FC<ModalWindowRecordPropsType> = (props: ModalWindowRecordPropsType) => {
    const[errors, setErrors] = useState<any>({});
    const title = 'Хочу записаться на прием';
    return (
        <StyledModalWindowRecord>
            <ModalWindow scroll={props.scroll}>
                <CloseButton handleToggleModalWindow={() => props.handleToggleModalWindow("record")} /> 
                <StyledH2>
                    <span>Записаться на прием</span>
                </StyledH2>

                <Form onSubmit={(e) => sendForm(
                    e,
                    title, 
                    mailMapper, 
                    formSchema, 
                    setErrors,
                    props.onSuccess,
                    props.onError)}
                    
                > 
                    <Input
                        error={errors['username']}
                        type="text"
                        name="username"
                        placeholder="ФИО*" 
                        maxLength={50}
                    />

                    <Input
                        error={errors['phone']}
                        type="tel"
                        name="phone"
                        placeholder="Телефон*" 
                    />

                    <Input
                        error={errors['email']}
                        type="text"
                        name="email"
                        placeholder="Email*" 
                    />

                    <Checkbox
                        error={errors['agreement']}
                        name="agreement"
                        label={<span style={{textAlign: "left"}}>Я согласен на обработку <Link to={'#'}>персональных данных</Link></span>}
                    />
                    <StyledCallbackBtn type="submit">Отправить</StyledCallbackBtn>
                    <Note>* - поля обязательные для заполнения</Note>
                </Form>  

            </ModalWindow>          
        </StyledModalWindowRecord>
    );
};

const StyledModalWindowRecord = styled.div`    
    width: 100%;
    height: 100%; 
          
    position:absolute;
    top: 0;    
    right: 0;
    bottom: 0;
    left: 0;    
    z-index: 150;
    /* background-color: rgba(217, 217, 217, 0.5);
    backdrop-filter: blur(5px); */
    animation-name: ${fadeIn};
    animation-duration: 0.8s;
    animation-delay: 0s;
    animation-fill-mode: both;
`

const ModalWindow = styled.div<{scroll:number}>`
    width: 782px;  
    margin: 0 10px;  
    padding: 34px 30px 24px;
    border-radius: 10px;
    background-color: ${({theme}) => theme.bgCol.default};    
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
    text-align: center;
    background-image: url(${bgForm_3ndfl});

    position: absolute;    
    left: 50%;
    top: calc(50vh + ${props => props.scroll + "px"});
    transform: translate(-50%, -50%);

    @media ${({theme}) => theme.media.laptop} {
        max-width: 620px;
    }

    @media ${({theme}) => theme.media.tablet} {
        max-width: 514px;
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
`

const Note = styled.span`
    align-self: flex-start;
    color: ${({theme}) => theme.color.multiСhannel};
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.29 - 1) + 1rem);
`
