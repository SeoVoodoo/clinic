import React from 'react';
import { css, styled } from 'styled-components';
import { StyledGreenLink } from '../../../../components/StyledBtn';

type PreviewArticlePropsType = {
    article: {
        id:number
        img:string
        title:string        
        path:string
    }
    fontSize:number
}

export const PreviewArticle: React.FC<PreviewArticlePropsType> = (props: PreviewArticlePropsType) => {
    return (
        <StyledPreviewArticle fontSize={props.fontSize}>

            <Picture>
                <img src={props.article.img} />
            </Picture>
            <Info fontSize={props.fontSize}>
                <Title fontSize={props.fontSize}>{props.article.title}</Title>
                <StyledGreenLink to={`/${props.article.path}`}>Читать</StyledGreenLink>                
            </Info>        
            
        </StyledPreviewArticle>
    );
};



const StyledPreviewArticle = styled.li<{fontSize:number}>`    
    max-width: 304px;
    width: 100%;    
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
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;         
    padding: 16px 20px 20px;
    border-radius: 24px;
    background-color: ${({theme}) => theme.bgCol.default};
    outline: 1px solid ${({theme}) => theme.color.outline};
    margin-top: -54px;
    z-index: 10;
    min-height: 186px;    
    height: ${props => props.fontSize > 14 ? "100%" : "186px"};    

    @media ${({theme}) => theme.media.laptop} {
        padding: 16px 12px 15px;    
    }

    @media ${({theme}) => theme.media.tablet} {
        margin-top: -44px;    
    }
`

const Title = styled.span<{fontSize:number}>`    
    font-weight: 700;
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.14 - 1) + 1rem);
    margin-bottom: 6px; 
    word-break: ${props => props.fontSize > 14 ? "break-all" : "normal"};    
`



