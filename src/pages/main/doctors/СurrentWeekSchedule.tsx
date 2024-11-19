import React from 'react';
import { styled } from 'styled-components';
import { weekDay, weekDayType } from '../../../redux/timeTableReducer';

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

type СurrentWeekSchedulePropsType = {
    currentWeekSurovaSchedule: schedule
    currentWeekBebelyaSchedule: schedule
    days: string[]
    dates: string[]
    fontSize:number
}

export const СurrentWeekSchedule: React.FC<СurrentWeekSchedulePropsType> = (props:СurrentWeekSchedulePropsType) => {
    const surova = props.currentWeekSurovaSchedule;
    const bebelya = props.currentWeekBebelyaSchedule; 
    return (
        <StyledСurrentWeekSchedule>
            <TableWrap>
                <Table cellspacing={0} cellpadding={0} fontSize={props.fontSize}> 
                    <Head>
                        <Row>
                            <Cell>Филиал</Cell>
                            {props.dates.map((currentData:string, i) => { 
                            return (
                                <Cell key={i}>
                                <span>{props.days[i]}</span><br /><span>{currentData}</span>
                                </Cell>
                            );
                            })}
                        </Row>
                    </Head>
                    <Body>                      
                        {surova && 
                          <Row>
                              <Cell>пр-т. Врача Сурова, 4</Cell>                          
                              {weekDay.map((day) => {
                                  return surova[day as weekDayType] !== undefined && 
                                  <Cell 
                                    colspan={surova[day as weekDayType] === "Отпуск" 
                                    ? surova.colspan 
                                    : 1}
                                  >
                                    {surova[day as weekDayType] === "прием на Бебеля,1А"
                                      ? ""
                                      : surova[day as weekDayType]}
                                  </Cell>;
                              })}
                          </Row>
                        }  
                        {bebelya &&
                          <Row>
                              <Cell>ул. Бебеля, 1А</Cell>                          
                              {weekDay.map((day) => {
                                return bebelya[day as weekDayType] !== undefined && 
                                  <Cell 
                                    colspan={bebelya[day as weekDayType] === "Отпуск" 
                                    ? bebelya.colspan 
                                    : 1}
                                  >
                                    {bebelya[day as weekDayType]}
                                  </Cell>;
                              })}
                          </Row>
                        }
                    </Body>
                </Table> 
            </TableWrap>            
        </StyledСurrentWeekSchedule>
    );
};

const  StyledСurrentWeekSchedule = styled.div`
    
`

const TableWrap = styled.div`
  width: 100%; 
  overflow-x: auto;
  margin-bottom: 20px;  
`
const Table = styled.table<{cellspacing:number, cellpadding:number, fontSize:number}>`  
  border-collapse: collapse;
  margin: 0 auto 5px;
  max-width: 1200px;
  width: 100%;
  overflow: hidden; 
  display: ${props => props.fontSize > 18 ? "table" : "block"};
  border: 1px solid ${({theme}) => theme.color.multiСhannel};
  border-radius: 16px; 
  
  @media ${({theme}) => theme.media.laptop} {
    display: table;
    border: none;
  }
`

const Head = styled.thead` 
  td {
    border-top: none;
    padding: 10px 20px;  
    background-color: ${({theme}) => theme.bgCol.tables.mainCell};
  }  

  td span:first-child {
    font-weight: 700;
  } 

  tr > td:first-child{
    font-weight: 700;    
  }
`
const Body = styled.tbody` 
  tr:last-child td {
    border-bottom: none;
  } 

  tr > td:first-child  {    
    text-align: left;
    padding: 8px 10px;
    background-color: ${({theme}) => theme.bgCol.tables.mainCell};   
  }
`

const Row = styled.tr`

  td:first-child {
    border-left: none;
    width: 190px;
    max-width: 320px;
  }

  td:not(:first-child) {
    width: 148px;
    max-width: 172px;    
  }

  td:last-child {
    border-right: none;
  }
`

const Cell = styled.td<{colspan?:number}>`
  border: 1px solid ${({theme}) => theme.color.multiСhannel};  
  padding: 2px 4px; 
  text-align: center;  
  background-color: ${props => props.colspan && props.colspan > 1 
    ? ({theme}) => theme.bgCol.tables.vacation
    : ({theme}) => theme.bgCol.default};  
  
`