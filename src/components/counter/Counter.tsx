import React from 'react';
import { styled } from 'styled-components';
import sprite_counter from "../../assets/images/png-sprite/counter/sprite_counter-min.png";
import { BaloonsLeft, BaloonsRight, FirewWorkStars, kidsJump } from '../../styles/Animations';


type CounterPropsType = {
    counter: {
        boys: number
        girls: number         
    }
    fontSize?:number
}

export const Counter: React.FC<CounterPropsType> = (props: CounterPropsType) => {
    const total = String(props.counter.girls + props.counter.boys);
    
    return (
        <StyledCounter fontSize={props.fontSize}>
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

const StyledCounter = styled.div<{fontSize?:number}>`
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

    @media ${({theme}) => theme.media.lg992} {
        display: ${props => props.fontSize && props.fontSize > 14 ? "none" : "grid"};
        max-width: 394px;
        margin: 0 auto; 
        grid-template-columns: minmax(128px, 170px) auto auto auto;
        align-items: center;        
    }

    @media ${({theme}) => theme.media.mobile} {
        max-width: 224px;        
        margin-bottom: 10px;        
        grid-template-columns: auto 1fr auto;
        grid-template-areas:
        "total_count total_count total_count" 
        "girls_count kids boys_count";        
    }
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

    @media ${({theme}) => theme.media.lg992} {
        width: 170px;
        margin: 0 auto;
        
        & > span {
            font-size: 16px;
            line-height: 16px; 
        }
    }

    /* @media ${({theme}) => theme.media.mobile} {
        width: 170px; 
        margin: 0 auto;
        

        & > span {
            font-size: 1.14rem;
            line-height: 1.14rem; 
        }
    } */
    
    
`

const TotalCount = styled.div`
    
    width: 196px;
    //width: 100%;
    height: 82px;
    
    background-image: url(${sprite_counter});
    background-position: 0 0;
    background-size: 118.878%, 217.073%;
    background-repeat: no-repeat;
    filter: ${({theme}) => theme.filter};    

    position: relative;
    
    &::before {
        content: "";
        display: block;
        width: 28px;
        height: 49px;
        background-image: url(${sprite_counter});
        //background-position: -196px -66px;
        background-position: 95.61% 51.163%;
        background-size: 832.143%, 363.265%;
        //filter: ${({theme}) => theme.filter};

        position: absolute;
        top: 8px;
        left: 10px;
        z-index: 10;
        animation: ${BaloonsLeft} 7s cubic-bezier(0.4, 0.51, 0.52, 0.57) infinite;
    }

    &::after {
        content: "";
        display: block;
        width: 37px;
        height: 66px;
        background-image: url(${sprite_counter});
        //background-position: -196px 0px;
        background-position: 100% 0;
        background-size: 629.73%, 269.697%;
        //filter: ${({theme}) => theme.filter};

        position: absolute;
        top: 6px;
        right: 0;
        z-index: 10;
        animation: ${BaloonsRight} 7s cubic-bezier(0.4, 0.51, 0.52, 0.57) infinite;
    }   

    @media ${({theme}) => theme.media.lg992} {
        width: 149.96px;
        height: 62.42px;
        margin: 0 auto;        

        &::before {
            width: 20.27px;
            height: 36.48px;
            left: 4px;
        }

        &::after {
            width: 27.56px;
            height: 49.45px;
        }

    }
    
    /* @media ${({theme}) => theme.media.mobile} {
        width: 149.96px;
        height: 62.42px;
        margin: 0 auto;        

        &::before {
            width: 20.27px;
            height: 36.48px;
            left: 4px;
        }

        &::after {
            width: 27.56px;
            height: 49.45px;
        }
    } */
`

const FirewWorks = styled.div`    
    display: block;
    width: 157px;
    height: 32px;
    background-image: url(${sprite_counter});
    //background-position: 0px -146px;
    background-position: 0 100%;
    background-size: 148.408%, 556.25%;
    //filter: ${({theme}) => theme.filter};
    

    position: absolute;
    top: 30px;
    left: 30px;
    z-index: 10;
    animation:  ${FirewWorkStars} 2s ease-in-out infinite;

    @media ${({theme}) => theme.media.lg992} {
        width: 119.97px;        
        height: 24.32px;
    }

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
        /* font-size: 2.85rem;
        line-height: 3.28rem; */
        font-size: 40px;
        line-height: 44px;
        
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

    @media ${({theme}) => theme.media.lg992} {        
        span {
            width: 23.51px;        
            height: 33.23px;
            /* font-size: 2.2rem;
            line-height: 2.53rem; */
            font-size: 30px;
            line-height: 33px;
        }        
    }
`
    

const GirlsCount = styled.div`
    grid-area: girls_count;
    
    /* font-size: 1.29rem;
    line-height: 1.43rem;*/
    font-size: 18px;
    line-height: 20px; 
    color: ${({theme}) => theme.childrenCount.primary};

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    
    span + span {
        /* font-size: 3.71rem;
        line-height: 5.86rem; */
        font-size: 52px;
        line-height: 82px; 
        color: ${({theme}) => theme.childrenCount.secondary};
    }

    @media ${({theme}) => theme.media.lg992} {
        /* font-size: 1.14rem;
        line-height: 1.29rem; */
        font-size: 16px;
        line-height: 18px; 
        margin-left: 30px;

        span + span {
            /* font-size: 2.9rem;
            line-height: 3.33rem; */
            font-size: 40px;
            line-height: 46px; 
        }
    }

    @media ${({theme}) => theme.media.mobile} {
        margin-left: 0;
    }

`
const Kids = styled.div`
    grid-area: kids;
    justify-self: end;

    display: block;
    margin-top: 25px;
    background-image: url(${sprite_counter});    
    //background-position: 0px -82px;
    background-position: 0 71.93%;
    background-size: 240.206%, 278.125%;
    filter: ${({theme}) => theme.filter};
    width: 97px;
    height: 64px;

    animation: ${kidsJump} 3s cubic-bezier(0.4, 0, 0.2, 1) 8;

    @media ${({theme}) => theme.media.lg992} {
        width: 73.76px;
        height: 47.83px;
        margin-top: 12px;
    }
`
const BoysCount = styled.div`
    grid-area: boys_count;    
    
    /* font-size: 1.29rem;
    line-height: 1.43rem; */
    font-size: 18px;
    line-height: 20px;
    color: ${({theme}) => theme.childrenCount.primary}; 

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    span + span {
        /* font-size: 3.71rem;
        line-height: 5.86rem; */
        font-size: 52px;
        line-height: 82px;
        color: ${({theme}) => theme.childrenCount.secondary};
    }

    @media ${({theme}) => theme.media.lg992} {
        /* font-size: 1.14rem;
        line-height: 1.29rem; */
        font-size: 16px;
        line-height: 18px;

        span + span {
            /* font-size: 2.9rem;
            line-height: 3.33rem; */
            font-size: 40px;
            line-height: 46px;
        }
    }
`