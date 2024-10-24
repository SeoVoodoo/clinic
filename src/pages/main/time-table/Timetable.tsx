import React, { memo, useState } from 'react';
import { styled } from 'styled-components';
import { Container } from '../../../components/Container';
import { PageTopPart } from '../../../components/PageTopPart';
import { ScrollTop } from '../../../components/ScrollTop';
import { TabMenu } from '../prices/TabMenu';
import { Tables } from './Tables';

interface Data {
    doctor:string
    description:string
  }

type TimetablePropsType = {    
    fontSize:number
    timeTablePage: {
      pageTopPart: {
        pageName:string
        title:string
        srcDesktop:string 
        srcTablet:string          
        srcMobile:string
      }
      tabs: Array<{title:string, status:string}>    
      calendar: {
        firstColumn: {
          gordeeva_1: Data,
          gordeeva_2: Data,
          volkova: Data,
          ladyagina: Data,
          sabirova: Data,
          serebryakova: Data,
          shabarshina: Data,
          simanskaya: Data,
          lavrenuk: Data,
          klemendeev: Data,
          salmina: Data,
          kogevnikova: Data,
          manipulation: Data,
          procedure: Data,
          aslanova: Data,
          ilgachev: Data,
          malanina: Data,
          stepanova: Data,
          gordeev: Data,
          belij: Data,
          konovalova: Data,
          brigina: Data,
          malyankova: Data,
          diagnostics: Data
        },
        days: string[]
        dates: string[][]
        surova: {
          id:string,
          Monday?:string,
          Tuesday?:string,
          Wednesday?:string,
          Thursday?:string,
          Friday?:string,
          Saturday?:string,
          Sunday?:string,
          colspan?:number
        }[][]
        bebelya: {
          id:string,
          Monday?:string,
          Tuesday?:string,
          Wednesday?:string,
          Thursday?:string,
          Friday?:string,
          Saturday?:string,
          Sunday?:string,
          colspan?:number
        }[][]
      }
    }
  }

const Timetable: React.FC<TimetablePropsType> = memo((props: TimetablePropsType) => {
  const[curentBtnActive, setCurentBtnActive] = useState("surova");
  
  const handleTabClick = (status:string) => {
    switch(status) {
      case "bebelya": 
        setCurentBtnActive("bebelya");
        break;      
      default: setCurentBtnActive("surova");
    }
  }    
  return (  
    <StyledTimetable>
      <ScrollTop />
      <PageTopPart 
        pageTopPart={props.timeTablePage.pageTopPart}        
      />
      <Container>        
      
        <TabMenu 
            tabs={props.timeTablePage.tabs}
            activeBtn={curentBtnActive}
            handleTabClick={handleTabClick}
            fontSize={props.fontSize}
        />
        <Tables           
            currentBranch={props.timeTablePage.calendar[curentBtnActive as "surova" | "bebelya"]}            
            firstColumn={props.timeTablePage.calendar.firstColumn}   
            days={props.timeTablePage.calendar.days}
            dates={props.timeTablePage.calendar.dates}
            fontSize={props.fontSize}
        />            
                    
      </Container>
    </StyledTimetable>      
  );
});

export default Timetable;

const StyledTimetable = styled.div`
  width: 100%;
` 


