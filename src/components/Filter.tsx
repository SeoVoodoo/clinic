import React, { useState } from 'react';
import { styled, useTheme } from 'styled-components';
import { StyledDropdawnBtn } from './StyledBtn';
import { Icon } from './icon/Icon';

type FilterPropsType = {
    currentOptionList: Array<string>    
    selectOption:string
    setSelectOption: (value:string) => void
    setCount: (value:number) => void
    step:number
}

export const Filter: React.FC<FilterPropsType> = (props: FilterPropsType) => {

    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const handleClick = () => {
        setIsOpenMenu(prev => !prev);
    }
    const handleFilter = (e:any) => {        
        e.preventDefault();
        props.setSelectOption(e.target.innerText);
        setIsOpenMenu(prev => !prev);
        props.setCount(props.step);
    }
    const theme = useTheme();

    return (
        <StyledFilter isOpenMenu={isOpenMenu}>
            
            <StyledDropdawnBtn 
                as="a"                
                onClick={handleClick}
                isOpenMenu={isOpenMenu}
            >
                {props.selectOption}
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
                    {props.currentOptionList.map((option, index) => {
                        return (
                            <MenuItem key={index}>
                                <CurrentLink onClick={(e) => handleFilter(e)}>
                                    {option}
                                </CurrentLink>
                            </MenuItem>
                        );
                    })}
                </ul>
            </DropdownContent>   
        </StyledFilter>
    );
};

const StyledFilter = styled.div<{isOpenMenu:boolean}>`
    position: relative;
    width: 100%;    
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

const CurrentLink = styled.a`  
  &:hover {
    color: ${({theme}) => theme.color.primary};
    text-decoration: underline;
  }  
`