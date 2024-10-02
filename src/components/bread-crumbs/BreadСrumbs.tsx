import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

const pathMap: any = {    
    prices: "Цены",
    reviews: "Отзывы"
}

export const BreadСrumbs = () => {
    const location = useLocation();
    //console.log("location", location);

    let currentLink = "";
    const crumbs = location.pathname.split("/")
        .filter(crumb => crumb !== "")
        .map(crumb => {
           currentLink += `/${crumb}`
           return (
            <Crumb>
                <Link to={currentLink} key={crumb}>
                    {pathMap[crumb]}
                </Link>
            </Crumb>
           )
        });
    //console.log("crumbs", crumbs);

    return (
        <StyledBreadСrumbs>
          <Link to={'/'}>Главная</Link> {crumbs}  
        </StyledBreadСrumbs>
    );
};

const StyledBreadСrumbs = styled.div`
    grid-column: 1/2;
    grid-row: 1/2;
    //margin-top: 36px; 
    align-self: end; 
    a {
        font-size: calc((100vw - 26rem)/(137 - 26) * (1 - 0.93) + 0.93rem); 
        color: ${({theme}) => theme.color.multiСhannel};
    }
     
`
const Crumb = styled.div`
    display: inline-block;
    margin-left: 20px;

    &::before {
        content: "";
        margin-right: 10px;
        //color: ${({theme}) => theme.color.multiСhannel};
        display: block;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: ${({theme}) => theme.color.multiСhannel};
        transform: translate(-12px, 12px);
    }
`