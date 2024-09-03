import React, { useState } from 'react';
import { styled } from 'styled-components';
import { StyledH2 } from '../StyledH2';
import { StyledCallbackBtn } from '../StyledBtn';
import { CloseButton } from './CloseButton';
import { fadeIn } from '../../styles/Animations';
import { Checkbox } from './Checkbox';
import bgForm_3ndfl from '../../assets/images/single-img/desctop/bg_form_3ndfl.svg'
import axios from 'axios';

type ModalWindow3ndflPropsType = {
    handleToggleModalWindow: (windowName: string) => void  
    values: string[] 
}



export const ModalWindow3ndfl: React.FC<ModalWindow3ndflPropsType> = (props: ModalWindow3ndflPropsType) => {
    const [taxpayerFullName, setTaxpayerFullName] = useState('');
    const [inn, setInn] = useState('');
    const [patientFullName, setPatientFullName] = useState('');
    const [phone, setPhone] = useState('');

    // async function sendForm() {
        
	// 	try {            
	// 	    await axios.post('http://localhost:3000/clinic/server/app', {
	// 			taxpayerFullName, inn, patientFullName, phone
	// 		});
            
	// 		setTaxpayerFullName('');			
	// 		setInn('');
	// 		setPatientFullName('');
	// 		setPhone('');
    //         alert("Email sent!");
	// 	} 
    //     catch (error) {
	// 		console.log('Произошла ошибка', error);
	// 	}
	// }

    async function sendForm(e: { preventDefault: () => void; }) {
        e.preventDefault();
        console.log("Зашли в sendForm");
        await axios
          .post("/server/app", {
            params: {
                taxpayerFullName,
                inn,
                patientFullName,
                phone
            },
          })
          .then(() => {
            //success
            console.log("Успех");
          })
          .catch(() => {
            console.log("Неудача");
          });
      };

    

    // const sendForm = async () => {
       
    //     const dataSend = {
    //         taxpayerFullName: taxpayerFullName,
    //         inn: inn,
    //         patientFullName: patientFullName,
    //         phone: phone
    //     }
    
    //     console.log("dataSend", dataSend);
        

    //     // send email
    //     const response = await fetch("/api/send-3ndfl", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body: JSON.stringify(dataSend)
    //     })

    //     if (response.ok) { // если HTTP-статус в диапазоне 200-299, то получаем тело ответа
    //         let json = await response.json();
    //     } 
    //     else {
    //         alert("Ошибка HTTP: " + response.status);
    //     }
    // }

    return (
        <StyledModalWindow3ndfl>
            <ModalWindow>
                <CloseButton handleToggleModalWindow={() => props.handleToggleModalWindow("3ndfl")} /> 
                <StyledH2>
                    <span>Заказать справку об<br />оплате медицинских услуг</span>
                </StyledH2>
                   
                <Form onSubmit={sendForm}>   
                    
                    <Field 
                        type="text" 
                        name="username_taxpayer" 
                        placeholder="ФИО налогоплательщика*" 
                        maxLength={50} 
                        required 
                        value={taxpayerFullName}
                        onChange={(e) => setTaxpayerFullName(e.target.value)}
                    />                    
                    <Field 
                        type="text" 
                        name="inn" 
                        placeholder="ИНН налогоплательщика*" 
                        pattern="[0-9]{10,12}" 
                        minLength={10} 
                        maxLength={12} 
                        required 
                        value={inn}
                        onChange={(e) => setInn(e.target.value)}
                    />
                    <Field 
                        type="text" 
                        name="username_patient" 
                        placeholder="ФИО пациента*" 
                        maxLength={50} 
                        required
                        value={patientFullName}
                        onChange={(e) => setPatientFullName(e.target.value)} 
                    />
                    <Select name="forWhom" required>
                        <option value="none" hidden>За кого возвращаете*</option>
                        <option value="myself">За себя</option>
                        <option value="wife">За жену</option>
                        <option value="husband">За мужа</option>
                        <option value="son">За сына</option>
                        <option value="daughter">За дочь</option>
                        <option value="mother">За мать</option>
                        <option value="father">За отца</option>
                    </Select>

                    <Field 
                        type="tel" 
                        name="phone" 
                        placeholder="Телефон*" 
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)} 
                    />

                    <FieldSet>
                        <legend>Период*</legend>                       
                        <Checkbox value={props.values[0]} />
                        <Checkbox value={props.values[1]} />
                        <Checkbox value={props.values[2]} />
                    </FieldSet>

                    <Select name="branchAddress" required>
                        <option value="none" hidden>Где забрать справку*</option>
                        <option value="surova">Сурова, д.4</option>
                        <option value="bebelya">Бебеля, д.1А</option>
                    </Select>  

                    <Checkbox agreement />
                    <StyledCallbackBtn type="submit">Отправить</StyledCallbackBtn>
                    <span>* - поля обязательные для заполнения</span>
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

const FieldSet = styled.fieldset`
    width: 100%;
    padding: 10px 15px 14px;
    border: 1px solid ${({theme}) => theme.color.borderFieldSet};
    border-radius: 10px;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.14rem;    
    display: flex;
    
    legend {
        text-align: left;
        margin-left: 4px;
        color: ${({theme}) => theme.color.multiСhannel};
    }

    div {
        margin-right: 30px;  
    }

    div:first-of-type {
        margin-left: 5px;
    }

    @media ${({theme}) => theme.media.mobile} {
        legend {
            color: red;
        }
    }
`

const Select = styled.select`
    width: 100%; 
    padding: 16px 20px;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
    background-color: transparent;

    font-family: 'Montserrat', sans-serif;
    font-size: 1.14rem;  
        
    color: ${({theme}) => theme.color.multiСhannel};

        
    option {        
        background-color: ${({theme}) => theme.bgCol.default};               
    }

    &:focus-visible {
        outline: 1px solid ${({theme}) => theme.color.multiСhannel};
    }

    @media ${({theme}) => theme.media.tablet} {
        padding: 10px 20px;
    }              
    
    
`


