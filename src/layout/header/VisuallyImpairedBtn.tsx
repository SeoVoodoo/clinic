import React, { useState } from 'react';
import { styled, useTheme } from "styled-components";
import { Icon } from '../../components/icon/Icon';

type VisuallyImpairedBtnPropsType = {
    handleVisuallyImpairedPanel: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
    isShowVisuallyImpairedPanel: boolean    
    breakpoint: number
    windowWidth: number
}


export const VisuallyImpairedBtn: React.FC<VisuallyImpairedBtnPropsType> = (props: VisuallyImpairedBtnPropsType) => {
    
    const theme = useTheme();
    const localBreakpoint = 992;
        
    return (
        <StyledVisuallyImpairedBtn            
            onClick={props.handleVisuallyImpairedPanel}                    
        >
            {props.isShowVisuallyImpairedPanel 
                ?
                <>
                    <Icon 
                        id="eye-off"
                        width="24"
                        height="24"
                        viewBox="0 0 48 48"
                        fill={theme.color.defaultText}
                        className="icon"
                    />
                    {props.windowWidth > localBreakpoint ? "Обычная версия сайта" : ""}
                </>                
                :
                <>
                    <Icon 
                        id="eye"
                        width="24"
                        height="16"
                        viewBox="0 0 24 16"
                        fill={theme.color.defaultText}
                        className="icon"                                              
                    />
                    {props.windowWidth > localBreakpoint ? "Версия для слабовидящих" : ""}                    
                </>
            }                        
        </StyledVisuallyImpairedBtn>
    );
};

const StyledVisuallyImpairedBtn = styled.button`        
    border: none;
    outline: 1px solid ${({theme}) => theme.color.outline};
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

    & > svg {
       flex-shrink: 0; 
    }

    &:hover {
        background-color: ${({ theme }) => theme.bgCol.defaultHover};
        color: ${({ theme }) => theme.color.defaultTextHover};

        .icon {
            fill: ${({ theme }) => theme.color.defaultTextHover};
        }
    }

    @media ${({theme}) => theme.media.mobile} {
        &:hover {
            background-color: ${({theme}) => theme.bgCol.default};
            color: ${({theme}) => theme.color.defaultText};
            .icon {
                fill: ${({theme}) => theme.color.defaultText};
            }
        }
    }

    @media ${({theme}) => theme.media.lg992} {
        width: 40px;
        height: 40px;
        padding: 5px 8px;
        border-radius: 8px;        
    }    

    @media ${({theme}) => theme.media.mobile} {        
        height: 26px;                
    }
`