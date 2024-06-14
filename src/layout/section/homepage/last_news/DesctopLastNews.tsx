import React from 'react';
import { styled } from 'styled-components';
import { StyledH2 } from '../../../../components/StyledH2';
import { StyledOrangeLink } from '../../../../components/StyledBtn';
import { PreviewLastNews } from './PreviewLastNews';

type DesctopLastNewsPropsType = {
    lastNews: Array<{
        id:number
        img:string
        title:string
        data:string
        prev:string
        path:string
        }>
    fontSize:number
}

export const DesctopLastNews: React.FC<DesctopLastNewsPropsType> = (props: DesctopLastNewsPropsType) => {
    const lastNewsR = [...props.lastNews].reverse();
    
    return (
        <StyledDesctopLastNews>
            <Wrap>
                <StyledH2><span>Новости клиники</span></StyledH2>
                <StyledOrangeLink to="/news">Все новости</StyledOrangeLink>
            </Wrap>
            <LastNewsList>
                {
                    lastNewsR.map((news) => {
                        return (
                            <PreviewLastNews 
                                key={news.id}
                                news={news}
                                fontSize={props.fontSize}
                            />
                        );                        
                    })
                }
            </LastNewsList>
                                        
        </StyledDesctopLastNews>
    );
};

const StyledDesctopLastNews = styled.section`
  padding: 50px 0;  
`
const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    width: 100%;
    height: 60px;
    margin-bottom: 40px; 
    
    ${StyledH2} {
        margin-bottom: 0;
    }
`

const LastNewsList = styled.ul`
    display: flex;    
    justify-content: space-between;
    gap: 20px;    
`
