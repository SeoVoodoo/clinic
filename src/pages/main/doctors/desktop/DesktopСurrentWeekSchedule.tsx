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

type DesktopСurrentWeekSchedulePropsType = {
    currentWeekSurovaSchedule: schedule
    currentWeekBebelyaSchedule: schedule
    days: string[]
    dates: string[]
    fontSize:number
    activeBtn?:string
}

export const DesktopСurrentWeekSchedule: React.FC<DesktopСurrentWeekSchedulePropsType> = (props:DesktopСurrentWeekSchedulePropsType) => {
    const surova = props.currentWeekSurovaSchedule;
    const bebelya = props.currentWeekBebelyaSchedule; 
    return (
        <StyledDesktopСurrentWeekSchedule>
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
        </StyledDesktopСurrentWeekSchedule>
    );
};

const  StyledDesktopСurrentWeekSchedule = styled.div`
    
`

const TableWrap = styled.div`
  width: 100%; 
  overflow-x: auto;
  margin-bottom: 20px;  
`
const Table = styled.table<{cellspacing:number, cellpadding:number, fontSize:number}>`  
  border-collapse: collapse;
  margin: 0 auto 5px;
  max-width: 1279px;
  width: 100%;
  overflow: hidden; 
  display: ${props => props.fontSize > 18 ? "table" : "block"};
  border: 1px solid ${({theme}) => theme.color.multiСhannel};
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px; 
  font-size: calc((100vw - 26rem)/(137 - 26) * (1.43 - 0.93) + 0.93rem); 
  
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
    text-align: center;
    font-weight: 700;
    padding: 22px 10px;
    background-color: ${({theme}) => theme.bgCol.tables.mainCell};  
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.29 - 0.93) + 0.93rem);  
  }
`

const Row = styled.tr`

  td:first-child {
    border-left: none;
    width: 280px;
    max-width: 320px;
  }

  td:not(:first-child) {
    width: 140px;
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