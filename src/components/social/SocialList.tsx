import React from 'react';
import { styled, useTheme } from 'styled-components';
import { Icon } from '../icon/Icon';
import { WindowSize } from '../../hooks/WindowSize';


type SocialListPropsType = {
    themeName:string
    socials:Array<{id:string, link:string}>
    width:string
    height:string
    fontSize?:number
}

export const SocialList: React.FC<SocialListPropsType> = (props: SocialListPropsType) => {  
    const theme = useTheme(); 
    // const windowWidth = WindowSize();
    // const laptop = 1200;
    // const tablet = 767;
    return (
        <StyledSocialList fontSize={props.fontSize}>
            {
                props.socials.map((social, index) => {
                    return (
                        <SocialItem key={index} href={social.link}>
                            <Icon                                
                                id={social.id}
                                // width={windowWidth > tablet ? (windowWidth > laptop ? "40" : "32") : "24"}
                                // height={windowWidth > tablet ? (windowWidth > laptop ? "40" : "32") : "24"}
                                width={props.width}
                                height={props.height}
                                viewBox="0 0 40 40"                                 
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

const StyledSocialList = styled.div<{fontSize?:number}>`
    grid-area: social;
    padding-top: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    column-gap: 10px;

    @media ${({theme}) => theme.media.laptop}{
        column-gap: 16px;  
    }

    @media ${({theme}) => theme.media.lg992}{
        justify-content: ${props => props.fontSize && props.fontSize > 14 
        ? "center"
        : "flex-end"
    };  
    }

    @media ${({theme}) => theme.media.tablet}{
        padding-top: 4px;  
    }

    /* @media ${({theme}) => theme.media.mobile}{
        padding-top: 4px;        
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