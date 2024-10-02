import React, { useState } from 'react';
import { styled } from 'styled-components';
import { StyledH2 } from '../StyledH2';
import { StyledCallbackBtn } from '../StyledBtn';
import { CloseButton } from './CloseButton';
import { fadeIn } from '../../styles/Animations';
import bgForm_3ndfl from '../../assets/images/single-img/desctop/bg_form_3ndfl.svg'
import { Link } from 'react-router-dom';
import { ValidationSchema } from '../../shared/lib/validate-form/ValidateForm';
import { Input } from '../../shared/ui/input/Input';
import { Select } from '../../shared/ui/select/Select';
import { CheckboxGroup } from '../../shared/ui/checkbox-group/CheckboxGroup';
import { Checkbox } from '../../shared/ui/checkbox/Checkbox';
import { sendForm } from '../../shared/lib/send-form/SendForm';

type ModalWindow3ndflPropsType = {
    handleToggleModalWindow: (windowName: string) => void  
    values: string[]
    onSuccess: () => void
    onError: () => void
}

const mailMapper: any = {
    username_taxpayer: "ФИО налогоплательщика",
    inn: "ИНН налогоплательщика",
    username_patient: "ФИО пациента",
    forWhom: "За кого возвращаете",
    phone: "Телефон",
    period: "Период",
    branchAddress: "Хочу забрать на"
}

const formatCheckboxGroupOptions = (values: string[]) => values.map((value) => ({ label: value, value }));

const branchAddressOptions = [
    { label: 'Сурова, д.4', value: 'Сурова, д.4' },
    { label: 'Бебеля, д.1А', value: 'Бебеля, д.1А' }
]

const forWhomOptions = [
    { label: 'За себя', value: 'За себя' },
    { label: 'За жену', value: 'За жену' },
    { label: 'За мужа', value: 'За мужа' },
    { label: 'За сына', value: 'За сына' },
    { label: 'За дочь', value: 'За дочь' },
    { label: 'За мать', value: 'За мать' },
    { label: 'За отца', value: 'За отца' },
]


const formSchema: ValidationSchema = {
    username_taxpayer: {
        required: true,
        validator: (value: string) => value.length > 2,
        message: 'ФИО должно быть не меньше 3 символов'
    },
    inn: {
        required: true
    },
    username_patient: {
        required: true,
        validator: (value: string) => value.length > 2,
        message: 'ФИО должно быть не меньше 3 символов'
    },
    forWhom: {
        required: true
    },
    phone: {
        required: true,
        validator: (value) => /^(?:\+7|8)(?:\(\d{3}\)|\d{3})\d{3}-?\d\d-?\d\d$/.test(String(value)),
        message: 'Номер введен неверно'
    },
    period: {
        required: true
    },
    branchAddress: {
        required: true
    },
    agreement: {
        required: true,
        // validator: (value) => value === null,
        // message: 'Подтвердите согласие'
    }
}

export const ModalWindow3ndfl: React.FC<ModalWindow3ndflPropsType> = (props: ModalWindow3ndflPropsType) => {
    const [errors, setErrors] = useState<any>({});     
    const title = 'Хочу справку для оформления 3НДФЛ';
    return (
        <StyledModalWindow3ndfl>
            <ModalWindow>
                <CloseButton handleToggleModalWindow={() => props.handleToggleModalWindow("3ndfl")} /> 
                <StyledH2>
                    <span>Заказать справку об<br />оплате медицинских услуг</span>
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
                        error={errors['username_taxpayer']}
                        type="text"
                        name="username_taxpayer"
                        placeholder="ФИО налогоплательщика*" 
                        maxLength={50}
                    />

                    <Input
                        error={errors['inn']}
                        type="text"
                        name="inn"
                        placeholder="ИНН налогоплательщика*" 
                        pattern="[0-9]{10,12}"
                        minLength={10} 
                        maxLength={12} 
                    />

                    <Input
                        error={errors['username_patient']}
                        type="text"
                        name="username_patient"
                        placeholder="ФИО пациента*" 
                        maxLength={50} 
                    />
               
                    <Select
                        error={errors['forWhom']}
                        title="За кого возвращаете*"
                        name="forWhom"
                        options={forWhomOptions}
                    />

                    <Input
                        error={errors['phone']}
                        type="tel"
                        name="phone"
                        placeholder="Телефон*" 
                    />

                    <CheckboxGroup
                        error={errors['period']}
                        title="Период*"
                        name="period"
                        options={formatCheckboxGroupOptions(props.values)}
                    />

                    <Select
                        error={errors['branchAddress']}
                        title="Где забрать справку*"
                        name="branchAddress"
                        options={branchAddressOptions}
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
        </StyledModalWindow3ndfl>
    );
};



const StyledModalWindow3ndfl = styled.div`
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

    /* @media ${({theme}) => theme.media.mobile} {
        height: 100vh;
    } */
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



// const FieldSet = styled.fieldset`
//     width: 100%;
//     padding: 10px 15px 14px;
//     border: 1px solid ${({theme}) => theme.color.borderFieldSet};
//     border-radius: 10px;
//     font-family: 'Montserrat', sans-serif;
//     font-size: 1.14rem;    
//     display: flex;
    
//     legend {
//         text-align: left;
//         margin-left: 4px;
//         color: ${({theme}) => theme.color.multiСhannel};
//     }

//     div {
//         margin-right: 30px;  
//     }

//     div:first-of-type {
//         margin-left: 5px;
//     }

//     @media ${({theme}) => theme.media.mobile} {
//         legend {
//             color: red;
//         }
//     }
// `
// const ShowError = styled.div`
//     color: red;
// `


