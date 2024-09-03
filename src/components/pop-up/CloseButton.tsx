import React from 'react';
import { styled } from 'styled-components';

type CloseButtonPropsType = {    
    width?:string
    height?:string
    top?:string
    right?:string
    left?:string    
    handleToggleModalWindow?: () => void
    handleToggleSidebar?: () => void 
    handleCloseMobileModalWindowMenu?: () => void
    handleCloseMobileModalWindowContact?: () => void
}

export const CloseButton: React.FC<CloseButtonPropsType> = (props: CloseButtonPropsType) => {
    return (
        <StyledCloseButton>
            <Btn
                top={props.top} 
                right={props.right}
                left={props.left}
                onClick={
                    props.handleToggleModalWindow || 
                    props.handleToggleSidebar || 
                    props.handleCloseMobileModalWindowMenu ||
                    props.handleCloseMobileModalWindowContact
                } 
            >
            </Btn>            
        </StyledCloseButton>
    );
};

const StyledCloseButton = styled.div`    
    width: 100%;
    position: relative;    
`

const Btn = styled.button<{top?:string, right?:string, left?:string}>`
    position: absolute;
    top: ${props => props.top || "-18px"};
    right: ${props => props.right || "-18px"};
    left: ${props => props.left};

    width: 34px;
    height: 34px;
    border: none;
    background-color: ${({theme}) => theme.bgCol.default};

    &::before {
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        background-color: ${({theme}) => theme.bgCol.btn.close};                
        transform: translateY(1px) rotate(-45deg);
    }

    &::after {
        content: "";
        display: block;
        width: 100%;
        height: 2px;        
        background-color: ${({theme}) => theme.bgCol.btn.close};
        transform: translateY(-1px) rotate(45deg);       
    }
`
