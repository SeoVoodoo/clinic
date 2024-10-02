import React, { useState } from 'react';
import { styled, useTheme } from 'styled-components';
import { TabContent } from '../TabContent';
import { tabNameType } from '../../../../redux/pricesReducer';
import { Icon } from '../../../../components/icon/Icon';

type MobileTabsPropsType = {
    tabs: Array<{title:string, status:string}>
    active:string
    handleTabClick: (status:string) => void
    navigation: {
        surova: Array<{name:string, href:string}>
        bebelya: Array<{name:string, href:string}>      
      }
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

export const MobileTabs: React.FC<MobileTabsPropsType> = (props: MobileTabsPropsType) => {
    const theme = useTheme();
    const [openTab, setOpenTab] = useState("");

    const handlClick = (status: string) => {
        if(status === openTab){
            setOpenTab("");  
        }
        else {
            setOpenTab(status);
        }        
        props.handleTabClick(status);
    }
    return (
        <StyledMobileTabs>
            <ul>
                {
                    props.tabs.map((obj, index) => {                        
                        return (
                            <ListItem key={index} >
                                <TabBtn 
                                    //active={props.active === obj.status}
                                    //onClick={() => props.handleTabClick(obj.status)}
                                    active={openTab !== "" && props.active === obj.status}
                                    onClick={() => handlClick(obj.status)}
                                >
                                    {obj.title}
                                    <Icon
                                        id={openTab !== "" && props.active === obj.status ? "arrow_up_tab" : "arrow_down_tab"}
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24" 
                                        fill={openTab !== "" && props.active === obj.status ? theme.color.defaultBtn : theme.color.multiСhannel}                                       
                                    />
                                </TabBtn>
                                <TabContent                                    
                                    active={openTab !== "" ? props.active : ""}
                                    //active={props.active}
                                    currentContent={props.content[obj.status as tabNameType]}
                                    currentNavigation={props.navigation[obj.status as "surova"|"bebelya"]}
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
    margin: 30px 0 60px;
    ul {
        display: flex;
        flex-direction: column;
    }    
`
const ListItem = styled.li`    
`

const TabBtn = styled.button<{active:boolean}>` 
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;       
    border: 1px solid ${props => props.active ? ({theme}) => theme.color.outline : ({theme}) => theme.color.multiСhannel};
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.43 - 1) + 1rem);    
    padding: 22px;       
    color: ${props => props.active ? ({theme}) => theme.color.defaultBtn : ({theme}) => theme.color.multiСhannel};  
    background-color:  ${props => props.active ? ({theme}) => theme.bgCol.btn.primary : ({theme}) => theme.bgCol.default};
    margin-top: -1px;
`