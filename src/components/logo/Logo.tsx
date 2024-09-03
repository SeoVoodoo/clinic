import React from 'react';
import { styled } from 'styled-components';
import sprite from "../../assets/images/png-sprite/icons/sprite-min.png";

type LogoPropsType = {
    head?: boolean
}

export const Logo: React.FC<LogoPropsType> = (props: LogoPropsType) => {
    return (
        <StyledLogo head={props.head}>
            <a onClick={() => {}}>
                <Logotype head={props.head}>

                </Logotype>
            </a>            
        </StyledLogo>
    );
};

const StyledLogo = styled.div<{head?:boolean}>`
    grid-area: logo;
    
    @media ${({theme}) => theme.media.lg992} {
        width: min-content;
    }
             
`

const Logotype = styled.div<{head?:boolean}>`
    background-image: url(${sprite});    
    height: 124px;
    max-width: 198px; 
    min-width: 164px;   
    width: 100%;    
    //background-position: 0px -94px;
    background-position: 0% 27.168%;
    background-size: 301.01% 379.032%;
    display: inline-block;
    
    cursor: pointer;
    filter: ${({theme}) => theme.filterLogo};

    @media ${({theme}) => theme.media.lg992} {
        max-width: ${props => props.head ? "164px": "198px"};
        min-width: ${props => props.head ? "164px": "198px"};
        height: ${props => props.head ? "104px": "124px"};
    }
    
    @media ${({theme}) => theme.media.mobile} {
        max-width: ${props => props.head ? "150px": "198px"};
        min-width: ${props => props.head ? "150px": "198px"};
        height: ${props => props.head ? "94px": "124px"};
    }
`

