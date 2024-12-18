import React from 'react';
import { styled } from 'styled-components';
import { Container } from './Container';
import { BreadСrumbs } from './bread-crumbs/BreadСrumbs';
import { StyledH1 } from './StyledH1';

type PageTopPartPropsType = {
    pageTopPart: {
        pageName:string
        title:string
        srcDesktop:string
        srcTablet:string           
        srcMobile:string
    }    
}

export const PageTopPart: React.FC<PageTopPartPropsType> = (props: PageTopPartPropsType) => {
    
    return (
        <StyledPageTopPart bgColor={props.pageTopPart.pageName}>
            <Container>
                <Wrap>
                    <BreadСrumbs />
                    <StyledH1>{props.pageTopPart.title}</StyledH1>                    
                    <Pic>  
                        <source media="(max-width: 575px)" srcSet={props.pageTopPart.srcMobile} />
                        <source media="(min-width: 992px)" srcSet={props.pageTopPart.srcDesktop} />                   
                        <img src={props.pageTopPart.srcTablet} alt=""/>
                    </Pic>
                </Wrap>
            </Container>            
        </StyledPageTopPart>
    );
};

const StyledPageTopPart = styled.div<{bgColor:string}>`
    height: auto;
    background-color: ${props => ({theme}) => theme.bgCol.pageName[props.bgColor]};
`
const Wrap = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    padding-right: 4vw;    

    ${StyledH1} {
        grid-column: 1/2;
        grid-row: 2/3;
        align-self: center;
    }
`
const Pic = styled.picture`
    grid-column: 2/3;
    grid-row: 1/3;    
` 