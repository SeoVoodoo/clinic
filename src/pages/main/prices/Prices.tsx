import React, { memo, useState } from 'react';
import { styled } from 'styled-components';
import { Container } from '../../../components/Container';
import { DesktopTabs } from './desktop/DesktopTabs';
import { MobileTabs } from './mobile/MobileTabs';
import { tabNameType } from '../../../redux/pricesReducer';
import { PageTopPart } from '../../../components/PageTopPart';
import { ScrollTop } from '../../../components/ScrollTop';


type PricesPropsType = {
  windowWidth:number  
  pricesPage: {
    tabs: Array<{title:string, status:string}>
    pageTopPart: {
      pageName:string
      title:string
      srcDesktop:string
      srcTablet:string           
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

const Prices: React.FC<PricesPropsType> = memo((props: PricesPropsType) => {
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
      <ScrollTop />
      <PageTopPart 
        pageTopPart={props.pricesPage.pageTopPart}        
      />
      <Container>
        {props.windowWidth > breakpoint 
          ? <DesktopTabs 
              tabs={props.pricesPage.tabs}
              activeBtn={curentBtnActive}
              handleTabClick={handleTabClick}
              content={props.pricesPage.content[curentBtnActive as tabNameType]} 
              navigation={props.pricesPage.navigation[curentBtnActive as "surova"|"bebelya"]}                               
          /> 
          : <MobileTabs 
              tabs={props.pricesPage.tabs}              
              content={props.pricesPage.content}
              navigation={props.pricesPage.navigation}
          />
        }            
      </Container>
    </StyledPrices>      
  );
});

export default Prices;

const StyledPrices = styled.div`
  width: 100%;
`  