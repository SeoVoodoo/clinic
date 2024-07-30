import React from 'react';
import { styled } from 'styled-components';
import { fadeIn } from '../styles/Animations';

export const Overlay  = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 50;    
    //background-color: rgba(140, 174, 200, 0.8);
    background-color: rgba(217, 217, 217, 0.5);
    backdrop-filter: blur(5px);
    animation-name: ${fadeIn};
    animation-duration: 0.8s;
    animation-delay: 0s;
    animation-fill-mode: both;
`