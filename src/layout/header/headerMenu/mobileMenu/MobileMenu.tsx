import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { useTheme } from "styled-components";
import { Icon } from '../../../../components/icon/Icon';



type MobileMenuPropsType = {
    
}
export const MobileMenu: React.FC<MobileMenuPropsType> = (props: MobileMenuPropsType) => { 
    
    const theme = useTheme();
    
    const activeLinkMenu = theme.color.activeLinkMenu;
    const defaultLinkMenu = theme.color.defaultLinkMenu;

    return (
        <StyledMobileMenu>
            <LevelTop>

            </LevelTop>
            <LevelBottom>
                
            </LevelBottom>
            
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.div`    
`
const LevelTop = styled.div`    
    
`
const LevelBottom = styled.div`    
    
`





