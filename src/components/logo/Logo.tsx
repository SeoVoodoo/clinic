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
    background-position: 0px -94px;
    width: 198px;
    height: 124px;
    cursor: pointer;
    filter: ${({theme}) => theme.filterLogo};
`

