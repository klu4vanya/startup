import React from 'react'
import Part1 from "../../../assets/логотип партнера 1.jpg";
import Part2 from "../../../assets/логотип парнера 2.jpg";
import Part3 from "../../../assets/логотип партнёра 3.jpg";
import Part4 from "../../../assets/логотип партнера 4.png";
import Part5 from "../../../assets/логотип партнера 5.jpg";
import Part6 from "../../../assets/логотип партнера 6.png";
import { MainFooterContainer, PartnerContainer, StatTitle, StyledCarousel } from '../styles';
import { Paper } from '@mui/material';

export default function Partners() {
    const PartnerData = [
        {
          image: Part1,
        },
        {
          image: Part2,
        },
        {
          image: Part3,
        },
        {
          image: Part4,
        },
        {
          image: Part5,
        },
        {
          image: Part6,
        },
      ];
  return (
    <MainFooterContainer>
        <StatTitle
          style={{
            color: "#4b0ffc",
            width: "60%",
            margin: "0 auto",
            textAlign: "center",
            paddingTop: "70px",
          }}
        >
          Партнеры
        </StatTitle>
        <PartnerContainer>
          {PartnerData.map((item, index) => (
            <img className="partners-images"
              key={index}
              src={item.image}
              style={{
                width: "150px",
                height: "auto",
              }}
            />
          ))}
          <StyledCarousel
            className="rounded-xl"
            autoPlay={true}
            navButtonsAlwaysInvisible
            sx={{ width: "100%", height: "auto",margin: '0'}}
          >
            {PartnerData.map((item, index) => (
              <div
                key={index}
                style={{
                  width: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "auto",
                }}
              >
                <Paper
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: 'auto',
                    width: 'auto',
                  }}
                >
                  <img src={item.image} alt={`Slide ${index}`} />
                </Paper>
              </div>
            ))}
          </StyledCarousel>
        </PartnerContainer>
      </MainFooterContainer>
  )
}
