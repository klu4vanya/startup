import React from "react";
import {
  AuthContainer,
  AuthTitle,
  BackGroundWrapper,
  BazaFrom,
  FormContainer,
  FormWrapper,
  LoginPasswordContainer,
  LogoFromContainer,
  SignInFromContainer,
  StyledButton,
  StyledTextField,
} from "../styles";
import { Box } from "@mui/material";
import Background from "../../../assets/background.png";
import Logo from "../../../assets/logo.png";

export default function Register() {
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
              <AuthTitle>Регистрация</AuthTitle>
              <LoginPasswordContainer
                style={{
                    height: '250px'
                }}
              >
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
                  <StyledTextField
                    required
                    id="outlined-required"
                    label="Электронная почта"
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
                  <StyledButton variant="contained">Зарегистрироваться</StyledButton>
                </Box>
              </LoginPasswordContainer>
            </BazaFrom>
          </SignInFromContainer>
        </FormContainer>
      </FormWrapper>
    </AuthContainer>
  );
}
