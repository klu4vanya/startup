import { Button, TextField } from "@mui/material";
import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ContactWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 10%;
  gap: 5%;
`
export const FormContainer = styled.div`
    width: 430px;
    height: 594px;
    display: flex;
    flex-direction: column;
    gap: 5%;
`
export const FormTitle = styled.div`
    width: 420px;
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
    display: grid;
    /* gap: 7%; */
    width: 416px;
    height: auto;
    font-size: 16px;
    line-height: 1.3em;
    margin-bottom: 28px;
    
   & > span {
      font-size: 20px;
      font-weight: 600;
      padding-bottom: 5%;
    }
`

export const IconAndSpanContainer = styled.div`
  width: 350px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`