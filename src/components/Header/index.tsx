import React from 'react'
import { AboutContainer, AboutWrapper, Contact, ContactsContainer, HeaderContainer, LogoContainer, SocialNetworkContainer, TelegramIcon, TextSpan, VKIcon } from './styles'
import Logo from '../../assets/logo.png'
import PhoneIcon from '../../assets/PhoneIcon.png'
import MailIcon from '../../assets/Mailicon.png'
function Header() {
  return (
    <HeaderContainer>
      <ContactsContainer>
        <img
          style={{ width: '14px', height: '18px', padding: '4px 4px 4px 4px' }}
          src={PhoneIcon}
        />
        <Contact>
          8 800 555-92-67
        </Contact>
        <img
          style={{ width: '14px', height: '18px', padding: '4px 4px 4px 4px' }}
          src={MailIcon}
        />
        <Contact href='mailto:caladrius.technology@gmail.com'>
        caladrius.technology@gmail.com
        </Contact>
      </ContactsContainer>

      <AboutWrapper>
        <LogoContainer>
          <img style={{ width: '100%', transform: "rotate(90deg)" }} src={Logo} alt='logo'></img>
        </LogoContainer>
        <AboutContainer>
          <TextSpan to='/main'>Главная</TextSpan>
          <TextSpan to='/products'>Продукты</TextSpan>
          <TextSpan to='/projects'>Проекты</TextSpan>
          <TextSpan to='/archive'>Архив</TextSpan>
          <TextSpan to='/about'>О компании</TextSpan>
          <TextSpan to='/contacts'>Контакты</TextSpan>
          <TextSpan to='/auth'>Вход</TextSpan>
        </AboutContainer>
        <SocialNetworkContainer>
          <TelegramIcon to='#'/>
          <VKIcon to='#'/>
        </SocialNetworkContainer>
      </AboutWrapper>
    </HeaderContainer>
  )
}
export default Header
