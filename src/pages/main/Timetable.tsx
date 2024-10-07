import React from 'react';
import { Container } from '../../components/Container';
import { styled } from 'styled-components';
import { timeTableMapper } from '../../redux/timeTableReducer';

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
      days: Array<string[]>,
      surova: Array<{
        id:string,
        Monday?:string,
        Tuesday?:string,
        Wednesday?:string,
        Thursday?:string,
        Friday?:string,
        Saturday?:string,
        Sunday?:string,
        colspan?:number
      }>
    }
  }
}

const Timetable: React.FC<TimetablePropsType> = (props: TimetablePropsType) => {  

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
   } = props.timeTablePage.calendar.mapper;

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

  

  const columns = [
    { key: 'id', name: 'ФИО / специальность', width: 200, },
    { key: 'Monday', name: 'Пн 04.03.2024', width: 200 },
    { key: 'Tuesday', name: 'Вт 05.03.2024', width: 200 },
    { key: 'Wednesday', name: 'Ср 06.03.2024', width: 200 },  

  ];
  
  const rows = [
    
  ];
    return (
        <Container>          
          <Table cellspacing={0} cellpadding={0} style={{border:"1px solid black", width:"100%"}}>        
          {
            props.timeTablePage.calendar.surova.map(row => {
              return (
                <tr key={row.id}>
                  <Cell>{mapper[row.id as timeTableMapper]}</Cell>
                  {row.Monday !== undefined && <Cell colspan={row.Monday === "Отпуск" ? row.colspan : 1}>{row.Monday}</Cell>}
                  {row.Tuesday !== undefined && <Cell colspan={row.Tuesday === "Отпуск" ? row.colspan : 1}>{row.Tuesday}</Cell>}
                  {row.Wednesday !== undefined && <Cell colspan={row.colspan ?? 1}>{row.Wednesday}</Cell>}
                  {row.Thursday !== undefined && <Cell colspan={row.colspan ?? 1}>{row.Thursday}</Cell>}
                  {row.Friday !== undefined && <Cell colspan={row.colspan ?? 1}>{row.Friday}</Cell>}
                  {row.Saturday !== undefined && <Cell colspan={row.colspan ?? 1}>{row.Saturday}</Cell>}
                  {row.Sunday !== undefined && <Cell colspan={row.colspan ?? 1}>{row.Sunday}</Cell>}
                </tr>
              );
            })
          }
          </Table>
        </Container>
      )    
};

export default Timetable;

const Table = styled.table<{cellspacing:number, cellpadding:number}>`  
  border-collapse: collapse;
  margin: 50px 0;
`

const Cell = styled.td<{colspan?:number}>`
  border: 1px solid black;  
  min-width: 10px;
  text-align: center;
  //colspan: ${props => props.colspan ? props.colspan : 1};
`