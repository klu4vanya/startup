import { FormControl } from "@mui/material";
import styled from "styled-components";

export const StyledForm = styled(FormControl)`
  width: 100%;
  height: 48px;
  background-color: #f2f2f2;
  border-radius: 6px;

  & .MuiInputLabel-root {
    color: #4500ff; // Фиолетовый цвет текста лейбла
  }

  & .MuiInputLabel-root.Mui-focused {
    color: #4500ff; // Фиолетовый цвет текста лейбла при фокусе
  }

  & .MuiInputLabel-root.MuiInputLabel-shrink {
    color: #4500ff; // Фиолетовый цвет текста лейбла в состоянии shrink
  }

  & .MuiOutlinedInput-root {
    border-radius: 6px;
    height: 48px;


    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: #4500ff; // Фиолетовая обводка при наведении
    }

    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: #4500ff; // Фиолетовая обводка при фокусе
    }
  }

  & .MuiSelect-icon {
    color: #4500ff; // Фиолетовый цвет иконки стрелки
  }
`;
