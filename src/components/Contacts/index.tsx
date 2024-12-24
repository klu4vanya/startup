import React from 'react'
import { Container } from '../Products/styles'
import { AboutContainer, FormContainer, FormTextFieldContainer, FormTitle, MapContainer, StyledButton, StyledTextField } from './styles'
import { TextField } from '@mui/material'

export default function Contacts() {
    return (
        <Container
            style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}
        >
            <FormContainer>
                <FormTitle>Свяжитесь с нами!</FormTitle>
                <FormTextFieldContainer>
                    <StyledTextField
                        id="filled-basic"
                        label="Телефон"
                        variant="filled"
                        fullWidth
                        style={{
                            marginBottom: '24px'
                        }}
                    />
                    <StyledTextField
                        id="filled-basic"
                        label="Почта"
                        variant="filled"
                        fullWidth
                        style={{
                            marginBottom: '24px'
                        }}
                    />
                    <TextField
                        fullWidth
                        label="Ваше сообщение"
                        multiline
                        rows={4}
                        variant="outlined"
                        style={{
                            backgroundColor: '#f2f2f2',
                            marginBottom: '24px'
                        }}
                    />
                    <StyledButton >Подтвердить</StyledButton>
                </FormTextFieldContainer>

            </FormContainer>
            <MapContainer>
                <AboutContainer>
                    Общество с ограниченной ответственностью «Каладриус»<br />
                    Юридический адрес: 213830 Республика Беларусь, Могилевская область, г.Бобруйск, Первомайский район, улица Западная, д.1Ж<br />
                    Почтовый адрес: 213830 Республика Беларусь, Могилевская область, г.Бобруйск, Первомайский район, улица Западная, д.1Ж<br />
                </AboutContainer>


                <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <a href="https://yandex.ru/maps/20729/bobruisk/?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>Бобруйск</a>
                    <a href="https://yandex.ru/maps/20729/bobruisk/house/ZkAYdwBpS0ICQFtpfX10eXVkZw==/?ll=29.179096%2C53.159120&utm_medium=mapframe&utm_source=maps&z=16.65" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>Западная улица, 1Ж — Яндекс Карты</a>
                    <iframe src="https://yandex.ru/map-widget/v1/?ll=29.179096%2C53.159120&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo1NDkyMTU2ODk3Em_QkdC10LvQsNGA0YPRgdGMLCDQnNCw0LPRltC70ZHRntGB0LrQsNGPINCy0L7QsdC70LDRgdGG0YwsINCR0LDQsdGA0YPQudGB0LosINCX0LDRhdC-0LTQvdGP0Y8g0LLRg9C70ZbRhtCwLCAx0JYiCg0pb-lBFcqiVEI%2C&z=16.65" width="100%" height="400px" allowFullScreen style={{ position: 'relative' }}>
                    </iframe>
                </div>


            </MapContainer >
        </Container >
    )
}
