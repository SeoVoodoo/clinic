import React from 'react';
import { styled, useTheme } from 'styled-components';
import { Icon } from '../icon/Icon';


type SocialListPropsType = {
    themeName: string
    socials: Array<{id:string, link:string}>
}

export const SocialList: React.FC<SocialListPropsType> = (props: SocialListPropsType) => {  
    const theme = useTheme(); 
    return (
        <StyledSocialList>
            {
                props.socials.map((social, index) => {
                    return (
                        <SocialItem key={index} href={social.link}>
                            <Icon                                
                                id={social.id}
                                width="40"
                                height="40"
                                viewBox="0 0 40 40" 
                                fill={props.themeName !== 'default' ? theme.color.outlineBtn 
                                : social.id === "classmates" ? "#F96600"
                                : social.id === "telegram" ? "#1C8ADB"
                                : social.id === "viber" ? "#6F3FAA"
                                : "#2787F5"
                                }
                                stroke={props.themeName === "dark" ? "black" : "none"}                                                               
                            />
                        </SocialItem>
                    )
                })
            }            
        </StyledSocialList>
    );
};

const StyledSocialList = styled.div`
    grid-area: social;
    padding-top: 15px;
    display: flex;
    column-gap: 10px;
`

const SocialItem = styled.a`
    transform: translateY(0);
    transition: transform 0.4s;
    //filter: ${({theme}) => theme.filter};

    &:hover {
        transform: translateY(-4px);    
    }
`