import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { StyledH2 } from '../StyledH2';
import { StyledCallbackBtn } from '../StyledBtn';
import { CloseButton } from './CloseButton';
import { fadeIn } from '../../styles/Animations';
import bgForm_3ndfl from '../../assets/images/single-img/desctop/bg_form_3ndfl.svg'
import { ValidationSchema } from '../../shared/lib/validate-form/ValidateForm';
import { Input } from '../../shared/ui/input/Input';
import { Select } from '../../shared/ui/select/Select';
import { Checkbox } from '../../shared/ui/checkbox/Checkbox';
import { sendForm } from '../../shared/lib/send-form/SendForm';
import { TextArea } from '../../shared/ui/textarea/TextArea';

type ModalWindowAnswerQuestionPropsType = {    
    setIsOpenModalWindowAnswerQuestion: Function
    onSuccess: () => void
    onError: () => void 
    directions: string[]
    doctors: string[]
    scroll:number 
}

// const mailMapper: any = {
//     answer: "Ответ",   
//     phone: "Телефон",
//     period: "Период",
//     branchAddress: "Хочу забрать на"
// }


const formSchema: ValidationSchema = {
    directions: {
        required: true
    },    
    answer: {
        required: true,
        validator: (value: string) => value.length > 1,
        message: 'Ответ должен быть не менее 2 символов'
    },
    doctors: {
        required: true
    },
    calendar: {
        required: true
    }    
}

export const ModalWindowAnswerQuestion: React.FC<ModalWindowAnswerQuestionPropsType> = (props: ModalWindowAnswerQuestionPropsType) => {
    const [errors, setErrors] = useState<any>({});   

    const directionsOptions  = props.directions.slice(1).map( dir => {
        return (
            { "label": dir, "value": dir }
        );
    }) 
    
    const doctorsNameOptions = props.doctors.map( name => {
        return (
            { "label": name, "value": name }
        );
    }) 
    const handleCloseModalWindowAnswerQuestion = () => {
        delete window.localStorage.username;
        delete window.localStorage.question;
        props.setIsOpenModalWindowAnswerQuestion(false);
    }
    
          
    return (
        <StyledModalWindowAnswerQuestion>
            <ModalWindow scroll={props.scroll}>
                <CloseButton handleCloseModalWindowAnswerQuestion={handleCloseModalWindowAnswerQuestion} /> 
                <StyledH2>
                    <span>Ответить на вопрос</span>
                </StyledH2>
                <Text>
                    <span>Имя: </span>
                    <span>{window.localStorage.getItem("username")}</span>
                    <span>Вопрос: </span>
                    <span>{window.localStorage.getItem("question")}</span>
                </Text>  
                <Form>  
                    <Select
                        error={errors['directions']}
                        title="Все направления*"
                        name="directions"
                        options={directionsOptions}
                    />       
                    <TextArea
                        error={errors['answer']}
                        type="text"
                        name="answer"
                        placeholder="Ответ*" 
                    />  
                    <Select
                        error={errors['doctors']}
                        title="Имя врача*"
                        name="doctors"
                        options={doctorsNameOptions}
                    />
                    <Input
                        error={errors['calendar']}
                        type="date"
                        name="calendar"
                        placeholder="Дата ответа*" 
                    />
                    
                    <Checkbox
                        error={errors['notification']}
                        name="notification"
                        label={<span style={{textAlign: "left"}}>Оповестить об ответе того, кто задал вопрос</span>}
                    />

                    <StyledCallbackBtn type="submit">Опубликовать</StyledCallbackBtn>
                    <Note>* - поля обязательные для заполнения</Note>
                </Form>  
                
            </ModalWindow>          
        </StyledModalWindowAnswerQuestion>
    );
};

const StyledModalWindowAnswerQuestion = styled.div`
    width: 100%;
    height: 100%; 
      
    position:absolute;
    top: 0;    
    right: 0;
    bottom: 0;
    left: 0;    
    z-index: 150;   

    background-color: rgba(217, 217, 217, 0.5);
    backdrop-filter: blur(5px);
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
    
    @media ${({theme}) => theme.media.mobile} {
        max-width: 502px;
        height: 620px;
        overflow: auto;
    } 
`
const Text = styled.div`
    max-width: 702px;    
    padding: 0 10px;
    text-align: left;
    margin-bottom: 4px;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 8px;
    justify-items: start;

    span:nth-child(odd) {
        font-weight: 700;
        font-size: 1.14rem;
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
