import { NavLink } from "react-router-dom";
import styled from "styled-components";
import vk_icon from "../../assets/vk-icon.svg";
import tg_icon from "../../assets/tg-icon.svg";

export const HeaderContainer = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 190px;
  background-color: #fff;
  @media (max-width: 768px) {
    width: 100vw;
    height: 90px;
    padding: 0;
  }
`;
export const ContactsContainer = styled.div`
  margin-left: 15%;
  margin-right: 15%;
  width: 70%;
  height: 51px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    height: 30px;
  }
`;
export const Contact = styled.a`
  width: 165px;
  height: 50px;
  /* font-size: 13px; */
  line-height: 50px;
  color: #999999;
  text-decoration: none;
  @media (max-width: 768px) {
    width: auto;
    height: 30px;
    font-size: 10px;
    line-height: 30px;
  }
`;

export const LogoContainer = styled.div`
  img {
    width: 100%;
    transform: rotate(90deg);
    @media (max-width: 768px) {
      height: 90px;
      width: auto;
    }
  }

  width: 115px;
  height: auto;

  @media (max-width: 768px) {
    height: 90px;
    width: auto;
  }
`;

export const AboutWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 3%;

  @media (max-width: 768px) {
    padding-left: 3%;
  }
`;
export const AboutContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 777px;
    height: 70px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const TextSpan = styled(NavLink)`
  text-transform: uppercase;
  font-weight: 600;
  font-style: normal;
  font-size: 15px;
  line-height: 20px;
  color: #444444;
  text-decoration: none;

  &.active {
    color: #758bfb;
  }
  &:hover {
    color: #758bfb;
  }
  @media (max-width: 768px) {
    margin-top: 4%;
  }
`;
export const SocialNetworkContainer = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const TelegramIcon = styled(NavLink)`
  background-image: url(${tg_icon});
  width: 25px;
  height: 25px;
`;
export const VKIcon = styled(NavLink)`
  background-image: url(${vk_icon});
  width: 25px;
  height: 25px;
  background-size: contain;
`;
