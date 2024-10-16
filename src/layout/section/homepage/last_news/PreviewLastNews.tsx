import React from 'react';
import { css, styled } from 'styled-components';
import { StyledGreenLink } from '../../../../components/StyledBtn';

type PreviewLastNewsPropsType = {
    news: {
        id:number
        img:string
        title:string
        data:string
        prev:string
        path:string
    }
    fontSize:number
}

export const PreviewLastNews: React.FC<PreviewLastNewsPropsType> = (props: PreviewLastNewsPropsType) => {
    return (
        <StyledPreviewCard fontSize={props.fontSize}>
            <Picture>                
                <img loading="lazy" src={props.news.img} alt="" />                
            </Picture>
            <Info fontSize={props.fontSize}>
                <FlexWrap fontSize={props.fontSize}>
                    <Title fontSize={props.fontSize}>{props.news.title}</Title>
                    <Data>{props.news.data}</Data>
                </FlexWrap>
                <Post fontSize={props.fontSize}>{props.news.prev}</Post>
                <StyledGreenLink to={`/${props.news.path}`}>Читать новость</StyledGreenLink>                
            </Info>            
        </StyledPreviewCard>
    );
};

const StyledPreviewCard = styled.li<{fontSize:number}>`    
    max-width: 304px;
    width: 100%;
    //height: ${props => props.fontSize > 14 ? "max-content" : "100%"};
    display: flex;
    flex-direction: column;
    
    @media ${({theme}) => theme.media.mobile} {
        max-width: ${props => props.fontSize > 14 ? "304px" : "224px"}; 
    }
`

const Picture = styled.div`
    img {
        max-width: 100%;    
        height: auto;
    }    
`
const Info = styled.div<{fontSize:number}>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;         
    padding: 16px 20px 25px;
    border-radius: 24px;
    background-color: ${({theme}) => theme.bgCol.default};
    outline: 1px solid ${({theme}) => theme.color.outline};
    margin-top: -54px;
    z-index: 10;
    
    height: ${props => props.fontSize > 14 ? "100%" : "346px"}; 

    /* ${props => props.fontSize && css<{fontSize:number}>`
        height: ${props.fontSize > 14 ? "100%" : "249px"};    
    `} */

    @media ${({theme}) => theme.media.laptop} {
        padding: 15px 14px;    
    }

    @media ${({theme}) => theme.media.tablet} {
        margin-top: -44px;    
    }
`
const FlexWrap = styled.div<{fontSize:number}>`    
    display: flex;
    flex-direction: column;    
    height: ${props => props.fontSize > 14 ? "100%" : "114px"}; 
    margin-bottom: 12px;   

    @media ${({theme}) => theme.media.tablet} {
        height: ${props => props.fontSize > 14 ? "100%" : "126px"};     
    }
`
const Title = styled.span<{fontSize:number}>`    
    font-weight: 700;
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.14 - 1) + 1rem);
    margin-bottom: 6px;   
    
    @media ${({theme}) => theme.media.laptop} {
        word-break: ${props => props.fontSize > 14 ? "break-all" : "normal"}; 
    }

    @media ${({theme}) => theme.media.tablet} {
        word-break: normal; 
    }
`
const Data = styled.span`    
    margin-top: auto;    
    color: ${({theme}) => theme.color.multiСhannel};
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.14 - 1) + 1rem);
`
const Post = styled.span<{fontSize:number}>`    
    max-width: 268px;
    width: 100%;
    height: ${props => props.fontSize > 14 ? "100%" : "102px"};    
    margin-bottom: 16px;    
    font-size: calc((100vw - 26rem)/(137 - 26) * (1 - 0.86) + 0.86rem);
    color: ${({theme}) => theme.color.multiСhannel};
    font-weight: 600;

    @media ${({theme}) => theme.media.laptop} {
        height: ${props => props.fontSize > 14 ? "100%" : "120px"};     
    }
`
