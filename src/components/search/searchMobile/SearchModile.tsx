import React, { useState } from 'react';
import { styled, useTheme } from 'styled-components';
import { Icon } from '../../icon/Icon';

export const SearchMobile = () => {
    const theme = useTheme();
    const[isPush, setIsPush] = useState(false);

    function handleClickBtn () {
        setIsPush(prev => !prev);
    }  

    
    return (
        <StyledSearchMobile>
            <Wrap isPush={isPush}>
                <Btn onClick={handleClickBtn} type="button">
                    <Icon 
                        id="search"
                        width="18"
                        height="18"
                        viewBox="0 -1 24 24"                            
                        fill={theme.color.searchIcon}                          
                    />
                </Btn>
                <Form role="search" method='get' action="">                    
                    <Field 
                        type="search" 
                        name="search-text" 
                        placeholder="Поиск по сайту" 
                        isPush={isPush}
                    />
                </Form>  
            </Wrap>          
        </StyledSearchMobile>
    );
};

const StyledSearchMobile = styled.div`
    //position: relative;        
`
const Wrap = styled.div<{isPush:boolean}>`        
    /* position: absolute; */
    /* top: 50%;
    left: 100%;  */
    /* transform: translate(-50%, -50%); */
    width: ${props => props.isPush ? "274px" : "0px"};
    height: 26px;
    background-color: ${({theme}) => theme.bgCol.default}; 
    line-height: 26px;
    padding-right: 40px;
    border-radius: 8px;
    box-shadow: 0 0 10px ${({theme}) => theme.color.searchBoxShadow};
    transition: all 0.5s ease;
    padding-left: ${props => props.isPush ? "40px" : "0px"};     
    z-index: 100;  
    outline: 1px solid ${({theme}) => theme.color.outline};  
    
    position: relative;
`

const Btn = styled.button`    
    width: 40px;
    height: 26px;    
    border: none;        
    background-color: transparent;
    
    position: absolute; 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;       
`

const Form = styled.form`
    height: 26px;
`


const Field = styled.input<{isPush:boolean}>`
    
    border: 0;
    background-color: transparent;
    width: ${props => props.isPush ? "98%" : "0%"};
    height: 100%;
    z-index: 100;
    outline: none;
    
    font-size: 1rem;
   
    font-style: italic;
    color: ${({theme}) => theme.color.defaultText};
    transition: all 0.5s 0.6s ease;
    
    

    &::placeholder,
    &::-webkit-input-placeholder {
        font-weight: 700; 
        font-size: 1rem;        
        color:  ${({theme}) => theme.color.placeholder};
    }
    
    /* &:focus-visible {        
        outline: 2px solid aquamarine;
    } */
`

