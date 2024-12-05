import React from 'react'
import { ProductsContainer, CategoryContainer, TitleCategory, Title, Container, ProductSubtitle } from '../../Products/styles'
import { ImagesContainer } from './styles'
import PathAI_1 from '../../../assets/pathai_1.png'
import PathAI_2 from '../../../assets/pathai_2.png'


export default function PathAi() {
    return (
        <ProductsContainer>
            <CategoryContainer>
                <TitleCategory>
                    <Title
                        style={{
                            width: 'auto'
                        }}
                    >Path AI</Title>
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
                    Мобильное приложение для пациентов патоморфологического и онкологического профилей. Пациент может проводить загрузку полнослайдовых изображений биопсий для получения второго мнения специалистов, проводить оценку рисков с помщью инструментов ИИ. Приложение работает как с макро- так и с микроизображениями.
                </ProductSubtitle>
                <ImagesContainer>
                    <img 
                        src={PathAI_1}
                        style={{
                            borderRadius: '35px'
                        }}
                    />
                    <img 
                        src={PathAI_2}
                        style={{
                            borderRadius: '35px'
                        }}
                    />
                </ImagesContainer>
            </Container>
        </ProductsContainer>
    )
}
