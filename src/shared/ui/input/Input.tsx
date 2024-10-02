import { styled } from 'styled-components';

interface InputProps {
    error?: string
    type: string
    name: string
    placeholder?: string
    pattern?: string
    maxLength?: number
    minLength?: number
}

export const Input = (props: InputProps) => {

    const {error, ...other} = props;
 
    return (
        <StyledInput >
            {error && <Error>{error}</Error>}
            <Field
                error={error}
                {...other}
            />            
        </StyledInput>
    )
}

const StyledInput = styled.div`
    width: 100%;
    text-align: left; 
`
const Error = styled.span`    
    color: red;
`

const Field = styled.input<{error?:string}>`
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.14rem;
    background-color: ${({theme}) => theme.bgCol.default}; 
    outline: 1px solid ${props => props.error ? "red" : "transparent"};
    
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