import React from 'react';
import { styled } from 'styled-components';
import { MobileTabContent } from './MobileTabContent';
import { TabContent } from '../TabContent';

type MobileTabsPropsType = {
    tabs: Array<{title:string, status:string}>
    active:string
    handleTabClick: (status:string) => void
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

type statusType = "surova"|"bebelya"|"geneticResearch"; 

export const MobileTabs: React.FC<MobileTabsPropsType> = (props: MobileTabsPropsType) => {
    return (
        <StyledMobileTabs>
            <ul>
                {
                    props.tabs.map((obj, index) => {
                        //const path = obj.status;
                        return (
                            <ListItem key={index}>
                                <TabBtn 
                                    active={props.active === obj.status}
                                    onClick={() => props.handleTabClick(obj.status)}
                                >
                                    {obj.title}
                                </TabBtn>
                                <MobileTabContent                                    
                                    active={props.active}
                                    currentContent={props.content[obj.status as statusType]}
                                    activePanel={obj.status}
                                />
                            </ListItem>
                        );
                    })
                }
            </ul>
        </StyledMobileTabs>
    );
};

const StyledMobileTabs = styled.div`
    margin-bottom: 60px;
    ul {
        display: flex;
        flex-direction: column;
    }    
`
const ListItem = styled.li`
`
const TabBtn = styled.button<{active:boolean}>` 
    width: 100%;
    //height: 70px;
    z-index: -1;
    border: none;
    outline: 1px solid ${props => props.active ? ({theme}) => theme.color.outline : ({theme}) => theme.color.multiСhannel};
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.43 - 1) + 1rem);    
    padding: 22px;    
    //border-radius: 24px 24px 0 0;    
    color: ${props => props.active ? ({theme}) => theme.color.defaultBtn : ({theme}) => theme.color.multiСhannel};  
    background-color:  ${props => props.active ? ({theme}) => theme.bgCol.btn.primary : ({theme}) => theme.bgCol.default};  
  

`