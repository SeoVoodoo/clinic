import React from 'react';
import { css, styled } from 'styled-components';
import { Service } from './Service';

type ServicesSlidePropsType = {
    slide: Array<{serviceName:string, path:string, bgPosition:string}>
    slideIndex: number
}

export const ServicesSlide: React.FC<ServicesSlidePropsType> = (props: ServicesSlidePropsType) => {

    return (
        <StyledServicesSlide slideIndex={props.slideIndex}>
            {
                props.slide.map((serviceCard, i) => {
                    return (
                        <Service 
                            key={i}
                            serviceName={serviceCard.serviceName}
                            path={serviceCard.path}
                            bgPosition={serviceCard.bgPosition}
                            slideIndex={props.slideIndex}
                        />
                    );
                })
            }
        </StyledServicesSlide>
    );
};

const StyledServicesSlide= styled.ul<{slideIndex: number}>`     
    margin: 1px 0 0 1px;
    display: flex;
    flex-direction: column;
    gap: 12px;

`