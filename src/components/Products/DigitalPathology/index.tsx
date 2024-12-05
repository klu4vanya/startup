import React from 'react'
import { ProductsContainer, CategoryContainer, TitleCategory, Title, Container, ProductSubtitle } from '../styles'

export default function DigitalPathology() {
    return (
        <ProductsContainer>
            <CategoryContainer>
                <TitleCategory>
                    <Title
                        style={{
                            width: 'auto'
                        }}
                    >Digital Pathology Collaboration ©</Title>
                </TitleCategory>
            </CategoryContainer>
            <Container>
                <ProductSubtitle
                    style={{ margin: '50px 0 0 0', width: '60%' }}
                >Digital Pathology Collaboration © — это программный продукт, работающий на основе платформы Digital Pathology ©. Digital Pathology Collaboration © обеспечивает проведение образовательных мероприятий для патологов с возможностями, превышающими наиболее близкий аналог — современный multi—head микроскоп.

                Применение Digital Pathology Collaboration © в образовательном процессе по сути позволяет собрать за одним multi-head микроскопом десятки и сотни специалистов, работающих удаленно через сеть интернет, и проводить разбор случаев в режиме реального времени с возможностью голосовой коммуникации. На базе этой технологии возможно создание и проведение максимально эффективных образовательных курсов, регионального, федерального и международного уровней.
                
                Возможности Digital Pathology Collaboration ©:
                
                Одновременный просмотр серийных срезов с различными окрасками
                Выделение и комментирование диагностически значимых участков
                Голосовое общение с преподавателем и в режиме онлайн-чата
                Работа методом консилиума онлайн с оцифрованными гистологическими препаратами
                Создание и хранение архива для обучения и научного исследования
                Объединение компетенций врачей со всего мира
                </ProductSubtitle>
            </Container>
        </ProductsContainer>
    )
}
