import React from 'react'
import { Container, MoreButton, ProductSubtitle, ProductSubtitleContainer } from '../Products/styles'
import { MainSubitle, MainTitle } from '../Main/styles'
import honov from '../../assets/honov.jpg'
import glashov from '../../assets/нр1.png'
import { StyledCarousel, StyledMainTitle } from './styles';
import { Paper } from '@mui/material';
import empty_photo from '../../assets/empty_photo.jpg'

const images = [
    {
        src: honov,
        name: 'Хонов Владислав Русланович',
        job: 'CEO, Founder'
    },
    {
        src: empty_photo,
        name: 'Наумов Сергей Алексеевич',
        job: 'CTO'
    },
    {
        src: empty_photo,
        name: 'Ключник Иван Павлович',
        job: 'Senior Director of Marketing'
    },
    {
        src: glashov,
        name: 'Юрий Петрович Глашов',
        job: 'Head of pathology'
    },
]


export default function AboutCompany() {
    return (
        <Container>
            <MainSubitle
                style={{
                    textAlign: 'left'
                }}
            >
                Наша компания специализируется на разработке программного обеспечения в области цифровой патологии, стремясь интегрировать передовые технологии для повышения эффективности и точности патоморфологических исследований.
            </MainSubitle>
            <StyledMainTitle>
                О компании
            </StyledMainTitle>
            <MainSubitle
                style={{
                    textAlign: 'left'
                }}
            >
                CALADRIUS - ведущим разработчиком программных решений, предназначенных для преобразования традиционных методов патоморфологической диагностики в цифровой формат. Наша миссия заключается в создании инновационных инструментов, которые способствуют улучшению качества медицинских услуг.
            </MainSubitle>
            <StyledMainTitle>
                Наши решения
            </StyledMainTitle>
            <MainSubitle
                style={{
                    textAlign: 'left'
                }}
            >
                Мы предлагаем комплексные программные продукты, обеспечивающие:
            </MainSubitle>
            <ProductSubtitleContainer
                style={{
                    display: 'flex',
                    alignItems: 'stretch',
                    marginTop: '3%',
                    padding: '3%'
                }}
            >
                <ProductSubtitle>
                    <span>Цифровую визуализацию препаратов:</span> разработанные решения позволяют преобразовывать стеклянные слайды тканей в высококачественные цифровые изображения, доступные для детального анализа и совместного использования специалистами<br />
                    <span>Анализ изображений с использованием искусственного интеллекта:</span> внедрение алгоритмов машинного обучения способствует автоматическому выявлению патологических изменений, повышая точность и скорость диагностики.<br />
                    <span>Хранение и управление данными:</span> созданные системы обеспечивают надежное хранение цифровых слайдов в стандартизированном формате, что облегчает доступ и обмен информацией между медицинскими учреждениями.<br />
                </ProductSubtitle>
            </ProductSubtitleContainer>
            <StyledMainTitle>
                Преимущества наших решений
            </StyledMainTitle>
            <ProductSubtitleContainer
                style={{
                    display: 'flex',
                    alignItems: 'stretch',
                    marginTop: '3%',
                    padding: '3%'
                }}
            >
                <ProductSubtitle>
                    <span>Улучшение качества диагностики:</span> цифровая патология предоставляет возможность более детального анализа образцов, что повышает точность постановки диагнозов.<br />
                    <span>Сокращение времени обработки:</span>  автоматизация процессов анализа и управления данными ускоряет получение результатов, что особенно важно в клинической практике.<br />
                    <span>Дистанционное консультирование:</span>  цифровые слайды могут быть легко переданы для удаленного анализа, обеспечивая доступ к экспертному мнению независимо от географического положения.<br />
                </ProductSubtitle>
            </ProductSubtitleContainer>
            <StyledMainTitle>
                Руководители проекта:
            </StyledMainTitle>
            <StyledCarousel className="rounded-xl" navButtonsAlwaysVisible autoPlay={false}
                sx={{ width: 'auto', height: '650px' }}>
                {images.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            width: 'auto',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '500px'
                        }}
                    >
                        <Paper
                            key={index}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "space-between",
                                height: '500px'
                            }}
                        >
                            <img
                                src={item.src}
                                alt={`Slide ${index}`}
                            />
                            <StyledMainTitle
                                style={{
                                    marginTop: "35px",
                                    textAlign: "center",
                                    zIndex: '999'
                                }}
                            >
                                {item.name}
                            </StyledMainTitle>
                            <MainSubitle
                                style={{
                                    marginTop: "35px",
                                    textAlign: "center",
                                    zIndex: '999'
                                }}
                            >
                                {item.job}
                            </MainSubitle>
                        </Paper>
                    </div>
                ))}
            </StyledCarousel>
        </Container>
    )
}
