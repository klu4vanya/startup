import { Chip } from "@mui/material";
import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  height: 256px;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  margin-top: 5%;
  padding-bottom: 5%;
  @media (max-width: 768px) {
    height: auto;
  }
`;

export const MyImg = styled.img`
  width: 256px;
  height: 256px;
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export const ImgAndDescContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  @media (max-width: 768px){
    width: auto;
    height: auto;
    border: 1px solid #000;
    padding: 2%;
    margin-right: 5%;
  }
`;
export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  height: 257px;
  width: 574px;
  @media (max-width: 768px) {
    width: auto;
    margin: 0 5% 0 5%;
    height: auto;
  }
`;
export const CardInfoTitle = styled.div`
  width: 127px;
  height: 44px;
  font-size: 36px;
  line-height: 43px;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 26px;
  }
`;
export const CardInfoSubitle = styled.div`
  width: 574px;
  height: 72px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 16px;
    width: auto;
    height: auto;
  }
`;
export const ChipContainer = styled.div`
  width: 574px;
  height: 44px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px){
    width: auto;
    height: calc(44px * 3);
    flex-direction: column;
    gap: 5%;
  }
`;
export const StyledChip = styled(Chip)`
  width: 139px;
  height: 44px;
  background-color: #d9d9d9;
  text-align: center;
`;
export const ClinicTitle = styled.div`
  width: 410px;
  height: 24px;
  color: #7a7a7a;
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  @media (max-width: 768px){
    width: auto;
    font-size: 18px;
    height: auto;
  }
`;
