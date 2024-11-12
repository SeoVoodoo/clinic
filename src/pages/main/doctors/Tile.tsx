import React from 'react';
import { styled } from 'styled-components';

type TilePropsType = {
    content: string
    area: string
}

export const Tile: React.FC<TilePropsType> = (props: TilePropsType) => {
    return (
        <StyledTile
            area={props.area}
            dangerouslySetInnerHTML={{ __html: props.content}}
        >            
        </StyledTile>
    );
};

const StyledTile = styled.div<{area:string}>`
    grid-area: ${props => props.area};
    padding: 20px 24px;
    background-color:rgba(247, 192, 143, 0.6);
    border-radius: 24px;

    h3 {
        color: ${({theme}) => theme.color.primary};
    }    
`
