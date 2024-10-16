import React, { memo, useState } from 'react';
import { styled, useTheme } from 'styled-components';
import { TabContent } from '../TabContent';
import { tabNameType } from '../../../../redux/pricesReducer';
import { Icon } from '../../../../components/icon/Icon';

type MobileTabsPropsType = {
    tabs: Array<{title:string, status:string}>    
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

export const MobileTabs: React.FC<MobileTabsPropsType> = memo((props: MobileTabsPropsType) => {
    const theme = useTheme();
    const [activeBtn, setActiveBtn] = useState("");

    const handleBtnClick = (status: string) => {
        if(status === activeBtn){
            setActiveBtn("");  
        }
        else {
            setActiveBtn(status);
        }        
    }
    return (
        <StyledMobileTabs>
            <ul>
                {
                    props.tabs.map((obj, index) => {                        
                        return (
                            <ListItem key={index} >
                                <TabBtn                                    
                                    activeBtn={activeBtn === obj.status}
                                    onClick={() => handleBtnClick(obj.status)}
                                >
                                    {obj.title}
                                    <Icon
                                        id={activeBtn === obj.status ? "arrow_up_tab" : "arrow_down_tab"}
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24" 
                                        fill={activeBtn === obj.status ? theme.color.defaultBtn : theme.color.multiСhannel}                                       
                                    />
                                </TabBtn>
                                { activeBtn === obj.status && <TabContent                                    
                                    activeBtn={activeBtn}                                    
                                    currentContent={props.content[obj.status as tabNameType]}
                                    currentNavigation={props.navigation[obj.status as "surova"|"bebelya"]}                                                                        
                                />}
                            </ListItem>
                        );
                    })
                }
            </ul>
        </StyledMobileTabs>
    );
});

const StyledMobileTabs = styled.div`
    margin: 30px 0 60px;
    ul {
        display: flex;
        flex-direction: column;
    }    
`
const ListItem = styled.li`    
`

const TabBtn = styled.button<{activeBtn:boolean}>` 
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;       
    border: 1px solid ${props => props.activeBtn ? ({theme}) => theme.color.outline : ({theme}) => theme.color.multiСhannel};
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.43 - 1) + 1rem);    
    padding: 22px;       
    color: ${props => props.activeBtn ? ({theme}) => theme.color.defaultBtn : ({theme}) => theme.color.multiСhannel};  
    background-color:  ${props => props.activeBtn ? ({theme}) => theme.bgCol.btn.primary : ({theme}) => theme.bgCol.default};
    margin-top: -1px;
`