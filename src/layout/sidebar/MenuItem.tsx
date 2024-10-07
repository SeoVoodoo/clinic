import React, { useState } from 'react';
import { css, styled } from 'styled-components';
import { initialStateSidebarType, topLevelIdsType } from '../../redux/sidebarReducer';
import { Link } from 'react-router-dom';
import { TopLevel } from './TopLevel';

type MenuItemPropsType = {
    sidebar:initialStateSidebarType 
    id: topLevelIdsType
    isActiveId:string | null  
    setIsActiveId:Function
    descktop?:boolean 
    mobile?:boolean 
    handleCloseMobileModalWindowMenu?:() => void            
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
        
    const pageData = props.sidebar.sidebarMenu.entities.pages[props.id];
    const {title, path, level} = pageData;
    const pages = 'pages' in pageData ? pageData.pages as topLevelIdsType[] : null;     

    return (
        <StyledMenuItem 
            isOpen={isOpen} 
            level={level} 
            pages={pages}
            descktop={props.descktop} 
            mobile={props.mobile}
        >
            <Wrap>
                { pages 
                ?   <a                      
                        onClick={(e) => handleLinkClick(e, props.id)}
                    >
                        {title}
                    </a>
                :   <Link onClick={props.handleCloseMobileModalWindowMenu} to={`/${path}`}> {title} </Link> //<a href={`/${path}`}> {title} </a> 
                }
                { pages && (
                    <Btn isOpen={isOpen} onClick={() => toggleId()}>
                        Свернуть/развернуть
                    </Btn>
                )}
            </Wrap>

            {isOpen && pages && (
                <TopLevel
                    sidebar={props.sidebar}   
                    ids={pages}
                    isActiveId={props.isActiveId}
                    setIsActiveId={props.setIsActiveId}
                    handleCloseMobileModalWindowMenu={props.handleCloseMobileModalWindowMenu}
                />      
            )}            
        </StyledMenuItem>
    );
};

const StyledMenuItem = styled.li<{isOpen:boolean, level:number, pages:string[] | null, descktop?:boolean, mobile?:boolean}>`
   
      
    width: "100%";      
    padding: ${props => props.level === 1 ? "3px 0" : "8px 0"};
    
    font-weight: ${props => props.level === 1 ? "500" : "700"};
    
    text-align: left;

    /* border-bottom: 1px solid ${props => props.level === 1 ? "transparent" : ({theme}) => theme.color.primary}; */

    ${props => props.descktop && css<{level:number}>`
        border-bottom: 1px solid ${props => props.level === 1 ? "transparent" : ({theme}) => theme.color.primary};
    `}

    ${props => props.mobile && css<{level:number}>`
        border-bottom: 1px solid ${props => props.level === -1 ? ({theme}) => theme.color.primary : "red"};
    `}

    
    

    &:first-of-type {
        border-top: 1px solid ${props => props.level === 0 || props.level === -1 ? ({theme}) => theme.color.primary : "transparent"};
    }  

    a {       
        text-align: left;
        max-width: 260px;
        padding: 3px 0;
        font-size: calc((100vw - 26rem)/(137 - 26) * (1.14 - 1) + 1rem);

        color: ${props => props.isOpen && props.level === 0 && props.pages 
        ? ({theme}) => theme.color.primary 
        : ({theme}) => theme.color.defaultText}; 

        margin-bottom: ${props => props.isOpen && (props.level === 0 || props.level === -1) && props.pages
            ? "10px"
            : "0"
        };        
    }

    a:hover {
        text-decoration: ${props => props.level === 1 ? "underline" : "none"};
    }

    @media ${({theme}) => theme.media.lg992}{ 
        
        a {
            text-align: center;
            max-width: 100%;  
        }
    }

    @media ${({theme}) => theme.media.mobile}{ 
        a {
            text-align: left;             
        }
    }
`

const Wrap = styled.div`
    
    width: 100%;
    display: grid;
    grid-template-columns: auto 20px;
    justify-content: space-between;
    align-items: center;

    a {
        grid-column: 1/2;
    }

    @media ${({theme}) => theme.media.lg992}{ 
        width: auto;
        
        a {
            margin-left: calc(50vw - 20px);
            transform: translateX(-50%);  
        }
    }

    @media ${({theme}) => theme.media.mobile}{ 
        width: 100%;       
        a {
            margin-left: 0;
            transform: translateX(0);
        }
    }
`

const Btn = styled.button<{isOpen:boolean}>`
    grid-column: 2/3;
    position: relative;
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

    @media ${({theme}) => theme.media.lg992}{ 
        justify-self: end;
    }
`