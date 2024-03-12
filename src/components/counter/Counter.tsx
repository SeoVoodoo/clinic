import React from 'react';
import { styled } from 'styled-components';


export const Counter = () => {
    return (
        <StyledCounter>
            <TotalCount></TotalCount>
            <GirlsCount> </GirlsCount>
            <Kids></Kids>
            <BoysCount></BoysCount>            
        </StyledCounter>
    );
};

const StyledCounter = styled.div`
    grid-area: counter_children; 
    
    display: grid;
    grid-template-columns: minmax(128px, 196px) auto minmax(62px, 96px) auto;
    grid-template-areas:
        "total_count girls_count kids boys_count";  
`
const TotalCount = styled.div`
    grid-area: total_count;

`
const GirlsCount = styled.div`
    grid-area: girls_count;

`
const Kids = styled.div`
    grid-area: kids;

`
const BoysCount = styled.div`
    grid-area: boys_count;

`