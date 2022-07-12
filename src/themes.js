import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    bodyColor: '#F9F8FF',
    navLinksColor: '#454545'
}

export const darkTheme = {
    bodyColor: '#030006',
    navLinksColor: '#F9F8FF'
}

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0px;
    }
    body {
        background-color: ${props => props.theme.bodyColor};
        
        .navLinks {
            color: ${props => props.theme.navLinksColor};
        }
    }
`;