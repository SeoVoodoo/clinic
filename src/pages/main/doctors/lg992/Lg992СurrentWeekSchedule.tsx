import React from 'react';
import { styled } from 'styled-components';
import { weekDay, weekDayType } from '../../../../redux/timeTableReducer';

interface schedule {
    id: string,
    Monday?: string,
    Tuesday?: string,
    Wednesday?: string,
    Thursday?: string,
    Friday?: string,
    Saturday?: string,
    Sunday?: string,
    colspan?: number
}

type Lg992СurrentWeekSchedulePropsType = {
    currentWeekSurovaSchedule: schedule
    currentWeekBebelyaSchedule: schedule
    days: string[]
    dates: string[]
    fontSize:number
    activeBtn?:string
}

export const Lg992СurrentWeekSchedule: React.FC<Lg992СurrentWeekSchedulePropsType> = (props:Lg992СurrentWeekSchedulePropsType) => {
    const surova = props.currentWeekSurovaSchedule;
    const bebelya = props.currentWeekBebelyaSchedule;
    const isOneBranch = !surova || !bebelya;
    //console.log("isOneBranch", isOneBranch);
    return (
        <StyledLg992СurrentWeekSchedule>
            <TableWrap>
                <Table cellspacing={0} cellpadding={0} fontSize={props.fontSize}> 
                    <Head isOneBranch={isOneBranch}>
                        <Row>
                          <Cell rowSpan={2}>Дата</Cell>
                          <Cell colSpan={2}>Филиал</Cell>
                        </Row>
                        <Row>
                          {(surova && bebelya) && <Cell>пр-т. Врача Сурова, 4</Cell>}
                          {(surova && bebelya) &&  <Cell>ул. Бебеля, 1А</Cell>}
                          {(surova && !bebelya) && <Cell colSpan={2}>пр-т. Врача Сурова, 4</Cell>}
                          {(bebelya && !surova) &&  <Cell colSpan={2}>ул. Бебеля, 1А</Cell>}
                        </Row>
                    </Head>
                    <Body>

                      {weekDay.map((day, index) => {

                        return ( 
                          <Row key={index}>

                            <Cell>
                              <span>{props.days[index]}</span><br /><span>{props.dates[index]}</span>  
                            </Cell>

                            { (surova && surova[day as weekDayType] !== undefined && !bebelya) &&
                            <Cell 
                              rowspan={surova[day as weekDayType] === "Отпуск" 
                              ? surova.colspan 
                              : 1}
                              colspan={2}
                            >                              
                              {surova[day as weekDayType] === "прием на Бебеля,1А"
                                ? ""
                                : surova[day as weekDayType]}
                            </Cell>}

                           
                            {(bebelya && bebelya[day as weekDayType] !== undefined && !surova) &&
                            <Cell 
                              rowspan={bebelya[day as weekDayType] === "Отпуск" 
                              ? bebelya.colspan 
                              : 1}
                              colspan={2}
                            > 
                              {bebelya[day as weekDayType] === "прием на Бебеля,1А"
                                ? ""
                                : bebelya[day as weekDayType]}
                            </Cell>}


                            {(surova && bebelya && surova[day as weekDayType] !== undefined) &&
                            <Cell 
                              rowspan={surova[day as weekDayType] === "Отпуск" 
                              ? surova.colspan 
                              : 1}                              
                            > 
                              {surova[day as weekDayType] === "прием на Бебеля,1А"
                                ? ""
                                : surova[day as weekDayType]}
                            </Cell>}
                            

                            {(bebelya && surova && bebelya[day as weekDayType] !== undefined) && 
                            <Cell 
                              rowspan={bebelya[day as weekDayType] === "Отпуск" 
                              ? bebelya.colspan 
                              : 1}                              
                            > 
                              {bebelya[day as weekDayType] === "прием на Бебеля,1А"
                                ? ""
                                : bebelya[day as weekDayType]}
                            </Cell>}
                          </Row>
                        )
                      })}                       
                    </Body>
                </Table> 
            </TableWrap>            
        </StyledLg992СurrentWeekSchedule>
    );
};

const  StyledLg992СurrentWeekSchedule = styled.div`
    
`

const TableWrap = styled.div`
  width: 100%; 
  overflow-x: auto;
  margin-bottom: 20px;  
`
const Table = styled.table<{cellspacing:number, cellpadding:number, fontSize:number}>`  
  display: table;
  //border: none;
  border-collapse: collapse;
  margin: 0 auto 5px;
  max-width: 992px;
  width: 100%;
  overflow: hidden; 
  //display: ${props => props.fontSize > 18 ? "table" : "block"};
  //border: 1px solid ${({theme}) => theme.color.multiСhannel};
  //border-bottom-left-radius: 16px;
  //border-bottom-right-radius: 16px; 
  font-size: calc((100vw - 26rem)/(137 - 26) * (1.43 - 0.93) + 0.93rem);   
  
`

const Head = styled.thead<{isOneBranch:boolean}>`
  font-weight: 700;

  tr:first-child > td:last-child {
    width: 100%;
    background-color: ${({theme}) => theme.bgCol.tables.mainCell};
  }

  tr:first-child td {
    border-top: none;
  }    
  td {    
    padding: 10px 20px;    
  }
  
  tr:first-child > td:first-child{
    width: 130px;             
  } 
  
  tr:last-child > td{
    width: ${props => props.isOneBranch ? "100%" : "50%"};             
  }
`
const Body = styled.tbody` 
  /* tr:last-child td {
    border-bottom: none;
  }  */

  tr > td:first-child  {    
    text-align: center;
    font-weight: 700;
    padding: 12px 10px;      
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.29 - 0.93) + 0.93rem);  
  }
  tr > td span:last-child {
    font-weight: 400;
  }
`

const Row = styled.tr`

`

const Cell = styled.td<{rowspan?:number, colspan?:number}>`
  border: 1px solid ${({theme}) => theme.color.multiСhannel};  
  padding: 2px 4px; 
  text-align: center;  
  background-color: ${props => props.rowspan && props.rowspan > 1 
    ? ({theme}) => theme.bgCol.tables.vacation
    : ({theme}) => theme.bgCol.default};  
  
`