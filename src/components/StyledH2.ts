import React from 'react';
import { styled } from 'styled-components';

export const StyledH2 = styled.h2`

    color: ${({theme}) => theme.color.secondary};
    font-size: calc((100vw - 26rem)/(137 - 26) * (3.4 - 1.4) + 1.4rem);
    font-weight: 700;
    text-align: center;
    margin-bottom: 28px;

    span {
        color: ${({theme}) => theme.color.primary}; 
    }
    
`
