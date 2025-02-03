import { ProductsContainer, CategoryContainer, TitleCategory, Title } from '../../Products/styles'
import Dental_path_img from '../../../assets/dental_path_img.jpg'
import { ImagesContainer } from '../../Projects/Path AI/styles'
import { BreastSubtitle, Container } from '../BreastCancer/styles'


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
            <Container>
                <BreastSubtitle>
                   Программа распознавание новообразований ротовой полости. Программное обеспечение для пациентов и врачей-стоматологов. 
                </BreastSubtitle>
                <ImagesContainer>
                    <img 
                        src={Dental_path_img}
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
