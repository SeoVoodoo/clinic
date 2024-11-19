import React from 'react';
import { styled } from 'styled-components';
import { timeTableMapper, weekDay, weekDayType } from '../../../redux/timeTableReducer';
import { ScrollTop } from '../../../components/ScrollTop';
import { StyledH2 } from '../../../components/StyledH2';


interface Data {
  doctor:string
  description:string
}

type TablesPropsType = {
  currentBranch: {
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
  }
  days: string[]
  dates: string[][]  
  fontSize:number  
}

export const Tables: React.FC<TablesPropsType> = (props: TablesPropsType) => {  
  
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
      procedure,
      aslanova,
      ilgachev,
      malanina,
      stepanova,
      gordeev,
      belij,
      konovalova,
      brigina,
      malyankova,
      diagnostics
   } = props.firstColumn;

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
    procedure: <span><b>{procedure.doctor}</b><br />{procedure.description}</span>,
    aslanova: <span><b>{aslanova.doctor}</b><br />{aslanova.description}</span>,
    ilgachev: <span><b>{ilgachev.doctor}</b><br />{ilgachev.description}</span>,
    malanina: <span><b>{malanina.doctor}</b><br />{malanina.description}</span>,
    stepanova: <span><b>{stepanova.doctor}</b><br />{stepanova.description}</span>,
    gordeev: <span><b>{gordeev.doctor}</b><br />{gordeev.description}</span>,
    belij: <span><b>{belij.doctor}</b><br />{belij.description}</span>,
    konovalova: <span><b>{konovalova.doctor}</b><br />{konovalova.description}</span>,
    brigina: <span><b>{brigina.doctor}</b><br />{brigina.description}</span>,
    malyankova: <span><b>{malyankova.doctor}</b><br />{malyankova.description}</span>,
    diagnostics: <span><b>{diagnostics.doctor}</b><br />{diagnostics.description}</span>
  }
  
  
    return (
        <StyledTables>
        <ScrollTop />        
          <Wrap>
            <Comment>Выберите период:</Comment>
            <nav>
              <List>
                {props.dates.map( (currentDates, index) => {
                  return (
                    <li>
                      <CurrentLink
                        href={`#${currentDates[0].slice(0, 6)}-${currentDates[6].slice(0, 6)}`}
                      >
                        {currentDates[0].slice(0, 6)} - {currentDates[6].slice(0, 6)}
                      </CurrentLink>
                    </li>                  
                  )
                })}
              </List>
            </nav>
            {props.dates.map( (currentDates, index) => {
              return (
                <TableWrap>
                  <StyledH2 
                    id={`${currentDates[0].slice(0, 6)}-${currentDates[6].slice(0, 6)}`}
                  >
                    Расписание на период c {currentDates[0].slice(0, 6)} по {currentDates[6].slice(0, 6)}            
                  </StyledH2>
                  <Table cellspacing={0} cellpadding={0} fontSize={props.fontSize}> 
                    <Head>
                      <Row>
                        <Cell>ФИО /<br />специальность</Cell>
                        {currentDates.map((carrentData:string, i) => { 
                          return (
                            <Cell key={i}>
                              <span>{props.days[i]}</span><br /><span>{carrentData}</span>
                            </Cell>
                          );
                        })}
                      </Row>
                    </Head>
                    <Body>
                      {props.currentBranch[index].map(row => {
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
          </Wrap>         
        </StyledTables>
    )    
};


const StyledTables = styled.div`
  ${StyledH2} {
    text-align: left;    
  }
  margin-bottom: 50px;  
`

const Wrap = styled.div`
  width: 100%;
  padding: 20px 40px 40px;
  border: 2px solid ${({theme}) => theme.color.primary};  
  border-radius: 0 0 24px 24px;  
  margin: 0 auto 100px; 
  overflow-x: auto;

  @media ${({theme}) => theme.media.tablet} {
    padding: 10px;
  } 

  @media ${({theme}) => theme.media.mobile} {
    padding: 10px 10px 3px;
    border-radius: 0;
    margin: 0 auto;
  } 
`
const Comment = styled.span`
  display: inline-block;
  margin-bottom: 20px;
  color: ${({theme}) => theme.color.multiСhannel};
  font-size: 1rem;
  font-weight: 400;
`
const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-bottom: 20px;

  @media ${({theme}) => theme.media.lg992} {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 15px;
  } 

  @media ${({theme}) => theme.media.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    gap: 10px;
  } 
`
const CurrentLink = styled.a`  
  display: block;
  padding: 22px 0;
  border: 1px solid ${({theme}) => theme.color.multiСhannel};
  border-radius: 24px;
  font-weight: 700;
  font-size: calc((100vw - 26rem)/(137 - 26) * (1.43 - 1) + 1rem); 
  color: ${({theme}) => theme.color.multiСhannel};  
  text-align: center;
  text-decoration: none;
  &:hover {
    background-color: ${({theme}) => theme.bgCol.btn.primary};
    color: ${({theme}) => theme.color.defaultBtn};   
    border: 1px solid ${({theme}) => theme.color.primary};
  }
  @media ${({theme}) => theme.media.tablet} {
      padding: 16px 0;
  }  
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