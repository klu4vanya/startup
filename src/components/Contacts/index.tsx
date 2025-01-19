import React from 'react'
import { Container } from '../Products/styles'
import { AboutContainer, ContactContainer, ContactWrapper, FormContainer, FormTextFieldContainer, FormTitle, IconAndSpanContainer, MapContainer, StyledButton, StyledTextField } from './styles'
import { TextField } from '@mui/material'
import MailIcon from '../../assets/mail_icon.png'
import PhoneIcon from '../../assets/phone_icon.png'

export default function Contacts() {
    return (
        <ContactContainer>
            <FormTitle>Наши контакты</FormTitle>
            <ContactWrapper>
                <MapContainer>
                    <AboutContainer>
                        <span>Офис</span>
                        <IconAndSpanContainer>
                            <img
                                src={MailIcon}
                                style={{
                                    display: 'block',
                                    maxWidth: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    objectPosition: 'center'
                                }}
                            />
                            <span>caladrius.technology@gmail.com</span>
                        </IconAndSpanContainer>
                        <IconAndSpanContainer>
                            <img
                                src={PhoneIcon}
                                style={{
                                    display: 'block',
                                    maxWidth: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    objectPosition: 'center'
                                }}
                            />
                            <span>8 800 555-92-67</span>
                        </IconAndSpanContainer>
                    </AboutContainer>


                    <div style={{ position: 'relative', overflow: 'hidden' }}>
                        <a href="https://yandex.ru/maps/20729/bobruisk/?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>Бобруйск</a>
                        <a href="https://yandex.ru/maps/20729/bobruisk/house/ZkAYdwBpS0ICQFtpfX10eXVkZw==/?ll=29.179096%2C53.159120&utm_medium=mapframe&utm_source=maps&z=16.65" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>Западная улица, 1Ж — Яндекс Карты</a>
                        <iframe src="https://yandex.ru/map-widget/v1/?ll=29.179096%2C53.159120&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo1NDkyMTU2ODk3Em_QkdC10LvQsNGA0YPRgdGMLCDQnNCw0LPRltC70ZHRntGB0LrQsNGPINCy0L7QsdC70LDRgdGG0YwsINCR0LDQsdGA0YPQudGB0LosINCX0LDRhdC-0LTQvdGP0Y8g0LLRg9C70ZbRhtCwLCAx0JYiCg0pb-lBFcqiVEI%2C&z=16.65" width="100%" height="400px" allowFullScreen style={{ position: 'relative' }}>
                        </iframe>
                    </div>


                </MapContainer >
                <FormContainer>
                    <FormTextFieldContainer>
                        <StyledTextField
                            id="filled-basic"
                            label="Имя"
                            variant="filled"
                            fullWidth
                            style={{
                                marginBottom: '24px'
                            }}
                        />
                        <StyledTextField
                            id="filled-basic"
                            label="Телефон"
                            variant="filled"
                            fullWidth
                            style={{
                                marginBottom: '24px'
                            }}
                        />
                        <StyledButton >Заказать звонок</StyledButton>
                    </FormTextFieldContainer>

                </FormContainer>
            </ContactWrapper>
        </ContactContainer >
    )
}
