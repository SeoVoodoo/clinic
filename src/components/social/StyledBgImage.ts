import React from 'react';
import { styled } from 'styled-components';
import sprite from "../../assets/images/png-sprite/icons/sprite-min.png";

type StyledBgImagePropsType = {
    pos?:string
    width?:string
    height?:string
}

export const StyledBgImage = styled.div<StyledBgImagePropsType>`
    background-image: url(${sprite}); 
    background-position: ${props => props.pos};
    width: ${props => props.width};
    height: ${props => props.height};
    filter: ${({theme}) => theme.filter};
`        
