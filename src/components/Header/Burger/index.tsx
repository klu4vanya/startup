import React, { useState } from "react";
import { GlobalStyle, HumburgerMenuContainer, MenuWrapper } from "./styles";
import { Fade as Hamburger } from "hamburger-react";
import { TextSpan } from "../styles";

export default function Burger() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <GlobalStyle />
      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
        direction="right"
        color="#000"
      />

      {isOpen && (
        <HumburgerMenuContainer>
          <MenuWrapper>
            <TextSpan onClick={() => setOpen(false)} to="/main">Главная</TextSpan>
            <TextSpan onClick={() => setOpen(false)} to="/products">Продукты</TextSpan>
            <TextSpan onClick={() => setOpen(false)} to="/projects">Проекты</TextSpan>
            <TextSpan onClick={() => setOpen(false)} to="/archive">Архив</TextSpan>
            <TextSpan onClick={() => setOpen(false)} to="/about">О компании</TextSpan>
            <TextSpan onClick={() => setOpen(false)} to="/contacts">Контакты</TextSpan>
            <TextSpan onClick={() => setOpen(false)} to="/auth">Вход</TextSpan>
          </MenuWrapper>
        </HumburgerMenuContainer>
      )}
    </div>
  );
}
