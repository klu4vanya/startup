import React from 'react'
import { ProductsContainer, CategoryContainer, TitleCategory, Title, Container, ProductSubtitle } from '../../Products/styles'
import { ImagesContainer } from '../Path AI/styles'
import HistArch_img from '../../../assets/HistArch.png'


export default function HistArch() {
    return (
        <ProductsContainer>
            <CategoryContainer>
                <TitleCategory>
                    <Title
                        style={{
                            width: 'auto'
                        }}
                    >HistArch</Title>
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
                   Архив полнослайдовых изображений гистологических препаратов, макроизображений для медлицинских учереждений здравоохранения и образования. Встроенные инструменты аннотации позволяют создавать датасеты и проводить телеконсультации. Разработанные нейросетевые модели позволяют вводить новые методы обучения, совершенствовать практические навыки.
                </ProductSubtitle>
                <ImagesContainer>
                    <img 
                        src={HistArch_img}
                    />
                </ImagesContainer>
            </Container>
        </ProductsContainer>
    )
}
