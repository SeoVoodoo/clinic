import React from 'react';
import { css, styled } from 'styled-components';




type TabMenuPropsType = {
    tabs: Array<{title:string, status:string}>
    active:string
    handleTabClick: (status:string) => void
}

export const TabMenu: React.FC<TabMenuPropsType> = (props: TabMenuPropsType) => {
    return (
        <StyledTabMenu>
            <ul>
                {
                    props.tabs.map((obj, index) => {
                        return (
                            <ListItem key={index}>
                                <TabBtn 
                                    active={props.active === obj.status}
                                    onClick={() => props.handleTabClick(obj.status)}
                                >
                                    {obj.title}
                                </TabBtn>
                            </ListItem>
                        );
                    })
                }
            </ul>            
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
    margin-top: 60px;

    ul {        
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        justify-content: space-between;
        gap: 2px;        
        //margin-bottom: 60px;
    }    
`
const ListItem = styled.li`
    //flex-grow: 1;
`

const TabBtn = styled.button<{active:boolean}>` 
    width: 100%;
    height: 70px;
    z-index: -1;
    border: none;
    outline: 1px solid ${props => props.active ? ({theme}) => theme.color.outline : ({theme}) => theme.color.multiСhannel};
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.43 - 1) + 1rem);    
    padding: 22px;
    
    border-radius: 24px 24px 0 0;    
    /* color: ${props => props.active ? ({theme}) => theme.color.defaultBtn : ({theme}) => theme.color.multiСhannel};  
    background-color:  ${props => props.active ? ({theme}) => theme.bgCol.btn.primary : ({theme}) => theme.bgCol.default};  

    
     */

    color: ${({theme}) => theme.color.multiСhannel};
    background-color: ${({theme}) => theme.bgCol.default};

    ${props => !props.active && css`
        &:hover {
            background: ${({theme}) => theme.bgCol.btn.primaryHover}; 
            color: ${({theme}) => theme.color.defaultBtn};
        }
    `}
    

    ${props => props.active && css`
        color: ${({theme}) => theme.color.defaultBtn};
        background-color: ${({theme}) => theme.bgCol.btn.primary};        
    `}
    
`