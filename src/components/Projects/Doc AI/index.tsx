import React from "react";
import {
  ProductsContainer,
  CategoryContainer,
  TitleCategory,
  Title,
  
} from "../../Products/styles";
import { ImagesContainer } from "../Path AI/styles";
import DocAi_img from "../../../assets/DocAI.png";
import { BreastSubtitle, Container } from "../../Products/BreastCancer/styles";

export default function DocAI() {
  return (
    <ProductsContainer>
      <CategoryContainer>
        <TitleCategory>
          <Title
            style={{
              width: "auto",
            }}
          >
            Doc AI
          </Title>
        </TitleCategory>
      </CategoryContainer>
      <Container>
        <BreastSubtitle>
          Умный ассистент врачей-специалистов, быстрая и точная помощь в
          постановке диагнозов.
        </BreastSubtitle>
        <ImagesContainer>
          <img src={DocAi_img} />
        </ImagesContainer>
      </Container>
    </ProductsContainer>
  );
}
