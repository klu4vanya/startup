import { Chip } from "@mui/material";
import styled from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    height: 256px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5%;
    padding-bottom: 5%;
`
export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    height: 257px;
    width: 574px;
`
export const CardInfoTitle = styled.div`
    width: 127px;
    height: 44px;
    font-size: 36px;
    line-height: 43px;
    font-weight: 400;
`
export const CardInfoSubitle = styled.div`
    width: 574px;
    height: 72px;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
`
export const ChipContainer = styled.div`
    width: 574px;
    height: 44px;
    display: flex;
    justify-content: space-between;
`
export const StyledChip = styled(Chip)`
    width: 139px;
    height: 44px;
    background-color: #D9D9D9;
    text-align: center;
`
export const ClinicTitle = styled.div`
    width: 410px;
    height: 24px;
    color: #7A7A7A;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
`