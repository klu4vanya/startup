import { Button } from "@mui/material";
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  gap: 20px;
  padding: 20px;
  background: #f2f2f2;
  height: 500px;
`;

export const Card = styled(Button)`
  position: relative;
  flex: 1;
  overflow: hidden;
  border-radius: 12px !important;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  height: 400px;
  padding: 0 !important;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: linear-gradient(90deg, #ff9cf3, #cfa8ff);
  text-align: center;
  padding: 10px;
  border-radius: 0 0 12px 12px;
  z-index: 3;
`;

export const Label = styled.span`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

export const MainTitle = styled.div`
    width: 80%;
    margin: 97px auto 0 auto;
    height: 27px;
    font-size: 18px;
    text-transform: uppercase;
    line-height: 27px;
    text-align: center;
`

export const MainSubitle = styled.div`
    width: 100%;
    height: 42px;
    margin-top: 44px;
    font-size: 14px;
    line-height: 23px;
    text-align: center;
`
export const TestContainer = styled.div`
    width: 100%;
    height: 325px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const TestCard = styled.div`
    width: 620px;
    height: 168px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const TestTitle = styled.div`
    width: 215px;
    height: 18px;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 24px;
    text-align: center;
    font-weight: bold;
`

export const CompContainer = styled.div`
    width: 325px;
    height: 450px;
`
export const SubCompContainer = styled.div`
    height: 180px;
    width: 340px;
`
export const SubCompTitle = styled.div`
    width: 120px;
    height: 24px;
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;
`
export const SubCompSubtitle = styled.div`
    width: 325px;
    height: 120px;
    font-size: 14px;
    line-height: 24px;
`
export const StatisticsContainer = styled.div`
    width: 65%;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
`

export const StatTitle = styled.div`
    width: 100%;
    height: auto;
    font-size: 30px;
    line-height: 51px;
    margin-top: 100px;
`

export const StatSubitle = styled.div`
    width: 100%;
    height: auto;
    font-size: 18px;
    line-height: 24px;
    margin-top: 40px;
`
export const Amount = styled.div`
    width: 150px;
    height: 100px;
    font-size: 80px;
    font-weight: bold;
    color: #4b0ffc;
`

export const MainFooterContainer = styled.div`
    /* background-color: #8257fe; */
    width: 100%;
    height: 300px;
    background-color: #fff;
`
export const PartnerContainer = styled.div`
    width: 60%;
    margin: 50px auto 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`