import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Icon } from '../icon/Icon';

export const Search = () => {

    const [isHover, setIsHover] = useState(false);

    const toggleHover = () => {
        setIsHover(prev => !prev);
    }   

    
    return (
        <StyledSearch>
            <form role="search" method='get' action="">
                <WrapField>
                    
                    <Btn onMouseEnter={toggleHover} onMouseLeave={toggleHover} type="button">
                        <Icon 
                            id="search"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill={isHover ? "white" : "#1D1F24"}
                        />
                    </Btn>
                    <Field type="search" name="search-text" placeholder="Поиск по сайту" />
                </WrapField>
                                
            </form>            
        </StyledSearch>
    );
};

const StyledSearch = styled.div`
    grid-area: search;
    justify-self: center;
    
    max-width: 506px;
    width: 100%;
    
`
const WrapField = styled.div`    
    position: relative;
`
const Field = styled.input`
    width: 100%;
    height: 38px;
    line-height: 18px;
    padding: 0 20px 0 64px;
    border: 1px solid rgb(29, 31, 36);    
    border-radius: 10px; 

    

    &::placeholder,
    &::-webkit-input-placeholder {
        font-weight: 700; 
        font-size: 1rem;        
        color:  ${({theme}) => theme.color.placeholder};      
          
    }
    
    &:focus-visible {        
        outline: 2px solid aquamarine;
    }
`
const Btn = styled.button`    
    width: 64px;
    height: 38px;    
    border: none;
    border-radius: 10px 0 0 10px; 
    background-color: transparent;

    position: absolute; 
    transition: all 0.25s ease;   

    &:hover {
        background-color: rgb(29, 31, 36);      
    }
   
`
