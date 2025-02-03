import { Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";
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
  @media (max-width: 768px) {
    display: grid;
    height: auto;
  }
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
  @media (max-width: 768px) {
    height: 200px;
    width: 100%;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: linear-gradient(90deg, #758bfb, #9104fd);
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
  height: auto;
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1.3em;
  text-align: center;
  @media (max-width: 768px) {
    height: auto;
    font-size: 20px;
    width: 100%;
    margin: 10% 0 0 0;
  }
`;

export const MainSubitle = styled.div`
  width: 100%;
  height: auto;
  margin-top: 44px;
  font-size: 20px;
  line-height: 1.3em;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 18px;
    text-align: left;
  }
`;
export const TestContainer = styled.div`
  width: 100%;
  height: 325px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: grid;
    height: auto;
    justify-content: center;
  }
  .compImage {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
export const TestCard = styled.div`
  width: 620px;
  height: 168px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;
export const TestTitle = styled.div`
  width: 215px;
  height: 18px;
  font-size: 18px;
  line-height: 1.3em;
  margin-bottom: 24px;
  text-align: center;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CompContainer = styled.div`
  width: 325px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const SubCompContainer = styled.div`
  height: auto;
  width: 340px;
`;
export const SubCompTitle = styled.div`
  width: 100%;
  height: auto;
  font-size: 20px;
  line-height: 1.3em;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
export const SubCompSubtitle = styled.div`
  width: 100%;
  height: auto;
  font-size: 18px;
  line-height: 1.3em;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
export const StatisticWrapper = styled.div`
  width: 100%;
  height: auto;
  flex-direction: column;
  background-color: #d5d2d6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 5%;
  @media (max-width: 768px) {
    display: grid;
    height: auto;
    justify-content: center;
    height: auto;
  }
`;
export const StatisticsContainer = styled.div`
  width: 65%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

export const StatTitle = styled.div`
  width: 100%;
  height: auto;
  font-size: 30px;
  line-height: 51px;
  margin-top: 100px;
  text-align: center;
  @media (max-width: 768px) {
    margin-top: 10%;
  }
`;

export const StatSubitle = styled.div`
  width: 100%;
  height: auto;
  font-size: 18px;
  line-height: 24px;
  margin-top: 40px;
  @media (max-width: 768px){
    margin: 0;
  }
`;
export const Amount = styled.div`
  width: 150px;
  height: 100px;
  font-size: 80px;
  font-weight: bold;
  color: #4b0ffc;
  margin: 0 auto;
`;

export const MainFooterContainer = styled.div`
  width: 100%;
  height: 300px;
  background-color: #fff;
`;
export const PartnerContainer = styled.div`
  width: 90%;
  margin: 50px auto 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  @media (max-width:  768px){
    .partners-images{
        display: none;
        margin-top: 0;
    }
  }
`;

export const StyledCarousel = styled(Carousel)`
    display: none;
    @media (max-width: 768px){
        display: block;
        margin-top: 0;
    }
`