import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

type FooterMenuMobilePropsType = {
    servicesLinks: Array<Array<{id:string, title:string, path:string, level:number}>>
}

export const FooterMenuMobile: React.FC<FooterMenuMobilePropsType> = (props: FooterMenuMobilePropsType) => {
    return (
        <StyledFooterMenuMobile>
            {
                props.servicesLinks.map(arr => {
                    return (
                        arr.filter(obj => obj.level === 0)
                    );
                }).map(arr => {
                    return (
                        <Item key={arr[0].id}>
                            <Link to={`/${arr[0].path}`}>
                                {arr[0].title}
                            </Link>                            
                        </Item>                        
                    );
                })
            }            
        </StyledFooterMenuMobile>
    );
};

const StyledFooterMenuMobile = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;    
`
const Item = styled.li`
    a { 
        color: ${({theme}) => theme.color.primary};        
        font-size: 1rem;        
        font-weight: 700;
        padding: 3px 0;
    }
`
