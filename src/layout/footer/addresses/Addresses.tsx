import React from 'react';
import { styled } from 'styled-components';

type AddressesPropsType = {
    addresses:string[]
}

export const Addresses: React.FC<AddressesPropsType> = (props: AddressesPropsType) => {
    return (
        <StyledAddresses>
            {
                props.addresses.map((address, index) => {
                    return (
                        <Item key={index}>
                            {address}
                        </Item>                       
                    );
                })
            }            
        </StyledAddresses>
    );
};

const StyledAddresses = styled.ul` 
    

    li:last-of-type {
        margin-bottom: 0;
    }

    @media ${({theme}) => theme.media.laptop} {        
        min-width: 192px;
        width: 100%;
    }

    @media ${({theme}) => theme.media.tablet} {
        margin-bottom: 20px;        
    }
       
`
const Item = styled.li`
    text-align: right; 
    margin-bottom: 6px; 
    font-size: calc((100vw - 26rem)/(137 - 26) * (1 - 0.86) + 0.86rem); 
    
    @media ${({theme}) => theme.media.tablet} {
        text-align: center;
        margin-bottom: 10px;
    }
`