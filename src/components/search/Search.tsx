import React, { useState } from 'react';
import { styled } from 'styled-components';
import { SearchDesktop } from './searchDesktop/SearchDesktop';
import { SearchMobile } from './searchMobile/SearchModile';
import { WindowSize } from '../../hooks/WindowSize';

type SearchPropsType = {
    windowWidth: number
}

export const Search: React.FC<SearchPropsType> = (props: SearchPropsType) => {
    const breakpoint = 576;
    

    return (
        <StyledSearch>            
            {props.windowWidth > breakpoint 
            ? <SearchDesktop windowWidth={props.windowWidth} /> 
            : <SearchMobile />}
        </StyledSearch> 
    );    
    
};

const StyledSearch = styled.div`
    max-width: 506px;
    @media ${({theme}) => theme.media.lg992} {
      max-width: 360px;  
      margin-left: 12px;
    }
    @media screen and (min-width: 577px) {
        grid-area: search;
        justify-self: center;    
        /* max-width: 506px; */
        width: 100%;
    }         
`

