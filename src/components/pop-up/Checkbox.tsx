import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

type CheckboxPropsType = {    
    value?:string
    agreement?:boolean
}

export const Checkbox: React.FC<CheckboxPropsType> = (props: CheckboxPropsType) => {
    return (
        <StyledCheckbox>
            {
                props.agreement 
                ?                  
                <label>
                    <input type="checkbox" required/>                            
                    <span>Я согласен на <Link to={'/#'}>обработку персональных данных</Link></span>
                </label>  
                : 
                <label>
                    <input type="checkbox" name="period" value={props.value} />                            
                    <span>{props.value}</span>
                </label>
            }                        
        </StyledCheckbox>
    );
};

const StyledCheckbox = styled.div`
    align-self: flex-start;

    label {
        display: flex;
        align-items: center;  
        color: ${({theme}) => theme.color.multiСhannel};
        font-size: calc((100vw - 26rem)/(137 - 26) * (1.29 - 1.14) + 1.14rem);      
    }

    input {        
        opacity: 0;
        position: absolute;        
    }

    input + span {
        display: inline-block;
        position: relative;
        padding-left: 1.5em;        
    }

    input + span::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 20px;
        height: 20px;
        border: 1px solid ${({theme}) => theme.color.multiСhannel};                       
    }

    input:focus-visible + span::before {
        box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25); 
    }

    input:checked + span::after {
        content: "\\002714";
        position: absolute;
        left: 2px;
        top: 1px;
        color: ${({theme}) => theme.color.defaultText};
        line-height: 1em;
        font-weight: 600;
        width: 1em;
        height: 1em;        
        text-align: center;
    }    

    a {
        color: ${({theme}) => theme.color.multiСhannel};       
        display: inline-block;
        border-bottom: 1px solid ${({theme}) => theme.color.multiСhannel};
    }

    input:checked + span, input:checked + span a {
        color: ${({theme}) => theme.color.defaultText};         
    }
`


