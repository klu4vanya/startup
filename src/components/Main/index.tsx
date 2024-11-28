import React from 'react'
import { Amount, Card, CompContainer, Label, MainContainer, MainFooterContainer, MainSubitle, MainTitle, Overlay, PartnerContainer, StatisticsContainer, StatSubitle, StatTitle, SubCompContainer, SubCompSubtitle, SubCompTitle, TestCard, TestContainer, TestTitle } from './styles';
import page1 from '../../assets/mainPage1.png'
import page2 from '../../assets/mainPage2.jpg'
import page3 from '../../assets/mainPage3.jpg'
import page4 from '../../assets/mainPage4.jpg'
import page5 from '../../assets/mainPage5.jpg'
import Comp from '../../assets/Comp.png'
import Icon_1 from '../../assets/Icon1.png'
import Icon_2 from '../../assets/Icon2.png'
import Icon_3 from '../../assets/Icon3.png'
import Part1 from '../../assets/логотип партнера 1.jpg'
import Part2 from '../../assets/логотип парнера 2.jpg'
import Part3 from '../../assets/логотип партнёра 3.jpg'
import Part4 from '../../assets/логотип партнера 4.png'

import { Container, Line, ProductName, ProductsContainer } from '../Products/styles';


interface CardProps {
    image: string;
    label: string;
}

const InfoCard: React.FC<CardProps> = ({ image, label }) => {
    return (
        <Card>
            <img src={image} alt={label} />
            <Overlay>
                <Label>{label}</Label>
            </Overlay>
        </Card>
    );
};

const Main: React.FC = () => {
    const data = [
        {
            image: page1,
            label: "Диагностика",
        },
        {
            image: page2,
            label: "Исследование",
        },
        {
            image: page3,
            label: "Обучение",
        },
    ];

    const Testdata = [
        {
            image: page4,
            title: "Рак молочной железы"
        },
        {
            image: page5,
            title: 'Рак предстательной железы'
        },
        {
            image: page3,
            title: 'Covid-19'
        }
    ]

    const CompData = [
        {
            image: Icon_1,
            title: 'SAAS решение',
            subtitle: 'Облачное SAAS решение не требует установки на ПК, доступно из любого браузера в любой точке света. Для использования необходим только интернет.'
        },
        {
            image: Icon_2,
            title: 'Дистанционность',
            subtitle: 'Система позволяет консультировать оцифрованные гистологические препараты в любой точке мира в режиме реального времени.'
        },
        {
            image: Icon_3,
            title: 'Консилиум',
            subtitle: 'Digital Pathology позволяет проводить консультацию гистологического препарата в режиме врачебного консилиума без ограничения числа единовременных пользователей.'
        }
    ]
    const StatData = [
        {
            amount: '12+',
            subtitle: 'из 20 лучших биофармацевтических компаний'
        },
        {
            amount: '25+',
            subtitle: 'клинические исследования'
        },
        {
            amount: '1',
            subtitle: 'перспективная запись на исследование'
        }
    ]
    const PartnerData = [
        {
            image: Part1
        },
        {
            image: Part2
        },
        {
            image: Part3
        },
        {
            image: Part4
        },
    ]

    return (
        <ProductsContainer>
            <MainContainer>
                {data.map((item, index) => (
                    <InfoCard key={index} image={item.image} label={item.label} />
                ))}
            </MainContainer>
            <Container
                style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}
            >
                <MainTitle>CALADRIUS – платформа анализа цифровых данных на основе искусственного интеллекта
                </MainTitle>
                <MainSubitle>Программное обеспечение для морфологической диагностики, построенное на облачных технологиях. Ключевая задача, которую решает этот продукт – повышение эффективности
                    морфологического этапа онкологической диагностики – снижение вероятности ошибок, снижение сроков диагностики.</MainSubitle>
                <ProductName>Посмотреть тестовые случаи</ProductName>
                <Line />
            </Container>
            <TestContainer>
                {Testdata.map((item, index) => (
                    <TestCard key={index} >
                        <TestTitle>{item.title}</TestTitle>
                        <img
                            src={item.image}
                            style={{ width: '300px', height: '168px', paddingBottom: '36px' }}
                        />
                    </TestCard>
                ))}
            </TestContainer>
            <TestContainer
                style={{
                    height: '659px',
                    backgroundColor: '#f2f2f2',
                    justifyContent: 'space-evenly'

                }}
            >
                <img
                    src={Comp}
                    style={{ width: '478px', height: '442px' }}
                />
                <CompContainer>
                    {CompData.map((item, index) => (
                        <SubCompContainer key={index}>
                            <img
                                style={{ width: '15px', height: '14px' }}
                                src={item.image}
                            />
                            <SubCompTitle>{item.title}</SubCompTitle>
                            <SubCompSubtitle>{item.subtitle}</SubCompSubtitle>
                        </SubCompContainer>

                    ))}

                </CompContainer>
            </TestContainer>
            <TestContainer
                style={{
                    backgroundColor: '#d5d2d6',
                    flexDirection: 'column',
                    height: '800px'
                }}
            >
                <Container>
                    <StatTitle>Технология nucleais выделяется тем, что является первым пространственным инструментом искусственного интеллекта, используемым патологами для отбора пациентов для клинических испытаний, который напрямую связан с программой разработки лекарственных препаратов.</StatTitle>
                    <StatSubitle>Какой-то человек, Инвестиционный директор</StatSubitle>
                </Container>
                <StatisticsContainer>
                    {StatData.map((item, index) => (
                        <TestContainer
                            style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'normal', textAlign: 'center'}}
                            key={index}
                        >
                            <Amount>{item.amount}</Amount>
                            <StatSubitle>{item.subtitle}</StatSubitle>
                        </TestContainer>
                    ))}
                </StatisticsContainer>
            </TestContainer>
            <MainFooterContainer>
                <StatTitle
                    style={{
                        color: '#4b0ffc',
                        width: '60%',
                        margin: '0 auto',
                        textAlign: 'center',
                        paddingTop: '70px'
                    }}
                >Данные и институционные партнеры</StatTitle>
                <PartnerContainer >
                    {PartnerData.map((item, index) => (
                        <img 
                        key={index} 
                        src={item.image}
                        style={{
                            width: '150px',
                            height: 'auto'
                        }}
                        />
                    ))}
                </PartnerContainer>
            </MainFooterContainer>
        </ProductsContainer>
    );
};

export default Main;