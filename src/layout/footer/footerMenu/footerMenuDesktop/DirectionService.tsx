import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

type DirectionServicePropsType = {
    links: Array<{id:string, title:string, path:string, level:number}>
    index: number
}

export const DirectionService: React.FC<DirectionServicePropsType> = (props: DirectionServicePropsType) => {
    return (
        <StyledDirectionService index={props.index}>
            {
                props.links.map(arr => {
                    return (
                        <Item key={arr.id} level={arr.level}>
                            <Link to={`/${arr.path}`}>
                                {arr.title}
                            </Link>
                        </Item>
                    );
                })
            }
        </StyledDirectionService>
    );
};

const StyledDirectionService = styled.ul<{index: number}>`
    display: flex;
    flex-direction: column;  
    width: ${props => props.index % 3 === 2 ? "272px" : "100%"};

    @media ${({theme}) => theme.media.laptop}{
        width: 100%;
    }
`

const Item = styled.li<{level: number}>`    
    margin-bottom: 10px;

    a { 
        color: ${props => props.level === 0 
            ? ({theme}) => theme.color.primary 
            : ({theme}) => theme.color.defaultText};
        
        font-size: ${props => props.level === 0 
            ? `calc((100vw - 26rem)/(137 - 26) * (1.43 - 1) + 1rem)`
            : `calc((100vw - 26rem)/(137 - 26) * (1 - 0.93) + 0.93rem)`};
        
        font-weight: ${props => props.level === 0 ? "700" : "400"};

        padding: 3px 0;
    }

    a:hover {
        text-decoration: ${props => props.level === 0 ? "none" : "underline"};

        color: ${props => props.level === 0 
            ? ({theme}) => theme.color.secondary 
            : ({theme}) => theme.color.defaultText};
    }
 
`

