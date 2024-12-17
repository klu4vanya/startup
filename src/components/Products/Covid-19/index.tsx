import React from 'react'
import { ProductsContainer, CategoryContainer, TitleCategory, Title, Container, ProductSubtitle } from '../../Products/styles'
import Covid_19_img from '../../../assets/Covid-19_img.jpg'
import { ImagesContainer } from '../../Projects/Path AI/styles'


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
            <Container
                style={{
                    display: 'flex',
                    gap: '20px'
                }}
            >
                <ProductSubtitle
                    style={{ margin: '50px 0 0 0', width: '60%' }}
                >
                   Оценка иммунного ответа в цифровых гистологических изображениях легких.
                </ProductSubtitle>
                <ImagesContainer>
                    <img 
                        src={Covid_19_img}
                    />
                </ImagesContainer>
            </Container>
        </ProductsContainer>
    )
}
