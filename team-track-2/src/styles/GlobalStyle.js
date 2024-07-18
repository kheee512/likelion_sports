// src/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body, html, #root {
    height: 100%;
    margin: 0;
    }

    body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e0e0e0;
    }

    #root {
    width: 90%;
    }
`;

export default GlobalStyle;