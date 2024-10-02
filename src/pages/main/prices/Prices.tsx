import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Container } from '../../../components/Container';
import { DesktopTabs } from './desktop/DesktopTabs';
import { MobileTabs } from './mobile/MobileTabs';
import { tabNameType } from '../../../redux/pricesReducer';
import { PageTopPart } from '../../../components/PageTopPart';


type PricesPropsType = {
  windowWidth:number
  
  pricesPage: {
    tabs: Array<{title:string, status:string}>
    pageTopPart: {
      pageName:string
      title:string
      srcDesktop:string           
      srcMobile:string
    }
    navigation: {
      surova: Array<{name:string, href:string}>
      bebelya: Array<{name:string, href:string}>      
    }
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
      <PageTopPart 
        pageTopPart={props.pricesPage.pageTopPart} 
        windowWidth={props.windowWidth}
      />
      <Container>
        {props.windowWidth > breakpoint 
          ? <DesktopTabs 
              tabs={props.pricesPage.tabs}
              active={curentBtnActive}
              handleTabClick={handleTabClick}
              content={props.pricesPage.content[curentBtnActive as tabNameType]} 
              navigation={props.pricesPage.navigation[curentBtnActive as "surova"|"bebelya"]}                               
            /> 
          : <MobileTabs 
              tabs={props.pricesPage.tabs}
              active={curentBtnActive}              
              handleTabClick={handleTabClick}
              content={props.pricesPage.content}
              navigation={props.pricesPage.navigation}
            />
        }            
      </Container>
    </StyledPrices>
  );
};

const StyledPrices = styled.div`
  width: 100%;
`  