import { ReactNode, useState } from "react"
import { styled } from "styled-components"

interface CheckboxProps {
    error?: string
    name: string
    label: ReactNode | string
}

export const Checkbox = (props: CheckboxProps) => {

    //const [value, setValue] = useState(false)

    const {error, label, name} = props;

    return (
        <StyledCheckbox error={error}>
            <label>
                {error && <Error>{error}</Error>}             
                <input type="checkbox" name={name} />                            
                {
                    typeof label === 'string'
                    ? ( <span>{label}</span> )
                    : ( label )
                }
            </label>
            
        </StyledCheckbox>
    )
}

const StyledCheckbox = styled.div<{error?:string}>`
    align-self: flex-start;   
    label { 
        text-align: left;        
        color: ${({theme}) => theme.color.multiСhannel};
        font-size: calc((100vw - 26rem)/(137 - 26) * (1.29 - 1) + 1rem);      
    }

    input {        
        opacity: 0;
        position: absolute;        
    }

    input + span {
        display: inline-block;
        position: relative;
        padding-left: 30px;                      
    }

    input + span::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 20px;
        height: 20px;
        border: 1px solid ${props => props.error ? "red" : ({theme}) => theme.color.multiСhannel};                              
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
const Error = styled.span` 
    display: block;    
    color: red;
`