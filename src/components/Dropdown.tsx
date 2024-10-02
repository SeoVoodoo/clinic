import React, { useState } from 'react';
import { styled, useTheme } from 'styled-components';
import { StyledDropdawnBtn } from './StyledBtn';
import { Icon } from './icon/Icon';

type DropdownPropsType = {
    currentNavigation: Array<{name:string, href:string}>|null
}

export const Dropdown: React.FC<DropdownPropsType> = (props: DropdownPropsType) => {

    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const handleClick = () => {
        setIsOpenMenu(prev => !prev);
    }
    const theme = useTheme();

    return (
        <StyledDropdown isOpenMenu={isOpenMenu}>
            
            <StyledDropdawnBtn 
                as="a"                
                onClick={handleClick}
                isOpenMenu={isOpenMenu}
            >
                Все разделы
                <Icon 
                    id="dropdawn_arrow"
                    width="14"
                    height="9"
                    viewBox="0 0 14 9"
                    stroke={isOpenMenu ? theme.color.defaultBtn : theme.color.primary}
                />
            </StyledDropdawnBtn>
            <DropdownContent isOpenMenu={isOpenMenu}>
                <ul>
                    {props.currentNavigation && props.currentNavigation.map((link) => {
                        return (
                            <MenuItem key={link.name}>
                                <Link
                                    href={`#${link.href}`} 
                                    onClick={handleClick}                                   
                                >
                                    {link.name}
                                </Link>

                            </MenuItem>
                        );
                    })}
                </ul>
            </DropdownContent>   
        </StyledDropdown>
    );
};

const StyledDropdown = styled.div<{isOpenMenu:boolean}>`
    position: relative;
    height: 50px;
    margin-bottom: 30px;    
    
    svg {
        transform: ${props => props.isOpenMenu 
        ? "rotate(-180deg)" 
        : "rotate(0)"};
        transition: transform 0.4s ease;
    }

    @media ${({theme}) => theme.media.tablet} {
        margin-bottom: 10px;
    }
` 

const DropdownContent = styled.div<{isOpenMenu:boolean}>`    
    position: absolute;
    top: 42px;
    padding: 30px 20px 10px;
    background-color: #fff;
    max-width: 456px;
    width: 100%;
    height: auto;
    border: 1px solid ${({theme}) => theme.color.primary};
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 20;  
    
    opacity: ${props => props.isOpenMenu ? "1" : "0"};
    transform: ${props => props.isOpenMenu ? "scaleY(1)" : "scaleY(0)"};
    transform-origin: 0 0;
    transition: .5s ease-in-out;

    @media ${({theme}) => theme.media.mobile} {
        /* left: 50%;
        transform: translateX(-50%); */
        max-width: 300px;
    }
`
const MenuItem = styled.li`
  margin-bottom: 10px;  
`

const Link = styled.a`
  
  &:hover {
    color: ${({theme}) => theme.color.primary};
    text-decoration: underline;
  } 
`