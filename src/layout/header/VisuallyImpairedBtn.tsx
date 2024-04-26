import React, { useState } from 'react';
import { styled } from "styled-components";
import { Icon } from '../../components/icon/Icon';

type VisuallyImpairedBtnPropsType = {
    handleVisuallyImpairedPanel: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
    isShowVisuallyImpairedPanel: boolean
    //handleToggleTheme: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
}


export const VisuallyImpairedBtn: React.FC<VisuallyImpairedBtnPropsType> = (props: VisuallyImpairedBtnPropsType) => {
    const [isHover, setIsHover] = useState(false);
    

    
    const toggleHover = () => {
        setIsHover(prev => !prev);
    } 
    
    return (
        <StyledVisuallyImpairedBtn 
            onMouseEnter={toggleHover} 
            onMouseLeave={toggleHover} 
            onClick={props.handleVisuallyImpairedPanel}            
        >
            <Icon 
                id="eye"
                width="24"
                height="16"
                viewBox="0 0 24 16"
                fill={isHover ? "white" : "#1D1F24"} 
            />
            {props.isShowVisuallyImpairedPanel ? "Обычная версия сайта" : "Версия для слабовидящих"}            
        </StyledVisuallyImpairedBtn>
    );
};



const StyledVisuallyImpairedBtn = styled.button`
    border: none;
    outline: 1px solid ${({theme}) => theme.color.outlineBtn};
    border-radius: 10px;
    font-size: 1rem;
    line-height: 18px;
    font-weight: 700;
    background-color: ${({theme}) => theme.bgCol.default};
    color: ${({theme}) => theme.color.defaultText};

    max-width: 280px;
    width: 100%;
    padding: 17px 20px;
    
    display: flex;
    align-items: center;
    gap: 12px;

    transition: all 0.25s ease;

    &:hover {        
        background-color: ${({theme}) => theme.bgCol.defaultHover};
        color: ${({theme}) => theme.color.defaultTextHover}; 
    }
`