import React from 'react'
import { ProductsContainer, CategoryContainer, TitleCategory, Title } from '../../Products/styles'
import Derma_slide_img from '../../../assets/derma_slide_img.jpg'
import { ImagesContainer } from '../../Projects/Path AI/styles'
import { BreastSubtitle, Container } from '../BreastCancer/styles'


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
            <Container>
                <BreastSubtitle>
                   Программа анализа дерматоскопических изображений кожи. Возможность получения второго мнения при диагностическом осмотре для врачей дерматологов.
                </BreastSubtitle>
                <ImagesContainer>
                    <img 
                        src={Derma_slide_img}
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
