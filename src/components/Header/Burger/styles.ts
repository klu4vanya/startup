import styled, { createGlobalStyle } from "styled-components";

export const HumburgerMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #e2e2e2;
  opacity: 0.9;
  z-index: 0;
`;

export const MenuWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10%;
  gap: 5%;
  display: flex;
  flex-direction: column;

  & > * {
    font-size: 35px;
    line-height: 1.3em;
  }
`
export const GlobalStyle = createGlobalStyle`
  /* Переопределяем стили для компонента из node_modules */
  .hamburger-react {
    display: none;

    @media (max-width: 768px) {
      display: block !important;
      z-index: 1000;
    }
  }
`;
