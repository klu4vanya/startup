import { ProductsContainer, CategoryContainer, TitleCategory, Title, Container, ProductSubtitle } from '../../Products/styles'
import Dental_path_img from '../../../assets/dental_path_img.jpg'
import { ImagesContainer } from '../../Projects/Path AI/styles'


export default function DentalPath() {
    return (
        <ProductsContainer>
            <CategoryContainer>
                <TitleCategory>
                    <Title
                        style={{
                            width: 'auto'
                        }}
                    >DentalPath</Title>
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
                   Программа распознавание новообразований ротовой полости. Программное обеспечение для пациентов и врачей-стоматологов. 
                </ProductSubtitle>
                <ImagesContainer>
                    <img 
                        src={Dental_path_img}
                    />
                </ImagesContainer>
            </Container>
        </ProductsContainer>
    )
}
