import React from 'react';
import { styled } from 'styled-components';
import sprite from "../../assets/images/png-sprite/icons/sprite-min.png";

export const Logo = () => {
    return (
        <StyledLogo>
            <a onClick={() => {}}>
                <Logotype>

                </Logotype>
            </a>            
        </StyledLogo>
    );
};

const StyledLogo = styled.div`
   grid-area: logo; 
`

const Logotype = styled.div`
    background-image: url(${sprite}); 
    //width: 198px;
    height: 124px;
    max-width: 198px; 
    min-width: 164px;   
    width: 100%;
    //max-height: 124px;
    //height: 100%;
    //background-position: 0px -94px;
    background-position: 0% 27.168%;
    background-size: 301.01% 379.032%;
    display: inline-block;
    
    cursor: pointer;
    filter: ${({theme}) => theme.filterLogo};

    @media ${({theme}) => theme.media.tablet} {
        min-width: 198px;
    }
`

