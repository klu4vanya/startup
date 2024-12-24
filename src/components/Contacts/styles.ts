import { Button, TextField } from "@mui/material";
import styled from "styled-components";

export const FormContainer = styled.div`
    width: 430px;
    height: 594px;
    display: flex;
    flex-direction: column;
    gap: 5%;
`
export const FormTitle = styled.div`
    width: 290px;
    height: auto;
    font-size: 52px;
    line-height: 1.3em;
    color: #545454;
`
export const FormTextFieldContainer = styled.div`
    width: 430px;
    height: 404px;
`
export const StyledTextField = styled(TextField)({
    '& .MuiInputBase-input': {
      color: '#fff',
    },
    '& .MuiInputBase-root': {
      height: '44px',
      backgroundColor: '#f2f2f2',
      borderRadius: '8px',
    },
    '& MuiFormControl-root': {
      backgroundColor: '#f2f2f2',
    },
    '& .MuiInputBase-input:-webkit-autofill': {
      backgroundColor: '#f2f2f2', 
      color: '#fff !important', 
      WebkitTextFillColor:'#fff', 
      transition: 'background-color 5000s ease-in-out 0s', 
    },
    '& .MuiInputBase-input:-webkit-autofill:focus': {
      backgroundColor: '#f2f2f2', 
      color: '#fff', 
    },
  });
  export const StyledButton = styled(Button)`
  && {
    color: #fff;
    text-transform: none;
    width: 100%;
    height: 44px;
    border-radius: 8px;
    background-color: #758bfb;
  }
`;
export const MapContainer = styled.div`
    width: 416px;
    height: 470px;

`
export const AboutContainer = styled.div`
    width: 416px;
    height: auto;
    font-size: 16px;
    line-height: 1.3em;
    margin-bottom: 28px;
    
`