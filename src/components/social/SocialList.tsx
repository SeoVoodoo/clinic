import React from 'react';
import { styled, useTheme } from 'styled-components';
import { Icon } from '../icon/Icon';
import { WindowSize } from '../../hooks/WindowSize';


type SocialListPropsType = {
    themeName: string
    socials: Array<{id:string, link:string}>
}

export const SocialList: React.FC<SocialListPropsType> = (props: SocialListPropsType) => {  
    const theme = useTheme(); 
    const windowWidth = WindowSize();
    const laptop = 1200;
    const tablet = 767;
    return (
        <StyledSocialList>
            {
                props.socials.map((social, index) => {
                    return (
                        <SocialItem key={index} href={social.link}>
                            <Icon                                
                                id={social.id}
                                width={windowWidth > tablet ? (windowWidth > laptop ? "40" : "32") : "24"}
                                height={windowWidth > tablet ? (windowWidth > laptop ? "40" : "32") : "24"}
                                viewBox="0 0 40 40"
                                //viewBox={windowWidth > laptop ? "0 0 40 40" : "0 0 24 24"} 
                                fill={props.themeName !== 'default' ? theme.color.outline 
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

    @media ${({theme}) => theme.media.laptop}{
        column-gap: 16px;  
    }

    /* @media ${({theme}) => theme.media.tablet}{
        justify-self: center;
    } */
    
`

const SocialItem = styled.a`
    transform: translateY(0);
    transition: transform 0.4s;
    //filter: ${({theme}) => theme.filter};

    &:hover {
        transform: translateY(-4px);    
    }
`