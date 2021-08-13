import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        overflow-x: hidden;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 15px;
        line-height: 25px;
        color: #939CAA;
    }
    h1, h2, h3, h4 {
        font-family: 'Space Mono', monospace;
        color: #495567;
    }

    h1 {
        font-size: 56px;  
        line-height: 56px;
        letter-spacing: -2.5px;  
    }
    h2 {
        font-size: 48px;
        line-height: 48px;
        letter-spacing: -2.14px;

    }
    h3 {
        font-size: 40px;
        line-height: 48px;
        letter-spacing: -1.79px;
    }
    h4 {
        font-size: 24px;
        line-height: 28px;
        letter-spacing: -1.07px;

    }

    a {
        font-family: 'Space Mono', monospace;
        color: #939CAA;
        text-decoration: none;

        &:hover {
          color: #fcb72b;
        }
    }

    

   

    .button {
        font-family: 'Space Mono', monospace;
        background: #FCB72B;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 195px;
        height: 53px;
        border: none;
        color: #FFFFFF;
        cursor: pointer;
        transition: background 0.7s ease;
        padding: 0 1rem;
       
        &:hover {
            background: transparent;
            border: 1px solid #FCB72B;
            color: #FCB72B;

        }

        @media (max-width: 1024px) {
            width: 180px;
        }
    }

    
    

`;

export default GlobalStyle;
