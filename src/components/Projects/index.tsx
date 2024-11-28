import React from 'react'
import { CategoryContainer, Container, Line, ProductName, ProductsContainer, ProductSubtitle, ProductSubtitleContainer, Title, TitleCategory } from '../Products/styles'

export default function Projects() {
  return (
    <ProductsContainer>
        <CategoryContainer>
                <TitleCategory>
                    <Title>Образовательные проекты</Title>
                </TitleCategory>
            </CategoryContainer>
            <Container>
                <ProductName>PATHOLOGY</ProductName>
                <Line/>
                <ProductSubtitleContainer>
                    <ProductSubtitle>Проект, нацеленный на разбор интересных морфологических случаев, образовательная возможность, способствующая коммуникации в профессиональном сообществе. Случаи для обсуждения валидируются минимум двумя независимыми специалистами перед их презентацией участникам проекта.</ProductSubtitle>
                </ProductSubtitleContainer>
                <ProductName>«Окончательный диагноз»</ProductName>
                <Line/>
                <ProductSubtitleContainer>
                    <ProductSubtitle>Всероссийский диагностический онлайн конкурс для патологоанатомов. По условиям конкурса от специалистов требуется провести морфологическую диагностику нескольких случаев из различных нозологических групп. Конкурс проводится на базе платформы для дистанционной диагностики онкологических заболеваний Digital Pathology©.  </ProductSubtitle>
                </ProductSubtitleContainer>
            </Container>
    </ProductsContainer>
  )
}
