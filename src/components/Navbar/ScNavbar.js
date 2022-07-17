import styled from 'styled-components';

export const NavbarContainer = styled.nav`
    transform-origin: left top;
    transform: rotate(-90deg) translateX(-100%);  
    width: 100vh;
    height: 64px;
    background-color: transparent;
    padding-right: 48px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
`;

export const NavbarNav = styled.ul`
    display: flex;
    list-style-type: none;
    justify-content: space-between;
    align-items: center;
    
    li{
        height: 64px;
        text-align: center;
        font-size: 20px;
        line-height: 16px;
        letter-spacing: 2px;
        font-weight: 600;
        font-family: 'Roboto Mono', monospace;
        display: block;            
        cursor: pointer;
        
        float: inline-start; 
        display: flex;
        align-items: center;

        &:hover {
            transform: rotate(90deg) translateX(50%); 
        }
    }

    .active {
        li {
            color: #801DFF;
            text-decoration: underline;
        }
    }
`;

export const ThemeSwitch = styled.button`
    border: none;
    background-color: transparent;
    display:flex;
    flex: 0;
    flex-basis: 100px;
    height: 30px;
    width: 30px;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
`;
