import React from "react";
import {
  AuthContainer,
  AuthTitle,
  BackGroundWrapper,
  BazaFrom,
  CreateAcc,
  DontHaveAcc,
  DontHaveAccTitle,
  FormContainer,
  FormWrapper,
  LoginPasswordContainer,
  LogoFromContainer,
  SignInFromContainer,
  StyledButton,
  StyledTextField,
} from "./styles";
import Background from "../../assets/background.jpeg";
import Logo from "../../assets/logo.png";
import { Box } from "@mui/material";

export default function Auth() {
  return (
    <AuthContainer
      style={{
        position: "relative",
        top: "190px",
      }}
    >
      <BackGroundWrapper>
        <img src={Background} style={{ width: "100%", objectFit: "contain" }} />
      </BackGroundWrapper>
      <FormWrapper>
        <FormContainer>
          <LogoFromContainer>
            <img
              src={Logo}
              style={{
                transform: "rotate(90deg)",
                objectFit: "contain",
                width: "100%",
                height: "100%",
              }}
            />
          </LogoFromContainer>
          <SignInFromContainer>
            <BazaFrom>
              <AuthTitle>Рады видеть Вас снова</AuthTitle>
              <LoginPasswordContainer>
                <Box
                  component="form"
                  noValidate
                  autoComplete="on"
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <StyledTextField
                    required
                    id="outlined-required"
                    label="Логин"
                    sx={{
                      "& .MuiFormLabel-root": {
                        color: "#4500ff !important", // Цвет метки в обычном состоянии
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#4500ff !important", // Цвет метки при фокусе
                      },
                      "& .MuiInputLabel-root.MuiInputLabel-shrink": {
                        color: "#4500ff !important", // Цвет перемещённой метки
                      },
                      "& .MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
                        color: "#4500ff !important",
                      },
                    }}
                  />
                  <StyledTextField
                    required
                    id="outlined-required"
                    label="Пароль"
                    sx={{
                      "& .MuiFormLabel-root": {
                        color: "#4500ff !important", // Цвет метки в обычном состоянии
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#4500ff !important", // Цвет метки при фокусе
                      },
                      "& .MuiInputLabel-root.MuiInputLabel-shrink": {
                        color: "#4500ff !important", // Цвет перемещённой метки
                      },
                      "& .MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
                        color: "#4500ff !important",
                      },
                    }}
                  />
                  <StyledButton variant="contained">Войти</StyledButton>
                </Box>
              </LoginPasswordContainer>
            </BazaFrom>
            <DontHaveAcc>
              <DontHaveAccTitle>Нет аккаунта?</DontHaveAccTitle>
              <CreateAcc to='/register'>Создайте его</CreateAcc>
            </DontHaveAcc>
          </SignInFromContainer>
        </FormContainer>
      </FormWrapper>
    </AuthContainer>
  );
}
