import React from "react";
import Title from "../../../Components/Title";
import Mapa from "../Templates/Map";
import Reaptcha from "reaptcha";

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



const Contact: React.FC = () => {
    return(
        <ContactStyle>
            <Title titleWidth="40%" text="Entre em contato conosco!" />  
            <All>
                <Information>
                    <InformationIconText>
                        <InformationImg src={Localization} alt="" />
                        <InformationSpan>Rua Bonfim, 25 em Vila Amélia, </InformationSpan>
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
                            <InputArea type="text" placeholder="Insira seu nome"/>

                            <InputsP>Email</InputsP>
                            <InputArea type="text" placeholder="Insira seu email"/>

                            <InputsP>Telefone</InputsP>
                            <InputArea type="text" placeholder="(XX) XXXXX-XXXX"/>

                            <InputsP>Assunto</InputsP>
                            <InputArea type="text" placeholder="Digite o assunto da mensagem"/>

                            <InputsP>Mensagem</InputsP>
                            <InputAreaMensage type="text" placeholder="Digite a mensagem"/>

                            <CaptchaContainer>
                                <Reaptcha 
                                sitekey={"6Lef0HsiAAAAAPmdiuuS_Xz6_TA8fPzPzZdr9RC2"} />
                            </CaptchaContainer>

                            <ButtonContainer>
                                <Button>Enviar</Button>
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