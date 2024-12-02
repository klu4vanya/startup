import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
    margin-left: 20%;
    margin-right: 20%;
    
    width: 60%;
    height: 151px;
    background-color: #fff;
    
`
export const ContactsContainer = styled.div`
    width: 60%;
    height: 51px;
    display: flex;
    align-items: center;

`
export const Contact = styled.a`
    width: 165px;
    height: 50px;
    font-size: 13;
    line-height: 50px;
    color: #999999;
    text-decoration: none;
`

export const LogoContainer = styled.div`
    width: 95px;
    height: auto;
`

export const AboutWrapper = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;

`
export const AboutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 777px;
    height: 70px;
`
export const TextSpan = styled(NavLink)`
    text-transform: uppercase;
    font-weight: 600;
    font-style: normal;
    font-size: 15px;
    line-height: 20px;
    color: #444444;
    text-decoration: none;

    &.active {
        color: #8257fe;
    }
`