import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    bodyColor: '#F9F8FF',
    regularTitleColor: '#454545',
    descColor: '#7A7A7A',
    skillContainersBackground: 'transparent',
    themeSwitchBackground: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='7' y='7' width='16' height='16' rx='8' fill='%23454545'/%3E%3Crect x='14' width='2' height='5' rx='1' fill='%23454545'/%3E%3Crect y='16' width='2' height='5' rx='1' transform='rotate(-90 0 16)' fill='%23454545'/%3E%3Crect x='5.41431' y='25.9497' width='2' height='5' rx='1' transform='rotate(-135 5.41431 25.9497)' fill='%23454545'/%3E%3Crect x='25' y='16' width='2' height='5' rx='1' transform='rotate(-90 25 16)' fill='%23454545'/%3E%3Crect x='4' y='5.41422' width='2' height='5' rx='1' transform='rotate(-45 4 5.41422)' fill='%23454545'/%3E%3Crect x='21' y='22.4142' width='2' height='5' rx='1' transform='rotate(-45 21 22.4142)' fill='%23454545'/%3E%3Crect x='24.5356' y='4' width='2' height='5' rx='1' transform='rotate(45 24.5356 4)' fill='%23454545'/%3E%3Crect x='14' y='25' width='2' height='5' rx='1' fill='%23454545'/%3E%3C/svg%3E%0A")`
}

export const darkTheme = {
    bodyColor: '#030006',
    regularTitleColor: '#F9F8FF',
    descColor: '#9A9A9A',
    skillContainersBackground: '#080012',
    themeSwitchBackground: `url("data:image/svg+xml,%3Csvg width='19' height='18' viewBox='0 0 19 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.4419 1.44155C17.0419 3.04155 18.2752 7.10821 18.4419 8.94155C18.0419 7.74147 15.6086 6.44158 14.4419 5.94165C12.7752 5.27498 8.74189 4.84165 5.94189 8.44165C3.14189 12.0417 4.77523 15.9417 5.94189 17.4417C4.10856 16.775 0.441895 14.2417 0.441895 9.44165C0.441895 4.64165 3.44189 2.10825 4.94189 1.44155C6.27523 0.774882 9.84189 -0.158452 13.4419 1.44155Z' fill='white' stroke='white' stroke-width='0.2'/%3E%3C/svg%3E%0A")`
}

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Arya:wght@700&display=swap');

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0px;
        transition:  all .2s ease-out;

        &::selection {
            background-color: hotpink;
            color: white;
        }
        .desc {
            color: ${props => props.theme.descColor};
        }

    }

    body {
        background-color: ${props => props.theme.bodyColor};
        
        .navLinks, .title, .sectionTitle, .skillDesc{
            color: ${props => props.theme.regularTitleColor};
        }
        .themeSwitchButton {
            background-image: ${props => props.theme.themeSwitchBackground};
        }
        .skillIconContainer, .skillDescContainer {
            background-color: ${props => props.theme.skillContainersBackground};
        }
    }
`;