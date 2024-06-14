import React from 'react';
import { styled } from 'styled-components';
import { StyledH2 } from '../../../../components/StyledH2';
import { StyledOrangeLink } from '../../../../components/StyledBtn';
import { PreviewArticle } from './PreviewArticle';

type LaptopUsefulInfoPropsType = {
    usefulInfo: Array<{
        id:number
        img:string
        title:string        
        path:string
        }>
    fontSize:number
}

export const LaptopUsefulInfo: React.FC<LaptopUsefulInfoPropsType> = (props: LaptopUsefulInfoPropsType) => {
    const usefulInfoR = [...props.usefulInfo].reverse();
    
    return (
        <StyledLaptopUsefulInfo>
            <Wrap>
                <StyledH2><span>Полезная информация</span></StyledH2>
                <StyledOrangeLink to="/usefulInfo">Все записи</StyledOrangeLink>
            </Wrap>
            <UsefulInfoList>
                {
                    usefulInfoR.slice(0, -1).map((article) => {
                        return (
                            <PreviewArticle 
                                key={article.id}
                                article={article}
                                fontSize={props.fontSize}
                            />
                        );                        
                    })
                }
            </UsefulInfoList>
                                        
        </StyledLaptopUsefulInfo>
    );
};

const StyledLaptopUsefulInfo = styled.section`
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

const UsefulInfoList = styled.ul`
    display: flex;    
    justify-content: space-between;
    gap: 20px;    
`