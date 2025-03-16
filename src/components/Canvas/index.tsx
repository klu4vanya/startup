import React, { useCallback } from "react";
import { AssetRecordType, Editor, Tldraw } from "tldraw";
import "tldraw/tldraw.css";
import case1 from "../../assets/Breast_cancer_img.jpg";
import {
  CanvasContainer,
  InfoContainer,
  SummaryContainer,
  SummaryTitle,
  SummaryValue,
  ValueContainer,
} from "./styles";
import { CardInfo } from "../Archive";
import {
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

export default function Canvas() {
  const translate = {
    title: "Номер случая",
    subtitle: "Описание",
    chip: "Диагноз",
    clinic: "Клиника",
  };
  const translatedItems = Object.keys(CardInfo[0]).map((item) => {
    const key = item as keyof typeof translate;
    return translate[key] || item;
  });
  const handleMount = useCallback((editor: Editor) => {
    const assetId = AssetRecordType.createId();
    const imageWidth = 1200;
    const imageHeight = 675;
    editor.createAssets([
      {
        id: assetId,
        type: "image",
        typeName: "asset",
        props: {
          name: "case1",
          src: case1,
          w: imageWidth,
          h: imageHeight,
          mimeType: "image/jpg",
          isAnimated: false,
        },
        meta: {},
      },
    ]);
    editor.createShape({
      type: "image",
      x: (window.innerWidth - imageWidth) / 2,
      y: (window.innerHeight - imageHeight) / 2,
      props: {
        assetId,
        w: imageWidth,
        h: imageHeight,
      },
    });
  }, []);
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        top: "190px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Tldraw onMount={handleMount} />

      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {Object.entries(CardInfo[0])
              .filter(([key]) => key !== "src")
              .map(([key, value], index) => (
                <TableRow key={index}>
                  <TableCell>{translatedItems[index + 1]}</TableCell>{" "}
                  <TableCell>
                    {Array.isArray(value) ? value.join(", ") : value}{" "}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
