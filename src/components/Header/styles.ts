import { NavLink } from "react-router-dom";
import styled from "styled-components";
import vk_icon from '../../assets/vk-icon.svg'
import tg_icon from '../../assets/tg-icon.svg'

export const HeaderContainer = styled.div`
    margin-left: 10%;
    margin-right: 10%;
    
    width: 80%;
    height: 190px;
    background-color: #fff;
    
`
export const ContactsContainer = styled.div`
    margin-left: 15%;
    margin-right: 15%;
    width: 70%;
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
    width: 115px;
    height: auto;
`

export const AboutWrapper = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 3%;

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
        color: #758BFB;
    }
    &:hover{
        color: #758BFB;
    }
`
export const SocialNetworkContainer = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
export const TelegramIcon = styled(NavLink)`
    background-image: url(${tg_icon});
    width: 25px;
    height: 25px;
`
export const VKIcon = styled(NavLink)`
    background-image: url(${vk_icon});
    width: 25px;
    height: 25px;
    background-size: contain;
    
`