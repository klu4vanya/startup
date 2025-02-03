import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    /* display: grid; */
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
  }
`;
export const BreastSubtitle = styled.div`
  width: 94%;
  height: auto;
  margin: 0 auto;
  font-size: 20px;
  line-height: 24px;
  color: #666666;
  margin: 50px 0 0 0;
  width: 60%;

  @media (max-width: 768px){
    width: 100%;
    font-size: 18px;
  }

  & > span {
    font-weight: bold;
  }
`;
