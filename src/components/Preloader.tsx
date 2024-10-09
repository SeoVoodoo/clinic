import React from 'react';
import spinner from './../assets/images/single-img/spinner.svg';
import { styled } from 'styled-components';

export const Preloader = () => {
    return (
        <StyledPreloader>                  
                <img src = {spinner} alt="" />        
        </StyledPreloader>
    );
};

const StyledPreloader = styled.div`
    width: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;    
`

