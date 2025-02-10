import React from "react";
import { Checkbox } from "@mui/material";
import {
  CardContainer,
  CardInfo,
  CardInfoSubitle,
  CardInfoTitle,
  ChipContainer,
  ClinicTitle,
  ImgAndDescContainer,
  MyImg,
  StyledChip,
} from "./styles";

interface CardDataProps {
  src: string;
  title: string;
  subtitle: string;
  chip: string[];
  clinic: string;
}

export const CardData: React.FC<CardDataProps> = ({
  src,
  title,
  subtitle,
  chip,
  clinic,
}) => {
  return (
    <CardContainer>
      <Checkbox />
      <ImgAndDescContainer>
        <MyImg src={src} />
        <CardInfo>
          <CardInfoTitle>{title}</CardInfoTitle>
          <CardInfoSubitle>{subtitle}</CardInfoSubitle>
          <ChipContainer>
            {chip.map((item, index) => (
              <StyledChip
                sx={{ borderRadius: "0" }}
                label={item}
                key={index}
              ></StyledChip>
            ))}
          </ChipContainer>
          <ClinicTitle>{clinic}</ClinicTitle>
        </CardInfo>
      </ImgAndDescContainer>
    </CardContainer>
  );
};
