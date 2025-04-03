import React, { useState } from "react";
import {
  CheckAllContainer,
  CheckAllTitle,
  DataContainer,
  FilterIcon,
  SearchContainer,
  SearchTitle,
  SearchWrapper,
  StyledTextfield,
} from "./styles";
import { Checkbox } from "@mui/material";
import { CardData } from "./CardData";
import card_img_1 from "../../assets/Cardimg_1.jpg";
import card_img_2 from "../../assets/Cardimg_2.jpg";
import FilterModal from "./Filter";
export const CardInfo = [
  {
    src: card_img_1,
    title: "4098678-9",
    subtitle:
      "На СО щеки в ретромолярной области справа и слева с переходом на АО - папулы белого цвета, сливающиеся в кружевной рисунок, выступающий над поверхностью СО; подлежащая СО не изменена",
    chip: ["Плоский лишай"],
    clinic: "Минская областная стоматологическая поликлиника",
  },
  {
    src: card_img_2,
    title: "9098678-9",
    subtitle:
      "в ретромолярной области слева, в области АО НЧ слева, язычной поверхности - образование в пределах здоровых тканей на ножке, 0,2х0,4 мм",
    chip: ["Плоский лишай"],
    clinic: "Минская областная стоматологическая поликлиника",
  },
];

export default function Archive() {
  const [openFilter, setOpenFilter] = useState(false);

  const toggleFilter = () => {
    setOpenFilter(!openFilter);
  };

  return (
    <div style={{ position: "relative", top: "195px" }}>
      <SearchContainer>
        <FilterIcon onClick={toggleFilter} />
        <SearchWrapper>
          <StyledTextfield></StyledTextfield>
          <SearchTitle>Поиск</SearchTitle>
        </SearchWrapper>
      </SearchContainer>
      <DataContainer>
        {openFilter && <FilterModal />}
        <CheckAllContainer>
          <Checkbox />
          <CheckAllTitle>Выбрать все</CheckAllTitle>
        </CheckAllContainer>
        {CardInfo.map((item, index) => (
          <CardData 
            {...item} 
            key={index}
            id={index} // Передаем индекс как ID карточки
          />
        ))}
      </DataContainer>
    </div>
  );
}
