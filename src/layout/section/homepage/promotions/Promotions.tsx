import React from 'react';
import { styled } from 'styled-components';
import { StyledH2 } from '../../../../components/StyledH2';
import { Promo } from './Promo';

type PromotionsPropsType = {
    promotions: Array<{
        id:number
        endDate:string
        title:string
        subTitle?:string
        sale?:string
        note?:string
        path:string
        frontImg:string
        backImg:string
      }>,
    fontSize:number  
}

export const Promotions: React.FC<PromotionsPropsType> = (props: PromotionsPropsType) => {
    return (
        <StyledPromotions>
            <StyledH2>
                Акции
            </StyledH2>
            <PromotionList>
                {
                    props.promotions.map(promo => {
                        return (
                            <Promo 
                                key={promo.id} 
                                promo={promo} 
                                fontSize={props.fontSize}
                            />
                        );
                    })
                }
            </PromotionList>

        </StyledPromotions>
    );
};

const StyledPromotions = styled.section`
    
`

const PromotionList = styled.ul`
    display: flex;
    
    justify-content: space-between;
    gap: 20px;

    @media ${({theme}) => theme.media.laptop} {
        justify-content: center; 
        flex-wrap: wrap;   
    }

    @media ${({theme}) => theme.media.tablet} { 
        flex-direction: column;
        align-items: center;
    }
`