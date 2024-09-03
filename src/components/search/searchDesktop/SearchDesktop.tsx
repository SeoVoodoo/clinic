import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Icon } from '../../icon/Icon';

type SearchDesktopPropsType = {
    windowWidth: number
}

export const SearchDesktop: React.FC<SearchDesktopPropsType> = (props: SearchDesktopPropsType) => {

    const [isHover, setIsHover] = useState(false);
    
    const toggleHover = () => {
        setIsHover(prev => !prev);
    }   

    
    return (
        <StyledSearchDesktop>
            <form role="search" method='get' action="">
                <WrapField>
                    
                    <Btn onMouseEnter={toggleHover} onMouseLeave={toggleHover} type="button">
                        <Icon 
                            id="search"
                            width={props.windowWidth > 767 ? "24" : "20"}
                            height={props.windowWidth > 767 ? "24" : "20"}
                            viewBox={props.windowWidth > 767 ? "0 0 24 24" : "0 0 24 24"}                            
                            fill={isHover ? "#1D1F24" : "#6b6b6b"}                            
                        />
                    </Btn>
                    <Field type="search" name="search-text" placeholder="Поиск по сайту" />
                </WrapField>
                                
            </form>            
        </StyledSearchDesktop>
    );
};

const StyledSearchDesktop = styled.div`
    /* grid-area: search;
    justify-self: center;    
    max-width: 506px;
    width: 100%;      */
`
const WrapField = styled.div`    
    position: relative;
`
const Field = styled.input`
    width: 100%;
    height: 38px;
    line-height: 18px;
    padding: 0 20px 0 64px;
    //border: 1px solid rgb(29, 31, 36); 
    border: 1.25px solid #6b6b6b;    
    border-radius: 10px; 
    font-size: 1.14rem;   
    font-style: italic;
    

    &::placeholder,
    &::-webkit-input-placeholder {
        font-weight: 700; 
        font-size: 1rem;        
        color:  ${({theme}) => theme.color.placeholder};      
          
    }
    
    &:focus-visible {        
        outline: 2px solid aquamarine;
    }

    @media ${({theme}) => theme.media.tablet} {
        height: 30px;
        padding: 0 16px 0 48px;
    }
`
const Btn = styled.button`    
    width: 64px;
    height: 38px;    
    border: none;
    border-radius: 10px 0 0 10px;
    padding-top: 2px; 
    background-color: transparent;
    

    position: absolute; 
    transition: all 0.25s ease;   

    /* &:hover {
        background-color: rgb(29, 31, 36);      
    } */

    @media ${({theme}) => theme.media.tablet} {
        width: 48px;
        height: 30px;
    }   
`
