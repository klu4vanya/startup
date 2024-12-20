import React from 'react'
import { CheckAllContainer, CheckAllTitle, DataContainer, FilterIcon, SearchContainer, SearchTitle, SearchWrapper, StyledTextfield } from './styles'
import { Checkbox } from '@mui/material'
import { CardData } from './CardData'
import card_img_1 from '../../assets/Cardimg_1.jpg'
import card_img_2 from '../../assets/Cardimg_2.jpg'
const CardInfo = [
    {
        src: card_img_1,
        title: '123675',
        subtitle: 'Опухоль пищевода, диагностированная как низкодифференцированная карцинома с некоторой нейроэндокринной дифференцировкой.',
        chip: ['Меланома', 'Невус с диспалазией', 'Синий невус'],
        clinic: 'ГУ РНПЦ Омр им. Н. Н. Александрова'
    },
    {
        src: card_img_2,
        title: '829605',
        subtitle: 'Изменяющийся невус с темной центральной областью на коже левого нижнего века.',
        chip: ['Меланома', 'Невус с диспалазией', 'Синий невус'],
        clinic: 'ГУ РНПЦ Омр им. Н. Н. Александрова'
    }
]


export default function Archive() {
    return (
        <div>
            <SearchContainer>
                <FilterIcon />
                <SearchWrapper>
                    <StyledTextfield></StyledTextfield>
                    <SearchTitle>Поиск</SearchTitle>
                </SearchWrapper>
            </SearchContainer>
            <DataContainer>
                <CheckAllContainer>
                    <Checkbox />
                    <CheckAllTitle>Выбрать все</CheckAllTitle>
                </CheckAllContainer>
                {CardInfo.map((item, index) => (
                    <CardData {...item} key={index}/>
                ))}
            </DataContainer>
        </div>
    )
}
