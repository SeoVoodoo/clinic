import React, { useState } from 'react';
import { styled } from 'styled-components';
import { initialStateSidebarType } from '../../redux/sidebarReducer';
import { Link } from 'react-router-dom';
import { FlexWrapper } from '../../components/FlexWrapper';
import { TopLevel } from './TopLevel';

type MenuItemPropsType = {
    id:string
    isActiveId:string | null  
    setIsActiveId:Function    
    sidebar:initialStateSidebarType          
}

type CurrentPointPropsType = {  
    id:string  
    title:string
    path:string
    level:number
    pages?:string[]
    parentId?:string
}

export const MenuItem: React.FC<MenuItemPropsType> = (props: MenuItemPropsType) => {
    const[isOpen, setIsOpen] = useState(false);

    function toggleId(){
        setIsOpen(prev => !prev);
    }

    function handleLinkClick(e:React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, index:string) {
        e.preventDefault();
        props.setIsActiveId(index);
        setIsOpen(prev => !prev);
    }
        
    const {title, path, level, pages}:CurrentPointPropsType = props.sidebar.sidebarMenu.entities.pages[props.id];

    //console.log("title", title)    

    return (
        <StyleMenuItem isOpen={isOpen} level={level} pages={pages}>
            <FlexWrapper justify="space-between" align="center">
                <Link 
                    to={`/${path}`}
                    onClick={(e) => handleLinkClick(e, props.id)}
                >
                    {title}
                </Link>
                { pages && (
                    <Btn isOpen={isOpen} onClick={() => toggleId()}>
                        Свернуть/развернуть
                    </Btn>
                )}
            </FlexWrapper>

            {isOpen && pages && (
                <TopLevel
                    sidebar={props.sidebar}   
                    ids={pages}
                    isActiveId={props.isActiveId}
                    setIsActiveId={props.setIsActiveId}
                />      
            )}            
        </StyleMenuItem>
    );
};

const StyleMenuItem = styled.li<{isOpen:boolean, level:number, pages?:string[]}>`
    width: 306px;     
    padding: ${props => props.level === 1 ? "3px 0" : "8px 0"};
    
    font-weight: ${props => props.level === 1 ? "500" : "700"};
    border-bottom: 1px solid ${props => props.level === 1 ? "transparent" : ({theme}) => theme.color.primary};
    text-align: left;
    /* max-height: ${props => props.isOpen ? "600px" : "40px"};
    transition: max-height 1s ease; */

    &:first-of-type {
        border-top: 1px solid ${props => props.level === 0 ? ({theme}) => theme.color.primary : "transparent"};
    }
    a {
        color: ${props => props.isOpen && props.level === 0 && props.pages 
            ? ({theme}) => theme.color.primary 
            : ({theme}) => theme.color.defaultText};

        margin-bottom: ${props => props.isOpen && props.level === 0 && props.pages
            ? "10px"
            : "0"
        };
        text-align: left;
        max-width: 260px;
        padding: 3px 0;
        font-size: calc((100vw - 26rem)/(137 - 26) * (1.14 - 1) + 1rem);        
    }

    a:hover {
        text-decoration: ${props => props.level === 1 ? "underline" : "none"};
    }
`

const Btn = styled.button<{isOpen:boolean}>`
    position: relative;    
    flex-shrink: 0; 
    font-size: 0;    
    //background-color: aqua;    
    background-color: transparent;    
    width: 20px;
    height: 20px;
    border: none;    
    transition: transform .3s;  
    transform: ${props => props.isOpen ? "rotate(180deg)" : "rotate(0deg)"};  

    &::before {
        content: '';
        position: absolute;        
        width: 8px;
        height: 8px;
        top: 0;
        right: 0;
        bottom: 0;    
        left: 0;
        margin: auto; 
        border-right: 2px solid ${({theme}) => theme.color.defaultText};
        border-bottom: 2px solid ${({theme}) => theme.color.defaultText};   
        transform: rotate(45deg);        
    }
`