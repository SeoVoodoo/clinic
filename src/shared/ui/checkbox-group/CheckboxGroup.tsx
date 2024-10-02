import React, { useState } from "react";
import { styled } from "styled-components";

type CheckboxGroupPropsType = {
    error?: string
    title: string
    options: {label: string; value: string}[]
    name: string
}

export const CheckboxGroup: React.FC<CheckboxGroupPropsType> = ({ error, title, options, name }: CheckboxGroupPropsType) => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;

        if (checked) {
            setSelectedValues((prev) => [...prev, value])
        } 
        else {
            setSelectedValues((prev) => prev.filter((item) => item !== value))
        }
    }

    return (
        <StyledFieldSet error={error}>            
            <legend>{error ? <span>{error}</span> : title}</legend>   
            {
                options.map((option) => (
                    <label key={option.value}>
                        <input type="checkbox" name={name} value={option.value} onChange={handleChange} />
                        <span>{option.label}</span>
                    </label>
                ))
            }
            <input type="hidden" name={name} value={selectedValues} />            
        </StyledFieldSet>
    )
}

const StyledFieldSet = styled.fieldset<{error?:string}>`
    width: 100%;
    padding: 10px 15px 14px;
    border: 1px solid ${props => props.error ? "red" : ({theme}) => theme.color.borderFieldSet};
    background-color: ${({theme}) => theme.bgCol.default};
    border-radius: 10px;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.14rem;    
    display: flex;
    
    legend {
        text-align: left;
        margin-left: 4px;
        color: ${({theme}) => theme.color.multiСhannel};
    }

    legend > span {
        color: red;
    }

    label:first-of-type {
        margin-left: 5px;
    }

    label {
        margin-right: 30px;  
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

    /* @media ${({theme}) => theme.media.mobile} {
        legend {
            color: red;
        }
    } */
`