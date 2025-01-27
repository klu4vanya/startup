import { TextSpan } from "../Header/styles";
import { ProductsContainer, CategoryContainer, TitleCategory, Title, Subtitle, ProductName, Container, Line, ProductSubtitleContainer, ProductSubtitle, MoreButton } from "./styles";


export default function Products() {
    return (
        <ProductsContainer
            style={{
                position: 'relative',
                top: '190px'
            }}
        >
            <CategoryContainer>
                <TitleCategory>
                    <Title>Продукты</Title>
                    <Subtitle>Сервисы и программы в области цифровой патологоанатомии</Subtitle>
                </TitleCategory>
            </CategoryContainer>
            <Container>
                <ProductName>DentalPath</ProductName>
                <Line />
                <ProductSubtitleContainer>
                    <ProductSubtitle>  Программа распознавание новообразований ротовой полости. Программное обеспечение для пациентов и врачей-стоматологов.
                        {'\u00A0'}
                        <MoreButton to="/dentalPath">Подробнее</MoreButton>
                    </ProductSubtitle>
                </ProductSubtitleContainer>
                <ProductName>DermaSlide</ProductName>
                <Line />
                <ProductSubtitleContainer>
                    <ProductSubtitle>Программа анализа дерматоскопических изображений кожи. Возможность
                        получения второго мнения при диагностическом осмотре для врачей дерматологов.
                        {'\u00A0'}
                        <MoreButton to="/dermaSlide">Подробнее</MoreButton>
                    </ProductSubtitle>
                </ProductSubtitleContainer>
                <ProductName>BreastCancer</ProductName>
                <Line />
                <ProductSubtitleContainer>
                    <ProductSubtitle>  Определение рака молочной железы в полнослайдовых изображениях.
                        {'\u00A0'}
                        <MoreButton to="/breastCr">Подробнее</MoreButton>
                    </ProductSubtitle>
                </ProductSubtitleContainer>
                <ProductName>Covid-19</ProductName>
                <Line />
                <ProductSubtitleContainer>
                    <ProductSubtitle> Оценка иммунного ответа в цифровых гистологических изображениях легких.
                        {'\u00A0'}
                        <MoreButton to="/covid-19">Подробнее</MoreButton>
                    </ProductSubtitle>
                </ProductSubtitleContainer>
            </Container>
        </ProductsContainer>
    )
}
