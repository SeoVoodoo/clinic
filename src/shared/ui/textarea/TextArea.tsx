import { styled } from 'styled-components';

interface TextAreaProps {
    error?: string
    type: string
    name: string
    placeholder?: string
    pattern?: string
    maxLength?: number
    minLength?: number
}

export const TextArea = (props: TextAreaProps) => {

    const {error, ...other} = props;
 
    return (
        <StyledTextArea>
            {error && <Error>{error}</Error>}
            <Field
                error={error}
                {...other}
            />            
        </StyledTextArea>
    )
}

const StyledTextArea = styled.div`
    width: 100%;
    text-align: left; 
`
const Error = styled.span`    
    color: red;
`

const Field = styled.textarea<{error?:string}>`
    width: 100%;
    height: 280px;
    resize: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.14rem;
    background-color: ${({theme}) => theme.bgCol.default};    
    border: 1px solid ${props => props.error ? "red" : "transparent"};

    &::placeholder {
        color: ${({theme}) => theme.color.multiСhannel};
    }

    &:focus-visible {
        outline: 1px solid ${({theme}) => theme.color.multiСhannel};
    }

    &:not([type="checkbox"]) {
        padding: 15px 20px;
        //border: none;
        border-radius: 10px;
        appearance: none;
        box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
        -webkit-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
    }

    @media ${({theme}) => theme.media.tablet} {
        &:not([type="checkbox"]) {
            padding: 10px 20px;
        }
    }
    @media ${({theme}) => theme.media.tablet} {
        height: 220px;
    }
    @media ${({theme}) => theme.media.mobile} {
        height: 180px;
    }
`