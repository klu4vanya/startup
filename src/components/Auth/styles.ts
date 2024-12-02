import { Button, TextField } from "@mui/material";
import styled from "styled-components";


export const AuthContainer = styled.div`
    display: flex;

`


export const BackGroundWrapper = styled.div`
    width: 984px;
    height: 901px;
`

export const FormWrapper = styled.div`
    width: 456px;
    height: 901px;
`

export const FormContainer = styled.div`
    width: 360px;
    height: 561px;
    margin: 48px 48px auto 48px;

`

export const LogoFromContainer = styled.div`
    width: 360px;
    height: 120px;
    margin-bottom: 48px;
`

export const SignInFromContainer = styled.div`
    width: 360px;
    height: 465px;

`
export const BazaFrom = styled.div`
    width: 460px;
    height: 421px;
`

export const DontHaveAcc = styled.div`
    width: 220px;
    height: 20px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;

`
export const AuthTitle = styled.div`
    width: 360px;
    height: 28px;
    color: #1A1A1A;
    font-size: 20px;
    line-height: 28px;
`

export const LoginPasswordContainer = styled.div`
    width: 360px;
    height: 200px;
    margin-top: 45px;
`

export const StyledTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        width: '360px',
        height: '48px',
        backgroundColor: '#f2f2f2',
        borderRadius: '6px',
        '& fieldset': {
            borderColor: 'transparent', 
        },
        '&:hover fieldset': {
            borderColor: '#ccc',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#4500ff',
        },
    },
});

export const StyledButton = styled(Button)({
    '&&':{
        width: '360px',
        height: '40px',
        backgroundColor: '#4500ff'
    }
})
export const DontHaveAccTitle = styled.div`
    width: 122px;
    height: 20px;
    font-size: 12px;
    line-height: 20px;
`

export const CreateAcc = styled.div`
    width: 90px;
    height: 20px;
    color: #4500ff;
    font-size: 12px;
    line-height: 20px;
`