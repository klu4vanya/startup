import {
  ProductsContainer,
  CategoryContainer,
  TitleCategory,
  Title,
} from "../../Products/styles";
import Dental_path_img from "../../../assets/dental_path_img.jpg";
import { ImagesContainer } from "../../Projects/Path AI/styles";
import { BreastSubtitle, Container } from "../BreastCancer/styles";

export default function DentalPath() {
  return (
    <ProductsContainer>
      <CategoryContainer>
        <TitleCategory>
          <Title
            style={{
              width: "auto",
            }}
          >
            DentalPath
          </Title>
        </TitleCategory>
      </CategoryContainer>
      <Container>
        <BreastSubtitle>
          Цифровая система распознавания новообразований ротовой полости — это
          инновационное программное обеспечение, разработанное для пациентов и
          врачей-стоматологов. Она предназначена для раннего выявления и
          диагностики различных патологий, таких как опухоли, предраковые
          состояния и другие изменения слизистой оболочки полости рта. С помощью
          современных алгоритмов искусственного интеллекта программа анализирует
          изображения, полученные в ходе осмотра, и предоставляет врачу
          подробный отчет с возможными диагнозами. Это позволяет своевременно
          начать лечение и повышает точность диагностики. Для пациентов
          программа предлагает удобный интерфейс, который помогает отслеживать
          состояние здоровья и получать рекомендации по уходу за полостью рта.
          Программное обеспечение легко интегрируется в работу стоматологических
          клиник, делая процесс диагностики более эффективным и доступным.
        </BreastSubtitle>
        <ImagesContainer>
          <img
            src={Dental_path_img}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </ImagesContainer>
      </Container>
    </ProductsContainer>
  );
}
