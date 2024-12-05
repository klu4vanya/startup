import React from 'react'
import { CategoryContainer, Container, Line, MoreButton, ProductName, ProductsContainer, ProductSubtitle, ProductSubtitleContainer, Title, TitleCategory } from '../Products/styles'

export default function Projects() {
    return (
        <ProductsContainer>
            <CategoryContainer>
                <TitleCategory>
                    <Title>Образовательные проекты</Title>
                </TitleCategory>
            </CategoryContainer>
            <Container>
                <ProductName>Path AI</ProductName>
                <Line />
                <ProductSubtitleContainer>
                    <ProductSubtitle>Мобильное приложение для пациентов патоморфологического и онкологического профилей.{'\u00A0'}
                        <MoreButton to="/pathAI">Подробнее</MoreButton>
                    </ProductSubtitle>
                </ProductSubtitleContainer>
                <ProductName>Hist Arch</ProductName>
                <Line />
                <ProductSubtitleContainer>
                    <ProductSubtitle>Архив полнослайдовых изображений гистологических препаратов, макроизображений для медлицинских учереждений здравоохранения и образования.{'\u00A0'}
                        <MoreButton to="/histArch">Подробнее</MoreButton>
                    </ProductSubtitle>
                </ProductSubtitleContainer>
                <ProductName>Doc AI</ProductName>
                <Line />
                <ProductSubtitleContainer>
                    <ProductSubtitle>Умный ассистент врачей-специалистов, быстрая и точная помощь в постановке диагнозов.{'\u00A0'}
                        <MoreButton to="/docAI">Подробнее</MoreButton>
                    </ProductSubtitle>
                </ProductSubtitleContainer>
            </Container>
        </ProductsContainer>
    )
}
