import React from 'react';
import { styled } from 'styled-components';
import { StyledH2 } from '../../../../components/StyledH2';
import { Advantage } from './Advantage';

type AdvantagesPropsType = {
    advantages:  Array<{bgPosition:string, startWord:string, endWord:string}> 
    fontSize:number
}

export const Advantages: React.FC<AdvantagesPropsType> = (props: AdvantagesPropsType) => {
    return (
        <StyledAdvantages>
            <StyledH2>
                Альянс <span>Клиник</span><br/> в гармонии с собой, в альянсе со здоровьем!
            </StyledH2>
            <AdvantagesList fontSize={props.fontSize}>
                {
                    props.advantages.map((el, i) => {
                        return (
                            <Advantage 
                                key={i} 
                                pos={el.bgPosition} 
                                startWord={el.startWord}
                                endWord={el.endWord}
                                num={i}
                                fontSize={props.fontSize}
                            /> 
                        )
                    })
                }
            </AdvantagesList>
        </StyledAdvantages>
    );
};

const StyledAdvantages = styled.section`
        
`
const AdvantagesList = styled.ul<{fontSize:number}>`
    display: grid;
    grid-template-columns: repeat(auto-fit, 304px);    
    grid-auto-rows: ${props => props.fontSize > 14 ? "238px" : "208px"};
    justify-content: center;
    gap: 20px;

    @media ${({theme}) => theme.media.tablet} {
        grid-template-columns: repeat(2, minmax(200px, 250px));        
    }

    @media ${({theme}) => theme.media.mobile} {        
        grid-template-columns: ${props => props.fontSize > 14 ? "280px" : "repeat(2, 150px)"};
        grid-template-rows: ${props => props.fontSize > 14 ? "repeat(4, 280px)" : "repeat(2, 150px)"};
    }
`
