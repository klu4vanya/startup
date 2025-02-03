import React from "react";
import {
  Amount,
  Card,
  CompContainer,
  Label,
  MainContainer,
  MainFooterContainer,
  MainSubitle,
  MainTitle,
  Overlay,
  PartnerContainer,
  StatisticsContainer,
  StatisticWrapper,
  StatSubitle,
  StatTitle,
  StyledCarousel,
  SubCompContainer,
  SubCompSubtitle,
  SubCompTitle,
  TestCard,
  TestContainer,
  TestTitle,
} from "./styles";
import page1 from "../../assets/mainPage1.png";
import page2 from "../../assets/mainPage2.jpg";
import page3 from "../../assets/mainPage3.jpg";
import page4 from "../../assets/mainPage4.jpg";
import page5 from "../../assets/mainPage5.jpg";
import page6 from "../../assets/covid19.jpg";
import Comp from "../../assets/Comp.png";
import Icon_1 from "../../assets/Icon1.png";
import Icon_2 from "../../assets/Icon2.png";
import Icon_3 from "../../assets/Icon3.png";

import {
  Container,
  Line,
  ProductName,
  ProductsContainer,
} from "../Products/styles";
import { Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Partners from "./Partners";

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
      title: "Рак молочной железы",
    },
    {
      image: page5,
      title: "Рак предстательной железы",
    },
    {
      image: page6,
      title: "Covid-19",
    },
  ];

  const CompData = [
    {
      title: "Облачный доступ",
      subtitle:
        "Онлайн решение не требует установки на ПК, доступно с любого браузера в любой точке света. Для использования необходим только интернет.",
    },
    {
      title: "Второе мнение и онлайн консультирование",
      subtitle:
        "Платформа обеспечивает вседоступность патоморфологической диагностики для пациентов различных регионов. Система позволяет консультировать оцифрованные гистологические препараты дистанционно в режиме реального времени.",
    },
    {
      title: "Аннотирование и искусственный интеллект",
      subtitle:
        "AI-инструменты позволяют ускорить диагностический поиск и предотвратить развитие заболеваний на ранних этапах. Встроенная система аннотации делает разработку наборов данных быстрой и удобной.",
    },
  ];
  const StatData = [
    {
      amount: "10+",
      subtitle: "разработанных инструментов AI",
    },
    {
      amount: "105+",
      subtitle: "аннотированных и подготовленных наборов данных",
    },
    {
      amount: "5+",
      subtitle: "клиник и больниц участвуют в программе партнерства",
    },
  ];
  return (
    <ProductsContainer
      style={{
        position: "relative",
        top: "190px",
      }}
    >
      <MainContainer>
        {data.map((item, index) => (
          <InfoCard key={index} image={item.image} label={item.label} />
        ))}
      </MainContainer>
      <Container
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <MainTitle>
          CALADRIUS – платформа анализа цифровых данных на основе искусственного
          интеллекта
        </MainTitle>
        <MainSubitle>
          CALADRIUS - сложный пакет медицинских инструментов и программного
          обеспечения, поддерживаемый одним поставщиком. Он охватывает каждый
          этап рабочего процесса врача патологоанатома, предоставляя решения для
          полного процесса оцифровки гистологических, цитологических и
          гематологических образцов и ведения случаев с помощью своих функций и
          возможностей. Система управления патологиями PANNORAMIC позволяет
          патологоанатому контролировать весь рутинный рабочий процесс,
          связанный с патологией, предоставляя необходимую информацию в удобном
          цифровом формате и помогая быстро и легко поставить точный диагноз, в
          то время как скорость и мощность диагностических сканеров PANNORAMIC
          идеально адаптируются к ежедневный рабочий процесс
          патологоанатомической лаборатории.
        </MainSubitle>
        <ProductName>Посмотреть тестовые случаи</ProductName>
        <Line />
      </Container>
      <TestContainer>
        {Testdata.map((item, index) => (
          <TestCard key={index}>
            <TestTitle>{item.title}</TestTitle>
            <img
              src={item.image}
              style={{ width: "300px", height: "168px", paddingBottom: "36px" }}
            />
          </TestCard>
        ))}
      </TestContainer>
      <TestContainer
        style={{
          height: "759px",
          backgroundColor: "#f2f2f2",
          justifyContent: "space-evenly",
        }}
      >
        <img
          className="compImage"
          src={Comp}
          style={{ width: "478px", height: "442px" }}
        />
        <CompContainer>
          {CompData.map((item, index) => (
            <SubCompContainer key={index}>
              <SubCompTitle>{item.title}</SubCompTitle>
              <SubCompSubtitle>{item.subtitle}</SubCompSubtitle>
            </SubCompContainer>
          ))}
        </CompContainer>
      </TestContainer>
      <StatisticWrapper>
        <Container>
          <StatTitle>Разработанные инструменты ИИ</StatTitle>
        </Container>
        <StatisticsContainer>
          {StatData.map((item, index) => (
            <TestContainer
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "normal",
                textAlign: "center",
              }}
              key={index}
            >
              <Amount>{item.amount}</Amount>
              <StatSubitle>{item.subtitle}</StatSubitle>
            </TestContainer>
          ))}
        </StatisticsContainer>
      </StatisticWrapper>
      <Partners />
    </ProductsContainer>
  );
};

export default Main;
