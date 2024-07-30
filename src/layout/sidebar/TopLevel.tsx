import React from 'react';
import { styled } from 'styled-components';
import { initialStateSidebarType } from '../../redux/sidebarReducer';
import { MenuItem } from './MenuItem';

type TopLevelPropsType = {
    sidebar: initialStateSidebarType
    ids: string[]
    isActiveId: string | null
    setIsActiveId: Function
}

export const TopLevel: React.FC<TopLevelPropsType> = (props: TopLevelPropsType) => {
    return (
        <StyleTopLevel>
            {
                props.ids.map(id =>
                    <MenuItem 
                        key={id}
                        id={id}
                        isActiveId={props.isActiveId}
                        setIsActiveId={props.setIsActiveId}
                        sidebar={props.sidebar}
                        //pages={props.sidebar.sidebarMenu.entities.pages}
                    />
            )}            
        </StyleTopLevel>
    );
};

const StyleTopLevel = styled.ul`
    width: 306px;  
    //transition: height 1.3s ease;  
`