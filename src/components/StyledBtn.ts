import React from 'react';
import { NavLink } from 'react-router-dom';
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

export const StyledOrangeLink = styled(NavLink)`
    display: block;
    width: 200px;
    padding: 20px 0;
    border-radius: 10px;
    outline: 1px solid ${({theme}) => theme.color.outline};    
    font-size: 1rem;
    line-height: 18px;
    font-weight: 700;
    text-align: center;

    background-color: ${({theme}) => theme.bgCol.btn.secondary};
    color: ${({theme}) => theme.color.defaultBtn};    

    &:hover { 
        background: ${({theme}) => theme.bgCol.btn.secondaryHover};               
    }

    @media ${({theme}) => theme.media.laptop} {
        padding: 16px 0;
    }

    @media ${({theme}) => theme.media.tablet} {
        margin: 0 auto;
    }

    @media ${({theme}) => theme.media.mobile} {
        width: 150px;
        padding: 12px 0;
    }
`

export const StyledGreenLink = styled(NavLink)`
    display: block;
    max-width: 264px;
    width: 100%;
    padding: 20px 0;
    border-radius: 10px;
    outline: 1px solid ${({theme}) => theme.color.outline};    
    font-size: 1rem;
    line-height: 18px;
    font-weight: 700;
    text-align: center;

    background-color: ${({theme}) => theme.bgCol.btn.primary};
    color: ${({theme}) => theme.color.defaultBtn};    

    &:hover {
        background: ${({theme}) => theme.bgCol.btn.primaryHover};        
    }

    @media ${({theme}) => theme.media.laptop} {
        padding: 16px 0;
    }

    @media ${({theme}) => theme.media.mobile} {
        padding: 12px 0;
    }
`





