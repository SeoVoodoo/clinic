import { createGlobalStyle } from "styled-components";

type GlobalStylesPropsType = {
    fontSize:number 
}

export const GlobalStyles = createGlobalStyle<GlobalStylesPropsType>`

    html {
        font-size: ${props => props.fontSize}px;
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

    button {
        cursor: pointer;
    }

    img {
        filter: ${({theme}) => theme.filter};
    }

    a {
        text-decoration: none;
    }

    .swiper-pagination-bullet-active {    
        background: ${({theme}) => theme.bgCol.swiperPaginationBulletActive};
    }

`
