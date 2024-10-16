import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { css, styled } from 'styled-components';

type ButtonPropsType = {    
    backgroundColor?: string
    color?: string
    bgBtnType?: string
    themeName?: string
    isOpenMenu?: boolean
}

export const StyledBtn = styled.button<ButtonPropsType>`
    border: none;
    outline: 1px solid ${({theme}) => theme.color.outline};
    border-radius: 10px;
    font-family: 'Montserrat';
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
    &:focus-visible {
        outline: 2px solid rgb(0, 96, 223);
        box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
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

export const StyledGreenLink = styled(Link)`
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

export const StyledDropdawnBtn = styled.button<ButtonPropsType>`
    max-width: 456px;
    width: 100%;
    height: 50px;
    padding: 12px 20px;
    border: 1px solid ${({theme}) => theme.color.primary};
    //outline: 1px solid ${({theme}) => theme.color.outline};
    border-radius: 9px;
    font-size: 1rem;    
    font-weight: 700; 

    background-color: ${props => props.isOpenMenu 
        ? ({theme}) => theme.bgCol.btn.primary 
        :({theme}) => theme.bgCol.default };

    color: ${props => props.isOpenMenu 
        ? ({theme}) => theme.color.defaultBtn
        : ({theme}) => theme.color.primary };
    z-index: 30;
    /* transition: background-color 0.4s, box-shadow 0.2s 0.1s; */

    position: absolute;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
        box-shadow: rgba(0, 166, 81, 1) 0px 0px 10px 2px inset;
    }
    
    @media ${({theme}) => theme.media.mobile} {
        /* left: 50%;
        transform: translateX(-50%); */
        max-width: 300px;
        &:hover {
            box-shadow: none;
        }
    }
`





