import React, { useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  ToggleButtonGroup,
  ToggleButton,
  Autocomplete,
} from "@mui/material";
import { StyledButton, StyledTextField } from "../../Auth/styles";
import { FilterContainer } from "./styles";
import { StyledForm } from "../../Auth/Register/styles";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro";

function FilterModal() {
  const minDistance = 10;
  const [sex, setSex] = useState("");
  const [ageRange, setAgeRange] = useState([18, 65]);
  const [date, setDate] = useState<Dayjs | null>(null);
  const [dateRange, setDateRange] = useState<[Dayjs | null, Dayjs | null]>([
    null,
    null,
  ]);
  const [selectionType, setSelectionType] = useState<"single" | "range">(
    "single"
  );

  const handleSliderChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setAgeRange([
        Math.min(newValue[0], ageRange[1] - minDistance),
        ageRange[1],
      ]);
    } else {
      setAgeRange([
        ageRange[0],
        Math.max(newValue[1], ageRange[0] + minDistance),
      ]);
    }
  };

  const handleInputChange =
    (index: number) => (event: { target: { value: string } }) => {
      const newValue =
        event.target.value === "" ? 0 : Number(event.target.value);
      const newAgeRange = [...ageRange];
      newAgeRange[index] = newValue;
      setAgeRange(newAgeRange);
    };

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSex(event.target.value);
  };

  const handleDateChange = (newDate: Dayjs | null) => {
    setDate(newDate);
  };

  const handleDateRangeChange = (
    newDateRange: [Dayjs | null, Dayjs | null]
  ) => {
    setDateRange(newDateRange);
  };

  const handleSelectionTypeChange = (
    event: React.MouseEvent<HTMLElement>,
    newSelectionType: "single" | "range"
  ) => {
    if (newSelectionType !== null) {
      setSelectionType(newSelectionType);
    }
  };

  const organs = [
    'Сердце',
    'Мозг',
    'Почки',
    'Нос'
  ]

  return (
    <FilterContainer>
      <Box>
        <Typography id="modal-title" variant="h6" component="h2">
          Фильтры
        </Typography>

        {/* Фильтры */}
        <Box
          component="form"
          noValidate
          autoComplete="on"
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <StyledForm>
            <InputLabel id="demo-simple-select-label">Пол</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Sex"
              onChange={handleChange}
            >
              <MenuItem value="male">Мужской</MenuItem>
              <MenuItem value="female">Женский</MenuItem>
            </Select>
          </StyledForm>
          <Box sx={{ mt: 3 }}>
            <Typography gutterBottom>Диапазон возраста</Typography>
            <Slider
              value={ageRange}
              onChange={handleSliderChange}
              valueLabelDisplay="auto"
              min={18}
              max={65}
              sx={{ color: "#4500ff" }}
            />
            <Box sx={{ display: "flex", gap: 2 }}>
              <StyledTextField
                label="От"
                type="number"
                value={ageRange[0]}
                onChange={handleInputChange(0)}
              />
              <StyledTextField
                label="До"
                type="number"
                value={ageRange[1]}
                onChange={handleInputChange(1)}
              />
            </Box>
          </Box>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {" "}
            {/* Используем AdapterDayjs */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <ToggleButtonGroup
                value={selectionType}
                exclusive
                onChange={handleSelectionTypeChange}
                aria-label="date selection type"
                sx={{
                  margin: "5% auto 0 auto",
                }}
              >
                <ToggleButton value="single" aria-label="single date">
                  Выбранная дата
                </ToggleButton>
                <ToggleButton value="range" aria-label="date range">
                  Диапазон дат
                </ToggleButton>
              </ToggleButtonGroup>

              {selectionType === "single" ? (
                <DatePicker
                  sx={{
                    margin: '5% auto 5% auto'
                  }}
                  label="Выберите дату"
                  value={date}
                  onChange={handleDateChange}
                  slotProps={{ textField: { fullWidth: true } }} // Используем slotProps для кастомизации TextField
                />
              ) : (
                <DateRangePicker
                  sx={{
                    margin: '5% auto 5% auto'
                  }}
                  value={dateRange}
                  onChange={handleDateRangeChange}
                />
              )}
            </Box>
          </LocalizationProvider>
          <Autocomplete
            disablePortal
            options={organs}
            sx={{ 
              margin: '5% auto 5% auto',
              width: '100%'
            }}
            renderInput={(params) => <StyledTextField {...params} label="Органы" />}
          />
          <StyledButton variant="contained">Применить</StyledButton>
        </Box>
      </Box>
    </FilterContainer>
  );
}

export default FilterModal;
