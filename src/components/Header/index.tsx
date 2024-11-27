import React from 'react'
import { AboutContainer, AboutWrapper, Contact, ContactsContainer, HeaderContainer, LogoContainer, TextSpan } from './styles'
import Logo from '../../assets/photo_2024-11-22_01-05-10.jpg'
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
        <Contact>
          info@dpathology.com
        </Contact>
      </ContactsContainer>

      <AboutWrapper>
        <LogoContainer>
          <img style={{ width: '100%' }} src={Logo} alt='logo'></img>
        </LogoContainer>
        <AboutContainer>
          <TextSpan to='/main'>Главная</TextSpan>
          <TextSpan to='/'>Продукты</TextSpan>
          <TextSpan to='/projects'>Проекты</TextSpan>
          <TextSpan to='/archive'>Архив</TextSpan>
          <TextSpan to='/about'>О компании</TextSpan>
          <TextSpan to='/contacts'>Контакты</TextSpan>
          <TextSpan to='/auth'>Вход</TextSpan>
        </AboutContainer>
      </AboutWrapper>
    </HeaderContainer>
  )
}
export default Header
