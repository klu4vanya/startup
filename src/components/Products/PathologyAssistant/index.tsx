import React from 'react'
import { CategoryContainer, Container, Line, MoreButton, ProductName, ProductsContainer, ProductSubtitle, ProductSubtitleContainer, Subtitle, Title, TitleCategory } from '../styles'

export default function PathologyAssistant() {
    return (
        <ProductsContainer>
            <CategoryContainer>
                <TitleCategory>
                    <Title
                        style={{
                            width: 'auto'
                        }}
                    >Pathology Assistant</Title>
                </TitleCategory>
            </CategoryContainer>
            <Container>
                <ProductSubtitle
                    style={{ margin: '50px 0 0 0', width: '60%' }}
                >Pathology Assistant © – программный продукт для патологов на основе платформы Digital Pathology©, предназначенный для поддержки принятия врачебных решений.

                    Pathology Assistant © – это синтез гистологического атласа и микроскопа, позволяющий дифференцировать диагноз на основании объективных морфологических и клинических особенностей. Пользователь заполняет анкету, с выбором параметров число вероятных нозологических единиц сужается, что упрощает диагностическую работу патологоанатома в конкретном диагностическом случае. Первым разделом Pathology Assistant© стал Pathology Assistant Bone Tumors, посвящённый патологии костей.
                </ProductSubtitle>
            </Container>
        </ProductsContainer>
    )
}
