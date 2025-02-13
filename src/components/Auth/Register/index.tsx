import React, { useState } from "react";
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
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Background from "../../../assets/background.jpeg";
import Logo from "../../../assets/logo.png";
import { StyledForm } from "./styles";

export default function Register() {
  const [status, setStatus] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  const height = 48 * 8 + 140

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
                  height: 'auto',
                }}
              >
                <Box
                  component="form"
                  noValidate
                  autoComplete="on"
                  sx={{
                    height: height,
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
                  <Box>
                    <StyledForm fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Статус
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={status}
                        label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem value="student">Студент</MenuItem>
                        <MenuItem value="teacher">Преподаватель</MenuItem>
                        <MenuItem value="doc">Врач</MenuItem>
                      </Select>
                    </StyledForm>
                  </Box>
                  {(status === "teacher" || status === "doc") && (
                    <>
                      <StyledTextField
                        required
                        id="outlined-required"
                        label="Ученая степень"
                        sx={{
                          "& .MuiFormLabel-root": {
                            color: "#4500ff !important",
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "#4500ff !important",
                          },
                          "& .MuiInputLabel-root.MuiInputLabel-shrink": {
                            color: "#4500ff !important",
                          },
                          "& .MuiFormLabel-root-MuiInputLabel-root.Mui-focused":
                            {
                              color: "#4500ff !important",
                            },
                        }}
                      />
                      <StyledTextField
                        required
                        id="outlined-required"
                        label="Должность"
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
                          "& .MuiFormLabel-root-MuiInputLabel-root.Mui-focused":
                            {
                              color: "#4500ff !important",
                            },
                        }}
                      />
                    </>
                  )}
                  {status === "student" && (
                    <>
                      <StyledTextField
                        required
                        id="outlined-required"
                        label="Курс обучения"
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
                          "& .MuiFormLabel-root-MuiInputLabel-root.Mui-focused":
                            {
                              color: "#4500ff !important",
                            },
                        }}
                      />
                      <StyledTextField
                        required
                        id="outlined-required"
                        label="Номер группы"
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
                          "& .MuiFormLabel-root-MuiInputLabel-root.Mui-focused":
                            {
                              color: "#4500ff !important",
                            },
                        }}
                      />
                      <StyledTextField
                        required
                        id="outlined-required"
                        label="Факультет"
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
                          "& .MuiFormLabel-root-MuiInputLabel-root.Mui-focused":
                            {
                              color: "#4500ff !important",
                            },
                        }}
                      />
                    </>
                  )}
                  <StyledTextField
                    required
                    id="outlined-required"
                    label="Учреждение образования/здравоохранения"
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
                  <StyledButton variant="contained">
                    Зарегистрироваться
                  </StyledButton>
                </Box>
              </LoginPasswordContainer>
            </BazaFrom>
          </SignInFromContainer>
        </FormContainer>
      </FormWrapper>
    </AuthContainer>
  );
}
