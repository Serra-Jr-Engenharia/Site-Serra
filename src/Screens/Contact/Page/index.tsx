import React, { useState } from "react";
import Mapa from "../Templates/Map";

import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

import ScheduleIMG from "../../../Assets/Contact/agenda.svg"; 
import Email from "../../../Assets/Contact/email.svg"; 
import Localization from "../../../Assets/Contact/localizacao.svg"; 
import Phone from "../../../Assets/Contact/telefone.svg"; 

import { Information,
     MapBox, 
     Form, 
     Inputs, 
     All, 
     InputsP, 
     InputArea, 
     Button,
     InputAreaMensage,
     InformationImg,
     InformationSpan,
     FormContainer,
     MapBoxContainer,
     ContactStyle,
     ButtonContainer,
     InformationIconText,
     CaptchaContainer
} from './style';
import GradientTitle from "../../../Components/GradientTitle";

const Contact: React.FC = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [captchaKey, setCaptchaKey] = useState('')

    const setCaptchaValue = (value: any) => {
        setCaptchaKey(value)
    }

    const sendHandler = (e: any) => {
        e.preventDefault()

        if(name === '' || email === '' || phone === '' || subject === '' || message === '' || captchaKey === ''){
            alert("Preencha todos os campos")
            return
        }

        const templateParams = {
            from_name: name,
            message: message,
            from_email: email,
            from_phone: phone,
            subject: subject,
            'g-recaptcha-response': captchaKey
        }

        emailjs.send('service_al540kd', 'template_4eqf2kl', templateParams, 'HRfoO7P69RR47ZQ0c', )
        .then((response) => {
            alert("Email enviado")
            setName('')
            setEmail('')
            setPhone('')
            setSubject('')
            setMessage('')
        }, (err) => {
            alert("Aconteceu um erro")
            console.log("Erro: ", err)
        })
        
    }

    return(
        <ContactStyle>
            <GradientTitle titleWidth="40%" text="Entre em contato conosco!" />
            <All>
                <Information>
                    <InformationIconText>
                        <InformationImg src={Localization} alt="" />
                        <InformationSpan>Rua Bonfim n°25 - Vila Amelia, Nova Friburgo - RJ, 28625-570</InformationSpan>
                    </InformationIconText>
                    <InformationIconText>
                        <InformationImg src={Phone} alt="" />
                        <InformationSpan>(22) 2533-2265</InformationSpan>
                    </InformationIconText>
                    <InformationIconText>
                        <InformationImg src={Email} alt="" />
                        <InformationSpan>serrajr@iprj.uerj.br</InformationSpan>
                    </InformationIconText>
                    <InformationIconText>
                        <InformationImg src={ScheduleIMG} alt="" />
                        <InformationSpan>Horário de atendimento: <br />
                        Segunda a Sexta, das 09hrs <br />
                        às 17hrs.</InformationSpan>
                    </InformationIconText>  
                </Information>


                <FormContainer>
                    <Form>
                        <Inputs>
                            <InputsP>Nome</InputsP>
                            <InputArea 
                                type="text" 
                                placeholder="Insira seu nome"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <InputsP>Email</InputsP>
                            <InputArea 
                                type="text" 
                                placeholder="Insira seu email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <InputsP>Telefone</InputsP>
                            <InputArea 
                                type="text" 
                                placeholder="(XX) XXXXX-XXXX" 
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />

                            <InputsP>Assunto</InputsP>
                            <InputArea 
                                type="text" 
                                placeholder="Digite o assunto"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />

                            <InputsP>Mensagem</InputsP>
                            <InputAreaMensage 
                                type="text" 
                                placeholder="Digite a mensagem"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />

                            <CaptchaContainer>
                                <ReCAPTCHA
                                    sitekey={'6LftIRYjAAAAABYVGiNblWwK1r4oIrUQJ0Lr_EUq'}
                                    onChange={setCaptchaValue}
                                />
                            </CaptchaContainer>

                            <ButtonContainer>
                                <Button onClick={(e) => sendHandler(e)}>Enviar</Button>
                            </ButtonContainer>
                        </Inputs>
                    </Form>
                </FormContainer>
            </All>

            <MapBoxContainer>
                <MapBox>
                    <Mapa />
                </MapBox>
            </MapBoxContainer>
            
        </ContactStyle>
    );
}

export default Contact