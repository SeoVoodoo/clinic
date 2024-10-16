import React from 'react';
import { styled } from 'styled-components';
//import sprite from '../../../../assets/images/png-sprite/icons/sprite-min.png'

type PartnerLogoPropsType = {
    partner:{
        id:number 
        width?:string
        height?:string
        img:string
    }
}

export const PartnerLogo: React.FC<PartnerLogoPropsType> = (props: PartnerLogoPropsType) => {
    return (
        <StyledPartnerLogo width={props.partner.width}>            
            <img loading="lazy" decoding="async" src={props.partner.img} alt="" />            
        </StyledPartnerLogo>
    );
};

const StyledPartnerLogo = styled.li<{width?: string}>`
    
   
   max-width: ${props => props.width};
   width: ${props => parseInt(`${props.width}`) * 0.9}px;     
   
   img {
    max-width: 100%;  
    height: auto;
   }

   @media ${({theme}) => theme.media.laptop} {       
    width: ${props => parseInt(`${props.width}`) * 0.8}px;         
   }  

   @media ${({theme}) => theme.media.tablet} {       
    width: ${props => parseInt(`${props.width}`) * 0.71}px;         
   }

   @media ${({theme}) => theme.media.mobile} {       
    width: ${props => parseInt(`${props.width}`) * 0.64}px;         
   }
`

