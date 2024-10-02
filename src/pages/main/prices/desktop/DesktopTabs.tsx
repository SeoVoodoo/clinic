import React from 'react';
import { styled } from 'styled-components';
import { TabMenu } from '../TabMenu';
import { TabContent } from '../TabContent';

type DesktopTabsPropsType = {    
    tabs: Array<{title:string, status:string}>
    active:string
    handleTabClick: (status:string) => void
    navigation: Array<{name:string, href:string}>|null    
    content: Array<{
        firstCell:string
        secondCell:string
        thirdCell:string
        fourthСell:string
        chapter?:boolean
        subchapter?:boolean
        subSubChapter?:boolean
        title?:boolean
    }>      
}

export const DesktopTabs: React.FC<DesktopTabsPropsType> = (props: DesktopTabsPropsType) => {
   
    return (
        <StyledDesktopTabs>
            <TabMenu 
              tabs={props.tabs}
              active={props.active}
              handleTabClick={props.handleTabClick}
            />
            <TabContent 
              currentNavigation={props.navigation}
              currentContent={props.content} 
              active={props.active}              
            />            
        </StyledDesktopTabs>
    );
};

const StyledDesktopTabs = styled.div`
`