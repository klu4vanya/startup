import React from "react";
import {
  ProductsContainer,
  CategoryContainer,
  TitleCategory,
  Title,
} from "../../Products/styles";
import { ImagesContainer } from "../Path AI/styles";
import HistArch_img from "../../../assets/HistArch.png";
import { BreastSubtitle, Container } from "../../Products/BreastCancer/styles";

export default function HistArch() {
  return (
    <ProductsContainer>
      <CategoryContainer>
        <TitleCategory>
          <Title
            style={{
              width: "auto",
            }}
          >
            HistArch
          </Title>
        </TitleCategory>
      </CategoryContainer>
      <Container>
        <BreastSubtitle>
          Архив полнослайдовых изображений гистологических препаратов,
          макроизображений для медлицинских учереждений здравоохранения и
          образования. Встроенные инструменты аннотации позволяют создавать
          датасеты и проводить телеконсультации. Разработанные нейросетевые
          модели позволяют вводить новые методы обучения, совершенствовать
          практические навыки.
        </BreastSubtitle>
        <ImagesContainer>
          <img src={HistArch_img}
          style={{
            width: '100%',
            height: 'auto'
          }}
          />
        </ImagesContainer>
      </Container>
    </ProductsContainer>
  );
}
