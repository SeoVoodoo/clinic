import React from 'react';
import { styled } from 'styled-components';
import { StyledH2 } from '../../../../components/StyledH2';
import { PartnerLogo } from './PartnerLogo';
//import { StyledBgImage } from '../../../../components/social/StyledBgImage';

type PartnersPropsType = {
    partners:Array<{
        id:number, 
        width?:string, 
        height?:string, 
        img:string
    }>
}

export const Partners: React.FC<PartnersPropsType> = (props: PartnersPropsType) => {
    return (
        <StyledPartners>
            <StyledH2>Партнеры клиники</StyledH2>
            <Title>Медицинское страхование:</Title>
            <List>
                {
                    props.partners.slice(0, 5).map((partner) => {
                        return (
                            <PartnerLogo 
                                key={partner.id}
                                partner={partner}
                                
                            />
                        );
                    })
                }
            </List>
            <Title>Лабораторная диагностика:</Title>
            <List>
                {
                    props.partners.slice(5).map((partner) => {
                        return (
                            <PartnerLogo
                                key={partner.id}
                                partner={partner}
                                                                
                            />
                        );
                    })
                }
            </List>            
        </StyledPartners>
    );
};

const StyledPartners = styled.section`

    & ul:last-of-type {
        margin-bottom: 0;
    }
    
`
const Title = styled.h3`
    margin-bottom: 36px;
    font-weight: 500;
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.14 - 1) + 1rem);
    text-align: center;
    color: ${({theme}) => theme.color.primary} ;   
`
const List = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
    margin-bottom: 46px;

    
    @media ${({theme}) => theme.media.laptop} {       
        gap: 30;          
    }      

    @media ${({theme}) => theme.media.tablet} {
        column-gap: 20px;
        row-gap: 16px;    
    }

    @media ${({theme}) => theme.media.mobile} {        
        row-gap: 12px;        
    }
    
`