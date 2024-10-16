import { createGlobalStyle } from "styled-components";
import MontserratVariableFont from "../assets/fonts/Montserrat/Montserrat-VariableFont_wght.ttf";

type GlobalStylesPropsType = {
    fontSize:number 
}



export const GlobalStyles = createGlobalStyle<GlobalStylesPropsType>`

@font-face {
    font-family: 'Montserrat';
    src: url(${MontserratVariableFont}) format('truetype supports variations'),
         url(${MontserratVariableFont}) format('truetype-variations');
    font-weight: 100 1000;
    font-stretch: 25% 151%;
  }

    html {
        font-size: ${props => props.fontSize}px;
        scroll-behavior: smooth;
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {        
        font-family: 'Montserrat', 'Arial', 'Helvetica', sans-serif;
        /* -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale; */
        min-width: 360px;
        color: ${({theme}) => theme.color.defaultText};
        background-color: ${({theme}) => theme.bgCol.default};
    }
    
    section {
        margin-bottom: 80px;
        @media ${({theme}) => theme.media.laptop} {
            margin-bottom: 60px;
        }
        @media ${({theme}) => theme.media.tablet} {
            margin-bottom: 50px;
        }
        @media ${({theme}) => theme.media.mobile} {
            margin-bottom: 40px;
        }
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    img {
        filter: ${({theme}) => theme.filter};
    }

    a {
        text-decoration: none;
        cursor: pointer;
        color: ${({theme}) => theme.color.defaultText};
    }

    .swiper-pagination-bullet-active {    
        background: ${({theme}) => theme.bgCol.swiperPaginationBulletActive};
    }

    .bulletLocation_services .swiper-slide {
        width: ${props => props.fontSize > 14 ? "355px" : "305px"};        
    }

    
    @media ${({theme}) => theme.media.tablet} {

        .bulletLocation_services .swiper-slide {
            width: ${props => props.fontSize > 14 ? "355px" : "224px"};  
        }

        .bulletLocation_news .swiper-slide {
            width: ${props => props.fontSize > 14 ? "304px" : "224px"};  
        }
    }

`
