import React from 'react';
import { styled } from 'styled-components';

type BurgerButtonPropsType = {
    handleBurgerBtnClick: () => void;
}

export const BurgerButton: React.FC<BurgerButtonPropsType> = (props: BurgerButtonPropsType) => {
    return (
        <StyledBurgerButton onClick={props.handleBurgerBtnClick}>
            <span></span>
        </StyledBurgerButton>
    );
};

const StyledBurgerButton = styled.button`
    display: none;
    width: 45px;
    height: 45px;
    border: none;
    background-color: transparent;
    
    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${({theme}) => theme.color.defaultText};
        position: relative;

        &::before{
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${({theme}) => theme.color.defaultText};
            transform: translateY(-10px);
            position: absolute;
        }
        &::after{
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${({theme}) => theme.color.defaultText};
            transform: translateY(8px);
            position: absolute;
        }
    }

    @media ${({theme}) => theme.media.lg992} {
        display: block;
    }    
`

