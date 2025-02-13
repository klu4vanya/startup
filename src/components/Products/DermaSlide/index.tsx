import React from "react";
import {
  ProductsContainer,
  CategoryContainer,
  TitleCategory,
  Title,
} from "../../Products/styles";
import Derma_slide_img from "../../../assets/derma_slide_img.jpg";
import { ImagesContainer } from "../../Projects/Path AI/styles";
import { BreastSubtitle, Container } from "../BreastCancer/styles";

export default function DermaSlide() {
  return (
    <ProductsContainer>
      <CategoryContainer>
        <TitleCategory>
          <Title
            style={{
              width: "auto",
            }}
          >
            DermaSlide
          </Title>
        </TitleCategory>
      </CategoryContainer>
      <Container>
        <BreastSubtitle>
          Программа для анализа дерматоскопических изображений кожи — это
          современное решение, разработанное для поддержки врачей-дерматологов в
          диагностике кожных заболеваний. С помощью advanced-алгоритмов
          искусственного интеллекта программа анализирует дерматоскопические
          снимки, выявляя признаки новообразований, таких как меланома,
          базальноклеточный рак и другие патологии кожи. Одной из ключевых
          функций программы является возможность получения второго мнения, что
          особенно важно для повышения точности диагностики. Врач может
          загрузить изображение, а система предоставит детальный анализ с
          указанием вероятных диагнозов и рекомендациями по дальнейшим
          действиям. Это не только сокращает время на постановку диагноза, но и
          минимизирует риск ошибок. Программа также позволяет вести архив
          пациентов, отслеживать динамику изменений и обмениваться данными с
          коллегами для консультаций. Для врачей это инструмент, который
          повышает уверенность в принятии клинических решений.
        </BreastSubtitle>
        <ImagesContainer>
          <img
            src={Derma_slide_img}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </ImagesContainer>
      </Container>
    </ProductsContainer>
  );
}
