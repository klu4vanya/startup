import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { StyledButton, StyledTextField } from "../../Auth/styles";
import { CardEditContainer } from "./styles";
import { Title } from "../../Products/styles";
import { interFont } from "../../../fonts/font";
import jsPDF from "jspdf";
import { useParams } from "react-router-dom";

// Определяем интерфейс для данных карточки
interface CardData {
  title: string;
  subtitle: string;
  clinic: string;
  name: string;
  date_of_birth: string;
  sex: string;
  address: string;
  date_of_biomaterial: string;
  how_to_take_material: string;
  date_of_delivery: string;
  time_of_delivery: string;
  date_of_start_gist: string;
  time_of_start_gist: string;
  count_of_organs: string;
  name_of_reactions: string;
  reserch_organ: string;
  localization: string;
  chip: string[];
  macro_desc: string;
  micro_desc: string;
  description_of_macro: string;
  recomendations: string;
  doc: string;
}

interface ConclusionDetailsType {
  [key: string]: string | string[];
  clinic: string;
  name: string;
  title: string;
  date_of_birth: string;
  sex: string;
  address: string;
  date_of_biomaterial: string;
  how_to_take_material: string;
  date_of_delivery: string;
  time_of_delivery: string;
  date_of_start_gist: string;
  time_of_start_gist: string;
  count_of_organs: string;
  name_of_reactions: string;
  reserch_organ: string;
  localization: string;
  chip: string[];
  macro_desc: string;
  micro_desc: string;
  description_of_macro: string;
  subtitle: string;
  recomendations: string;
  doc: string;
}

const CardInfo: CardData[] = [
  {
    title: "4098678-9",
    subtitle: "На СО щеки в ретромолярной области справа и слева...",
    clinic: "Минская областная стоматологическая поликлиника",
    name: "Иванов Иван Иванович",
    date_of_birth: "20.02.1960",
    sex: "мужской",
    address: "Минская обл. Пуховичский район...",
    date_of_biomaterial: "06.03.2024",
    how_to_take_material: "операционный материал",
    date_of_delivery: "11.03.2024",
    time_of_delivery: "11.03.2024, 11:00",
    date_of_start_gist: "12.03.2024",
    time_of_start_gist: "12.03.2024, 10:11:00",
    count_of_organs: "2",
    name_of_reactions: "г/э; ИГХ с АТ к вирусу Эпштейна-Барр",
    reserch_organ: "нижняя губа",
    localization: "СО из области переходной складки...",
    chip: ["плоский лишай СОПР", "Плоский лишай"],
    macro_desc: "1.43678-9 (Прочие) серый пластинчатый 1,5*1см",
    micro_desc: "",
    description_of_macro: "",
    recomendations: "",
    doc: "Петров Дмитрий Станиславович",
  },
  {
    title: "9098678-9",
    subtitle: "в ретромолярной области слева...",
    clinic: "Минская областная стоматологическая поликлиника",
    name: "Иванов Сергей Антонович",
    date_of_birth: "21.02.1989",
    sex: "мужской",
    address: "Минская обл. Пуховичский район...",
    date_of_biomaterial: "06.03.2025",
    how_to_take_material: "инцизионная биопсия",
    date_of_delivery: "14.03.2025",
    time_of_delivery: "11.03.2025, 10:00",
    date_of_start_gist: "12.02.2025",
    time_of_start_gist: "12.03.2025, 10:09:00",
    count_of_organs: "1",
    name_of_reactions: "г/э",
    reserch_organ: "язык",
    localization: "язычная поверхность АО НЧ слева...",
    chip: ["плоский лишай СОПР", "лейкоплакия"],
    macro_desc: "1.43678-9 (Прочие) серый пластинчатый 1,5*1,5 см",
    micro_desc: "",
    description_of_macro: "",
    recomendations: "",
    doc: "Григорьев Дмитрий Иванович",
  },
];

const ConclusionDetails: ConclusionDetailsType = {
  clinic: "",
  name: "",
  title: "",
  date_of_birth: "",
  sex: "",
  address: "",
  date_of_biomaterial: "",
  how_to_take_material: "",
  date_of_delivery: "",
  time_of_delivery: "",
  date_of_start_gist: "",
  time_of_start_gist: "",
  count_of_organs: "",
  name_of_reactions: "",
  reserch_organ: "",
  localization: "",
  chip: [],
  macro_desc: "",
  micro_desc: "",
  description_of_macro: "",
  subtitle: "",
  recomendations: "",
  doc: "",
};

const assignValues = (source: CardData, target: ConclusionDetailsType): ConclusionDetailsType => {
  const result: ConclusionDetailsType = { ...target };

  (Object.keys(result) as Array<keyof CardData>).forEach((key) => {
    if (key in source) {
      if (key === 'chip') {
        result[key] = Array.isArray(source[key]) ? source[key] : [];
      } else {
        result[key] = typeof source[key] === 'string' ? source[key] : "";
      }
    }
  });

  return result;
};

const CreatePdfForm = () => {
  const { id } = useParams<{ id: string }>();
  const cardIndex = id ? parseInt(id) : 0;
  const selectedCard = CardInfo[cardIndex];

  const [formData, setFormData] = useState<ConclusionDetailsType>(
    assignValues(selectedCard, ConclusionDetails)
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const isFormValid = () => {
    return Object.values(formData).every((value) => Boolean(value));
  };

  const handleCreatePdf = () => {
    const doc = new jsPDF();
    doc.addFileToVFS("Inter-Italic-VariableFont_opsz,wght.ttf", interFont);
    doc.addFont("Inter-Italic-VariableFont_opsz,wght.ttf", "Inter", "normal");
    doc.setFont("Inter");
    
    doc.setFontSize(18);
    doc.text("Заключение", 10, 10);

    let yPosition = 20;
    Object.entries(formData).forEach(([key, value], index) => {
      doc.setFontSize(12);
      doc.text(`${key}: ${value}`, 10, yPosition + index * 10);
    });

    doc.save("Заключение.pdf");
  };

  return (
    <CardEditContainer>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Title style={{ margin: "5%" }}>Заключение</Title>
        {Object.keys(formData).map((item, index) => (
          <StyledTextField
            key={index}
            sx={{ width: "50%!important" }}
            multiline
            required
            id={item}
            name={item}
            label={item}
            value={formData[item]}
            onChange={handleChange}
          />
        ))}
        <StyledButton
          variant="contained"
          disabled={!isFormValid()}
          onClick={handleCreatePdf}
        >
          Создать заключение PDF
        </StyledButton>
      </Box>
    </CardEditContainer>
  );
};

export default CreatePdfForm;