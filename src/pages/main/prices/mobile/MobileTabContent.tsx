import React from 'react';
import { css, styled } from 'styled-components';



type MobileTabContentPropsType = {
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
    active:string
    activePanel:string     
}

export const MobileTabContent: React.FC<MobileTabContentPropsType> = (props: MobileTabContentPropsType) => {
  
  return (
        <StyledMobileTabContent activePanel={props.activePanel} active={props.active}>            
          <TableWrap>
            <Table>
              <Head>
                <tr>
                  <th>Код по номенклатуре услуг</th>
                  <th>{props.activePanel === "geneticResearch" ? "Срок выполнения, раб. дн" : "Код"}</th>
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
           
        </StyledMobileTabContent>
    );
};

const StyledMobileTabContent = styled.nav<{active:string, activePanel:string}>`
    
    overflow: hidden;
    max-height: 0;
    
    table {
      transform: scale(0);
    }
    

    ${props => props.active === props.activePanel && css<{active:string, activePanel:string}>`
      max-height: 30000px;
      transition: max-height 2s ease-in-out;//cubic-bezier(1, 0, 1, 0);  
      table {            
        transform: scale(1);
        transform-origin: 0 0;
        transition: transform 0.5s ease-in-out 0.25s;
        -webkit-transition: transform 0.5s ease-in-out 0.25s;
        -moz-transition: transform 0.5s ease-in-out 0.25s;
      }
    `}


`

const TableWrap = styled.div` 
  
  width: 100%;
  padding: 10px 10px 3px;
  border: 2px solid ${({theme}) => theme.color.primary};  
  margin: 0 auto; 
  overflow-x: auto;
`

const Table = styled.table`
  max-width: 1200px;
  border-collapse: separate;
  overflow: hidden;
  //border: 1px solid ${({theme}) => theme.color.multiСhannel};
  /* border-radius: 16px;
  -webkit-border-radius: 16px;
  -moz-border-radius: 16px; */
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

const Line = styled.tr<{chapter?:boolean, subChapter?:boolean, subSubChapter?:boolean, title?:boolean}>`  

  td:not(:nth-child(3)) {
    font-weight: 700;
    text-align: center;
  }

  td:nth-child(3) {
    text-align: ${props => props.chapter || props.subChapter || props.subSubChapter || props.title ? "center" : "left"};
    font-weight: ${props => props.chapter || props.subChapter || props.subSubChapter || props.title ? "700" : "400"};
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