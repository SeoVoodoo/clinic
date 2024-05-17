import React from 'react';
import { styled } from 'styled-components';
import sprite from "../../assets/images/png-sprite/icons/sprite-min.png";

type StyledBgImagePropsType = {
    pos?:string
}

export const StyledBgImage = styled.div<StyledBgImagePropsType>`
    background-image: url(${sprite}); 
    background-position: ${props => props.pos};
    filter: ${({theme}) => theme.filter};
    
    
`        
