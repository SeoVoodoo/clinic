import React from 'react';
import { styled } from 'styled-components';
import { StyledH2 } from '../../../../components/StyledH2';
import { Advantage } from './Advantage';

type AdvantagesPropsType = {
    advantages:  Array<{bgPosition:string, startWord:string, endWord:string}> 
}

export const Advantages: React.FC<AdvantagesPropsType> = (props: AdvantagesPropsType) => {
    return (
        <StyledAdvantages>
            <StyledH2>
                Альянс <span>Клиник</span><br/> в гармонии с собой, в альянсе со здоровьем!
            </StyledH2>
            <AdvantagesList>
                {
                    props.advantages.map((el, i) => {
                        return (
                            <Advantage 
                                key={i} 
                                pos={el.bgPosition} 
                                startWord={el.startWord}
                                endWord={el.endWord}
                                num={i}
                            /> 
                        )
                    })
                }
            </AdvantagesList>
        </StyledAdvantages>
    );
};

const StyledAdvantages = styled.section`
    margin-bottom: 80px;    
`
const AdvantagesList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, 304px);
    grid-auto-rows: 208px;
    justify-content: center;
    gap: 20px;

    @media ${({theme}) => theme.media.tablet} {
        grid-template-columns: repeat(2, minmax(200px, 250px));        
    }

    @media ${({theme}) => theme.media.mobile} {
        grid-template-columns: repeat(2, 150px);
        grid-template-rows: repeat(2, 150px);
    }
`
