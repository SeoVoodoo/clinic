import React from 'react';
import { styled } from 'styled-components';
import { initialStateSidebarType, topLevelIdsType } from '../../redux/sidebarReducer';
import { MenuItem } from './MenuItem';

type TopLevelPropsType = {
    sidebar: initialStateSidebarType
    ids: topLevelIdsType[]
    isActiveId: string | null
    setIsActiveId: Function
    descktop?:boolean
    mobile?:boolean
    handleCloseMobileModalWindowMenu?:() => void
}

export const TopLevel: React.FC<TopLevelPropsType> = (props: TopLevelPropsType) => {
    return (
        <StyleTopLevel         
            descktop={props.descktop}
        >
            {
                props.ids.map(id =>
                    <MenuItem 
                        key={id}
                        id={id}
                        isActiveId={props.isActiveId}
                        setIsActiveId={props.setIsActiveId}
                        sidebar={props.sidebar}
                        mobile={props.mobile}
                        descktop={props.descktop}
                        //pages={props.sidebar.sidebarMenu.entities.pages}
                        handleCloseMobileModalWindowMenu={props.handleCloseMobileModalWindowMenu}
                    />
            )}            
        </StyleTopLevel>
    );
};

const StyleTopLevel = styled.ul<{descktop?:boolean}>`
    width: ${props => props.descktop ? "306px" : "100%"}; 
    //transition: height 1.3s ease;  
    /* @media ${({theme}) => theme.media.lg992}{ 
        margin-top: 20px;
    } */
`