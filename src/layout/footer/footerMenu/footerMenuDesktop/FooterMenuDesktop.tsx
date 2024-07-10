import React from 'react';
import { styled } from 'styled-components';
import { DirectionService } from './DirectionService';

type FooterMenuDesktopPropsType = {
    servicesLinks: Array<Array<{id:string, title:string, path:string, level:number}>>
}

export const FooterMenuDesktop: React.FC<FooterMenuDesktopPropsType> = (props: FooterMenuDesktopPropsType) => {
    return (
        <StyledFooterMenuDesktop>
            {
                props.servicesLinks.map((arr, index) => {
                    return (
                        <DirectionService key={index} links={arr} index={index}/>
                    );
                })
            }
        </StyledFooterMenuDesktop>
    );
};

const StyledFooterMenuDesktop = styled.div`
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(3, minmax(272px, auto));    
       
    column-gap: 60px;
    row-gap: 30px;
    justify-content: space-between;

    @media ${({theme}) => theme.media.laptop}{
        grid-template-columns: repeat(2, auto);
        column-gap: 20px;
    }
`