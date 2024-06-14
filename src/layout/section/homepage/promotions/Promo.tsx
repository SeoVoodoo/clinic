import React from 'react';
import { Link } from 'react-router-dom';
import { css, styled } from 'styled-components';


type PromoPropsType = {
    promo: {
        id:number
        endDate:string
        title:string
        subTitle?:string
        sale?:string
        note?:string
        path:string
        frontImg:string
        backImg:string        
      },
      fontSize:number      
}

export const Promo: React.FC<PromoPropsType> = (props: PromoPropsType) => {
    return (
        <StyledPromo 
            id={props.promo.id}
            frontImg={props.promo.frontImg} 
            backImg={props.promo.backImg}
            fontSize={props.fontSize}
        >
            <Link 
                to={`/${props.promo.path}`}
                style={{display: 'block'}}            
            >
                <Container>
                    <FlexWrap>
                        <Date fontSize={props.fontSize}>{props.promo.endDate}</Date>
                        <Title fontSize={props.fontSize}>{props.promo.title}</Title>
                        <SubTitle fontSize={props.fontSize}>{props.promo.subTitle}</SubTitle>
                        {
                          props.promo.id !== 3 && (
                            <Sale id={props.promo.id}>
                                {props.promo.sale}
                            </Sale>
                          )  
                        }
                        {
                            props.promo.id === 3 && (
                                <Note fontSize={props.fontSize}>{props.promo.note}</Note>
                            )
                        }
                         
                    </FlexWrap>
                    <Decoration                        
                        frontImg={props.promo.frontImg} 
                        backImg={props.promo.backImg}
                        fontSize={props.fontSize}
                    >
                    </Decoration>
                </Container> 
            </Link>
        </StyledPromo>
    );
};

const StyledPromo = styled.li<{id:number, frontImg:string, backImg:string, fontSize:number}>`
    list-style: none;    
    border-radius: 24px;
    outline: 1px solid ${({theme}) => theme.color.outline};
    max-width: 414px;
    width: 100%;
    height: ${props => props.fontSize > 14 ? "330px" : "285px" };

    &:hover {
        cursor: pointer;
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
    }

    @media ${({theme}) => theme.media.laptop} {
        max-width: 354px;  
        width: 304px;         
        height: ${props => props.fontSize > 14 ? "375px" : "228px" };        
        flex-grow: 1;       
    }

    @media ${({theme}) => theme.media.tablet} {
        max-width: ${props => props.fontSize > 14 ? "354px" : "291px" };
        height: ${props => props.fontSize > 14 ? "375px" : "200px" };         
    }

    @media ${({theme}) => theme.media.mobile} {        
        max-width: ${props => props.fontSize > 14 ? "354px" : "267px" };        
        height: ${props => props.fontSize > 14 ? "375px" : "185px" };         
    }

    ${props => props.id === 1 && css<{id:number, frontImg:string, backImg:string}>`
        background-color: ${({theme}) => theme.bgCol.homePage.promotions[1].bg};

        ${Title}{
            color: ${({theme}) => theme.color.homePage.promotions[1].title};
        }

        ${SubTitle}{
            color: ${({theme}) => theme.color.homePage.promotions[1].subTitle};
        }
    `}

    ${props => props.id === 2 && css<{id:number, frontImg:string, backImg:string}>`
        background-color: ${({theme}) => theme.bgCol.homePage.promotions[2].bg};

        ${Title}{
            color: ${({theme}) => theme.color.homePage.promotions[2].title};
        }
        
        ${SubTitle}{
            color: ${({theme}) => theme.color.homePage.promotions[2].subTitle};
        }
    `}

    ${props => props.id === 3 && css<{id:number, frontImg:string, backImg:string}>`
        background-color: ${({theme}) => theme.bgCol.homePage.promotions[3].bg};

        ${Title}{
            color: ${({theme}) => theme.color.homePage.promotions[3].title};
        } 
        
        ${SubTitle}{
            color: ${({theme}) => theme.color.homePage.promotions[3].subTitle};
        }
    `}
       
`
const Container = styled.div`    
    position: relative;
`
const Decoration = styled.div<{frontImg:string, backImg:string, fontSize:number}>`
    max-width: 179px;
    width: 100%;    
    height: ${props => props.fontSize > 14 ? "330px" : "285px" };   
    border-radius: 0 24px 24px 0;
    background-image: url(${props => props.frontImg}), url(${props => props.backImg});
    background-position: right bottom;
    background-repeat: no-repeat;    
    filter: ${({theme}) => theme.filter};   

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    

    @media ${({theme}) => theme.media.laptop} {
        height: ${props => props.fontSize > 14 ? "375px" : "228px" };
        background-size: contain;        
    }

    @media ${({theme}) => theme.media.tablet} {
        height: ${props => props.fontSize > 14 ? "375px" : "200px" };               
    }

    @media ${({theme}) => theme.media.mobile} {
        height: ${props => props.fontSize > 14 ? "375px" : "185px" };              
    }
    
`
const FlexWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 40px 20px;

    position: absolute;
    top: 0;
    left: 0;    
    z-index: 10;

    @media ${({theme}) => theme.media.laptop} {
        padding: 30px 15px;
    }

    @media ${({theme}) => theme.media.tablet} {
        padding: 20px 15px;
    }

    @media ${({theme}) => theme.media.mobile} {
        padding: 20px 10px;       
    }
`
const Date = styled.span<{fontSize:number}>`
    width: max-content;     
    padding: 6px 10px;
    font-size: calc((100vw - 26rem)/(137 - 26) * (1 - 0.86) + 0.86rem); 
    outline: 1px solid ${({theme}) => theme.color.outline};
    background-color: ${({theme}) => theme.bgCol.default};
    color: ${({theme}) => theme.color.defaultText};    
    border-radius: 10px;  
    margin-bottom: 20px; 
    white-space: pre-wrap;
    
    @media ${({theme}) => theme.media.laptop} {
        width: ${props => props.fontSize > 14 ? "100%" : "max-content" };       
    }

    @media ${({theme}) => theme.media.tablet} {
        margin-bottom: 14px;       
    }

    @media ${({theme}) => theme.media.mobile} {
        margin-bottom: 8px;       
    }
`
const Title = styled.span<{fontSize:number}>`    
    max-width: ${props => props.fontSize > 14 ? "max-content" : "210px" };  
    width: 100%;
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.57 - 1) + 1rem);
    font-weight: 700;   

    @media ${({theme}) => theme.media.laptop} {
        max-width: ${props => props.fontSize > 14 ? "max-content" : "185px" };
    } 

    @media ${({theme}) => theme.media.tablet} {
        max-width: ${props => props.fontSize > 14 ? "max-content" : "165px" };
    } 

    @media ${({theme}) => theme.media.mobile} {
        max-width: ${props => props.fontSize > 14 ? "max-content" : "145px" };
    }  
`
const SubTitle = styled.span<{fontSize:number}>`
    max-width: ${props => props.fontSize > 14 ? "max-content" : "255px" }; 
    width: 100%;
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.57 - 1) + 1rem);
    font-weight: 700;

    @media ${({theme}) => theme.media.laptop} {
        max-width: ${props => props.fontSize > 14 ? "max-content" : "226px" };
    }

    @media ${({theme}) => theme.media.tablet} {
        max-width: ${props => props.fontSize > 14 ? "max-content" : "200px" };
    }
    
    @media ${({theme}) => theme.media.mobile} {
        max-width: ${props => props.fontSize > 14 ? "max-content" : "190px" };
    }
`
const Sale = styled.div<{id:number}>`
    padding: 12px 5px;
    font-weight: 700;
    width: max-content;
    margin-top: 20px;
    border-radius: 6px;
    border: 1px solid ${({theme}) => theme.color.secondary};
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.14 - 0.86) + 0.86rem);
    
    position: relative;

    &::before {
            content: "";
            position: absolute;
            top: -8px;
            left: 16px;
            z-index: 10;
            width: 15px;
            height: 15px;
            border-top: 1px solid ${({theme}) => theme.color.secondary};
            border-right: 1px solid ${({theme}) => theme.color.secondary};            
            transform: rotate(-45deg);
        } 

    @media ${({theme}) => theme.media.tablet} {
        padding: 8px 3px;
        margin-top: 16px;
    }
    
    
    ${props => props.id === 1 && css<{id:number}>`
        background-color: ${({theme}) => theme.bgCol.homePage.promotions[1].bgSale}; 
        color: ${({theme}) => theme.color.homePage.promotions[1].sale};  
        
        &::before {            
            background-color: ${({theme}) => theme.bgCol.homePage.promotions[1].bgSale};            
        }
    `}

    ${props => props.id === 2 && css<{id:number}>`
        background-color: ${({theme}) => theme.bgCol.homePage.promotions[2].bgSale}; 
        color: ${({theme}) => theme.color.homePage.promotions[2].sale};  
        
        &::before {            
            background-color: ${({theme}) => theme.bgCol.homePage.promotions[2].bgSale};           
        }
    `}
`
const Note = styled.div<{fontSize:number}>`    
    max-width: ${props => props.fontSize > 14 ? "max-content" : "215px" }; 
    width: 100%;
    margin-top: 4px;
    color: ${({theme}) => theme.color.defaultText};
    font-size: calc((100vw - 26rem)/(137 - 26) * (1 - 0.86) + 0.86rem);
`
