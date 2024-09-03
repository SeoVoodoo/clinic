import React from 'react';
import { styled } from 'styled-components';

type VisuallyImpairedPanelPropsType = {
    handleToggleTheme: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
    handleFontSize: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
    windowWidth:number
    breakpoint:number
} 

export const VisuallyImpairedPanel: React.FC<VisuallyImpairedPanelPropsType > = (props: VisuallyImpairedPanelPropsType ) => {     

    return (
        <StyledVisuallyImpairedPanel>
            <WrapGroupBtn>
                {props.windowWidth > props.breakpoint ? <span>Размер шрифта:</span> : <span>Размер<br />шрифта:</span>}
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
            </WrapGroupBtn>
            <WrapGroupBtn>
                {props.windowWidth > props.breakpoint ? <span>Цвет сайта:</span> : <span>Цвет<br />сайта:</span>}                
                <Button 
                    onClick={props.handleToggleTheme} 
                    name="light" 
                    type="button"                    
                >
                    А
                </Button>
                <Button 
                    onClick={props.handleToggleTheme} 
                    name="dark" 
                    type="button"                    
                >
                    А
                </Button>
                <Button 
                    onClick={props.handleToggleTheme} 
                    name="blue" 
                    type="button"                   
                >
                    А
                </Button>  
            </WrapGroupBtn>          
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

    display: flex;

    & > div:first-of-type > button:first-of-type { 
        background-color: ${({theme}) => theme.bgCol.default};
        color: ${({theme}) => theme.color.borderVisuallyImpairedPanelBtn}; 
    }

    & > div:first-of-type > button:nth-of-type(2) {
        background-color: ${({theme}) => theme.bgCol.default}; 
        color: ${({theme}) => theme.color.borderVisuallyImpairedPanelBtn};       
        margin-left: -1px;
        margin-right: 40px;
    }

    & > div:last-of-type > button:first-of-type {
        background-color: white;
        color: black;
    }

    & > div:last-of-type > button:nth-of-type(2) {
        background-color: black;
        color: white; 
        margin-left: 1px;
    }

    & > div:last-of-type > button:last-of-type {
        background-color: rgba(157, 209, 255, 1);
        color: black; 
        margin-left: 1px;
    }

    @media ${({theme}) => theme.media.mobile} {
        font-size: 0.86rem;
    }
`
const WrapGroupBtn = styled.div`
    display: flex;
    align-items: center;

    span {        
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
    
    @media ${({theme}) => theme.media.mobile} {
        width: 30px;
        height: 31px;
        line-height: 12px;
    }
`