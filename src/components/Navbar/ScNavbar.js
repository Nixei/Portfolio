import styled from 'styled-components';

export const NavbarContainer = styled.nav`
    transform-origin: left top;
    transform: rotate(-90deg) translateX(-100%);  
    width: 100vh;
    height: 64px;
    background-color: transparent;
    padding-right: 48px;
    position: fixed;
`;

export const NavbarNav = styled.ul`
    display: flex;
    list-style-type: none;
    justify-content: space-between;
    align-items: center;
    
    li{
        height: 64px;
        text-align: center;
        color: #454545;
        font-size: 16px;
        line-height: 14px;
        letter-spacing: 2px;
        font-weight: 500;
        transition: all ease-in .2s;
        display: block;            
        cursor: pointer;
        
        float: inline-start; 
        display: flex;
        align-items: center;

        &:hover{ 
            color: #801DFF;
            text-decoration: underline;
        }
    } 
`;

export const ThemeSwitch = styled.div`
    display:flex;
    flex: 0;
    flex-basis: 100px;
    height: 30px;
    width: 30px;
    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='7' y='7' width='16' height='16' rx='8' fill='%23454545'/%3E%3Crect x='14' width='2' height='5' rx='1' fill='%23454545'/%3E%3Crect y='16' width='2' height='5' rx='1' transform='rotate(-90 0 16)' fill='%23454545'/%3E%3Crect x='5.41431' y='25.9497' width='2' height='5' rx='1' transform='rotate(-135 5.41431 25.9497)' fill='%23454545'/%3E%3Crect x='25' y='16' width='2' height='5' rx='1' transform='rotate(-90 25 16)' fill='%23454545'/%3E%3Crect x='4' y='5.41422' width='2' height='5' rx='1' transform='rotate(-45 4 5.41422)' fill='%23454545'/%3E%3Crect x='21' y='22.4142' width='2' height='5' rx='1' transform='rotate(-45 21 22.4142)' fill='%23454545'/%3E%3Crect x='24.5356' y='4' width='2' height='5' rx='1' transform='rotate(45 24.5356 4)' fill='%23454545'/%3E%3Crect x='14' y='25' width='2' height='5' rx='1' fill='%23454545'/%3E%3C/svg%3E%0A");
    background-position: center;
    background-repeat: no-repeat;
`;
