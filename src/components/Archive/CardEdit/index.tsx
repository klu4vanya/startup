import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { StyledButton, StyledTextField } from "../../Auth/styles";
import { CardEditContainer } from "./styles";
import { Title } from "../../Products/styles";
import { interFont } from '../../../fonts/font'
import jsPDF from "jspdf";


const CardInfo = {
  title: "123675",
  subtitle:
    "Опухоль пищевода, диагностированная как низкодифференцированная карцинома с некоторой нейроэндокринной дифференцировкой.",
  //   chip: ["Меланома", "Невус с диспалазией", "Синий невус"],
  clinic: "ГУ РНПЦ Омр им. Н. Н. Александрова",
};

const ConclusionDetails = {
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
  description_of_macro: "",
  subtitle: "",
  recomendations: "",
};

const assignValues = (
  source: Record<string, string>,
  target: Record<string, string>
) => {
  const result = { ...target };

  Object.keys(result).forEach((key) => {
    if (source.hasOwnProperty(key)) {
      result[key] = source[key];
    } else {
      result[key] = "";
    }
  });

  return result;
};

const CreatePdfForm = () => {
  const [formData, setFormData] = useState<Record<string, string>>(
    assignValues(CardInfo, ConclusionDetails)
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
    // Заголовок документа
    doc.setFontSize(18);
    doc.text("Заключение", 10, 10);

    // Добавление данных из formData
    let yPosition = 20; // Начальная позиция по Y
    Object.entries(formData).forEach(([key, value], index) => {
      doc.setFontSize(12);
      doc.text(`${key}: ${value}`, 10, yPosition + index * 10); // Добавляем текст
    });

    // Сохранение PDF
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
        <Title
          style={{
            margin: "5%",
          }}
        >
          Заключение
        </Title>
        {Object.keys(formData).map((item, index) => (
          <StyledTextField
            key={index}
            sx={{
              width: "50%!important",
            }}
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
