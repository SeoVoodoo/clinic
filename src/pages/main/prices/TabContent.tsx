import React, { memo } from 'react';
import { css, styled } from 'styled-components';
import { Dropdown } from '../../../components/Dropdown';

type TabContentPropsType = {
    currentNavigation: Array<{name:string, href:string}>|null
    currentContent: Array<{
        firstCell:string
        secondCell:string
        thirdCell:string
        fourthСell:string
        chapter?:boolean
        subChapter?:boolean
        subSubChapter?:boolean
        title?:boolean
    }>    
    activeBtn:string          
}

export const TabContent: React.FC<TabContentPropsType> = memo((props: TabContentPropsType) => {
    
    return (
        <StyledTabContent activeBtn={props.activeBtn} >                     
          <TableWrap>
            {props.currentNavigation && 
              <Dropdown currentNavigation={props.currentNavigation}/>
            }            
            <Table>
              <Head>
                <tr>
                  <th>Код по номенклатуре услуг</th>
                  <th>{props.activeBtn === "geneticResearch" ? "Срок выполнения, раб. дн" : "Код"}</th>
                  <th>Наименование услуги</th>
                  <th>Стоимость услуги, руб.</th>
                </tr>
              </Head>
              <Body>
                {
                  props.currentContent.map((line) => {
                    return (
                      <Line 
                        chapter={line.chapter} 
                        id={line.chapter || line.subChapter || line.subSubChapter ? line.firstCell : null}
                        subChapter={line.subChapter}
                        subSubChapter={line.subSubChapter} 
                        title={line.title}
                      >
                        <Ceel>{line.firstCell}</Ceel>
                        <Ceel>{line.secondCell}</Ceel>
                        <Ceel>{line.thirdCell}</Ceel>
                        <Ceel>{line.fourthСell}</Ceel>
                      </Line>
                    );
                  })
                }
              </Body>
            </Table>
          </TableWrap>           
        </StyledTabContent>
    );
});

const StyledTabContent = styled.nav<{activeBtn:string}>`
  
  @media ${({theme}) => theme.media.mobile} {  
    max-height: ${props => props.activeBtn !== "" ? "50000px" : "0"};
    overflow: ${props => props.activeBtn !== "" ? "visible" : "hidden"};
    table {
      transform: ${props => props.activeBtn !== "" ? "scale(1)" : "scale(0)"};
      transform-origin: 0 0;
      transition: transform ${props => props.activeBtn !== "" ? "0.75s ease-in-out" : "0.95s ease-in-out"};    
    }
  }
`

const TableWrap = styled.div`
  width: 100%;
  padding: 20px 40px 40px;
  border: 2px solid ${({theme}) => theme.color.primary};  
  border-radius: 0 0 24px 24px;
  //outline: 2px solid ${({theme}) => theme.color.primary};
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
const Table = styled.table`
  max-width: 1200px;
  border-collapse: separate;
  overflow: hidden;  
  margin: 0 auto;  
`
const Head = styled.thead`
  tr {
    background-color: rgba(243, 252, 250, 1);
  }

  th {
    padding: 10px 12px;
    border: 1px solid ${({theme}) => theme.color.multiСhannel};
    font-size: calc((100vw - 26rem)/(137 - 26) * (1 - 0.86) + 0.86rem);
  }

  th:last-child {
    max-width: 149px;
  }

  tr:first-child th:first-child { border-top-left-radius: 16px; }
  tr:first-child th:last-child { border-top-right-radius: 16px; }
`

const Body = styled.tbody` 
  td {
    border: 1px solid ${({theme}) => theme.color.multiСhannel};
  }
`

const Line = styled.tr<{chapter?:boolean, subChapter?:boolean, subSubChapter?:boolean, title?:boolean, id:string|null}>`  

  td:not(:nth-child(3)) {
    font-weight: 700;
    text-align: center;
  }

  td:nth-child(3) {
    text-align: ${props => props.chapter || props.subChapter || props.title || props.subSubChapter ? "center" : "left"};
    font-weight: ${props => props.chapter || props.subChapter || props.title || props.subSubChapter ? "700" : "400"};
  }

  td:nth-child(2n) {    
    max-width: 149px;    
  }

  &:last-child td:first-child { border-bottom-left-radius: 16px; }
  &:last-child td:last-child { border-bottom-right-radius: 16px; }  

  ${props => props.chapter && css`
    background-color: rgba(231, 236, 240, 1);
  `}

  ${props => props.subChapter && css`
    background-color: rgba(253, 215, 173, 1);
  `}

  ${props => props.subSubChapter && css`
    background-color: rgba(213, 243, 238, 0.3);
  `}
`
const Ceel = styled.td`
  padding: 10px; 
  font-size: calc((100vw - 26rem)/(137 - 26) * (1 - 0.86) + 0.86rem); 
`