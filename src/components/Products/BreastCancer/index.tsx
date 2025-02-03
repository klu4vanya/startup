import React from 'react'
import { ProductsContainer, CategoryContainer, TitleCategory, Title } from '../styles'
import Breast_cancer_img from '../../../assets/Breast_cancer_img.jpg'
import { ImagesContainer } from '../../Projects/Path AI/styles'
import { BreastSubtitle, Container } from './styles'


export default function BreastCancer() {
    return (
        <ProductsContainer>
            <CategoryContainer>
                <TitleCategory>
                    <Title
                        style={{
                            width: 'auto'
                        }}
                    >BreastCancer</Title>
                </TitleCategory>
            </CategoryContainer>
            <Container>
                <BreastSubtitle>
                   Определение рака молочной железы в полнослайдовых изображениях.
                </BreastSubtitle>
                <ImagesContainer>
                    <img 
                        src={Breast_cancer_img}
                        style={{
                            width: '100%'
                        }}
                    />
                </ImagesContainer>
            </Container>
        </ProductsContainer>
    )
}
