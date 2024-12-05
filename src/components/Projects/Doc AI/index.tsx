import React from 'react'
import { ProductsContainer, CategoryContainer, TitleCategory, Title, Container, ProductSubtitle } from '../../Products/styles'
import { ImagesContainer } from '../Path AI/styles'
import DocAi_img from '../../../assets/DocAI.png'


export default function DocAI() {
    return (
        <ProductsContainer>
            <CategoryContainer>
                <TitleCategory>
                    <Title
                        style={{
                            width: 'auto'
                        }}
                    >Doc AI</Title>
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
                   Умный ассистент врачей-специалистов, быстрая и точная помощь в постановке диагнозов.
                </ProductSubtitle>
                <ImagesContainer>
                    <img 
                        src={DocAi_img}
                    />
                </ImagesContainer>
            </Container>
        </ProductsContainer>
    )
}
