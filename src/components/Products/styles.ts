import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductsContainer = styled.div``;
export const CategoryContainer = styled.div`
  width: 100%;
  height: 158px;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
`;

export const TitleCategory = styled.div`
  margin-left: 20%;
  height: 60px;
  width: 660px;
  @media (max-width: 768px) {
    margin: 0 auto;
    width: 80%;
    height: 120px;
  }
`;

export const Title = styled.div`
  width: auto;
  height: 36px;
  font-size: 30px;
  line-height: 36px;
  color: #444444;
  @media (max-width: 768px) {
    font-size: 24px;
    font-weight: 600;
  }
`;
export const Subtitle = styled.div`
  width: 660px;
  height: 24px;
  font-size: 20px;
  line-height: 24px;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 18px;
  }
`;
export const Container = styled.div`
  width: 60%;
  margin: 0 20% 0 20%;
  @media (max-width: 768px){
    margin: 0 10% 0 10%;
    width: 80%;
  }
`;

export const ProductName = styled.div`
  width: auto;
  height: 20px;
  color: #4b0ffc;
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  text-transform: uppercase;

  margin-top: 94px;
`;

export const Line = styled.div`
  width: 60px;
  height: 2px;
  margin-top: 12px;
  margin-bottom: 31px;
  background-color: #4b0ffc;
`;

export const ProductSubtitleContainer = styled.div`
  width: 100%;
  height: 127px;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
`;
export const ProductSubtitle = styled.div`
  width: 94%;
  height: auto;
  margin: 0 auto;
  font-size: 13px;
  line-height: 24px;
  color: #666666;

  & > span {
    font-weight: bold;
  }
`;
export const MoreButton = styled(Link)`
  width: 83px;
  height: 18px;
  text-decoration: none;
  color: #4b0ffc;
`;
