import styled, { createGlobalStyle } from "styled-components";

export const HumburgerMenuContainer = styled.div`
  position: absolute;
  top: 100px;
  left: 10%;
  right: 10%;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const GlobalStyle = createGlobalStyle`
  /* Переопределяем стили для компонента из node_modules */
  .hamburger-react {
    display: none;

    @media (max-width: 768px) {
      display: block !important;
    }
  }
`;
