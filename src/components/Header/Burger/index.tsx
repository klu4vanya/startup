import React, { useState } from "react";
import { GlobalStyle, HumburgerMenuContainer } from "./styles";
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
            <TextSpan to="/main">Главная</TextSpan>
            <TextSpan to="/products">Продукты</TextSpan>
            <TextSpan to="/projects">Проекты</TextSpan>
            <TextSpan to="/archive">Архив</TextSpan>
            <TextSpan to="/about">О компании</TextSpan>
            <TextSpan to="/contacts">Контакты</TextSpan>
            <TextSpan to="/auth">Вход</TextSpan>
        </HumburgerMenuContainer>
      )}
    </div>
  );
}
