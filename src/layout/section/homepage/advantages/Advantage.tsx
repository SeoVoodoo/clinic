import React from 'react';
import { css, styled } from 'styled-components';
import { StyledBgImage } from '../../../../components/social/StyledBgImage';

type AdvantagePropsType = {
    pos:string
    startWord:string
    endWord:string
    num:number
    fontSize:number
}

// type StyledAdvantagePropsType = {
//     num:number
// }

export const Advantage: React.FC<AdvantagePropsType> = (props: AdvantagePropsType) => {
    //console.log("num", typeof props.num);
    return (
        <StyledAdvantage num={props.num} fontSize={props.fontSize}>
            <StyledBgImage pos={props.pos} />
            <Text>{props.startWord}<br />{props.endWord}</Text>          
        </StyledAdvantage>
    );
};


const StyledAdvantage = styled.li<{num:number, fontSize:number}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;   
    outline: 1px solid ${({theme}) => theme.color.outline};

    @media ${({theme}) => theme.media.mobile} {  
        gap: 0;
    }    
    
    ${StyledBgImage} {
        width: 99px; 
        height: 90px;        

        @media ${({theme}) => theme.media.mobile} {  
            //transform: scale(0.5);  
            transform: ${props => props.fontSize > 14 ? "scale(1)" : "scale(0.5)"}           
        }
    }

    ${props => props.num === 0 && css<{num:number}>`
        background-color: ${({theme}) => theme.bgCol.homePage.advantages[0]}
    `}

    ${props => props.num === 1 && css<{num:number}>`
        background-color: ${({theme}) => theme.bgCol.homePage.advantages[1]}
    `}

    ${props => props.num === 2 && css<{num:number}>`
        background-color: ${({theme}) => theme.bgCol.homePage.advantages[2]}
    `}

    ${props => props.num === 3 && css<{num:number}>`
        background-color: ${({theme}) => theme.bgCol.homePage.advantages[3]}
    `}
`

const Text = styled.span`
    text-align: center;
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.4 - 1.1) + 1.1rem);
    font-weight: 700;    
`