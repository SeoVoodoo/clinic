import React from 'react';
import { styled } from 'styled-components';

type VisuallyImpairedPanelPropsType = {
    handleToggleTheme: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
    handleFontSize: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
} 

export const VisuallyImpairedPanel: React.FC<VisuallyImpairedPanelPropsType > = (props: VisuallyImpairedPanelPropsType ) => {     

    return (
        <StyledVisuallyImpairedPanel>
            <span>Размер шрифта:</span>
            <Button 
                type="button"
                name="decrease"
                onClick={props.handleFontSize}
            >
                А-
            </Button>
            <Button 
                type="button"
                name="add"
                onClick={props.handleFontSize}
            >
                А+
            </Button>

            <span>Цвет сайта:</span>
            <Button onClick={props.handleToggleTheme} name="light" type="button">А</Button>
            <Button onClick={props.handleToggleTheme} name="dark" type="button">А</Button>
            <Button onClick={props.handleToggleTheme} name="blue" type="button">А</Button>            
        </StyledVisuallyImpairedPanel>
    );
};

const StyledVisuallyImpairedPanel = styled.div`
    height: 58px;
    width: max-content; 
    margin: 0 auto;
    padding: 10px 0;

    font-weight: 700;
    font-size: 1rem;

    button:first-of-type { 
        background-color: ${({theme}) => theme.bgCol.default};
        color: ${({theme}) => theme.color.borderVisuallyImpairedPanelBtn}; 
    }

    button:nth-of-type(2) {
        background-color: ${({theme}) => theme.bgCol.default}; 
        color: ${({theme}) => theme.color.borderVisuallyImpairedPanelBtn};       
        margin-left: -1px;
        margin-right: 40px;
    }

    button:nth-of-type(3) {
        background-color: white;
        color: black;        
        
    }

    button:nth-of-type(4) {
        background-color: black;
        color: white; 
        margin-left: 1px;
    }

    button:last-of-type {
        background-color: rgba(157, 209, 255, 1);
        color: black; 
        margin-left: 1px;
    }

    span {
        display: inline-block;
        margin-right: 15px;
    }
        
`

const Button = styled.button`
    width: 37px;
    height: 38px;
    border: 1px solid ${({theme}) => theme.color.borderVisuallyImpairedPanelBtn};
    font-size: 1rem;
    font-weight: 700;
    line-height: 36px;
    text-align: center;
    
`