import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`

    html {
        font-size: 14px;
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
        color: ${({theme}) => theme.color.defaultText}
    }

    button {
        cursor: pointer;
    }

`
