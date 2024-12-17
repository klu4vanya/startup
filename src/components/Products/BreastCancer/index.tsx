import React from 'react'
import { ProductsContainer, CategoryContainer, TitleCategory, Title, Container, ProductSubtitle } from '../styles'
import Breast_cancer_img from '../../../assets/Breast_cancer_img.jpg'
import { ImagesContainer } from '../../Projects/Path AI/styles'


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
            <Container
                style={{
                    display: 'flex',
                    gap: '20px'
                }}
            >
                <ProductSubtitle
                    style={{ margin: '50px 0 0 0', width: '60%' }}
                >
                   Определение рака молочной железы в полнослайдовых изображениях.
                </ProductSubtitle>
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
