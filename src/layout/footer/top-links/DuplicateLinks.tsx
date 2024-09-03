import React from 'react';
import { Link } from 'react-router-dom';
import { css, styled } from 'styled-components';

type DuplicateLinksPropsType = {
    duplicateLinks: Array<{id:number, ancor:string, path:string}> 
    fontSize:number

}

export const DuplicateLinks: React.FC<DuplicateLinksPropsType> = (props: DuplicateLinksPropsType) => {
    return (
        <StyledDuplicateLinks fontSize={props.fontSize}>
            <List>
                {
                  props.duplicateLinks.slice(0, 6).map((link) => {
                    return (
                        <Item key={link.id}>
                            <Link to={`${link.path}`}>{link.ancor}</Link>
                        </Item>
                    );
                  })  
                }
            </List>
            <List>
                {
                  props.duplicateLinks.slice(6).map((link) => {
                    return (
                        <Item key={link.id}>
                            <Link to={`${link.path}`}>{link.ancor}</Link>
                        </Item>
                    );
                  })  
                }
            </List>

            {/* <List>
                {
                  props.duplicateLinks.map((link) => {
                    return (
                        <Item key={link.id}>
                            <Link to={`${link.path}`}>{link.ancor}</Link>
                        </Item>
                    );
                  })  
                }
            </List> */}
            
        </StyledDuplicateLinks>
    );
};

const StyledDuplicateLinks = styled.div<{fontSize:number}>`
    grid-area: links;
    display: flex;
    column-gap: 38px;
    
    justify-content: ${props => props.fontSize > 14 ? "flex-start" : "center"};
    

    @media ${({theme}) => theme.media.laptop}{
        justify-self: center;   
    }

    @media ${({theme}) => theme.media.tablet}{
        margin-bottom: 40px;   
    }

    @media ${({theme}) => theme.media.mobile}{
        min-width: 320px; 
        flex-wrap: ${props => props.fontSize > 16 ? "wrap" : "nowrap"};
    }
`
const List = styled.ul`

`
const Item = styled.li`
    display: block;
    width: max-content;
    margin-bottom: 12px; 
    white-space: wrap;
    word-break: break-all;
    
    &:last-of-type {
        margin-bottom: 0;    
    }

    a {        
        font-size: calc((100vw - 26rem)/(137 - 26) * (1.14 - 0.86) + 0.86rem); 
        font-weight: 700;
        text-decoration: none;
        color: ${({theme}) => theme.color.defaultText};
        padding: 3px 0;
        white-space: wrap;
        word-break: break-all;        
    }

    
    a::after {
        content: "";
        display: block;        
        height: 1.25px;
        background-color: ${({theme}) => theme.color.defaultText};
        transform: scale(0);
        transition: transform 0.4s;
    }

    & a:hover::after {
        transform: scale(1);  
    }

`