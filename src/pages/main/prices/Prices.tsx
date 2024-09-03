import React, { useState } from 'react';
import { styled } from 'styled-components';
//import { TabMenu } from './TabMenu';
import { Container } from '../../../components/Container';
//import { TabContent } from './TabContent';
import { DesktopTabs } from './desktop/DesktopTabs';
import { MobileTabs } from './mobile/MobileTabs';


type PricesPropsType = {
  windowWidth:number

  pricesPage: {
    tabs: Array<{title:string, status:string}>
    // content: {
    //   surova: contentType 
    //   bebelya: contentType 
    //   geneticResearch: contentType 
    // }
    content: {
      surova: Array<{
        firstCell:string
        secondCell:string
        thirdCell:string
        fourthСell:string
        chapter?:boolean
        subchapter?:boolean
      }>
      bebelya: Array<{
        firstCell:string
        secondCell:string
        thirdCell:string
        fourthСell:string
        chapter?:boolean
        subchapter?:boolean
      }>
      geneticResearch: Array<{
        firstCell:string
        secondCell:string
        thirdCell:string
        fourthСell:string
        chapter?:boolean
        subchapter?:boolean
      }>
    }    
  }
}

type btnNameType = "surova"|"bebelya"|"geneticResearch"; 

export const Prices: React.FC<PricesPropsType> = (props: PricesPropsType) => {
  const[curentBtnActive, setCurentBtnActive] = useState("surova");
  const breakpoint = 576;
  const handleTabClick = (status:string) => {
    switch(status) {
      case "bebelya": 
        setCurentBtnActive("bebelya");
        break;
      case "geneticResearch":
        setCurentBtnActive("geneticResearch");
        break;
      default: setCurentBtnActive("surova");
    }
  }    
  return (
    <StyledPrices>
      <Container>
        {props.windowWidth > breakpoint 
          ? <DesktopTabs 
              tabs={props.pricesPage.tabs}
              active={curentBtnActive}
              handleTabClick={handleTabClick}
              content={props.pricesPage.content[curentBtnActive as btnNameType]}                  
            /> 
          : <MobileTabs 
              tabs={props.pricesPage.tabs}
              active={curentBtnActive}
              handleTabClick={handleTabClick}
              content={props.pricesPage.content}
            />
        }            
      </Container>
    </StyledPrices>
  );
};

const StyledPrices = styled.div`
  width: 100%;
`  