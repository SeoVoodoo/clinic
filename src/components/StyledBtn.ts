import React from 'react';
import { styled } from 'styled-components';

type ButtonPropsType = {    
    backgroundColor?: string,
    color?: string
}

export const StyledBtn = styled.button<ButtonPropsType>`
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    line-height: 18px;
    font-weight: 700;    
    background-color: ${({theme}) => theme.bgCol.btn.primary};
    color: ${({theme}) => theme.color.defaultBtn};
`

export const StyledCallbackBtn = styled(StyledBtn)`
    background-color: ${({theme}) => theme.bgCol.btn.secondary};
    color: ${({theme}) => theme.color.defaultBtn};
`

export const StyledVisuallyImpairedBtn = styled(StyledBtn)`
    background-color: ${({theme}) => theme.bgCol.default};
    color: ${({theme}) => theme.color.defaultText};
`

