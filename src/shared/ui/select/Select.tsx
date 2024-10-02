import { useState } from 'react';
import { styled } from 'styled-components';

interface SelectProps {
    error?: string
    title: string
    name: string
    options: {label: string; value: string}[]
}

export const Select = ({ error, title, name, options }: SelectProps) => {
    const [selectedBranch, setSelectedBranch] = useState('')

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedBranch(e.target.value);
    }

    return (
        <>  
            {error && <Error>{error}</Error>}
            <SelectStyled
                error={error}
                name={name}
                value={selectedBranch}
                onChange={handleSelectChange}
                defaultValue=""
            >   
                
                <option value="" hidden>{title}</option>
                {
                    options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))
                }
            </SelectStyled>
            <input type="hidden" name={name} value={selectedBranch} />
            
        </>
    )
}

const Error = styled.span`
 align-self: flex-start;
 margin-bottom: -8px;
 color: red;  
`

const SelectStyled = styled.select<{error?: string}>`
    width: 100%; 
    padding: 16px 20px;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
    background-color: transparent;

    font-family: 'Montserrat', sans-serif;
    font-size: 1.14rem;  
        
    color: ${({theme}) => theme.color.multiСhannel};
    outline: 1px solid ${props => props.error ? "red" : "transparent"};
        
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