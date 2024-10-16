import React from 'react';
import { Container } from '../../../components/Container';
import { styled } from 'styled-components';
import { timeTableMapper } from '../../../redux/timeTableReducer';
import { ScrollTop } from '../../../components/ScrollTop';
import { InnerDays } from './InnerDays';
import { StyledH2 } from '../../../components/StyledH2';

interface Data {
  doctor:string
  description:string
}

type TimetablePropsType = {
  timeTablePage: {
    calendar: {
      mapper: {
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
        procedure: Data
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
    }
  }
}

const Timetable: React.FC<TimetablePropsType> = (props: TimetablePropsType) => {  
  const data = props.timeTablePage.calendar;

  const { 
      gordeeva_1,  
      gordeeva_2, 
      volkova, 
      ladyagina, 
      sabirova,
      serebryakova,
      shabarshina,
      simanskaya,
      lavrenuk,
      klemendeev,
      salmina,
      kogevnikova,
      manipulation,
      procedure
   } = data.mapper;

  const mapper = {
    gordeeva_1: <span><b>{gordeeva_1.doctor}</b><br />{gordeeva_1.description}</span>,
    gordeeva_2: <span><b>{gordeeva_2.doctor}</b><br />{gordeeva_2.description}</span>,
    volkova: <span><b>{volkova.doctor}</b><br />{volkova.description}</span>,
    ladyagina: <span><b>{ladyagina.doctor}</b><br />{ladyagina.description}</span>,
    sabirova: <span><b>{sabirova.doctor}</b><br />{sabirova.description}</span>,
    serebryakova: <span><b>{serebryakova.doctor}</b><br />{serebryakova.description}</span>,
    shabarshina: <span><b>{shabarshina.doctor}</b><br />{shabarshina.description}</span>,
    simanskaya: <span><b>{simanskaya.doctor}</b><br />{simanskaya.description}</span>,
    lavrenuk: <span><b>{lavrenuk.doctor}</b><br />{lavrenuk.description}</span>,
    klemendeev: <span><b>{klemendeev.doctor}</b><br />{klemendeev.description}</span>,
    salmina: <span><b>{salmina.doctor}</b><br />{salmina.description}</span>,
    kogevnikova: <span><b>{kogevnikova.doctor}</b><br />{kogevnikova.description}</span>,
    manipulation: <span><b>{manipulation.doctor}</b><br />{manipulation.description}</span>,
    procedure: <span><b>{procedure.doctor}</b><br />{procedure.description}</span>
  }

  const weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  type weekDayType = "Monday"|"Tuesday"|"Wednesday"|"Thursday"|"Friday"|"Saturday"|"Sunday" 

    return (
        <StyledTimetable>
        <ScrollTop />        
          <Container>
            {data.dates.map( (currentDates, index) => {
              return (
                <TableWrap>
                  <StyledH2>
                    Расписание на период c {currentDates[0].slice(0, 6)}-{currentDates[6].slice(0, 6)}            
                  </StyledH2>
                  <Table cellspacing={0} cellpadding={0}> 
                    <Head>
                      <Row>
                        <Cell>ФИО /<br />специальность</Cell>
                        {currentDates.map((carrentData:string, i) => { 
                          return (
                            <Cell key={i}>
                              <span>{data.days[i]}</span><br /><span>{carrentData}</span>
                            </Cell>
                          );
                        })}
                      </Row>
                    </Head>
                    <Body>
                      {data.surova[index].map(row => {
                        return (
                          <Row key={row.id}>
                            <Cell>{mapper[row.id as timeTableMapper]}</Cell>                          
                            {weekDay.map((day) => {
                              return row[day as weekDayType] !== undefined && <Cell colspan={row[day as weekDayType] === "Отпуск" ? row.colspan : 1}>{row[day as weekDayType]}</Cell>;
                            })}
                          </Row>
                        );
                      })}
                    </Body>
                  </Table> 
                </TableWrap>          
              );
            })}          
          </Container>
        </StyledTimetable>
    )    
};

export default Timetable;

const StyledTimetable = styled.div`
  ${StyledH2} {
    text-align: left;    
  }
  margin-bottom: 50px;  
`
const TableWrap = styled.div`
  width: 100%; 
  overflow-x: auto;
  margin-bottom: 20px;  
`
const Table = styled.table<{cellspacing:number, cellpadding:number}>`  
  border-collapse: collapse;
  margin: 0 auto 5px;
  max-width: 1200px;
  width: 100%;
  overflow: hidden; 
  display: block;
  border: 1px solid ${({theme}) => theme.color.multiСhannel};
  border-radius: 16px;  
`

const Head = styled.thead` 
  td {
    border-top: none;
    padding: 10px 20px;  
    background-color: rgba(243, 252, 250, 1);
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
    width: 164px;
    max-width: 320px;
    text-align: left;
    padding: 8px 10px;
    background-color: rgba(243, 252, 250, 1);    
  } 
`

const Row = styled.tr`

  td:first-child {
    border-left: none;
  }

  td:last-child {
    border-right: none;
  }
`

const Cell = styled.td<{colspan?:number}>`
  border: 1px solid ${({theme}) => theme.color.multiСhannel};  
  padding: 2px 4px;
  max-width: 172px;
  width: 148px;
  text-align: center;  
  background-color: ${props => props.colspan && props.colspan > 1 
    ? "rgba(246, 191, 142, 0.1)" 
    : ({theme}) => theme.bgCol.default};
`