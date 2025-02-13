import React from 'react'
import { ProductsContainer, CategoryContainer, TitleCategory, Title } from '../../Products/styles'
import Covid_19_img from '../../../assets/Covid-19_img.jpg'
import { ImagesContainer } from '../../Projects/Path AI/styles'
import { BreastSubtitle, Container } from '../BreastCancer/styles'


export default function Covid19() {
    return (
        <ProductsContainer>
            <CategoryContainer>
                <TitleCategory>
                    <Title
                        style={{
                            width: 'auto'
                        }}
                    >Covid-19</Title>
                </TitleCategory>
            </CategoryContainer>
            <Container>
                <BreastSubtitle>
                Оценка иммунного ответа в цифровых гистологических изображениях легких пациентов при COVID-19.
                </BreastSubtitle>
                <ImagesContainer>
                    <img 
                        src={Covid_19_img}
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                    />
                </ImagesContainer>
            </Container>
        </ProductsContainer>
    )
}
