import React from 'react';
import { styled } from 'styled-components';
import sprite_counter from "../../assets/images/png-sprite/counter/sprite_counter-min.png";
import { BaloonsLeft, BaloonsRight, FirewWorkStars, kidsJump } from '../../styles/Animations';


type CounterPropsType = {
    counter: {
        boys: number
        girls: number         
    }
}

export const Counter: React.FC<CounterPropsType> = (props: CounterPropsType) => {
    const total = String(props.counter.girls + props.counter.boys);
    
    return (
        <StyledCounter>
            <WrapTotalCount>
                <span>Наши детки</span>
                <TotalCount>
                    
                    <FirewWorks></FirewWorks>
                    
                    <WrapCount>
                        <span>{total[0]}</span>
                        <span>{total[1]}</span>
                        <span>{total[2]}</span>
                        <span>{total[3]}</span>
                    </WrapCount>
                </TotalCount>
            </WrapTotalCount>
            <GirlsCount> 
                <span>Девочки</span>
                <span>{props.counter.girls}</span>
            </GirlsCount>
            <Kids></Kids>
            <BoysCount>
                <span>Мальчики</span>
                <span>{props.counter.boys}</span>
            </BoysCount>            
        </StyledCounter>
    );
};

const StyledCounter = styled.div`
    grid-area: counter_children; 
    justify-self: center;
    padding-top: 10px;
    
    max-width: 506px;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    font-style: italic;
    
    display: grid;
    grid-template-columns: minmax(128px, 196px) auto auto auto;
    grid-template-areas:
        "total_count girls_count kids boys_count";
`
const WrapTotalCount = styled.div`
    grid-area: total_count;
    text-align: center;
    overflow: hidden;

    & > span {        
        font-size: 20px;
        line-height: 20px;        
        color: ${({theme}) => theme.childrenCount.secondary};               
    }
    
`

const TotalCount = styled.div`
    
    max-width: 196px;
    width: 100%;
    height: 82px;
    
    background-image: url(${sprite_counter});
    background-position: 0 0;
    background-repeat: no-repeat;
    filter: ${({theme}) => theme.filter};    

    position: relative;
    
    &::before {
        content: "";
        display: block;
        width: 28px;
        height: 49px;
        background-image: url(${sprite_counter});
        background-position: -196px -66px;
        //filter: ${({theme}) => theme.filter};

        position: absolute;
        top: 8px;
        left: 14px;
        z-index: 10;
        animation: ${BaloonsLeft} 7s cubic-bezier(0.4, 0.51, 0.52, 0.57) infinite;
    }

    &::after {
        content: "";
        display: block;
        width: 37px;
        height: 66px;
        background-image: url(${sprite_counter});
        background-position: -196px 0px;
        //filter: ${({theme}) => theme.filter};

        position: absolute;
        top: 6px;
        right: 0;
        z-index: 10;
        animation: ${BaloonsRight} 7s cubic-bezier(0.4, 0.51, 0.52, 0.57) infinite;
    }    
`

const FirewWorks = styled.div`    
    display: block;
    width: 157px;
    height: 32px;
    background-image: url(${sprite_counter});
    background-position: 0px -146px;
    //filter: ${({theme}) => theme.filter};
    

    position: absolute;
    top: 30px;
    left: 30px;
    z-index: 10;
    animation:  ${FirewWorkStars} 2s ease-in-out infinite;

`
const WrapCount = styled.div`

    position: absolute; 
    width: max-content; 
         
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    

    span {
        display: inline-block;        
        font-style: normal;
        font-size: 2.85rem;
        line-height: 3.28rem;
        
        width: 30px;
        height: 44px;
        border: 1px solid ${({theme}) => theme.childrenCount.borderColor};
        text-align: center;
        background-color: ${({theme}) => theme.childrenCount.bgTotalColor};  
        color: ${({theme}) => theme.childrenCount.totalColor};             
    }

    span + span {
        margin-left: 2px;
    }
`
    

const GirlsCount = styled.div`
    grid-area: girls_count;
    
    font-size: 18px;
    line-height: 20px;     
    color: ${({theme}) => theme.childrenCount.primary};

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    
    span + span {
        font-size: 52px;
        line-height: 82px;
        color: ${({theme}) => theme.childrenCount.secondary};
    }

`
const Kids = styled.div`
    grid-area: kids;
    justify-self: end;

    display: block;
    margin-top: 25px;
    background-image: url(${sprite_counter});    
    background-position: 0px -82px;
    filter: ${({theme}) => theme.filter};
    width: 97px;
    height: 64px;

    animation: ${kidsJump} 3s cubic-bezier(0.4, 0, 0.2, 1) 8;
`
const BoysCount = styled.div`
    grid-area: boys_count;    
    
    font-size: 18px;
    line-height: 20px;
    color: ${({theme}) => theme.childrenCount.primary}; 

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    span + span {
        font-size: 52px;
        line-height: 82px;
        color: ${({theme}) => theme.childrenCount.secondary};
    }
`