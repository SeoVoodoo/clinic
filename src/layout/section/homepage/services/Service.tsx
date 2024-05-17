import React from 'react';
import { css, styled } from 'styled-components';
import { StyledBgImage } from '../../../../components/social/StyledBgImage';
import { NavLink } from 'react-router-dom';


type ServicePropsType = {
    serviceName:string
    path:string
    bgPosition:string
    slideIndex: number
}

export const Service: React.FC<ServicePropsType> = (props: ServicePropsType) => {   

    return (
        <StyledService slideIndex={props.slideIndex}>
            <NavLink 
                to={`/${props.path}`}
                style={{display: 'block'}}            
            >
                <WrapCard>
                    <ServiceName>{props.serviceName}</ServiceName>
                    <StyledBgImage pos={props.bgPosition} />
                </WrapCard>
            </NavLink>
            
        </StyledService>
    );
};

const StyledService = styled.li<{slideIndex: number}>`
    width: 303px;    
    height: 80px;
    padding: 10px 15px;
    border-radius: 24px;    
    
        
    list-style: none;
    outline: 1px solid ${({theme}) => theme.color.outline};
    
   
    @media ${({theme}) => theme.media.tablet} {
            width: 222px;
            height: 60px;
            padding: 0 15px;       
    }



    &:hover{        
            box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
            //box-shadow: 7px 7px 5px 0px rgba(0, 0, 0, 0.25);
        }

    
    
    

    ${props => props.slideIndex === 0 && css<{slideIndex: number}>`
        background-color: ${({theme}) => theme.bgCol.homePage.advantages[0]};
          
    `}
    ${props => props.slideIndex === 1 && css<{slideIndex: number}>`
        background-color: ${({theme}) => theme.bgCol.homePage.advantages[1]}   
    `}
    ${props => props.slideIndex === 2 && css<{slideIndex: number}>`
        background-color: ${({theme}) => theme.bgCol.homePage.advantages[2]}   
    `}
    ${props => props.slideIndex === 3 && css<{slideIndex: number}>`
        background-color: ${({theme}) => theme.bgCol.homePage.advantages[3]}   
    `}
`
const WrapCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${StyledBgImage}{
        width: 60px;
        height: 60px;
        flex-shrink: 0;

        @media ${({theme}) => theme.media.tablet} {
            transform: scale(0.75);       
        }
    }
`
const ServiceName = styled.span`
    color: ${({theme}) => theme.color.defaultText};  
    font-weight: 700;    
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.14 - 1) + 1rem); 
`