import React from 'react';
import { css, styled } from 'styled-components';

type ButtonPropsType = {    
    backgroundColor?: string
    color?: string
    bgBtnType?: string
    themeName?: string
}

export const StyledBtn = styled.button<ButtonPropsType>`
    border: none;
    outline: 1px solid ${({theme}) => theme.color.outline};
    border-radius: 10px;
    font-size: 1rem;
    line-height: 18px;
    font-weight: 700;    
    background-color: ${({theme}) => theme.bgCol.btn.primary};
    color: ${({theme}) => theme.color.defaultBtn};
    /* transition: background-color 0.4s, box-shadow 0.2s 0.1s; */

    &:hover {
        background: ${({theme}) => theme.bgCol.btn.primaryHover};
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
`

export const StyledCallbackBtn = styled(StyledBtn)`
    background-color: ${({theme}) => theme.bgCol.btn.secondary};
    color: ${({theme}) => theme.color.defaultBtn};    

    &:hover { 
        background: ${({theme}) => theme.bgCol.btn.secondaryHover};
        box-shadow: none;       
    }
`




