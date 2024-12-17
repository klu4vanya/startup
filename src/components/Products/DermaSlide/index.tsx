import React from 'react'
import { ProductsContainer, CategoryContainer, TitleCategory, Title, Container, ProductSubtitle } from '../../Products/styles'
import Derma_slide_img from '../../../assets/derma_slide_img.jpg'
import { ImagesContainer } from '../../Projects/Path AI/styles'


export default function DermaSlide() {
    return (
        <ProductsContainer>
            <CategoryContainer>
                <TitleCategory>
                    <Title
                        style={{
                            width: 'auto'
                        }}
                    >DermaSlide</Title>
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
                   Программа анализа дерматоскопических изображений кожи. Возможность получения второго мнения при диагностическом осмотре для врачей дерматологов.
                </ProductSubtitle>
                <ImagesContainer>
                    <img 
                        src={Derma_slide_img}
                        style={{
                           width: '100%'
                        }}
                    />
                </ImagesContainer>
            </Container>
        </ProductsContainer>
    )
}
