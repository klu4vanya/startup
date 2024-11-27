import { ProductsContainer, CategoryContainer, TitleCategory, Title, Subtitle, ProductName, Container, Line, ProductSubtitleContainer, ProductSubtitle } from "./styles";


export default function Products() {
    return (
        <ProductsContainer>
            <CategoryContainer>
                <TitleCategory>
                    <Title>Продукты</Title>
                    <Subtitle>Сервисы и программы в области цифровой патологоанатомии</Subtitle>
                </TitleCategory>
            </CategoryContainer>
            <Container>
                <ProductName>Pathology Assistant</ProductName>
                <Line/>
                <ProductSubtitleContainer>
                    <ProductSubtitle>Система поддержки принятия врачебных решений, продукт, оптимизирующий диагностический процесс, являющийся инструментом для дифференциальной диагностики и
                    объективизации диагностики, по аналогии с гистологическими атласами…</ProductSubtitle>
                </ProductSubtitleContainer>
                <ProductName>Digital Pathology Collaboration</ProductName>
                <Line/>
                <ProductSubtitleContainer>
                    <ProductSubtitle>Программное обеспечение являющееся аналогом multi-head микроскопа, позволяющее проводить образовательные мероприятия для патологов…</ProductSubtitle>
                </ProductSubtitleContainer>
            </Container>
        </ProductsContainer>
    )
}
