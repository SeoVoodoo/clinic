import React from 'react';
import { styled, useTheme } from 'styled-components';
import { Icon } from '../icon/Icon';

type ContactBoxPropsType = {    
    contacts: {
        phone1:string,
        phone2:string,
        email:string,
        callback:boolean
    }
    themeName:string
    windowWidth:number 
    handleToggleModalWindow?: (windowName:string) => void
}

export const ContactBox: React.FC<ContactBoxPropsType> = (props: ContactBoxPropsType) => {
    const theme = useTheme();    
    const breakpoint = 767;
    // const handlePhoneClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    //     e.preventDefault();
    // }    
    const phone = (phone:string) => phone.replace(/\D/g, "");    

    return (
        <StyledContactBox>
            <Phone>
                <Icon 
                    id="phone"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20" 
                    fill={theme.color.fillContactIcon}               
                />
                {props.windowWidth > breakpoint
                    ? props.contacts.phone1
                    : <a href={`tel:${phone(props.contacts.phone1)}`}>{props.contacts.phone1}</a>
                }
                
            </Phone>
            <Description>(многоканальный)</Description>
            <Phone>
                <Icon 
                    id="phone"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill={theme.color.fillContactIcon}                
                />
                {props.windowWidth > breakpoint
                    ? props.contacts.phone2
                    : <a href={`tel:${phone(props.contacts.phone2)}`}>{props.contacts.phone2}</a>
                }
            </Phone>
            <Email href={`mailto:${props.contacts.email}`} >
                <Icon 
                    id="email"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill={theme.color.fillContactIcon}                
                />
                {props.contacts.email}
            </Email>            
            {
                props.contacts.callback &&  props.handleToggleModalWindow &&  
                (<Callback onClick={() => props.handleToggleModalWindow?.("callback")}>Заказать звонок</Callback>)
            }
        </StyledContactBox>
    );
};

const StyledContactBox = styled.div`
    grid-area: contact;    
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media ${({theme}) => theme.media.tablet} {
        align-items: flex-start;
    }    
`
const Phone = styled.span`
    display: flex;
    column-gap: 10px;
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.14 - 1) + 1rem); 
    font-weight: 700;
    line-height: 20px;
    color: ${({theme}) => theme.color.defaultText};
`
const Description = styled.span`
    font-size: calc((100vw - 26rem)/(137 - 26) * (1 - 0.86) + 0.86rem); 
    color: ${({theme}) => theme.color.multiСhannel};
    margin-bottom: 10px;

    @media ${({theme}) => theme.media.tablet} {
        align-self: center;
    }
`
const Email = styled.a`
    display: flex;
    align-items: center;
    column-gap: 10px;
    font-weight: 700;
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.14 - 1) + 1rem); 
    text-decoration: none;
    color: ${({theme}) => theme.color.defaultText};
    margin-top: 10px;
`
const Callback = styled.a`
    font-size: calc((100vw - 26rem)/(137 - 26) * (0.86 - 1) + 1rem); 
    color: ${({theme}) => theme.color.primary};
    font-weight: 700;
    margin-top: 10px;

    &:hover {
        color: ${({theme}) => theme.color.secondary};  
    }

    @media ${({theme}) => theme.media.tablet} {
        align-self: center;
    }
`