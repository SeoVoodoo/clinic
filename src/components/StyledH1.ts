import React from 'react';
import { styled } from 'styled-components';

export const StyledH1 = styled.h1`

    color: ${({theme}) => theme.color.primary};
    font-size: calc((100vw - 26rem)/(137 - 26) * (4.3 - 1.7) + 1.7rem);
    font-weight: 700;
    text-align: left;
    //margin-bottom: 24px;

    span {
        color: ${({theme}) => theme.color.secondary}; 
    }

    @media ${({theme}) => theme.media.tablet} {
        margin-bottom: 15px;
    }
    
`
